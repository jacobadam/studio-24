"use client";

import Image from "next/image";
import Button from "./components/ui/Button/Button";

export default function Home() {
  const clickButton = () => {
    console.log("hit");
  };

  return (
    <div className="relative min-h-screen w-full px-3 pt-16 bg-primary">
      <section className="flex flex-col md:flex-row items-center justify-between py-8 md:py-16">
        <div className="flex-1 px-8">
          <h1 className="text-secondary-dark font-bold text-5xl leading-tight my-4 pr-0 md:pr-5 max-sm:break-all text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur.
          </h1>
          <p className="text-secondary text-m font-normal mb-8 text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            porttitor libero vitae vestibulum tristique. Vivamus ac imperdiet
            erat. Suspendisse ultricies enim eu nunc rutrum, et luctus sapien
            auctor. Nulla nibh orci, mattis ac porttitor mollis, ullamcorper.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Button
              variant="secondary"
              onClick={clickButton}
              children={"Book Now"}
            />
            <Button
              variant="secondary"
              href="treatments"
              children={"Explore Our Treatments"}
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col md:flex-row items-center md:items-center justify-center gap-6 pt-8 md:pt-0">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex flex-col gap-4">
              <Image
                src="/salon-tools.webp"
                height={120}
                width={400}
                alt="Haircut"
                className="object-cover rounded-3xl"
              />
              <Image
                src="/hero-image.webp"
                height={120}
                width={400}
                alt="Salon chair"
                className="object-cover rounded-3xl"
              />
            </div>

            <Image
              src="/salon-chair.webp"
              height={400}
              width={250}
              alt="Salon tools"
              className="object-cover rounded-3xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
