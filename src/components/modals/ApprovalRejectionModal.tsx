import React, { useState } from "react";
import Modal, { BaseModalProps } from "./Modal";
import Image from "next/image";
import Button from "../Button";
import X from "@/assets/svg/x-close.svg";
import useApplicationsStore from "@/stores/useApplicationsStore";
import useDialogModalStore from "@/stores/useDialogModalStore";

type Props = BaseModalProps & {
  onSubmit: (reason: string) => void;
  onCancel?: () => void;
};

const reasons = [
  { id: "unreadable", value: "서류 식별 불가" },
  { id: "missing", value: "필수 서류 누락" },
  { id: "mismatch", value: "서류의 내용이 등록된 회원정보와 다름" },
  { id: "incomplete", value: "서류에 누락된 내용이 있음" },
  { id: "expired", value: "서류의 유효기간이 초과됨" },
  { id: "custom", value: "직접 입력" },
];

const ApprovalRejectionModal: React.FC<Props> = ({ onSubmit, ...baseModalProps }) => {
  const { selectedRows } = useApplicationsStore();
  const { dialogProps, setDialogProps, setIsDialogOpen } = useDialogModalStore();
  const [reason, setReason] = useState("");
  const [customReason, setCustomReason] = useState("");

  const no = selectedRows.map((person) => person.no).join(", ");
  const names = selectedRows.map((person) => person.name).join(", ");
  const manager = selectedRows.map((person) => person.manager).join(", ");
  const lastDate = selectedRows.map((person) => person.requestDate).join(", ");

  const openModal = () => baseModalProps.setIsOpen(true);
  const closeModal = () => baseModalProps.setIsOpen(false);
  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const handleReasonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReason(event.target.value);
    if (event.target.value !== "직접 입력") {
      setCustomReason("");
    }
  };

  const handleCustomReasonChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCustomReason(event.target.value);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    openDialog();

    const finalReason = reason === "직접 입력" ? customReason : reason;
    setReason(finalReason);

    setDialogProps({
      ...dialogProps,
      status: "warning",
      submitButtonText: "확인",
      description: `선택된 ${selectedRows.length}명의 승인상태를 변경하시겠습니까?`,
      onSubmit: () => onSubmit(finalReason),
      onCancel: () => {
        closeDialog();
        openModal();
      },
    });

    closeModal();
  };

  const handleClose = () => {
    closeDialog;
    closeModal();
  };

  return (
    <Modal
      {...baseModalProps}
      classes="absolute !w-full lg:!w-[800px] overflow-auto !h-dvh overflow-auto !rounded-none lg:!rounded-xl lg:!h-[687px] bg-white !px-0"
    >
      <div className="flex flex-col h-full justify-center">
        <div className="flex justify-between pb-5 border-b">
          <p className="text-lg font-semibold pl-6">승인거부 사유 입력</p>
          <button className="pr-6" onClick={closeModal}>
            <Image src={X} alt="xclose" />
          </button>
        </div>
        <form onSubmit={handleSave}>
          <div className="pt-5 px-6">
            <div className="flex border border-t-gray-300">
              <label className="p-4 text-sm font-medium text-gray-700 bg-light-blue min-w-28 sm:min-w-40 max-w-40">
                회원번호
              </label>
              <input type="text" value={no} disabled className="w-full text-sm bg-white pl-5" />
            </div>
            <div className="flex border border-b-gray-300">
              <label className="p-4 text-sm font-medium text-gray-700 min-w-28 sm:min-w-40 max-w-40 bg-light-blue">
                회원명/법인명
              </label>
              <input type="text" value={names} disabled className="w-full text-sm bg-white pl-5" />
            </div>
            <div className="flex border border-l-gray-300">
              <label className="flex items-center p-4 text-sm font-medium text-gray-700 min-w-28 sm:min-w-40 max-w-40 bg-light-blue">
                승인거부 사유
              </label>
              <div className="pt-2 pl-5 w-full pb-4 border-b-gray-300">
                {reasons.map(({ id, value }) => (
                  <div className="flex items-center" key={id}>
                    <input
                      type="radio"
                      id={id}
                      name="reason"
                      value={value}
                      onChange={handleReasonChange}
                      className="-ml-3 opacity-0 invisible"
                      required={reason !== "직접 입력"}
                    />
                    <label className="text-sm flex items-center cursor-pointer" htmlFor={id}>
                      <span className="w-4 h-4 inline-block mr-1 border rounded border-grey bg-form-textarea"></span>
                      {value}
                    </label>
                  </div>
                ))}
                <div className="items-center">
                  <textarea
                    disabled={reason !== "직접 입력"}
                    value={customReason}
                    onChange={handleCustomReasonChange}
                    className="mt-2 w-auto lg:w-[552px] border-gray-300 bg-form-textarea border pt-3 p-3 text-sm resize-none h-[100px] rounded-lg"
                    placeholder="사유 입력"
                    required={reason === "직접 입력"}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center mt-5 flex-col lg:flex-row">
              <div className="flex border w-full border-b-gray-300 mr-0 lg:mr-1.5">
                <label className="p-4 text-sm font-medium text-gray-700 min-w-28 sm:min-w-40 max-w-40 bg-light-blue">
                  최근저장일시
                </label>
                <input type="text" value={lastDate} disabled className="w-full text-sm bg-white pl-5" />
              </div>
              <div className="flex border w-full border-b-gray-300">
                <label className="p-4 text-sm font-medium text-gray-700 min-w-28 sm:min-w-40 max-w-40 bg-light-blue">
                  관리자
                </label>
                <input type="text" value={manager} disabled className="w-full text-sm bg-white pl-5" />
              </div>
            </div>
          </div>
          <div className="mt-[32px] border-b"></div>
          <div className="flex justify-center items-center mt-[24px]">
            <Button type="submit" className="w-[170px] h-[44px]">
              제출
            </Button>
            <Button
              className="ml-3 w-[170px] h-[44px] bg-white hover:bg-primary text-primary hover:text-white border-primary border-[1.5px] py-0"
              onClick={handleClose}
            >
              취소
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ApprovalRejectionModal;
