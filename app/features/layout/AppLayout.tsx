import { Link } from "@remix-run/react";
import { LoginButton } from "~/routes/__auth/login";
import { Dropdown } from "~/toolkit/components/dropdown/Dropdown";
import { useCurrentUser } from "../auth/useCurrentUser";
import { AccountDropodown } from "./AccountDropodown";

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const currentUser = useCurrentUser();
  return (
    <>
      <header className="w-full px-2 navbar bg-base-200">
        <div className="navbar-start">
          <Dropdown align="left">
            <Dropdown.CircleTrigger>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </Dropdown.CircleTrigger>
            <Dropdown.MenuContent>
              <li>
                <a href="/">Homepage</a>
              </li>
              <li>
                <a href="/portfolio">Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </Dropdown.MenuContent>
          </Dropdown>
          {/* <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-300 rounded-box w-52"
            ></ul>
          </div> */}
        </div>
        <div className="navbar-center">
          <Link to="/" className="text-xl text-white normal-case btn btn-ghost">
            Your App
          </Link>
        </div>
        <div className="navbar-end">
          <div>
            {currentUser ? (
              <>
                <AccountDropodown user={currentUser} />
                {/* <div>Hello, {currentUser?.name || currentUser?.username}</div>
                <FormButton action="/logout" color="secondary">
                  Log out
                </FormButton> */}
              </>
            ) : (
              <LoginButton />
            )}
          </div>
        </div>
      </header>
      {children}
    </>
  );
}

export const MainContentPadded = ({ children, className = "" }) => {
  return (
    <main className={`p-3 sm:p-6 prose-sm prose max-w-none ${className}`}>
      {children}
    </main>
  );
};

export const MainContentFullBleed = ({ children, className = "" }) => {
  return (
    <main className={`py-3 sm:py-6 prose-sm prose max-w-none ${className}`}>
      {children}
    </main>
  );
};
