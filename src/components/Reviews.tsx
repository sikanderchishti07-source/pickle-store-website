import { PRODUCTS, REVIEWS } from "../data";
import { StarIcon } from "./Icons";
import { Eyebrow, Reveal } from "./ui";

export function Reviews() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-brine-50 py-24 lg:py-32">
      {/* faint giant quote */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-16 right-0 select-none font-display text-[26rem] font-extrabold leading-none text-pine-900/4"
      >
        &rdquo;
      </span>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow tone="text-chili-500">Kitchen-table reviews</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-pine-900 sm:text-5xl">
            <span className="mask-line"><span>Postcards from</span></span>
            <span className="mask-line" style={{ "--rd": "120ms" } as React.CSSProperties}>
              <span>Pakistan's <span className="text-chili-500">dinner tables.</span></span>
            </span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {REVIEWS.map((r, i) => {
            const bought = PRODUCTS.find((p) => p.id === r.bought);
            return (
              <Reveal key={r.name} delay={i * 110} className={r.off}>
                <figure
                  className="group relative border border-pine-900/12 bg-[#fcfaf1] p-6 shadow-[0_16px_38px_-22px_rgba(18,32,25,0.35)] transition-all duration-500 hover:z-10 hover:rotate-0 hover:shadow-[0_30px_60px_-24px_rgba(18,32,25,0.5)]"
                  style={{ transform: `rotate(${r.rot})`, borderTop: `4px solid ${bought?.tint}` }}
                >
                  {/* tape */}
                  <span className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 -rotate-3 bg-mustard-300/70 shadow-sm" />
                  <div className="flex gap-1 text-mustard-500">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <StarIcon key={s} className="h-3.5 w-3.5" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-[14.5px] italic leading-relaxed text-pine-800">
                    &ldquo;{r.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 flex items-center justify-between gap-3 border-t border-dashed border-pine-900/15 pt-4">
                    <div>
                      <p className="font-display text-[15px] font-bold text-pine-900">{r.name}</p>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-pine-700/60">
                        {r.city}
                      </p>
                    </div>
                    <span
                      className="shrink-0 px-2.5 py-1 font-mono text-[9.5px] font-semibold uppercase tracking-[0.14em] text-pine-950"
                      style={{ backgroundColor: bought?.tint }}
                    >
                      Bought {bought?.name.split(" ")[0]}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}

          {/* aggregate card */}
          <Reveal delay={550} className="lg:translate-y-8">
            <div
              className="flex h-full min-h-[220px] flex-col justify-between border-2 border-dashed border-pine-900/30 bg-dill-200/40 p-6 transition-all duration-500 hover:rotate-0 hover:border-pine-900"
              style={{ transform: "rotate(1.6deg)" }}
            >
              <div>
                <p className="font-display text-5xl font-extrabold text-pine-900">4.9</p>
                <div className="mt-2 flex gap-1 text-mustard-500">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <StarIcon key={s} className="h-4 w-4" />
                  ))}
                </div>
              </div>
              <p className="mt-4 font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-pine-800">
                Average across 1,140 WhatsApp orders this year — screenshots pinned to the kitchen
                wall.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
