import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  as: HeadingTag = "h2",
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <p className="text-xs font-semibold tracking-[0.28em] text-white/42 uppercase">{eyebrow}</p>
      <HeadingTag className="mt-4 font-display text-4xl leading-tight font-semibold tracking-[-0.04em] text-white sm:text-5xl">
        {title}
      </HeadingTag>
      <p className="mt-4 text-base leading-7 text-white/62 sm:text-lg">{description}</p>
    </div>
  );
}
