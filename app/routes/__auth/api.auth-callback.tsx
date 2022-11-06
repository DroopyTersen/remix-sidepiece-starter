import { LoaderFunction } from "@remix-run/node";
import { createAdminGqlClient, signHasuraToken } from "~/common/hasura.server";
import { authSession } from "~/features/auth/authSession.server";
// import { createUserSession } from "~/features/auth/auth.server.dotadda";
import {
  fetchGithubAccessToken,
  fetchGithubProfile,
} from "~/features/auth/githubAuth.server";
import {
  getUserByUsername,
  insertUser,
} from "~/features/users/users.data.server";
import { AppUser } from "~/features/users/users.types";
import { getAuthRedirectUri } from "~/toolkit/http/url.utils";

export const loader: LoaderFunction = async ({ request }) => {
  let searchParams = new URL(request.url).searchParams;
  let code = searchParams.get("code");
  let state = searchParams.get("state");
  let returnTo = searchParams.get("returnTo") || "/";
  let error = searchParams.get("error");
  let error_description = searchParams.get("error_description");

  if (error) {
    throw new Error(`${error} - ${error_description}`);
  }
  const redirect_uri = getAuthRedirectUri(returnTo + "", "/api/auth-callback");
  if (!code || !state) {
    throw new Error("Missing code and status query params");
  }

  let adminClient = createAdminGqlClient();
  let githubTokenResult = await fetchGithubAccessToken(code, redirect_uri);
  if (!githubTokenResult) {
    throw new Error("Unble to get access token");
  }

  let githubProfile = await fetchGithubProfile(githubTokenResult.access_token);
  if (!githubProfile?.login) {
    throw new Error("Unable to get github login (username)");
  }
  let user: AppUser | undefined | null = await getUserByUsername(
    adminClient,
    githubProfile?.login
  );
  if (!user) {
    user = await insertUser(adminClient, {
      name: githubProfile.name,
      username: githubProfile.login,
      photo: githubProfile.avatar_url,
    });
  }
  if (!user) {
    throw Error("Unable find existing user or create a new user");
  }
  let hasuraToken = signHasuraToken(user);

  return authSession.create({ userId: user.id, hasuraToken }, returnTo);
};
