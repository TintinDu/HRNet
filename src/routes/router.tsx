import { lazy, Suspense } from "react";
import { createHashRouter } from "react-router-dom";
import Layout from "../layout";
import { routes } from "./router.constants";

// Preload comment for Homepage
const Homepage = lazy(
  () => import(/* webpackChunkName: "homepage" */ "../pages/Homepage"),
);
// Preload comment for EmployeesList
const EmployeesList = lazy(
  () =>
    import(/* webpackChunkName: "employeeslist" */ "../pages/EmployeesList"),
);

export const router = createHashRouter([
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
