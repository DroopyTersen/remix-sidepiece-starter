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
