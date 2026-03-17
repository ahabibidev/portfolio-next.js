/**
 * SectionTitles Component (Client)
 * Uses useContext for theme-based styling
 */

"use client";

import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function SectionTitles({ bg, title }) {
  const { isLight } = useContext(ThemeContext);

  return (
    <div className="relative">
      <h2 className="font-bold text-(--text) md:text-3xl text-2xl after:block after:mb-3 after:content-[' '] after:w-[30%] md:after:w-17.5 after:mt-3 after:ml-0.5 after:border-b-4 after:border-(--color) after:opacity-50 after:rounded-full">
        {title}
      </h2>
      <div
        className={`${bg} absolute -z-10 rounded-full blur-3xl animate-pulse-slow pointer-events-none md:-mt-35 md:-ml-5 mt-[-32%] ml-[-20%] w-50 h-50 ${isLight ? "opacity-25" : "opacity-10"}`}
      />
    </div>
  );
}
