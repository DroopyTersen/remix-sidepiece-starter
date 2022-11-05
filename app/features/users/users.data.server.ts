import {
  GetUserByIdDocument,
  GetUsersByUsernameDocument,
  InsertUserDocument,
} from "~/.gql/graphql.types";
import { GqlClient } from "~/toolkit/http/createGqlClient";

export const getUserByUsername = async (
  gqlClient: GqlClient,
  username: string
) => {
  let data = await gqlClient.request(GetUsersByUsernameDocument, { username });
  return data?.users?.[0];
};

export const getUserById = async (gqlClient: GqlClient, id: string) => {
  let data = await gqlClient.request(GetUserByIdDocument, { id });
  return data?.user;
};

export const insertUser = async (
  gqlClient: GqlClient,
  { name, username, photo }
) => {
  let data = await gqlClient.request(InsertUserDocument, {
    name,
    username,
    photo,
  });
  return data?.user;
};
