import { useEffect, useState } from "react";
import { useCart } from "../cart";
import { BagIcon, JarIcon, XIcon } from "./Icons";

const LINKS = [
  { label: "The Shelf", href: "#shop" },
  { label: "Crates", href: "#bundles" },
  { label: "The Method", href: "#process" },
  { label: "Since 1974", href: "#story" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  const { count, setOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || menu
          ? "border-b border-pine-700/70 bg-pine-950/95 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.8)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 lg:px-8">
        {/* brand */}
        <a href="#top" className="group flex items-center gap-3" onClick={() => setMenu(false)}>
          <span className="grid h-11 w-11 place-items-center bg-mustard-400 text-pine-950 transition-transform duration-300 group-hover:-rotate-6">
            <JarIcon className="h-6 w-6" />
          </span>
          <span className="leading-none">
            <span className="font-display text-lg font-extrabold tracking-tight text-brine-50">
              Pickle Pantry
            </span>
            <span className="mt-1 block font-mono text-[9.5px] uppercase tracking-[0.28em] text-dill-300">
              Achar · Lahore · est. 1974
            </span>
          </span>
        </a>

        {/* desktop links */}
        <nav className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-brine-200 transition-colors hover:text-mustard-300"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-mustard-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href="#faq"
            className="hidden items-center gap-2 border border-pine-600 px-4 py-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-dill-300 transition-all duration-300 hover:border-dill-400 hover:bg-dill-400/10 sm:flex"
          >
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-mustard-400" />
            Batch № 044 resting
          </a>
          <button
            onClick={() => setOpen(true)}
            className="relative flex items-center gap-2.5 bg-mustard-400 px-4 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-pine-950 transition-all duration-300 hover:bg-mustard-300 active:scale-95"
            aria-label="Open basket"
          >
            <BagIcon className="h-4.5 w-4.5" />
            <span className="hidden sm:inline">Basket</span>
            {count > 0 && (
              <span
                key={count}
                className="pop-in grid h-5 min-w-5 place-items-center rounded-full bg-pine-950 px-1 font-mono text-[10px] font-semibold text-mustard-300"
              >
                {count}
              </span>
            )}
          </button>
          {/* mobile hamburger */}
          <button
            onClick={() => setMenu((m) => !m)}
            className="grid h-11 w-11 place-items-center border border-pine-600 text-brine-100 transition-colors hover:border-mustard-400 hover:text-mustard-300 lg:hidden"
            aria-label="Toggle menu"
          >
            {menu ? (
              <XIcon className="h-5 w-5" />
            ) : (
              <span className="flex flex-col gap-1.5">
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-3.5 bg-current" />
              </span>
            )}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {menu && (
        <nav className="fade-in border-t border-pine-800 bg-pine-950/98 px-6 py-5 lg:hidden">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenu(false)}
              className="flex items-center justify-between border-b border-pine-800/70 py-3.5 font-display text-xl font-bold text-brine-100 transition-colors hover:text-mustard-300"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              {l.label}
              <span className="font-mono text-[10px] tracking-[0.25em] text-pine-500">0{i + 1}</span>
            </a>
          ))}
          <a
            href="#faq"
            onClick={() => setMenu(false)}
            className="mt-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-dill-300"
          >
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-mustard-400" />
            Batch № 044 is resting — ships Monday
          </a>
        </nav>
      )}
    </header>
  );
}
