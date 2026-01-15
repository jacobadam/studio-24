import React from "react";
import Image from "next/image";

export default function AboutPage(): React.JSX.Element {
  return (
    <main className="bg-secondary">
      <section className="mx-auto max-w-7xl px-4 pt-32 pb-16">
        <div className="flex flex-col">
          <span className="mb-4 text-xs font-bold uppercase tracking-widest text-primary/60">
            About the Studio
          </span>
          <h1 className="text-5xl font-medium tracking-tighter text-primary md:text-7xl">
            Architecture of <br /> Modern Hair.
          </h1>
        </div>
      </section>

      <section className="bg-primary py-16 text-secondary">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <div className="flex flex-col gap-8 text-lg md:text-xl font-light leading-relaxed opacity-90">
            <p>
              Studio 24 was established in 2024 as a sanctuary for progressive
              hair design in the heart of Vancouver. Our space is built on the
              belief that luxury should be felt through precision, silence, and
              intentionality.
            </p>
            <p>
              We have spent over a decade curating a team of specialists who
              bridge the gap between high-fashion editorial techniques and
              everyday wearable beauty. Our methodology prioritizes long-term
              hair health and the integrity of the fiber above all else.
            </p>
            <p>
              The studio environment is designed to be a quiet retreat from the
              city—a place where clinical excellence meets organic warmth. Every
              visit begins with an in-depth blueprinting session to ensure your
              look is as functional as it is aesthetic.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="relative aspect-3/2 w-full overflow-hidden rounded-sm bg-primary/5">
            <Image
              src="/haircut.webp"
              fill
              alt="Professional hair cutting"
              className="object-cover grayscale"
            />
          </div>
          <div className="relative aspect-3/2 w-full overflow-hidden rounded-sm bg-primary/5">
            <Image
              src="/salon-tools-2.webp"
              fill
              alt="Salon equipment layout"
              className="object-cover grayscale"
            />
          </div>
          <div className="relative aspect-3/2 w-full overflow-hidden rounded-sm bg-primary/5">
            <Image
              src="/blowdry.webp"
              fill
              alt="Styling and blow drying"
              className="object-cover grayscale"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 border-t border-primary/5 text-primary">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex flex-col items-center text-center">
            <span className="mb-4 text-xs font-bold uppercase tracking-widest opacity-40">
              Our Philosophy
            </span>
            <h2 className="mb-10 text-4xl font-medium tracking-tighter md:text-5xl">
              The Studio Standard
            </h2>
            <div className="mb-10 h-px w-24 bg-primary/20" />
            <p className="max-w-2xl text-xl font-light italic leading-relaxed opacity-70">
              Beyond the chair, we are committed to a carbon-neutral footprint.
              We exclusively utilize biodynamic products and sustainable
              water-filtration systems to ensure our craft remains as gentle on
              the planet as it is on you.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
