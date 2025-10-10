"use client";

import React from "react";

interface ButtonProps {
  children: string;
  variant?: keyof typeof variants;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}

const styles =
  "py-2.5 px-6 text-sm rounded-lg cursor-pointer font-semibold text-center shadow-xs transition-all duration-500";
const variants = {
  primary: "bg-primary text-secondary",
  secondary: "bg-secondary text-primary",
} as const;

export default function Button({
  children,
  variant = "primary",
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`${styles} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}
