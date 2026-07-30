"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
          }}
          transition={{ duration: 0.55 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050507]"
        >
          <div className="absolute h-80 w-80 rounded-full bg-violet-600/20 blur-3xl" />

          <div className="relative text-center">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <h1 className="gradient-text text-4xl font-bold tracking-tight md:text-6xl">
                MELROY
              </h1>
            </motion.div>

            <motion.p
                initial={{
                    opacity: 0,
                    y: 10,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    delay: 0.7,
                    duration: 0.5,
                }}
                className="mt-4 text-xs uppercase tracking-[0.3em] text-violet-300"
                >
                Initializing portfolio...
                </motion.p>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 180 }}
              transition={{
                delay: 0.7,
                duration: 0.7,
                ease: "easeInOut",
              }}
              className="mx-auto mt-6 h-[2px] bg-gradient-to-r from-violet-500 to-blue-500"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}