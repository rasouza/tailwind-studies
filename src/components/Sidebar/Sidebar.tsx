import { Redirect } from "react-router-dom";

import routes from "src/routes";

import { Navigation } from "./Navigation";
import { NavItem } from "./NavItem";

const createLinks = () =>
  routes.map((route, key) => (
    <NavItem
      name={route.name}
      url={route.url}
      icon={route.icon}
      badge={route.badge}
      key={key}
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
