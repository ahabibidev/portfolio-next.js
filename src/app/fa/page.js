/**
 * Persian landing page (Server Component)
 * ----------------------------------------
 * The site previously listed Persian spellings in the `keywords` meta tag only
 * — a tag Google ignores entirely — so it had no chance of ranking for
 * "علی رضا حبیبی". This page provides real, indexable Persian content.
 *
 * It mirrors the English homepage section-for-section (#about, #experience,
 * #projects, #services, #contact) so the shared Header can navigate it with the
 * same icon bar.
 *
 * Note: `lang`/`dir` are set on the wrapper element rather than <html>, because
 * a nested App Router layout cannot override the root <html> tag. Vazirmatn is
 * bound to [lang="fa"] in globals.css. If you later want more than one Persian
 * page, restructure to /[lang]/ with route-group root layouts.
 */

import Image from "next/image";
import Link from "next/link";
import { FiMail, FiArrowUpRight } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { MdMonitor, MdCode } from "react-icons/md";
import { AiOutlineMobile } from "react-icons/ai";
import { FaWordpressSimple } from "react-icons/fa";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import SectionHeading from "@/components/ui/SectionHeading";
import { persianGraph } from "@/lib/schema";
import { SITE_URL } from "@/data/site";
import { projects } from "@/data/projects";

