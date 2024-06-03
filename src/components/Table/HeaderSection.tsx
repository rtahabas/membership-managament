import Select from "../Select";

type Props = {
  totalCount: number;
  rejectCount: number;
  onPaginationSizeChange: (value: string) => void;
  onSort: (sortBy: "approvalDate" | "requestDate") => void;
  onApprovalStatusChange: (value: string) => void;
};

const options = {
  paginationSize: [
    { label: "2개씩 보기", value: "2개씩 보기" },
    { label: "4개씩 보기", value: "4개씩 보기" },
    { label: "10개씩 보기", value: "10개씩 보기" },
    { label: "12개씩 보기", value: "12개씩 보기" },
    { label: "50개씩 보기", value: "50개씩 보기" },
  ],
  sort: [
    { label: "신청일시순", value: "requestDate" },
    { label: "승인일시순", value: "approvalDate" },
  ],
  approvalStatus: [
    { label: "승인완료", value: "승인완료" },
    { label: "승인거부", value: "승인거부" },
  ],
};

const HeaderSection: React.FC<Props> = ({
  onSort,
  totalCount,
  rejectCount,
  onPaginationSizeChange,
  onApprovalStatusChange,
}) => (
  <div className="flex justify-between items-start lg:items-center  mb-3.5 flex-col lg:flex-row">
    <div className="flex items-center justify-start">
      <h1 className="text-2xl font-semibold text-gray-900 ">신청 목록 </h1>
      <div className="flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <div className="w-1 h-1 bg-form-warning-text rounded-full self-start"></div>
          <span className=" text-text-dark-3">
            (총 {totalCount}명 | 승인대기 <span className="text-form-warning-text ">{rejectCount}</span>건)
          </span>
        </div>
      </div>
    </div>
    <div className="flex space-x-2 space-y-2 lg:space-y-0 mt-2 lg:mt-0 w-full lg:w-auto flex-col lg:flex-row">
      <Select
        className="w-full lg:w-full"
        placeholder="보기 크기"
        onChange={onPaginationSizeChange}
        options={options.paginationSize}
      />
      <Select
        className="w-full lg:w-full"
        placeholder="신청일시순"
        onChange={(e) => onSort(e as "approvalDate" | "requestDate")}
        options={options.sort}
      />
      <Select
        className="w-full lg:w-full"
        placeholder="승인상태 변경"
        onChange={onApprovalStatusChange}
        options={options.approvalStatus}
      />
    </div>
  </div>
);
export default HeaderSection;
