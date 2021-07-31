import { NavItem } from "./NavItem";
import { Navigation } from "./Navigation";

export function Sidebar() {
  return (
    <aside className="w-64 bg-black-light">
      <div className="py-6 px-4">
        <Navigation>
          <NavItem name="item1" />
          <NavItem name="item2" />
          <NavItem name="item3" />
        </Navigation>
      </div>
    </aside>
  );
}
