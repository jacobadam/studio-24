import React from "react";
import Image from "next/image";

const treatmentDetails = [
  {
    title: "Organic Scalp Ritual",
    description:
      "A specialized therapy featuring a potent Amla Seed and Rosemary serum. This treatment utilizes antioxidant-rich botanicals and stimulating extracts to clarify the scalp and fortify follicles, promoting optimal hair density and a balanced environment for growth.",
    image: "/oak-and-tonic-scalp-treatment.webp",
  },
  {
    title: "Botanical Moisture Mask",
    description:
      "A deep immersion ritual using a floral nectar-infused moisture balm. Formulated with mineral-rich coastal botanicals and plant-derived humectants, this balm-to-milk treatment provides intense hydration to soothe stressed strands and restore biological elasticity.",
    image: "/live-botanical-moisture-mask.webp",
  },

  {
    title: "Plant-Based Glossing",
    description:
      "An intensive shine enhancement utilizing advanced vegan bond-boosters. This treatment uses high-refractive shine enhancers to seal the cuticle and eliminate frizz, providing a mirror-like finish without the use of harsh chemicals.",
    image: "/xmondo-hair-gloss.webp",
  },
];

export default function TreatmentsPage(): React.JSX.Element {
  return (
    <main className="bg-secondary">
      <section className="mx-auto max-w-7xl px-4 pt-32 pb-16">
        <div className="flex flex-col">
          <span className="mb-4 text-xs font-bold uppercase tracking-widest text-primary/60">
            Everyday Care
          </span>
          <h1 className="text-5xl font-medium tracking-tighter text-primary md:text-7xl">
            Clean <br /> Essentials.
          </h1>
        </div>
      </section>

      <section className="bg-primary py-24 text-secondary">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <div className="flex flex-col gap-8">
            <h2 className="text-sm font-bold uppercase tracking-widest opacity-60">
              Our Philosophy
            </h2>
            <p className="text-lg font-light leading-relaxed opacity-90 md:text-xl italic">
              Sustainable beauty should be accessible. We have curated a
              selection of essential treatments that utilize the highest quality
              plant-based ingredients to deliver immediate results without
              compromising the health of the planet.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-32">
        <div className="flex flex-col gap-32">
          {treatmentDetails.map((treatment, index) => (
            <div
              key={treatment.title}
              className={`flex flex-col items-center gap-12 md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="relative aspect-3/2 w-full overflow-hidden rounded-sm bg-primary/5 md:w-1/2">
                <Image
                  src={treatment.image}
                  fill
                  alt={treatment.title}
                  className="object-cover grayscale"
                />
              </div>

              <div className="flex flex-col gap-6 md:w-1/2 md:px-12">
                <h3 className="text-3xl font-medium tracking-tighter text-primary">
                  {treatment.title}
                </h3>
                <p className="text-lg font-light leading-relaxed text-primary/70">
                  {treatment.description}
                </p>
                <div className="h-px w-12 bg-primary/20" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
