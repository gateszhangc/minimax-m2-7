import Image from "next/image";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  compact?: boolean;
  className?: string;
};

export function SiteLogo({ compact = false, className }: SiteLogoProps) {
  return (
    <div className={cn("flex min-w-0 items-center gap-3", className)}>
      <Image
        src="/brand/minimax-m27-mark.png"
        alt="MiniMax M2.7 logo"
        width={36}
        height={36}
        className="size-9 rounded-xl"
        priority
      />
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-white">MiniMax M2.7</p>
        {!compact ? (
          <p className="hidden truncate text-xs text-white/46 sm:block">
            Precision signal for API access, pricing, and benchmarks
          </p>
        ) : null}
      </div>
    </div>
  );
}
