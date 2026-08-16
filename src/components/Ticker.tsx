import type { CSSProperties } from "react";
import { JarIcon } from "./Icons";

export function Ticker({
  items,
  className = "",
  duration = 36,
}: {
  items: string[];
  className?: string;
  duration?: number;
}) {
  const row = (dup: number) => (
    <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
      {items.map((item, i) => (
        <span
          key={`${dup}-${i}`}
          className="flex items-center gap-6 pr-6 font-mono text-[12px] font-semibold uppercase tracking-[0.22em] sm:gap-8 sm:pr-8"
        >
          {item}
          <JarIcon className="h-4 w-4 opacity-60" />
        </span>
      ))}
    </div>
  );

  return (
    <div className={`marquee overflow-hidden border-y border-pine-950/25 py-3.5 ${className}`}>
      <div className="marquee-track flex w-max" style={{ "--dur": `${duration}s` } as CSSProperties}>
        {row(0)}
        {row(1)}
      </div>
    </div>
  );
}
