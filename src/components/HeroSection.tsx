"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import Link from "next/link";
import { Button } from "./ui/moving-border";

export default function HeroSection() {
  return (
    <div>
      <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
       Master the art of music for learning with our Instructors {""} <br />
        <Highlight className="text-black dark:text-white">
        Learn With the Best
        </Highlight>
      </motion.h1>
      <Link href="/courses" className="flex justify-center items-center mt-8">
      <Button
       borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
      Explore Courses
      </Button>
      </Link>
    </HeroHighlight>
    </div>
  )
}
