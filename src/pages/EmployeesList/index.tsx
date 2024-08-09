import { Link } from "../../components/Link";
import { routes } from "../../routes/router.constants";

import { Suspense, lazy, memo } from "react";

const Table = lazy(() => import("../../components/Table"));
const HeaderEmployees = lazy(() => import("./style"));

const EmployeesList = memo(() => {
  return (
    <>
      <Suspense fallback={<div>Loading header...</div>}>
        <HeaderEmployees>Current Employees</HeaderEmployees>
      </Suspense>
      <Suspense fallback={<div>Loading table...</div>}>
        <Table />
      </Suspense>
      <Link path={routes.HOME} label="Home" />
    </>
  );
});

export default EmployeesList;
