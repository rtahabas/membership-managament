import Image from "next/image";
import React from "react";
import Button from "../Button";
import Checkmark from "@/assets/svg/check-circle.svg";
import Warning from "@/assets/svg/warning-circle.svg";
import X from "@/assets/svg/x-close.svg";
import Modal from "./Modal";
import useDialogModalStore from "@/stores/useDialogModalStore";

export type Props = {
  status: "success" | "warning";
  submitButtonText: string;
  description: string;
  onCancel?: () => void;
  onSubmit?: () => void;
};

const DialogModal: React.FC = () => {
  const { isDialogOpen, setIsDialogOpen, dialogProps } = useDialogModalStore();
  const { status, submitButtonText, description, onCancel, onSubmit } = dialogProps || {};

  const closeModal = () => setIsDialogOpen(false);

  const handleClose = () => {
    onCancel?.();
    closeModal();
  };

  const handleSubmit = () => {
    onSubmit?.();
    closeModal();
  };

  return (
    <Modal
      classes="!w-full lg:!w-[400px] !rounded-none lg:!rounded-lg relative bg-white"
      isOpen={isDialogOpen}
      setIsOpen={setIsDialogOpen}
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-between">
          <Image src={status === "warning" ? Warning : Checkmark} alt="check" />
          <button onClick={closeModal}>
            <Image src={X} alt="xclose" />
          </button>
        </div>
        <p className="mt-4">{description}</p>
        <div className="flex justify-center items-center mt-8">
          <Button className="w-[170px] h-[44px]" onClick={handleSubmit}>
            {submitButtonText}
          </Button>
          {onCancel && (
            <Button
              className="ml-3 w-[170px] h-[44px] bg-white hover:bg-primary text-primary hover:text-white border-primary border-[1.5px] py-0"
              onClick={handleClose}
            >
              취소
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default DialogModal;
