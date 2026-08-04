"use client";

import { motion } from "framer-motion";

import {
  BrainCircuit,
  Code2,
  Database,
  Lightbulb,
  MapPin,
  Sparkles,
} from "lucide-react";

import SectionTitle from "./SectionTitle";

const focusAreas = [
  {
    title: "Data Science",
    description:
      "Transforming raw information into structured insights through analysis, visualization and predictive modelling.",
    icon: Database,
  },
  {
    title: "Machine Learning",
    description:
      "Developing and evaluating intelligent models that solve practical, data-driven problems.",
    icon: BrainCircuit,
  },
  {
    title: "Generative AI",
    description:
      "Exploring RAG systems, LLM applications, agentic workflows and intelligent document-based tools.",
    icon: Sparkles,
  },
  {
    title: "Software Development",
    description:
      "Turning models and ideas into usable applications with APIs, databases and responsive interfaces.",
    icon: Code2,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* Background glow */}

      <div className="pointer-events-none absolute left-[-10rem] top-24 h-80 w-80 rounded-full bg-violet-600/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-10 right-[-8rem] h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="About Me"
          title="Curious by nature. Driven to build."
          text="A little more about who I am, what I work on and what motivates me."
        />

        <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          {/* BIOGRAPHY */}

          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.65,
            }}
            className="glass relative overflow-hidden rounded-[2rem] p-7 md:p-10"
          >
            {/* Decorative glow */}

            <div className="pointer-events-none absolute right-[-5rem] top-[-5rem] h-48 w-48 rounded-full bg-violet-500/15 blur-3xl" />

            <div className="relative">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-violet-200">
                <Lightbulb size={14} />
                My journey
              </div>

              <h3 className="max-w-2xl text-2xl font-semibold leading-tight text-white md:text-4xl">
                I enjoy transforming ideas and data into intelligent,
                useful products.
              </h3>

              <div className="mt-7 space-y-5 text-base leading-8 text-zinc-400 md:text-lg">
                <p>
                  I&apos;m Melroy Dcosta, a Master&apos;s student in Data
                  Science at Philipps-Universität Marburg. My interests sit at
                  the intersection of data, artificial intelligence and
                  software development.
                </p>

                <p>
                  I enjoy working through the complete lifecycle of a project:
                  understanding the problem, preparing and analysing data,
                  developing models, evaluating results and turning the final
                  solution into an application that people can actually use.
                </p>

                <p>
                  My projects span machine learning, data analytics,
                  generative AI, retrieval-augmented generation, computer
                  vision and full-stack development. Through my internships
                  and personal projects, I have worked with real datasets,
                  predictive models, APIs, databases and interactive
                  dashboards.
                </p>

                <p>
                  I am still learning, still building and improving with every
                  project. I&apos;m especially interested in opportunities
                  where I can contribute to meaningful AI and data products
                  while continuing to grow as an engineer.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
                  Problem Solver
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
                  Continuous Learner
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
                  AI Enthusiast
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
                  Product Mindset
                </span>
              </div>

              <div className="mt-8 flex items-center gap-2 border-t border-white/10 pt-6 text-sm text-zinc-500">
                <MapPin size={17} className="text-violet-300" />
                Based in Marburg, Germany
              </div>
            </div>
          </motion.div>

          {/* FOCUS AREAS */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.65,
              delay: 0.1,
            }}
            className="space-y-4"
          >
            {focusAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <motion.article
                  key={area.title}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.15 + index * 0.08,
                  }}
                  whileHover={{
                    y: -5,
                    scale: 1.01,
                  }}
                  className="glass group relative overflow-hidden rounded-3xl p-6 transition hover:border-violet-400/30"
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-violet-500/0 to-blue-500/0 transition duration-300 group-hover:from-violet-500/[0.07] group-hover:to-blue-500/[0.03]" />

                  <div className="relative flex items-start gap-4">
                    <motion.div
                      whileHover={{
                        rotate: [0, -6, 6, 0],
                        scale: 1.08,
                      }}
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/10 text-violet-300"
                    >
                      <Icon size={22} />
                    </motion.div>

                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        {area.title}
                      </h4>

                      <p className="mt-2 leading-6 text-zinc-500">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}