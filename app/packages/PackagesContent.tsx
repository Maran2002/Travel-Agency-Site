"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import InnerPageHero from "../components/ui/InnerPageHero";

const categories = [
  { id: "all", label: "All Packages" },
  { id: "budget", label: "Budget" },
  { id: "premium", label: "Premium" },
  { id: "private", label: "Private" },
];

const packages = [
  {
    id: 1, name: "Sunrise Explorer", price: 29, duration: "1 Day", category: "budget",
    seed: "sunrise-hike-morning/600/420", rating: 4.8, reviews: 124, badge: "Most Popular",
    desc: "Watch Bromo's magical sunrise with an expert local guide and capture unforgettable golden-hour landscapes.",
    highlights: ["Sunrise viewpoint", "Volcano crater walk", "Local breakfast"],
  },
  {
    id: 2, name: "Adventure Trail", price: 49, duration: "1 Day", category: "budget",
    seed: "river-trekking-adventure/600/420", rating: 4.7, reviews: 89, badge: "Best Value",
    desc: "An adrenaline-packed day through Bromo's diverse volcanic terrain — jeeps, rivers, and lava fields.",
    highlights: ["Jeep safari ride", "River trekking", "Cave exploration"],
  },
  {
    id: 3, name: "Photography Tour", price: 79, duration: "1 Day", category: "premium",
    seed: "landscape-photography-mountain/600/420", rating: 4.9, reviews: 56, badge: "Photography",
    desc: "Capture Bromo's breathtaking landscapes at the best golden-hour spots with professional guidance.",
    highlights: ["Golden hour sessions", "Pro photography tips", "Best viewpoints"],
  },
  {
    id: 4, name: "Cultural Heritage", price: 59, duration: "2 Days", category: "budget",
    seed: "temple-ceremony-cultural/600/420", rating: 4.8, reviews: 43, badge: "Cultural",
    desc: "Immerse yourself in the rich Tengger tribe culture, sacred ceremonies, and authentic local cuisine.",
    highlights: ["Tengger tribe visit", "Temple ceremony", "Local cuisine"],
  },
  {
    id: 5, name: "Night & Stars Escape", price: 100, duration: "2 Days", category: "premium",
    seed: "night-camping-volcano-stars/600/420", rating: 4.9, reviews: 38, badge: "Premium",
    desc: "Sleep beneath a blanket of stars in the volcanic highlands in a luxury glamping experience.",
    highlights: ["Astrophotography", "Night jeep ride", "Luxury glamping"],
  },
  {
    id: 6, name: "Private Bromo Journey", price: 249, duration: "3 Days", category: "private",
    seed: "luxury-private-mountain-guide/600/420", rating: 5.0, reviews: 22, badge: "Exclusive",
    desc: "A completely personalized luxury Bromo experience, crafted around your schedule and preferences.",
    highlights: ["Exclusive guide", "Luxury resort stay", "Custom itinerary"],
  },
];

const whyUs = [
  { icon: "🏔️", title: "Local Expert Guides", desc: "Born-and-raised Tengger guides who know every trail, viewpoint, and secret spot." },
  { icon: "📸", title: "Curated Photography", desc: "Every tour stops at the best photo spots — golden hour guaranteed." },
  { icon: "🛡️", title: "Safety First", desc: "All tours follow strict safety protocols with emergency support available." },
  { icon: "♻️", title: "Eco-Responsible", desc: "We're committed to preserving Bromo's ecosystem for future generations." },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className={`w-3 h-3 ${s <= Math.round(rating) ? "text-amber-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-gray-500 text-xs ml-1">({rating})</span>
    </div>
  );
}

export default function PackagesContent() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? packages
    : packages.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-white">
      <InnerPageHero
        tag="Tour Packages"
        title="Find Your Perfect"
        highlight="Bromo Adventure"
        description="Handcrafted tours for every traveler — whether you seek a sunrise hike, a cultural dive, or a private luxury escape."
        imageSeed="bromo-packages-hero/1920/900"
      />

      {/* Filter + Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 mb-12"
        >
          <div>
            <h2 className="font-serif text-2xl md:text-3xl text-gray-900 font-bold">
              {activeCategory === "all" ? "All Packages" : categories.find(c => c.id === activeCategory)?.label}
            </h2>
            <p className="text-gray-500 text-sm mt-1">{filtered.length} packages available</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-[#E8703A] text-white shadow-md shadow-[#E8703A]/30"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#E8703A]/20 transition-all duration-400 group flex flex-col"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={`https://picsum.photos/seed/${pkg.seed}`}
                    alt={pkg.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full">
                      {pkg.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-1.5">
                    <span className="text-[#E8703A] font-bold text-base">${pkg.price}</span>
                    <span className="text-gray-500 text-[10px]">/person</span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-serif font-bold text-gray-900 text-lg leading-tight">{pkg.name}</h3>
                    <span className="text-xs text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full ml-2 whitespace-nowrap">{pkg.duration}</span>
                  </div>
                  <StarRating rating={pkg.rating} />
                  <span className="text-gray-400 text-xs mt-0.5">{pkg.reviews} reviews</span>
                  <p className="text-gray-500 text-sm mt-3 leading-relaxed flex-1">{pkg.desc}</p>
                  <ul className="mt-4 space-y-1.5">
                    {pkg.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-gray-600 text-xs">
                        <span className="w-4 h-4 rounded-full bg-[#E8703A]/10 flex items-center justify-center flex-shrink-0">
                          <svg className="w-2.5 h-2.5 text-[#E8703A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <motion.div className="mt-5" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-2 w-full bg-[#E8703A] text-white py-3 rounded-xl text-sm font-semibold hover:bg-[#d4623a] transition-colors"
                    >
                      Book This Tour
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Why BromoBliss */}
      <section className="py-20 bg-[#F9F6F1]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-[#E8703A]" />
              <span className="text-[#E8703A] text-xs font-bold tracking-[0.2em] uppercase">Why Us</span>
              <span className="w-8 h-0.5 bg-[#E8703A]" />
            </div>
            <h2 className="font-serif text-gray-900 font-bold" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>
              What Makes BromoBliss Different
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1A1A1A] text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto px-6"
        >
          <h2 className="font-serif font-bold mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            Can&apos;t decide? Let us help.
          </h2>
          <p className="text-white/60 mb-8 text-sm leading-relaxed">
            Tell us your travel dates, group size, and budget — we&apos;ll recommend the perfect Bromo experience for you.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#E8703A] text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-[#d4623a] transition-colors shadow-lg shadow-[#E8703A]/30"
            >
              Get a Free Recommendation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
