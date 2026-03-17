/**
 * DynamicTitle Component (Client)
 * Added "use client" - required for react-type-animation
 */

"use client";

import { TypeAnimation } from "react-type-animation";

export default function DynamicTitle() {
  return (
    <h2 className="text-center md:text-3xl text-2xl font-semibold text-(--text)">
      Trusted by teams from <br className="md:hidden" />
      <TypeAnimation
        sequence={[
          "Kabul, Afghanistan.",
          2000,
          "Sydney, Australia.",
          2000,
          "Dubai, UAE.",
          2000,
          "Texas, US.",
          2000,
        ]}
        wrapper="span"
        speed={60}
        repeat={Infinity}
        className="text-(--primary)"
      />
    </h2>
  );
}
