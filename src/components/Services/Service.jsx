/**
 * Service Component (Client)
 * Uses useContext for theme styling
 */

"use client";

import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function Service({ title, description, icon: Icon, iconColor }) {
  const { isLight } = useContext(ThemeContext);

  return (
    <div
      className={`${
        isLight
          ? "bg-white/5 hover:bg-black/5 border border-zinc-200 shadow-xl"
          : "bg-white/5 hover:bg-white/10 border border-teal-900 shadow-sm"
      } text-(--text) rounded-2xl p-4 md:p-8 transition-all duration-300`}
    >
      <div className="flex gap-3 items-center">
        <Icon
          className={`relative p-1.5 md:p-2 md:w-12 md:h-12 w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 ${iconColor}`}
        />
        <h1 className="font-bold md:text-xl text-base">{title}</h1>
      </div>
      <p className="mt-3 md:text-base text-sm text-(--color)">{description}</p>
    </div>
  );
}
