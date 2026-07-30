"use client";

import { motion } from "framer-motion";

const nodes = [
  { x: "12%", y: "22%" },
  { x: "30%", y: "12%" },
  { x: "48%", y: "30%" },
  { x: "68%", y: "14%" },
  { x: "85%", y: "34%" },
  { x: "20%", y: "58%" },
  { x: "42%", y: "68%" },
  { x: "66%", y: "55%" },
  { x: "82%", y: "72%" },
];

export default function HeroGraphics() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* LARGE FLOATING ORBS */}

      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[10%]
          top-[20%]
          h-72
          w-72
          rounded-full
          bg-violet-600/20
          blur-3xl
        "
      />

      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[8%]
          top-[15%]
          h-80
          w-80
          rounded-full
          bg-blue-600/20
          blur-3xl
        "
      />


      {/* NEURAL NETWORK */}

      <svg
        className="absolute inset-0 h-full w-full opacity-30"
      >

        <line
          x1="12%"
          y1="22%"
          x2="30%"
          y2="12%"
          stroke="currentColor"
          className="text-violet-400"
          strokeWidth="1"
        />

        <line
          x1="30%"
          y1="12%"
          x2="48%"
          y2="30%"
          stroke="currentColor"
          className="text-violet-400"
          strokeWidth="1"
        />

        <line
          x1="48%"
          y1="30%"
          x2="68%"
          y2="14%"
          stroke="currentColor"
          className="text-blue-400"
          strokeWidth="1"
        />

        <line
          x1="68%"
          y1="14%"
          x2="85%"
          y2="34%"
          stroke="currentColor"
          className="text-blue-400"
          strokeWidth="1"
        />

        <line
          x1="12%"
          y1="22%"
          x2="20%"
          y2="58%"
          stroke="currentColor"
          className="text-violet-400"
          strokeWidth="1"
        />

        <line
          x1="20%"
          y1="58%"
          x2="42%"
          y2="68%"
          stroke="currentColor"
          className="text-violet-400"
          strokeWidth="1"
        />

        <line
          x1="42%"
          y1="68%"
          x2="66%"
          y2="55%"
          stroke="currentColor"
          className="text-blue-400"
          strokeWidth="1"
        />

        <line
          x1="66%"
          y1="55%"
          x2="82%"
          y2="72%"
          stroke="currentColor"
          className="text-blue-400"
          strokeWidth="1"
        />

        <line
          x1="48%"
          y1="30%"
          x2="42%"
          y2="68%"
          stroke="currentColor"
          className="text-violet-300"
          strokeWidth="1"
        />

        <line
          x1="68%"
          y1="14%"
          x2="66%"
          y2="55%"
          stroke="currentColor"
          className="text-blue-300"
          strokeWidth="1"
        />

      </svg>


      {/* NEURAL NODES */}

      {nodes.map((node, index) => (
        <motion.div
          key={index}
          style={{
            left: node.x,
            top: node.y,
          }}
          animate={{
            scale: [1, 1.7, 1],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2.5 + index * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            h-2
            w-2
            rounded-full
            bg-violet-300
            shadow-[0_0_15px_rgba(167,139,250,0.8)]
          "
        />
      ))}


      {/* FLOATING DATA TAGS */}

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
          glass
          absolute
          right-[12%]
          top-[35%]
          hidden
          rounded-xl
          px-4
          py-2
          font-mono
          text-xs
          text-violet-300
          lg:block
        "
      >
        model.predict()
      </motion.div>


      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
          glass
          absolute
          bottom-[22%]
          left-[8%]
          hidden
          rounded-xl
          px-4
          py-2
          font-mono
          text-xs
          text-blue-300
          lg:block
        "
      >
        accuracy = 0.85
      </motion.div>


      <motion.div
        animate={{
          x: [0, 12, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="
          glass
          absolute
          bottom-[14%]
          right-[20%]
          hidden
          rounded-xl
          px-4
          py-2
          font-mono
          text-xs
          text-zinc-300
          lg:block
        "
      >
        {"{ AI: true }"}
      </motion.div>

    </div>
  );
}