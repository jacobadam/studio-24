"use client";

import React from "react";
import Link from "next/link";

interface BaseProps {
  children: string;
  variant?: keyof typeof variants;
}

interface LinkButtonProps extends BaseProps {
  href?: string;
  onClick?: never;
}

interface ActionButtonProps extends BaseProps {
  href?: never;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}

type ButtonProps = LinkButtonProps | ActionButtonProps;

const styles =
  "py-2.5 px-6 text-sm rounded-lg cursor-pointer font-semibold text-center shadow-xs transition-all duration-500";
const variants = {
  primary: "bg-primary text-secondary",
  secondary: "bg-secondary text-primary",
} as const;

export const Button = ({
  children,
  variant = "primary",
  onClick,
  href,
}: ButtonProps) => {
  return href ? (
    <Link href={href} className={`${styles} ${variants[variant]}`}>
      {children}
    </Link>
  ) : (
    <button
      onClick={onClick}
      type="button"
      className={`${styles} ${variants[variant]}`}
    >
      {children}
    </button>
  );
};
