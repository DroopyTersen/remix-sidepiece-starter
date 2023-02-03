import z from "zod";
import {
  CreateOrgAndTeamDocument,
  GetUserByIdDocument,
  GetUserOrgAndTeamMembershipsDocument,
  GetUsersByUsernameDocument,
  InsertUserDocument,
  UpdateUserDocument,
  UsersInsertInput,
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

/** Creates a User,Team, and Org if necessary */
export const insertUserAndEnsureOrgAndTeam = async (
  gqlClient: GqlClient,
  { name, username, photo }: UsersInsertInput
) => {
  let data = await gqlClient.request(InsertUserDocument, {
    name,
    username,
    photo,
  });
  let user = data?.user;

  if (!user?.id) throw new Error("Unable to create new user");

  let memberships = await gqlClient.request(
    GetUserOrgAndTeamMembershipsDocument,
    { userId: user.id }
  );
  let hasOrg = memberships?.user?.orgMemberships
    ? memberships?.user?.orgMemberships?.length > 0
    : false;

  let teamName = "Personal Team";
  if (name) {
    teamName =
      name.split(" ").length > 1
        ? `Team ${name.split(" ")[0]}`
        : `Team ${name}}`;
  }
  if (!hasOrg) {
    await gqlClient.request(CreateOrgAndTeamDocument, {
      orgName: `Personal Org`,
      teamName,
      userId: user.id,
    });
  }

  return data?.user;
};

const UpdateUserSchema = z.object({
  name: z.string().optional(),
  photo: z.string().url().or(z.literal("")),
});

export const updateUserProfile = async (
  gqlClient: GqlClient,
  userId: string,
  formData: FormData
) => {
  let updates = UpdateUserSchema.parse(Object.fromEntries(formData));
  let data = await gqlClient.request(UpdateUserDocument, {
    id: userId,
    updates,
  });

  return data?.user;
};
