import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Panel } from "@/components/marketing/panel";
import { SectionHeading } from "@/components/marketing/section-heading";
import { StructuredData } from "@/components/structured-data";
import { buttonVariants } from "@/lib/button-styles";
import { buildBreadcrumbSchema, buildPageMetadata, buildWebPageSchema } from "@/lib/metadata";
import { contactLinks, officialLinks, siteGuideLinks } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export const metadata = buildPageMetadata({
  title: "MiniMax M2.7 Official Links, Docs, API & Agent Paths",
  description:
    "Use one clean MiniMax M2.7 official links hub for the API platform, docs, MiniMax Agent, public model page, and the best internal guide paths.",
  path: "/official-links",
});

export default function OfficialLinksPage() {
  return (
    <>
      <StructuredData
        data={[
          buildWebPageSchema({
            title: "MiniMax M2.7 Official Links, Docs, API & Agent Paths",
            description:
              "Use one clean MiniMax M2.7 official links hub for the API platform, docs, MiniMax Agent, public model page, and the best internal guide paths.",
            path: "/official-links",
          }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Official Links", path: "/official-links" },
          ]),
        ]}
      />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 pb-20 pt-8 md:pt-12">
        <section className="grid gap-6 lg:grid-cols-[0.84fr_1.16fr]">
          <Panel className="p-6 sm:p-8">
            <SectionHeading
              eyebrow="Official links"
              as="h1"
              title="Official MiniMax M2.7 links for API access, docs, agent testing, and model research."
              description="Use this page as the canonical routing hub when you need the official MiniMax M2.7 platform, developer docs, MiniMax Agent, or the public model overview."
            />
            <div className="mt-8 rounded-[1.8rem] border border-primary/20 bg-primary/8 p-5">
              <p className="text-xs font-semibold tracking-[0.28em] text-primary uppercase">
                Why this page exists
              </p>
              <p className="mt-3 text-sm leading-6 text-white/72">
                This route replaces the old contact-style page with a keyword-aligned hub so search engines and users see one clear destination for official MiniMax M2.7 URLs.
              </p>
            </div>
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

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Internal guide paths"
            title="Use the right internal page before you leave for the official MiniMax M2.7 surface."
            description="These three routes keep benchmark context, pricing research, and capability mapping inside the site before the final outbound click."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {siteGuideLinks.map((item) => (
              <Link key={item.title} href={item.href} className="group block h-full">
                <Panel className="flex h-full flex-col justify-between gap-6 p-6 transition-transform duration-200 group-hover:-translate-y-1">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.28em] text-white/42 uppercase">
                      {item.eyebrow}
                    </p>
                    <h2 className="mt-3 font-display text-3xl leading-tight font-semibold tracking-[-0.04em] text-white">
                      {item.title}
                    </h2>
                    <p className="mt-4 text-sm leading-6 text-white/64">{item.description}</p>
                  </div>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-transform group-hover:translate-x-0.5">
                    {item.cta}
                    <ArrowRight className="size-4" />
                  </div>
                </Panel>
              </Link>
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
                If you already know you want to build with MiniMax M2.7, go directly into the official API platform and keep the docs open beside it.
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
                href={officialLinks.developerDocs}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 rounded-full border-white/14 bg-white/4 px-6 text-sm font-semibold text-white hover:bg-white/9",
                )}
              >
                Open Docs
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
              Prefer the public product story first? Read the MiniMax M2.7 model page
              <ArrowRight className="size-4" />
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
