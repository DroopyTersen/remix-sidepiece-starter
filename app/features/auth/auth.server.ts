import { createCookieSessionStorage, redirect } from "@remix-run/node";
import { createUserGqlClient } from "~/common/hasura.server";

const SESSION_SECRET = "dotadda-app-is-great";
const AUTH_COOKIE = "dotadda-auth-admin";

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
  userId: string,
  hasuraToken: string,
  redirectTo: string
) {
  const session = await storage.getSession();
  session.set("access_token", hasuraToken);
  session.set("user_id", userId);
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
  const userId = session.get("user_id");
  const access_token = session.get("access_token");
  if (!userId || !access_token) return null;

  return {
    userId,
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
