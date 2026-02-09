"use client";

import React from "react";
import Link from "next/link";

const sizes = {
  sm: "py-1.5 px-4 min-w-24 text-xs",
  md: "py-2.5 px-3 min-w-32 text-sm",
  lg: "py-2.5 px-5 min-w-40 text-sm",
} as const;

const variants = {
  primary: "bg-primary text-secondary",
  secondary: "bg-secondary text-primary",
} as const;

const baseStyles =
  "inline-block rounded-lg cursor-pointer font-semibold text-center shadow-xs transition-all duration-500";

interface BaseProps {
  children: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
}

interface LinkButtonProps extends BaseProps {
  href?: string;
  onClick?: never;
}

interface ActionButtonProps extends BaseProps {
  href?: never;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}

export type ButtonProps = LinkButtonProps | ActionButtonProps;

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  href,
}: ButtonProps) => {
  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]}`;

  return href ? (
    <Link href={href} className={combinedStyles}>
      {children}
    </Link>
  ) : (
    <button onClick={onClick} type="button" className={combinedStyles}>
      {children}
    </button>
  );
};
