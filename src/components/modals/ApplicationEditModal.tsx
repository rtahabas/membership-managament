import React, { useRef, useState } from "react";

import Modal from "./Modal";
import Select from "../Select";
import Button from "../Button";
import X from "@/assets/svg/x-close.svg";
import Image from "next/image";
import useApplicationModalStore from "@/stores/useApplicationModalStore";
import useDialogModalStore from "@/stores/useDialogModalStore";

const options = [
  { value: "일반개인", label: "일반개인" },
  { value: "소득적격", label: "소득적격" },
  { value: "개인전문", label: "개인전문" },
  { value: "법인", label: "법인" },
  { value: "여신금융", label: "여신금융" },
  { value: "P2P온투", label: "P2P온투" },
];

const allowedTypes = ["image/jpeg", "image/jpg", "image/gif", "image/png", "application/pdf"];
const MAX_FILE_COUNT = 10;
const MAX_FILE_SIZE = 1000000; // 100MB

const ApplicationEditModal: React.FC = () => {
  const { isApplicationOpen, setIsApplicationOpen, applicationModalProps } = useApplicationModalStore();
  const { dialogProps, setDialogProps, setIsDialogOpen } = useDialogModalStore();
  const no = applicationModalProps?.no;
  const names = applicationModalProps?.name;

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);
  const openModal = () => setIsApplicationOpen(true);
  const closeModal = () => setIsApplicationOpen(false);

  const [fileList, setFileList] = useState<File[]>([]);
  const ref = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    openDialog();
    closeModal();
    setDialogProps({
      ...dialogProps,
      status: "warning",
      submitButtonText: "확인",
      description: `저장되었습니다.`,
      onCancel: () => {
        closeDialog();
        openModal();
      },
      onSubmit: () => {
        closeDialog();
        openModal();
      },
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileType = e.target.files?.[0]?.type || "";
    const fileSize = e.target.files?.[0]?.size || 0;

    if (fileList.length > MAX_FILE_COUNT) {
      openDialog();
      setDialogProps({
        ...dialogProps,
        status: "warning",
        submitButtonText: "확인",
        description: `최대 10개까지 등록 가능합니다.`,
        onCancel: undefined,
        onSubmit: () => {
          closeDialog();
          openModal();
        },
      });
      return closeModal();
    }

    if (!allowedTypes.includes(fileType)) {
      openDialog();
      setDialogProps({
        ...dialogProps,
        status: "warning",
        submitButtonText: "확인",
        description: `jpg, jpeg, gif, png, pdf 파일만 등록 가능합니다.`,
        onCancel: undefined,
        onSubmit: () => {
          closeDialog();
          openModal();
        },
      });
      return closeModal();
    }

    if (fileSize > MAX_FILE_SIZE) {
      openDialog();
      setDialogProps({
        ...dialogProps,
        status: "warning",
        submitButtonText: "확인",
        description: `100MB 이하로 등록 가능합니다.`,
        onCancel: undefined,
        onSubmit: () => {
          closeDialog();
          openModal();
        },
      });
      return closeModal();
    }

    if (e.target.files) {
      setFileList([...fileList, ...Array.from(e.target.files)]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setFileList(fileList.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (fileList.length === 0) {
      openDialog();
      setDialogProps({
        ...dialogProps,
        status: "warning",
        submitButtonText: "확인",
        description: `필수입력항목을 입력해주세요.`,
        onCancel: undefined,
        onSubmit: () => {
          closeDialog();
          openModal();
        },
      });
      return closeModal();
    }

    openDialog();
    setDialogProps({
      ...dialogProps,
      status: "success",
      submitButtonText: "확인",
      description: `저장되었습니다.`,
      onSubmit: () => {
        closeDialog();
      },
      onCancel: undefined,
    });

    closeModal();
  };

  return (
    <Modal
      isOpen={isApplicationOpen}
      setIsOpen={setIsApplicationOpen}
      classes="absolute !w-full lg:!w-[800px] !h-full lg:!h-[475px] bg-white !px-0 !rounded-none lg:!rounded-xl"
    >
      <div className="flex justify-between pb-5 border-b">
        <p className="text-lg font-semibold pl-6">투자유형 변경</p>
        <button className="pr-6" onClick={() => closeModal()}>
          <Image src={X} alt="xclose" />
        </button>
      </div>
      <form onSubmit={handleSubmit} className="pt-5 px-4">
        <div className="flex border items-center border-gray-300">
          <label className="p-4 text-sm font-semibold text-gray-700 min-w-40 max-w-40 bg-light-blue">회원번호</label>
          <input type="text" value={no} disabled className="w-full text-sm font-light bg-white pl-5" />
        </div>
        <div className="flex border items-center border-gray-300 border-t-0">
          <label className="p-4 text-sm font-semibold text-gray-700 min-w-40 max-w-40 bg-light-blue">
            회원명/법인명
          </label>
          <input type="text" value={names} disabled className="w-full text-sm bg-white font-light pl-5" />
        </div>
        <div className="flex items-center border border-gray-300 border-t-0">
          <label className=" flex p-4 text-sm font-semibold text-gray-700 min-w-40 max-w-40 bg-light-blue">
            <span>투자유형</span>
            <div className="w-1 h-1 bg-form-warning-text rounded-full self-start ml-1"></div>
          </label>
          <Select
            className=" ml-2 w-[282px] font-light"
            placeholder={options[0].label}
            onChange={handleChange}
            options={options}
          />
        </div>
        <div className="flex border items-center border-gray-300 border-t-0">
          <label className="flex p-4 text-sm font-semibold text-gray-700 min-w-40 max-w-40 bg-light-blue">
            <span>서류첨부</span>
            <div className="w-1 h-1 bg-form-warning-text rounded-full self-start ml-1"></div>
          </label>
          <Button
            type="button"
            className="bg-form-default border border-form-border font-light text-sm text-form-text py-2.5 ml-2 px-3"
            onClick={() => ref.current?.click()}
          >
            파일 선택
          </Button>
          <input
            ref={ref}
            type="file"
            multiple
            onChange={handleFileChange}
            className="w-full text-sm bg-white  hidden"
          />
          <ul className="flex">
            {fileList.map((file, index) => (
              <li
                key={index}
                className="flex justify-between items-center ml-2 
              "
              >
                <span className="underline underline-offset-1 text-text-dark-3">{file.name}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveFile(index)}
                  className="flex items-center justify-center w-[15px] h-[15px] text-white font-light rounded-lg ml-1 bg-form-textarea"
                >
                  &times;
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <ul className="text-sm text-gray-500 list-disc ml-6 mt-2">
            <li>파일 형식은 jpg, jpeg, gif, png, pdf만 가능합니다.</li>
            <li>최대 10개, 100MB까지 등록이 가능합니다.</li>
          </ul>
        </div>
        <div className="mt-[32px] border-b"></div>
        <div className="flex justify-center items-center mt-[24px]">
          <Button type="submit" className="w-[170px] h-[44px]">
            저장
          </Button>
          <Button
            className="ml-3 w-[170px] h-[44px] bg-white hover:bg-primary text-primary hover:text-white border-primary border-[1.5px] py-0"
            onClick={() => closeModal()}
          >
            취소
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default ApplicationEditModal;
