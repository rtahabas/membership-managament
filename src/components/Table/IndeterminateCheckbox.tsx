import React from "react";

type Props = React.HTMLProps<HTMLInputElement> & { index?: number; indeterminate?: boolean };

const IndeterminateCheckbox: React.FC<Props> = ({ indeterminate, index = 0, className = "", ...rest }) => {
  const ref = React.useRef<HTMLInputElement>(null!);

  React.useEffect(() => {
    if (typeof indeterminate === "boolean") {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate]);

  return (
    <label className="custom-checkbox">
      <input ref={ref} type="checkbox" checked={true} className={`${className}  cursor-pointer  `} {...rest} />
      <span className={`checkmark ${(index + 1) % 3 === 1 ? "!bg-white" : "!bg-form-textarea"}`}></span>
    </label>
  );
};

export default IndeterminateCheckbox;
