"use client";

import HeroSection from "./components/ui/HeroSection/HeroSection";

export default function HomePage() {
  return (
    <main className="bg-yellow-50 mt-16">
      <HeroSection
        heading="Lorem ipsum dolor sit amet."
        subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sagittis."
        src="/hero-image.webp"
      ></HeroSection>
      <HeroSection
        heading="Lorem ipsum dolor sit amet."
        subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sagittis."
        src="/salon-tools.webp"
      ></HeroSection>
      <HeroSection
        src="/salon-chair.webp"
        heading="Lorem ipsum dolor sit amet."
        text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
        blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima
        maiores voluptate est ut saepe accusantium maxime doloremque nulla
        consectetur possimus.
        
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
        blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima
        maiores voluptate est ut saepe accusantium maxime doloremque nulla
        consectetur possimus.
        
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
        blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima
        maiores voluptate est ut saepe accusantium maxime doloremque nulla
        consectetur possimus."
      ></HeroSection>
    </main>
  );
}
