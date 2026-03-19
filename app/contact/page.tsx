import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Panel } from "@/components/marketing/panel";
import { SectionHeading } from "@/components/marketing/section-heading";
import { StructuredData } from "@/components/structured-data";
import { buttonVariants } from "@/lib/button-styles";
import { buildBreadcrumbSchema, buildPageMetadata, buildWebPageSchema } from "@/lib/metadata";
import { contactLinks, officialLinks } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export const metadata = buildPageMetadata({
  title: "MiniMax M2.7 Official Links, Docs & API Entry Points",
  description:
    "Find the official MiniMax M2.7 API platform, docs, MiniMax Agent, and model overview from one clean routing page.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <StructuredData
        data={[
          buildWebPageSchema({
            title: "MiniMax M2.7 Official Links, Docs & API Entry Points",
            description:
              "Find the official MiniMax M2.7 API platform, docs, MiniMax Agent, and model overview from one clean routing page.",
            path: "/contact",
          }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 pb-20 pt-8 md:pt-12">
        <section className="grid gap-6 lg:grid-cols-[0.84fr_1.16fr]">
          <Panel className="p-6 sm:p-8">
            <SectionHeading
              eyebrow="Official links"
              as="h1"
              title="Official MiniMax M2.7 links for API access, docs, agent testing, and model overview."
              description="Use this page as a clean routing hub when you need the official MiniMax M2.7 platform, developer docs, MiniMax Agent, or the public model page."
            />
          </Panel>
          <div className="grid gap-5 sm:grid-cols-2">
            {contactLinks.map((item) => (
              <Panel key={item.title} className="flex h-full flex-col justify-between gap-6 p-6">
                <div>
                  <p className="text-xs font-semibold tracking-[0.28em] text-white/42 uppercase">
                    {item.eyebrow}
                  </p>
                  <h2 className="mt-3 font-display text-3xl leading-tight font-semibold tracking-[-0.04em] text-white">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-white/64">{item.description}</p>
                </div>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-transform hover:translate-x-0.5"
                >
                  {item.cta}
                  <ArrowUpRight className="size-4" />
                </a>
              </Panel>
            ))}
          </div>
        </section>

        <section>
          <Panel className="grid gap-6 px-6 py-8 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.28em] text-white/48 uppercase">
                Fastest route
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                If you already know you want to build with MiniMax M2.7, skip the overview and go directly into the official API platform.
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
                Open API Platform
              </a>
              <a
                href={officialLinks.agent}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 rounded-full border-white/14 bg-white/4 px-6 text-sm font-semibold text-white hover:bg-white/9",
                )}
              >
                Try MiniMax Agent
              </a>
            </div>
          </Panel>
          <div className="mt-5 flex justify-end">
            <a
              href={officialLinks.modelOverview}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/74 transition-colors hover:text-white"
            >
              Prefer the MiniMax M2.7 narrative first? Read the public model page
              <ArrowRight className="size-4" />
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
