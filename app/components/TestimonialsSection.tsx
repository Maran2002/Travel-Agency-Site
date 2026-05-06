"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const testimonials = [
  { name: "Ananya Rajan", location: "Chennai, TN", stars: 5, text: "TamilSoul transformed our family trip into a deeply spiritual journey. Every temple, every sunrise was perfectly orchestrated." },
  { name: "Thomas Weber", location: "Munich, Germany", stars: 5, text: "I've traveled across Southeast Asia, but Tamil Nadu's depth and variety left me speechless. TamilSoul's local knowledge is unmatched." },
  { name: "Kavitha Suresh", location: "Bangalore", stars: 5, text: "The Nilgiris retreat was pure bliss. Waking up to mist-wrapped tea hills every morning felt like living inside a painting." },
  { name: "James & Emily Park", location: "San Francisco, USA", stars: 5, text: "Watching sunrise at Kanyakumari where three seas converge — that single moment made the entire India trip worth every rupee." },
  { name: "Lakshmi Iyer", location: "Mumbai", stars: 5, text: "The Chettinad cuisine tour was extraordinary. Our guide could trace the family history behind every dish we tasted." },
  { name: "Ravi Chandran", location: "Singapore", stars: 5, text: "My third trip with TamilSoul and each time they uncover hidden gems I'd never find on my own. Absolute experts of the region." },
  { name: "Sophie Laurent", location: "Lyon, France", stars: 5, text: "Pondicherry felt like home with a Tamil soul. The French Quarter experience TamilSoul arranged was deeply moving." },
  { name: "Vikram Menon", location: "Dubai", stars: 5, text: "The Bharatanatyam performance TamilSoul arranged for our group was the most breathtaking thing I've seen on any trip." },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className={`w-3 h-3 ${s <= count ? "text-[#E8703A]" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Card({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 mx-3 shadow-sm border border-gray-100/80 hover:shadow-md hover:border-[#E8703A]/20 transition-all duration-300">
      <Stars count={t.stars} />
      <p className="text-gray-600 text-sm leading-relaxed mt-3 mb-5 line-clamp-3">&ldquo;{t.text}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#E8703A] to-[#8B1A1A] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          {t.name[0]}
        </div>
        <div>
          <div className="text-gray-900 font-semibold text-sm leading-tight">{t.name}</div>
          <div className="text-gray-400 text-xs mt-0.5">{t.location}</div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const tween1Ref = useRef<gsap.core.Tween | null>(null);
  const tween2Ref = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!row1Ref.current || !row2Ref.current) return;

      tween1Ref.current = gsap.to(row1Ref.current, {
        xPercent: -50,
        ease: "none",
        duration: 36,
        repeat: -1,
      });

      tween2Ref.current = gsap.fromTo(
        row2Ref.current,
        { xPercent: -50 },
        { xPercent: 0, ease: "none", duration: 28, repeat: -1 }
      );
    }, sectionRef);

    const section = sectionRef.current;
    const pause = () => { tween1Ref.current?.pause(); tween2Ref.current?.pause(); };
    const play = () => { tween1Ref.current?.play(); tween2Ref.current?.play(); };

    section?.addEventListener("mouseenter", pause);
    section?.addEventListener("mouseleave", play);

    return () => {
      ctx.revert();
      section?.removeEventListener("mouseenter", pause);
      section?.removeEventListener("mouseleave", play);
    };
  }, []);

  const doubled = [...testimonials, ...testimonials];

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-0.5 bg-[#E8703A]" />
            <span className="text-[#E8703A] text-xs font-bold tracking-[0.2em] uppercase">Traveler Stories</span>
            <span className="w-8 h-0.5 bg-[#E8703A]" />
          </div>
          <h2
            className="font-[var(--font-playfair)] text-gray-900 leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Voices from the{" "}
            <span className="italic text-[#E8703A]">Soul of Tamil Nadu</span>
          </h2>
          <p className="text-gray-500 mt-4 text-sm max-w-lg mx-auto leading-relaxed">
            Over 15,000 travelers have discovered Tamil Nadu&apos;s magic with us. Here&apos;s what they carry home.
          </p>
        </motion.div>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="mb-4">
        <div ref={row1Ref} className="flex" style={{ width: "max-content" }}>
          {doubled.map((t, i) => (
            <Card key={`r1-${i}`} t={t} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div>
        <div ref={row2Ref} className="flex" style={{ width: "max-content" }}>
          {doubled.map((t, i) => (
            <Card key={`r2-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
