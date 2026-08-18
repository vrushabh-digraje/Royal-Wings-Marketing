"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ROUTES, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  /** Larger mark for footer / drawer */
  size?: "header" | "footer" | "drawer";
};

const sizeMap = {
  header: { width: 180, height: 36, className: "h-9 w-[180px]" },
  footer: { width: 230, height: 46, className: "h-[46px] w-[230px]" },
  drawer: { width: 160, height: 32, className: "h-8 w-[160px]" },
} as const;

/**
 * Always-interactive brand mark. On the homepage, click scrolls to top
 * so the control never feels “dead”.
 */
export function BrandLogo({ className, size = "header" }: BrandLogoProps) {
  const pathname = usePathname();
  const dims = sizeMap[size];
  const isHome = pathname === ROUTES.home || pathname === "";

  return (
    <Link
      href={ROUTES.home}
      aria-label={`${SITE.name} — go to homepage`}
      title="Royal Wings Marketing home"
      onClick={(event) => {
        if (!isHome) return;
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className={cn(
        "group relative z-[100] inline-flex shrink-0 items-center rounded-lg border border-transparent bg-transparent",
        "cursor-pointer no-underline outline-none transition duration-200",
        "hover:border-gray-200 hover:bg-gray-50 hover:no-underline",
        "focus-visible:border-primary/40 focus-visible:ring-2 focus-visible:ring-primary/30",
        "active:scale-[0.98]",
        dims.className,
        className,
      )}
    >
      <Image
        src="/brand/royal-wings-marketing-logo@2x.webp"
        alt=""
        width={dims.width}
        height={dims.height}
        priority={size === "header"}
        className="pointer-events-none select-none w-full h-full object-contain object-left"
      />
      <span className="sr-only">Royal Wings Marketing home</span>
    </Link>
  );
}
