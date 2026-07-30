"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import {
  FaPython,
  FaJava,
  FaReact,
  FaDocker,
  FaGithub,
  FaGitAlt,
  FaLinux,
  FaHtml5,
  FaCss3,
  FaJs,
  FaDatabase,
  FaChartBar,
  FaBrain,
  FaCloud,
  FaCode,
  FaPalette,
  FaServer,
  FaRobot,
  FaLaptopCode,
  FaFlask,
  FaFileExcel,
} from "react-icons/fa";

import { skillGroups } from "@/data/portfolio";
import SectionTitle from "./SectionTitle";


/* --------------------------------
   SKILL ICONS
-------------------------------- */

const skillIcons: Record<string, ReactNode> = {

  // Programming

  Python: <FaPython />,
  "C++": <FaCode />,
  Java: <FaJava />,
  SQL: <FaDatabase />,
  R: <FaChartBar />,


  // Data Science

  Pandas: <FaChartBar />,
  NumPy: <FaChartBar />,
  "Data Analysis": <FaChartBar />,
  EDA: <FaChartBar />,
  "Statistical Analysis": <FaChartBar />,
  "Feature Engineering": <FaBrain />,


  // Machine Learning & AI

  PyTorch: <FaBrain />,
  TensorFlow: <FaBrain />,
  "Scikit-learn": <FaBrain />,
  XGBoost: <FaBrain />,
  "Deep Learning": <FaBrain />,
  "Computer Vision": <FaBrain />,


  // LLM / GenAI

  LLMs: <FaRobot />,
  RAG: <FaRobot />,
  "Generative AI": <FaRobot />,
  "Prompt Engineering": <FaRobot />,
  "Hugging Face": <FaRobot />,
  "Agentic AI": <FaRobot />,


  // Analysis / BI

  "Power BI": <FaChartBar />,
  Excel: <FaFileExcel />,
  Jupyter: <FaLaptopCode />,
  Matplotlib: <FaChartBar />,
  SHAP: <FaChartBar />,


  // Web

  HTML5: <FaHtml5 />,
  CSS3: <FaCss3 />,
  JavaScript: <FaJs />,
  React: <FaReact />,
  "Next.js": <FaLaptopCode />,
  "Tailwind CSS": <FaPalette />,
  Figma: <FaPalette />,
  "UI/UX Design": <FaPalette />,


  // Cloud / DevOps

  Azure: <FaCloud />,
  AWS: <FaCloud />,
  Docker: <FaDocker />,
  Git: <FaGitAlt />,
  GitHub: <FaGithub />,
  Linux: <FaLinux />,


  // Backend

  Flask: <FaFlask />,
  "REST APIs": <FaServer />,
  MySQL: <FaDatabase />,
};


/* --------------------------------
   CATEGORY ICONS
-------------------------------- */

const categoryIcons: Record<string, ReactNode> = {

  Programming:
    <FaCode />,

  "Data Science & Analytics":
    <FaChartBar />,

  "Machine Learning & AI":
    <FaBrain />,

  "LLM & Generative AI":
    <FaRobot />,

  "Analysis & BI Tools":
    <FaChartBar />,

  "Web Design & UI/UX":
    <FaPalette />,

  "Cloud & DevOps":
    <FaCloud />,

  "Backend & Development":
    <FaServer />,
};


/* --------------------------------
   SKILLS COMPONENT
-------------------------------- */

export default function Skills() {

  return (

    <section
      id="skills"
      className="px-6 py-28"
    >

      <div className="mx-auto max-w-6xl">

        <SectionTitle
          eyebrow="Skills"
          title="My Technical Toolkit"
          text="Technologies and tools I use across programming, data science, machine learning, generative AI, web development and analytics."
        />


        <div className="space-y-8">

          {skillGroups.map((group, groupIndex) => (

            <motion.div

              key={group.category}

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
                amount: 0.15,
              }}

              transition={{
                duration: 0.55,
                delay: groupIndex * 0.05,
              }}

              className="
                glass
                rounded-3xl
                p-6
                md:p-8
              "
            >


              {/* CATEGORY HEADER */}

              <div className="mb-7 flex items-center gap-3">

                <motion.div

                  whileHover={{
                    rotate: 8,
                    scale: 1.1,
                  }}

                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-violet-400/20
                    bg-violet-400/10
                    text-xl
                    text-violet-300
                  "
                >

                  {categoryIcons[group.category] ?? <FaCode />}

                </motion.div>


                <div>

                  <h3 className="text-xl font-semibold md:text-2xl">
                    {group.category}
                  </h3>

                  <div className="mt-1 h-[2px] w-10 rounded-full bg-violet-400/60" />

                </div>

              </div>


              {/* SKILLS */}

              <div
                className="
                  grid
                  grid-cols-2
                  gap-3
                  sm:grid-cols-3
                  md:grid-cols-4
                  lg:grid-cols-6
                "
              >

                {group.skills.map((skill, index) => (

                  <motion.div

                    key={skill}

                    initial={{
                      opacity: 0,
                      scale: 0.8,
                      y: 15,
                    }}

                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}

                    viewport={{
                      once: true,
                    }}

                    transition={{
                      duration: 0.4,
                      delay: index * 0.035,
                    }}

                    whileHover={{
                      y: -7,
                      scale: 1.05,
                    }}

                    className="
                      group
                      relative
                      flex
                      min-h-[120px]
                      cursor-default
                      flex-col
                      items-center
                      justify-center
                      gap-3
                      overflow-hidden
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.035]
                      p-4
                      text-center
                      transition
                      duration-300
                      hover:border-violet-400/30
                      hover:bg-white/[0.07]
                    "
                  >


                    {/* GLOW */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-br
                        from-violet-500/0
                        to-blue-500/0
                        transition
                        duration-300
                        group-hover:from-violet-500/10
                        group-hover:to-blue-500/5
                      "
                    />


                    {/* ICON */}

                    <motion.div

                      whileHover={{
                        scale: 1.18,
                        rotate: [0, -5, 5, 0],
                      }}

                      transition={{
                        duration: 0.35,
                      }}

                      className="
                        relative
                        z-10
                        text-4xl
                        text-violet-300
                      "
                    >

                      {skillIcons[skill] ?? <FaCode />}

                    </motion.div>


                    {/* SKILL NAME */}

                    <span
                      className="
                        relative
                        z-10
                        text-sm
                        font-medium
                        text-zinc-300
                        transition
                        group-hover:text-white
                      "
                    >

                      {skill}

                    </span>

                  </motion.div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );
}