export const metadata = {
  title: {
    absolute: "علی رضا حبیبی (ahabibidev) — مهندس نرم‌افزار",
  },
  description:
    "علی رضا حبیبی، مشهور به ahabibidev، مهندس نرم‌افزار فول‌استک مقیم کابل، افغانستان با بیش از ۳ سال تجربه و متخصص در توسعه فرانت‌اند با React، Next.js و TypeScript. وب‌سایت رسمی، نمونه‌کارها و راه‌های تماس.",
  alternates: {
    canonical: `${SITE_URL}/fa`,
    languages: {
      en: SITE_URL,
      fa: `${SITE_URL}/fa`,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    type: "profile",
    title: "علی رضا حبیبی (ahabibidev) — مهندس نرم‌افزار",
    description:
      "مهندس نرم‌افزار فول‌استک با تخصص در توسعه فرانت‌اند با React، Next.js و TypeScript.",
    url: "/fa",
    locale: "fa_IR",
  },
};

const EXPERIENCE_FA = [
  {
    role: "مهندس نرم‌افزار",
    company: "FirstRate Inc",
    url: "https://firstrate.com",
    meta: "نوامبر ۲۰۲۵ تا کنون · تگزاس، آمریکا (دفتر کابل)",
    current: true,
  },
  {
    role: "مدرس فرانت‌اند",
    company: "مرکز آموزشی Ulearna",
    meta: "آگوست ۲۰۲۴ تا سپتامبر ۲۰۲۵ · کابل، افغانستان",
  },
  {
    role: "توسعه‌دهنده فول‌استک",
    company: "Ulearna Technologies",
    url: "https://ulearna.com",
    meta: "ژوئن ۲۰۲۴ تا مه ۲۰۲۵ · دبی، امارات",
  },
  {
    role: "توسعه‌دهنده وردپرس و طراح گرافیک",
    company: "MOWJ Pty Ltd",
    url: "https://mowjglobal.com",
    meta: "ژانویه ۲۰۲۵ تا ژوئن ۲۰۲۵ · سیدنی، استرالیا",
  },
];

const EDUCATION_FA = [
  {
    degree: "کارشناسی مهندسی نرم‌افزار",
    school: "دانشگاه کابل",
    meta: "۲۰۲۳ تا ۲۰۲۵",
  },
  {
    degree: "دیپلم سیستم‌های اطلاعاتی",
    school: "انستیتوت تکنالوژی افغانستان",
    meta: "۲۰۲۰ تا ۲۰۲۲",
  },
  {
    degree: "دیپلم زبان انگلیسی",
    school: "Hope Worldwide Afghanistan",
    meta: "۲۰۱۳ تا ۲۰۱۴",
  },
];

const SERVICES_FA = [
  {
    title: "توسعه وب",
    body: "ساخت وب‌سایت‌های واکنش‌گرا و پرسرعت با تجربه کاربری روان و دلپذیر.",
    Icon: MdCode,
    color: "text-green-500",
  },
  {
    title: "اپلیکیشن موبایل",
    body: "ساخت اپلیکیشن‌های موبایل کاربردی و پایدار برای حل مسائل واقعی.",
    Icon: AiOutlineMobile,
    color: "text-orange-500",
  },
  {
    title: "نرم‌افزار دسکتاپ",
    body: "توسعه نرم‌افزارهای دسکتاپ پایدار و کارآمد برای بهبود جریان کاری.",
    Icon: MdMonitor,
    color: "text-blue-500",
  },
  {
    title: "توسعه وردپرس",
    body: "طراحی و توسعه قالب‌ها و سایت‌های اختصاصی وردپرس با ظاهری حرفه‌ای.",
    Icon: FaWordpressSimple,
    color: "text-purple-500",
  },
];

// Persian summaries keyed by project slug; the case-study pages stay English.
const PROJECTS_FA = {
  "hesabi-finance-app":
    "کیف پول شخصی برای مدیریت درآمد، هزینه‌ها و بودجه ماهانه.",
  "qimat-real-time-prices":
    "اپلیکیشن تحت وب برای پیگیری لحظه‌ای قیمت کالاهای اساسی، موبایل، ارز و سوخت.",
  "portfolio-website":
    "وب‌سایت شخصی برای نمایش پروژه‌ها و مهارت‌ها با پشتیبانی از حالت روشن و تاریک.",
  "hospital-management-system":
    "سامانه مدیریت بیماران، نوبت‌دهی، کارکنان و صدور صورتحساب برای بیمارستان‌ها و کلینیک‌ها.",
  "mowj-technologies":
    "وب‌سایت یک آژانس دیجیتال در حوزه بازاریابی، طراحی گرافیک و توسعه وب.",
};

export default function PersianPage() {
  return (
    <div lang="fa" dir="rtl">
      <JsonLd data={persianGraph()} />
      <Header locale="fa" />

      <main className="md:w-full md:max-w-[1400px] m-auto">
        {/* Hero */}
        <section
          id="home"
          className="flex flex-col md:flex-row-reverse items-center justify-between gap-10 md:gap-20 md:mt-20 mt-10"
        >
          <div className="w-7/8 md:w-1/3 relative flex flex-col items-center">
            <span
              aria-hidden="true"
              className="glow bg-red-500 md:top-[-10%] md:left-[5%] bottom-[40%] right-[50%] md:right-auto md:bottom-auto"
            />
            <Image
              src="/images/ali-reza-habibi.webp"
              alt="تصویر علی رضا حبیبی، مهندس نرم‌افزار"
              width={400}
              height={500}
              priority
              className="rounded-3xl md:w-4/6"
            />
            <span
              aria-hidden="true"
              className="glow bg-purple-500 right-[-30%] bottom-[5%] md:right-auto md:left-[40%] md:bottom-auto md:top-[45%]"
            />

            <div className="flex gap-5 mt-5">
              <a
                aria-label="ارسال ایمیل"
                href="mailto:contact@ahabibi.dev"
                rel="me"
              >
                <FiMail className="text-(--text) text-xl" />
              </a>
              <a
                aria-label="پروفایل لینکدین"
                href="https://www.linkedin.com/in/ahabibidev"
                rel="me noopener noreferrer"
                target="_blank"
              >
                <FaLinkedinIn className="text-(--text) text-xl" />
              </a>
              <a
                aria-label="پروفایل گیت‌هاب"
                href="https://github.com/ahabibidev"
                rel="me noopener noreferrer"
                target="_blank"
              >
                <BsGithub className="text-(--text) text-xl" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start gap-6 md:w-1/2">
            <div className="flex flex-col gap-3">
              <p className="text-2xl">👋 سلام، من</p>
              <h1 className="md:text-7xl text-5xl font-bold text-(--text)">
                علی رضا حبیبی
              </h1>
            </div>

            <p className="md:text-xl text-base md:w-5/6">
              <span className="hero-section-span">مهندس نرم‌افزار فول‌استک</span>{" "}
              مقیم <span className="hero-section-span">کابل، افغانستان</span> با
              بیش از <span className="hero-section-span">۳ سال</span> تجربه،
              متخصص در <span className="hero-section-span">فرانت‌اند</span> و
              ساخت تجربه‌های دیجیتال یکپارچه برای وب، موبایل و دسکتاپ هستم.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-(--primary) text-white font-medium transition-transform duration-300 hover:scale-105"
            >
              تماس با من
            </a>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="flex flex-col gap-6 pt-20 pb-20 scroll-mt-10"
        >
          <SectionHeading>درباره من</SectionHeading>
          <div className="flex flex-col gap-4 measure md:text-lg">
            <p>
              <strong className="text-(--text)">علی رضا حبیبی</strong> با نام
              کاربری <strong className="text-(--text)">ahabibidev</strong>،
              مهندس نرم‌افزار فول‌استک با بیش از ۳ سال تجربه حرفه‌ای است. تخصص
              اصلی او توسعه فرانت‌اند با React، Next.js و TypeScript است و در
              ساخت تجربه‌های دیجیتال یکپارچه برای وب، موبایل و دسکتاپ فعالیت
              می‌کند.
            </p>
            <p>
              او هم‌اکنون به عنوان مهندس نرم‌افزار در شرکت{" "}
              <a
                href="https://firstrate.com"
                className="text-(--text) font-semibold hover:text-(--primary) transition-colors"
              >
                FirstRate
              </a>{" "}
              مشغول به کار است و روی مسائلی کار می‌کند که به معماری سنجیده و
              ارتباط شفاف نیاز دارند. پیش از آن مدرس فرانت‌اند در کابل،
              توسعه‌دهنده فول‌استک در دبی و توسعه‌دهنده وردپرس در سیدنی بوده است.
            </p>
            <p>
              او مقیم <strong className="text-(--text)">کابل، افغانستان</strong>{" "}
              است و برای پروژه‌های دورکاری با کارفرمایان سراسر جهان همکاری
              می‌کند. وب‌سایت رسمی او{" "}
              <strong className="text-(--text)">ahabibi.dev</strong> است و همین
              نام کاربری را در گیت‌هاب، لینکدین و سایر پلتفرم‌ها استفاده می‌کند.
            </p>
          </div>
        </section>

        {/* Experience + Education */}
        <section
          id="experience"
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 pt-10 pb-20 scroll-mt-10"
        >
          <div className="flex flex-col gap-6">
            <SectionHeading>تجربه کاری</SectionHeading>
            <ol className="flex flex-col gap-4">
              {EXPERIENCE_FA.map((job) => (
                <li key={job.company} className="surface p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-bold text-(--text)">
                      {job.role}
                    </h3>
                    {job.current && (
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-(--primary) text-white">
                        شاغل
                      </span>
                    )}
                  </div>
                  <p className="text-(--text) mt-1">
                    {job.url ? (
                      <a
                        href={job.url}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="inline-flex items-center gap-1 hover:text-(--primary) transition-colors"
                      >
                        {job.company}
                        <FiArrowUpRight className="text-sm" />
                      </a>
                    ) : (
                      job.company
                    )}
                  </p>
                  <p className="text-sm opacity-80 mt-1">{job.meta}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-col gap-6">
            <SectionHeading>تحصیلات</SectionHeading>
            <ol className="flex flex-col gap-4">
              {EDUCATION_FA.map((item) => (
                <li key={item.degree} className="surface p-5">
                  <h3 className="text-lg font-bold text-(--text)">
                    {item.degree}
                  </h3>
                  <p className="text-(--text) mt-1">{item.school}</p>
                  <p className="text-sm opacity-80 mt-1">{item.meta}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="flex flex-col gap-6 pt-10 pb-20 scroll-mt-10"
        >
          <SectionHeading>پروژه‌ها</SectionHeading>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <li
                key={project.slug}
                className="surface surface-hover overflow-hidden group"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  hrefLang="en"
                  className="flex flex-col h-full"
                >
                  <div className="relative w-full aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`تصویر پروژه ${project.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 flex flex-col gap-2">
                    <h3
                      lang="en"
                      dir="ltr"
                      className="text-xl font-bold text-(--text) text-right group-hover:text-(--primary) transition-colors"
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm text-(--color)">
                      {PROJECTS_FA[project.slug]}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-sm">
            توضیحات کامل هر پروژه در{" "}
            <Link
              href="/projects"
              hrefLang="en"
              className="text-(--primary) hover:underline"
            >
              صفحه پروژه‌ها
            </Link>{" "}
            (به زبان انگلیسی) در دسترس است.
          </p>
        </section>

        {/* Services */}
        <section
          id="services"
          className="flex flex-col gap-6 pt-10 pb-20 scroll-mt-10"
        >
          <SectionHeading>خدمات</SectionHeading>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
            {SERVICES_FA.map(({ title, body, Icon, color }) => (
              <li key={title} className="surface p-6 md:p-8">
                <div className="flex gap-3 items-center">
                  <Icon
                    className={`p-1.5 md:p-2 md:w-12 md:h-12 w-9 h-9 rounded-xl bg-white/5 ${color}`}
                  />
                  <h3 className="font-bold md:text-xl text-base text-(--text)">
                    {title}
                  </h3>
                </div>
                <p className="mt-3 md:text-base text-sm text-(--color)">
                  {body}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="flex flex-col gap-6 pt-10 pb-20 scroll-mt-10"
        >
          <SectionHeading>تماس</SectionHeading>
          <div className="surface p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl md:text-3xl font-bold text-(--text)">
                بیایید با هم کار کنیم
              </h3>
              <p className="measure">
                پروژه‌ای در ذهن دارید یا فقط می‌خواهید سلام کنید؟ خوشحال می‌شوم
                بشنوم. از طریق ایمیل زیر در ارتباط باشید.
              </p>
            </div>
            <a
              href="mailto:contact@ahabibi.dev"
              className="inline-flex shrink-0 items-center justify-center gap-2 px-6 py-3 rounded-full bg-(--primary) text-white font-medium transition-transform duration-300 hover:scale-105"
              dir="ltr"
            >
              <FiMail />
              contact@ahabibi.dev
            </a>
          </div>
        </section>
      </main>

      <Footer locale="fa" />
    </div>
  );
}
