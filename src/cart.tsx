import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

export interface CartLine {
  key: string;
  name: string;
  detail?: string;
  price: number;
  qty: number;
  img?: string;
}

interface CartState {
  lines: CartLine[];
  isOpen: boolean;
  toast: string | null;
  count: number;
  subtotal: number;
  delivery: number;
  total: number;
  add: (line: Omit<CartLine, "qty">, qty?: number) => void;
  setQty: (key: string, qty: number) => void;
  remove: (key: string) => void;
  setOpen: (v: boolean) => void;
  notify: (msg: string) => void;
}

const Ctx = createContext<CartState | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const timer = useRef<number | undefined>(undefined);

  const notify = useCallback((msg: string) => {
    setToast(msg);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setToast(null), 2600);
  }, []);

  const add = useCallback(
    (line: Omit<CartLine, "qty">, qty = 1) => {
      setLines((ls) => {
        const existing = ls.find((l) => l.key === line.key);
        if (existing) {
          return ls.map((l) => (l.key === line.key ? { ...l, qty: l.qty + qty } : l));
        }
        return [...ls, { ...line, qty }];
      });
      notify(`${line.name} — added to basket`);
    },
    [notify]
  );

  const setQty = useCallback((key: string, qty: number) => {
    setLines((ls) =>
      qty <= 0 ? ls.filter((l) => l.key !== key) : ls.map((l) => (l.key === key ? { ...l, qty } : l))
    );
  }, []);

  const remove = useCallback((key: string) => {
    setLines((ls) => ls.filter((l) => l.key !== key));
  }, []);

  const subtotal = useMemo(() => lines.reduce((s, l) => s + l.price * l.qty, 0), [lines]);
  const count = useMemo(() => lines.reduce((s, l) => s + l.qty, 0), [lines]);
  const delivery = lines.length === 0 || subtotal >= 5000 ? 0 : 200;
  const total = subtotal + delivery;

  return (
    <Ctx.Provider
      value={{ lines, isOpen, toast, count, subtotal, delivery, total, add, setQty, remove, setOpen, notify }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}

export const WHATSAPP_NUMBER = "923084492309";

export function waLink(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function buildCheckoutMessage(lines: CartLine[], subtotal: number, delivery: number, total: number) {
  const rows = lines.map((l) => `• ${l.name} x${l.qty} — Rs ${(l.price * l.qty).toLocaleString("en-US")}`);
  return [
    "Hi Pickle Pantry! I'd like to order:",
    "",
    ...rows,
    "",
    `Subtotal: Rs ${subtotal.toLocaleString("en-US")}`,
    `Delivery: ${delivery === 0 ? "FREE" : "Rs " + delivery}`,
    `Total: Rs ${total.toLocaleString("en-US")}`,
    "",
    "Name:",
    "Address:",
    "City:",
  ].join("\n");
}
