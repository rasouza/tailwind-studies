import { NavLink } from "react-router-dom";

type NavItemProps = {
  name: string;
  url: string;
  badge?: boolean;
  icon?: React.ReactNode;
};

export function NavItem({ name, badge, icon, url }: NavItemProps) {
  return (
    <li className="my-1 relative bg-black rounded-lg shadow ">
      <NavLink
        to={url}
        className="flex h-10 px-3 text-grey items-center hover:bg-teal rounded-lg"
      >
        {icon && icon}
        <span className="flex px-4 my-4">{name}</span>
        {badge && (
          <span className="flex h-3 w-3">
            <span className="animate-ping absolute -top-1 -right-1 inline-flex h-3 w-3 rounded-full opacity-75 bg-teal"></span>
            <span className="absolute -top-1 -right-1 inline-flex rounded-full h-3 w-3 bg-teal shadow"></span>
          </span>
        )}
      </NavLink>
    </li>
  );
}
