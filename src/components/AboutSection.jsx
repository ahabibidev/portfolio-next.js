/**
 * AboutSection Component (Client)
 * ---------------------------------
 * About Me section with globe background.
 */

"use client";

import { useContext } from "react";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";
import SectionTitles from "./SectionsTitle";
import DynamicTitle from "./DynamicTitle";

export default function AboutSection() {
  const { isLight } = useContext(ThemeContext);

  return (
    <section
      id="about"
      className="flex flex-col md:mt-10 md:w-280 lg:w-300 xl:w-325 2xl:w-350 m-auto items-center gap-10 md:gap-20 grow pt-20 pb-20"
    >
      {/* Full-width wrapper so it aligns with other sections */}
      <div className="w-full">
        {/* Constrained-width text — sits at the left edge */}
        <div className="md:w-235">
          <SectionTitles
            title="About Me"
            underlinewidth="5%"
            bg="bg-(--primary-400)"
          />
          <p className="md:text-lg text-base ">
            With a strong foundation in both front-end and back-end development,
            I build scalable, end-to-end solutions with a focus on intuitive and
            engaging user interfaces. I specialize in front-end development,
            while also working across the stack to ensure performance,
            reliability, and maintainability.
          </p>
          <br className="md:hidden" />
          <p className="md:text-lg text-base">
            Currently at{" "}
            <a href="https://firstrate.com" className="font-bold text-(--text)">
              FirstRate
            </a>
            , I tackle complex challenges that require thoughtful architecture
            and clear communication. I enjoy coding, coffee, and collaborating
            closely with teams to deliver seamless digital experiences.
          </p>
        </div>
      </div>

      {/* Globe Background Image */}
      <div className="flex justify-center">
        <Image
          src="/images/globe.webp"
          alt="Decorative globe background"
          width={600}
          height={600}
          className={`
            absolute md:-mt-20 md:w-150 -z-50
            ${isLight ? "opacity-30" : "opacity-20"}
            drop-shadow-[0_0_40px_rgba(56,189,248,0.35)]
          `}
        />
      </div>

      <DynamicTitle />
    </section>
  );
}
