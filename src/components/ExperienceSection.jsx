/**
 * ExperienceSection Component (Server)
 * No hooks used - can be Server Component
 */

import Experience from "./Experience/Experience";
import SectionTitles from "./SectionsTitle";
import Education from "./Education/Education";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="flex flex-col items-center pt-20 pb-20 md:w-280 lg:w-300 xl:w-325 2xl:w-350 m-auto grow"
    >
      <div className="flex gap-10 md:gap-0 flex-col md:flex-row w-full">
        {/* Experience Column */}
        <div className="flex flex-col w-full md:w-1/2">
          <SectionTitles bg="bg-(--tertiary)" title="Experience" />
          <div className="flex flex-col gap-5 mt-1">
            <Experience />
          </div>
        </div>

        {/* Education Column */}
        <div className="flex flex-col w-full md:w-1/2 md:relative md:left-10">
          <SectionTitles bg="bg-(--secondary)" title="Education" />
          <div className="flex flex-col gap-5 mt-1">
            <Education />
          </div>
        </div>
      </div>

      <a
        href="/resume.pdf"
        download
        className="flex items-center justify-center md:text-base text-sm text-center w-60 mt-10 
          md:mt-20  border border-(--text) rounded-full px-6 py-3 text-(--text) 
          font-semibold transition-all hover:bg-(--text) hover:text-(--background)"
      >
        Download Resume (CV)
      </a>
    </section>
  );
}
