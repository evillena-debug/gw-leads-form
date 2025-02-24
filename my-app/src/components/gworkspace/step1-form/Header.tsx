import React from "react";
import RawImg from "../../RawImg";

const Header: React.FC = () => {
  return (
    <div className="flex items-center px-5 py-3.5 bg-white h-[74px] max-sm:p-2.5">
      <RawImg
        image="/assets/logo-gw.png" // Actualiza esta ruta con la ruta correcta de tu logo en assets
        altText="Google Workspace"
        className="h-[33px] w-[206px]"
      />
    </div>
  );
};

export default Header;
