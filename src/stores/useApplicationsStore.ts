import { Application, initialApplications } from "@/components/fakeData";
import { OnChangeFn, RowSelectionState } from "@tanstack/react-table";
import { create } from "zustand";

interface ApplicationsStore {
  applications: Application[];
  selectedRows: Application[];
  selectedRowIds: Record<number, boolean>;
  setApplications: (newApplications: Application[]) => void;
  setSelectedRows: (newSelectedRows: Application[]) => void;
  setSelectedRowIds: OnChangeFn<RowSelectionState>;
}

const useApplicationsStore = create<ApplicationsStore>((set) => ({
  applications: initialApplications,
  selectedRows: [],
  selectedRowIds: {},
  setApplications: (newApplications) => set({ applications: newApplications }),
  setSelectedRows: (newSelectedRows) => set({ selectedRows: newSelectedRows }),
  setSelectedRowIds: (updater) => {
    set((prev) => {
      let newSelectedRowIds = {};
      if (typeof updater === "function") newSelectedRowIds = updater(prev.selectedRowIds);
      else newSelectedRowIds = updater;
      const selectedRows = prev.applications.filter((application) =>
        Object.keys(newSelectedRowIds).includes(application.no.toString())
      );
      return { selectedRows, selectedRowIds: newSelectedRowIds };
    });
  },
}));

export default useApplicationsStore;
