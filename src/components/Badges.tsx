import React from "react";
import { twMerge } from "tailwind-merge";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "승인완료" | "승인대기" | "승인거부" | null;
  className?: string;
}
const baseStyle = `
     w-[69px] inline-flex items-center  py-0.5  lg:px-2.5 rounded-full text-sm font-medium
  `;

const variantStyle = {
  승인완료: "bg-green-100 text-statust-text-approval",
  승인대기: "bg-orange-100 text-statust-text-waiting",
  승인거부: "bg-red-100 text-statust-text-refusal",
};

const Badge: React.FC<BadgeProps> = ({ children, variant = "승인완료", className = "" }) => {
  const classNames = twMerge(baseStyle, variant ? variantStyle[variant] : [], className);
  return <span className={classNames}>{children}</span>;
};

export default Badge;
