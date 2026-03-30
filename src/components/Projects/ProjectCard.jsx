/**
 * ProjectCard Component (Client)
 * -------------------------------
 * Individual project card with hover effects.
 * Uses ThemeContext for light/dark styling.
 */

"use client";

import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function ProjectCard({ project }) {
  const { isLight } = useContext(ThemeContext);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [showTouchActions, setShowTouchActions] = useState(false);
  const hasActions = Boolean(project.githubUrl || project.liveUrl);
  const overlayActionClass =
    "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white bg-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-(--primary) hover:scale-110";

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: none), (pointer: coarse)");

    const syncTouchMode = () => {
      const touchMode = mediaQuery.matches;
      setIsTouchDevice(touchMode);

      if (!touchMode) {
        setShowTouchActions(false);
      }
    };

    syncTouchMode();
    mediaQuery.addEventListener("change", syncTouchMode);

    return () => mediaQuery.removeEventListener("change", syncTouchMode);
  }, []);

  const handleCardClick = () => {
    if (!isTouchDevice || !hasActions) return;

    setShowTouchActions((current) => !current);
  };

  return (
    <div
      onClick={handleCardClick}
      className={`group relative overflow-hidden rounded-2xl transition-all duration-500
        ${
          isLight
            ? "bg-white border border-zinc-200 shadow-lg hover:shadow-2xl"
            : "bg-white/5 border border-zinc-800 hover:border-zinc-700"
        }
        ${hasActions && isTouchDevice ? "cursor-pointer" : ""}
        hover:-translate-y-2`}
    >
      {/* Project Image */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`object-cover transition-transform duration-500 ${
            showTouchActions ? "scale-110" : ""
          } md:group-hover:scale-110`}
        />

        {/* Overlay actions */}
        <div
          className={`absolute inset-0 z-10 items-center justify-center gap-4 transition-all duration-300
          ${showTouchActions ? "flex opacity-100 pointer-events-auto" : "hidden opacity-0 pointer-events-none"}
          md:flex md:opacity-0 md:pointer-events-none md:group-hover:pointer-events-auto md:group-hover:opacity-100
          ${isLight ? "bg-black/60" : "bg-black/80"}`}
        >
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={overlayActionClass}
              aria-label="View GitHub Repository"
              onClick={(event) => event.stopPropagation()}
            >
              <FiGithub className="text-white text-xl" />
              <span>GitHub</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={overlayActionClass}
              aria-label="View Live Site"
              onClick={(event) => event.stopPropagation()}
            >
              <FiExternalLink className="text-white text-xl" />
              <span>Live Site</span>
            </a>
          )}
        </div>

        {/* Featured badge */}
        {project.featured && (
          <span className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold bg-(--primary) text-white rounded-full">
            Featured
          </span>
        )}
      </div>

      {/* Project Info */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-(--text) mb-2 group-hover:text-(--primary) transition-colors">
          {project.title}
        </h3>

        <p className="text-(--color) text-sm md:text-base mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className={`text-xs px-2 py-1 rounded-full transition-colors
                ${
                  isLight
                    ? "bg-zinc-100 text-zinc-600"
                    : "bg-white/10 text-zinc-400"
                }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
