"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

    const rotateX = useTransform(mouseY, [0, 1000], [10, -10]);
    const rotateY = useTransform(mouseX, [0, 1000], [-10, 10]);

  return (
    <section className="relative grid md:grid-cols-2 gap-10 items-center">

      {/* 🌈 Floating Blobs */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute -top-20 -left-20 w-72 h-72 bg-sky-400/30 blur-3xl rounded-full"
      />
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-400/30 blur-3xl rounded-full"
      />

      {/* Left Content */}
      <div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm text-sky-500 mb-2"
        >
          Hi, I'm PDS 🌊
        </motion.p>

        {/* 🔥 Text Reveal */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-6xl font-bold mb-4 leading-tight"
        >
          I build{" "}
          <span className="bg-gradient-to-r from-sky-500 to-emerald-400 bg-clip-text text-transparent">
            insane experiences
          </span>{" "}
          for the web.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="opacity-70 mb-6"
        >
          Full Stack Developer crafting visually stunning, high-performance apps.
        </motion.p>

        {/* 🧲 Buttons */}
        <div className="flex gap-4">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-sky-500 to-emerald-400 text-white shadow-lg"
          >
            View Projects
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 rounded-2xl border backdrop-blur hover:bg-black/5 dark:hover:bg-white/10"
          >
            Contact
          </motion.button>
        </div>
      </div>

      {/* 🎯 Interactive Image */}
      <motion.div
        style={{ rotateX, rotateY }}
        className="rounded-3xl overflow-hidden shadow-2xl perspective-1000"
      >
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="beach"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
}
