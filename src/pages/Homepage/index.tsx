import { Container } from "../../components/Layout/Container";
import { HeaderHomepage } from "./style";
import {
  createColumnHelper,
  useReactTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";

const columnHelper = createColumnHelper();

const data = [
  {
    firstName: "Jane",
    surname: "Doe",
    age: 13,
    gender: "Female",
  },
  {
    firstName: "John",
    surname: "Doe",
    age: 43,
    gender: "Male",
  },
  {
    firstName: "Tom",
    surname: "Doe",
    age: 89,
    gender: "Male",
  },
];

const columns = [
  columnHelper.accessor((row) => `${row.firstName} ${row.surname}`, {
    id: "fullName",
    header: "Full Name",
  }),
  columnHelper.accessor("gender", {
    header: "Gender",
  }),
];

export function Homepage() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Container>
      <HeaderHomepage>Current Employees</HeaderHomepage>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th id={header.id}>
                      {" "}
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
