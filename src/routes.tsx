import { FaCog, FaHome } from "react-icons/fa";
import { GiHypersonicBolt } from "react-icons/gi";

import { Heroes } from "./features/Heroes";
import { Home } from "./features/Home";

interface Route {
  name: string;
  url: string;
  component: React.FunctionComponent<any>;
  icon?: React.ReactNode;
  badge?: boolean;
}

const routes: Route[] = [
  {
    name: "Home",
    icon: <FaHome />,
    component: Home,
    url: "/home",
  },
  {
    name: "Heroes",
    icon: <GiHypersonicBolt />,
    component: Heroes,
    url: "/heroes",
  },
  {
    name: "Settings",
    icon: <FaCog />,
    component: Home,
    url: "/settings",
    badge: true,
  },
];

export default routes;
