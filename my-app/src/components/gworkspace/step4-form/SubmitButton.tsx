import * as React from "react";

const SubmitButton: React.FC = () => {
  return (
    <button
      type="submit"
      className="flex flex-col justify-center px-1.5 py-1 mt-7 max-w-full text-sm text-blue-200 bg-black bg-opacity-0 w-[186px] max-md:ml-1.5"
    >
      <span className="px-5 py-3.5 bg-blue-700 rounded-2xl max-md:px-5">
        Aceptar y continuar
      </span>
    </button>
  );
};

export default SubmitButton;
