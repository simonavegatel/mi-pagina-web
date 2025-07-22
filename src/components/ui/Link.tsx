// src/components/ui/Link.tsx
import React from "react";

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary";
};

const variants = {
  primary: "text-primary hover:text-accent",
  secondary: "text-gray-500 hover:text-accent",
};

export default function Link({
  variant = "primary",
  className = "",
  ...props
}: LinkProps) {
  return (
    <a
      className={`${variants[variant]} ${className}`}
      {...props}
    />
  );
}
