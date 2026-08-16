interface IconProps {
  className?: string;
}

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function JarIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M8 3.5h8" />
      <path d="M7 6.5h10" />
      <path d="M9.5 3.5v3M14.5 3.5v3" />
      <path d="M7 6.5c-1.1 1.3-1.7 3-1.7 4.7v5.3a4 4 0 0 0 4 4h5.4a4 4 0 0 0 4-4v-5.3c0-1.7-.6-3.4-1.7-4.7" />
      <path d="M5.5 13.5h13" />
    </svg>
  );
}

export function ChiliIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M17.2 2.1c.6-.1 1.1.3 1.2.9.1.4-.1.8-.4 1.1.5.9.8 2 .8 3.1 0 5.4-5.4 10.2-12.1 10.9-1.5.2-1.9-1.8-.5-2.3 5-1.7 8.4-4.8 8.4-9.1 0-.9-.2-1.8-.5-2.6-.4.2-.8.4-1.2.4-.8.1-1.3-.9-.8-1.5.9-1.2 2.6-1.8 4.2-1.5h.2c.1-.6.4-1.2.7-1.4Z" />
    </svg>
  );
}

export function SunIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8" />
    </svg>
  );
}

export function DropIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M12 3.5c3.2 3.8 6 7.1 6 10.5a6 6 0 0 1-12 0c0-3.4 2.8-6.7 6-10.5Z" />
      <path d="M9.5 14a2.5 2.5 0 0 0 2 2.4" />
    </svg>
  );
}

export function LeafIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M5 19C5 9 12 4.5 20 4c.5 8-4 15-14 15Z" />
      <path d="M5 19c3-5.5 6.5-9 11-11.5" />
    </svg>
  );
}

export function StarIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2.8l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L3.3 9.1l6.1-.7L12 2.8Z" />
    </svg>
  );
}

export function PlusIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} strokeWidth={2.2}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function MinusIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} strokeWidth={2.2}>
      <path d="M5 12h14" />
    </svg>
  );
}

export function XIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} strokeWidth={2}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function ArrowIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} strokeWidth={2}>
      <path d="M4 12h16M13 5l7 7-7 7" />
    </svg>
  );
}

export function CheckIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} strokeWidth={2.4}>
      <path d="M4.5 12.5l5 5L19.5 7" />
    </svg>
  );
}

export function BagIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M5.5 8h13l-1.1 12a1.5 1.5 0 0 1-1.5 1.4H8.1A1.5 1.5 0 0 1 6.6 20L5.5 8Z" />
      <path d="M9 10.5V6a3 3 0 0 1 6 0v4.5" />
    </svg>
  );
}

export function TruckIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M2.5 6h11v11h-11zM13.5 10h4.2l3.3 3.4V17h-7.5" />
      <circle cx="6.5" cy="17.5" r="1.8" />
      <circle cx="17" cy="17.5" r="1.8" />
    </svg>
  );
}

export function ClockIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.668-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}
