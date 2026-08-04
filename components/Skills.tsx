"use client";

import { useState } from "react";
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
  TerminalSquare,
  Wrench,
} from "lucide-react";

import { skillGroups } from "@/data/portfolio";
import SectionTitle from "./SectionTitle";

const categoryIcons = {
  "Programming Languages": Braces,
  "Data Science & Analytics": BarChart3,
  "Machine Learning & AI": BrainCircuit,
  "Generative AI & LLMs": Sparkles,
  "Analytics & BI Tools": Layers3,
  "Backend & Databases": Database,
  "Web Design & UI/UX": Globe2,
  "Development & Deployment": CloudCog,
};

const skillIcons: Record<string, React.ElementType> = {
  Python: FileCode2,
  Java: FileCode2,
  "C++": FileCode2,
  JavaScript: FileCode2,
  TypeScript: FileCode2,
  SQL: Database,
  R: BarChart3,

  Pandas: BarChart3,
  NumPy: BarChart3,
  EDA: BarChart3,
  "Statistical Analysis": BarChart3,
  "Feature Engineering": Wrench,
  "Predictive Analytics": BarChart3,
  "Data Visualization": BarChart3,
  "Customer Segmentation": Layers3,
  SHAP: BarChart3,

  PyTorch: BrainCircuit,
  TensorFlow: BrainCircuit,
  "Scikit-learn": BrainCircuit,
  XGBoost: BrainCircuit,
  "Deep Learning": BrainCircuit,
  "Computer Vision": BrainCircuit,
  "Neural Networks": BrainCircuit,
  "Model Evaluation": BarChart3,

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

  "Power BI": BarChart3,
  Excel: BarChart3,
  "Jupyter Notebook": Code2,
  "Google Colab": Code2,
  Matplotlib: BarChart3,
  Plotly: BarChart3,
  Streamlit: Globe2,
  SQLite: Database,

  "Node.js": TerminalSquare,
  "Express.js": TerminalSquare,
  Flask: TerminalSquare,
  "REST APIs": Globe2,
  MongoDB: Database,
  MySQL: Database,
  Authentication: Wrench,

  React: Code2,
  "Next.js": Code2,
  HTML5: FileCode2,
  CSS3: FileCode2,
  "Tailwind CSS": Code2,
  "Responsive Design": Globe2,
  "UI/UX Design": Layers3,

  Git: Code2,
  GitHub: Code2,
  "GitHub Copilot": Sparkles,
  Docker: CloudCog,
  Linux: TerminalSquare,
  Vercel: CloudCog,
  "VS Code": Code2,
  Postman: Globe2,
  npm: TerminalSquare,
};

