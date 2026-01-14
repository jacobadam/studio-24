"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "../Button/Button";

interface NavBarProps {
  links?: { label: string; href: string }[];
}

export const NavBar = ({ links }: NavBarProps) => {
  const clickButton = () => {
    console.log("hit");
  };

  return (
    <header className="bg-primary fixed w-full z-20 top-0 left-0 h-16">
      <div className="max-w-7xl flex items-center justify-between h-full mx-auto px-4 xl:px-0">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-8 w-32">
            <Image
              src="/studio-24-logo-desktop.svg"
              fill
              priority
              alt="Studio 24 Logo desktop"
            ></Image>
          </div>
        </Link>

        <nav className="items-center justify-between hidden w-full md:flex md:w-auto">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:mt-0 md:border-0 gap-4">
            {links?.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="block py-2 px-3 text-secondary rounded-sm md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center">
          <Button
            variant="secondary"
            onClick={clickButton}
            children={"Book Now"}
          />
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-secondary rounded-lg md:hidden hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-secondary-dark"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
