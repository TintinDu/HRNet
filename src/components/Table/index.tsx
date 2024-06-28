import {
  createColumnHelper,
  useReactTable,
  flexRender,
  getCoreRowModel,
  ColumnDef,
} from "@tanstack/react-table";
import { DataEmployees } from "../../pages/EmployeesList";
import {
  StyledTable,
  StyledTd,
  StyledTh,
  StyledThead,
  StyledTr,
} from "./style";

export const Table = ({ data }: { data: DataEmployees }) => {
  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("firstName", {
      id: "firstName",
      header: "First Name",
    }),
    columnHelper.accessor("lastName", {
      header: "Last Name",
    }),
    columnHelper.accessor("startDate", {
      header: "Start Date",
    }),
    columnHelper.accessor("department", {
      header: "Department",
    }),
    columnHelper.accessor("birthDate", {
      header: "Date of Birth",
    }),
    columnHelper.accessor("street", {
      header: "Street",
    }),
    columnHelper.accessor("city", {
      header: "City",
    }),
    columnHelper.accessor("state", {
      header: "State",
    }),
    columnHelper.accessor("zipCode", {
      header: "Zip Code",
    }),
  ];

  const table = useReactTable({
    data,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    columns: columns as ColumnDef<unknown, any>[],
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <StyledTable>
      <StyledThead>
        {table.getHeaderGroups().map((headerGroup) => {
          return (
            <StyledTr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <StyledTh id={header.id}>
                    {" "}
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </StyledTh>
                );
              })}
            </StyledTr>
          );
        })}
      </StyledThead>
      <tbody>
        {table.getRowModel().rows.map((row) => {
          return (
            <StyledTr key={row.id}>
              {row.getVisibleCells().map((cell) => {
                return (
                  <StyledTd key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </StyledTd>
                );
              })}
            </StyledTr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};
