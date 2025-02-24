import React from 'react';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="flex relative flex-col pt-3.5 w-full text-2xl font-semibold whitespace-nowrap bg-black bg-opacity-0 text-zinc-500 max-md:max-w-full">
      <div className="flex gap-1.5 self-center w-52 max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/40d76b8302f692e6f12ff1542ce675bd3cd0bb1fbaf91683809154afa62b61cb?placeholderIfAbsent=true&apiKey=fcfba4c18f40412a85837ebda335ccd2"
          alt="Workspace logo"
          className="object-contain shrink-0 aspect-[3.08] w-[83px]"
        />
        <div className="grow shrink my-auto w-[103px]">Workspace</div>
      </div>
      <div className="flex shrink-0 mt-5 h-px bg-gray-300 max-md:max-w-full" />
    </div>
  );
};

export default Header;
