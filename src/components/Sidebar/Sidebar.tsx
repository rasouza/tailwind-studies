import { NavItem } from "./NavItem";
import { Navigation } from "./Navigation";
import { FaCog, FaHome } from "react-icons/fa";

export function Sidebar() {
  return (
    <aside className="w-64 bg-black-light">
      <div className="py-6 px-4">
        <Navigation>
          <NavItem name="Home" icon={<FaHome />} url="/" />
          <NavItem name="Settings" url="/settings" badge icon={<FaCog />} />
        </Navigation>
      </div>
    </aside>
  );
}
