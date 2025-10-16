import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full px-3 pt-16 bg-primary">
      <section className="flex flex-col md:flex-row items-center justify-between min-h-screen px-8">
        <div className="flex-1">
          <h1 className="font-manrope font-bold text-5xl leading-tight text-secondary my-8 pr-5 max-sm:break-all">
            Lorem ipsum dolor sit amet, consectetur.
          </h1>
          <p className="text-sm font-normal text-secondary-dark mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            porttitor libero vitae vestibulum tristique. Vivamus ac imperdiet
            erat. Suspendisse ultricies enim eu nunc rutrum, et luctus sapien
            auctor. Nulla nibh orci, mattis ac porttitor mollis, ullamcorper.
          </p>
        </div>
        <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex flex-col gap-4">
              <Image
                src="/salon-tools.webp"
                width={400}
                height={150}
                alt="Haircut"
                className="object-cover rounded-3xl"
              />
              <Image
                src="/hero-image.webp"
                width={400}
                height={150}
                alt="Salon chair"
                className="object-cover rounded-3xl"
              />
            </div>

            <Image
              src="/salon-chair.webp"
              width={400}
              height={800}
              alt="Salon tools"
              className="object-cover rounded-3xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
