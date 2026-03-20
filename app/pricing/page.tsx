import Link from "next/link";
import { ArrowUpRight, Gauge, Layers2, Wallet } from "lucide-react";
import { Panel } from "@/components/marketing/panel";
import { SectionHeading } from "@/components/marketing/section-heading";
import { StructuredData } from "@/components/structured-data";
import { buttonVariants } from "@/lib/button-styles";
import { buildBreadcrumbSchema, buildPageMetadata, buildWebPageSchema } from "@/lib/metadata";
import { officialLinks, pricingPaths } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export const metadata = buildPageMetadata({
  title: "MiniMax M2.7 Pricing & API Access",
  description:
    "Compare MiniMax M2.7 pricing routes, API access, MiniMax-M2.7-highspeed, and official evaluation paths.",
  path: "/pricing",
});

const pricingIcons = [Wallet, Gauge, Layers2];

export default function PricingPage() {
  return (
    <>
      <StructuredData
        data={[
          buildWebPageSchema({
            title: "MiniMax M2.7 Pricing & API Access",
            description:
              "Compare MiniMax M2.7 pricing routes, API access, MiniMax-M2.7-highspeed, and official evaluation paths.",
            path: "/pricing",
          }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Pricing", path: "/pricing" },
          ]),
        ]}
      />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 pb-20 pt-8 md:pt-12">
        <section className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <Panel className="p-6 sm:p-8">
            <SectionHeading
              eyebrow="Official access"
              as="h1"
              title="MiniMax M2.7 pricing, API access, and evaluation paths."
              description="Use this page to compare where to check official MiniMax M2.7 pricing, where to access the API, and when to choose MiniMax Agent for faster evaluation."
            />
          </Panel>
          <Panel className="p-6 sm:p-8">
            <div className="rounded-[1.8rem] border border-primary/20 bg-primary/8 p-5">
              <p className="text-xs font-semibold tracking-[0.28em] text-primary uppercase">
                Key release note
              </p>
              <p className="mt-3 text-base leading-7 text-white/72">
                The public M2.7 page states that the price remains unchanged while performance has significantly improved, and that token-plan users automatically benefit from higher inference speeds.
              </p>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-5">
                <p className="text-xs font-semibold tracking-[0.28em] text-white/42 uppercase">
                  API versions
                </p>
                <p className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-white">
                  M2.7 + M2.7-highspeed
                </p>
                <p className="mt-3 text-sm leading-6 text-white/64">
                  Official text describes identical results with faster speed on the highspeed variant.
                </p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-5">
                <p className="text-xs font-semibold tracking-[0.28em] text-white/42 uppercase">
                  Cache behavior
                </p>
                <p className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-white">
                  Automatic cache support
                </p>
                <p className="mt-3 text-sm leading-6 text-white/64">
                  The launch page explicitly notes full automatic cache support with no extra configuration needed.
                </p>
              </div>
            </div>
          </Panel>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Access paths"
            title="Choose the MiniMax M2.7 route that matches pricing research or API integration."
            description="The goal here is clarity: what each route is for, what it includes, and which official surface you should open next."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {pricingPaths.map((path, index) => {
              const Icon = pricingIcons[index % pricingIcons.length];

              return (
                <Panel key={path.title} className="flex h-full flex-col justify-between gap-6 p-6">
                  <div>
                    <div className="flex items-center gap-3 text-primary">
                      <Icon className="size-5" />
                      <span className="text-xs font-semibold tracking-[0.24em] text-white/44 uppercase">
                        {path.eyebrow}
                      </span>
                    </div>
                    <h2 className="mt-4 font-display text-3xl leading-tight font-semibold tracking-[-0.04em] text-white">
                      {path.title}
                    </h2>
                    <p className="mt-4 text-sm leading-6 text-white/64">{path.description}</p>
                  </div>
                  <div className="space-y-3">
                    {path.points.map((point) => (
                      <div
                        key={point}
                        className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-white/62"
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                  <a
                    href={path.href}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "h-11 rounded-full border-white/12 bg-white/[0.04] text-sm font-semibold text-white hover:bg-white/[0.08]",
                    )}
                  >
                    {path.cta}
                    <ArrowUpRight className="size-4" />
                  </a>
                </Panel>
              );
            })}
          </div>
        </section>

        <section>
          <Panel className="grid gap-6 px-6 py-8 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.28em] text-white/48 uppercase">
                Quick next step
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                Open the official platform for current MiniMax M2.7 pricing, then use the docs to wire the model into your own workflow.
              </h2>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={officialLinks.apiPlatform}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/88",
                )}
              >
                Open Platform
              </a>
              <Link
                href="/official-links"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 rounded-full border-white/14 bg-white/4 px-6 text-sm font-semibold text-white hover:bg-white/9",
                )}
              >
                Official Links Hub
              </Link>
            </div>
          </Panel>
        </section>
      </div>
    </>
  );
}
