import { ActionArgs, json, LoaderArgs, redirect } from "@remix-run/node";
import {
  Form,
  Link,
  useActionData,
  useLoaderData,
  useNavigate,
} from "@remix-run/react";
import { z, ZodError } from "zod";
import { createAdminGqlClient } from "~/common/hasura.server";
import {
  requireAuthenticatedAction,
  requireAuthenticatedLoader,
} from "~/features/auth/auth.remix.server";
import { MainContentPadded } from "~/features/layout/AppLayout";
import { createNewWorkspace } from "~/features/users/users.data.server";
import { AppErrorBoundary } from "~/toolkit/components/errors/AppErrorBoundary";
import { InputField } from "~/toolkit/components/forms";
import { useSearchParam } from "~/toolkit/remix/useSearchParam";
import { findZodFieldError } from "~/toolkit/utils/zod.utils";

export const loader = async ({ request, params }: LoaderArgs) => {
  let { gqlClient } = await requireAuthenticatedLoader(request);
  return json({ message: "NAME" });
};

export default function NewWorkspace() {
  let data = useLoaderData<typeof loader>();
  let actionData = useActionData();
  let error: ZodError = actionData?.error;
  let [returnTo] = useSearchParam("returnTo");
  let navigate = useNavigate();
  return (
    <MainContentPadded>
      <h1 className="text-secondary">New Workspace</h1>
      <Form method="post" className="max-w-sm mt-4">
        <fieldset className="space-y-4">
          <InputField
            label="Name"
            name="name"
            autoFocus
            required
            error={findZodFieldError(error, "photo")?.message}
          />
        </fieldset>
        <div className="flex justify-end gap-2 my-3">
          <Link className="btn btn-ghost" to={returnTo || "/"}>
            Cancel
          </Link>
          <button className="btn btn-primary">Save</button>
        </div>
      </Form>
    </MainContentPadded>
  );
}
const NewWorkspaceSchema = z.object({
  name: z.string().min(3).max(100),
});

export const action = async ({ request, params }: ActionArgs) => {
  let { formData, gqlClient, userId } = await requireAuthenticatedAction(
    request
  );
  try {
    let input = NewWorkspaceSchema.parse(Object.fromEntries(formData));
    let workspace = await createNewWorkspace(
      createAdminGqlClient(),
      userId,
      input.name
    );

    return redirect("/" + workspace?.id);
  } catch (err: unknown) {
    if (err instanceof ZodError) {
      console.log("ZOD ERROR", err);
      return json({ error: err }, { status: 400 });
    }
    return json(
      { error: err, formValues: Object.fromEntries(formData) },
      { status: 500 }
    );
  }
};

export const ErrorBoundary = AppErrorBoundary;
export const CatchBoundary = AppErrorBoundary;
