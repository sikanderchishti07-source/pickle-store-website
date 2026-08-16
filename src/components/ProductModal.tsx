import { useEffect, useState } from "react";
import { fmt, type Product } from "../data";
import { useCart } from "../cart";
import { CheckIcon, JarIcon, MinusIcon, PlusIcon, XIcon } from "./Icons";
import { ChiliMeter } from "./ui";

export function ProductModal({ product, onClose }: { product: Product | null; onClose: () => void }) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);

  useEffect(() => {
    setQty(1);
  }, [product]);

  useEffect(() => {
    if (!product) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  if (!product) return null;

  const handleAdd = () => {
    add({ key: product.id, name: `${product.name} (1 kg)`, price: product.price, img: product.img }, qty);
    onClose();
  };

  return (
    <div
      className="fade-in fixed inset-0 z-[90] grid place-items-center overflow-y-auto bg-pine-950/85 p-4 backdrop-blur-[3px] sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={product.name}
    >
      <div
        className="modal-in relative my-8 grid w-full max-w-4xl overflow-hidden rounded-[6px] border border-pine-700 bg-pine-900 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)] md:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center border border-pine-600 bg-pine-950/80 text-brine-100 transition-all duration-300 hover:rotate-90 hover:border-mustard-400 hover:text-mustard-300"
          aria-label="Close"
        >
          <XIcon className="h-4.5 w-4.5" />
        </button>

        {/* image side */}
        <div className="relative overflow-hidden" style={{ borderTop: `6px solid ${product.tint}` }}>
          <img src={product.img} alt={`Jar of ${product.name}`} className="h-64 w-full object-cover md:h-full" />
          <span className="absolute bottom-4 left-4 bg-pine-950/85 px-3 py-2 font-mono text-[10.5px] uppercase tracking-[0.2em] text-mustard-300">
            {product.batch}
          </span>
        </div>

        {/* detail side */}
        <div className="flex flex-col p-7 md:p-9">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em]" style={{ color: product.tint }}>
            {product.urdu}
          </p>
          <h3 className="mt-2 font-display text-3xl font-extrabold leading-tight text-brine-50 md:text-4xl">
            {product.name}
          </h3>
          <div className="mt-3 flex items-center gap-3">
            <ChiliMeter level={product.heatLevel} />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-brine-300">
              {product.heat} · 1 kg jar
            </span>
          </div>

          <p className="mt-4 text-[14px] leading-relaxed text-brine-200/90">{product.desc}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {product.notes.map((n) => (
              <span
                key={n}
                className="rounded-full border border-pine-600 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-brine-200"
              >
                {n}
              </span>
            ))}
          </div>

          <div className="mt-5 border-t border-pine-700 pt-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-brine-300/70">In the jar</p>
            <p className="mt-1.5 text-[13px] leading-relaxed text-brine-200/80">{product.ingredients}</p>
          </div>

          <div className="mt-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-brine-300/70">
              Best spooned over
            </p>
            <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1.5">
              {product.pairs.map((p) => (
                <li key={p} className="flex items-center gap-2 text-[13px] text-brine-100">
                  <CheckIcon className="h-3.5 w-3.5 text-dill-400" /> {p}
                </li>
              ))}
            </ul>
          </div>

          {/* purchase row */}
          <div className="mt-auto flex items-center justify-between gap-4 border-t border-pine-700 pt-5">
            <div>
              <p className="font-mono text-2xl font-semibold text-mustard-300">{fmt(product.price * qty)}</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brine-300/70">
                {fmt(product.price)} each
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center border border-pine-600">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="grid h-11 w-10 place-items-center text-brine-200 transition-colors hover:bg-pine-800 hover:text-mustard-300"
                  aria-label="Decrease quantity"
                >
                  <MinusIcon className="h-4 w-4" />
                </button>
                <span className="w-9 text-center font-mono text-sm font-semibold text-brine-50">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="grid h-11 w-10 place-items-center text-brine-200 transition-colors hover:bg-pine-800 hover:text-mustard-300"
                  aria-label="Increase quantity"
                >
                  <PlusIcon className="h-4 w-4" />
                </button>
              </div>
              <button
                onClick={handleAdd}
                className="flex items-center gap-2 bg-mustard-400 px-5 py-3 font-mono text-[11.5px] font-semibold uppercase tracking-[0.14em] text-pine-950 transition-all duration-300 hover:bg-mustard-300 active:scale-95"
              >
                <JarIcon className="h-4.5 w-4.5" /> Add to basket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
