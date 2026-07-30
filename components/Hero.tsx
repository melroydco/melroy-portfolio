"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import {
  Github,
  Linkedin,
  Instagram,
  FileText,
  ArrowDown,
  Network,
  Sparkles,
} from "lucide-react";

import {
  SiPython,
  SiPytorch,
} from "react-icons/si";

import HeroGraphics from "./HeroGraphics";

const heading =
  "I build intelligent systems that turn data into useful products.";

export default function Hero() {
  const words = heading.split(" ");

  return (
    <section
      id="top"
      className="grid-bg relative flex min-h-screen items-center overflow-hidden px-6 pt-28"
    >
      <HeroGraphics />

      <div className="absolute left-1/2 top-28 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 md:grid-cols-[1.2fr_0.8fr]">

        {/* LEFT SIDE */}

        <div>

          <motion.p
            initial={{
              opacity: 0,
              x: -25,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 3.1,
              duration: 0.6,
            }}
            className="mb-4 text-sm uppercase tracking-[0.28em] text-violet-300"
          >
            AI • Machine Learning • Data Science
          </motion.p>


          <motion.h2
            initial={{
              opacity: 0,
              x: -35,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 3.3,
              duration: 0.65,
            }}
            className="mb-5 text-xl font-medium text-zinc-300 md:text-2xl"
          >
            Hi, I'm Melroy Dcosta
          </motion.h2>


          {/* WORD-BY-WORD HEADING */}

          <h1 className="gradient-text max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            {words.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                initial={{
                  opacity: 0,
                  y: 25,
                  filter: "blur(8px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  delay: 3.45 + index * 0.055,
                  duration: 0.45,
                  ease: "easeOut",
                }}
                className="mr-[0.28em] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>


          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 4.2,
              duration: 0.6,
            }}
            className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400"
          >
            Master's student in Data Science focused on machine learning,
            generative AI, computer vision and practical AI applications.
          </motion.p>


          {/* BUTTONS */}

          <motion.div
            initial={{
              opacity: 0,
              y: 22,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 4.45,
              duration: 0.6,
            }}
            className="mt-9 flex flex-wrap gap-4"
          >

            <a
              href="#projects"
              className="rounded-2xl bg-white px-5 py-3 font-medium text-black transition hover:scale-[1.03]"
            >
              View Projects
            </a>


            {/* RESUME */}

            <a
              href="/resume/Melroydcosta__Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex items-center gap-2 rounded-2xl px-5 py-3 font-medium transition hover:scale-[1.03]"
            >
              <FileText size={19} />
              Resume
            </a>


            {/* GITHUB */}

            <a
              href="https://github.com/melroydco"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-3 transition hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>


            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/in/melroy-dcosta"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-3 transition hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>


            {/* INSTAGRAM */}

            <a
              href="https://www.instagram.com/_melroy_dcosta/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-3 transition hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>

          </motion.div>

        </div>


        {/* RIGHT SIDE PROFILE PHOTO */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.88,
            x: 45,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            delay: 3.35,
            duration: 0.9,
            ease: "easeOut",
          }}
          className="relative mx-auto"
        >

          {/* PHOTO */}

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative h-80 w-72 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-2 shadow-glow md:h-[420px] md:w-[340px]"
          >
            <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
              <Image
                src="/image/IMG_3094.jpg"
                alt="Melroy Dcosta"
                fill
                priority
                className="object-cover"
              />
            </div>
          </motion.div>


          {/* PYTHON */}

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="glass absolute -left-16 top-16 hidden items-center gap-2 rounded-xl px-4 py-2 text-sm text-violet-200 shadow-lg lg:flex"
          >
            <SiPython className="text-xl" />
            Python
          </motion.div>


          {/* PYTORCH */}

          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="glass absolute -right-20 top-28 hidden items-center gap-2 rounded-xl px-4 py-2 text-sm text-violet-200 shadow-lg lg:flex"
          >
            <SiPytorch className="text-xl" />
            PyTorch
          </motion.div>


          {/* RAG */}

          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="glass absolute -left-14 bottom-24 hidden items-center gap-2 rounded-xl px-4 py-2 text-sm text-blue-200 shadow-lg lg:flex"
          >
            <Network size={18} />
            RAG
          </motion.div>


          {/* GENAI */}

          <motion.div
            animate={{
              y: [0, 9, 0],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="glass absolute -right-16 bottom-16 hidden items-center gap-2 rounded-xl px-4 py-2 text-sm text-violet-200 shadow-lg lg:flex"
          >
            <Sparkles size={18} />
            GenAI
          </motion.div>


          {/* BACKGROUND GLOWS */}

          <div className="absolute -bottom-6 -left-6 -z-10 h-28 w-28 rounded-full bg-violet-500/20 blur-2xl" />

          <div className="absolute -right-8 -top-8 -z-10 h-32 w-32 rounded-full bg-blue-500/20 blur-2xl" />

        </motion.div>

      </div>


      {/* SCROLL */}

      <motion.a
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 4.8,
        }}
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-sm text-zinc-500 md:flex"
      >
        Scroll
        <ArrowDown size={16} />
      </motion.a>

    </section>
  );
}