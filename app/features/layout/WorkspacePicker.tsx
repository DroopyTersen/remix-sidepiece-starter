import { useNavigate, useParams } from "@remix-run/react";
import { useMemo } from "react";
import { Select } from "~/toolkit/components/forms";
import { useCurrentUser } from "../auth/useCurrentUser";

export const WorkspacePicker = () => {
  let currentUser = useCurrentUser();
  let { workspaceId } = useParams();
  let navigate = useNavigate();
  if (!currentUser) return null;
  let workspaces = useMemo(() => {
    return (
      currentUser?.roles?.map((role) => {
        return {
          label: role.workspace.name,
          value: role.workspace.id,
        };
      }) || []
    );
  }, [currentUser?.roles]);
  return (
    <Select
      value={workspaceId || ""}
      key={workspaceId || "none"}
      onChange={(e) => {
        e.preventDefault();
        let targetPage = e.currentTarget.value || "";
        if (targetPage === "new-workspace") {
          targetPage =
            targetPage +
            `?returnTo=${encodeURIComponent(
              window.location.pathname + "?" + window.location.search
            )}`;
        }
        navigate("/" + targetPage);
      }}
    >
      <option disabled selected value="">
        -- Select a workspace --
      </option>
      <optgroup label="Your workspaces">
        {workspaces.map((workspace) => (
          <option value={workspace.value}>{workspace.label}</option>
        ))}
      </optgroup>
      <optgroup label="More">
        <option value="new-workspace">+ Create New</option>
      </optgroup>
    </Select>
  );
};
