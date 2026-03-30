/**
 * Header Component (Client)
 * --------------------------
 * Navigation header with theme toggle.
 *
 * Client Component because:
 * - Uses useContext for theme
 * - Has onClick handler for theme toggle
 */

"use client";

import { AiOutlineCode } from "react-icons/ai";
import { useContext } from "react";
import Image from "next/image";
import { BiSun, BiMoon } from "react-icons/bi";
import { ThemeContext } from "@/context/ThemeContext";
import NavIcons from "./NavIcons";

// Icon imports - using @/icons alias
import HomeIcon from "@/icons/HomeIcon";
import AboutIcon from "@/icons/AboutIcon";
import ExperienceIcon from "@/icons/ExperienceIcon";
import ServicesIcon from "@/icons/ServicesIcon";
import ContactIcon from "@/icons/MailIcon";

export default function Header() {
  const { isLight, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="md:w-280 lg:w-300 xl:w-325 2xl:w-350 md:m-auto z-10">
      <nav className="flex justify-between items-center md:px-0 mt-6">
        {/* Logo - using next/image */}
        <Image
          src="/logo.svg"
          alt="Ali Reza Habibi Logo"
          width={72}
          height={72}
          className={`w-18 h-18 md:w-15 md:h-15 transition duration-300 ${
            isLight ? "filter invert" : ""
          }`}
          priority
        />

        {/* Navigation Links */}
        <ul className="z-10 md:pb-3 md:pt-3 fixed md:left-1/2 left-3/7 -translate-x-1/2 bottom-9  md:bottom-auto bg-(--navbarbackground) md:backdrop-blur-xs backdrop-blur-lg flex border border-(--navbarborder) rounded-4xl py-3 px-6 md:gap-6 gap-5 shadow-md">
          <NavIcons title="Home" link="#" Icon={HomeIcon} />
          <NavIcons title="About Me" link="#about" Icon={AboutIcon} />
          <NavIcons
            title="Experience"
            link="#experience"
            Icon={ExperienceIcon}
          />
          <NavIcons title="Projects" link="#projects" Icon={AiOutlineCode} />

          <NavIcons title="Services" link="#services" Icon={ServicesIcon} />
          <NavIcons title="Contact Me" link="#contact" Icon={ContactIcon} />
        </ul>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className={`relative h-9 md:w-15 rounded-full transition-colors duration-500 
            flex items-center justify-start px-1 shadow-md ${
              isLight
                ? "bg-(--primary) shadow-[0_0_12px_var(--primary)]"
                : "bg-zinc-600"
            }`}
          aria-label={isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
        >
          <span
            className={`w-7 h-7 bg-white/90 rounded-full shadow-md transform 
              transition-all duration-500 flex items-center justify-center text-lg 
              md:mr-0 mr-8 ${
                isLight
                  ? "translate-x-8 md:translate-x-6 shadow-[0_0_10px_var(--primary)]"
                  : "translate-x-0"
              }`}
          >
            {isLight ? <BiSun /> : <BiMoon className="fill-black/90" />}
          </span>
        </button>
      </nav>
    </header>
  );
}
