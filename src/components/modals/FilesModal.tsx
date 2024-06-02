import React from "react";
import Modal, { BaseModalProps } from "./Modal";
import Image from "next/image";
import Button from "../Button";
import X from "@/assets/svg/x-close.svg";

const FilesModal: React.FC<BaseModalProps> = ({ ...baseModalProps }) => {
  const closeModal = () => baseModalProps.setIsOpen(false);

  return (
    <Modal {...baseModalProps} classes="absolute !w-full lg:!w-[800px] !h-[750px] bg-white !px-0 overflow-auto">
      <div className="flex flex-col justify-center">
        <div className="flex justify-between pb-5 border-b">
          <p className="text-lg font-semibold pl-6">서류 보기</p>
          <button className="pr-6" onClick={closeModal}>
            <Image src={X} alt="xclose" />
          </button>
        </div>
        <form>
          <div className="pt-5 px-6">
            <div className="flex border border-gray-300 rounded-lg h-[500px] overflow-hidden">
              <label className="flex justify-center items-center rounded-tl-lg rounded-bl-lg text-sm font-medium text-gray-700 bg-light-blue w-[160px]">
                <div className="flex items-center space-x-1">
                  <span>서류</span>
                  <div className="w-1 h-1 bg-form-warning-text rounded-full self-start"></div>
                </div>
                <span></span>
              </label>
              <div className="overflow-auto w-full flex flex-col">
                <input
                  type="text"
                  placeholder="img"
                  disabled
                  className=" text-center text-sm min-h-[500px]  bg-form-img-input ml-4 mt-4 mb-1 mr-2 border border-form-border rounded-lg placeholder:text-dark-3 placeholder:font-medium"
                />
                <input
                  type="text"
                  placeholder="img"
                  disabled
                  className="text-center text-sm min-h-[500px] bg-form-img-input ml-4 mb-4 mt-1 mr-2 border border-form-border rounded-lg placeholder:text-dark-3 placeholder:font-medium"
                />
              </div>
            </div>
          </div>
          <div className="mt-[32px] border-b"></div>
          <div className="flex justify-center items-center mt-[24px]">
            <Button className="w-[160px] h-[44px] border-[1.5px] border-form-border bg-form-default text-form-button-text">
              파일 다운로드
            </Button>
            <Button className="ml-2 w-[160px] h-[44px]" onClick={closeModal} type="submit">
              확인
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default FilesModal;
