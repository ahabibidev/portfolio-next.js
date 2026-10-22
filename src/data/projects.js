/**
 * projects.js
 * ------------
 * Central data file for all your projects.
 * Just add/remove objects to update your portfolio!
 *
 * `slug` powers /projects/<slug> — it must be unique and URL-safe.
 * `longDescription` + `highlights` are what search engines actually index on
 * the detail page, so keep them descriptive rather than one-liners.
 */

export const projects = [
  {
    id: 1,
    slug: "hesabi-finance-app",
    title: "Hesabi Finance App",
    description:
      "A wallet to manage your personal income, expenses, and budgets.",
    longDescription:
      "Hesabi is a personal finance web app for tracking income, expenses, and monthly budgets in one place. It gives users a clear picture of where their money goes through categorised transactions, budget limits, and running balances, and is built as a fast server-rendered Next.js application backed by SQLite.",
    highlights: [
      "Categorised income and expense tracking with running balances",
      "Monthly budget limits with overspend awareness",
      "Server-rendered pages for fast first loads on slow connections",
      "SQLite persistence with a typed data access layer",
    ],
    role: "Designer & Full-Stack Developer",
    year: "2025",
    category: "Web Application",
    image: "/images/projects/hesabi.webp",
    technologies: ["Next.js", "Tailwind CSS", "SQLite"],
    liveUrl: "https://hesabi.ahabibi.dev",
    githubUrl: "https://github.com/ahabibidev/hesabi",
    featured: true,
  },
  {
    id: 2,
    slug: "qimat-real-time-prices",
    title: "Qimat - Real Time Prices",
    description:
      "Track real-time prices of everyday essentials, phones, currencies, and fuels—all in one simple PWA.",
    longDescription:
      "Qimat is an installable progressive web app that tracks live prices for everyday essentials, mobile phones, currency exchange rates, and fuel. It was built for users on unreliable mobile networks, so it ships as a PWA with offline-friendly caching and a data layer designed around frequent price updates.",
    highlights: [
      "Installable PWA that works on low-end Android devices",
      "Live currency, fuel, and commodity price tracking",
      "Drizzle ORM schema built for high-frequency price writes",
      "Mobile-first interface optimised for one-handed use",
    ],
    role: "Designer & Full-Stack Developer",
    year: "2025",
    category: "Progressive Web App",
    image: "/images/projects/qimat.webp",
    technologies: ["Next.js", "Tailwind CSS", "Drizzle"],
    liveUrl: "https://qimat.ahabibi.dev",
    githubUrl: "https://github.com/ahabibidev/qimat",
    featured: true,
  },
  {
    id: 3,
    slug: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing projects and skills with dark/light mode support.",
    longDescription:
      "This site. A personal portfolio built with the Next.js App Router, featuring a flash-free dark/light theme, server-rendered content for search engines, structured data for rich results, and a strict Content Security Policy. It doubles as a reference implementation for the SEO and performance practices I apply to client work.",
    highlights: [
      "Next.js App Router with server-rendered, crawlable content",
      "Flash-free dark/light theme via an inline pre-hydration script",
      "Schema.org structured data and a generated sitemap",
      "Strict Content Security Policy set at the framework level",
    ],
    role: "Designer & Developer",
    year: "2025",
    category: "Portfolio",
    image: "/images/projects/portfolio.webp",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://ahabibi.dev",
    githubUrl: "https://github.com/ahabibidev/portfolio-next.js",
    featured: true,
  },
  {
    id: 4,
    slug: "hospital-management-system",
    title: "Hospital Management System",
    description:
      "A simple and efficient system to manage patients, appointments, staff, and billing in hospitals or clinics.",
    longDescription:
      "A hospital and clinic management system covering patient records, appointment scheduling, staff administration, and billing. Built with PHP and MySQL for environments where a traditional LAMP stack is the practical deployment target, with Chart.js dashboards summarising admissions and revenue.",
    highlights: [
      "Patient records, appointments, staff, and billing in one system",
      "Chart.js dashboards for admissions and revenue reporting",
      "Role-based access separating admin, doctor, and reception views",
      "Deployable on standard shared LAMP hosting",
    ],
    role: "Full-Stack Developer",
    year: "2024",
    category: "Management System",
    image: "/images/projects/hospital.webp",
    technologies: ["PHP", "Bootstrap", "Chart.js"],
    liveUrl: "https://habibihospital.great-site.net",
    githubUrl:
      "https://github.com/ahabibidev/-Habibi-Hospital-Management-System",
    featured: false,
  },
  {
    id: 5,
    slug: "mowj-technologies",
    title: "MOWJ Technologies",
    description:
      "A full-service digital agency website delivering marketing, graphic design, and modern web development solutions.",
    longDescription:
      "A marketing website for MOWJ Technologies, a digital agency offering marketing, graphic design, and web development. Built on WordPress with Elementor so the client's own team could maintain content, with custom PHP templates where the page builder was not enough.",
    highlights: [
      "WordPress and Elementor build handed over to a non-technical team",
      "Custom PHP templates for layouts Elementor could not express",
      "Service, portfolio, and lead-capture pages for an agency audience",
      "Static export mirrored to GitHub Pages as a live showcase",
    ],
    role: "WordPress Developer & Graphic Designer",
    year: "2025",
    category: "Agency Website",
    image: "/images/projects/mowj.webp",
    technologies: ["Wordpress", "Elementor", "PHP", "MySQL"],
    liveUrl: "https://ahabibidev.github.io/mowj-website-static",
    featured: false,
  },
];

// Get unique technologies for filter buttons
export const allTechnologies = [
  ...new Set(projects.flatMap((p) => p.technologies)),
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
