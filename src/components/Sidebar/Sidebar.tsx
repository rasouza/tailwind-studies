import { NavItem } from "./NavItem";
import { Navigation } from "./Navigation";

import routes from "src/routes";
import { Redirect } from "react-router-dom";

const createLinks = () =>
  routes.map((route: any) => (
    <NavItem
      name={route.name}
      url={route.url}
      icon={route.icon}
      badge={route.badge}
    />
  ));

export function Sidebar() {
  return (
    <aside className="w-64 bg-black-light">
      <div className="py-6 px-4">
        <Navigation>
          {createLinks()}
          <Redirect from="*" to="/home" />
        </Navigation>
      </div>
    </aside>
  );
}
