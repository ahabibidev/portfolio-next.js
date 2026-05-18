/**
 * ContactForm Component (Client)
 * ------------------------------
 * Handles form state, validation, and submission.
 * Uses react-hot-toast for notifications.
 */

"use client";

import { useState, useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import toast from "react-hot-toast";
import {
  FiSend,
  FiUser,
  FiMail,
  FiMessageSquare,
  FiFileText,
} from "react-icons/fi";

export default function ContactForm() {
  const { isLight } = useContext(ThemeContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Client-side validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      toast.error("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.", {
          duration: 5000,
          icon: "🎉",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Input wrapper styles
  const inputWrapperClass = (fieldName) => `
    relative flex items-center gap-3 rounded-xl border-2 transition-all duration-300
    ${
      focusedField === fieldName
        ? "border-(--primary) shadow-lg shadow-(--primary)/10"
        : isLight
          ? "border-zinc-200 hover:border-zinc-300"
          : "border-zinc-700 hover:border-zinc-600"
    }
    ${isLight ? "bg-zinc-50" : "bg-white/5"}
  `;

  // Input styles
  const inputClass = `
    w-full bg-transparent px-4 py-3 outline-none text-(--text)
    placeholder:text-(--color) placeholder:opacity-60
  `;

  // Icon styles
  const iconClass = (fieldName) => `
    ml-4 text-lg transition-colors duration-300
    ${focusedField === fieldName ? "text-(--primary)" : "text-(--color)"}
  `;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Name Field */}
      <div className={inputWrapperClass("name")}>
        <FiUser className={iconClass("name")} />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onFocus={() => setFocusedField("name")}
          onBlur={() => setFocusedField(null)}
          placeholder="Your Name *"
          className={inputClass}
          disabled={isSubmitting}
          required
        />
      </div>
/**
      {/* Email Field */}
      <div className={inputWrapperClass("email")}>
        <FiMail className={iconClass("email")} />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onFocus={() => setFocusedField("email")}
          onBlur={() => setFocusedField(null)}
          placeholder="Your Email *"
          className={inputClass}
          disabled={isSubmitting}
          required
        />
      </div>
*/
      {/* Subject Field */}
      <div className={inputWrapperClass("subject")}>
        <FiFileText className={iconClass("subject")} />
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          onFocus={() => setFocusedField("subject")}
          onBlur={() => setFocusedField(null)}
          placeholder="Subject (Optional)"
          className={inputClass}
          disabled={isSubmitting}
        />
      </div>

      {/* Message Field */}
      <div className={`${inputWrapperClass("message")} items-start`}>
        <FiMessageSquare className={`${iconClass("message")} mt-4`} />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={() => setFocusedField("message")}
          onBlur={() => setFocusedField(null)}
          placeholder="Your Message *"
          rows={5}
          className={`${inputClass} resize-none`}
          disabled={isSubmitting}
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`
          group relative overflow-hidden mt-2 py-4 px-8 rounded-full font-semibold
          text-lg transition-all duration-300 flex items-center justify-center gap-3
          ${
            isSubmitting
              ? "bg-(--color) cursor-not-allowed opacity-70"
              : "bg-(--primary) hover:shadow-lg hover:shadow-(--primary)/30 hover:scale-[1.02]"
          }
          text-white
        `}
      >
        {/* Button background animation */}
        <span
          className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent
            translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"
        />

        {isSubmitting ? (
          <>
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Sending...</span>
          </>
        ) : (
          <>
            <span>Send Message</span>
            <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </>
        )}
      </button>
    </form>
  );
}
