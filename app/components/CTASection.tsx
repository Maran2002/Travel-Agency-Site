"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{ y: bgY, scale }}
      >
        <Image
          src="https://picsum.photos/seed/bromo-magic-sunset/1920/800"
          alt="Experience the Magic of Mount Bromo"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-6 h-0.5 bg-[#E8703A]" />
            <span className="text-[#E8703A] text-xs font-bold tracking-[0.2em] uppercase">Limited Spots Available</span>
            <span className="w-6 h-0.5 bg-[#E8703A]" />
          </div>

          <h2
            className="font-[var(--font-playfair)] text-white leading-tight mb-6"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
          >
            Experience the Magic of{" "}
            <span className="italic text-[#E8703A]">Mount Bromo Today</span>
          </h2>

          <p className="text-white/70 text-base leading-relaxed mb-10 max-w-xl mx-auto">
            Discover the untamed beauty of East Java&apos;s volcanic highlands. Book your adventure now and create memories that last a lifetime with BromoBliss.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#tours"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 bg-[#E8703A] text-white px-8 py-4 rounded-full font-semibold text-sm shadow-2xl shadow-[#E8703A]/40 hover:bg-[#d4623a] transition-colors"
            >
              Start Your Tour
              <motion.svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </motion.svg>
            </motion.a>

            <motion.a
              href="#moments"
              whileHover={{ scale: 1.06, backgroundColor: "rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 border border-white/40 text-white px-8 py-4 rounded-full font-semibold text-sm backdrop-blur-sm transition-colors hover:border-white/60"
            >
              View Gallery
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="flex items-center justify-center gap-6 mt-10"
          >
            {[
              { icon: "🌄", label: "15+ Tour Packages" },
              { icon: "⭐", label: "4.9/5 Rating" },
              { icon: "👥", label: "2,400+ Travelers" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white/70">
                <span className="text-lg">{item.icon}</span>
                <span className="text-xs font-medium">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
