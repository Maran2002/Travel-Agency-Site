"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const moments = [
  { seed: "temple-gopuram-evening-lights/400/520", title: "Temple at Dusk" },
  { seed: "nilgiris-green-hills-valley/360/520", title: "Nilgiri Hills" },
  { seed: "kanyakumari-dawn-horizon/400/300", title: "Land's End Dawn", caption: "Kanyakumari, TN" },
  { seed: "classical-dance-bharatanatyam/360/520", title: "Classical Dance" },
  { seed: "mahabalipuram-shore-temple-sea/700/300", title: "Shore Temple", caption: "UNESCO Heritage Site" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function MomentsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
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
            <span className="text-[#E8703A] text-xs font-bold tracking-[0.2em] uppercase">Find Your Moment</span>
            <span className="w-8 h-0.5 bg-[#E8703A]" />
          </div>
          <h2
            className="font-[var(--font-playfair)] text-gray-900 leading-tight max-w-2xl mx-auto"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Unforgettable Moments in the{" "}
            <span className="italic text-[#E8703A]">Heart of Tamil Nadu</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            From dawn rituals at ancient temples to misty mountain mornings — every frame tells a story only Tamil Nadu can write.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          style={{ gridTemplateRows: "auto auto" }}
        >
          {/* Card 1 — tall portrait */}
          <motion.div variants={cardVariants} className="row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer" style={{ minHeight: 420 }}>
            <Image
              src={`https://picsum.photos/seed/${moments[0].seed}`}
              alt={moments[0].title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-white font-semibold text-sm">{moments[0].title}</span>
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="absolute top-3 right-3 w-7 h-7 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </motion.div>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={cardVariants} className="relative rounded-2xl overflow-hidden group cursor-pointer" style={{ height: 200 }}>
            <Image
              src={`https://picsum.photos/seed/${moments[1].seed}`}
              alt={moments[1].title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-3 left-3">
              <span className="text-white font-semibold text-xs">{moments[1].title}</span>
            </div>
          </motion.div>

          {/* Card 3 — wide */}
          <motion.div variants={cardVariants} className="md:col-span-2 relative rounded-2xl overflow-hidden group cursor-pointer" style={{ height: 200 }}>
            <Image
              src={`https://picsum.photos/seed/${moments[2].seed}`}
              alt={moments[2].title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="text-white font-bold text-sm">{moments[2].title}</span>
              {moments[2].caption && (
                <p className="text-white/70 text-xs mt-0.5">{moments[2].caption}</p>
              )}
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div variants={cardVariants} className="relative rounded-2xl overflow-hidden group cursor-pointer" style={{ height: 200 }}>
            <Image
              src={`https://picsum.photos/seed/${moments[3].seed}`}
              alt={moments[3].title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-3 left-3">
              <span className="text-white font-semibold text-xs">{moments[3].title}</span>
            </div>
          </motion.div>

          {/* Card 5 — wide */}
          <motion.div variants={cardVariants} className="md:col-span-2 relative rounded-2xl overflow-hidden group cursor-pointer" style={{ height: 200 }}>
            <Image
              src={`https://picsum.photos/seed/${moments[4].seed}`}
              alt={moments[4].title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="text-white font-bold text-sm">{moments[4].title}</span>
              {moments[4].caption && (
                <p className="text-white/70 text-xs mt-0.5">{moments[4].caption}</p>
              )}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex items-center justify-between mt-8"
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-900">51</span>
            <div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div className="w-8 h-full bg-[#E8703A] rounded-full" />
            </div>
          </div>
          <div className="flex gap-3">
            {[0, 1].map((dir) => (
              <motion.button
                key={dir}
                whileHover={{ scale: 1.1, backgroundColor: "#E8703A" }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-white transition-colors duration-300"
                onClick={() => setActive(dir)}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={dir === 0 ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
                </svg>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
