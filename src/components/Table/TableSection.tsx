import { Table, flexRender } from "@tanstack/react-table";
import { Application } from "../fakeData";
import { ColumnType } from "./helpers";

type Props = {
  table: Table<ColumnType>;
};
const TableSection: React.FC<Props> = ({ table }) => (
  <div className="overflow-x-auto">
    <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
      <table className="min-w-full leading-normal">
        <colgroup>
          <col span={1} style={{ minWidth: "39px" }} />
          <col span={1} style={{ minWidth: "52px" }} />
          <col span={1} style={{ minWidth: "99px" }} />
          <col span={1} style={{ minWidth: "99px" }} />
          <col span={1} style={{ minWidth: "99px" }} />
          <col span={1} style={{ minWidth: "189px" }} />
          <col span={1} style={{ minWidth: "86px" }} />
          <col span={1} style={{ minWidth: "371px" }} />
          <col span={1} style={{ minWidth: "189px" }} />
          <col span={1} style={{ minWidth: "124px" }} />
        </colgroup>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="divide-x-2 divide-white">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  className="px-5 border-gray-200 h-11 bg-light-blue text-center text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className={`px-5 h-11 border-b ${
                    cell.row.index % 2 === 0 ? "bg-light-gray" : ""
                  } text-sm text-center`}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {table.getRowCount() === 0 && (
        <div className="h-[405px] flex justify-center items-center">
          <h1>조회 결과가 없습니다.</h1>
        </div>
      )}
    </div>
  </div>
);
export default TableSection;
