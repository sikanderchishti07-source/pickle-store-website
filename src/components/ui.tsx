import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { ChiliIcon, JarIcon } from "./Icons";

/* Scroll-reveal wrapper — adds .in when scrolled into view */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("in");
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -36px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ "--rd": `${delay}ms` } as CSSProperties}>
      {children}
    </div>
  );
}

/* Mono uppercase section eyebrow with a square bullet */
export function Eyebrow({ children, tone = "text-mustard-400" }: { children: ReactNode; tone?: string }) {
  return (
    <p className={`font-mono text-[11px] font-medium uppercase tracking-[0.32em] ${tone}`}>
      <span className="mr-3 inline-block h-2 w-2 -translate-y-px bg-current" />
      {children}
    </p>
  );
}

/* Heat meter — 1 to 3 chillies */
export function ChiliMeter({ level, className = "" }: { level: number; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1 ${className}`} aria-label={`Heat level ${level} of 3`}>
      {[1, 2, 3].map((i) => (
        <ChiliIcon key={i} className={`h-4 w-4 ${i <= level ? "text-chili-500" : "opacity-20"}`} />
      ))}
    </span>
  );
}

/* Rotating circular stamp */
export function Stamp({ text, className = "h-28 w-28" }: { text: string; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 120 120" className="spin-slower h-full w-full">
        <defs>
          <path id="stamp-circ" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" fill="none" />
        </defs>
        <text className="fill-mustard-300 font-mono text-[10px] uppercase" style={{ letterSpacing: "2.6px" }}>
          <textPath href="#stamp-circ">{text}</textPath>
        </text>
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <JarIcon className="h-8 w-8 text-mustard-300" />
      </div>
    </div>
  );
}
