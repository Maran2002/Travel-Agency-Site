"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const photos = [
  { seed: "photographer-mountain/300/380", name: "Jo Park", rating: 5, review: "Absolutely magical sunrise, worth every penny!" },
  { seed: "hiker-sunrise-landscape/300/380", name: "Arjun Rahmah", rating: 5, review: "The most beautiful place I've ever visited." },
  { seed: "travel-landscape-adventure/300/380", name: "Ruby Aditya", rating: 5, review: "Professional guides made it unforgettable." },
  { seed: "volcano-explorer-photo/300/380", name: "Liz Nur", rating: 4, review: "Stunning views and amazing photography spots." },
  { seed: "bromo-summit-photo/300/380", name: "Kai Rahman", rating: 5, review: "The crater landscape was beyond my imagination." },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3.5 h-3.5 ${star <= rating ? "text-[#E8703A]" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function CaptureSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = trackRef.current?.querySelectorAll(".capture-card");
      if (!cards) return;

      gsap.from(cards, {
        opacity: 0,
        x: 80,
        scale: 0.9,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: trackRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
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
            <span className="text-[#E8703A] text-xs font-bold tracking-[0.2em] uppercase">Captured Memories</span>
            <span className="w-8 h-0.5 bg-[#E8703A]" />
          </div>
          <h2
            className="font-[var(--font-playfair)] text-gray-900 leading-tight max-w-2xl mx-auto"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Capture Your Mount Bromo{" "}
            <span className="italic text-[#E8703A]">Journey Forever</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Make every sunrise, trail, and volcanic moment with professional photo stops. Documentation crafted to preserve your adventure beautifully.
          </p>
        </motion.div>

        <div ref={trackRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              className="capture-card group cursor-pointer"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <div className="relative rounded-2xl overflow-hidden mb-3" style={{ aspectRatio: "3/4" }}>
                <Image
                  src={`https://picsum.photos/seed/${photo.seed}`}
                  alt={photo.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </motion.div>
              </div>

              <div className="px-1">
                <StarRating rating={photo.rating} />
                <h4 className="text-gray-900 font-semibold text-sm mt-1.5">{photo.name}</h4>
                <p className="text-gray-400 text-xs mt-1 leading-relaxed line-clamp-2">{photo.review}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 border border-[#E8703A] text-[#E8703A] px-8 py-3 rounded-full font-semibold text-sm hover:bg-[#E8703A] hover:text-white transition-colors duration-300"
          >
            View All Photos
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
