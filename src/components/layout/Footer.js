import React from "react";

import NavLinks from "./NavLinks";

export default function Footer() {
  return (
    <footer className="text-sm leading-5 tracking-normal text-gray-400 bg-primary-300 md:bg-transparent lg:bg-transparent xl:bg-transparent">
      <div className="w-full max-w-6xl px-6 mx-auto">
        <div className="relative flex flex-wrap pt-10 lg:justify-between">
          <NavLinks className="inline-flex justify-center flex-none w-full mb-6 lg:flex lg:w-1/2 lg:justify-end lg:order-1 lg:mb-0" />
          <div className="inline-flex justify-center flex-none w-full mb-6 lg:w-1/2 lg:justify-start text-white md:text-primary-800 lg:text-primary-800 xl:text-primary-800 font-bold">
            &copy; 2021 - Doble Impacto
          </div>
        </div>
      </div>
    </footer>
  );
}
