import React from "react";
import RawImg from "../../RawImg";

const AIAssistant: React.FC = () => {
  return (
    <div className="flex flex-col flex-1 items-center p-6 bg-white max-md:p-4 max-sm:p-3">
      <div className="text-center max-w-[400px] max-md:max-w-full">
        <RawImg
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/d7250fee24d9a03b72cd9ebbb0dc29889a066a2b"
          altText="AI Assistant"
          className="mb-4 h-[70px] w-[70px] transform transition-transform duration-500 hover:scale-90 hover:scale-110"
        />
        <div className="mx-auto my-4 bg-white rounded-3xl shadow-[0_2px_10px_rgba(0,0,0,0.1)] w-[350px] max-md:w-full max-md:max-w-[350px] max-sm:w-full">
          <div className="p-4 text-xl font-medium text-indigo-400 border border-solid bg-slate-50 border-zinc-200 rounded-[25px_26px_0_0]">
            How can I help you?
          </div>
          <div className="p-4 m-2 text-base font-semibold bg-white rounded-3xl text-neutral-400">
            Help me create a marketing campaign
          </div>
          <div className="flex justify-around p-4 rounded-none border-solid bg-slate-100 border-[5px] border-stone-300">
            <RawImg
              image="https://cdn.builder.io/api/v1/image/assets/TEMP/d512165b74a08cbd12a807aad3163dd3199c3d07"
              altText="Tool 1"
              className="h-[30px] w-[30px]"
            />
            <RawImg
              image="https://cdn.builder.io/api/v1/image/assets/TEMP/2a7a7863fa119810af73b0e6938af12e2d3b1cec"
              altText="Tool 2"
              className="h-[30px] w-[30px]"
            />
            <RawImg
              image="https://cdn.builder.io/api/v1/image/assets/TEMP/8009251a92c2ef4aefd35f07fd921593cb311735"
              altText="Tool 3"
              className="h-[30px] w-[30px]"
            />
          </div>
        </div>
        <div className="mt-8">
          <h2 className="mb-4 text-2xl font-semibold leading-8 text-neutral-700 max-sm:text-xl">
            Inicia tu productividad con la IA
          </h2>
          <p className="text-base font-semibold leading-6 text-zinc-600 max-sm:text-sm">
            Los planes de Google Workspace ahora incluyen acceso a las funciones
            de Gemini y a la app de Gemini, lo que te permite aprovechar la
            potencia de la IA para las tareas cotidianas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
