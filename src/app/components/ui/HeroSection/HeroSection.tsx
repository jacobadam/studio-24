import { HeroImage } from "./HeroImage";
import { HeroText } from "./HeroText";

interface HeroProps {
  src: string;
  subheading?: string;
  heading?: string;
  text?: string[];
}

export default function HeroSection({
  src,
  subheading,
  heading,
  text,
}: HeroProps) {
  return (
    <main>
      <div className="relative h-[150vh]">
        <HeroImage src={src} />
        <HeroText heading={heading} subheading={subheading} text={text} />
      </div>
    </main>
  );
}
