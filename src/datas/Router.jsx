import Dashboard from "../pages/Dashboard";

export default function Router() {
  return [
    {
      name: "dashboard",
      path: "/",
      component: <Dashboard />,
    },
    {
      name: "recruitment",
      path: "/recruitment",
      component: null,
    },
    {
      name: "schedule",
      path: "/schedule",
      component: null,
    },
    {
      name: "employee",
      path: "/employee",
      component: null,
    },
    {
      name: "department",
      path: "/department",
      component: null,
    },
    {
      name: "support",
      path: "/support",
      component: null,
    },
    {
      name: "settings",
      path: "/settings",
      component: null,
    },
  ];
}
