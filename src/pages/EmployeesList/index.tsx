import { Container } from "../../components/Layout/Container";
import { HeaderEmployees } from "./style";
import { Link } from "../../components/Link";
import { Table } from "../../components/Table";

const data = [
  {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: new Date("2008-01-01").toLocaleDateString(),
    startDate: new Date("2021-01-01").toLocaleDateString(),
    department: "HR",
    street: "123 Fake",
    city: "Springfield",
    state: "IL",
    zipCode: "12345",
  },
  {
    firstName: "John",
    lastName: "Doe",
    birthDate: new Date("2008-01-01").toLocaleDateString(),
    startDate: new Date("2021-01-01").toLocaleDateString(),
    department: "HR",
    street: "123 Fake",
    city: "Springfield",
    state: "IL",
    zipCode: "12345",
  },
  {
    firstName: "Tom",
    lastName: "Doe",
    birthDate: new Date("2008-01-01").toLocaleDateString(),
    startDate: new Date("2021-01-01").toLocaleDateString(),
    department: "HR",
    street: "123 Fake",
    city: "Springfield",
    state: "IL",
    zipCode: "12345",
  },
];

export type DataEmployees = typeof data;

export function EmployeesList() {
  return (
    <Container>
      <HeaderEmployees>Current Employees</HeaderEmployees>
      <Table data={data} />
      <Link path="" label="Home" />
    </Container>
  );
}
