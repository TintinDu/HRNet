import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import { Layout } from "../layout";
import { EmployeesList } from "../pages/EmployeesList";
import { routes } from "./router.constants";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: "Failed to load page",
    children: [
      {
        path: routes.HOME,
        element: <Homepage />,
      },
      {
        path: routes.EMPLOYEES,
        element: <EmployeesList />,
      },
    ],
  },
]);
