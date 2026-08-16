import { BATCH_LOG, IMG } from "../data";
import { waLink } from "../cart";
import { CheckIcon, WhatsAppIcon } from "./Icons";
import { Eyebrow, Reveal } from "./ui";

const TONE: Record<string, string> = {
  mustard: "bg-mustard-400",
  dill: "bg-dill-400",
  chili: "bg-chili-400",
};

const PROMISES = [
  "Hand-cut, never machine",
  "Three days on the terrace, never a dehydrator",
  "Cold-pressed mustard oil, nothing else in the jar",
  "Aged a minimum of 21 days before it ships",
];

export function Story() {
  return (
    <section id="story" className="relative overflow-hidden bg-pine-900 py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(48rem_32rem_at_-8%_10%,rgba(146,172,95,0.1),transparent_60%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* sticky image */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-t-[10rem] border border-pine-600/70 p-2">
                <div className="overflow-hidden rounded-t-[9rem]">
                  <img
                    src={IMG.story}
                    alt="Hands packing mango pickle into a ceramic martban on a Lahore terrace"
                    loading="lazy"
                    className="kenburns aspect-[4/3.4] w-full object-cover"
                  />
                </div>
              </div>
              <span className="absolute -bottom-4 left-8 -rotate-2 bg-mustard-400 px-3.5 py-2 font-mono text-[10.5px] font-semibold uppercase tracking-[0.18em] text-pine-950 shadow-lg">
                The terrace, Johar Town — since 1974
              </span>
            </div>
          </Reveal>
        </div>

        {/* narrative + batch ledger */}
        <div>
          <Reveal>
            <Eyebrow>Our story</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-brine-50 sm:text-5xl">
              <span className="mask-line"><span>Three generations,</span></span>
              <span className="mask-line" style={{ "--rd": "120ms" } as React.CSSProperties}>
                <span>one terrace, <span className="text-dill-300">one recipe book.</span></span>
              </span>
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-7 text-[15px] leading-relaxed text-brine-200/90">
              It started as one ceramic <em className="text-mustard-300">martban</em> on our
              grandmother's terrace in 1974 — mangoes from the tree behind the house, salt, and
              patience. Three generations later we still cut by hand, still dry in the sun, and
              still refuse to add a single preservative.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-brine-200/90">
              Every jar rests at least 21 days before the lid goes on, which is exactly why we can
              only make forty at a time. When a batch sells out, the next one is already on the
              terrace — it just can't be rushed.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <ul className="mt-8 space-y-3.5">
              {PROMISES.map((p) => (
                <li key={p} className="flex items-start gap-3.5 border border-pine-700/70 bg-pine-950/50 px-4 py-3.5">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center bg-dill-400 text-pine-950">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  <span className="text-[14px] font-medium text-brine-100">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* batch ledger */}
          <Reveal delay={260}>
            <div className="mt-10 border border-pine-700 bg-pine-950/60">
              <div className="flex items-center justify-between border-b border-pine-700 px-5 py-3.5">
                <p className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.26em] text-mustard-300">
                  Batch ledger — this week
                </p>
                <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-dill-400" />
              </div>
              {BATCH_LOG.map((b, i) => (
                <div
                  key={`${b.no}-${b.jar}`}
                  className={`flex items-center justify-between gap-4 px-5 py-3.5 transition-colors hover:bg-pine-900 ${
                    i > 0 ? "border-t border-pine-800" : ""
                  }`}
                >
                  <p className="font-mono text-[12px] text-brine-300">
                    <span className="text-brine-100">Batch {b.no}</span> · {b.jar}
                  </p>
                  <p className="flex items-center gap-2.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-brine-200/80">
                    <span className={`h-1.5 w-1.5 rounded-full ${TONE[b.tone]}`} />
                    {b.status}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={waLink("Hi Pickle Pantry! I'd love to hear more about the terrace and the recipe book.")}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 border border-dill-400 px-5 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-dill-300 transition-all duration-300 hover:bg-dill-400 hover:text-pine-950 active:scale-95"
              >
                <WhatsAppIcon className="h-4 w-4" /> Ask us about the terrace
              </a>
              <p className="font-display text-lg font-bold italic text-brine-200/70">
                — the three sisters of the terrace
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
