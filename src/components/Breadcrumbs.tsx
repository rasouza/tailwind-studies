import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "./ui/sidebar";
import { isMatch, useMatches } from "@tanstack/react-router";

export function Breadcrumbs() {
  const matches = useMatches();
  const matchesWithCrumbs = matches.filter((match) =>
    isMatch(match, "loaderData.crumb")
  );

  const items = matchesWithCrumbs.map(({ pathname, loaderData }) => {
    return {
      href: pathname,
      label: loaderData?.crumb,
    };
  });

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            {items.map((item, index) => {
              const isLastItem = index === items.length - 1;
              return !isLastItem ? (
                <>
                  <BreadcrumbItem key={item.label} className="hidden md:block">
                    <BreadcrumbLink href={item.href}>
                      {item.label}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                </>
              ) : (
                <BreadcrumbItem>
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                </BreadcrumbItem>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
}
