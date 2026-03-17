/**
 * ProjectsSection Component (Client)
 * ------------------------------------
 * Main projects section with filtering capability.
 *
 * Features:
 * - Filter by technology
 * - Responsive grid layout
 * - Smooth animations
 * - Easy to update via projects.js data file
 */

"use client";

import { useState, useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { projects, allTechnologies } from "@/data/projects";
import SectionTitles from "../SectionsTitle";
import ProjectCard from "./ProjectCard";
import { FiGithub } from "react-icons/fi";

export default function ProjectsSection() {
  const { isLight } = useContext(ThemeContext);
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter projects based on selected technology
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.technologies.includes(activeFilter));

  // Get featured projects for the top section
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section
      id="projects"
      className="flex flex-col md:w-280 lg:w-300 xl:w-325 2xl:w-350 m-auto gap-8 pt-20 pb-20"
    >
      {/* Section Title */}
      <SectionTitles title="My Projects" bg="bg-blue-500" />

      {/* Filter Buttons */}
      <div className="flex flex-wrap md:gap-2 gap-1 justify-center md:justify-start">
        <button
          onClick={() => setActiveFilter("All")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
            ${
              activeFilter === "All"
                ? "bg-(--primary) text-white"
                : isLight
                  ? "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                  : "bg-white/10 text-zinc-400 hover:bg-white/20"
            }`}
        >
          All
        </button>

        {allTechnologies.slice(0, 8).map((tech) => (
          <button
            key={tech}
            onClick={() => setActiveFilter(tech)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${
                activeFilter === tech
                  ? "bg-(--primary) text-white"
                  : isLight
                    ? "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                    : "bg-white/10 text-zinc-400 hover:bg-white/20"
              }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-(--color) text-lg">
            No projects found with {activeFilter}
          </p>
          <button
            onClick={() => setActiveFilter("All")}
            className="mt-4 text-(--primary) hover:underline"
          >
            View all projects
          </button>
        </div>
      )}

      {/* View More Button (optional) */}
      <div className="flex justify-center mt-8">
        <a
          href="https://github.com/shahreyarhabibi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 border-2 border-(--primary) text-(--primary) rounded-full font-medium transition-all duration-300 hover:bg-(--primary) hover:text-white"
        >
          View More on GitHub
          <FiGithub />
        </a>
      </div>
    </section>
  );
}
