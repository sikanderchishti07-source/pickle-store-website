import { useState } from "react";
import { CartProvider, useCart } from "./cart";
import type { Product } from "./data";
import { TICKER_ITEMS } from "./data";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Ticker } from "./components/Ticker";
import { Shelf } from "./components/Shelf";
import { Bundles } from "./components/Bundles";
import { Process } from "./components/Process";
import { Story } from "./components/Story";
import { Reviews } from "./components/Reviews";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";
import { CartDrawer } from "./components/CartDrawer";
import { ProductModal } from "./components/ProductModal";
import { CheckIcon } from "./components/Icons";

function Toast() {
  const { toast } = useCart();
  if (!toast) return null;
  return (
    <div
      key={toast}
      className="toast-in fixed bottom-6 left-1/2 z-[100] flex max-w-[92vw] items-center gap-3 border border-mustard-500/50 bg-pine-950 px-5 py-3.5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]"
      role="status"
    >
      <span className="grid h-6 w-6 shrink-0 place-items-center bg-dill-400 text-pine-950">
        <CheckIcon className="h-3.5 w-3.5" />
      </span>
      <p className="truncate font-mono text-[12px] font-medium text-brine-50">{toast}</p>
    </div>
  );
}

function Site() {
  const [quickView, setQuickView] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-pine-950 font-body text-brine-50">
      <Nav />
      <main>
        <Hero />
        <Ticker items={TICKER_ITEMS} className="bg-mustard-400 text-pine-950" />
        <Shelf onDetails={setQuickView} />
        <Bundles />
        <Ticker
          items={["Sun-cured", "Hand-packed to order", "Aged 21 days", "Small batches of 40", "No vinegar, ever"]}
          className="border-pine-700 bg-pine-900 text-dill-300"
          duration={28}
        />
        <Process />
        <Story />
        <Reviews />
        <Faq />
      </main>
      <Footer />

      <CartDrawer />
      <ProductModal product={quickView} onClose={() => setQuickView(null)} />
      <Toast />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <Site />
    </CartProvider>
  );
}
