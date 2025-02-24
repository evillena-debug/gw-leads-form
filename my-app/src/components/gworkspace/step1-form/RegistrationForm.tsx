import React from "react";
import RadioGroup from "./RadioGroup";

const employeeOptions = [
  { id: "solo", label: "Solo tú" },
  { id: "entre2y9", label: "Entre 2 y 9" },
  { id: "entre10y99", label: "Entre 10 y 99" },
  { id: "entre100y299", label: "Entre 100 y 299" },
  { id: "mas300", label: "Más de 300" },
];

const RegistrationForm: React.FC = () => {
  return (
    <div className="flex-1 p-6 max-sm:p-4">
      <h1 className="mb-6 text-3xl font-semibold text-neutral-700">
        Comencemos
      </h1>
      <form className="max-w-[450px]">
        <label htmlFor="companyName" className="sr-only">
          Nombre de la empresa
        </label>
        <input
          type="text"
          id="companyName"
          placeholder="Nombre de la empresa"
          className="px-4 py-2 mb-6 w-full text-lg border border-solid border-neutral-500 h-[50px] text-neutral-500 max-sm:h-[40px]"
        />
        <fieldset>
          <legend className="mb-4 text-base font-semibold text-neutral-500">
            Cantidad de empleados, incluido usted
          </legend>
          <RadioGroup options={employeeOptions} name="employees" />
        </fieldset>
        <div className="mb-6">
          <label
            htmlFor="region"
            className="mb-1 text-sm font-semibold text-neutral-400"
          >
            Región*
          </label>
          <select
            id="region"
            defaultValue="chile"
            className="px-4 py-2 w-full text-lg bg-white border border-solid border-neutral-500 h-[50px] text-neutral-500 max-sm:h-[40px]"
          >
            <option value="chile">Chile</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-32 text-lg font-semibold text-white bg-blue-700 rounded-3xl cursor-pointer border-[none] h-[40px] max-sm:w-full"
        >
          Siguiente
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
