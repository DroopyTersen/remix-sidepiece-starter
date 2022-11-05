import { json, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
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
  let [photo, setPhoto] = useState(
    data.user.photo || "https://via.placeholder.com/300"
  );
  let [name, setName] = useState(data.user.name || "");
  return (
    <MainContentPadded>
      <div className="flex items-center gap-4">
        <img
          alt="Profile photo"
          className="w-24 m-0 rounded-full"
          src={photo || "https://via.placeholder.com/160?text=No Photo"}
        />
        <div>
          <div className="text-lg">My Profile</div>
          <h1 className="m-0 text-secondary">{name}</h1>
        </div>
      </div>
      <form className="mt-4">
        <fieldset className="space-y-4">
          <InputField
            label="Name"
            name="name"
            defaultValue={data.user.name}
            required
            onBlur={(e) => setName(e.currentTarget.value)}
          />
          <InputField
            label="Username"
            name="username"
            disabled
            defaultValue={data.user.username}
          />
          <InputField
            label="Photo"
            name="photo"
            defaultValue={data.user.photo}
            onBlur={(e) => setPhoto(e.currentTarget.value)}
          />
        </fieldset>
      </form>
    </MainContentPadded>
  );
}

export const ErrorBoundary = AppErrorBoundary;
export const CatchBoundary = AppErrorBoundary;
