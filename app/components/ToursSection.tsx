"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const tours = [
  {
    id: 1,
    name: "Sunrise Explorer",
    price: 29,
    seed: "sunrise-hike-orange/400/280",
    tag: "Most Popular",
  },
  {
    id: 2,
    name: "Adventure Trail",
    price: 49,
    seed: "mountain-river-adventure/400/280",
    tag: "Best Value",
  },
  {
    id: 3,
    name: "Night & Stars Escape",
    price: 100,
    seed: "night-camping-stars/400/280",
    tag: "Premium",
  },
  {
    id: 4,
    name: "Private Bromo Journey",
    price: 249,
    seed: "private-mountain-guide/400/280",
    tag: "Exclusive",
  },
];

export default function ToursSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".tour-card", {
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".tours-grid",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".featured-card", {
        opacity: 0,
        x: -60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".tours-grid",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="tours" ref={sectionRef} className="py-24 bg-[#F9F6F1]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-0.5 bg-[#E8703A]" />
            <span className="text-[#E8703A] text-xs font-bold tracking-[0.2em] uppercase">Bromo Tours</span>
            <span className="w-8 h-0.5 bg-[#E8703A]" />
          </div>
          <h2
            className="font-[var(--font-playfair)] text-gray-900 leading-tight max-w-2xl mx-auto"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Discover the Best Bromo Adventures{" "}
            <span className="italic text-[#E8703A]">for Every Kind of Traveler</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Carefully crafted packages for every traveler who dreams of witnessing sunrise views, volcano trails, or night sky magic.
          </p>
        </motion.div>

        <div className="tours-grid grid md:grid-cols-3 gap-5">
          {/* Featured Card */}
          <motion.div
            className="featured-card md:row-span-2 relative rounded-3xl overflow-hidden group cursor-pointer min-h-[420px]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="https://picsum.photos/seed/bromo-untamed-landscape/600/800"
              alt="Discover the Untamed Beauty of Bromo"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-block bg-[#E8703A] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
                Featured
              </span>
              <h3 className="font-[var(--font-playfair)] text-white text-2xl leading-tight mb-2">
                Discover the Untamed Beauty of Bromo
              </h3>
              <p className="text-white/70 text-xs leading-relaxed mb-4">
                A curated journey through the volcanic highlands with local expert guides.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-white text-gray-900 py-3 rounded-xl font-semibold text-sm hover:bg-[#E8703A] hover:text-white transition-colors duration-300"
              >
                View Details
              </motion.button>
            </div>
          </motion.div>

          {/* Tour Cards Grid */}
          {tours.map((tour, i) => (
            <motion.div
              key={tour.id}
              className="tour-card bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={`https://picsum.photos/seed/${tour.seed}`}
                  alt={tour.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-600"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full">
                    {tour.tag}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 text-base mb-1">{tour.name}</h3>
                <p className="text-gray-400 text-xs mb-3 leading-relaxed">
                  Guided experience with professional photo stops and local cuisine.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-400 text-[10px]">from</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-[#E8703A] text-xl font-bold">${tour.price}</span>
                      <span className="text-gray-400 text-xs">/ person</span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.08, backgroundColor: "#d4623a" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#E8703A] text-white text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-1.5 transition-colors"
                  >
                    Book Now
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
