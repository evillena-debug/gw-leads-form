import React from "react";

interface SubmitButtonProps {}

export const SubmitButton: React.FC<SubmitButtonProps> = () => {
  return (
    <div className="mt-10">
      <button
        type="submit"
        className="w-40 text-base font-semibold text-violet-300 bg-blue-700 rounded-3xl border border-blue-500 border-solid cursor-pointer h-[45px] max-sm:w-full"
      >
        Siguiente
      </button>
    </div>
  );
};
