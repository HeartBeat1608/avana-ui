import { Icon } from "@chakra-ui/react";
import { MdBarChart, MdHome, MdLock, MdPerson } from "react-icons/md";

// Admin Imports
import DataTables from "pages/admin/data-tables";
import MainDashboard from "pages/admin/default";
import Profile from "pages/admin/profile";

// Auth Imports
import { IRoute } from "types/navigation";

const routes: IRoute[] = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: MainDashboard,
  },
  {
    name: "Tickets",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: "/data-tables",
    component: DataTables,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: Profile,
  },
];

export default routes;
