import * as React from "react";

const FormTitle: React.FC = () => {
  return (
    <>
      <h2 className="ml-2.5 text-3xl text-zinc-700">Cómo acceder</h2>
      <p className="mt-14 ml-2.5 text-base text-zinc-500 max-md:mt-10">
        Usarás tu nombre de usuario para acceder a tu cuenta de
      </p>
      <p className="mt-2.5 text-base text-neutral-500 max-md:max-w-full">
        Google Workspace y crear tu dirección de correo electronico
      </p>
      <div className="flex gap-2.5 mt-1.5 text-base whitespace-nowrap text-neutral-500 max-md:ml-2.5">
        <p className="grow">empresarial.</p>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7194d8f9db10c0851ffc472bf19f1eabf0f2b8dce882f2c413bc03790fe1bf6?placeholderIfAbsent=true&apiKey=fcfba4c18f40412a85837ebda335ccd2"
          alt="Info icon"
          className="object-contain shrink-0 aspect-square w-[18px]"
        />
      </div>
    </>
  );
};

export default FormTitle;
