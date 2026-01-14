import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";
import { Button, ButtonProps } from "../Button/Button";

interface HeroTextProps {
  subheading?: string;
  heading?: string;
  text?: string[];
  heroButtons?: ButtonProps[];
}

export function HeroText({
  heading,
  subheading,
  text,
  heroButtons,
}: HeroTextProps): React.JSX.Element {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center px-4 text-white"
    >
      <h1 className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {heading}
      </h1>
      <h2 className="mb-4 text-center text-4xl font-bold md:text-6xl max-w-5xl">
        {subheading}
      </h2>
      <div className="mb-8 max-w-2xl">
        {text?.map((p, i) => (
          <p key={i} className="mb-2 text-center text-sm md:text-lg">
            {p}
          </p>
        ))}
      </div>
      {heroButtons && (
        <div className="flex flex-wrap justify-center gap-4">
          {heroButtons.map((button, i) => (
            <Button key={i} {...button} />
          ))}
        </div>
      )}
    </motion.div>
  );
}
