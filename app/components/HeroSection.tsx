"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const thumbnails = [
  { seed: "forest-hike-400", label: "Sunrise Hike", size: "200/280" },
  { seed: "volcano-crater-200", label: "Crater View", size: "200/280" },
  { seed: "mountain-trek-600", label: "Trek Adventure", size: "200/280" },
];

const stats = [
  { value: "2,400+", label: "Happy Travelers" },
  { value: "4.9★", label: "Rating" },
  { value: "15+", label: "Tour Packages" },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: 25,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
      tl.from(".hero-tag", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" })
        .from(".hero-line", { y: 100, opacity: 0, duration: 1, stagger: 0.15, ease: "power4.out" }, "-=0.4")
        .from(".hero-desc", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
        .from(".hero-btns", { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.3")
        .from(".hero-stat", { y: 20, opacity: 0, stagger: 0.12, duration: 0.6, ease: "power3.out" }, "-=0.3");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="home" className="relative h-screen min-h-[600px] overflow-hidden">
      <div ref={bgRef} className="absolute inset-0 scale-[1.15] will-change-transform">
        <Image
          src="https://picsum.photos/seed/bromo-dawn-volcano/1920/1080"
          alt="Mount Bromo Volcanic Landscape"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          {/* <div className="hero-tag flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 bg-[#E8703A]/20 backdrop-blur-sm border border-[#E8703A]/40 text-[#ffb380] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8703A] animate-pulse" />
              Active Bromo Hike
            </span>
          </div> */}

          <h1
            ref={textRef}
            className="font-[var(--font-playfair)] text-white leading-[1.1] mb-6"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
          >
            <div className="overflow-hidden">
              <span className="hero-line block">Unforgettable</span>
            </div>
            <div className="overflow-hidden">
              <span className="hero-line block">Mount Bromo</span>
            </div>
            <div className="overflow-hidden">
              <span className="hero-line block text-[#E8703A]">Sunrise Experience</span>
            </div>
          </h1>

          <p className="hero-desc text-white/70 text-base md:text-lg leading-relaxed max-w-xl mb-8">
            Experience breathtaking sunrise, explore volcanic landscapes, and create memories at one of Indonesia&apos;s most iconic destinations.
          </p>

          <div className="hero-btns flex flex-wrap gap-4">
            <motion.a
              href="#tours"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-[#E8703A] text-white px-7 py-3.5 rounded-full font-semibold text-sm shadow-xl shadow-[#E8703A]/30 hover:bg-[#d4623a] transition-colors"
            >
              Explore Tours
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
            <motion.a
              href="#moments"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 border border-white/40 text-white px-7 py-3.5 rounded-full font-semibold text-sm backdrop-blur-sm transition-colors hover:border-white/70"
            >
              Discover More
            </motion.a>
          </div>

          <div className="flex items-center gap-8 mt-10">
            {stats.map((s, i) => (
              <div key={i} className="hero-stat">
                <div className="text-white font-bold text-xl">{s.value}</div>
                <div className="text-white/50 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute right-8 md:right-16 bottom-16 hidden lg:flex items-end gap-3">
          {thumbnails.map((t, i) => (
            <motion.div
              key={t.seed}
              initial={{ opacity: 0, y: 60, rotate: i === 1 ? -3 : i === 2 ? 3 : 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: i === 1 ? -3 : i === 2 ? 3 : 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, rotate: 0, scale: 1.05, zIndex: 10 }}
              className="relative w-28 h-40 rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
              style={{ transformOrigin: "bottom center" }}
            >
              <Image
                src={`https://picsum.photos/seed/${t.seed}/${t.size}`}
                alt={t.label}
                fill
                className="object-cover"
                sizes="112px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-2 left-2 right-2">
                <span className="text-white text-[10px] font-semibold leading-tight block">{t.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
        <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
