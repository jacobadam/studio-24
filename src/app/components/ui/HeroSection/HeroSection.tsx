import React from "react";
import { HeroImage } from "./HeroImage";
import { HeroText } from "./HeroText";
import { ButtonProps } from "../Button/Button";

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
        <HeroText
          heading={heading}
          subheading={subheading}
          text={text}
          heroButtons={heroButtons}
        />
      </div>
      <div className="bg-yellow-50">{content}</div>
    </section>
  );
}
