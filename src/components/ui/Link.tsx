// src/components/ui/Link.tsx
import { Link as RouterLink } from "react-router-dom";
import type { LinkProps as RouterLinkProps } from "react-router-dom";

type LinkProps = RouterLinkProps & {
  className?: string;
};


export default function Link({

  className = "",
  ...props
}: LinkProps) {
  return (
    <RouterLink
      className={`${className}`}
      {...props}
    />
  );
}
