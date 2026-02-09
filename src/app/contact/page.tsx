import React from "react";

export default function ContactPage(): React.JSX.Element {
  return (
    <main className="bg-secondary">
      <section className="mx-auto max-w-7xl px-4 pt-32 pb-16">
        <div className="flex flex-col">
          <span className="mb-4 text-xs font-bold uppercase tracking-widest text-primary/60">
            Correspondence
          </span>
          <h1 className="text-5xl font-medium tracking-tighter text-primary md:text-7xl">
            Connect <br /> With Us.
          </h1>
        </div>
      </section>

      <section className="bg-primary py-24 text-secondary">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
            <div className="flex flex-col gap-12 text-center md:text-left">
              <div className="flex flex-col gap-4">
                <h2 className="text-xs font-bold uppercase tracking-widest opacity-50">
                  Location
                </h2>
                <p className="text-2xl font-light leading-tight">
                  351 Abbott Street <br />
                  Vancouver, BC V6B 2L2
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="text-xs font-bold uppercase tracking-widest opacity-50">
                  Inquiries
                </h2>
                <p className="text-2xl font-light leading-tight">
                  hello@studio24.ca <br />
                  (604) 555-0198
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="text-xs font-bold uppercase tracking-widest opacity-50">
                  Studio Hours
                </h2>
                <div className="flex flex-col gap-2 text-sm font-medium tracking-widest opacity-80">
                  <p>Monday — Friday: 09:00 - 18:00</p>
                  <p>Saturday: 10:00 - 17:00</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            <form className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest opacity-50">
                  Full Name
                </label>
                <input
                  type="text"
                  className="border-b border-secondary/20 bg-transparent py-4 text-xl font-light outline-none focus:border-secondary"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest opacity-50">
                  Email Address
                </label>
                <input
                  type="email"
                  className="border-b border-secondary/20 bg-transparent py-4 text-xl font-light outline-none focus:border-secondary"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest opacity-50">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="border-b border-secondary/20 bg-transparent py-4 text-xl font-light outline-none focus:border-secondary"
                />
              </div>

              <button
                type="submit"
                className="mt-4 w-fit border border-secondary px-12 py-4 text-xs font-bold uppercase tracking-widest transition-colors hover:bg-secondary hover:text-primary"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-32 text-center">
        <h2 className="mb-8 text-3xl font-medium tracking-tighter text-primary">
          Digital Consultations
        </h2>
        <p className="mx-auto max-w-xl text-lg font-light leading-relaxed text-primary/70">
          We encourage new clients to send photos of their current hair and
          inspiration for a preliminary botanical assessment. Most responses are
          provided within 24 business hours.
        </p>
      </section>
    </main>
  );
}
