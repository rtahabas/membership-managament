import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  status: "success" | "warning" | "refusal";
  description: string;
  submitButtonText: string;
  classes?: string;
  setIsOpen: (value: boolean) => void;
  setStatus: (status: "success" | "warning") => void;
  setDescription: (description: string) => void;
  setSubmitButtonText: (text: string) => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  status: "success",
  description: "",
  submitButtonText: "",
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
  setClasses: (classes: any) => set({ classes }),
  setStatus: (status) => set({ status }),
  setDescription: (description) => set({ description }),
  setSubmitButtonText: (text) => set({ submitButtonText: text }),
}));
