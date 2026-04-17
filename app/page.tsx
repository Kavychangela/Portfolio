"use client";

import ThemeToggle from "@/components/ThemeToggle";
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen px-6 py-10 overflow-hidden">

      {/* 🌈 Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-sky-400/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-400/30 blur-3xl rounded-full"></div>

      {/* 🧊 Navbar */}
      <nav className="flex justify-between items-center mb-16 px-6 py-3 rounded-2xl backdrop-blur-md bg-white/30 dark:bg-white/10 border border-white/20">
        <h1 className="text-xl font-bold">PDS</h1>
        <ThemeToggle />
      </nav>

      {/* 🌊 Hero */}
      <Hero />

      {/* 🌊 Wave Divider */}
      <div className="mt-16">
        <svg viewBox="0 0 1440 320">
          <path
            fill="#0EA5E9"
            fillOpacity="0.2"
            d="M0,160L60,144C120,128,240,96,360,106.7C480,117,600,171,720,186.7C840,203,960,181,1080,154.7C1200,128,1320,96,1380,80L1440,64V320H0Z"
          />
        </svg>
      </div>

      {/* 💼 Projects */}
      <FadeIn>
        <section className="mt-24">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative p-6 rounded-2xl bg-[var(--card)] shadow-md hover:shadow-2xl border border-white/10 backdrop-blur transition-all duration-300 cursor-pointer"
              >
                {/* Gradient Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-100/20 to-emerald-100/20 opacity-0 hover:opacity-100 transition rounded-2xl"></div>

                <h3 className="font-semibold mb-2 relative z-10">
                  Project {i}
                </h3>

                <p className="text-sm opacity-70 mb-4 relative z-10">
                  A modern web application with smooth UI and scalable backend.
                </p>

                <button className="text-sky-500 relative z-10">
                  View →
                </button>
              </motion.div>
            ))}
          </div>
        </section>
      </FadeIn>

    </main>
  );
}