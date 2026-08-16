import { useEffect, useState, type CSSProperties } from "react";
import { fmt, IMG, PRODUCTS, type Heat } from "../data";
import { useCart } from "../cart";
import { usePrefersReducedMotion } from "../hooks";
import { ArrowIcon, ChiliIcon, JarIcon, PlusIcon } from "./Icons";
import { Reveal, Stamp } from "./ui";

const WORDS = PRODUCTS.map((p) => ({
  w: p.id === "chilli" ? "CHILLI" : p.name.split(" ")[0].toUpperCase(),
  tint: p.tint,
}));

const HEAT_PICK: Record<Heat, string> = {
  Mild: "lemon",
  Medium: "mango",
  Fiery: "chilli",
};

export function Hero() {
  const [i, setI] = useState(0);
  const reduced = usePrefersReducedMotion();
  const [heat, setHeat] = useState<Heat>("Fiery");
  const { add } = useCart();

  useEffect(() => {
    if (reduced) return;
    const t = window.setInterval(() => setI((v) => (v + 1) % WORDS.length), 2300);
    return () => window.clearInterval(t);
  }, [reduced]);

  const pick = PRODUCTS.find((p) => p.id === HEAT_PICK[heat])!;

  return (
    <section id="top" className="relative overflow-hidden bg-pine-900 pt-28 lg:pt-36">
      {/* ambient glows */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(52rem_36rem_at_82%_-8%,rgba(234,169,58,0.13),transparent_62%),radial-gradient(44rem_30rem_at_-12%_88%,rgba(146,172,95,0.12),transparent_60%)]" />
      {/* giant watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display text-[24vw] font-extrabold leading-none tracking-tight text-pine-800/45 lg:text-[19rem]"
      >
        ACHAR
      </span>

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pb-20 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pb-28">
        {/* ------- left : words ------- */}
        <div className="flex flex-col justify-center lg:col-span-7">
          <p className="fade-in flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-[0.3em] text-dill-300">
            <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-mustard-400" />
            Est. 1974 · Johar Town, Lahore
            <span className="hidden h-px w-10 bg-pine-600 sm:block" />
            <span className="text-mustard-300">Batch № 044 now resting</span>
          </p>

          <Reveal>
            <h1 className="mt-7 font-display font-extrabold leading-[0.95] tracking-tight text-brine-50">
              <span className="mask-line text-[15vw] sm:text-6xl lg:text-[4.6rem]">
                <span>Achar for the</span>
              </span>
              <span className="mask-line text-[15vw] sm:text-6xl lg:text-[4.6rem]">
                <span>
                  <span
                    key={i}
                    className="word-swap inline-block"
                    style={{ color: WORDS[i].tint } as CSSProperties}
                  >
                    {WORDS[i].w}
                  </span>{" "}
                  lovers.
                </span>
              </span>
            </h1>
          </Reveal>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-brine-200/90 sm:text-base">
            Hand-cut at dawn, salted overnight, sun-cured for three days on a Lahore terrace and
            aged <strong className="font-semibold text-brine-50">21 days</strong> in cold-pressed
            mustard oil. Five recipes. Forty jars a batch.{" "}
            <strong className="font-semibold text-brine-50">Zero shortcuts since 1974.</strong>
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href="#shop"
              className="group flex items-center gap-3 bg-mustard-400 px-6 py-3.5 font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-pine-950 transition-all duration-300 hover:bg-mustard-300 hover:shadow-[0_14px_36px_-12px_rgba(234,169,58,0.55)] active:scale-95"
            >
              Shop the shelf
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#bundles"
              className="flex items-center gap-3 border border-pine-600 px-6 py-3.5 font-mono text-[12px] font-medium uppercase tracking-[0.18em] text-brine-100 transition-all duration-300 hover:border-dill-400 hover:bg-dill-400/10 hover:text-dill-200 active:scale-95"
            >
              <JarIcon className="h-4.5 w-4.5" />
              Build a crate
            </a>
          </div>

          {/* heat picker */}
          <div className="mt-10 max-w-xl border border-pine-700 bg-pine-950/60 p-5">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-brine-300/80">
              How brave is your plate?
            </p>
            <div className="mt-3.5 grid grid-cols-3 gap-2">
              {(["Mild", "Medium", "Fiery"] as Heat[]).map((h, idx) => (
                <button
                  key={h}
                  onClick={() => setHeat(h)}
                  className={`flex items-center justify-center gap-1.5 border px-2 py-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] transition-all duration-300 active:scale-95 ${
                    heat === h
                      ? "border-mustard-400 bg-mustard-400 text-pine-950"
                      : "border-pine-700 text-brine-200 hover:border-pine-500 hover:text-brine-50"
                  }`}
                >
                  <span className="flex">
                    {Array.from({ length: idx + 1 }).map((_, c) => (
                      <ChiliIcon key={c} className="h-3.5 w-3.5" />
                    ))}
                  </span>
                  {h}
                </button>
              ))}
            </div>
            <div key={pick.id} className="pop-in mt-4 flex items-center gap-4">
              <img
                src={pick.img}
                alt={pick.name}
                className="h-16 w-16 shrink-0 border border-pine-700 object-cover"
              />
              <div className="min-w-0 flex-1">
                <p className="font-display text-lg font-bold leading-tight text-brine-50">{pick.name}</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-brine-300/80">
                  {pick.urdu} · {fmt(pick.price)} / kg
                </p>
              </div>
              <button
                onClick={() => add({ key: pick.id, name: `${pick.name} (1 kg)`, price: pick.price, img: pick.img })}
                className="flex shrink-0 items-center gap-2 border border-mustard-400 px-4 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-mustard-300 transition-all duration-300 hover:bg-mustard-400 hover:text-pine-950 active:scale-95"
              >
                <PlusIcon className="h-3.5 w-3.5" /> Add
              </button>
            </div>
          </div>
        </div>

        {/* ------- right : the jar ------- */}
        <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:mt-2">
          <div className="relative overflow-hidden rounded-t-[999px] rounded-b-md border border-pine-600/80 p-2">
            <div className="overflow-hidden rounded-t-[999px] rounded-b-sm">
              <img
                src={IMG.hero}
                alt="Five jars of homemade achar on a green table with whole spices"
                className="kenburns aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>

          {/* floating chips */}
          <div
            className="floaty absolute -left-3 top-16 -rotate-6 bg-mustard-400 px-3.5 py-2 font-mono text-[10.5px] font-semibold uppercase tracking-[0.18em] text-pine-950 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] sm:-left-8"
            style={{ "--rot": "-6deg" } as CSSProperties}
          >
            Batch № 044
          </div>
          <div
            className="floaty absolute -right-2 top-1/3 rotate-3 border border-pine-600 bg-pine-950/90 px-3.5 py-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-dill-300 sm:-right-7"
            style={{ "--rot": "3deg", animationDelay: "0.8s" } as CSSProperties}
          >
            0 preservatives
          </div>
          <div
            className="floaty absolute -bottom-4 left-8 -rotate-2 border border-mustard-500/40 bg-pine-850 px-3.5 py-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-mustard-300"
            style={{ "--rot": "-2deg", animationDelay: "1.6s" } as CSSProperties}
          >
            Aged 21 days · 1 kg jars
          </div>

          <Stamp
            text="SMALL BATCH · SUN-CURED · LAHORE · SINCE 1974 ·"
            className="absolute -left-10 bottom-24 hidden h-28 w-28 sm:block lg:-left-14"
          />
        </div>
      </div>
    </section>
  );
}
