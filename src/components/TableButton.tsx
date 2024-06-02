import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

const TableButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) => {
  const baseStyle = `
        px-[18px] py-[7px] rounded-[10px] w-[61px] font-semibold focus:outline-none
        transition duration-200 ease-in-out bg-form-default text-dark
    `;

  const enabledStyle = `
        bg-blue-500 hover:bg-blue-200 focus:ring-2 focus:ring-blue-400
    `;

  const disabledStyle = `
        bg-gray-400 cursor-not-allowed
    `;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${disabled ? disabledStyle : enabledStyle} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default TableButton;
