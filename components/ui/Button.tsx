import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gold" | "outline" | "dark";
  children: React.ReactNode;
}

export default function Button({
  variant = "gold",
  children,
  className,
  ...props
}: ButtonProps) {
  const variants = {
    gold: "gold-gradient text-white hover:scale-105",
    outline:
      "border border-white text-white hover:bg-white hover:text-gray-900",
    dark: "bg-gray-900 text-white hover:bg-gray-800",
  };

  return (
    <button
      className={cn(
        "px-6 py-3 rounded-full font-medium transition-smooth",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}