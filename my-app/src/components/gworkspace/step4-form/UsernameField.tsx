"use client";

import * as React from "react";
import { useState } from "react";

const UsernameField: React.FC = () => {
  const [username, setUsername] = useState("");
  const maxLength = 64;

  return (
    <>
      <div className="flex z-10 flex-col justify-center px-1.5 py-1 mt-0 text-base text-red-400 bg-black bg-opacity-0 max-md:max-w-full">
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          maxLength={maxLength}
          aria-invalid="true"
          aria-describedby="username-error username-count"
          className="px-4 py-6 bg-white border border-red-700 border-solid max-md:pr-5 max-md:max-w-full outline-none w-full"
        />
      </div>
      <div className="flex z-10 gap-5 justify-between mt-1.5 mr-6 ml-6 w-full max-w-[465px] max-md:mr-2.5 max-md:max-w-full">
        <p id="username-error" className="text-xs text-rose-400">
          El nombre de usuario no puede estar en blanco
        </p>
        <p id="username-count" className="text-xs text-red-400">
          {username.length}/{maxLength}
        </p>
      </div>
    </>
  );
};

export default UsernameField;
