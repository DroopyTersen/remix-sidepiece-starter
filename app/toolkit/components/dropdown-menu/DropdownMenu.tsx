import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import { Link } from "@remix-run/react";
import { BsThreeDotsVertical } from "react-icons/bs";

export function DropdownMenu({ label, children, className, align = "left" }: DropdownMenuProps) {
  return (
    <RadixDropdownMenu.Root modal={false}>
      {typeof label === "string" ? (
        <RadixDropdownMenu.Trigger className={`btn btn-ghost ${className}`}>
          {label}
        </RadixDropdownMenu.Trigger>
      ) : (
        <RadixDropdownMenu.Trigger asChild={true}>{label}</RadixDropdownMenu.Trigger>
      )}
      <RadixDropdownMenu.Content asChild>
        <ul
          className={`z-10 sm:absolute mt-1 shadow-lg bg-white ring-1 ring-primary ring-opacity-5 focus:outline-none menu p-0 rounded-box text-left`}
        >
          {children}
        </ul>
      </RadixDropdownMenu.Content>
    </RadixDropdownMenu.Root>
  );
}
export const Dropdown = RadixDropdownMenu;

export function ContextMenu(props: Omit<DropdownMenuProps, "label">) {
  return (
    <DropdownMenu
      {...(props as any)}
      label={
        <button
          className="bg-gray-100 rounded-full btn btn-ghost hover:bg-gray-200"
          title="Context menu"
        >
          <BsThreeDotsVertical />
        </button>
      }
    />
  );
}

export function DropdownMenuItem({ children, to = "", ...rest }) {
  let Elem: any = to ? Link : "span";
  return (
    <RadixDropdownMenu.Item asChild {...rest}>
      <li className="w-auto overflow-hidden">
        {to ? (
          <Link className="truncate" to={to}>
            {children}
          </Link>
        ) : (
          children
        )}
      </li>
    </RadixDropdownMenu.Item>
  );
}
ContextMenu.Item = DropdownMenuItem;
DropdownMenu.Item = DropdownMenuItem;

interface DropdownMenuProps {
  children: React.ReactNode;
  label: JSX.Element | string;
  className?: string;
  align?: "left" | "right";
  [key: string]: any;
}
