"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Image from "next/image";

const tabs = [
  { id: "temples", label: "Temples", emoji: "🛕" },
  { id: "mountains", label: "Mountains", emoji: "🏔️" },
  { id: "coastline", label: "Coastline", emoji: "🌊" },
  { id: "heritage", label: "Heritage", emoji: "🏛️" },
  { id: "cuisine", label: "Cuisine", emoji: "🍛" },
] as const;

type TabId = typeof tabs[number]["id"];

const experiences: Record<TabId, {
  title: string;
  desc: string;
  image: string;
  highlights: { emoji: string; text: string }[];
  stat: { value: string; label: string };
}> = {
  temples: {
    title: "Divine Architecture & Ancient Traditions",
    desc: "Tamil Nadu's 33,000+ temples represent the pinnacle of Dravidian artistry — towering rainbow gopurams, musical stone pillars, and sacred rituals dating back three millennia. Every temple is a living universe of devotion.",
    image: "ancient-dravidian-temple-gopuram-colorful/900/700",
    highlights: [
      { emoji: "🌅", text: "Meenakshi Amman Temple — Madurai" },
      { emoji: "🏯", text: "Brihadeeswarar Temple — Thanjavur (UNESCO)" },
      { emoji: "🌊", text: "Ramanathaswamy Temple — Rameswaram" },
      { emoji: "⛏️", text: "Shore Temple — Mahabalipuram (UNESCO)" },
    ],
    stat: { value: "33,000+", label: "Ancient Temples" },
  },
  mountains: {
    title: "Misty Hills & Tea-Scented Trails",
    desc: "The Nilgiri Hills, a UNESCO World Biosphere Reserve, drape Tamil Nadu's western edge in endless emerald tea estates. Cool mountain air, shola forests, rare wildlife, and the UNESCO Mountain Railway await.",
    image: "nilgiri-hills-misty-tea-sunrise-green/900/700",
    highlights: [
      { emoji: "🍵", text: "Nilgiri Tea Estate Walks — Ooty" },
      { emoji: "🚂", text: "Nilgiri Mountain Railway — UNESCO" },
      { emoji: "🏕️", text: "Kodaikanal Lake & Pine Forests" },
      { emoji: "🐘", text: "Anamalai Tiger Reserve — Valparai" },
    ],
    stat: { value: "2,636m", label: "Doddabetta Peak" },
  },
  coastline: {
    title: "Sun-Kissed Shores & Sacred Horizons",
    desc: "Tamil Nadu's 1,076 km coastline stretches from French-influenced Pondicherry to the sacred confluence at Kanyakumari, offering beach sunrises, ancient port cities, and the legendary pilgrimage island of Rameswaram.",
    image: "kanyakumari-sunrise-three-seas-lighthouse-india/900/700",
    highlights: [
      { emoji: "🌄", text: "Kanyakumari Sunrise — Three Seas Meet" },
      { emoji: "🏖️", text: "Marina Beach — World's 2nd Longest" },
      { emoji: "🌺", text: "Pondicherry French Quarter & Auroville" },
      { emoji: "⛵", text: "Rameswaram Sacred Island Pilgrimage" },
    ],
    stat: { value: "1,076 km", label: "Stunning Coastline" },
  },
  heritage: {
    title: "Living Legends & Timeless Crafts",
    desc: "From UNESCO World Heritage monuments to living craft traditions — Kanjivaram silk weavers, Tanjore gold-leaf painters, Bharatanatyam dancers — Tamil Nadu's heritage breathes and dances in every village.",
    image: "chettinad-mansion-ornate-marble-pillars/900/700",
    highlights: [
      { emoji: "🏰", text: "Chettinad Palace Mansion Tours" },
      { emoji: "🎭", text: "Bharatanatyam Classical Dance Recitals" },
      { emoji: "🧵", text: "Kanjivaram Silk Weaving — Live Demos" },
      { emoji: "🎨", text: "Tanjore Painting — Ancient Gold-Leaf Art" },
    ],
    stat: { value: "3", label: "UNESCO Heritage Sites" },
  },
  cuisine: {
    title: "Feast for the Senses",
    desc: "Chettinad curries alive with star anise and kalpasi, crispy dosas served on banana leaves, idlis with chutneys of a hundred varieties, and rich filter coffee poured from gleaming silver urns — Tamil food is a revelation.",
    image: "traditional-south-indian-banana-leaf-feast/900/700",
    highlights: [
      { emoji: "🌶️", text: "Authentic Chettinad Curry Experience" },
      { emoji: "🫓", text: "Dosa & Idli Making with Tamil Families" },
      { emoji: "☕", text: "Filter Coffee Ritual — The Tamil Way" },
      { emoji: "🍌", text: "Traditional Banana Leaf Thali Feast" },
    ],
    stat: { value: "500+", label: "Traditional Recipes" },
  },
};

export default function ExperiencesSection() {
  const [activeTab, setActiveTab] = useState<TabId>("temples");
  const exp = experiences[activeTab];

  return (
    <section id="experiences" className="py-24 bg-[#FAF5EC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-0.5 bg-[#E8703A]" />
            <span className="text-[#E8703A] text-xs font-bold tracking-[0.2em] uppercase">Cultural Experiences</span>
            <span className="w-8 h-0.5 bg-[#E8703A]" />
          </div>
          <h2
            className="font-[var(--font-playfair)] text-gray-900 leading-tight max-w-2xl mx-auto"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            What Makes Tamil Nadu{" "}
            <span className="italic text-[#E8703A]">Truly Unforgettable</span>
          </h2>
          <p className="text-gray-500 mt-4 text-sm leading-relaxed max-w-lg mx-auto">
            From sacred Dravidian temples to misty mountain trails and fiery Chettinad feasts — there&apos;s a story waiting for every kind of traveler.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          <LayoutGroup id="exp-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 ${
                  activeTab === tab.id
                    ? "text-white"
                    : "text-gray-600 bg-white border border-gray-200 hover:border-[#E8703A]/40 hover:text-[#E8703A]"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="exp-tab-pill"
                    className="absolute inset-0 bg-[#E8703A] rounded-full shadow-lg shadow-[#E8703A]/30"
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
                <span className="relative z-10">{tab.emoji}</span>
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </LayoutGroup>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden" style={{ height: 460 }}>
              <Image
                src={`https://picsum.photos/seed/${exp.image}`}
                alt={exp.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15, duration: 0.45 }}
                className="absolute bottom-6 left-6 bg-black/30 backdrop-blur-md rounded-2xl px-5 py-3.5 border border-white/15"
              >
                <div className="text-white font-bold text-2xl font-[var(--font-playfair)]">{exp.stat.value}</div>
                <div className="text-white/65 text-xs mt-0.5">{exp.stat.label}</div>
              </motion.div>
            </div>

            {/* Text */}
            <div>
              <h3
                className="font-[var(--font-playfair)] text-gray-900 leading-tight mb-4"
                style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
              >
                {exp.title}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-8 text-sm">{exp.desc}</p>

              <div className="space-y-3 mb-8">
                {exp.highlights.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.45 }}
                    className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100 hover:border-[#E8703A]/20 hover:shadow-md transition-all duration-300"
                  >
                    <span className="text-lg flex-shrink-0">{h.emoji}</span>
                    <span className="text-gray-700 text-sm font-medium">{h.text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="#tours"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-[#E8703A] text-white px-7 py-3.5 rounded-full font-semibold text-sm shadow-lg shadow-[#E8703A]/25 hover:bg-[#d4623a] transition-colors"
              >
                Explore Related Tours
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
