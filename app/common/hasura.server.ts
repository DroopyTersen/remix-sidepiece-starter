import jwt from "jsonwebtoken";
import { createGraphQLClient } from "~/toolkit/http/createGqlClient";
import { getEnvVar } from "~/toolkit/remix/envVars.server";

const ENDPOINT = getEnvVar("GRAPHQL_ENDPOINT");

export const createAnonymousGqlClient = () => {
  return createGraphQLClient(ENDPOINT);
};

export const createAdminGqlClient = () => {
  return createGraphQLClient(ENDPOINT, {
    staticHeaders: {
      "x-hasura-admin-secret": getEnvVar("HASURA_ADMIN_SECRET"),
    },
  });
};

export const createUserGqlClient = (token: string) => {
  return createGraphQLClient(ENDPOINT, {
    access_token: token,
  });
};

interface UserPayload {
  id: string;
  name?: string;
  username: string;
}

export const signHasuraToken = (user: UserPayload) => {
  let claims: any = fillHasuraClaims(user);
  return jwt.sign(claims, getEnvVar("HASURA_JWT_SECRET"), {
    expiresIn: "40 days",
  });
};

export const validateToken = async (token: string) => {
  return jwt.verify(token, getEnvVar("HASURA_JWT_SECRET"));
};

export const tryValidateToken = async (token: string) => {
  try {
    return await validateToken(token);
  } catch (err) {
    return null;
  }
};

export function fillHasuraClaims({ id, name, username }: UserPayload) {
  let role = "user";

  return {
    "https://hasura.io/jwt/claims": {
      "x-hasura-allowed-roles": [role],
      "x-hasura-default-role": role,
      "x-hasura-user-id": id,
    },
    username,
    name: name || username,
    id,
  };
}
