"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Packages", href: "/packages" },
  { label: "Experience", href: "/experience" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
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
  const hoverColor = "hover:text-brand-orange";
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
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
              <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7" />
            </svg>
          </div>
          <span className={`text-base font-bold tracking-tight font-serif transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`}>
            BromoBliss
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((item, i) => {
            const isActive = pathname === item.href;
            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
              >
                <Link
                  href={item.href}
                  className={`text-sm font-medium relative group transition-colors duration-300 ${textColor} ${hoverColor}`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-0.5 bg-brand-orange transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="hidden md:block"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-orange text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-brand-orange/25 hover:bg-[#d4623a] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Book Now
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
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
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium py-1.5 transition-colors ${
                  pathname === item.href ? "text-brand-orange" : "text-gray-700 hover:text-brand-orange"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="bg-brand-orange text-white text-center py-3 rounded-full font-semibold text-sm mt-1"
            >
              Book Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
