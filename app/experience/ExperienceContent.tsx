"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import InnerPageHero from "../components/ui/InnerPageHero";

gsap.registerPlugin(ScrollTrigger);

const timeline = [
  {
    time: "04:00 AM",
    title: "Wake-Up & Departure",
    desc: "Your guide picks you up before dawn. The cool mountain air and starlit sky set the tone for an epic day ahead.",
    icon: "🌙",
    seed: "dark-morning-jeep/500/380",
  },
  {
    time: "05:30 AM",
    title: "Sunrise at the Viewpoint",
    desc: "As the horizon glows orange and pink, Mount Bromo reveals itself in all its volcanic glory. Pure magic.",
    icon: "🌄",
    seed: "sunrise-volcano-orange/500/380",
  },
  {
    time: "08:00 AM",
    title: "Crater Descent",
    desc: "Ride a horse or trek down into the sea of sand and climb 250 steps to the crater rim for a view unlike any other.",
    icon: "🏔️",
    seed: "crater-sand-bromo/500/380",
  },
  {
    time: "11:00 AM",
    title: "Cultural Exploration",
    desc: "Visit a Tengger village, witness offerings at Pura Luhur Poten temple, and hear centuries of volcanic mythology.",
    icon: "🛕",
    seed: "temple-ceremony-village/500/380",
  },
  {
    time: "14:00 PM",
    title: "Lunch & Rest",
    desc: "Enjoy a traditional Javanese meal with panoramic views. Rest your legs and let the landscape sink in.",
    icon: "🍜",
    seed: "local-food-java-lunch/500/380",
  },
  {
    time: "17:00 PM",
    title: "Golden Hour & Farewell",
    desc: "Watch the last rays of sunlight paint the caldera in gold before your comfortable return journey.",
    icon: "🌅",
    seed: "golden-hour-mountain-view/500/380",
  },
];

const features = [
  { title: "Expert Local Guides", desc: "Born-and-raised Tengger guides share stories that no guidebook can capture.", icon: "🧭" },
  { title: "Small Group Sizes", desc: "Maximum 8 travelers per group so you get personal attention and space.", icon: "👥" },
  { title: "Professional Photography", desc: "We stop at every golden-hour spot — you'll leave with stunning shots.", icon: "📸" },
  { title: "Flexible Itineraries", desc: "All tours can be customized around your pace, interests, and fitness level.", icon: "🗺️" },
  { title: "Safety Protocols", desc: "Emergency equipment, first aid, and satellite communication on every tour.", icon: "🛡️" },
  { title: "Eco-Friendly Practices", desc: "Leave-no-trace principles and community-supporting travel built in.", icon: "♻️" },
];

const testimonials = [
  {
    name: "Sarah Kim", country: "🇺🇸 USA", rating: 5, avatar: "traveler-portrait-f1/80/80",
    text: "Watching the sunrise over Bromo was the most breathtaking moment of my entire trip to Indonesia. Our guide was incredible.",
  },
  {
    name: "Marco Rossi", country: "🇮🇹 Italy", rating: 5, avatar: "traveler-portrait-m1/80/80",
    text: "The photography tour was worth every cent. I got shots I didn't even think were possible. Absolutely professional team.",
  },
  {
    name: "Aiko Tanaka", country: "🇯🇵 Japan", rating: 5, avatar: "traveler-portrait-f2/80/80",
    text: "The cultural immersion with the Tengger tribe was deeply moving. This wasn't just a tour — it was an experience.",
  },
];

const included = [
  { item: "Hotel pickup & drop-off", included: true },
  { item: "Expert local guide", included: true },
  { item: "Jeep 4WD transport", included: true },
  { item: "Sunrise viewpoint entry", included: true },
  { item: "Local breakfast", included: true },
  { item: "Safety equipment", included: true },
  { item: "International flights", included: false },
  { item: "Personal travel insurance", included: false },
  { item: "Lunch (optional add-on)", included: false },
];

