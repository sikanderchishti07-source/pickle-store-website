import { useState, type FormEvent } from "react";
import { CITIES } from "../data";
import { useCart, waLink } from "../cart";
import { ArrowIcon, ClockIcon, JarIcon, WhatsAppIcon } from "./Icons";

export function Footer() {
  const { notify } = useCart();
  const [email, setEmail] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      notify("Enter a valid email to join the batch list");
      return;
    }
    setEmail("");
    notify("Shukriya! You're on the list for Batch № 045.");
  };

  return (
    <footer className="relative overflow-hidden bg-pine-950">
      {/* giant outlined wordmark */}
      <div className="pointer-events-none select-none overflow-hidden">
        <p className="translate-y-6 whitespace-nowrap text-center font-display text-[16.5vw] font-extrabold leading-[0.85] tracking-tight text-transparent [-webkit-text-stroke:1.5px_#274834] lg:text-[13.5rem]">
          PICKLE PANTRY
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-10 pt-4 lg:px-8">
        <div className="grid gap-12 border-t border-pine-800 pt-14 md:grid-cols-2 lg:grid-cols-12">
          {/* brand */}
          <div className="lg:col-span-4">
            <a href="#top" className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center bg-mustard-400 text-pine-950">
                <JarIcon className="h-6 w-6" />
              </span>
              <span className="leading-none">
                <span className="font-display text-lg font-extrabold text-brine-50">Pickle Pantry</span>
                <span className="mt-1 block font-mono text-[9.5px] uppercase tracking-[0.28em] text-dill-300">
                  Achar · Lahore · est. 1974
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-[13.5px] leading-relaxed text-brine-200/70">
              Small-batch Lahori achar, sun-cured on a terrace and aged 21 days in cold-pressed
              mustard oil. Hand-cut. Sun-cured. Sealed with <em className="text-mustard-300">sabar</em>.
            </p>
            <a
              href={waLink("Hi Pickle Pantry! I have a question.")}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2.5 border border-pine-600 px-4 py-2.5 font-mono text-[10.5px] font-medium uppercase tracking-[0.16em] text-dill-300 transition-all duration-300 hover:border-dill-400 hover:bg-dill-400/10"
            >
              <WhatsAppIcon className="h-4 w-4" /> +92 308 449 2309
            </a>
          </div>

          {/* links */}
          <div className="lg:col-span-2">
            <p className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.26em] text-mustard-300">
              The pantry
            </p>
            <ul className="mt-5 space-y-3">
              {[
                ["The Shelf", "#shop"],
                ["Crates & bundles", "#bundles"],
                ["The Method", "#process"],
                ["Since 1974", "#story"],
                ["Reviews", "#reviews"],
                ["FAQ", "#faq"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="group flex items-center gap-2 text-[13.5px] text-brine-200/80 transition-colors hover:text-mustard-300"
                  >
                    <span className="h-px w-0 bg-mustard-400 transition-all duration-300 group-hover:w-4" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* delivery */}
          <div className="lg:col-span-3">
            <p className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.26em] text-mustard-300">
              We deliver to
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {CITIES.map((c) => (
                <span
                  key={c}
                  className="border border-pine-700 px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-brine-200/80 transition-colors hover:border-mustard-500 hover:text-mustard-300"
                >
                  {c}
                </span>
              ))}
            </div>
            <p className="mt-5 flex items-start gap-2.5 text-[12.5px] leading-relaxed text-brine-200/60">
              <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-dill-400" />
              2–4 working days nationwide · Rs 200 flat · free over Rs 5,000 · cash on delivery
            </p>
          </div>

          {/* batch list */}
          <div className="lg:col-span-3">
            <p className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.26em] text-mustard-300">
              The batch list
            </p>
            <p className="mt-5 text-[13.5px] leading-relaxed text-brine-200/70">
              One message when a batch comes off the terrace — before it sells out. About once a
              month, never more.
            </p>
            <form onSubmit={submit} className="mt-5 flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full min-w-0 border border-pine-700 bg-pine-900 px-4 py-3 font-mono text-[12.5px] text-brine-50 outline-none transition-colors focus:border-mustard-400"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="grid shrink-0 place-items-center bg-mustard-400 px-4 text-pine-950 transition-all duration-300 hover:bg-mustard-300 active:scale-95"
                aria-label="Join the batch list"
              >
                <ArrowIcon className="h-4.5 w-4.5" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-pine-800 pt-7 sm:flex-row">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-brine-300/50">
            © 2026 Pickle Pantry — Johar Town, Lahore
          </p>
          <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-brine-300/50">
            40 jars a batch · 0 preservatives · 1 recipe book
          </p>
        </div>
      </div>
    </footer>
  );
}
