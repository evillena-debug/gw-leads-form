import React from "react";

interface InputFieldProps {
  type: string;
  placeholder: string;
  "aria-label": string;
}

export const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  "aria-label": ariaLabel,
}) => {
  return (
    <div className="w-full">
      <label htmlFor={ariaLabel} className="sr-only">
        {ariaLabel}
      </label>
      <input
        id={ariaLabel}
        type={type}
        placeholder={placeholder}
        aria-label={ariaLabel}
        className="px-5 py-0 text-lg bg-white border border-solid border-zinc-400 h-[70px] w-[636px] max-md:w-full max-sm:text-base max-sm:h-[60px]"
      />
    </div>
  );
};
