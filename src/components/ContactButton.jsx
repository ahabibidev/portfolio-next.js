/**
 * ContactButton Component (Server)
 * Pure presentational - no hooks needed
 */

export default function ContactButton({ children, width, ...props }) {
  return (
    <a
      {...props}
      href="mailto:shahreyarhabibi@gmail.com"
      className={`inline-flex items-center gap-2 text-sm md:text-lg md:px-6 md:py-3 px-5 py-2.5 border-2 
            border-(--primary) text-(--primary) rounded-full font-medium
            transition-all duration-300 hover:bg-(--primary) hover:text-white`}
    >
      {children}
    </a>
  );
}
