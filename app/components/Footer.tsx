"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const quickLinks = [
  { label: "About TamilSoul", href: "#" },
  { label: "Tour Packages", href: "#tours" },
  { label: "Destinations", href: "#destinations" },
  { label: "Photo Gallery", href: "#gallery" },
  { label: "Travel Guide", href: "#" },
  { label: "Partner With Us", href: "#" },
];

const contactInfo = [
  { icon: "📍", text: "No. 12, Chennai, Tamil Nadu, India" },
  { icon: "📞", text: "+91 98765 43210" },
  { icon: "📞", text: "+91 98765 43211" },
  { icon: "✉️", text: "hello@tamilsoul.in" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#1A1209] text-white">
      <div className="h-1 bg-gradient-to-r from-[#8B1A1A] via-[#E8703A] to-[#C49A1A]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-full bg-[#E8703A] flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                  <path d="M12 2C9.5 5 7 8 7 11a5 5 0 0010 0c0-3-2.5-6-5-9zm0 3.5C13.3 7.3 15 9.5 15 11a3 3 0 01-6 0c0-1.5 1.7-3.7 3-5.5zM5 14c0 3.9 3.1 7 7 7s7-3.1 7-7c0-.4 0-.8-.1-1.1C17.3 14.6 14.8 16 12 16s-5.3-1.4-6.9-3.1C5 13.2 5 13.6 5 14z" />
                </svg>
              </div>
              <span className="text-lg font-[var(--font-playfair)]" style={{ fontWeight: 700 }}>TamilSoul</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Tamil Nadu's premier travel experience — curating soulful journeys through ancient temples, verdant hills, and sun-kissed shores since 2015.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  whileHover={{ scale: 1.15, backgroundColor: "#E8703A" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#E8703A] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-[#E8703A] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wide">Contact Info</h4>
            <ul className="space-y-3">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-sm flex-shrink-0 mt-0.5">{item.icon}</span>
                  <span className="text-gray-400 text-sm leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2 text-sm tracking-wide">Stay Updated</h4>
            <p className="text-gray-400 text-xs mb-4 leading-relaxed">
              Exclusive tour deals, Tamil Nadu travel guides, and cultural insights in your inbox.
            </p>
            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#E8703A]/20 border border-[#E8703A]/40 rounded-xl p-4 text-center"
              >
                <span className="text-[#E8703A] font-semibold text-sm">Vanakkam! You're subscribed 🙏</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="bg-white/10 border border-white/10 text-white placeholder-gray-500 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-[#E8703A]/60 transition-colors"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#E8703A] text-white py-3 rounded-xl text-sm font-semibold hover:bg-[#d4623a] transition-colors"
                >
                  Subscribe
                </motion.button>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © 2025 TamilSoul Travel. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a key={item} href="#" className="text-gray-500 text-xs hover:text-[#E8703A] transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
