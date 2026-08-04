"use client";

import { useState } from "react";
import type { ElementType } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  BarChart3,
  BrainCircuit,
  Braces,
  ChevronDown,
  CloudCog,
  Code2,
  Database,
  FileCode2,
  Folder,
  FolderOpen,
  Globe2,
  Layers3,
  Sparkles,
  Terminal,
  Wrench,
} from "lucide-react";

import { skillGroups } from "@/data/portfolio";
import SectionTitle from "./SectionTitle";

/* ------------------------------------------
   CATEGORY ICONS
------------------------------------------ */

const categoryIcons: Record<string, ElementType> = {
  "Programming Languages": Braces,
  "Data Science & Analytics": BarChart3,
  "Machine Learning & AI": BrainCircuit,
  "Generative AI & LLMs": Sparkles,
  "Analytics & BI Tools": Layers3,
  "Backend & Databases": Database,
  "Web Design & UI/UX": Globe2,
  "Development & Deployment": CloudCog,
};

/* ------------------------------------------
   INDIVIDUAL SKILL ICONS
------------------------------------------ */

const skillIcons: Record<string, ElementType> = {
  // Programming
  Python: FileCode2,
  Java: FileCode2,
  "C++": FileCode2,
  JavaScript: FileCode2,
  TypeScript: FileCode2,
  SQL: Database,
  R: BarChart3,

  // Data Science
  Pandas: BarChart3,
  NumPy: BarChart3,
  EDA: BarChart3,
  "Statistical Analysis": BarChart3,
  "Feature Engineering": Wrench,
  "Predictive Analytics": BarChart3,
  "Data Visualization": BarChart3,
  "Customer Segmentation": Layers3,
  SHAP: BarChart3,

  // Machine Learning
  PyTorch: BrainCircuit,
  TensorFlow: BrainCircuit,
  "Scikit-learn": BrainCircuit,
  XGBoost: BrainCircuit,
  "Deep Learning": BrainCircuit,
  "Computer Vision": BrainCircuit,
  "Neural Networks": BrainCircuit,
  "Model Evaluation": BarChart3,

  // Generative AI
  LangChain: Sparkles,
  LangGraph: Sparkles,
  "OpenAI API": Sparkles,
  "Groq API": Sparkles,
  LLMs: Sparkles,
  RAG: Sparkles,
  "Prompt Engineering": Sparkles,
  "Sentence Transformers": Sparkles,
  Embeddings: Layers3,
  FAISS: Database,
  ChromaDB: Database,
  Typesense: Database,

  // Analytics and BI
  "Power BI": BarChart3,
  Excel: BarChart3,
  "Jupyter Notebook": Code2,
  "Google Colab": Code2,
  Matplotlib: BarChart3,
  Plotly: BarChart3,
  Streamlit: Globe2,
  SQLite: Database,

  // Backend
  "Node.js": Terminal,
  "Express.js": Terminal,
  Flask: Terminal,
  "REST APIs": Globe2,
  MongoDB: Database,
  MySQL: Database,
  Authentication: Wrench,

  // Web design
  React: Code2,
  "Next.js": Code2,
  HTML5: FileCode2,
  CSS3: FileCode2,
  "Tailwind CSS": Code2,
  "Responsive Design": Globe2,
  "UI/UX Design": Layers3,

  // Development and deployment
  Git: Code2,
  GitHub: Code2,
  "GitHub Copilot": Sparkles,
  Docker: CloudCog,
  Linux: Terminal,
  Vercel: CloudCog,
  "VS Code": Code2,
  Postman: Globe2,
  npm: Terminal,
};

