import React from "react";
import Header from "./Header";
import RegistrationForm from "./RegistrationForm";
import AIAssistant from "./AIAssistant";


const GoogleWorkspace: React.FC = () => {
  return (
    <div className="mx-auto my-0 max-w-[1166px]">
      <Header />
      <div className="w-full h-px bg-gray-300" />
      <div className="flex bg-white max-md:flex-col">
        <RegistrationForm />
        <AIAssistant />
      </div>
    </div>
  );
};

export default GoogleWorkspace;
