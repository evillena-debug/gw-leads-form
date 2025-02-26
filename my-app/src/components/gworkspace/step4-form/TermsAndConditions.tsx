import * as React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <section className="mt-5">
      <div className="flex gap-1.5 text-sm">
        <p className="grow text-zinc-500">Al hacer clic en</p>
        <p className="text-sm basis-auto text-neutral-500">
          Aceptar y continuar, aceptas las
        </p>
        <a href="#" className="text-indigo-400 basis-auto">
          Google Workspace
        </a>
      </div>
      <div className="flex flex-wrap gap-1.5 mt-2">
        <a href="#" className="grow text-sm text-indigo-400">
          Agreement
        </a>
        <div className="flex flex-auto gap-0.5">
          <p className="text-xs text-center text-neutral-400">y</p>
          <a href="#" className="flex-auto text-sm text-indigo-400">
            Términos y Condiciones Complementarios de la Prueba Gratuita
          </a>
        </div>
      </div>
      <a href="#" className="mt-2 text-sm text-indigo-400 max-md:ml-2 block">
        de Google Workspace Agreement.
      </a>
    </section>
  );
};

export default TermsAndConditions;
