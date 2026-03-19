import Link from "next/link";
import { ArrowRight, ArrowUpRight, Cpu, Database, ShieldCheck, Sparkles } from "lucide-react";
import { FaqList } from "@/components/faq-list";
import { Panel } from "@/components/marketing/panel";
import { SectionHeading } from "@/components/marketing/section-heading";
import { StructuredData } from "@/components/structured-data";
import { buttonVariants } from "@/lib/button-styles";
import { buildBreadcrumbSchema, buildPageMetadata, buildWebPageSchema } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import {
  accessPaths,
  benchmarkCards,
  faqItems,
  heroSignals,
  highlightCards,
  homeKeywords,
  officialLinks,
  showcaseCards,
  toolCompatibility,
} from "@/lib/site-content";

export const metadata = buildPageMetadata({
  title: "MiniMax M2.7 Guide: API, Benchmarks, Pricing & Features",
  description:
    "Compare MiniMax M2.7 benchmarks, API access, pricing, MiniMax-M2.7-highspeed, and official docs in one guide for developers and product teams.",
  path: "/",
});

const highlightIcons = [Cpu, Sparkles, ShieldCheck, Database];

export default function Home() {
  return (
    <>
      <StructuredData
        data={[
          buildWebPageSchema({
            title: "MiniMax M2.7 Guide: API, Benchmarks, Pricing & Features",
            description:
              "Compare MiniMax M2.7 benchmarks, API access, pricing, MiniMax-M2.7-highspeed, and official docs in one guide for developers and product teams.",
            path: "/",
          }),
          buildBreadcrumbSchema([{ name: "Home", path: "/" }]),
        ]}
      />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 pb-20 pt-8 md:gap-24 md:pt-12">
        <section className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col justify-center">
            <span className="mb-5 inline-flex w-fit rounded-full border border-white/12 bg-white/6 px-4 py-1 text-[11px] font-semibold tracking-[0.28em] text-white/70 uppercase">
              Text model / M2.7
            </span>
            <h1 className="max-w-4xl font-display text-5xl leading-[0.95] font-semibold tracking-[-0.05em] text-balance text-white sm:text-6xl lg:text-7xl">
              MiniMax M2.7 guide for API access, benchmarks, pricing, and highspeed workflows.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
              This MiniMax M2.7 guide pulls together the model&apos;s public benchmark claims, API entry points, pricing routes, and feature positioning so developers can evaluate the right path faster.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={officialLinks.apiPlatform}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/88",
                )}
              >
                Access API
                <ArrowUpRight className="size-4" />
              </a>
              <a
                href={officialLinks.modelOverview}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 rounded-full border-white/14 bg-white/4 px-6 text-sm font-semibold text-white hover:bg-white/9",
                )}
              >
                Read M2.7 Overview
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {homeKeywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-sm text-white/66"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          <Panel className="relative overflow-hidden p-0">
            <div className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,rgba(109,224,255,0.34),transparent_72%)]" />
            <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="border-b border-white/8 p-6 lg:border-r lg:border-b-0 lg:p-8">
                <p className="text-xs font-semibold tracking-[0.3em] text-white/48 uppercase">
                  Benchmark snapshot
                </p>
                <div className="mt-5 grid gap-3">
                  {benchmarkCards.map((card) => (
                    <div
                      key={card.label}
                      className="rounded-2xl border border-white/8 bg-white/[0.045] p-4"
                    >
                      <div className="flex items-end justify-between gap-3">
                        <span className="text-sm text-white/64">{card.label}</span>
                        <span className="font-display text-3xl font-semibold tracking-[-0.06em] text-white">
                          {card.value}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-white/52">{card.note}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 lg:p-8">
                <p className="text-xs font-semibold tracking-[0.3em] text-white/48 uppercase">
                  Developer surface
                </p>
                <div className="mt-5 space-y-4 rounded-[1.75rem] border border-white/8 bg-[#09111b] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <div className="flex items-center justify-between text-xs text-white/42">
                    <span>chatcompletion_v2</span>
                    <span>v2.1 API connected</span>
                  </div>
                  <div className="space-y-2 font-mono text-sm leading-7 text-cyan-100/86">
                    <p>POST https://api.minimax.io/v1/text/chatcompletion_v2</p>
                    <p>{'model: "MiniMax-M2.7"'}</p>
                    <p>{'model: "MiniMax-M2.7-highspeed"'}</p>
                    <p>{'headers: { Authorization: "Bearer <token>" }'}</p>
                  </div>
                </div>
                <div className="mt-6 grid gap-3">
                  {heroSignals.map((signal) => (
                    <div
                      key={signal.label}
                      className="flex items-start justify-between gap-4 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3"
                    >
                      <div>
                        <p className="text-sm font-medium text-white">{signal.label}</p>
                        <p className="mt-1 text-sm leading-6 text-white/52">{signal.note}</p>
                      </div>
                      <span className="text-sm font-semibold text-primary">{signal.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Panel>
        </section>

        <section>
          <Panel className="overflow-hidden px-5 py-5 sm:px-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold tracking-[0.28em] text-white/48 uppercase">
                  Developer tool compatibility
                </p>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-white/58">
                  MiniMax M2.7 is publicly framed as a strong fit for Claude Code, Cursor, Codex CLI, and other tool-driven agent workflows.
                </p>
              </div>
              <Link
                href="/features"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/78 transition-colors hover:text-white"
              >
                Explore features
                <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {toolCompatibility.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/8 bg-white/[0.05] px-4 py-2 text-sm text-white/72"
                >
                  {tool}
                </span>
              ))}
            </div>
          </Panel>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="MiniMax M2.7 features"
            title="MiniMax M2.7 features for coding, agents, office editing, and long-running tasks."
            description="The public M2.7 profile emphasizes end-to-end delivery across code, tools, files, and iterative edits, which aligns with the queries developers search before adoption."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {highlightCards.map((card, index) => {
              const Icon = highlightIcons[index % highlightIcons.length];

              return (
                <Panel key={card.title} className="h-full p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold tracking-[0.28em] text-white/42 uppercase">
                        {card.eyebrow}
                      </p>
                      <h2 className="mt-3 font-display text-3xl leading-tight font-semibold tracking-[-0.04em] text-white">
                        {card.title}
                      </h2>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-3 text-primary">
                      <Icon className="size-5" />
                    </div>
                  </div>
                  <p className="mt-4 text-base leading-7 text-white/66">{card.description}</p>
                  <ul className="mt-6 space-y-3">
                    {card.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm leading-6 text-white/62">
                        <span className="mt-2 size-1.5 rounded-full bg-primary" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </Panel>
              );
            })}
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Showcases"
            title="MiniMax M2.7 website generation examples surfaced on the launch page."
            description="Instead of dumping screenshots, the site uses editorial cards to show range across culture, commerce, charity, and personal-brand execution."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {showcaseCards.map((card, index) => (
              <Panel
                key={card.title}
                className={cn(
                  "group min-h-[280px] overflow-hidden p-0",
                  index === 0 && "md:col-span-2 xl:col-span-2",
                  index === 3 && "md:col-span-2 xl:col-span-1",
                )}
              >
                <div className={cn("h-full p-5 sm:p-6", card.className)}>
                  <div className="flex h-full flex-col justify-between rounded-[1.35rem] border border-black/10 bg-black/12 p-5 backdrop-blur-sm">
                    <p className="text-xs font-semibold tracking-[0.28em] text-white/62 uppercase">
                      Single-shot example
                    </p>
                    <div>
                      <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-white/78">{card.description}</p>
                    </div>
                  </div>
                </div>
              </Panel>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="How to access MiniMax M2.7"
            title="Three clean ways to move from MiniMax M2.7 research to active development."
            description="These routes cover the main search intents around MiniMax M2.7 API access, pricing, and hands-on evaluation without forcing one conversion path."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {accessPaths.map((path) => (
              <Panel key={path.title} className="flex h-full flex-col justify-between gap-6 p-6">
                <div>
                  <p className="text-xs font-semibold tracking-[0.28em] text-white/42 uppercase">
                    {path.eyebrow}
                  </p>
                  <h3 className="mt-3 font-display text-3xl leading-tight font-semibold tracking-[-0.04em] text-white">
                    {path.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-white/64">{path.description}</p>
                </div>
                <div className="space-y-3">
                  {path.points.map((point) => (
                    <p key={point} className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white/62">
                      {point}
                    </p>
                  ))}
                </div>
                <a
                  href={path.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-transform hover:translate-x-0.5"
                >
                  {path.cta}
                  <ArrowUpRight className="size-4" />
                </a>
              </Panel>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <Panel className="p-6 sm:p-7">
            <SectionHeading
              eyebrow="FAQ preview"
              title="MiniMax M2.7 FAQ: benchmarks, highspeed, API access, and pricing."
              description="The full FAQ targets recurring MiniMax M2.7 search questions, and these four answers reduce friction before users click through to official sources."
            />
            <Link
              href="/faq"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-transform hover:translate-x-0.5"
            >
              View all FAQ
              <ArrowRight className="size-4" />
            </Link>
          </Panel>
          <Panel className="p-6 sm:p-7">
            <FaqList items={faqItems.slice(0, 4)} />
          </Panel>
        </section>

        <section>
          <Panel className="overflow-hidden bg-[linear-gradient(135deg,rgba(219,255,102,0.12),rgba(109,224,255,0.08)_44%,rgba(255,255,255,0.02)_100%)] px-6 py-8 sm:px-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-xs font-semibold tracking-[0.28em] text-white/48 uppercase">
                  Final call to action
                </p>
                <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                  Start with the official MiniMax M2.7 platform when you are ready to test or integrate.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/64">
                  Use the API platform for direct integration, the docs for implementation details, or the agent surface for a no-build MiniMax M2.7 trial path.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <a
                  href={officialLinks.apiPlatform}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-12 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/88",
                  )}
                >
                  Access API
                </a>
                <a
                  href={officialLinks.developerDocs}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-12 rounded-full border-white/14 bg-white/4 px-6 text-sm font-semibold text-white hover:bg-white/9",
                  )}
                >
                  Developer Docs
                </a>
              </div>
            </div>
          </Panel>
        </section>
      </div>
    </>
  );
}
