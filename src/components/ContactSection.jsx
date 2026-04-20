/**
 * ContactSection Component (Client)
 * ----------------------------------
 * Two-column layout with contact info and form.
 * Features smooth animations and theme-aware styling.
 */

"use client";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import ContactForm from "./ContactForm";
import SectionTitles from "./SectionsTitle";
import {
  FiMail,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiInstagram,
} from "react-icons/fi";

export default function ContactSection() {
  const { isLight } = useContext(ThemeContext);

  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: "contact@ahabibi.dev",
      href: "mailto:contact@ahabibi.dev",
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Available Worldwide",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: FiGithub,
      label: "GitHub",
      href: "https://github.com/ahabibidev",
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/ahabibidev",
    },
    {
      icon: FiInstagram,
      label: "Instagram",
      href: "https://instagram.com/_habibei_",
    },
  ];

  return (
    <section
      id="contact"
      className="flex flex-col md:w-280 lg:w-300 xl:w-325 2xl:w-350 m-auto md:gap-8 gap-1 pt-20 pb-20 -scroll-mt-10"
    >
      {/* Section Title */}
      <SectionTitles title="Get In Touch" bg="bg-red-900" />

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Left Column - Contact Info */}
        <div className="flex flex-col gap-8">
          {/* Heading */}
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-5xl font-bold text-(--text)">
              Let&apos;s Work <span className="text-(--primary)">Together</span>
            </h2>
            <p className="text-(--color) text-base md:text-lg leading-relaxed">
              Have a project in mind or just want to say hello? I&apos;d love to
              hear from you. Fill out the form and I&apos;ll get back to you as
              soon as possible.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="flex flex-col gap-4">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className={`
                  flex items-center gap-4 p-4 rounded-xl transition-all duration-300
                  ${
                    isLight
                      ? "bg-zinc-100 hover:bg-zinc-200"
                      : "bg-white/5 hover:bg-white/10"
                  }
                `}
              >
                <div
                  className={`
                    p-3 rounded-full 
                    ${isLight ? "bg-white" : "bg-white/10"}
                  `}
                >
                  <item.icon className="text-xl text-(--primary)" />
                </div>
                <div>
                  <p className="text-sm text-(--color)">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-(--text) font-medium hover:text-(--primary) transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-(--text) font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-col md:items-start items-center gap-4">
            <p className="text-(--color) text-sm uppercase tracking-wider font-medium">
              Connect with me
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`
                    p-4 rounded-full transition-all duration-300
                    ${
                      isLight
                        ? "bg-zinc-100 hover:bg-(--primary) text-zinc-600 hover:text-white"
                        : "bg-white/5 hover:bg-(--primary) text-zinc-400 hover:text-white"
                    }
                    hover:scale-110 hover:shadow-lg hover:shadow-(--primary)/20
                  `}
                >
                  <social.icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>

          {/* Decorative Element */}
          <div
            className={`
              hidden lg:block mt-auto p-6 rounded-2xl border-2 border-dashed
              ${isLight ? "border-zinc-200" : "border-zinc-800"}
            `}
          >
            <p className="text-(--color) text-sm italic">
              &quot;Great things are not done by impulse, but by a series of
              small things brought together.&quot;
            </p>
            <p className="text-(--primary) text-sm mt-2 font-medium">
              — Vincent Van Gogh
            </p>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div
          className={`
            p-6 md:p-8 rounded-2xl transition-all duration-300
            ${
              isLight
                ? "bg-white border border-zinc-200 shadow-xl"
                : "bg-white/5 border border-zinc-800"
            }
          `}
        >
          <h3 className="text-2xl font-bold text-(--text) mb-6">
            Send me a message
          </h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
