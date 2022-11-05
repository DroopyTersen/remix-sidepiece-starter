import { createCookieSessionStorage, redirect } from "@remix-run/node";
import { createUserGqlClient } from "~/common/hasura.server";
import { getEnvVar } from "~/toolkit/remix/envVars.server";
import { tryParseJson } from "~/toolkit/utils/tryParseJson";
import { AppUser } from "../users/users.types";

const SESSION_SECRET =
  getEnvVar("SESSION_SECRET") || getEnvVar("HASURA_JWT_SECRET");
const AUTH_COOKIE = "__droopy_session";

const storage = createCookieSessionStorage({
  cookie: {
    name: AUTH_COOKIE,
    // normally you want this to be `secure: true`
    // but that doesn't work on localhost for Safari
    // https://web.dev/when-to-use-local-https/
    secure: process.env.NODE_ENV === "production",
    secrets: [SESSION_SECRET],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 23,
    httpOnly: false,
  },
});

export async function createUserSession(
  user: AppUser,
  hasuraToken: string,
  redirectTo: string
) {
  console.log("🚀 | createUserSession", user);
  const session = await storage.getSession();
  session.set("access_token", hasuraToken);
  session.set("user", JSON.stringify(user));
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  });
}

function getUserSession(request: Request) {
  return storage.getSession(request.headers.get("Cookie"));
}

export async function getUserFromSession(request: Request) {
  const session = await getUserSession(request);
  const user = tryParseJson<AppUser>(session.get("user"));
  const access_token = session.get("access_token");
  if (!user || !access_token) return null;

  return {
    user,
    access_token,
  };
}

export type UserSession = Awaited<ReturnType<typeof requireUser>>;

export async function requireUser(request: Request, returnTo: string = "") {
  let { pathname, search } = new URL(request.url);
  if (!returnTo) returnTo = `${pathname}${search}`;
  let user = await getUserFromSession(request);
  if (!user) {
    const searchParams = new URLSearchParams([["returnTo", returnTo]]);
    throw redirect(`/login?${searchParams}`);
  }
  return user;
}

export async function logout(request: Request) {
  const session = await getUserSession(request);
  return redirect("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session),
    },
  });
}

export function getGraphQLClient(userSession: UserSession) {
  if (!userSession) return null;

  return createUserGqlClient(userSession?.access_token);
}
