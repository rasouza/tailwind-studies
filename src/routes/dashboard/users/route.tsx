import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/users")({
  component: RouteComponent,
  loader: () => ({
    crumb: "Users",
  }),
});

function RouteComponent() {
  return <Outlet />;
}
