"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { experience } from "@/data/portfolio";
import SectionTitle from "./SectionTitle";

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-6 py-28"
    >
      <div className="mx-auto max-w-6xl">

        <SectionTitle
          eyebrow="Experience & Education"
          title="Where I've been learning and building."
        />

        <div className="space-y-5">

          {experience.map((item, index) => (
            <motion.div
              key={`${item.role}-${item.company}`}

              initial={{
                opacity: 0,
                x: -80,
              }}

              whileInView={{
                opacity: 1,
                x: 0,
              }}

              viewport={{
                once: true,
                amount: 0.25,
              }}

              transition={{
                duration: 0.65,
                delay: index * 0.1,
                ease: "easeOut",
              }}

              whileHover={{
                x: 6,
              }}

              className="glass grid gap-5 rounded-3xl p-7 md:grid-cols-[1fr_auto]"
            >

              <div className="flex gap-5">

                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: 2,
                  }}
                  className="flex h-20 w-24 shrink-0 items-center justify-center rounded-2xl bg-white p-3"
                >
                  <Image
                    src={item.logo}
                    alt={`${item.company} logo`}
                    width={96}
                    height={80}
                    className="h-full w-full object-contain"
                  />
                </motion.div>

                <div>

                  <h3 className="text-xl font-semibold">
                    {item.role}
                  </h3>

                  <p className="mt-1 text-violet-300">
                    {item.company}
                  </p>

                  <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
                    {item.description}
                  </p>

                </div>

              </div>

              <div className="text-sm text-zinc-500">
                {item.period}
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}