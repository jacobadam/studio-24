import React from "react";

const priceList = [
  {
    category: "Technical Rituals",
    items: [
      { name: "Organic Scalp Ritual", price: "85", duration: "45 min" },
      { name: "Botanical Moisture Mask", price: "65", duration: "30 min" },
      { name: "Plant-Based Glossing", price: "95", duration: "45 min" },
    ],
  },
  {
    category: "Cut & Aesthetic",
    items: [
      { name: "Artistic Director Cut", price: "145", duration: "75 min" },
      { name: "Senior Stylist Cut", price: "115", duration: "60 min" },
      { name: "Refined Blow-Dry", price: "75", duration: "45 min" },
    ],
  },
  {
    category: "Sustainable Colour",
    items: [
      { name: "Global Botanical Tint", price: "165", duration: "120 min" },
      {
        name: "Partial Biodynamic Balayage",
        price: "245",
        duration: "180 min",
      },
      { name: "Full Scalp Lightening", price: "310", duration: "210 min" },
    ],
  },
];

export default function PricingPage(): React.JSX.Element {
  return (
    <main className="bg-secondary">
      <section className="mx-auto max-w-7xl px-4 pt-32 pb-16">
        <div className="flex flex-col">
          <span className="mb-4 text-xs font-bold uppercase tracking-widest text-primary/60">
            Investment
          </span>
          <h1 className="text-5xl font-medium tracking-tighter text-primary md:text-7xl">
            Service <br /> Menu.
          </h1>
        </div>
      </section>

      <section className="bg-primary py-24 text-secondary">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex flex-col gap-20">
            {priceList.map((group) => (
              <div key={group.category} className="flex flex-col gap-8">
                <h2 className="text-xs font-bold uppercase tracking-widest opacity-50">
                  {group.category}
                </h2>
                <div className="flex flex-col gap-6">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex flex-col border-b border-secondary/10 pb-6 group"
                    >
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="text-xl font-light tracking-tight md:text-2xl">
                          {item.name}
                        </span>
                        <span className="text-lg font-medium tracking-tighter">
                          ${item.price}
                        </span>
                      </div>
                      <span className="text-xs uppercase tracking-widest opacity-40">
                        Starts at • {item.duration}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-24 text-center">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-light italic leading-relaxed text-primary/60">
            All prices are in CAD and subject to GST. Technical services do not
            include a blow-dry unless specified. Final quotes are provided
            following a mandatory botanical consultation.
          </p>
          <p className="text-xs font-bold uppercase tracking-widest text-primary/40">
            Carbon Neutral • Vegan Certified • Studio Standard
          </p>
        </div>
      </section>
    </main>
  );
}
