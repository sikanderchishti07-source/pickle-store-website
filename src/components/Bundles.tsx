import { useState } from "react";
import { fmt, PRESETS, PRODUCTS } from "../data";
import { useCart } from "../cart";
import { CheckIcon, JarIcon, PlusIcon } from "./Icons";
import { Eyebrow, Reveal } from "./ui";

const FULL_MARTBAN = 6000;

function tierFor(n: number) {
  if (n >= 5) return { label: "Full martban price unlocked", pct: 0, flat: FULL_MARTBAN };
  if (n === 4) return { label: "4 jars — 15% off", pct: 15 };
  if (n === 3) return { label: "3 jars — 10% off", pct: 10 };
  if (n === 2) return { label: "2 jars — 5% off", pct: 5 };
  if (n === 1) return { label: "Add a second jar to unlock 5% off", pct: 0 };
  return { label: "Tap jars to fill your crate", pct: 0 };
}

export function Bundles() {
  const { add } = useCart();
  const [sel, setSel] = useState<string[]>(["mango", "chilli"]);

  const toggle = (id: string) =>
    setSel((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  const chosen = PRODUCTS.filter((p) => sel.includes(p.id));
  const subtotal = chosen.reduce((s, p) => s + p.price, 0);
  const tier = tierFor(sel.length);
  const total = tier.flat ?? Math.round((subtotal * (100 - tier.pct)) / 100);
  const saving = subtotal - total;

  const addCrate = () => {
    if (sel.length === 0) return;
    add({
      key: `crate-${[...sel].sort().join(".")}`,
      name: `Build-your-own crate · ${sel.length} jar${sel.length > 1 ? "s" : ""}`,
      detail: chosen.map((c) => c.name.split(" ")[0]).join(" + "),
      price: total,
    });
  };

  return (
    <section id="bundles" className="relative overflow-hidden bg-pine-950 py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50rem_34rem_at_12%_-10%,rgba(217,90,53,0.1),transparent_60%),radial-gradient(40rem_30rem_at_105%_95%,rgba(234,169,58,0.1),transparent_60%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-12 lg:gap-10 lg:px-8">
        {/* left — presets */}
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow>Special crates</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-brine-50 sm:text-5xl">
              <span className="mask-line"><span>More jars.</span></span>
              <span className="mask-line" style={{ "--rd": "120ms" } as React.CSSProperties}>
                <span className="text-mustard-300">Less per jar.</span>
              </span>
            </h2>
            <p className="mt-5 max-w-md text-[14.5px] leading-relaxed text-brine-200/85">
              Three house crates we pack every week — or slide your own together and watch the
              discount stack. All crates ship in a wooden box with a handwritten batch card.
            </p>
          </Reveal>

          <div className="mt-9 space-y-4">
            {PRESETS.map((preset, i) => (
              <Reveal key={preset.id} delay={i * 110}>
                <div className="group border border-pine-700 bg-pine-900/70 p-5 transition-all duration-400 hover:border-mustard-500/60 hover:bg-pine-850">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-dill-300">
                        Crate 0{i + 1} · {preset.contents}
                      </p>
                      <h3 className="mt-1.5 font-display text-2xl font-bold text-brine-50">{preset.name}</h3>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-brine-200/75">{preset.desc}</p>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="font-mono text-[11px] text-brine-300/60 line-through">{fmt(preset.was)}</p>
                      <p className="font-mono text-xl font-semibold text-mustard-300">{fmt(preset.price)}</p>
                      <p className="mt-0.5 inline-block bg-chili-500 px-1.5 py-0.5 font-mono text-[9.5px] font-semibold uppercase tracking-[0.12em] text-brine-50">
                        Save {fmt(preset.was - preset.price)}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <button
                      onClick={() =>
                        add({
                          key: `deal-${preset.id}`,
                          name: `${preset.name} · ${preset.contents}`,
                          price: preset.price,
                        })
                      }
                      className="flex items-center gap-2 border border-mustard-400 px-4 py-2 font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-mustard-300 transition-all duration-300 hover:bg-mustard-400 hover:text-pine-950 active:scale-95"
                    >
                      <PlusIcon className="h-3.5 w-3.5" /> Add crate
                    </button>
                    <button
                      onClick={() => setSel([...new Set(preset.items)])}
                      className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-brine-300/70 underline decoration-pine-600 underline-offset-4 transition-colors hover:text-brine-50"
                    >
                      or open in builder
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* right — live builder */}
        <div className="lg:col-span-7">
          <Reveal delay={150} className="lg:sticky lg:top-24">
            <div className="border border-pine-700 bg-pine-900 p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <p className="flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-mustard-300">
                  <JarIcon className="h-5 w-5" /> Crate builder
                </p>
                <span
                  key={sel.length}
                  className="pop-in bg-dill-400/15 px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.18em] text-dill-300"
                >
                  {sel.length} / 5 jars
                </span>
              </div>

              {/* jar toggles */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {PRODUCTS.map((p) => {
                  const on = sel.includes(p.id);
                  return (
                    <button
                      key={p.id}
                      onClick={() => toggle(p.id)}
                      className={`group relative overflow-hidden border text-left transition-all duration-300 active:scale-[0.97] ${
                        on
                          ? "border-mustard-400 bg-pine-850 shadow-[0_0_0_1px_rgba(234,169,58,0.5)]"
                          : "border-pine-700 bg-pine-950/50 hover:border-pine-500"
                      }`}
                      aria-pressed={on}
                    >
                      <img
                        src={p.img}
                        alt={p.name}
                        className={`h-24 w-full object-cover transition-all duration-500 ${
                          on ? "opacity-100" : "opacity-55 group-hover:opacity-80"
                        }`}
                      />
                      <div className="flex items-center justify-between gap-2 p-3">
                        <div>
                          <p className="font-display text-[15px] font-bold leading-tight text-brine-50">
                            {p.name.split(" ")[0]}
                          </p>
                          <p className="font-mono text-[10px] text-brine-300/70">{fmt(p.price)}</p>
                        </div>
                        <span
                          className={`grid h-6 w-6 shrink-0 place-items-center border transition-all duration-300 ${
                            on
                              ? "border-mustard-400 bg-mustard-400 text-pine-950"
                              : "border-pine-600 text-transparent"
                          }`}
                        >
                          <CheckIcon className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* live totals */}
              <div className="mt-6 border-t border-dashed border-pine-700 pt-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brine-300/80">
                    {tier.label}
                  </p>
                  {saving > 0 && (
                    <span
                      key={saving}
                      className="pop-in bg-chili-500 px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-brine-50"
                    >
                      You save {fmt(saving)}
                    </span>
                  )}
                </div>

                <div className="mt-3 flex items-end justify-between gap-4">
                  <div>
                    {tier.pct > 0 && (
                      <p className="font-mono text-[12px] text-brine-300/60 line-through">{fmt(subtotal)}</p>
                    )}
                    <p className="font-mono text-4xl font-semibold tracking-tight text-mustard-300">
                      {sel.length ? fmt(total) : "—"}
                    </p>
                  </div>
                  <button
                    onClick={addCrate}
                    disabled={sel.length === 0}
                    className="flex items-center gap-2.5 bg-mustard-400 px-6 py-3.5 font-mono text-[11.5px] font-semibold uppercase tracking-[0.16em] text-pine-950 transition-all duration-300 hover:bg-mustard-300 hover:shadow-[0_14px_36px_-14px_rgba(234,169,58,0.6)] active:scale-95 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-mustard-400 disabled:hover:shadow-none"
                  >
                    <JarIcon className="h-4.5 w-4.5" />
                    {sel.length ? "Add crate to basket" : "Pick your jars"}
                  </button>
                </div>

                {/* discount ladder */}
                <div className="mt-5 grid grid-cols-5 gap-1.5">
                  {[
                    { n: 1, pct: "—" },
                    { n: 2, pct: "5%" },
                    { n: 3, pct: "10%" },
                    { n: 4, pct: "15%" },
                    { n: 5, pct: "Rs 6k" },
                  ].map(({ n, pct }) => (
                    <div
                      key={n}
                      className={`border-t-2 pt-2 text-center transition-all duration-500 ${
                        sel.length >= n ? "border-mustard-400" : "border-pine-700"
                      }`}
                    >
                      <p
                        className={`font-mono text-[10px] font-semibold ${
                          sel.length >= n ? "text-mustard-300" : "text-brine-300/40"
                        }`}
                      >
                        {pct}
                      </p>
                      <p className={`font-mono text-[9px] ${sel.length >= n ? "text-brine-200/70" : "text-brine-300/30"}`}>
                        {n} jar{n > 1 ? "s" : ""}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-brine-300/50">
                  2 jars 5% · 3 jars 10% · 4 jars 15% · all 5 at the flat Rs 6,000 martban price
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
