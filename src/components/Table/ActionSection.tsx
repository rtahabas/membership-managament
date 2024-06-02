import Button from "../Button";
import Select from "../Select";

const options = [
  { label: "승인완료", value: "승인완료" },
  { label: "승인거부", value: "승인거부" },
  { label: "승인대기", value: "승인대기" },
];

type Props = {
  selectedRowCount: number;
  shouldApplyStatusChange?: boolean;
  handleChangeApprovalStatus: (value: string) => void;
  handleApplyChanges: () => void;
  onRegisterClick: () => void;
  setIsApprovalRejectionOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ActionSection: React.FC<Props> = ({
  selectedRowCount,
  shouldApplyStatusChange,
  handleChangeApprovalStatus,
  handleApplyChanges,
  onRegisterClick,
}) => {
  return (
    <div className="flex justify-between items-start mt-4 mb-2 flex-col-reverse lg:items-center lg:flex-row">
      <Button onClick={onRegisterClick}> 등록</Button>
      <div className="flex items-center space-x-2 mb-2 lg:mb-0">
        <span>선택한 {selectedRowCount}건</span>
        <Select placeholder="승인상태 변경" onChange={handleChangeApprovalStatus} options={options} />
        <Button disabled={!shouldApplyStatusChange} onClick={handleApplyChanges}>
          저장
        </Button>
      </div>
    </div>
  );
};
export default ActionSection;
