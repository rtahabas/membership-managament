import { Props as DialogModalProps } from "@/components/modals/DialogModal";
import { create } from "zustand";

type DialogModalStore = {
  isDialogOpen: boolean;
  setIsDialogOpen: (isDialogOpen: boolean) => void;
  dialogProps?: DialogModalProps;
  setDialogProps: (props: DialogModalProps) => void;
};

const useDialogModalStore = create<DialogModalStore>((set) => ({
  isDialogOpen: false,
  dialogProps: undefined,
  setIsDialogOpen: (isDialogOpen: boolean) => set({ isDialogOpen }),
  setDialogProps: (props: DialogModalProps) => set({ dialogProps: props }),
}));

export default useDialogModalStore;
