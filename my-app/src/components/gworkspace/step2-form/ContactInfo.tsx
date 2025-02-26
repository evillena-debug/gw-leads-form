import React from "react";
import RawImg from "../../RawImg";

interface ContactInfoProps {}

const InfoIcon: React.FC = () => (
  <svg
    className="inline-block w-4 h-4 ml-1 text-neutral-400"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M18 10c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-8-6a1 1 0 100 2 1 1 0 000-2zm1 4a1 1 0 00-2 0v4a1 1 0 002 0V8zm-1 6a1 1 0 100 2 1 1 0 000-2z"
      clipRule="evenodd"
    />
  </svg>
);

const InputField: React.FC<{
  type: string;
  placeholder: string;
  ariaLabel: string;
}> = ({ type, placeholder, ariaLabel }) => (
  <input
    type={type}
    placeholder={placeholder}
    aria-label={ariaLabel}
    className="px-4 py-2 mb-4 w-full text-lg border border-solid border-neutral-500 h-[50px] text-neutral-500 max-sm:h-[40px]"
  />
);

const SubmitButton: React.FC = () => (
  <button
    type="submit"
    className="w-40 text-base font-semibold text-white bg-blue-700 rounded-3xl border border-blue-500 border-solid cursor-pointer h-[45px] max-sm:w-full mt-4"
  >
    Siguiente
  </button>
);

export const ContactInfo: React.FC<ContactInfoProps> = () => {
  return (
    <div className="flex items-center justify-center h-full py-4">
      <div className="bg-white w-full max-w-[600px] p-6 max-md:w-full max-md:px-4 max-md:py-6 rounded-lg">
        <div className="flex items-center justify-center pb-6">
          <RawImg
            image="/assets/logo-gw.png" // Asegúrate de que esta ruta sea correcta
            altText="Google Workspace"
            className="h-[33px] w-[206px]"
          />
        </div>
        <div className="w-full h-px bg-zinc-200 mb-6" />
        <div className="w-full">
          <h1 className="mb-4 text-2xl font-semibold leading-7 text-neutral-600 text-center">
            ¿Cuál es su información de contacto?
          </h1>
          <p className="mb-6 text-sm text-neutral-400 text-center">
            Dado que eres su creador, se te asignará el rol de administrador de
            la cuenta de
            <span className="ml-1 text-sm font-semibold text-neutral-400">
              Google Workspace.
            </span>
            <InfoIcon />
          </p>
          <form className="flex flex-col gap-4">
            <InputField type="text" placeholder="Nombre" ariaLabel="Nombre" />
            <InputField
              type="text"
              placeholder="Apellido"
              ariaLabel="Apellido"
            />
            <InputField
              type="email"
              placeholder="Direccion de correo electronico actual"
              ariaLabel="Direccion de correo electronico actual"
            />
            <SubmitButton />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;