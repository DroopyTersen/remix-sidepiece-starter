import { json, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { requireAuthenticatedLoader } from "~/features/auth/auth.remix.server";
import { AppErrorBoundary } from "~/toolkit/components/errors/AppErrorBoundary";

export const loader = async ({ request, params }: LoaderArgs) => {
  let { gqlClient } = await requireAuthenticatedLoader(request);
  return json({ message: "WorkspaceDetails" });
};

export default function WorkspaceDetailsRoute() {
  let data = useLoaderData<typeof loader>();
  return <div>{data.message}</div>;
}

export const ErrorBoundary = AppErrorBoundary;
export const CatchBoundary = AppErrorBoundary;
