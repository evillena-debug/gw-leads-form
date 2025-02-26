import React from 'react';
import Header from './Header';
import ConfigurationCard from './ConfigurationCard';

interface WorkspaceSetupProps {}

const WorkspaceSetup: React.FC<WorkspaceSetupProps> = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col overflow-hidden bg-black bg-opacity-0 max-w-[731px] w-full max-md:max-w-full">
        <div className="flex flex-col w-full bg-black bg-opacity-0 max-md:max-w-full">
          <div className="flex relative flex-col pb-36 w-full min-h-[552px] max-md:pb-24 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/403208fe13ae4f6e70f73715e490c24d9f8ae9181f9b0f75357937816fcceb9e?placeholderIfAbsent=true&apiKey=fcfba4c18f40412a85837ebda335ccd2"
              alt=""
              className="object-cover absolute inset-0 size-full"
            />
            <Header />
            <div className="flex relative flex-col pb-1.5 mb-0 w-full bg-black bg-opacity-0 max-md:mb-2.5 max-md:max-w-full">
              <h1 className="z-10 px-16 py-12 w-full text-3xl font-medium leading-10 text-center bg-black bg-opacity-0 text-neutral-600 max-md:px-5 max-md:max-w-full">
                ¿Cómo quieres configurar Google
                <br />
                Workspace?
              </h1>
              <ConfigurationCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceSetup;
