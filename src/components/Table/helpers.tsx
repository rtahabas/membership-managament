import { CellContext, createColumnHelper } from "@tanstack/react-table";
import { Application } from "../fakeData";
import IndeterminateCheckbox from "./IndeterminateCheckbox";
import Button from "../Button";
import Badge from "../Badges";

export type ColumnWithSelect<T> = T & { select?: string };
export type ColumnType = ColumnWithSelect<Application>;

const columnHelper = createColumnHelper<ColumnType>();

import React from "react";
import useApplicationModalStore from "@/stores/useApplicationModalStore";

type DocumentInspectButton = {
  info: CellContext<ColumnType, string>;
};

const DocumentInspectButton: React.FC<DocumentInspectButton> = ({ info }) => {
  const { setIsApplicationOpen, setApplicationModalProps } = useApplicationModalStore();

  const handleClick = (data: Application) => {
    setIsApplicationOpen(true);
    setApplicationModalProps(data);
  };

  return (
    <Button
      onClick={() => handleClick(info.row.original)}
      className="lg:px-[18px] py-[7px] rounded-[10px] w-[61px] bg-form-default text-form-text !font-medium"
    >
      {info.renderValue()}
    </Button>
  );
};

export const columns = [
  columnHelper.accessor("select", {
    id: "select",
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          index: row.index,
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  }),
  columnHelper.accessor("no", {
    header: "NO",
    cell: (info) => <p className="text-form-text whitespace-no-wrap">{info.row.index + 1}</p>,
  }),
  columnHelper.accessor("type", {
    header: "기존유형",
    cell: (info) => <p className="text-form-text whitespace-no-wrap">{info.renderValue()}</p>,
  }),
  columnHelper.accessor("requestType", {
    header: "신청유형",
    cell: (info) => <p className="text-form-text whitespace-no-wrap">{info.renderValue()}</p>,
  }),
  columnHelper.accessor("document", {
    header: "제출서류",
    cell: (info) => <DocumentInspectButton info={info} />,
  }),
  columnHelper.accessor("approvalDate", {
    header: "신청일시",
    cell: (info) => <p className="text-form-text whitespace-no-wrap">{info.renderValue()}</p>,
  }),
  columnHelper.accessor("approvalStatus", {
    header: "승인여부",
    cell: (info) => (
      <Badge variant={info.renderValue()} className="flex justify-center">
        <span>{info.renderValue()}</span>
      </Badge>
    ),
  }),
  columnHelper.accessor("approvalReason", {
    header: "승인거부 사유",
    cell: (info) => <p className="text-form-text whitespace-no-wrap">{info.renderValue()}</p>,
  }),
  columnHelper.accessor("requestDate", {
    header: "승인일시",
    cell: (info) => <p className="text-form-text whitespace-no-wrap">{info.renderValue()}</p>,
  }),
  columnHelper.accessor("manager", {
    header: "관리자",
    cell: (info) => <p className="text-form-text whitespace-no-wrap">{info.renderValue()}</p>,
  }),
];
