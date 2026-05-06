"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const destinations = [
  {
    id: 1,
    name: "Madurai",
    tagline: "City of Temples",
    desc: "Home to the magnificent Meenakshi Amman Temple, Madurai is one of India's oldest living cities, pulsating with spiritual energy and Dravidian grandeur.",
    highlight: "Meenakshi Amman Temple",
    tags: ["Ancient Heritage", "Spiritual", "Street Food"],
    seed: "ancient-temple-pillars-stone-india",
    size: "800/1100",
    num: "01",
    accent: "#C8780A",
  },
  {
    id: 2,
    name: "Ooty",
    tagline: "Queen of Hill Stations",
    desc: "Draped in emerald tea estates and shrouded in cool mist, Ooty in the Nilgiris offers a serene escape into a UNESCO World Biosphere Reserve.",
    highlight: "Nilgiri Mountain Railway",
    tags: ["Hill Station", "Tea Gardens", "Wildlife"],
    seed: "green-misty-hills-tea-gardens",
    size: "800/1100",
    num: "02",
    accent: "#1E5230",
  },
  {
    id: 3,
    name: "Kanyakumari",
    tagline: "Land's End",
    desc: "Where the Bay of Bengal, Arabian Sea, and Indian Ocean converge at India's southernmost tip. Sunrise here dazzles with colours found nowhere else on earth.",
    highlight: "Sunrise over Three Seas",
    tags: ["Coastal Wonder", "Spiritual", "Sunsets"],
    seed: "coastal-sunrise-three-seas-india",
    size: "800/1100",
    num: "03",
    accent: "#1A3A6B",
  },
  {
    id: 4,
    name: "Mahabalipuram",
    tagline: "Shore of Stone",
    desc: "UNESCO World Heritage rock-cut temples, monolithic rathas, and the iconic Shore Temple overlooking the Bay of Bengal — India's greatest open-air museum.",
    highlight: "UNESCO Shore Temple",
    tags: ["UNESCO Heritage", "Sculpture", "Beaches"],
    seed: "ancient-stone-carvings-coastal-temple",
    size: "800/1100",
    num: "04",
    accent: "#4A3520",
  },
  {
    id: 5,
    name: "Pondicherry",
    tagline: "French Riviera of India",
    desc: "Cobbled streets lined with bougainvillea, mustard-yellow colonial buildings, and a profound spiritual energy at Auroville make Pondicherry utterly extraordinary.",
    highlight: "French Quarter & Auroville",
    tags: ["Colonial Heritage", "Spirituality", "Cafés"],
    seed: "colorful-colonial-streets-cafe-india",
    size: "800/1100",
    num: "05",
    accent: "#2A1A4A",
  },
  {
    id: 6,
    name: "Chettinad",
    tagline: "Heritage Heartland",
    desc: "Palatial mansions adorned with Italian marble and rare teak, extraordinary antique collections, and the world-famous fiery Chettinad cuisine await discovery.",
    highlight: "Chettinad Palace Tours",
    tags: ["Heritage", "Cuisine", "Architecture"],
    seed: "ornate-heritage-mansion-india-pillars",
    size: "800/1100",
    num: "06",
    accent: "#4A2010",
  },
];

