import { json, LinksFunction, MetaFunction } from "@remix-run/node";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import globalStyles from "../public/css/global.css";
import tailwindStyles from "../public/css/tailwind.css";
import { getPublicEnvVars } from "./toolkit/remix/envVars.server";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStyles },
  { rel: "stylesheet", href: globalStyles },
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const loader = ({}) => {
  return json({
    ENV: getPublicEnvVars(),
  });
};

export default function App() {
  return (
    <html lang="en" data-theme="droopy-theme">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="prose max-w-none prose-sm h-full">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
