"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import InnerPageHero from "../components/ui/InnerPageHero";

const stats = [
  { value: 8, suffix: "+", label: "Years of Experience", icon: "📅" },
  { value: 2400, suffix: "+", label: "Happy Travelers", icon: "🌍" },
  { value: 25, suffix: "+", label: "Expert Local Guides", icon: "🧭" },
  { value: 4.9, suffix: "★", label: "Average Rating", icon: "⭐", decimal: true },
];

const team = [
  { name: "Arjun Santoso", role: "Founder & Head Guide", seed: "person-portrait-m-outdoor/300/350", bio: "Born in the Tengger highlands, Arjun has guided over 1,200 tours across East Java." },
  { name: "Dewi Rahayu", role: "Experience Director", seed: "person-portrait-f-professional/300/350", bio: "Former travel journalist turned tour architect — she designs every itinerary personally." },
  { name: "Bima Kurniawan", role: "Lead Photographer", seed: "person-portrait-m-camera/300/350", bio: "Award-winning landscape photographer dedicated to capturing Bromo at its finest." },
  { name: "Siti Nuraini", role: "Guest Relations", seed: "person-portrait-f-smiling/300/350", bio: "Fluent in 4 languages, Siti ensures every traveler feels welcomed from first contact." },
];

const historyItems = [
  { year: "2016", title: "BromoBliss Founded", desc: "Arjun Santoso starts leading small sunrise hikes for backpackers out of his village home." },
  { year: "2018", title: "First Premium Package", desc: "We launch the Private Bromo Journey and welcome our 500th traveler — a major milestone." },
  { year: "2020", title: "Weathering the Storm", desc: "Despite global travel halts, we rebuild with eco-responsible practices and local community support." },
  { year: "2022", title: "Photography Tour Launch", desc: "Our curated photography tour wins 'Best Niche Tour' at the East Java Travel Awards." },
  { year: "2024", title: "2,400 Travelers Strong", desc: "BromoBliss reaches 2,400 travelers and launches night-sky glamping with a 5-star hospitality partner." },
];

const values = [
  { icon: "🌋", title: "Authenticity", desc: "We never manufacture experiences. Every moment is real, raw, and rooted in local life." },
  { icon: "🤝", title: "Community First", desc: "75% of every booking fee goes directly to local guides, villages, and conservation efforts." },
  { icon: "🌿", title: "Sustainability", desc: "Strict leave-no-trace policies, zero single-use plastics, and annual volcanic conservation donations." },
  { icon: "💛", title: "Passion", desc: "We don't do this for profit margins. We do it because Bromo deserves to be shared." },
];

function AnimatedCounter({ target, suffix, decimal }: { target: number; suffix: string; decimal?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(decimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, decimal]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold font-serif text-[#E8703A]">
      {decimal ? count.toFixed(1) : count.toLocaleString()}{suffix}
    </div>
  );
}

export default function AboutContent() {
  return (
    <main className="min-h-screen bg-white">
      <InnerPageHero
        tag="Our Story"
        title="Born from the"
        highlight="Volcanic Highlands"
        description="BromoBliss began with one guide, one mountain, and an unshakeable belief that every traveler deserves an authentic Bromo experience."
        imageSeed="bromo-about-team-story/1920/900"
      />

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="w-8 h-0.5 bg-[#E8703A]" />
                <span className="text-[#E8703A] text-xs font-bold tracking-[0.2em] uppercase">Our Mission</span>
              </div>
              <h2 className="font-serif font-bold text-gray-900 leading-tight mb-6" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>
                To share Bromo&apos;s soul — not just its <span className="italic text-[#E8703A]">scenery</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Most tour companies show you the postcard. We want you to feel the cold volcanic air at 4 AM, hear the Tengger elders&apos; stories, smell the sulfur at the crater rim.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                BromoBliss was founded by people who grew up in Bromo&apos;s shadow. We know every trail, every sacred site, every golden-hour window. That knowledge is yours when you travel with us.
              </p>
              <Link
                href="/packages"
                className="inline-flex items-center gap-2 bg-[#E8703A] text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-[#d4623a] transition-colors shadow-lg shadow-[#E8703A]/25"
              >
                Explore Our Tours
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-xl" style={{ height: 460 }}>
                <Image
                  src="https://picsum.photos/seed/bromo-mission-landscape/700/900"
                  alt="BromoBliss Mission"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#E8703A] rounded-full flex items-center justify-center text-white text-lg">🏆</div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">East Java Travel Award</div>
                    <div className="text-gray-400 text-xs">Best Niche Tour 2022</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl mb-3">{stat.icon}</div>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} decimal={stat.decimal} />
                <div className="text-white/50 text-sm mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#F9F6F1]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-[#E8703A]" />
              <span className="text-[#E8703A] text-xs font-bold tracking-[0.2em] uppercase">What We Stand For</span>
              <span className="w-8 h-0.5 bg-[#E8703A]" />
            </div>
            <h2 className="font-serif font-bold text-gray-900" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>Our Core Values</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-[#E8703A]" />
              <span className="text-[#E8703A] text-xs font-bold tracking-[0.2em] uppercase">Meet the Team</span>
              <span className="w-8 h-0.5 bg-[#E8703A]" />
            </div>
            <h2 className="font-serif font-bold text-gray-900" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>The People Behind the Magic</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: "easeOut" }}
                whileHover={{ y: -8 }}
                className="group text-center"
              >
                <div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-transparent group-hover:border-[#E8703A] transition-all duration-300 shadow-md">
                  <Image
                    src={`https://picsum.photos/seed/${member.seed}`}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-600"
                    sizes="144px"
                  />
                </div>
                <h3 className="font-serif font-bold text-gray-900">{member.name}</h3>
                <p className="text-[#E8703A] text-xs font-semibold tracking-wide uppercase mt-1 mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-[#F9F6F1]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-[#E8703A]" />
              <span className="text-[#E8703A] text-xs font-bold tracking-[0.2em] uppercase">Our Journey</span>
              <span className="w-8 h-0.5 bg-[#E8703A]" />
            </div>
            <h2 className="font-serif font-bold text-gray-900" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>A Timeline of Growth</h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 md:-translate-x-1/2" />
            <div className="space-y-8">
              {historyItems.map((h, i) => (
                <motion.div
                  key={h.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
                  className={`relative flex gap-6 md:gap-0 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-start md:items-center`}
                >
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-[#E8703A] border-4 border-white shadow-md -translate-x-1/2 mt-1 md:mt-0 z-10" />
                  <div className={`ml-16 md:ml-0 w-full md:w-5/12 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <span className="text-[#E8703A] text-xs font-bold tracking-widest">{h.year}</span>
                    <h3 className="font-serif font-bold text-gray-900 mt-1 mb-1">{h.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{h.desc}</p>
                  </div>
                  <div className="hidden md:block md:w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1A1A1A] text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="max-w-xl mx-auto px-6"
        >
          <h2 className="font-serif font-bold mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
            Ready to travel with us?
          </h2>
          <p className="text-white/60 text-sm mb-8 leading-relaxed">
            Join 2,400+ travelers who have trusted BromoBliss to guide them through one of Indonesia&apos;s greatest natural wonders.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/packages"
              className="inline-flex items-center justify-center gap-2 bg-[#E8703A] text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-[#d4623a] transition-colors shadow-lg shadow-[#E8703A]/25"
            >
              View Packages
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
