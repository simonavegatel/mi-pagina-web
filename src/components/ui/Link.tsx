// src/components/ui/Link.tsx
import React from "react";

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary";
};

const variants = {
  primary: "text-black hover:text-accent transition-colors duration-300 relative inline-block transition-colors duration-300 after:content-[''] after:block after:h-[2px] after:w-full after:bg-accent after:mt-1 after:scale-x-0 after:transition-transform after:duration-300 after:origin-center hover:text-accent hover:after:scale-x-100",
  secondary: "text-gray-500 hover:text-accent transition-colors duration-300",
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
