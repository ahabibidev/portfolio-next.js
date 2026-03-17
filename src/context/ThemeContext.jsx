/**
 * ThemeContext.jsx
 * -----------------
 * Provides theme state (light/dark mode) to the entire app.
 *
 * Client Component because:
 * - Uses useState and useEffect hooks
 * - Manipulates DOM (document.documentElement)
 * - createContext requires client-side rendering
 *
 * FIXED: Added .Provider to ThemeContext JSX
 */

"use client";

import { createContext, useCallback, useSyncExternalStore } from "react";

export const ThemeContext = createContext({
  isLight: false,
  toggleTheme: () => {},
});

function subscribe(callback) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot() {
  return localStorage.getItem("theme") === "light";
}

function getServerSnapshot() {
  return false; // server always renders dark (matches initial HTML)
}

export function ThemeProvider({ children }) {
  // Reads directly from localStorage as the source of truth
  const isLight = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const toggleTheme = useCallback(() => {
    const next = !isLight;

    // 1. Update localStorage (the "external store")
    localStorage.setItem("theme", next ? "light" : "dark");

    // 2. Sync the DOM class
    const html = document.documentElement;
    if (next) {
      html.classList.add("light");
    } else {
      html.classList.remove("light");
    }

    // 3. Tell useSyncExternalStore the store changed → triggers re-render
    window.dispatchEvent(new Event("storage"));
  }, [isLight]);

  return (
    <ThemeContext.Provider value={{ isLight, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
