"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { navLinks } from "@/data/portfolio";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4"
    >
      <nav
        className="
          glass
          mx-auto
          flex
          max-w-6xl
          items-center
          justify-between
          rounded-2xl
          px-5
          py-3
        "
      >

        {/* NAME + PROFILE PHOTO */}

        <a
          href="#top"
          className="flex items-center gap-3"
        >

          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/20">
            <Image
              src="/image/IMG_3094.jpg"
              alt="Melroy Dcosta"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="leading-tight">
            <p className="font-semibold tracking-tight text-white">
              Melroy Dcosta
            </p>

            <p className="hidden text-xs text-zinc-500 sm:block">
              AI & Data Science
            </p>
          </div>

        </a>


        {/* NAVIGATION */}

        <div className="hidden gap-6 text-sm text-zinc-300 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>


        {/* CONTACT */}

        <a
          href="#contact"
          className="
            rounded-xl
            bg-white
            px-4
            py-2
            text-sm
            font-medium
            text-black
            transition
            hover:scale-[1.03]
          "
        >
          Let's connect
        </a>

      </nav>
    </motion.header>
  );
}