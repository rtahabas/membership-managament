import { Application } from "@/components/fakeData";
import { create } from "zustand";

type ApplicationModalStore = {
  applicationModalProps?: Application | undefined;
  isApplicationOpen: boolean;
  setIsApplicationOpen: (isApplicationOpen: boolean) => void;
  setApplicationModalProps: (applicationModalProps: Application) => void;
};

const useApplicationModalStore = create<ApplicationModalStore>((set) => ({
  isApplicationOpen: false,
  applicationModalProps: undefined,
  setIsApplicationOpen: (isApplicationOpen: boolean) => set({ isApplicationOpen }),
  setApplicationModalProps: (applicationModalProps: Application | undefined) => set({ applicationModalProps }),
}));

export default useApplicationModalStore;
