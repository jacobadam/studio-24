"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "../Button/Button";

interface NavBarProps {
  links?: { label: string; href: string }[];
  onBookingClick: () => void;
}

export const NavBar = ({ links, onBookingClick }: NavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 bg-primary shadow-sm">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          <div className="relative h-8 w-32">
            <Image
              src="/studio-24-logo-desktop.svg"
              fill
              priority
              alt="Studio 24 Logo"
            />
          </div>
        </Link>

        <nav className="hidden items-center justify-between md:flex md:w-auto">
          <ul className="flex items-center gap-10">
            {links?.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`group relative py-2 text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-secondary/70 hover:text-white"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-secondary transition-all duration-500 ease-in-out ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Button variant="secondary" onClick={onBookingClick}>
              Book Now
            </Button>
          </div>

          <button
            onClick={toggleMenu}
            type="button"
            className="group flex size-10 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Toggle Menu"
          >
            <span
              className={`h-px w-6 bg-secondary transition-all duration-300 ${
                isMenuOpen ? "translate-y-1.75 rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-secondary transition-all duration-300 ${
                isMenuOpen ? "-translate-y-1.75 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 min-h-screen w-full border-t border-secondary/5 bg-primary md:hidden">
          <ul className="flex flex-col gap-8 p-8 pt-12">
            {links?.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-sm font-medium uppercase tracking-widest text-secondary active:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-8">
              <Button
                variant="secondary"
                onClick={() => {
                  onBookingClick();
                  setIsMenuOpen(false);
                }}
              >
                Book now
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
