/**
 * ProjectCard Component (Client)
 * -------------------------------
 * Individual project card with hover effects.
 * Uses ThemeContext for light/dark styling.
 */

"use client";

import { useContext } from "react";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function ProjectCard({ project }) {
  const { isLight } = useContext(ThemeContext);

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl transition-all duration-500
        ${
          isLight
            ? "bg-white border border-zinc-200 shadow-lg hover:shadow-2xl"
            : "bg-white/5 border border-zinc-800 hover:border-zinc-700"
        }
        hover:-translate-y-2`}
    >
      {/* Project Image */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay on hover */}
        <div
          className={`absolute inset-0 flex items-center justify-center gap-4 
          transition-all duration-300 opacity-0 group-hover:opacity-100
          ${isLight ? "bg-black/60" : "bg-black/80"}`}
        >
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 rounded-full backdrop-blur-sm hover:bg-(--primary) hover:scale-110 transition-all duration-300"
              aria-label="View GitHub Repository"
            >
              <FiGithub className="text-white text-xl" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 rounded-full backdrop-blur-sm hover:bg-(--primary) hover:scale-110 transition-all duration-300"
              aria-label="View Live Site"
            >
              <FiExternalLink className="text-white text-xl" />
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
