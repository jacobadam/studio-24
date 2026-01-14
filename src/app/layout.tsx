import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LayoutInner } from "./LayoutInner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Studio 24",
  description:
    "Studio 24 Hair Salon: Haircuts, colour, treatments & styling in Vancouver.",
  icons: {
    icon: "/studio-24-logo-mobile.svg",
    apple: "/studio-24-logo-mobile.svg",
  },
};

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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <LayoutInner navLinks={navLinks}>{children}</LayoutInner>
      </body>
    </html>
  );
}
