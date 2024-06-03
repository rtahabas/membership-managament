import React, { useState, useCallback } from "react";
import { Application } from "../fakeData";
import { Pagination } from "./Pagination";
import DialogModal from "../modals/DialogModal";
import {
  ColumnFiltersState,
  PaginationState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import ApprovalRejectionModal from "../modals/ApprovalRejectionModal";
import ApplicationEditModal from "../modals/ApplicationEditModal";
import HeaderSection from "./HeaderSection";
import ActionSection from "./ActionSection";
import TableSection from "./TableSection";
import useApplicationsStore from "@/stores/useApplicationsStore";
import { ColumnType, columns } from "./helpers";
import useDialogModalStore from "@/stores/useDialogModalStore";
import FilesModal from "../modals/FilesModal";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const InvestmentTable: React.FC = () => {
  const { applications, selectedRowIds, setSelectedRowIds, setApplications } = useApplicationsStore();
  const { setDialogProps, setIsDialogOpen } = useDialogModalStore();
  const [changeApprovalStatus, setChangeApprovalStatus] = useState<Application["approvalStatus"]>();
  const [isApprovalRejectionOpen, setIsApprovalRejectionOpen] = useState<boolean>(false);
  const [isFilesModalOpen, setIsFilesModalOpen] = useState<boolean>(false);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: 10 });

  const table = useReactTable({
    data: applications,
    columns,
    state: { rowSelection: selectedRowIds, pagination, columnFilters },
    enableRowSelection: true,
    enableFilters: true,
    onRowSelectionChange: setSelectedRowIds,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onPaginationChange: setPagination,
  });

  const selectedRowCount = Object.keys(selectedRowIds).length;
  const shouldApplyStatusChange = changeApprovalStatus && selectedRowCount > 0;
  const selectedRowIdKeys = Object.keys(selectedRowIds);
  const onPaginationSizeChange = (value: string) => {
    setPagination({ pageIndex: 0, pageSize: parseInt(value) });
  };

  const handleApprovalStatusChange = useCallback(
    (value: string) => {
      setColumnFilters((prev) => [...prev, { id: "approvalStatus", value }]);
      setSelectedRowIds({});
    },
    [setSelectedRowIds]
  );

  const handleChangeApprovalStatus = useCallback((value: string) => {
    setChangeApprovalStatus(value as Application["approvalStatus"]);
  }, []);

  const handleApplyChanges = () => {
    if (!shouldApplyStatusChange) return;

    if (changeApprovalStatus === "승인거부") {
      setIsApprovalRejectionOpen(true);
      return;
    }

    setDialogProps({
      status: "success",
      submitButtonText: "확인",
      description: `저장되었습니다.`,
      onSubmit: () => setIsDialogOpen(false),
    });
    setIsDialogOpen(true);

    setApplications(
      applications.map((app) =>
        selectedRowIdKeys.includes(app.no.toString()) ? { ...app, approvalStatus: changeApprovalStatus } : app
      )
    );
    setSelectedRowIds({});
  };

  const onSort = (sortBy: "requestDate" | "approvalDate") => {
    const sortedApplications = [...applications].sort((a, b) =>
      new Date(a[sortBy]).getTime() > new Date(b[sortBy]).getTime() ? -1 : 1
    );
    setApplications(sortedApplications);
  };

  const onSubmit = (approvalReason: string) => {
    setApplications(
      applications.map((a) =>
        selectedRowIdKeys.includes(a.no.toString()) ? { ...a, approvalReason, approvalStatus: "승인거부" } : a
      )
    );
    setSelectedRowIds({});
  };

  const rejectCount = applications.filter((application) => application.approvalStatus === "승인거부").length;
  const totalCount = applications.length;

  return (
    <>
      <main className={`items-center p-4 !pt-0 ${inter.className}`}>
        <div className="container mx-auto 2xl:px-8  xl:px-6 md:px-2 sm:px-2">
          <div>
            <HeaderSection
              rejectCount={rejectCount}
              totalCount={totalCount}
              onSort={onSort}
              onPaginationSizeChange={onPaginationSizeChange}
              onApprovalStatusChange={handleApprovalStatusChange}
            />
            <hr className="border-1 border-gray-300" />
            <ActionSection
              onRegisterClick={() => setIsFilesModalOpen(true)}
              selectedRowCount={selectedRowCount}
              shouldApplyStatusChange={shouldApplyStatusChange}
              handleChangeApprovalStatus={handleChangeApprovalStatus}
              handleApplyChanges={handleApplyChanges}
              setIsApprovalRejectionOpen={setIsApprovalRejectionOpen}
            />
            <TableSection table={table} />
          </div>
        </div>
      </main>
      <footer className="pb-20">
        <Pagination<ColumnType> table={table} />
      </footer>
      <DialogModal />
      <ApprovalRejectionModal
        onSubmit={onSubmit}
        isOpen={isApprovalRejectionOpen}
        setIsOpen={setIsApprovalRejectionOpen}
      />
      <ApplicationEditModal />
      <FilesModal isOpen={isFilesModalOpen} setIsOpen={setIsFilesModalOpen} />
    </>
  );
};

export default InvestmentTable;
