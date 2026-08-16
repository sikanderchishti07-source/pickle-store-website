import { useState } from "react";
import { FAQS } from "../data";
import { waLink } from "../cart";
import { ClockIcon, PlusIcon, WhatsAppIcon } from "./Icons";
import { Eyebrow, Reveal } from "./ui";

export function Faq() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="faq" className="relative bg-brine-100 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-12 lg:gap-10 lg:px-8">
        {/* sticky left */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <Eyebrow tone="text-chili-500">Good to know</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-pine-900 sm:text-5xl">
                <span className="mask-line"><span>Questions we</span></span>
                <span className="mask-line" style={{ "--rd": "120ms" } as React.CSSProperties}>
                  <span>get asked <span className="text-chili-500">weekly.</span></span>
                </span>
              </h2>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-9 border border-pine-800 bg-pine-900 p-7 text-brine-50 shadow-[0_26px_60px_-30px_rgba(18,32,25,0.7)]">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-mustard-300">
                  Still deciding?
                </p>
                <p className="mt-3 font-display text-2xl font-bold leading-snug">
                  Tell us how you eat — we'll point you at the right jar.
                </p>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-brine-200/80">
                  Weddings, corporate crates and &ldquo;my ammi is very particular&rdquo; requests
                  all welcome.
                </p>
                <a
                  href={waLink("Hi Pickle Pantry! I have a question about your pickles.")}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 flex w-fit items-center gap-2.5 bg-mustard-400 px-5 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-pine-950 transition-all duration-300 hover:bg-mustard-300 active:scale-95"
                >
                  <WhatsAppIcon className="h-4 w-4" /> WhatsApp the pantry
                </a>
                <p className="mt-5 flex items-center gap-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-brine-300/70">
                  <ClockIcon className="h-4 w-4 text-dill-400" /> Replies 10am – 10pm, seven days
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* accordion */}
        <div className="lg:col-span-7">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 80}>
                <div className={`border-t border-pine-900/15 ${i === FAQS.length - 1 ? "border-b" : ""}`}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-baseline gap-5">
                      <span className="font-mono text-[11px] font-semibold tracking-[0.2em] text-chili-500">
                        0{i + 1}
                      </span>
                      <span
                        className={`font-display text-xl font-bold leading-snug transition-colors duration-300 sm:text-[1.45rem] ${
                          isOpen ? "text-chili-600" : "text-pine-900 group-hover:text-chili-500"
                        }`}
                      >
                        {f.q}
                      </span>
                    </span>
                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center border transition-all duration-400 ${
                        isOpen
                          ? "rotate-45 border-chili-500 bg-chili-500 text-brine-50"
                          : "border-pine-900/25 text-pine-800 group-hover:border-pine-900"
                      }`}
                    >
                      <PlusIcon className="h-4 w-4" />
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-7 pl-0 text-[14.5px] leading-relaxed text-pine-700/90 sm:pl-[3.4rem]">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
