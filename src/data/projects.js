/**
 * projects.js
 * ------------
 * Central data file for all your projects.
 * Just add/remove objects to update your portfolio!
 */

export const projects = [
  {
    id: 1,
    title: "Hesabi Finance App",
    description:
      "A wallet to manage your personal income, expenses, and budgets.",
    image: "/images/projects/hesabi.webp",
    technologies: ["Next.js", "Tailwind", "SQLite"],
    liveUrl: "https://hesabiapp.vercel.app",
    githubUrl: "https://github.com/shahreyarhabibi/hesabi",
    featured: true,
  },

  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing projects and skills with dark/light mode support.",
    image: "/images/projects/portfolio.webp",
    technologies: ["Next.js", "Tailwind", "Framer Motion"],
    liveUrl: "https://ahabibi.vercel.app",
    githubUrl: "https://github.com/shahreyarhabibi/portfolio-next.js",
    featured: true,
  },

  {
    id: 3,
    title: "Hospital Management System",
    description:
      "A simple and efficient system to manage patients, appointments, staff, and billing in hospitals or clinics.",
    image: "/images/projects/hospital.webp",
    technologies: ["PHP", "Bootstrap", "Chart.js"],
    liveUrl: "https://habibihospital.great-site.net",
    githubUrl:
      "https://github.com/shahreyarhabibi/-Habibi-Hospital-Management-System",
    featured: false,
  },

    {
      id: 4,
      title: "MOWJ Technologies",
      description:
        "A full-service digital agency website delivering marketing, graphic design, and modern web development solutions.",
      image: "/images/projects/mowj.webp",
      technologies: ["Wordpress", "Elementor", "PHP", "MySQL"],
      liveUrl: "https://shahreyarhabibi.github.io/mowj-website-static",
      featured: false,
    },

  //   {
  //     id: 5,
  //     title: "Mobile Fitness App",
  //     description:
  //       "Cross-platform fitness tracking app with workout plans and progress analytics.",
  //     image: "/images/projects/fitness.webp",
  //     technologies: ["Flutter", "Firebase", "Dart"],
  //     liveUrl: "",
  //     githubUrl: "https://github.com/username/project",
  //     featured: false,
  //   },
  //   {
  //     id: 6,
  //     title: "Blog CMS",
  //     description:
  //       "Custom content management system with markdown support and SEO optimization.",
  //     image: "/images/projects/blog.webp",
  //     technologies: ["WordPress", "PHP", "MySQL"],
  //     liveUrl: "https://example.com",
  //     githubUrl: "",
  //     featured: false,
  //   },
];

// Get unique technologies for filter buttons
export const allTechnologies = [
  ...new Set(projects.flatMap((p) => p.technologies)),
];
