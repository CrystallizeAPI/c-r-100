import { ReactNode } from "react";
import {
  Link,
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import styles from "./tailwind.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "⚡️",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
          <ScrollRestoration />
        </Layout>
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="lg:w-content w-full mx-auto p-8 sm:px-6">
      <header className="container flex justify-between mb-4">
        <Link prefetch="intent" to="/">
          <img src="/logo.svg" alt="dounot logo" className="block" />
        </Link>
      </header>
      <main>{children}</main>
    </div>
  );
}
