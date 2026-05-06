"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import InnerPageHero from "../components/ui/InnerPageHero";

const contactCards = [
  {
    icon: "📍",
    title: "Visit Us",
    lines: ["Jl. Raya Bromo No. 12", "Sukapura, East Java 67254", "Indonesia"],
  },
  {
    icon: "📞",
    title: "Call Us",
    lines: ["+62 851 4316 4976", "+62 851 4316 4979", "Mon–Sun, 07:00–20:00 WIB"],
  },
  {
    icon: "✉️",
    title: "Email Us",
    lines: ["hello@bromobliss.com", "bookings@bromobliss.com", "Response within 2 hours"],
  },
  {
    icon: "🕐",
    title: "Office Hours",
    lines: ["Monday – Friday: 08:00–18:00", "Saturday: 08:00–14:00", "Sunday: Closed (tours run daily)"],
  },
];

const faqs = [
  {
    q: "What is the best time to visit Mount Bromo?",
    a: "The dry season (April–October) offers the clearest skies and most reliable sunrises. Peak months are July–August. The wet season (November–March) is quieter and more atmospheric, though cloud cover may obscure views.",
  },
  {
    q: "How fit do I need to be for the tours?",
    a: "Most tours involve moderate walking. The crater requires climbing ~250 steps — manageable for most fitness levels. We also offer horse rides for those who prefer not to walk. Our guides always match pace to the group.",
  },
  {
    q: "What should I bring?",
    a: "Warm layers (temperatures drop to 5°C at 5 AM), comfortable walking shoes, a camera, sunscreen, and a windbreaker. We provide headlamps and walking sticks on request.",
  },
  {
    q: "How far in advance should I book?",
    a: "We recommend booking at least 2–3 days ahead for standard tours, and 1–2 weeks for private or premium packages during peak season (July–September).",
  },
  {
    q: "Do you offer group discounts?",
    a: "Yes — groups of 4+ receive a 10% discount, and groups of 8+ receive 15% off. Contact us directly for custom group quotes and private tour pricing.",
  },
  {
    q: "Is Bromo safe to visit?",
    a: "Yes. Mount Bromo is an active volcano but access is carefully monitored by Indonesian authorities. All our tours follow official safety protocols and we continuously monitor volcanic activity levels.",
  },
];

const packages = [
  "Sunrise Explorer – $29",
  "Adventure Trail – $49",
  "Photography Tour – $79",
  "Cultural Heritage – $59",
  "Night & Stars Escape – $100",
  "Private Bromo Journey – $249",
];

export default function ContactContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "", email: "", date: "", package: "", groupSize: "1", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  };

  const inputClass = "w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#E8703A] focus:ring-2 focus:ring-[#E8703A]/20 transition-all duration-300 placeholder-gray-400";

  return (
    <main className="min-h-screen bg-white">
      <InnerPageHero
        tag="Contact Us"
        title="Let's Plan Your"
        highlight="Bromo Adventure"
        description="Questions, custom requests, or just want to chat about Bromo? We reply within 2 hours and love helping travelers plan the perfect trip."
        imageSeed="bromo-contact-mountain-view/1920/900"
      />

      {/* Contact Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                whileHover={{ y: -5 }}
                className="bg-[#F9F6F1] rounded-2xl p-6 hover:shadow-md transition-all duration-300"
              >
                <span className="text-3xl mb-4 block">{card.icon}</span>
                <h3 className="font-semibold text-gray-900 mb-3">{card.title}</h3>
                {card.lines.map((line, j) => (
                  <p key={j} className={`text-sm ${j === 2 ? "text-[#E8703A] font-medium mt-2" : "text-gray-500"} leading-relaxed`}>{line}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-16 bg-[#F9F6F1]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="w-8 h-0.5 bg-[#E8703A]" />
                  <span className="text-[#E8703A] text-xs font-bold tracking-[0.2em] uppercase">Send a Message</span>
                </div>
                <h2 className="font-serif font-bold text-gray-900 text-2xl md:text-3xl">Book or Enquire</h2>
                <p className="text-gray-500 text-sm mt-2">Fill in the form and we&apos;ll get back to you within 2 hours.</p>
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="bg-white rounded-3xl p-10 text-center shadow-sm border border-green-100"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5"
                    >
                      <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <h3 className="font-serif font-bold text-gray-900 text-xl mb-2">Message Received!</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                      Thanks, <strong>{formData.name || "traveler"}</strong>! We&apos;ll reply to <strong>{formData.email}</strong> within 2 hours with everything you need to know.
                    </p>
                    <Link
                      href="/packages"
                      className="inline-flex items-center gap-2 bg-[#E8703A] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#d4623a] transition-colors"
                    >
                      Browse Packages While You Wait
                    </Link>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-white rounded-3xl p-7 shadow-sm space-y-4"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="you@example.com"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Preferred Date</label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Group Size</label>
                        <select
                          name="groupSize"
                          value={formData.groupSize}
                          onChange={handleChange}
                          className={inputClass}
                        >
                          {["1", "2", "3–4", "5–8", "9+"].map((s) => (
                            <option key={s} value={s}>{s} {s === "1" ? "person" : "people"}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Interested Package</label>
                      <select
                        name="package"
                        value={formData.package}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select a package (optional)</option>
                        {packages.map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                        <option value="custom">Custom / Not sure yet</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="Tell us about your trip, any special requests, or questions you have..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: loading ? 1 : 1.02 }}
                      whileTap={{ scale: loading ? 1 : 0.98 }}
                      className="w-full bg-[#E8703A] text-white py-4 rounded-xl font-semibold text-sm hover:bg-[#d4623a] transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg shadow-[#E8703A]/25"
                    >
                      {loading ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </motion.button>

                    <p className="text-gray-400 text-xs text-center">We reply within 2 hours · No spam, ever</p>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Map placeholder + quick links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col gap-6"
            >
              <div className="rounded-3xl overflow-hidden shadow-sm bg-gray-100 flex-1 min-h-[280px] relative">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-gray-400">
                  <svg className="w-12 h-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-sm font-medium text-gray-500">Mount Bromo, East Java</p>
                  <p className="text-xs text-gray-400">Sukapura, Probolinggo 67254</p>
                  <a
                    href="https://maps.google.com/?q=Mount+Bromo+East+Java"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 bg-[#E8703A] text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#d4623a] transition-colors"
                  >
                    Open in Google Maps
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Tour Packages", href: "/packages" },
                    { label: "The Experience", href: "/experience" },
                    { label: "About BromoBliss", href: "/about" },
                    { label: "View Gallery", href: "/#moments" },
                  ].map((link) => (
                    <motion.div key={link.label} whileHover={{ x: 3 }}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#E8703A] transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E8703A]" />
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-[#E8703A]" />
              <span className="text-[#E8703A] text-xs font-bold tracking-[0.2em] uppercase">FAQ</span>
              <span className="w-8 h-0.5 bg-[#E8703A]" />
            </div>
            <h2 className="font-serif font-bold text-gray-900" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
                className="border border-gray-100 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 text-sm">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <svg className={`w-5 h-5 transition-colors ${openFaq === i ? "text-[#E8703A]" : "text-gray-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-50 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-10 text-center bg-[#F9F6F1] rounded-2xl p-6"
          >
            <p className="text-gray-600 text-sm mb-3">Still have questions? We&apos;re here 7 days a week.</p>
            <a
              href="mailto:hello@bromobliss.com"
              className="inline-flex items-center gap-2 text-[#E8703A] font-semibold text-sm hover:underline"
            >
              hello@bromobliss.com
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
