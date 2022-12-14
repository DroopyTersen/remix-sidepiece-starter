import { createUserGqlClient } from "~/common/hasura.server";
import { GqlClient } from "~/toolkit/http/createGqlClient";
import { authSession } from "./authSession.server";

/** Require a user to be logged into hit your loader. Returns the auth session data. */
export const requireAuthenticatedLoader = async (request: Request) => {
  let sessionData = await authSession.require(request);
  let gqlClient = createUserGqlClient(sessionData.hasuraToken);

  return {
    userId: sessionData.userId,
    gqlClient,
  };
};

export interface AuthenticatedAction {
  /** Used when multiple forms submit to the same action */
  intent?: string;
  /** The submitted form values as FormData */
  formData: FormData;
  /** Will be hydrated if content-type is application/json, otherwise null. */
  jsonData: any;
  /** Looks for either a querystring params or FormData for a value. */
  returnTo?: string;
  /** Pulls the current userId out of session data */
  userId: string;
  /** A gqlClient for the current user's access token */
  gqlClient: GqlClient;
}

/** Require a user to be logged into hit your action */
export const requireAuthenticatedAction = async (
  request: Request
): Promise<AuthenticatedAction> => {
  let userSession = await authSession.require(request);
  let formData: FormData = new FormData();
  let intent = "";
  let jsonData = null;
  if (request.headers.get("Content-Type") === "application/json") {
    jsonData = await request.json();
  } else {
    formData = await request.formData();
  }
  let returnTo =
    new URL(request.url)?.searchParams.get("returnTo") ||
    formData?.get("returnTo");
  if (formData && typeof formData?.get("intent") === "string") {
    intent = formData.get("intent") + "";
  }

  let gqlClient = createUserGqlClient(userSession.hasuraToken);

  return {
    intent,
    jsonData,
    formData,
    returnTo: returnTo as string,
    gqlClient,
    userId: userSession.userId,
  };
};
