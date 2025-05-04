import { createFileRoute } from "@tanstack/react-router";
import { AppSidebar } from "~/components/app-sidebar"
import { ChartAreaInteractive } from "~/components/chart-area-interactive"
import { DataTable } from "~/components/data-table"
import { SectionCards } from "~/components/section-cards"
import { SiteHeader } from "~/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "../../components/ui/sidebar"

import data from "./data.json"

export const Route = createFileRoute("/dashboard")({
  component: DashboardLayout,
  // beforeLoad: async ({ context }) => {
  //   if (!context.user) {
  //     throw redirect({ to: "/login" });
  //   }

  //   // `context.queryClient` is also available in our loaders
  //   // https://tanstack.com/start/latest/docs/framework/react/examples/start-basic-react-query
  //   // https://tanstack.com/router/latest/docs/framework/react/guide/external-data-loading
  // },
});

function DashboardLayout() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <DataTable data={data} />
            </div>
          </div>
        </div>
      </SidebarInset>
      {/* <Outlet /> */}
    </SidebarProvider>
  );
}

{/* <div className="flex min-h-svh flex-col items-center justify-center gap-10 p-2">
  <div className="flex flex-col items-center gap-4">
    <h1 className="text-3xl font-bold sm:text-4xl">Dashboard Layout</h1>
    <div className="flex items-center gap-2 max-sm:flex-col">
      This is a protected layout:
      <pre className="bg-card text-card-foreground rounded-md border p-1">
        routes/dashboard/route.tsx
      </pre>
    </div>

    <Button type="button" asChild className="w-fit" size="lg">
      <Link to="/">Back to index</Link>
    </Button>
  </div>

  <Outlet />
</div> */}
