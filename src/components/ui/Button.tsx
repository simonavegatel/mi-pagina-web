import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
};

const base = "rounded px-4 py-2 font-semibold transition-colors duration-200";
const variants = {
  primary: "bg-primary text-white hover:bg-accent",
  secondary: "bg-gray-200 text-foreground hover:bg-accent",
};
const sizes = {
  sm: "text-sm py-1 px-2",
  md: "text-base py-2 px-4",
  lg: "text-lg py-3 px-6",
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
