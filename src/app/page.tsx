"use client";

import React from "react";
import { HeroSection } from "./components/ui/HeroSection/HeroSection";
import { HeroContent } from "./components/ui/HeroSection/HeroContent";

export default function HomePage(): React.JSX.Element {
  const handleBooking = (): void => {
    window.open("https://salonu2v1.setmore.com", "_blank");
  };

  return (
    <main className="bg-yellow-50 mt-16">
      <HeroSection
        src="/hero-image.webp"
        heading="Elevate Your Personal Style."
        subheading="Experience the art of modern hair styling in the heart of Vancouver."
        heroButtons={[
          {
            children: "Book Now",
            variant: "secondary",
            onClick: handleBooking,
          },
          {
            children: "View Services",
            variant: "primary",
            href: "/treatments",
          },
        ]}
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
        subheading="Expert stylists dedicated to the health and vibrance of your hair."
        content={
          <HeroContent
            title="The Signature Lookbook"
            paragraphs={[
              "Our aesthetic is defined by effortless elegance and healthy, lived-in color. Explore our curated gallery of signature styles designed to inspire your next transformation.",
              "From sun-kissed balayage to sharp, architectural cuts, we specialize in looks that grow out beautifully and fit your daily lifestyle.",
            ]}
          />
        }
      />

      <HeroSection
        src="/basins.webp"
        heading="The Studio 24 Journey."
        subheading="A transparent three-step process designed for perfection."
        content={
          <HeroContent
            title="Your Experience"
            paragraphs={[
              "1. The Consultation: We begin every visit with a deep-dive into your hair history and goals. 2. The Transformation: Using premium, sustainable products, we execute your look with precision. 3. The Aftercare: We provide a personalized roadmap to maintain your salon-fresh hair at home.",
            ]}
          />
        }
      />

      <HeroSection
        src="/salon-chair.webp"
        heading="Luxury in Every Detail."
        subheading="Bespoke consultations tailored to your face shape and lifestyle."
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
