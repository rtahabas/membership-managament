import React, { useState, useRef, useEffect } from "react";
import ChevronDown from "@/assets/svg/chevron-down.svg";
import Chevronup from "@/assets/svg/chevron-up.svg";
import Image from "next/image";

type Option = {
  value: string;
  label: string;
};

type Props = {
  options: Option[];
  placeholder: string;
  onChange: (value: string) => void;
  className?: string;
};

const renderRadius = (index: number, length: number) => {
  if (index === 0) return "rounded-lg rounded-b-none";

  if (length - 1 === index) return "rounded-lg rounded-t-none";
  return "";
};

const Select = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [option, setOption] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  const toggle = () => setOpen(!open);

  const selectOptions = (val: string) => {
    setOption(val);
    setOpen(false);
    props.onChange(val);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const optionLabel = props.options.find((o) => o.value === option)?.label;

  return (
    <div className="relative !ml-1" ref={ref}>
      <button
        type="button"
        onClick={toggle}
        className={` py-2.5 px-3 border rounded-lg border-form-completed w-[150px]  flex items-center justify-between leading-4  ${
          props.className
        } bg-white p-2  ${open && "ring-blue-600"}`}
      >
        <span>{option === "" ? props.placeholder : optionLabel}</span>
        <Image src={open ? Chevronup : ChevronDown} alt="chevron" />
      </button>

      {open && (
        <ul className={`z-2 absolute mt-1 rounded w-[150px]  bg-white ring-1 ring-gray-300 z-10 ${props.className} `}>
          {props.options.map((opt, index) => (
            <li
              key={opt.value}
              className={`pl-4 py-1.5 cursor-pointer select-none p-2 hover:bg-slate-700 hover:text-white  
              ${renderRadius(index, props.options.length)}`}
              onClick={() => selectOptions(opt.value ? opt.value : opt.label)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
