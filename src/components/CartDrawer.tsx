import { buildCheckoutMessage, useCart, waLink } from "../cart";
import { fmt } from "../data";
import { BagIcon, JarIcon, MinusIcon, PlusIcon, TruckIcon, WhatsAppIcon, XIcon } from "./Icons";

const FREE_SHIP = 5000;

export function CartDrawer() {
  const { lines, isOpen, setOpen, setQty, remove, subtotal, delivery, total } = useCart();

  const remaining = Math.max(0, FREE_SHIP - subtotal);
  const progress = Math.min(100, (subtotal / FREE_SHIP) * 100);

  const checkoutUrl = waLink(buildCheckoutMessage(lines, subtotal, delivery, total));

  return (
    <>
      {/* overlay */}
      <div
        className={`fixed inset-0 z-[80] bg-pine-950/70 backdrop-blur-[2px] transition-opacity duration-400 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden={!isOpen}
      />

      {/* drawer */}
      <aside
        className={`fixed inset-y-0 right-0 z-[85] flex w-full max-w-md flex-col border-l border-pine-700 bg-pine-900 shadow-[-30px_0_80px_-30px_rgba(0,0,0,0.8)] transition-transform duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Basket"
      >
        {/* header */}
        <div className="flex items-center justify-between border-b border-pine-700 px-6 py-5">
          <p className="flex items-center gap-3 font-display text-xl font-extrabold text-brine-50">
            <BagIcon className="h-5 w-5 text-mustard-300" />
            Your basket
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-brine-300/60">
              {lines.length ? `${lines.reduce((s, l) => s + l.qty, 0)} jar${lines.reduce((s, l) => s + l.qty, 0) > 1 ? "s" : ""}` : "empty"}
            </span>
          </p>
          <button
            onClick={() => setOpen(false)}
            className="grid h-10 w-10 place-items-center border border-pine-600 text-brine-100 transition-all duration-300 hover:rotate-90 hover:border-mustard-400 hover:text-mustard-300"
            aria-label="Close basket"
          >
            <XIcon className="h-4.5 w-4.5" />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-8 text-center">
            <span className="grid h-20 w-20 place-items-center border-2 border-dashed border-pine-600 text-pine-500">
              <JarIcon className="h-9 w-9" />
            </span>
            <div>
              <p className="font-display text-2xl font-bold text-brine-100">The crate is empty.</p>
              <p className="mt-2 text-[13.5px] leading-relaxed text-brine-300/70">
                Five recipes are resting on the terrace, waiting to be spooned over daal chawal.
              </p>
            </div>
            <a
              href="#shop"
              onClick={() => setOpen(false)}
              className="bg-mustard-400 px-6 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-pine-950 transition-all duration-300 hover:bg-mustard-300 active:scale-95"
            >
              Browse the shelf
            </a>
          </div>
        ) : (
          <>
            {/* free shipping meter */}
            <div className="border-b border-pine-700 px-6 py-4">
              <p className="flex items-center gap-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-brine-200/80">
                <TruckIcon className="h-4 w-4 text-dill-400" />
                {remaining > 0 ? (
                  <>
                    <span className="text-mustard-300">{fmt(remaining)}</span> away from free delivery
                  </>
                ) : (
                  <span className="text-dill-300">Free delivery unlocked — shukriya!</span>
                )}
              </p>
              <div className="mt-2.5 h-1.5 w-full overflow-hidden bg-pine-800">
                <div
                  className={`h-full transition-all duration-700 ease-out ${remaining > 0 ? "bg-mustard-400" : "bg-dill-400"}`}
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* lines */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="space-y-4">
                {lines.map((l) => (
                  <li
                    key={l.key}
                    className="pop-in flex gap-4 border border-pine-700/80 bg-pine-950/50 p-3.5"
                  >
                    {l.img ? (
                      <img src={l.img} alt={l.name} className="h-16 w-16 shrink-0 border border-pine-700 object-cover" />
                    ) : (
                      <span className="grid h-16 w-16 shrink-0 place-items-center border border-pine-700 bg-pine-850 text-mustard-300">
                        <JarIcon className="h-7 w-7" />
                      </span>
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="truncate font-display text-[15px] font-bold text-brine-50">{l.name}</p>
                          {l.detail && (
                            <p className="truncate font-mono text-[10px] uppercase tracking-[0.14em] text-brine-300/60">
                              {l.detail}
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => remove(l.key)}
                          className="shrink-0 text-brine-300/50 transition-colors hover:text-chili-400"
                          aria-label={`Remove ${l.name}`}
                        >
                          <XIcon className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="mt-2.5 flex items-center justify-between">
                        <div className="flex items-center border border-pine-600">
                          <button
                            onClick={() => setQty(l.key, l.qty - 1)}
                            className="grid h-8 w-8 place-items-center text-brine-200 transition-colors hover:bg-pine-800 hover:text-mustard-300"
                            aria-label="Decrease"
                          >
                            <MinusIcon className="h-3.5 w-3.5" />
                          </button>
                          <span className="w-8 text-center font-mono text-[12.5px] font-semibold text-brine-50">
                            {l.qty}
                          </span>
                          <button
                            onClick={() => setQty(l.key, l.qty + 1)}
                            className="grid h-8 w-8 place-items-center text-brine-200 transition-colors hover:bg-pine-800 hover:text-mustard-300"
                            aria-label="Increase"
                          >
                            <PlusIcon className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <p className="font-mono text-[14px] font-semibold text-mustard-300">
                          {fmt(l.price * l.qty)}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* totals + checkout */}
            <div className="border-t border-pine-700 px-6 py-5">
              <div className="space-y-2 font-mono text-[12.5px] text-brine-200/80">
                <p className="flex justify-between">
                  <span className="uppercase tracking-[0.14em] text-brine-300/60">Subtotal</span>
                  {fmt(subtotal)}
                </p>
                <p className="flex justify-between">
                  <span className="uppercase tracking-[0.14em] text-brine-300/60">Delivery</span>
                  {delivery === 0 ? <span className="text-dill-300">FREE</span> : fmt(delivery)}
                </p>
                <p className="flex justify-between border-t border-dashed border-pine-700 pt-3 text-base font-semibold text-brine-50">
                  <span className="uppercase tracking-[0.14em]">Total</span>
                  <span className="text-mustard-300">{fmt(total)}</span>
                </p>
              </div>
              <a
                href={checkoutUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 flex w-full items-center justify-center gap-3 bg-mustard-400 py-4 font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-pine-950 transition-all duration-300 hover:bg-mustard-300 hover:shadow-[0_16px_40px_-14px_rgba(234,169,58,0.6)] active:scale-[0.98]"
              >
                <WhatsAppIcon className="h-4.5 w-4.5" /> Checkout on WhatsApp
              </a>
              <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-brine-300/50">
                Cash on delivery · sealed wooden crate · ships in 2–4 days
              </p>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
