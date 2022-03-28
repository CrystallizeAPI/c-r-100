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
import tailwindStyles from "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStyles },
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Donuts",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <script
          dangerouslySetInnerHTML={{
            __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MWTR635');
        `,
          }}
        />
      </head>
      <body className="text-gray-900">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MWTR635"
            height="0"
            width="0"
            title="GTM"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header className="container mx-auto p-8 sm:px-6 max-w-7xl mb-4">
        <Link prefetch="intent" to="/" className="text-6xl">
          🍩
        </Link>
      </header>
      {children}
    </div>
  );
}
