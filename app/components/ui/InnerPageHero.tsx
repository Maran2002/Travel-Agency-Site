"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface InnerPageHeroProps {
  tag: string;
  title: string;
  highlight: string;
  description: string;
  imageSeed: string;
  height?: string;
}

export default function InnerPageHero({
  tag,
  title,
  highlight,
  description,
  imageSeed,
  height = "h-[62vh] min-h-[460px]",
}: InnerPageHeroProps) {
  return (
    <section className={`relative ${height} overflow-hidden flex items-end pt-20`}>
      <div className="absolute inset-0">
        <Image
          src={`https://picsum.photos/seed/${imageSeed}/1920/900`}
          alt={title}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="w-8 h-0.5 bg-[#E8703A]" />
            <span className="text-[#E8703A] text-xs font-bold tracking-[0.2em] uppercase">{tag}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-[var(--font-playfair)] text-white leading-tight mb-5"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
          >
            {title}{" "}
            <span className="italic text-[#E8703A]">{highlight}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-white/70 text-base leading-relaxed max-w-xl"
          >
            {description}
          </motion.p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
