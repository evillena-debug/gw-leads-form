"use client";

import * as React from "react";
import { useState } from "react";

const NotificationOptions: React.FC = () => {
  const [workspaceUpdates, setWorkspaceUpdates] = useState(false);
  const [userInformation, setUserInformation] = useState(false);

  return (
    <section className="self-stretch pt-3.5 pb-1 bg-black bg-opacity-0 max-md:max-w-full">
      <div className="flex relative flex-col px-px pb-6 w-full min-h-[242px] max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/15a1c0879ae844a540e99cd2baa74264a91de46855e3a357e639f05c40adbde2?placeholderIfAbsent=true&apiKey=fcfba4c18f40412a85837ebda335ccd2"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative z-10 flex-col px-6 py-3 mt-0 w-full bg-black bg-opacity-0 max-md:px-5 max-md:-mr-0.5 max-md:max-w-full">
          <h3 className="self-start text-xs text-zinc-500">
            Descubre Google Workspace
          </h3>
          <div className="flex gap-5 justify-between items-start mt-2.5 text-xs">
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="hidden"
                checked={workspaceUpdates}
                onChange={() => setWorkspaceUpdates(!workspaceUpdates)}
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc6780c9509582474ea74098b62cdc08ba4f4683e2153fef8a6b232623f80125?placeholderIfAbsent=true&apiKey=fcfba4c18f40412a85837ebda335ccd2"
                alt=""
                className="object-contain shrink-0 mt-1 aspect-square w-[18px]"
              />
            </label>
            <div className="flex flex-col items-start self-stretch">
              <p className="text-zinc-500">
                Obtener sugerencias, actualizaciones, ofertas y
              </p>
              <p className="mt-1 text-zinc-500">
                oportunidades para enviar comentarios
              </p>
              <p className="self-stretch mt-3 leading-4 text-neutral-400">
                Intercambia grandes ideas en relacion con el uso que haces de
                <br />
                nuestros servicios. Te enviaremos correos electronicos
                ocasionales
                <br />
                con sugerencias, ofertas y anuncios relacionados con Google
                <br />
                Workspace.
              </p>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/540960547de20991f3160440a3220f14315e75ac6aafe0c94bcba5d3af5d57cc?placeholderIfAbsent=true&apiKey=fcfba4c18f40412a85837ebda335ccd2"
              alt=""
              className="object-contain shrink-0 mt-1 w-4 aspect-[1.6]"
            />
          </div>
        </div>
        <div className="flex relative gap-5 justify-between items-start self-center mt-3 w-full text-xs max-w-[463px] max-md:max-w-full">
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="hidden"
              checked={userInformation}
              onChange={() => setUserInformation(!userInformation)}
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea94906a3760214d9cb6e1a7820164af520bbd37b4d94fd12bd6fe9c9f0e47ea?placeholderIfAbsent=true&apiKey=fcfba4c18f40412a85837ebda335ccd2"
              alt=""
              className="object-contain shrink-0 aspect-square w-[18px]"
            />
          </label>
          <div className="flex flex-col">
            <p className="self-start text-zinc-500">Informa a tus usuarios</p>
            <p className="mt-6 leading-4 text-neutral-400">
              Enviales a los usuarios informacion sobre las apps, las funciones
              y
              <br />
              las sugerencias de productividad de Google Workspace. Los
              <br />
              usuarios pueden inhabilitar esta opcion en cualquier momento.
            </p>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8c5c228497ec9f6103ae84695ecbfcc4331135a6bdb4ef865592f2a3265ca11?placeholderIfAbsent=true&apiKey=fcfba4c18f40412a85837ebda335ccd2"
            alt=""
            className="object-contain shrink-0 w-4 aspect-[1.6]"
          />
        </div>
      </div>
    </section>
  );
};

export default NotificationOptions;
