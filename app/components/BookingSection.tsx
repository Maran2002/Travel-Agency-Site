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
    title: "Choose a Package",
    desc: "Select the tour that best fits your schedule and travel style.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Check Availability",
    desc: "Pick your preferred dates and group size — we accommodate all.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Make a Reservation",
    desc: "Confirm your booking securely online in minutes.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Enjoy the Experience",
    desc: "Arrive, explore, and make unforgettable memories at Mount Bromo.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

const progressSteps = ["Exploration", "Tour Number", "Tour Guide", "Attraction", "Number Viewing", "Private Notes"];

export default function BookingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".booking-step-item", {
        opacity: 0,
        x: 40,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".booking-steps-list",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".booking-hero-img", {
        opacity: 0,
        x: -60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".progress-dot", {
        scale: 0,
        opacity: 0,
        duration: 0.4,
        stagger: 0.08,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: ".progress-bar",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2500);

    return () => {
      ctx.revert();
      clearInterval(interval);
    };
  }, []);

  return (
    <section id="booking" ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2
            className="font-[var(--font-playfair)] text-gray-900 leading-tight"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            How to Book{" "}
            <span className="italic text-[#E8703A]">Your Tour</span>
          </h2>

          <div className="progress-bar flex items-center justify-center gap-0 mt-10 overflow-x-auto pb-2">
            {progressSteps.map((step, i) => (
              <div key={i} className="flex items-center">
                <div className="flex flex-col items-center gap-1.5 min-w-fit">
                  <div
                    className={`progress-dot w-3 h-3 rounded-full transition-all duration-500 ${
                      i <= activeStep ? "bg-[#E8703A] scale-125" : "bg-gray-200"
                    }`}
                  />
                  <span
                    className={`text-[10px] font-medium whitespace-nowrap transition-colors duration-500 ${
                      i <= activeStep ? "text-[#E8703A]" : "text-gray-400"
                    }`}
                  >
                    {step}
                  </span>
                </div>
                {i < progressSteps.length - 1 && (
                  <div
                    className={`h-0.5 w-12 mx-1 transition-all duration-500 ${
                      i < activeStep ? "bg-[#E8703A]" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="booking-hero-img relative rounded-3xl overflow-hidden" style={{ minHeight: 480 }}>
            <Image
              src="https://picsum.photos/seed/bromo-overlook-traveler/700/900"
              alt="Traveler overlooking Mount Bromo"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#E8703A] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Mount Bromo, Indonesia</div>
                    <div className="text-white/60 text-xs">East Java · Active Volcano</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-8">
              <span className="text-[#E8703A] text-xs font-bold tracking-[0.2em] uppercase">Now It Works</span>
              <h3 className="font-[var(--font-playfair)] text-gray-900 text-2xl mt-2">
                Book Tour in 4 Easy Steps
              </h3>
            </div>

            <div className="booking-steps-list space-y-4">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  className={`booking-step-item flex gap-4 p-4 rounded-2xl border transition-all duration-500 cursor-pointer ${
                    activeStep === i
                      ? "border-[#E8703A]/40 bg-[#FFF5F0] shadow-md shadow-[#E8703A]/10"
                      : "border-gray-100 bg-white hover:border-gray-200"
                  }`}
                  onClick={() => setActiveStep(i)}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                      activeStep === i ? "bg-[#E8703A] text-white" : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[10px] font-bold text-gray-300">{step.number}</span>
                      <h4 className="font-semibold text-gray-900 text-sm">{step.title}</h4>
                    </div>
                    <AnimatePresence>
                      {activeStep === i && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-gray-500 text-xs leading-relaxed"
                        >
                          {step.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-[#E8703A] text-white px-8 py-3.5 rounded-full font-semibold text-sm mt-8 shadow-lg shadow-[#E8703A]/25 hover:bg-[#d4623a] transition-colors"
            >
              Start Booking Now
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
