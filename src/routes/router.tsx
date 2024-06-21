import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import { Layout } from "../layout";
import { EmployeesList } from "../pages/EmployeesList";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: "Failed to load page",
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/employees",
        element: <EmployeesList />,
      },
    ],
  },
]);
