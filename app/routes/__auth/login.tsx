import { ActionFunction, redirect } from "@remix-run/node";
import { Form, useSearchParams } from "@remix-run/react";
import React, { useEffect } from "react";
import { getGitHubLoginUrl } from "~/features/auth/githubAuth.server";
import { getAuthRedirectUri } from "~/toolkit/http/url.utils";

export const action: ActionFunction = async ({ request }) => {
  let formData = await request.formData();
  let returnTo = (formData.get("returnTo") || new URL(request.url).origin) + "";
  if (returnTo.startsWith("/")) {
    returnTo = new URL(returnTo, new URL(request.url).origin).href;
  }
  const redirect_uri = getAuthRedirectUri(returnTo + "", "/api/auth-callback");
  console.log("🚀 | constaction:ActionFunction= | redirect_uri", redirect_uri);

  let { url } = await getGitHubLoginUrl(redirect_uri);
  console.log("🚀 | constaction:ActionFunction= | url", url);
  return redirect(url);
};

export default function () {
  return <LoginButton />;
}

export function LoginButton() {
  let [searchParams] = useSearchParams();
  let [returnTo, setreturnTo] = React.useState<string>(
    searchParams.get("returnTo") || ""
  );

  useEffect(() => {
    setreturnTo((prev) => {
      if (prev.startsWith("/")) {
        return new URL(prev, window.location.origin).href;
      } else return prev;
    });
  }, [searchParams]);

  return (
    <div>
      <Form method="post" action="/login">
        <input type="hidden" name="returnTo" value={returnTo}></input>
        <button className="btn btn-primary">Login</button>
      </Form>
    </div>
  );
}
