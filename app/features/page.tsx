import Link from "next/link";
import { ArrowUpRight, Bot, Braces, FilePenLine, Orbit, WandSparkles } from "lucide-react";
import { Panel } from "@/components/marketing/panel";
import { SectionHeading } from "@/components/marketing/section-heading";
import { StructuredData } from "@/components/structured-data";
import { buttonVariants } from "@/lib/button-styles";
import { buildBreadcrumbSchema, buildPageMetadata, buildWebPageSchema } from "@/lib/metadata";
import { featureGroups, officialLinks } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export const metadata = buildPageMetadata({
  title: "MiniMax M2.7 Features & Use Cases",
  description:
    "Review MiniMax M2.7 features for coding, agent workflows, Office editing, and complex environment execution.",
  path: "/features",
});

const featureIcons = [Braces, Orbit, FilePenLine, WandSparkles, Bot];

export default function FeaturesPage() {
  return (
    <>
      <StructuredData
        data={[
          buildWebPageSchema({
            title: "MiniMax M2.7 Features & Use Cases",
            description:
              "Review MiniMax M2.7 features for coding, agent workflows, Office editing, and complex environment execution.",
            path: "/features",
          }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Features", path: "/features" },
          ]),
        ]}
      />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 pb-20 pt-8 md:pt-12">
        <section className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <Panel className="p-6 sm:p-8">
            <SectionHeading
              eyebrow="MiniMax M2.7 features"
              as="h1"
              title="MiniMax M2.7 features and use cases for coding, agents, and document workflows."
              description="This page maps the main MiniMax M2.7 features highlighted publicly, with emphasis on software engineering, tool use, Office editing, and long-running execution."
            />
            <div className="mt-8 space-y-3">
              <div className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 text-sm leading-6 text-white/64">
                The strongest MiniMax M2.7 use cases combine repo context, tool actions, and iterative edits rather than one-shot prompting.
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 text-sm leading-6 text-white/64">
                MiniMax M2.7 is publicly positioned around tool adherence, editing fidelity, and end-to-end delivery rather than one-shot demos.
              </div>
            </div>
          </Panel>
          <Panel className="grid gap-4 p-6 sm:grid-cols-2 sm:p-8">
            {featureGroups.slice(0, 4).map((group, index) => {
              const Icon = featureIcons[index];

              return (
                <div key={group.title} className="rounded-[1.6rem] border border-white/8 bg-white/[0.04] p-5">
                  <div className="flex items-center gap-3 text-primary">
                    <Icon className="size-5" />
                    <span className="text-xs font-semibold tracking-[0.24em] text-white/44 uppercase">
                      {group.eyebrow}
                    </span>
                  </div>
                  <h2 className="mt-4 font-display text-2xl font-semibold tracking-[-0.04em] text-white">
                    {group.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/64">{group.description}</p>
                </div>
              );
            })}
          </Panel>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          {featureGroups.map((group, index) => {
            const Icon = featureIcons[index % featureIcons.length];

            return (
              <Panel key={group.title} className="h-full p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.28em] text-white/42 uppercase">
                      {group.eyebrow}
                    </p>
                    <h3 className="mt-3 font-display text-3xl leading-tight font-semibold tracking-[-0.04em] text-white">
                      {group.title}
                    </h3>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-3 text-primary">
                    <Icon className="size-5" />
                  </div>
                </div>
                <p className="mt-4 text-base leading-7 text-white/66">{group.description}</p>
                <ul className="mt-6 space-y-3">
                  {group.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm leading-6 text-white/62">
                      <span className="mt-2 size-1.5 rounded-full bg-primary" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </Panel>
            );
          })}
        </section>

        <section>
          <Panel className="grid gap-6 px-6 py-8 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.28em] text-white/48 uppercase">
                Build path
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                Start with the MiniMax M2.7 docs if you want direct API integration, then move to higher-speed access paths as workload grows.
              </h2>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <a
                href={officialLinks.developerDocs}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/88",
                )}
              >
                Open Developer Docs
                <ArrowUpRight className="size-4" />
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
