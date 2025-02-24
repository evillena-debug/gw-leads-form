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
            className="text-xl font-semibold text-neutral-500"
          >
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioGroup;
