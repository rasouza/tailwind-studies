import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AppSidebar } from "@/components/Sidebar/Sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Outlet, createFileRoute } from "@tanstack/react-router";
import { ListTodo, Telescope, Users } from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  component: AppLayoutComponent,
  loader: () => ({
    crumb: "Home",
  }),
});

function AppLayoutComponent() {
  return (
    <SidebarProvider>
      <AppSidebar routes={routes} />
      <SidebarInset>
        <Breadcrumbs />
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
}

const routes = [
  {
    group: "Management",
    title: "Users",
    url: "#",
    icon: Users,
    isActive: true,
    items: [
      {
        title: "Add",
        url: "/dashboard/users/add",
      },
      {
        title: "List",
        url: "/dashboard/users/list",
      },
    ],
  },
  {
    group: "To Do",
    title: "To Do",
    url: "/dashboard/todo",
    icon: ListTodo,
  },
  {
    group: "Star Wars",
    title: "Star Wars",
    url: "#",
    icon: Telescope,
    items: [
      {
        title: "List Movies",
        url: "/dashboard/star-wars",
      },
    ],
  },
];
