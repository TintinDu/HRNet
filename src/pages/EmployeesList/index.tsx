import { Link } from "../../components/Link";
import { routes } from "../../routes/router.constants";

import { Suspense, lazy } from "react";

const Table = lazy(() => import("../../components/Table"));
const HeaderEmployees = lazy(() => import("./style"));

export function EmployeesList() {
  return (
    <>
      <Suspense>
        <HeaderEmployees>Current Employees</HeaderEmployees>
        <Table />
      </Suspense>
      <Link path={routes.HOME} label="Home" />
    </>
  );
}
