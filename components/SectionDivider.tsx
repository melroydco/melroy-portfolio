"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="relative mx-auto my-10 h-px max-w-5xl overflow-hidden bg-white/10">

      <motion.div
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          h-full
          w-40
          bg-gradient-to-r
          from-transparent
          via-violet-400
          to-transparent
        "
      />

    </div>
  );
}
