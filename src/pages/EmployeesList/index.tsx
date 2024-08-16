import { Link } from "../../components/Link";
import { routes } from "../../routes/router.constants";

import { memo } from "react";
import Table from "../../components/Table";
import HeaderEmployees from "./style";

const EmployeesList = memo(() => {
  return (
    <>
      <HeaderEmployees>Current Employees</HeaderEmployees>
      <Table />
      <Link path={routes.HOME} label="Home" />
    </>
  );
});

export default EmployeesList;
