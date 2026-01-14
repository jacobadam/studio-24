"use client";

import React, { useState } from "react";
import { NavBar } from "./components/ui/NavBar/NavBar";
import { Footer } from "./components/ui/Footer/Footer";
import { BookingModal } from "./components/ui/Booking/BookingModal";

interface LayoutInnerProps {
  children: React.ReactNode;
  navLinks: { label: string; href: string }[];
}

export function LayoutInner({
  children,
  navLinks,
}: LayoutInnerProps): React.JSX.Element {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const setmoreUrl = "https://salonu2v1.setmore.com";

  const toggleBooking = () => {
    setIsBookingOpen((prev) => !prev);
  };

  return (
    <>
      <NavBar links={navLinks} onBookingClick={toggleBooking} />
      {children}
      <Footer links={navLinks} onBookingClick={toggleBooking} />
      <BookingModal
        isOpen={isBookingOpen}
        onClose={toggleBooking}
        setmoreUrl={setmoreUrl}
      />
    </>
  );
}
