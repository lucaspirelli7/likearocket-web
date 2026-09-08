import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: "md" | "lg";
  block?: boolean;
  className?: string;
}

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  block = false,
  className = "",
}: ButtonProps) {
  const classes = [
    "btn",
    `btn--${variant}`,
    size === "lg" ? "btn--lg" : "",
    block ? "btn--block" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  if (external) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function LinkArrow({ href, children }: { href: string; children: ReactNode }) {
  const inner = (
    <>
      {children} <span aria-hidden>&rarr;</span>
    </>
  );
  if (href.startsWith("http")) {
    return (
      <a className="link-arrow" href={href}>
        {inner}
      </a>
    );
  }
  return (
    <Link className="link-arrow" href={href}>
      {inner}
    </Link>
  );
}
