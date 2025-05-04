import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import { Link, createFileRoute } from "@tanstack/react-router";
import ThemeToggle from "~/components/theme-toggle";
import { Button } from "~/components/ui/button";

export const Route = createFileRoute("/")({
  component: Home,
  // loader: ({ context }) => {
  //   return { user: context.user };
  // },
});

function Home() {
  const { open } = useAppKit()
  const { address } = useAppKitAccount();

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-10 p-2">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold sm:text-4xl">React TanStarter</h1>
        <div className="flex items-center gap-2 max-sm:flex-col">
          This is an unprotected page:
          <pre className="bg-card text-card-foreground rounded-md border p-1">
            routes/index.tsx
          </pre>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <p>...</p>
        <div className="flex items-center gap-2 max-sm:flex-col">
          <Button type="button" asChild className="w-fit" size="lg">
            <Link to="/dashboard">Dashboard</Link>
          </Button>
          {!address && <Button
            type="button"
            asChild 
            className="w-fit cursor-pointer" 
            size="lg" 
            onClick={() => open()}
          >
            <div>Connect Wallet</div>
          </Button>}

          {address && <appkit-account-button />}
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <ThemeToggle />
        <a
          className="text-muted-foreground hover:text-foreground underline"
          href="https://github.com/dotnize/react-tanstarter"
          target="_blank"
          rel="noreferrer noopener"
        >
          dotnize/react-tanstarter
        </a>
      </div>
    </div>
  );
}
