"use client";
import { useState, useEffect } from "react";

type NavbarType = {
  left: string;
  transition: string;
};

export default function Header() {
  const [isNavbarOpen, setNavbarOpen] = useState<boolean>(false);

  const handleClick = () => {
    setNavbarOpen((current) => !current);
  };

  const openNavbar: NavbarType = {
    left: "0",
    transition: "all 0.5s",
  };

  const closeNavbar: NavbarType = {
    left: "-100%",
    transition: "all 0.5s",
  };

  return (
    <nav className="z-[1] py-6 flex items-center justify-between ">
      <a
        href="#home"
        className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2"
      >
        Yoni Deserbaix 🦇
      </a>

      <input
        type="checkbox"
        id="check"
        className="hidden"
        onChange={handleClick}
      />
      <label
        htmlFor="check"
        className="navbar__burger__menu hidden text-[30px] mr-[40px] cursor-pointer max-lg:block"
      >
        <i
          className="bx bx-menu text-center rounded hover:bg-black p-1"
          id="burger__icon"
        ></i>
      </label>

      <ul
        className="flex gap-10 mr-[25px] max-lg:fixed max-lg:w-full max-lg:h-[100vh] max-lg:bg-background max-lg:top-20 max-lg:text-center max-lg:flex max-lg:flex-col z-10"
        style={isNavbarOpen ? openNavbar : closeNavbar}
      >
        <li className="hover:scale-110 transition duration-200  max-lg:block">
          <a
            className="navbar__a text-lg font-bold  py-[7px] max-lg:text-xl"
            href="#home"
            onClick={handleClick}
          >
            Accueil
          </a>
        </li>

        <li className=" hover:scale-110 transition duration-200">
          <a
            className="navbar__a text-lg font-bold py-[7px] max-lg:text-xl"
            href="#skills"
            onClick={handleClick}
          >
            Skills
          </a>
        </li>
        <li className=" hover:scale-110 transition duration-200">
          <a
            className="navbar__a text-lg font-bold py-[7px] max-lg:text-xl"
            href="#projects"
            onClick={handleClick}
          >
            Projets
          </a>
        </li>
        <li className=" hover:scale-110 transition duration-200">
          <a
            className="navbar__a text-lg font-bold py-[7px] max-lg:text-xl"
            href="#contact"
            onClick={handleClick}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
