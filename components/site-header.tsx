"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { buttonVariants } from "@/lib/button-styles";
import { SiteLogo } from "@/components/site-logo";
import { navItems, officialLinks } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 pt-4">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-[rgba(10,15,24,0.72)] px-4 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:px-5">
          <Link href="/" className="min-w-0">
            <SiteLogo />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    isActive ? "bg-white/10 text-white" : "text-white/62 hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <a
              href={officialLinks.apiPlatform}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ size: "sm" }),
                "h-10 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground hover:bg-primary/88",
              )}
            >
              Access API
              <ArrowUpRight className="size-4" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white md:hidden"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {isOpen ? (
          <div className="mt-3 rounded-[1.8rem] border border-white/10 bg-[rgba(10,15,24,0.92)] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl md:hidden">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-sm font-medium transition-colors",
                    isActive ? "bg-white/10 text-white" : "text-white/72 hover:bg-white/[0.05] hover:text-white",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a
                href={officialLinks.apiPlatform}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "mt-2 h-12 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground hover:bg-primary/88",
                )}
              >
                Access API
                <ArrowUpRight className="size-4" />
              </a>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
