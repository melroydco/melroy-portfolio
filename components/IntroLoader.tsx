"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
          }}
          transition={{
            duration: 0.65,
            ease: "easeInOut",
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#050507]"
        >
          {/* Background glow */}

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.25, 0.45, 0.25],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-96 w-96 rounded-full bg-violet-600/25 blur-3xl"
          />

          <div className="relative px-6 text-center">

            {/* NAME */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 24,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="gradient-text text-4xl font-bold tracking-tight md:text-6xl"
            >
              Melroy Dcosta
            </motion.h1>


            {/* ROLE */}

            <motion.p
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.55,
                duration: 0.55,
              }}
              className="mt-4 text-xs uppercase tracking-[0.3em] text-violet-300 md:text-sm"
            >
              AI • Machine Learning • Data Science
            </motion.p>


            {/* QUOTE */}

            <motion.div
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.05,
                duration: 0.7,
              }}
              className="mt-9"
            >
              <p className="text-xl font-medium leading-relaxed text-zinc-200 md:text-3xl">
                Still learning.
              </p>

              <p className="mt-1 text-xl font-medium leading-relaxed text-zinc-200 md:text-3xl">
                Still building.
              </p>

              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 1.65,
                  duration: 0.6,
                }}
                className="mt-1 text-xl font-medium leading-relaxed text-violet-300 md:text-3xl"
              >
                Getting better every day.
              </motion.p>
            </motion.div>


            {/* LOADING LINE */}

            <div className="mx-auto mt-10 h-[2px] w-52 overflow-hidden rounded-full bg-white/10">

              <motion.div
                initial={{
                  width: "0%",
                }}
                animate={{
                  width: "100%",
                }}
                transition={{
                  delay: 1.25,
                  duration: 1.8,
                  ease: "easeInOut",
                }}
                className="h-full bg-gradient-to-r from-violet-500 via-purple-400 to-blue-500"
              />

            </div>


            {/* LOADING TEXT */}

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [0, 1, 0.55, 1],
              }}
              transition={{
                delay: 1.4,
                duration: 1.4,
              }}
              className="mt-4 text-xs uppercase tracking-[0.24em] text-zinc-500"
            >
              Initializing portfolio
            </motion.p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}