import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/users/add")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/dashboard/users/add"!</div>;
}
