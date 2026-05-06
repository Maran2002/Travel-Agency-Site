"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Destinations", href: "#destinations" },
  { label: "Experiences", href: "#experiences" },
  { label: "Tours", href: "#tours" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#booking" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDark = isHome && !scrolled;
  const textColor = isDark ? "text-white/90" : "text-gray-600";
  const navBg = scrolled || !isHome
    ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
    : "bg-transparent py-5";

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-[#E8703A] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
              <path d="M12 2C9.5 5 7 8 7 11a5 5 0 0010 0c0-3-2.5-6-5-9zm0 3.5C13.3 7.3 15 9.5 15 11a3 3 0 01-6 0c0-1.5 1.7-3.7 3-5.5zM5 14c0 3.9 3.1 7 7 7s7-3.1 7-7c0-.4 0-.8-.1-1.1C17.3 14.6 14.8 16 12 16s-5.3-1.4-6.9-3.1C5 13.2 5 13.6 5 14z" />
            </svg>
          </div>
          <span className={`text-base font-bold tracking-tight font-[var(--font-playfair)] transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`}>
            TamilSoul
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
            >
              <a
                href={item.href}
                className={`text-sm font-medium relative group transition-colors duration-300 ${textColor} hover:text-[#E8703A]`}
              >
                {item.label}
                <span className="absolute -bottom-0.5 left-0 h-0.5 bg-[#E8703A] w-0 group-hover:w-full transition-all duration-300" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="hidden md:block"
        >
          <a
            href="#tours"
            className="inline-flex items-center gap-2 bg-[#E8703A] text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-[#E8703A]/25 hover:bg-[#d4623a] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Book Tour
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>

        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-0.5 transition-all duration-300 ${isDark ? "bg-white" : "bg-gray-800"} ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 transition-all duration-300 ${isDark ? "bg-white" : "bg-gray-800"} ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-0.5 transition-all duration-300 ${isDark ? "bg-white" : "bg-gray-800"} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-3"
          >
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium py-1.5 transition-colors text-gray-700 hover:text-[#E8703A]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#tours"
              onClick={() => setMenuOpen(false)}
              className="bg-[#E8703A] text-white text-center py-3 rounded-full font-semibold text-sm mt-1"
            >
              Book Tour
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
