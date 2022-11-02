import { Link } from "@remix-run/react";
import { FormButton } from "~/toolkit/components/buttons/FormButton";
import { useCurrentUser } from "../auth/useCurrentUser";

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const currentUser = useCurrentUser();
  return (
    <main className="w-full">
      <div className="navbar bg-base-200 w-full px-2">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link to="/" className="btn btn-ghost normal-case text-white text-xl">
            Your App
          </Link>
        </div>
        <div className="navbar-end">
          <div>
            {currentUser ? (
              <>
                <div>Hello, {currentUser?.email}</div>
                <FormButton action="/logout" color="secondary">
                  Log out
                </FormButton>
              </>
            ) : (
              <Link to="/login" className="btn btn-primary">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
      {children}
    </main>
  );
}
