/**
 * Footer Component (Server)
 * Static content with social links
 */

export default function Footer() {
  return (
    <footer className="flex m-auto md:flex-row flex-col justify-center items-center gap-5 md:mb-5 mb-25 md:w-full md:max-w-[1400px] h-10">
      <p>
        © {new Date().getFullYear()} |{" "}
        <span className="text-(--text)">Ali Reza Habibi</span> | All Rights
        Reserved
      </p>
    </footer>
  );
}
