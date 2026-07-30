"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-28"
    >
      <div className="mx-auto max-w-6xl">

        <SectionTitle
          eyebrow="Projects"
          title="Selected work"
          text="A mix of machine learning, generative AI, computer vision and applied data science projects."
        />

        <div className="grid gap-6 md:grid-cols-2">

          {projects.map((project, index) => (
            <motion.article
              key={project.title}

              initial={{
                opacity: 0,
                y: 60,
                scale: 0.97,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}

              viewport={{
                once: true,
                amount: 0.2,
              }}

              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: "easeOut",
              }}

              whileHover={{
                y: -8,
                scale: 1.015,
              }}

              className="glass group rounded-3xl p-7"
            >

              <div className="mb-12 flex items-start justify-between gap-4">

                <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs text-violet-200">
                  {project.accent}
                </span>

                <motion.div
                  whileHover={{
                    rotate: 45,
                    scale: 1.15,
                  }}
                >
                  <ArrowUpRight className="text-zinc-500 transition group-hover:text-white" />
                </motion.div>

              </div>

              <h3 className="text-2xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg bg-white/5 px-3 py-1 text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}