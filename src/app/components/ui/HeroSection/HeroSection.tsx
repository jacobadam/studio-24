import { HeroImage } from "./HeroImage";
import { HeroText } from "./HeroText";
import { Button, ButtonProps } from "../Button/Button";

interface HeroSectionProps {
  src: string;
  subheading?: string;
  heading?: string;
  text?: string[];
  heroButtons?: ButtonProps[];
}

export const HeroSection = ({
  src,
  subheading,
  heading,
  text,
  heroButtons,
}: HeroSectionProps) => {
  return (
    <main>
      <div className="relative h-[150vh]">
        <HeroImage src={src} />
        <HeroText heading={heading} subheading={subheading} text={text} />
        {heroButtons?.map((button, i) => (
          <Button key={i} {...button} />
        ))}
      </div>
    </main>
  );
};
