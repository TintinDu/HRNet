import { Suspense } from "react";
import { createHashRouter } from "react-router-dom";
import Layout from "../layout";
import { routes } from "./router.constants";
import Homepage from "../pages/Homepage";
import EmployeesList from "../pages/EmployeesList";

export const router = createHashRouter([
  {
    element: <Layout />,
    errorElement: <div>Failed to load page</div>,
    children: [
      {
        path: routes.HOME,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Homepage />
          </Suspense>
        ),
      },
      {
        path: routes.EMPLOYEES,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <EmployeesList />
          </Suspense>
        ),
      },
    ],
  },
]);
