import React from 'react';

interface ConfigurationCardProps {}

const ConfigurationCard: React.FC<ConfigurationCardProps> = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 max-w-[681px] w-full max-md:max-w-full">
      <div className="flex relative flex-col flex-wrap gap-6 px-10 py-6 min-h-[201px] max-md:px-5">
        <div className="flex items-start gap-4">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7abb76920f6c03a7e2fb4ef128ecfb6b4bc0a99b6c07b6d83417406c4dc3d2c3?placeholderIfAbsent=true&apiKey=fcfba4c18f40412a85837ebda335ccd2"
            alt="Configuration icon"
            className="object-contain shrink-0 mt-1.5 aspect-[0.96] w-[75px]"
          />
          <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
            <div className="flex flex-col px-1 w-full font-semibold max-md:max-w-full">
              <div className="flex flex-wrap gap-4 text-base leading-6 text-neutral-500">
                <div className="flex-auto w-[433px] max-md:max-w-full">
                  ¿Quieres usar evillena@getitsoluddtions.cl para configurar
                  <br />
                  Google Workspace?
                </div>
              </div>
              <div className="self-start mt-2 text-sm leading-5 text-zinc-500">
                Usarás este correo electronico para acceder a Gmail, Documentos,
                <br /> Drive, Calendario y otros servicios
              </div>
            </div>
            <div className="flex gap-5 justify-between mt-4 max-w-full w-[445px]">
              <button className="flex flex-col justify-center p-1.5 text-sm font-semibold bg-black bg-opacity-0 transform transition-transform duration-300 hover:scale-105 active:scale-95">
                <div className="flex flex-col px-12 py-1.5 bg-white rounded-2xl border border-solid border-zinc-500 max-md:px-5">
                  <div className="text-[rgb(29_78_216/var(--tw-bg-opacity))]">Si, usar este correo</div>
                  <div className="self-center mt-1 text-[rgb(29_78_216/var(--tw-bg-opacity))]">electrónico</div>
                </div>
              </button>
              <button className="my-auto text-sm leading-4 text-center text-[rgb(29_78_216/var(--tw-bg-opacity))] transform transition-transform duration-300 hover:scale-105 active:scale-95">
                No, configurar con un
                <br />
                dominio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigurationCard;
