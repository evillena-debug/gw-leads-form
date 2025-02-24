import React from "react";
import { InfoIcon } from "./InfoIcon";
import { InputField } from "./InputField";
import { SubmitButton } from "./SubmitButton";
import RawImg from "../../RawImg";

interface ContactInfoProps {}

export const ContactInfo: React.FC<ContactInfoProps> = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
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
            <InputField type="text" placeholder="Nombre" aria-label="Nombre" />
            <InputField
              type="text"
              placeholder="Apellido"
              aria-label="Apellido"
            />
            <InputField
              type="email"
              placeholder="Direccion de correo electronico actual"
              aria-label="Direccion de correo electronico actual"
            />
            <SubmitButton />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;