export default function Skills() {
  const [openCategories, setOpenCategories] = useState<string[]>(
    skillGroups.map((group) => group.category)
  );

  function toggleCategory(category: string) {
    setOpenCategories((current) =>
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category]
    );
  }

  const allOpen =
    openCategories.length === skillGroups.length;

  function toggleAll() {
    setOpenCategories(
      allOpen
        ? []
        : skillGroups.map((group) => group.category)
    );
  }

  return (
    <section id="skills" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Skills"
          title="My Technical Toolkit"
          text="Technologies I use across data science, AI, analytics, full-stack development and deployment."
        />

        {/* VS CODE-STYLE WINDOW */}

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
            duration: 0.6,
          }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-[#09090d]/90 shadow-2xl backdrop-blur-xl"
        >
          {/* TITLE BAR */}

          <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.035] px-5 py-4">
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
              </div>

              <div className="flex items-center gap-2 text-sm text-zinc-400">
                <Code2 size={16} />
                melroy-skills
              </div>
            </div>

            <button
              type="button"
              onClick={toggleAll}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-400 transition hover:border-violet-400/30 hover:text-white"
            >
              {allOpen ? "Collapse all" : "Expand all"}
            </button>
          </div>

          <div className="grid lg:grid-cols-[230px_1fr]">
            {/* SIDEBAR */}

            <aside className="hidden border-r border-white/10 bg-black/20 p-4 lg:block">
              <p className="mb-4 px-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                Explorer
              </p>

              <div className="space-y-1">
                {skillGroups.map((group) => {
                  const isOpen = openCategories.includes(
                    group.category
                  );

                  return (
                    <button
                      key={group.category}
                      type="button"
                      onClick={() =>
                        toggleCategory(group.category)
                      }
                      className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-sm text-zinc-400 transition hover:bg-white/5 hover:text-white"
                    >
                      {isOpen ? (
                        <FolderOpen
                          size={16}
                          className="text-violet-300"
                        />
                      ) : (
                        <Folder
                          size={16}
                          className="text-violet-300"
                        />
                      )}

                      <span className="truncate">
                        {group.category}
                      </span>
                    </button>
                  );
                })}
              </div>
            </aside>

            {/* SKILLS CONTENT */}

            <div className="p-4 md:p-6">
              <div className="space-y-4">
                {skillGroups.map((group, groupIndex) => {
                  const isOpen = openCategories.includes(
                    group.category
                  );

                  const CategoryIcon =
                    categoryIcons[
                      group.category as keyof typeof categoryIcons
                    ] ?? Folder;

                  return (
                    <motion.div
                      key={group.category}
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: groupIndex * 0.04,
                      }}
                      className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]"
                    >
                      {/* CATEGORY HEADER */}

                      <button
                        type="button"
                        onClick={() =>
                          toggleCategory(group.category)
                        }
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-white/[0.035]"
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/10 text-violet-300">
                            <CategoryIcon size={20} />
                          </div>

                          <div className="min-w-0">
                            <h3 className="font-semibold text-zinc-100">
                              {group.category}
                            </h3>

                            <p className="mt-1 hidden truncate text-xs text-zinc-500 sm:block">
                              {group.description}
                            </p>
                          </div>
                        </div>

                        <motion.div
                          animate={{
                            rotate: isOpen ? 180 : 0,
                          }}
                          transition={{
                            duration: 0.2,
                          }}
                          className="shrink-0 text-zinc-500"
                        >
                          <ChevronDown size={20} />
                        </motion.div>
                      </button>

                      {/* CATEGORY CONTENT */}

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{
                              height: 0,
                              opacity: 0,
                            }}
                            animate={{
                              height: "auto",
                              opacity: 1,
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                            }}
                            transition={{
                              duration: 0.28,
                              ease: "easeInOut",
                            }}
                            className="overflow-hidden"
                          >
                            <div className="grid grid-cols-2 gap-3 border-t border-white/10 p-4 sm:grid-cols-3 md:grid-cols-4">
                              {group.skills.map(
                                (skill, skillIndex) => {
                                  const SkillIcon =
                                    skillIcons[skill] ??
                                    Code2;

                                  return (
                                    <motion.div
                                      key={skill}
                                      initial={{
                                        opacity: 0,
                                        scale: 0.9,
                                        y: 10,
                                      }}
                                      animate={{
                                        opacity: 1,
                                        scale: 1,
                                        y: 0,
                                      }}
                                      transition={{
                                        delay:
                                          skillIndex *
                                          0.025,
                                      }}
                                      whileHover={{
                                        y: -4,
                                        scale: 1.02,
                                      }}
                                      className="group flex min-h-[88px] items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4 py-3 transition hover:border-violet-400/30 hover:bg-violet-500/[0.06]"
                                    >
                                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-400/10 text-violet-300 transition group-hover:scale-110">
                                        <SkillIcon
                                          size={18}
                                        />
                                      </div>

                                      <span className="text-sm font-medium text-zinc-300 transition group-hover:text-white">
                                        {skill}
                                      </span>
                                    </motion.div>
                                  );
                                }
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* STATUS BAR */}

          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/10 bg-violet-700/70 px-4 py-2 text-xs text-white/90">
            <span>Melroy Dcosta</span>

            <div className="flex gap-4">
              <span>Data Science</span>
              <span>AI & ML</span>
              <span>UTF-8</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}