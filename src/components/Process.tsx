import { fmt } from "../data";
import { STATS, STEPS } from "../data";
import { useCountUp, useInView } from "../hooks";
import { DropIcon, LeafIcon, SunIcon } from "./Icons";
import { Eyebrow, Reveal } from "./ui";

function Stat({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const n = useCountUp(value, inView);
  return (
    <Reveal delay={delay}>
      <div ref={ref} className="border-l-2 border-pine-900/15 pl-5">
        <p className="font-mono text-4xl font-semibold tracking-tight text-pine-900 sm:text-5xl">
          {n.toLocaleString("en-US")}
          <span className="text-chili-500">{suffix}</span>
        </p>
        <p className="mt-2 max-w-[16rem] font-mono text-[10.5px] uppercase leading-relaxed tracking-[0.18em] text-pine-700/70">
          {label}
        </p>
      </div>
    </Reveal>
  );
}

export function Process() {
  return (
    <section id="process" className="relative bg-brine-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          {/* sticky intro */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <Eyebrow tone="text-chili-500">How it's made</Eyebrow>
                <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-pine-900 sm:text-5xl lg:text-[3.4rem]">
                  <span className="mask-line"><span>Four steps.</span></span>
                  <span className="mask-line" style={{ "--rd": "110ms" } as React.CSSProperties}>
                    <span>Twenty-one days.</span>
                  </span>
                  <span className="mask-line" style={{ "--rd": "220ms" } as React.CSSProperties}>
                    <span className="text-chili-500">Zero shortcuts.</span>
                  </span>
                </h2>
                <p className="mt-6 max-w-md text-[14.5px] leading-relaxed text-pine-700/90">
                  A dehydrator takes six hours. We take three weeks — because the terrace sun does
                  something to a mango that no machine has ever managed. This is the exact method
                  from page one of Ammi's recipe book, unchanged since 1974.
                </p>
                <div className="mt-8 flex flex-wrap gap-5">
                  {[
                    { icon: <SunIcon className="h-5 w-5" />, label: "Sun-cured" },
                    { icon: <DropIcon className="h-5 w-5" />, label: "Cold-pressed oil" },
                    { icon: <LeafIcon className="h-5 w-5" />, label: "No preservatives" },
                  ].map((b) => (
                    <span
                      key={b.label}
                      className="flex items-center gap-2.5 border border-pine-900/20 bg-brine-50 px-3.5 py-2.5 font-mono text-[10.5px] font-medium uppercase tracking-[0.16em] text-pine-800"
                    >
                      <span className="text-chili-500">{b.icon}</span>
                      {b.label}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          {/* steps timeline */}
          <div className="lg:col-span-7">
            <ol className="relative border-l-2 border-dashed border-pine-900/25 pl-8 sm:pl-12">
              {STEPS.map((s, i) => (
                <li key={s.title} className="relative pb-12 last:pb-0">
                  <span className="absolute -left-[41px] top-1 grid h-5 w-5 place-items-center bg-brine-100 sm:-left-[57px]">
                    <span className="h-3 w-3 rotate-45 bg-chili-500" />
                  </span>
                  <Reveal delay={i * 120}>
                    <div className="group relative border border-pine-900/12 bg-brine-50 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-pine-900/30 hover:shadow-[0_22px_44px_-24px_rgba(18,32,25,0.4)] sm:p-8">
                      <span className="pointer-events-none absolute right-5 top-3 select-none font-display text-7xl font-extrabold leading-none text-pine-900/8 transition-colors duration-500 group-hover:text-mustard-400/30">
                        0{i + 1}
                      </span>
                      <span className="inline-block bg-pine-900 px-3 py-1.5 font-mono text-[10.5px] font-semibold uppercase tracking-[0.22em] text-mustard-300">
                        {s.day}
                      </span>
                      <h3 className="mt-4 font-display text-2xl font-bold text-pine-900 sm:text-[1.7rem]">
                        {s.title}
                      </h3>
                      <p className="mt-2.5 max-w-lg text-[14px] leading-relaxed text-pine-700/90">{s.body}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* counters */}
        <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-pine-900/15 pt-12 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Stat key={s.label} value={s.value} suffix={s.suffix} label={s.label} delay={i * 100} />
          ))}
        </div>

        <Reveal delay={150}>
          <p className="mt-12 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-pine-700/60">
            This week's rest: mango {fmt(1450)} · garlic {fmt(1350)} · chilli {fmt(1250)} · lemon{" "}
            {fmt(1250)} · mix {fmt(1650)}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
