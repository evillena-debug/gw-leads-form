import React from "react";
import RawImg from "../../RawImg";

interface ExistingAccountProps {
  email: string;
}

const ExistingAccount: React.FC<ExistingAccountProps> = ({ email }) => {
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
        <div className="w-full h-px bg-zinc-300 mb-6" />
        <div className="w-full text-center">
          <h1
            className="mb-4 text-neutral-700"
            style={{
              fontFamily: "Google Sans",
              fontSize: "2rem",
              fontWeight: 400,
              letterSpacing: 0,
              lineHeight: "2.5rem",
              textAlign: "left",
              margin: 0,
            }}
          >
            Se encontró una cuenta existente
          </h1>
          <br></br>
          <p
            className="mb-6 mt-4 text-neutral-600 text-justify text-right"
            style={{
              fontFamily: "Google Sans Text",
              fontSize: ".875rem",
              fontWeight: 500,
              letterSpacing: 0,
              lineHeight: "1.25rem",
              margin: 0,
            }}
          >
            La dirección de correo electrónico {email} ya tiene una cuenta de Google Workspace. Accede para usar tu cuenta existente de Google Workspace o crea una nueva con un dominio o una dirección de correo electrónico diferentes.
          </p>
          <div className="flex flex-col gap-4 mt-6">
            <button
              type="button"
              className="w-full text-base font-semibold text-white bg-blue-700 rounded-3xl border border-blue-500 border-solid cursor-pointer h-[45px] max-sm:w-full"
              style={{ fontFamily: "Google Sans" }}
            >
              Acceder
            </button>
            <button
              type="button"
              className="w-full text-base font-semibold text-blue-700 bg-white rounded-3xl border border-blue-500 border-solid cursor-pointer h-[45px] max-sm:w-full"
              style={{ fontFamily: "Google Sans" }}
            >
              Crear una nueva cuenta de Google Workspace
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExistingAccount;