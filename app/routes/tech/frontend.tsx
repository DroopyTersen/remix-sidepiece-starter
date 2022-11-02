import { json, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { GetTechByLayerDocument } from "~/.gql/graphql.types";
import { AppLayout } from "~/features/layout/AppLayout";
import { createGraphQLClient } from "~/toolkit/http/createGqlClient";

export const loader = async ({ request, params }: LoaderArgs) => {
  // Create an instance of the GraphQL client
  let gqlClient = createGraphQLClient(process.env.GRAPHQL_ENDPOINT);
  // Query the GraphQL API passing the query name suffixed with "Document"
  let data = await gqlClient.request(GetTechByLayerDocument, {
    layer: "Frontend",
  });
  return json(data);
};

export default function FrontendTechRoute() {
  let data = useLoaderData<typeof loader>();

  return (
    <AppLayout>
      <div className="tech-list-container">
        <ul>
          {data?.technologies?.map((tech) => (
            <li key={tech.id}>
              <a href={tech.link} target="_blank">
                {tech.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </AppLayout>
  );
}
