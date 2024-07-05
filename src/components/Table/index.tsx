import {
  createColumnHelper,
  useReactTable,
  flexRender,
  getCoreRowModel,
  ColumnDef,
} from "@tanstack/react-table";
import {
  StyledTable,
  StyledTbody,
  StyledTd,
  StyledTh,
  StyledThead,
  StyledTr,
} from "./style";
import { useContext } from "react";
import { Context } from "../../contexts";

const Table = () => {
  const { data } = useContext(Context);
  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("firstName", {
      id: "firstName",
      header: "First Name",
    }),
    columnHelper.accessor("lastName", {
      id: "lastName",
      header: "Last Name",
    }),
    columnHelper.accessor("startDate", {
      id: "startDate",
      header: "Start Date",
    }),
    columnHelper.accessor("department", {
      id: "department",
      header: "Department",
    }),
    columnHelper.accessor("birthDate", {
      id: "birthDate",
      header: "Date of Birth",
    }),
    columnHelper.accessor("street", {
      id: "street",
      header: "Street",
    }),
    columnHelper.accessor("city", {
      id: "city",
      header: "City",
    }),
    columnHelper.accessor("state", {
      id: "state",
      header: "State",
    }),
    columnHelper.accessor("zipCode", {
      id: "zipCode",
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
                  <StyledTh key={header.id} id={header.id}>
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
      <StyledTbody>
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
      </StyledTbody>
    </StyledTable>
  );
};

export default Table;
