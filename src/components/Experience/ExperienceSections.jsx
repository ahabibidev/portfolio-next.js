/**
 * ExperienceSections Component (Server)
 * Single experience entry with timeline dot
 */

export default function ExperienceSections({
  title,
  year,
  description,
  dotcolor,
  hidden,
  href,
  isPresentJob,
}) {
  return (
    <div className="flex flex-col w-full relative whitespace-nowrap">
      {/* Timeline dot and line */}
      <span
        className={`${hidden} absolute -ml-1 md:top-2 top-1 w-3 h-3 rounded-full ${dotcolor} 
          after:h-59 md:after:h-58 after:w-0.5 after:bg-(--color) 
          after:absolute after:rounded-full after:left-1.25 after:-z-10 after:opacity-50`}
      />

      {/* Dot with optional glow */}
      <span
        className={`absolute -ml-1 md:top-2 top-1 w-3 h-3 rounded-full ${dotcolor} ${
          isPresentJob
            ? "shadow-[0_0_1px_var(--primary),0_0_10px_var(--primary),0_0_20px_var(--primary)] animate-pulse"
            : ""
        }`}
      />

      {/* Content */}
      <div className="flex ml-5 md:ml-8 flex-col gap-1">
        <div className="flex flex-row justify-between items-center">
          <a href={href} className="text-md md:text-xl font-bold text-(--text)">
            {title}
          </a>
          <p className="whitespace-nowrap md:text-[16px] text-sm md:mr-20 md:relative md:left-5">
            {year}
          </p>
        </div>
        <div className="flex md:text-[16px] text-sm flex-col gap-0.5">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
