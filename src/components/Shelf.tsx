import { useState } from "react";
import { fmt, PRODUCTS, type Heat, type Product } from "../data";
import { useCart } from "../cart";
import { ArrowIcon, JarIcon, PlusIcon } from "./Icons";
import { ChiliMeter, Eyebrow, Reveal } from "./ui";

const FILTERS: Array<"All" | Heat> = ["All", "Mild", "Medium", "Fiery"];

function ProductCard({
  p,
  onDetails,
  index,
}: {
  p: Product;
  onDetails: (p: Product) => void;
  index: number;
}) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    add({ key: p.id, name: `${p.name} (1 kg)`, price: p.price, img: p.img });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1300);
  };

  return (
    <Reveal delay={(index % 3) * 110} className="h-full">
      <article
        className="group relative flex h-full flex-col overflow-hidden rounded-[4px] border border-pine-900/12 bg-[#fcfaf1] shadow-[0_2px_0_rgba(18,32,25,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_50px_-22px_rgba(18,32,25,0.45)]"
        style={{ borderTop: `5px solid ${p.tint}` }}
      >
        {/* image */}
        <button
          onClick={() => onDetails(p)}
          className="relative block w-full cursor-pointer overflow-hidden text-left"
          aria-label={`View ${p.name} details`}
        >
          <img
            src={p.img}
            alt={`Jar of ${p.name}`}
            loading="lazy"
            className="aspect-square w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] group-hover:rotate-[0.6deg]"
          />
          {p.tag && (
            <span
              className="absolute left-4 top-4 px-2.5 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-pine-950"
              style={{ backgroundColor: p.tint }}
            >
              {p.tag}
            </span>
          )}
          <span className="absolute bottom-4 right-4 translate-y-3 border border-brine-50/40 bg-pine-950/85 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-brine-50 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
            Quick view
          </span>
        </button>

        {/* body */}
        <div className="flex flex-1 flex-col p-5">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.26em]" style={{ color: p.tint }}>
            {p.urdu}
          </p>
          <div className="mt-1.5 flex items-start justify-between gap-3">
            <h3 className="font-display text-[1.45rem] font-bold leading-tight text-pine-900">{p.name}</h3>
            <ChiliMeter level={p.heatLevel} className="mt-1.5 shrink-0" />
          </div>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {p.notes.map((n) => (
              <span
                key={n}
                className="rounded-full border border-pine-900/15 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-pine-700"
              >
                {n}
              </span>
            ))}
          </div>

          <p className="mt-3 line-clamp-2 text-[13.5px] leading-relaxed text-pine-700/85">{p.desc}</p>

          <div className="mt-auto flex items-end justify-between gap-3 pt-5">
            <div>
              <p className="font-mono text-lg font-semibold text-pine-900">{fmt(p.price)}</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-pine-700/60">per 1 kg jar</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => onDetails(p)}
                className="border border-pine-900/20 px-3.5 py-2.5 font-mono text-[10.5px] font-medium uppercase tracking-[0.12em] text-pine-800 transition-all duration-300 hover:border-pine-900 hover:bg-pine-900 hover:text-brine-50 active:scale-95"
              >
                Details
              </button>
              <button
                onClick={handleAdd}
                className={`flex items-center gap-1.5 px-4 py-2.5 font-mono text-[10.5px] font-semibold uppercase tracking-[0.12em] text-pine-950 transition-all duration-300 active:scale-95 ${
                  added ? "bg-dill-400" : "bg-mustard-400 hover:bg-mustard-300"
                }`}
              >
                {added ? "Added ✓" : <><PlusIcon className="h-3.5 w-3.5" /> Add</>}
              </button>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Shelf({ onDetails }: { onDetails: (p: Product) => void }) {
  const [filter, setFilter] = useState<"All" | Heat>("All");
  const list = filter === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.heat === filter);

  return (
    <section id="shop" className="relative bg-brine-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Eyebrow tone="text-chili-500">The full pantry</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-pine-900 sm:text-5xl lg:text-6xl">
              <span className="mask-line">
                <span>Every jar we make.</span>
              </span>
              <span className="mask-line" style={{ "--rd": "120ms" } as React.CSSProperties}>
                <span className="text-pine-600">Nothing we don't.</span>
              </span>
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 font-mono text-[10.5px] uppercase tracking-[0.22em] text-pine-700/60">
              Filter by heat
            </span>
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`border px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.14em] transition-all duration-300 active:scale-95 ${
                  filter === f
                    ? "border-pine-900 bg-pine-900 text-brine-50"
                    : "border-pine-900/25 text-pine-800 hover:border-pine-900/60"
                }`}
              >
                {f}
                <span className="ml-1.5 opacity-50">
                  {f === "All" ? PRODUCTS.length : PRODUCTS.filter((p) => p.heat === f).length}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {list.map((p, i) => (
            <ProductCard key={p.id} p={p} onDetails={onDetails} index={i} />
          ))}

          {/* crate CTA tile to complete the grid */}
          <Reveal delay={(list.length % 3) * 110} className="h-full">
            <a
              href="#bundles"
              className="group flex h-full min-h-[320px] flex-col justify-between border-2 border-dashed border-pine-900/30 bg-brine-100/60 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-pine-900 hover:bg-mustard-400/15"
            >
              <div>
                <p className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-chili-500">
                  Can't decide?
                </p>
                <p className="mt-3 font-display text-3xl font-extrabold leading-tight text-pine-900">
                  Build your own crate &amp; save up to Rs 950.
                </p>
                <p className="mt-3 max-w-xs text-[13.5px] leading-relaxed text-pine-700/85">
                  Pick any jars — discounts stack automatically the fuller the crate gets. All five
                  jars hit the flat martban price.
                </p>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-3 font-mono text-[11.5px] font-semibold uppercase tracking-[0.18em] text-pine-900">
                  <JarIcon className="h-5 w-5" /> Open the crate builder
                </span>
                <span className="grid h-11 w-11 place-items-center bg-pine-900 text-brine-50 transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-chili-500">
                  <ArrowIcon className="h-4.5 w-4.5" />
                </span>
              </div>
            </a>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <p className="mt-10 text-center font-mono text-[11px] uppercase tracking-[0.22em] text-pine-700/60">
            All jars 1 kg · sealed the same week they ship · delivery Rs 200 nationwide · free over Rs 5,000
          </p>
        </Reveal>
      </div>
    </section>
  );
}
