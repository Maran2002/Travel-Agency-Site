"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Choose Your Experience",
    subtitle: "Find your perfect Tamil Nadu adventure",
    desc: "Browse our expertly curated tours — from ancient temple circuits to misty Nilgiri escapes. Filter by duration, budget, and interest to find your ideal journey.",
    highlights: ["50+ Curated Packages", "Expert-guided tours", "Flexible itineraries"],
    image: "tamilnadu-temples-madurai-meenakshi/800/600",
    color: "#E8703A",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Plan Your Dates",
    subtitle: "Pick the perfect window for your trip",
    desc: "Select travel dates and group size — we accommodate solo adventurers, couples, families, and large groups. Real-time availability calendar ensures your spot.",
    highlights: ["Real-time availability", "Solo to 50+ groups", "Flexible rescheduling"],
    image: "ooty-nilgiri-hills-misty-morning/800/600",
    color: "#1E5230",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Secure Your Booking",
    subtitle: "Confirm with complete peace of mind",
    desc: "Reserve securely online with a small deposit. Receive instant confirmation, your dedicated guide's contact, detailed itinerary, and 24/7 support throughout your journey.",
    highlights: ["Secure online payment", "Instant confirmation", "24/7 support"],
    image: "kanyakumari-sunrise-ocean-view/800/600",
    color: "#1A3A6B",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Live the Experience",
    subtitle: "Immerse yourself in Tamil Nadu's soul",
    desc: "Arrive and let Tamil Nadu's timeless magic unfold — ancient temples, emerald hills, golden shores, and rich culinary traditions, all with your expert guide by your side.",
    highlights: ["Expert local guides", "Curated cultural moments", "Memories for life"],
    image: "mahabalipuram-shore-temple-golden/800/600",
    color: "#8B1A1A",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

export default function BookingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".booking-step-card", {
        opacity: 0,
        x: -50,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".booking-steps-container",
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".booking-image-panel", {
        opacity: 0,
        x: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".booking-stat", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".booking-stats-row",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => {
      ctx.revert();
      clearInterval(interval);
    };
  }, []);

  const active = steps[activeStep];

  return (
    <section id="booking" ref={sectionRef} className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-8 h-0.5 bg-[#E8703A]" />
                <span className="text-[#E8703A] text-xs font-bold tracking-[0.2em] uppercase">How It Works</span>
              </div>
              <h2
                className="font-[var(--font-playfair)] text-gray-900 leading-tight"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
              >
                Your Journey Starts{" "}
                <span className="italic text-[#E8703A]">Here</span>
              </h2>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm lg:text-right">
              From discovery to departure — we make booking your Tamil Nadu adventure effortless, transparent, and exciting.
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Steps */}
          <div className="booking-steps-container space-y-3">
            {steps.map((step, i) => {
              const isActive = activeStep === i;
              return (
                <motion.div
                  key={i}
                  className="booking-step-card cursor-pointer"
                  onClick={() => setActiveStep(i)}
                  whileHover={{ x: isActive ? 0 : 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className="rounded-2xl border transition-all duration-300 overflow-hidden"
                    style={
                      isActive
                        ? {
                            background: `linear-gradient(135deg, ${step.color}0D 0%, white 100%)`,
                            borderColor: `${step.color}35`,
                            boxShadow: `0 8px 32px ${step.color}18`,
                          }
                        : { borderColor: "#f1f5f9", backgroundColor: "white" }
                    }
                  >
                    <div className="flex items-center gap-4 p-5">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                        style={
                          isActive
                            ? { backgroundColor: step.color, color: "white" }
                            : { backgroundColor: "#f3f4f6", color: "#9ca3af" }
                        }
                      >
                        {step.icon}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[10px] font-bold text-gray-300 tabular-nums">{step.number}</span>
                          <h4 className={`font-semibold text-sm truncate transition-colors ${isActive ? "text-gray-900" : "text-gray-600"}`}>
                            {step.title}
                          </h4>
                        </div>
                        <p className={`text-xs transition-colors ${isActive ? "text-gray-400" : "text-gray-300"}`}>
                          {step.subtitle}
                        </p>
                      </div>

                      <div
                        className="w-2 h-2 rounded-full flex-shrink-0 transition-all duration-300"
                        style={
                          isActive
                            ? { backgroundColor: step.color, transform: "scale(1.4)" }
                            : { backgroundColor: "#e5e7eb", transform: "scale(1)" }
                        }
                      />
                    </div>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5">
                            <p className="text-gray-500 text-xs leading-relaxed mb-4">{step.desc}</p>
                            <div className="flex flex-wrap gap-2">
                              {step.highlights.map((h, hi) => (
                                <span
                                  key={hi}
                                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold"
                                  style={{ backgroundColor: `${step.color}12`, color: step.color }}
                                >
                                  <span className="w-1 h-1 rounded-full" style={{ backgroundColor: step.color }} />
                                  {h}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="pt-2"
            >
              <motion.a
                href="#tours"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 bg-[#E8703A] text-white px-8 py-4 rounded-full font-semibold text-sm shadow-lg shadow-[#E8703A]/25 hover:bg-[#d4623a] transition-colors"
              >
                Start Planning Your Trip
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            </motion.div>
          </div>

          {/* Image Panel */}
          <div className="booking-image-panel lg:sticky lg:top-24">
            <div className="relative rounded-3xl overflow-hidden" style={{ height: 520 }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.55, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={`https://picsum.photos/seed/${active.image}`}
                    alt={active.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Step badge */}
              <div className="absolute top-5 left-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`badge-${activeStep}`}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                    className="flex items-center gap-2 bg-black/25 backdrop-blur-md border border-white/20 rounded-full px-4 py-2"
                  >
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: active.color }} />
                    <span className="text-white text-xs font-semibold">Step {active.number}</span>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`caption-${activeStep}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <h3 className="text-white font-[var(--font-playfair)] text-xl mb-1">{active.title}</h3>
                    <p className="text-white/65 text-sm">{active.subtitle}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Vertical dot navigator */}
              <div className="absolute right-5 top-1/2 -translate-y-1/2 flex flex-col gap-2.5">
                {steps.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className="rounded-full transition-all duration-300 focus:outline-none"
                    style={{
                      width: 6,
                      height: activeStep === i ? 28 : 6,
                      backgroundColor: activeStep === i ? active.color : "rgba(255,255,255,0.35)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="booking-stats-row grid grid-cols-3 gap-3 mt-5">
              {[
                { value: "15K+", label: "Happy Travelers" },
                { value: "4.9★", label: "Average Rating" },
                { value: "50+", label: "Tour Packages" },
              ].map((stat, i) => (
                <div key={i} className="booking-stat text-center py-4 rounded-2xl bg-[#FAF5EC]">
                  <div className="font-bold text-lg" style={{ color: "#E8703A" }}>{stat.value}</div>
                  <div className="text-gray-400 text-[11px] mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
