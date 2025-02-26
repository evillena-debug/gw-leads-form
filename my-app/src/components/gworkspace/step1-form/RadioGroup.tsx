import React from "react";

interface RadioOption {
  id: string;
  label: string;
}

interface RadioGroupProps {
  options: RadioOption[];
  name: string;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ options, name }) => {
  return (
    <div className="flex flex-col gap-5 mb-8">
      {options.map((option) => (
        <div key={option.id} className="flex gap-7 items-center">
          <input
            type="radio"
            id={option.id}
            name={name}
            className="border-2 border-solid border-neutral-500 h-[25px] w-[25px]"
          />
          <label
            htmlFor={option.id}
            className="text-xl font-semibold"
            style={{
              color: "var(--gm3-form-field-label-text-color, #1f1f1f)",
              fontFamily: 'var(--gm3-form-field-label-text-font, "Google Sans", Roboto, Arial, sans-serif)',
              fontSize: "var(--gm3-form-field-label-text-size, 1rem)",
              letterSpacing: "var(--gm3-form-field-label-text-tracking, .015625em)",
              lineHeight: "var(--gm3-form-field-label-text-line-height, 1.25rem)",
              marginInline: "0 auto",
              order: 0,
              paddingInline: "var(--gm3-form-field-label-padding-left, 0) var(--gm3-form-field-label-padding-right, 0)"
            }}
          >
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioGroup;
