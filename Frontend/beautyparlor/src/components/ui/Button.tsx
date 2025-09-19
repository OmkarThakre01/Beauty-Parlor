"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string; // if href exists => render <Link>
  onClick?: () => void;
  fullWidth?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset"; // native button types
  variant?: "primary" | "outline" | "ghost"; // style variations
}

export function Button({
  children,
  href,
  onClick,
  fullWidth,
  className,
  type = "button",
  variant = "primary",
}: ButtonProps) {
  // 🎨 Base styles for all buttons
  const baseStyles =
    "inline-flex items-center justify-center rounded-sm font-medium transition-colors px-5 py-2";

  // 🎨 Variants (scalable)
  const variants = {
    primary: "bg-[#1E1E1E] text-white hover:bg-pink-600",
    outline: "border border-[#1E1E1E] text-[#1E1E1E] hover:bg-[#f5f5f5]",
    ghost: "text-[#1E1E1E] hover:bg-pink-100",
  };

  const classes = cn(
    baseStyles,
    variants[variant],
    fullWidth && "w-full text-center",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