export default function ExperienceContent() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const entries = timelineRef.current?.querySelectorAll(".timeline-entry");
      if (!entries) return;

      entries.forEach((entry, i) => {
        const isLeft = i % 2 === 0;
        gsap.from(entry, {
          opacity: 0,
          x: isLeft ? -60 : 60,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: entry,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      gsap.from(".timeline-line-progress", {
        scaleY: 0,
        transformOrigin: "top center",
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 70%",
          end: "bottom 30%",
          scrub: 1,
        },
      });
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <InnerPageHero
        tag="The Experience"
        title="A Day in the"
        highlight="Heart of Bromo"
        description="From the pre-dawn jeep ride to the final golden hour — here's exactly what your BromoBliss adventure feels like."
        imageSeed="bromo-experience-journey/1920/900"
      />

      {/* Day Timeline */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-[#E8703A]" />
              <span className="text-[#E8703A] text-xs font-bold tracking-[0.2em] uppercase">Your Day</span>
              <span className="w-8 h-0.5 bg-[#E8703A]" />
            </div>
            <h2 className="font-serif font-bold text-gray-900" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
              Hour by Hour — What to Expect
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
              Every tour is a story. Here&apos;s how the chapters unfold on a standard sunrise tour.
            </p>
          </motion.div>

          <div ref={timelineRef} className="relative">
            {/* Centre line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-100 -translate-x-1/2 hidden md:block">
              <div className="timeline-line-progress w-full h-full bg-[#E8703A] origin-top" />
            </div>

            <div className="space-y-12 md:space-y-0">
              {timeline.map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div
                    key={i}
                    className={`timeline-entry relative flex flex-col md:flex-row items-center gap-6 md:gap-0 ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    } mb-10`}
                  >
                    {/* Content */}
                    <div className={`w-full md:w-5/12 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
                      <div className={`flex items-center gap-2 mb-2 ${isLeft ? "md:justify-end" : "md:justify-start"}`}>
                        <span className="text-[#E8703A] text-xs font-bold tracking-widest">{item.time}</span>
                      </div>
                      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-2xl">{item.icon}</span>
                          <h3 className="font-serif font-bold text-gray-900 text-lg">{item.title}</h3>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="md:absolute md:left-1/2 md:-translate-x-1/2 z-10 hidden md:flex">
                      <div className="w-4 h-4 rounded-full bg-[#E8703A] border-4 border-white shadow-md" />
                    </div>

                    {/* Image */}
                    <div className={`w-full md:w-5/12 ${isLeft ? "md:pl-12" : "md:pr-12"}`}>
                      <div className="relative rounded-2xl overflow-hidden shadow-md group" style={{ height: 200 }}>
                        <Image
                          src={`https://picsum.photos/seed/${item.seed}`}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-600"
                          sizes="(max-width: 768px) 100vw, 40vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
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
              <span className="text-[#E8703A] text-xs font-bold tracking-[0.2em] uppercase">What Sets Us Apart</span>
              <span className="w-8 h-0.5 bg-[#E8703A]" />
            </div>
            <h2 className="font-serif font-bold text-gray-900" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>
              The BromoBliss Difference
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.09, ease: "easeOut" }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex gap-4"
              >
                <div className="text-3xl flex-shrink-0">{f.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              <span className="text-[#E8703A] text-xs font-bold tracking-[0.2em] uppercase">Traveler Stories</span>
              <span className="w-8 h-0.5 bg-[#E8703A]" />
            </div>
            <h2 className="font-serif font-bold text-gray-900" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>
              Voices from the Crater
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="bg-[#F9F6F1] rounded-2xl p-6 hover:shadow-md transition-all duration-300"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array(5).fill(0).map((_, s) => (
                    <svg key={s} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                    <Image
                      src={`https://picsum.photos/seed/${t.avatar}`}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.country}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-[#F9F6F1]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-[#E8703A]" />
              <span className="text-[#E8703A] text-xs font-bold tracking-[0.2em] uppercase">Inclusions</span>
              <span className="w-8 h-0.5 bg-[#E8703A]" />
            </div>
            <h2 className="font-serif font-bold text-gray-900" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>
              What&apos;s Included in Your Tour
            </h2>
          </motion.div>

          <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
            <div className="grid sm:grid-cols-2 divide-x divide-gray-50">
              <div className="p-8">
                <h3 className="font-semibold text-gray-900 mb-5 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Included
                </h3>
                <ul className="space-y-3">
                  {included.filter(i => i.included).map((item, idx) => (
                    <motion.li
                      key={item.item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.07 }}
                      className="flex items-center gap-3 text-gray-700 text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                      {item.item}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="p-8">
                <h3 className="font-semibold text-gray-900 mb-5 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                    <svg className="w-3 h-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span>
                  Not Included
                </h3>
                <ul className="space-y-3">
                  {included.filter(i => !i.included).map((item, idx) => (
                    <motion.li
                      key={item.item}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.07 }}
                      className="flex items-center gap-3 text-gray-500 text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" />
                      {item.item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center mt-10"
          >
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 bg-[#E8703A] text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-[#d4623a] transition-colors shadow-lg shadow-[#E8703A]/25"
            >
              View All Packages
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
