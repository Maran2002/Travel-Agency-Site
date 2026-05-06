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
    name: "Temple Circuit",
    price: 299,
    days: "7 Days",
    seed: "temple-pilgrimage-ancient-india/400/280",
    tag: "Most Popular",
    desc: "Madurai · Rameswaram · Kanyakumari",
  },
  {
    id: 2,
    name: "Nilgiris Retreat",
    price: 199,
    days: "5 Days",
    seed: "ooty-hills-misty-train-tea/400/280",
    tag: "Best Value",
    desc: "Ooty · Kodaikanal · Valparai",
  },
  {
    id: 3,
    name: "Heritage & Cuisine",
    price: 149,
    days: "4 Days",
    seed: "chettinad-heritage-food-mansion/400/280",
    tag: "Cultural",
    desc: "Chettinad · Thanjavur · Kumbakonam",
  },
  {
    id: 4,
    name: "Coastal Discovery",
    price: 249,
    days: "6 Days",
    seed: "pondicherry-coastal-french-beach/400/280",
    tag: "Premium",
    desc: "Mahabalipuram · Pondicherry · Rameswaram",
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
            <span className="text-[#E8703A] text-xs font-bold tracking-[0.2em] uppercase">Tour Packages</span>
            <span className="w-8 h-0.5 bg-[#E8703A]" />
          </div>
          <h2
            className="font-[var(--font-playfair)] text-gray-900 leading-tight max-w-2xl mx-auto"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Crafted Journeys for{" "}
            <span className="italic text-[#E8703A]">Every Tamil Nadu Dream</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Carefully curated packages for every traveler — whether you seek temples, mountains, heritage, or coast.
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
              src="https://picsum.photos/seed/tamilnadu-temples-panoramic-gold/600/800"
              alt="Discover the Timeless Soul of Tamil Nadu"
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
                Discover the Timeless Soul of Tamil Nadu
              </h3>
              <p className="text-white/70 text-xs leading-relaxed mb-4">
                A curated journey through ancient temples, misty hills, and sun-kissed shores with expert local guides.
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

          {/* Tour Cards */}
          {tours.map((tour) => (
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
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full">
                    {tour.tag}
                  </span>
                  <span className="bg-black/40 backdrop-blur-sm text-white text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full">
                    {tour.days}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 text-base mb-0.5">{tour.name}</h3>
                <p className="text-[#E8703A] text-[10px] font-medium mb-2">{tour.desc}</p>
                <p className="text-gray-400 text-xs mb-3 leading-relaxed">
                  Expert local guides, curated stops, authentic meals, and cultural immersion.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-400 text-[10px]">from</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-[#E8703A] text-xl font-bold">Rs. {tour.price}</span>
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
