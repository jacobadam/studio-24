"use client";

import React from "react";

import { HeroSection } from "./components/ui/HeroSection/HeroSection";
import { HeroContent } from "./components/ui/HeroSection/HeroContent";

export default function HomePage(): React.JSX.Element {
  const handleClick = (): void => {
    console.log("Booking initiated");
  };

  return (
    <main className="bg-yellow-50 mt-16">
      <HeroSection
        src="/hero-image.webp"
        heading="Elevate Your Personal Style."
        subheading="Experience the art of modern hair styling in the heart of Vancouver."
        content={
          <HeroContent
            title="The Studio 24 Philosophy"
            paragraphs={[
              "We believe that a great hairstyle is more than just a cut; it is a reflection of your identity. Our space is designed to be a sanctuary where creativity and technical excellence meet.",
              "From the moment you walk through our doors, our focus is on providing a personalized experience that transcends the standard salon visit.",
            ]}
          />
        }
      />

      <HeroSection
        src="/salon-tools.webp"
        heading="Precision Meets Passion."
        subheading="Award-winning stylists dedicated to the health and vibrance of your hair."
        heroButtons={[
          { children: "Book Now", variant: "secondary", onClick: handleClick },
          {
            children: "Our Treatments",
            variant: "primary",
            href: "/treatments",
          },
        ]}
        content={
          <HeroContent
            title="Masterful Techniques"
            paragraphs={[
              "Whether you are looking for a seamless balayage, a bold fashion tone, or a precision geometric cut, our team undergoes continuous training to stay at the forefront of global hair trends.",
            ]}
          />
        }
      />

      <HeroSection
        src="/salon-chair.webp"
        heading="Luxury in Every Detail."
        text={[
          "Bespoke consultations tailored to your face shape and lifestyle.",
          "Premium Italian leather seating designed for maximum relaxation.",
          "A curated selection of organic, sustainable products.",
        ]}
        content={
          <HeroContent
            title="Uncompromising Comfort"
            paragraphs={[
              "Our studio features custom-engineered styling stations equipped with the latest technology to ensure your comfort. Every detail has been chosen to provide a serene and upscale environment.",
              "Sit back, enjoy a signature beverage, and let our experts transform your look while you recharge in a truly luxury setting.",
            ]}
          />
        }
      />
    </main>
  );
}
