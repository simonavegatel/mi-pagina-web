// src/components/ui/Link.tsx
import { Link as RouterLink } from "react-router-dom";
import type { LinkProps as RouterLinkProps } from "react-router-dom";

type LinkProps = RouterLinkProps & {
  variant?: "primary" | "secondary";
  className?: string;
};

const variants = {
  primary: "text-primary hover:text-accent transition-colors duration-300 relative inline-block after:content-[''] after:block after:h-[2px] after:w-full after:bg-accent after:mt-1 after:scale-x-0 after:transition-transform after:duration-300 after:origin-center hover:after:scale-x-100",
  secondary: "text-gray-500 hover:text-accent transition-colors duration-300",
};

export default function Link({
  variant = "primary",
  className = "",
  ...props
}: LinkProps) {
  return (
    <RouterLink
      className={`${variants[variant]} ${className}`}
      {...props}
    />
  );
}
