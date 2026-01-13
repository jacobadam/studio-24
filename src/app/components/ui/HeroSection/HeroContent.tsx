"use client";

import React from "react";

interface HeroContentProps {
  title: string;
  paragraphs: string[];
}

export function HeroContent({
  title,
  paragraphs,
}: HeroContentProps): React.JSX.Element {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
      <h2 className="col-span-1 text-3xl font-bold md:col-span-4">{title}</h2>
      <div className="col-span-1 md:col-span-8">
        {paragraphs.map((text, index) => (
          <p
            key={index}
            className={`${
              index < paragraphs.length - 1 ? "mb-4" : ""
            } text-xl text-neutral-600 md:text-2xl`}
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}
