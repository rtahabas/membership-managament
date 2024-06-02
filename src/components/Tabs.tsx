import React from "react";

const tabs = [
  "기본정보 관리",
  "투자유형 관리",
  "입출금내역 조회",
  "영업내역 조회",
  "투자내역 조회",
  "채권내역 조회",
  "SMS 관리",
  "상담내역 관리",
  "1:1문의내역 조회",
];

const Tabs: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="flex items-center justify-start">
        <h1 className="text-2xl font-semibold text-gray-900 my-4">회원상세 </h1>
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <div className="w-1 h-1 bg-form-warning-text rounded-full self-start"></div>
            <span className="text-form-warning-text font-bold">필수항목</span>
          </div>
        </div>
      </div>
      <div className="mb-[43.2px]">
        <div className="flex border-t pt-3 border-gray-300 flex-col lg:flex-row">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`w-full text-base p-2.5 text-center cursor-pointer border ${
                index === 0
                  ? "rounded-tl-lg rounded-tr-lg lg:rounded-tr-none rounded-bl-none lg:rounded-bl-lg"
                  : index === tabs.length - 1
                  ? "rounded-tr-none lg:rounded-tr-lg rounded-br-lg rounded-bl-lg lg:rounded-bl-none"
                  : ""
              } ${index === 1 ? "bg-primary text-white border-primary" : "bg-gray-100  text-form-completed"}`}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
