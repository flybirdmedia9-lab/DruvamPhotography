import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dhruvam Photography & Events — Premium Weddings in Anantapur" },
      { name: "description", content: "Dhruvam Photography & Events — premium 4K/8K cinematography & end-to-end event management in Anantapur. Capturing moments, creating experiences." },
      { name: "author", content: "Dhruvam Photography & Events" },
      { property: "og:title", content: "Dhruvam Photography & Events — Premium Weddings in Anantapur" },
      { property: "og:description", content: "Dhruvam Photography & Events — premium 4K/8K cinematography & end-to-end event management in Anantapur. Capturing moments, creating experiences." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dhruvam Photography & Events — Premium Weddings in Anantapur" },
      { name: "twitter:description", content: "Dhruvam Photography & Events — premium 4K/8K cinematography & end-to-end event management in Anantapur. Capturing moments, creating experiences." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/94446b27-6b3c-4110-809a-4e2f28553c63/id-preview-1f9c81d2--a5096783-43e2-4691-bda8-8524a5b95c2e.lovable.app-1777635756480.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/94446b27-6b3c-4110-809a-4e2f28553c63/id-preview-1f9c81d2--a5096783-43e2-4691-bda8-8524a5b95c2e.lovable.app-1777635756480.png" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
