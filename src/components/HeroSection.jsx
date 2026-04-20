/**
 * HeroSection Component (Client)
 * -------------------------------
 * Main hero/banner section with profile image.
 *
 * Client Component because:
 * - Uses useContext for theme
 */

"use client";

import { useContext } from "react";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn, FaRegEnvelope } from "react-icons/fa";
import ContactButton from "./ContactButton";

export default function HeroSection() {
  const { isLight } = useContext(ThemeContext);

  return (
    <section
      id="#"
      className="flex-col md:w-280 lg:w-300 xl:w-325 2xl:w-350 m-auto flex justify-between md:flex-row md:mt-20 mt-10 items-center md:gap-20 gap-10"
    >
      {/* Left Content */}
      <div className="flex items-start flex-col md:w-1/2 gap-6">
        <div className="flex flex-col gap-3">
          <p className="text-2xl self-start">👋 Hello. I&apos;m</p>
          <h1 className="md:text-7xl text-6xl self-start font-bold text-(--text)">
            Ali Reza Habibi
          </h1>
        </div>

        <p className="md:text-xl text-base font-normal md:w-5/6">
          <span className="hero-section-span">
            Full-Stack Software Engineer
          </span>{" "}
          with
          <span className="hero-section-span"> 3+ years</span> of experience,
          specializing in
          <span className="hero-section-span"> Frontend</span> and building
          seamless digital experiences across web, mobile, and desktop.
        </p>

        <ContactButton>Contact Me</ContactButton>
      </div>

      {/* Right Content - Image */}
      <div className="w-7/8 md:w-1/3 flex flex-col items-center justify-center relative">
        {/* Gradient blob - top */}
        <div
          className={`absolute -z-10 rounded-full blur-3xl animate-pulse-slow pointer-events-none 
            bottom-[40%] left-[50%] md:left-auto md:right-[5%] md:bottom-auto md:top-[-10%] 
            w-50 h-50 bg-red-500 ${isLight ? "opacity-30" : "opacity-10"}`}
        />

        {/* Profile Image - next/image */}
        <Image
          src="/images/developer.webp"
          alt="Ali Reza Habibi Portrait"
          width={400}
          height={500}
          priority
          className="rounded-3xl md:w-4/6 -z-1"
        />

        {/* Gradient blob - bottom */}
        <div
          className={`absolute -z-10 rounded-full blur-3xl animate-pulse-slow pointer-events-none 
            left-[-30%] bottom-[5%] md:left-auto md:right-[40%] md:bottom-auto md:top-[45%] 
            w-50 h-50 bg-purple-500 ${isLight ? "opacity-30" : "opacity-15"}`}
        />

        {/* Social Links */}
        <div className="flex gap-5 mt-5">
          <a aria-label="Send me an Email" href="mailto:contact@ahabibi.dev">
            <FaRegEnvelope className="text-(--text) text-xl" />
          </a>
          <a
            aria-label="Visit my LinkedIn Profile"
            href="https://linkedin.com/in/ahabibidev"
          >
            <FaLinkedinIn className="text-(--text) text-xl" />
          </a>
          <a
            aria-label="Visit my GitHub Profile"
            href="https://github.com/ahabibidev"
          >
            <BsGithub className="text-(--text) text-xl" />
          </a>
        </div>
      </div>
    </section>
  );
}
