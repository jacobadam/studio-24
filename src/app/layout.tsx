"use client";

import React, { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { NavBar } from "./components/ui/NavBar/NavBar";
import { Footer } from "./components/ui/Footer/Footer";
import { BookingModal } from "./components/ui/Booking/BookingModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Treatments", href: "/treatments" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const setmoreUrl = "https://salonu2v1.setmore.com";

  const toggleBooking = (): void => {
    setIsBookingOpen((prev) => !prev);
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen mt-16`}
      >
        <NavBar links={navLinks} onBookingClick={toggleBooking} />
        {children}
        <Footer links={navLinks} onBookingClick={toggleBooking} />
        <BookingModal
          isOpen={isBookingOpen}
          onClose={toggleBooking}
          setmoreUrl={setmoreUrl}
        />
      </body>
    </html>
  );
}
