/**
 * Experience Component (Server)
 * Lists all work experience entries
 */
import ExperienceSections from "./ExperienceSections";

export default function Experience() {
  return (
    <>
      <ExperienceSections
        title="FirstRate Inc"
        year="Nov 2025 - Present"
        description="Software Engineer - (TX, USA) | Kabul Office"
        dotcolor="bg-(--primary)"
        href="https://firstrate.com"
        isPresentJob={true}
      />
      <ExperienceSections
        title={
          <>
            Ulearna Educational <span className="block md:inline">Center</span>
          </>
        }
        year="Aug 2024 - Sept 2025"
        description="Front-End Instructor - Kabul, Afghanistan"
        dotcolor="bg-(--color)"
        hidden="hidden"
      />
      <ExperienceSections
        title="Ulearna Technologies"
        year="Jun 2024 - May 2025"
        description="Full-Stack Developer - Dubai, UAE"
        dotcolor="bg-(--color)"
        hidden="hidden"
        href="https://ulearna.com"
      />
      <ExperienceSections
        title="MOWJ Pty Ltd"
        year="Jan 2025 - Jun 2025"
        description="WP Dev & Graphic Designer - Sydney, Australia"
        dotcolor="bg-(--color)"
        hidden="hidden"
        href="https://mowjglobal.com"
      />
    </>
  );
}
