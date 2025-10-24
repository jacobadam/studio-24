import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";

interface HeroTextProps {
  subheading?: string;
  heading?: string;
  text?: string[];
}

export const HeroText = ({ heading, subheading, text }: HeroTextProps) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <main>
      <motion.div
        style={{
          y,
          opacity,
        }}
        ref={targetRef}
        className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
      >
        <h1 className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
          {heading}
        </h1>
        <h2 className="text-center text-4xl font-bold md:text-4xl">
          {subheading}
        </h2>
        {text?.map((p, i) => (
          <p key={i} className="text-center text-sm md:text-base">
            {p}
          </p>
        ))}
      </motion.div>
    </main>
  );
};
