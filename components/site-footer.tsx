import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navItems, officialLinks } from "@/lib/site-content";

const footerLinks = [
  { label: "MiniMax API Platform", href: officialLinks.apiPlatform },
  { label: "MiniMax Developer Docs", href: officialLinks.developerDocs },
  { label: "MiniMax Agent", href: officialLinks.agent },
  { label: "MiniMax M2.7 Overview", href: officialLinks.modelOverview },
];

export function SiteFooter() {
  return (
    <footer className="pt-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 rounded-[2rem] border border-white/10 bg-[rgba(10,15,24,0.72)] px-6 py-8 shadow-[0_18px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-white/42 uppercase">
              MiniMax M2.7
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-white">
              A search-ready guide to MiniMax M2.7 benchmarks, API access, pricing, and workflows.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-white/58">
              Built around the public MiniMax M2.7 product page and official developer surfaces available on March 19, 2026.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Site</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/62">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">MiniMax official links</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/62">
              {footerLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  {item.label}
                  <ArrowUpRight className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-white/42 sm:flex-row sm:items-center sm:justify-between">
          <p>minimax-m2-7.lol</p>
          <p>Focused on MiniMax M2.7 API discovery, clean internal links, and search-ready product storytelling.</p>
        </div>
      </div>
    </footer>
  );
}
