import React from "react";
import "./MaterialInput.css";

interface MaterialInputProps {
  value: string;
  onChange: (event: any) => void;
  placeholder?: string;
  name: string;
  onKeyDown?: (event: any) => void;
  icon?: string;
  onIconClick?: () => void;
  disabled?: boolean;
  children?: JSX.Element;
}

function MaterialInput({
  value,
  onChange,
  placeholder = "",
  name,
  onKeyDown,
  icon,
  onIconClick,
  disabled = false,
  children,
}: MaterialInputProps) {
  return (
    <div className="tw-relative tw-border-b-2 focus-within:tw-border-indigo-200 tw-w-full">
      <input
        type="text"
        disabled={disabled}
        name={name}
        placeholder={placeholder}
        className="tw-block tw-w-full tw-appearance-none focus:tw-outline-none tw-bg-transparent tw-pr-6"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      {children}

      {/* <label className="tw-absolute tw-top-0 tw-duration-300 tw-origin-0">Username</label> */}
    </div>
  );
}

export default MaterialInput;
