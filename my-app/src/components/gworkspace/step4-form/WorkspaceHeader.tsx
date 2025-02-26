import * as React from "react";

const WorkspaceHeader: React.FC = () => {
  return (
    <header className="flex z-10 flex-col justify-center items-center px-16 py-4 w-full text-2xl whitespace-nowrap bg-black bg-opacity-0 text-zinc-500 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-1.5 w-52 max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/28caea61830bbea5ab4fc4e9ca18a42b0dfe2c182dcf39a82291fa75bcfa6c86?placeholderIfAbsent=true&apiKey=fcfba4c18f40412a85837ebda335ccd2"
          alt="Workspace logo"
          className="object-contain shrink-0 aspect-[3.08] w-[83px]"
        />
        <h1 className="grow shrink w-[103px]">Workspace</h1>
      </div>
    </header>
  );
};

export default WorkspaceHeader;