export default function Skills() {
  const [openCategory, setOpenCategory] = useState<string>(
    skillGroups[0]?.category ?? ""
  );

  function toggleCategory(category: string) {
    setOpenCategory((currentCategory) =>
      currentCategory === category ? "" : category
    );
  }

  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* BACKGROUND GRAPHICS */}

      <div className="pointer-events-none absolute left-0 top-1/4 h-80 w-80 rounded-full bg-violet-600/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Skills"
          title="My Technical Toolkit"
          text="Technologies I use across data science, artificial intelligence, analytics, full-stack development and deployment."
        />

        {/* MAIN SKILLS CONTAINER */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            duration: 0.65,
          }}
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            border
            border-white/10
            bg-[#09090d]/90
            shadow-2xl
            backdrop-blur-xl
          "
        >
          {/* DECORATIVE TOP HEADER */}

          <div
            className="
              relative
              overflow-hidden
              border-b
              border-white/10
              px-6
              py-8
              md:px-8
              md:py-10
            "
          >
            {/* Header gradient */}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-violet-600/15 via-purple-500/5 to-blue-600/15" />

            {/* Header glow */}

            <motion.div
              animate={{
                x: ["-20%", "120%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                pointer-events-none
                absolute
                top-0
                h-full
                w-48
                bg-gradient-to-r
                from-transparent
                via-white/[0.035]
                to-transparent
                blur-xl
              "
            />

            <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-violet-200">
                  <Sparkles size={14} />
                  Technical expertise
                </div>

                <h3 className="text-2xl font-semibold text-white md:text-3xl">
                  Explore my technology stack
                </h3>

                <p className="mt-3 max-w-2xl leading-7 text-zinc-400">
                  Select a category to view the tools, frameworks and
                  technologies I use in my projects.
                </p>
              </div>

              <div className="flex shrink-0 gap-3">
                <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-center">
                  <p className="text-2xl font-semibold text-violet-300">
                    {skillGroups.length}
                  </p>

                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-zinc-500">
                    Categories
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-center">
                  <p className="text-2xl font-semibold text-blue-300">
                    {skillGroups.reduce(
                      (total, group) => total + group.skills.length,
                      0
                    )}
                  </p>

                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-zinc-500">
                    Technologies
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* MAIN CONTENT */}

          <div className="grid lg:grid-cols-[260px_1fr]">
            {/* CATEGORY SIDEBAR */}

            <aside
              className="
                border-b
                border-white/10
                bg-black/20
                p-4
                lg:border-b-0
                lg:border-r
              "
            >
              <p className="mb-4 px-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                Categories
              </p>

              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                {skillGroups.map((group) => {
                  const isOpen = openCategory === group.category;

                  const CategoryIcon =
                    categoryIcons[group.category] ?? Folder;

                  return (
                    <motion.button
                      key={group.category}
                      type="button"
                      onClick={() => toggleCategory(group.category)}
                      whileHover={{
                        x: 3,
                      }}
                      className={`
                        group
                        flex
                        w-full
                        items-center
                        justify-between
                        gap-3
                        rounded-xl
                        border
                        px-3
                        py-3
                        text-left
                        transition
                        duration-300

                        ${
                          isOpen
                            ? "border-violet-400/30 bg-violet-500/10 text-white"
                            : "border-transparent text-zinc-400 hover:border-white/10 hover:bg-white/5 hover:text-white"
                        }
                      `}
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <div
                          className={`
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            transition

                            ${
                              isOpen
                                ? "bg-violet-400/15 text-violet-300"
                                : "bg-white/5 text-zinc-500 group-hover:text-violet-300"
                            }
                          `}
                        >
                          <CategoryIcon size={18} />
                        </div>

                        <div className="min-w-0">
                          <span className="block truncate text-sm font-medium">
                            {group.category}
                          </span>

                          <span className="mt-0.5 block text-xs text-zinc-600">
                            {group.skills.length} skills
                          </span>
                        </div>
                      </div>

                      {isOpen ? (
                        <FolderOpen
                          size={16}
                          className="shrink-0 text-violet-300"
                        />
                      ) : (
                        <Folder
                          size={16}
                          className="shrink-0 text-zinc-600"
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </aside>

            {/* SKILLS DETAILS */}

            <div className="min-h-[420px] p-4 md:p-6 lg:p-8">
              <AnimatePresence mode="wait">
                {skillGroups.map((group) => {
                  if (openCategory !== group.category) {
                    return null;
                  }

                  const CategoryIcon =
                    categoryIcons[group.category] ?? Folder;

                  return (
                    <motion.div
                      key={group.category}
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -10,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      {/* ACTIVE CATEGORY HEADER */}

                      <div className="mb-7 flex items-start gap-4">
                        <motion.div
                          initial={{
                            scale: 0.85,
                          }}
                          animate={{
                            scale: 1,
                          }}
                          className="
                            flex
                            h-12
                            w-12
                            shrink-0
                            items-center
                            justify-center
                            rounded-2xl
                            border
                            border-violet-400/20
                            bg-violet-400/10
                            text-violet-300
                          "
                        >
                          <CategoryIcon size={23} />
                        </motion.div>

                        <div>
                          <h3 className="text-xl font-semibold text-white md:text-2xl">
                            {group.category}
                          </h3>

                          {group.description && (
                            <p className="mt-2 max-w-3xl leading-6 text-zinc-500">
                              {group.description}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* SKILL GRID */}

                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                        {group.skills.map((skill, skillIndex) => {
                          const SkillIcon =
                            skillIcons[skill] ?? Code2;

                          return (
                            <motion.div
                              key={skill}
                              initial={{
                                opacity: 0,
                                scale: 0.92,
                                y: 12,
                              }}
                              animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0,
                              }}
                              transition={{
                                delay: skillIndex * 0.035,
                              }}
                              whileHover={{
                                y: -5,
                                scale: 1.02,
                              }}
                              className="
                                group
                                relative
                                flex
                                min-h-[94px]
                                items-center
                                gap-4
                                overflow-hidden
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/[0.025]
                                px-4
                                py-4
                                transition
                                duration-300
                                hover:border-violet-400/30
                                hover:bg-violet-500/[0.06]
                              "
                            >
                              {/* Skill hover glow */}

                              <div
                                className="
                                  pointer-events-none
                                  absolute
                                  inset-0
                                  opacity-0
                                  transition
                                  duration-300
                                  group-hover:opacity-100
                                  bg-gradient-to-r
                                  from-violet-500/[0.06]
                                  to-blue-500/[0.03]
                                "
                              />

                              <motion.div
                                whileHover={{
                                  rotate: [0, -6, 6, 0],
                                  scale: 1.1,
                                }}
                                transition={{
                                  duration: 0.35,
                                }}
                                className="
                                  relative
                                  z-10
                                  flex
                                  h-11
                                  w-11
                                  shrink-0
                                  items-center
                                  justify-center
                                  rounded-xl
                                  border
                                  border-violet-400/15
                                  bg-violet-400/10
                                  text-violet-300
                                "
                              >
                                <SkillIcon size={20} />
                              </motion.div>

                              <div className="relative z-10 min-w-0">
                                <p className="break-words text-sm font-medium text-zinc-200 transition group-hover:text-white">
                                  {skill}
                                </p>

                                <p className="mt-1 text-xs text-zinc-600">
                                  Technology
                                </p>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {/* EMPTY STATE */}

              {!openCategory && (
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  className="flex min-h-[360px] flex-col items-center justify-center text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/10 text-violet-300">
                    <Code2 size={28} />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-white">
                    Select a skill category
                  </h3>

                  <p className="mt-2 max-w-md text-sm leading-6 text-zinc-500">
                    Choose one of the categories to explore the technologies
                    I work with.
                  </p>
                </motion.div>
              )}
            </div>
          </div>

          {/* BOTTOM ACCENT */}

          <div className="h-1 w-full bg-gradient-to-r from-violet-600 via-purple-500 to-blue-600" />
        </motion.div>
      </div>
    </section>
  );
}