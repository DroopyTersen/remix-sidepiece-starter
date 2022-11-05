import { AvatarImage } from "~/toolkit/components/avatar/Avatar";
import { FormButton } from "~/toolkit/components/buttons/FormButton";
import { Dropdown } from "~/toolkit/components/dropdown/Dropdown";
import { AppUser } from "../users/users.types";

interface AccountDropodownProps {
  user: AppUser;
}

export function AccountDropodown({ user }: AccountDropodownProps) {
  return (
    <Dropdown align="right">
      <Dropdown.CircleTrigger>
        <AvatarImage photo={user.photo} name={user.name || user.username} />
      </Dropdown.CircleTrigger>
      <Dropdown.Content className="p-2 min-w-[200px] ">
        <div className="mb-2 text-center">
          <b>{user.name || user.username}</b>
        </div>
        <FormButton action="/logout" className="btn btn-ghost btn-sm btn-block">
          Log out
        </FormButton>
      </Dropdown.Content>
    </Dropdown>
  );
}
