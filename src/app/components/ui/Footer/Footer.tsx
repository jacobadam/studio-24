import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../Button/Button";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  links: FooterLink[];
  onBookingClick: () => void;
}

export function Footer({
  links,
  onBookingClick,
}: FooterProps): React.JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary pt-24 pb-12 text-secondary">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          <div className="col-span-1 md:col-span-4">
            <Link
              href="/"
              className="mb-6 inline-block transition-opacity hover:opacity-80"
            >
              <div className="relative h-8 w-32">
                <Image
                  src="/studio-24-logo-desktop.svg"
                  fill
                  priority
                  alt="Studio 24 Logo desktop"
                />
              </div>
            </Link>
            <p className="mb-8 max-w-sm text-lg opacity-80">
              Expertly crafted hair styling in the heart of Vancouver. Book your
              transformation today.
            </p>
            <div className="transition-transform active:scale-95">
              <Button variant="secondary" onClick={onBookingClick}>
                Book Now
              </Button>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 md:ml-auto">
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">
              Navigation
            </h3>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-3">
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">
              Visit Us
            </h3>
            <address className="not-italic opacity-80 space-y-2">
              <p>351 Abbott Street</p>
              <p>Vancouver, BC V6B 2L2</p>
              <p className="pt-4 font-medium text-white">hello@studio24.com</p>
              <p>(604) 555-0198</p>
            </address>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">
              Hours
            </h3>
            <ul className="text-sm opacity-80 space-y-2">
              <li className="flex justify-between">
                <span>Mon - Fri</span> <span>9am - 6pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sat</span> <span>10am - 6pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sun</span> <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-50">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <p>© {currentYear} Studio 24 Hair Design. All rights reserved.</p>
            <p>
              Designed & Developed by{" "}
              <a
                href="https://www.greenhousewebdesigns.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors underline underline-offset-2 font-medium"
              >
                Greenhouse Web Designs
              </a>
            </p>
          </div>
          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
