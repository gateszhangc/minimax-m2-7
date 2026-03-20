import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaqList } from "@/components/faq-list";
import { Panel } from "@/components/marketing/panel";
import { SectionHeading } from "@/components/marketing/section-heading";
import { StructuredData } from "@/components/structured-data";
import { buttonVariants } from "@/lib/button-styles";
import { buildBreadcrumbSchema, buildFaqSchema, buildPageMetadata, buildWebPageSchema } from "@/lib/metadata";
import { faqItems, officialLinks } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export const metadata = buildPageMetadata({
  title: "MiniMax M2.7 FAQ: Benchmarks, API, Pricing & Highspeed",
  description:
    "Read MiniMax M2.7 FAQ answers for benchmarks, API access, pricing, highspeed variants, and official docs.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <StructuredData
        data={[
          buildWebPageSchema({
            title: "MiniMax M2.7 FAQ: Benchmarks, API, Pricing & Highspeed",
            description:
              "Read MiniMax M2.7 FAQ answers for benchmarks, API access, pricing, highspeed variants, and official docs.",
            path: "/faq",
          }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
          buildFaqSchema(faqItems),
        ]}
      />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 pb-20 pt-8 md:pt-12">
        <section className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <Panel className="p-6 sm:p-8">
            <SectionHeading
              eyebrow="MiniMax M2.7 FAQ"
              as="h1"
              title="MiniMax M2.7 FAQ for benchmarks, API access, pricing, and highspeed variants."
              description="Each question is written around common MiniMax M2.7 search intent so users can get direct answers and then move to the official docs or model page."
            />
          </Panel>
          <Panel className="p-6 sm:p-8">
            <FaqList items={faqItems} openFirstItem />
          </Panel>
        </section>

        <section>
          <Panel className="grid gap-6 px-6 py-8 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.28em] text-white/48 uppercase">
                Need the source material?
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                Jump from the MiniMax M2.7 FAQ straight to the official model overview and developer documentation.
              </h2>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/official-links"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 rounded-full border-white/14 bg-white/4 px-6 text-sm font-semibold text-white hover:bg-white/9",
                )}
              >
                Official Links Hub
                <ArrowUpRight className="size-4" />
              </Link>
              <a
                href={officialLinks.developerDocs}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/88",
                )}
              >
                Open Docs
              </a>
            </div>
          </Panel>
        </section>
      </div>
    </>
  );
}
