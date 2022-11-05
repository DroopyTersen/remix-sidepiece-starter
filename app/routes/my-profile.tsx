import { json, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { requireAuthenticatedLoader } from "~/features/auth/auth.remix.server";
import { MainContentPadded } from "~/features/layout/AppLayout";
import { AppErrorBoundary } from "~/toolkit/components/errors/AppErrorBoundary";
import { InputField } from "~/toolkit/components/forms";

export const loader = async ({ request, params }: LoaderArgs) => {
  let { user } = await requireAuthenticatedLoader(request);

  return json({ user });
};

export default function MyProfileRoute() {
  let data = useLoaderData<typeof loader>();
  return (
    <MainContentPadded>
      <h1 className="text-secondary">My Profile</h1>
      <fieldset>
        <InputField label="Name" name="name" defaultValue={data.user.name} />
        <InputField
          label="Username"
          name="username"
          disabled
          defaultValue={data.user.username}
        />
        <InputField label="Photo" name="photo" defaultValue={data.user.photo} />
      </fieldset>
    </MainContentPadded>
  );
}

export const ErrorBoundary = AppErrorBoundary;
export const CatchBoundary = AppErrorBoundary;
