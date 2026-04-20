export default function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ali Reza Habibi",
    alternateName: "ahabibidev",
    url: "https://ahabibi.dev",
    jobTitle: "Software Engineer",
    description:
      "Full-Stack Software Engineer with 3+ years of experience specializing in Frontend development.",
    sameAs: [
      "https://github.com/ahabibidev",
      "https://linkedin.com/in/ahabibidev",
      "https://twitter.com/ahabibidev",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Frontend Development",
      "Full-Stack Development",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ali Reza Habibi",
    alternateName: "ahabibidev",
    url: "https://ahabibi.dev",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
