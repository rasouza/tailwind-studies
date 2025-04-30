import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/users/list")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/dashboard/users/list"!</div>;
}
