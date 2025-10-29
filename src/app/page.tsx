"use client";

import { HeroSection } from "./components/ui/HeroSection/HeroSection";

export default function HomePage() {
  const handleClick = () => {
    console.log("hit");
  };

  return (
    <main className="bg-yellow-50 mt-16">
      <HeroSection
        src="/hero-image.webp"
        heading="Lorem ipsum dolor sit amet."
        subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sagittis."
      ></HeroSection>
      <HeroSection
        src="/salon-tools.webp"
        heading="Lorem ipsum dolor sit amet."
        subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sagittis."
        heroButtons={[
          {
            children: "Book Now",
            variant: "secondary",
            onClick: handleClick,
          },
          {
            children: "Our Treatments",
            variant: "primary",
            href: "/treatments",
          },
        ]}
      ></HeroSection>
      <HeroSection
        src="/salon-chair.webp"
        heading="Lorem ipsum dolor sit amet."
        text={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula rutrum cursus. Fusce faucibus mi id hendrerit auctor. Morbi vestibulum.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula rutrum cursus. Fusce faucibus mi id hendrerit auctor. Morbi vestibulum.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula rutrum cursus. Fusce faucibus mi id hendrerit auctor. Morbi vestibulum.",
        ]}
      ></HeroSection>
    </main>
  );
}
