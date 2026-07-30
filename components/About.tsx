"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="About"
          title="Building AI with real-world impact."
          text="I enjoy taking an idea from raw data and turning it into a working system — from preprocessing and model development to deployment and user-facing applications."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["AI Engineering", "Generative AI, LLM workflows, computer vision and model integration."],
            ["Data Science", "EDA, feature engineering, predictive modeling and explainability."],
            ["Product Mindset", "I focus on usable outcomes, not just notebooks and experiments."]
          ].map(([title, text], i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-3xl p-7"
            >
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-3 leading-7 text-zinc-400">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
