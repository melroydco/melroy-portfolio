"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ImageIcon } from "lucide-react";

import { projects } from "@/data/portfolio";
import SectionTitle from "./SectionTitle";

function ProjectImage({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  const [imageFailed, setImageFailed] = useState(false);

  if (!src || imageFailed) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-violet-950 via-[#11111a] to-blue-950">
        <div className="text-center">
          <ImageIcon
            size={38}
            className="mx-auto text-violet-300"
          />

          <p className="mt-3 text-sm text-zinc-400">
            {title}
          </p>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={`${title} preview`}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      onError={() => setImageFailed(true)}
      className="
        object-cover
        transition
        duration-700
        group-hover:scale-105
      "
    />
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute -left-32 top-40 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">

        <SectionTitle
          eyebrow="Projects"
          title="Things I've Built"
          text="Projects across data analytics, machine learning, generative AI, computer vision and software development."
        />

        <div className="grid gap-8 md:grid-cols-2">

          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{
                opacity: 0,
                y: 50,
                scale: 0.97,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.06,
                ease: "easeOut",
              }}
              whileHover={{
                y: -7,
              }}
              className="
                glass
                group
                overflow-hidden
                rounded-[2rem]
                border
                border-white/10
                transition
                duration-300
                hover:border-violet-400/30
              "
            >

              {/* =============================
                  PROJECT IMAGE
              ============================== */}

              {project.github ? (

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} on GitHub`}
                  className="block"
                >

                  <div className="relative h-64 overflow-hidden bg-black">

                    <ProjectImage
                      src={project.image}
                      title={project.title}
                    />

                    {/* Image overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />


                    {/* CATEGORY LABEL */}

                    <div
                      className="
                        absolute
                        bottom-5
                        left-5
                        rounded-full
                        border
                        border-white/20
                        bg-black/50
                        px-3
                        py-1.5
                        text-xs
                        font-medium
                        tracking-[0.12em]
                        text-white
                        backdrop-blur-md
                      "
                    >
                      {project.label}
                    </div>


                    {/* GITHUB HOVER INDICATOR */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                      }}
                      whileHover={{
                        opacity: 1,
                        scale: 1,
                      }}
                      className="
                        absolute
                        right-5
                        top-5
                        flex
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-white/15
                        bg-black/60
                        px-3
                        py-2
                        text-xs
                        text-white
                        opacity-0
                        backdrop-blur-lg
                        transition
                        group-hover:opacity-100
                      "
                    >
                      <Github size={16} />
                      View Repository
                    </motion.div>

                  </div>

                </a>

              ) : (

                <div className="relative h-64 overflow-hidden bg-black">

                  <ProjectImage
                    src={project.image}
                    title={project.title}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  <div
                    className="
                      absolute
                      bottom-5
                      left-5
                      rounded-full
                      border
                      border-white/20
                      bg-black/50
                      px-3
                      py-1.5
                      text-xs
                      font-medium
                      tracking-[0.12em]
                      text-white
                      backdrop-blur-md
                    "
                  >
                    {project.label}
                  </div>

                </div>

              )}


              {/* =============================
                  PROJECT INFORMATION
              ============================== */}

              <div className="p-7 md:p-8">

                <h3
                  className="
                    text-2xl
                    font-semibold
                    text-white
                    transition
                    group-hover:text-violet-200
                  "
                >
                  {project.title}
                </h3>


                <p className="mt-4 leading-7 text-zinc-400">
                  {project.description}
                </p>


                {/* TECHNOLOGIES */}

                <div className="mt-6 flex flex-wrap gap-2">

                  {project.tech.map((technology) => (

                    <span
                      key={technology}
                      className="
                        rounded-lg
                        border
                        border-white/[0.07]
                        bg-white/[0.04]
                        px-3
                        py-1.5
                        text-xs
                        text-zinc-300
                      "
                    >
                      {technology}
                    </span>

                  ))}

                </div>


                {/* =============================
                    GITHUB LINK
                ============================== */}

                {project.github && (

                  <div className="mt-7 border-t border-white/10 pt-6">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-violet-400/20
                        bg-violet-500/10
                        px-4
                        py-2.5
                        text-sm
                        font-medium
                        text-violet-200
                        transition
                        duration-300

                        hover:border-violet-400/40
                        hover:bg-violet-500/20
                        hover:text-white
                      "
                    >
                      <Github size={18} />

                      View on GitHub
                    </a>

                  </div>

                )}

              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}