export default function DestinationsSection() {
  const desktopSectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const track = trackRef.current;
        const sticky = stickyRef.current;
        if (!track || !sticky) return;

        gsap.to(track, {
          x: () => -(track.scrollWidth - sticky.offsetWidth),
          ease: "none",
          scrollTrigger: {
            trigger: sticky,
            start: "top top",
            end: () => `+=${track.scrollWidth - sticky.offsetWidth}`,
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (progressRef.current) {
                gsap.set(progressRef.current, { scaleX: self.progress });
              }
            },
          },
        });
      });
    }, desktopSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="destinations" className="bg-[#0F0C08]">

      {/* ── Desktop: GSAP horizontal scroll ── */}
      <div ref={desktopSectionRef} className="hidden md:block">
        <div
          ref={stickyRef}
          className="relative overflow-hidden"
          style={{ height: "100vh" }}
        >
          {/* Header overlay */}
          <div
            className="absolute top-0 left-0 right-0 z-20 px-10 pt-24 pb-10 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, rgba(15,12,8,0.92) 0%, transparent 100%)" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-8 h-0.5 bg-[#E8703A]" />
                <span className="text-[#E8703A] text-xs font-bold tracking-[0.2em] uppercase">Explore Tamil Nadu</span>
                <span className="w-8 h-0.5 bg-[#E8703A]" />
              </div>
              <h2
                className="font-[var(--font-playfair)] text-white leading-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
              >
                Six Destinations,{" "}
                <span className="italic text-[#E8703A]">Infinite Stories</span>
              </h2>
              <p className="text-white/40 text-sm mt-3 flex items-center gap-2">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Scroll down to journey through each destination
              </p>
            </motion.div>
          </div>

          {/* Horizontal track */}
          <div ref={trackRef} className="flex h-full">
            {destinations.map((dest) => (
              <div
                key={dest.id}
                className="relative flex-shrink-0 overflow-hidden"
                style={{ width: "33.333vw" }}
              >
                <Image
                  src={`https://picsum.photos/seed/${dest.seed}/${dest.size}`}
                  alt={dest.name}
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/25 to-transparent" />
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(135deg, ${dest.accent}28 0%, transparent 55%)` }}
                />

                {/* Large watermark number */}
                <div
                  className="absolute top-4 right-5 font-[var(--font-playfair)] select-none pointer-events-none"
                  style={{ fontSize: "9rem", lineHeight: 1, color: "rgba(255,255,255,0.04)", fontWeight: 700 }}
                >
                  {dest.num}
                </div>

                {/* Card content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {dest.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-bold tracking-widest uppercase bg-white/10 backdrop-blur-sm text-white/70 px-2.5 py-1 rounded-full border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-[#E8703A] text-[10px] font-bold tracking-[0.22em] uppercase mb-2">{dest.tagline}</p>
                  <h3
                    className="font-[var(--font-playfair)] text-white leading-tight mb-3"
                    style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.6rem)" }}
                  >
                    {dest.name}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-[260px]">{dest.desc}</p>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/15">
                      <svg className="w-3 h-3 text-[#E8703A] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      <span className="text-white/65 text-[10px] font-medium truncate max-w-[130px]">{dest.highlight}</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.97 }}
                      className="bg-[#E8703A] text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#d4623a] transition-colors"
                    >
                      Discover
                    </motion.button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 z-20 h-0.5 bg-white/8">
            <div
              ref={progressRef}
              className="h-full bg-[#E8703A] origin-left"
              style={{ transform: "scaleX(0)" }}
            />
          </div>
        </div>
      </div>

      {/* ── Mobile: vertical grid ── */}
      <div className="md:hidden py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-0.5 bg-[#E8703A]" />
            <span className="text-[#E8703A] text-xs font-bold tracking-[0.2em] uppercase">Explore Tamil Nadu</span>
            <span className="w-8 h-0.5 bg-[#E8703A]" />
          </div>
          <h2 className="font-[var(--font-playfair)] text-white text-3xl leading-tight">
            Six Destinations,{" "}
            <span className="italic text-[#E8703A]">Infinite Stories</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden cursor-pointer group"
              style={{ height: 290 }}
            >
              <Image
                src={`https://picsum.photos/seed/${dest.seed}/${dest.size}`}
                alt={dest.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-[#E8703A] text-[9px] font-bold tracking-widest uppercase mb-1">{dest.tagline}</p>
                <h3 className="font-[var(--font-playfair)] text-white text-xl">{dest.name}</h3>
                <p className="text-white/50 text-xs mt-1">{dest.highlight}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
