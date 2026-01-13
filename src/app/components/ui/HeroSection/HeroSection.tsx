import React from "react";

import { HeroImage } from "./HeroImage";
import { HeroText } from "./HeroText";
import { Button, ButtonProps } from "../Button/Button";

interface HeroSectionProps {
  src: string;
  subheading?: string;
  heading?: string;
  text?: string[];
  heroButtons?: ButtonProps[];
  content?: React.ReactNode;
}

export function HeroSection({
  src,
  subheading,
  heading,
  text,
  heroButtons,
  content,
}: HeroSectionProps): React.JSX.Element {
  return (
    <section>
      <div className="relative">
        <HeroImage src={src} />
        <HeroText heading={heading} subheading={subheading} text={text} />
        <div className="absolute bottom-20 left-1/2 flex -translate-x-1/2 gap-4">
          {heroButtons?.map((button, i) => (
            <Button key={i} {...button} />
          ))}
        </div>
      </div>
      <div className="bg-yellow-50">{content}</div>
    </section>
  );
}
