import { json, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { GetAllUsersDocument } from "~/.gql/graphql.types";
import { createAnonymousGqlClient } from "~/common/hasura.server";
import { AppLayout } from "~/features/layout/AppLayout";
import { AppErrorBoundary } from "~/toolkit/components/errors/AppErrorBoundary";

export const loader = async ({ request, params }: LoaderArgs) => {
  let gqlClient = createAnonymousGqlClient();
  let data = await gqlClient.request(GetAllUsersDocument);
  return json(data);
};

export default function UsersRoute() {
  let data = useLoaderData<typeof loader>();
  return (
    <AppLayout>
      <div>
        <ul>
          {data?.users?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </AppLayout>
  );
}

export const ErrorBoundary = AppErrorBoundary;
export const CatchBoundary = AppErrorBoundary;
