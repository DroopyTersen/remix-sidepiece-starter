import { LoaderFunction } from "@remix-run/node";
import { createAdminGqlClient, signHasuraToken } from "~/common/hasura.server";
import { createUserSession } from "~/features/auth/auth.server";
import {
  fetchGithubAccessToken,
  fetchGithubProfile,
} from "~/features/auth/githubAuth.server";
import {
  getUserByUsername,
  insertUser,
} from "~/features/users/users.data.server";
import { getAuthRedirectUri } from "~/toolkit/http/url.utils";

export const loader: LoaderFunction = async ({ request }) => {
  let searchParams = new URL(request.url).searchParams;
  let code = searchParams.get("code");
  let state = searchParams.get("state");
  let returnTo = searchParams.get("returnTo");
  let error = searchParams.get("error");
  let error_description = searchParams.get("error_description");

  if (error) {
    throw new Error(`${error} - ${error_description}`);
  }
  const redirect_uri = getAuthRedirectUri(returnTo + "", "/api/auth-callback");
  console.log("🚀 | constloader:LoaderFunction= | redirect_uri", redirect_uri);

  if (!code || !state) {
    throw new Error("Missing code and status query params");
  }
  console.log("🚀 | constloader:LoaderFunction= | code", code);
  let adminClient = createAdminGqlClient();
  let githubTokenResult = await fetchGithubAccessToken(code, redirect_uri);
  // console.log("🚀 | consthandler:Handler= | tokenResult", tokenResult);
  if (!githubTokenResult) {
    throw new Error("Unble to get access token");
  }

  let githubProfile = await fetchGithubProfile(githubTokenResult.access_token);

  let user = await getUserByUsername(adminClient, githubProfile.login);
  if (!user) {
    user = await insertUser(adminClient, {
      name: githubProfile.name,
      username: githubProfile.login,
      photo: githubProfile.avatar_url,
    });
  }
  let hasuraToken = await signHasuraToken(user);

  return createUserSession(user, hasuraToken, returnTo);
};
