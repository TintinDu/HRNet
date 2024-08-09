import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import { routes } from "./router.constants";

const Homepage = lazy(() => import("../pages/Homepage"));
const EmployeesList = lazy(() => import("../pages/EmployeesList"));

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: "Failed to load page",
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
