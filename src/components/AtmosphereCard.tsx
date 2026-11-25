import type { PointerEvent, ReactNode } from "react";

/**
 * Atmosphere Card — adapted from 21st.dev "Atmosphere Card" (ham7a311).
 * Smoked-glass link card: brass colour pooled in the corners, slow drifting
 * contour lines underneath, and a soft spotlight that follows the cursor.
 * Re-tuned from the original violet/cyan/teal to the single brand brass hue.
 * Zero runtime deps; the atm-* styles live in index.css.
 */
export type CardItem = {
  name: string;
  blurb: string;
  href: string;
  icon: ReactNode;
};

const WAVES = [
  "M-60 168 C 20 12, 110 236, 198 64 S 318 228, 428 48 C 488 8, 540 120, 580 86",
  "M-48 42 C 70 188, 168 -28, 268 132 S 412 8, 540 154",
  "M-36 214 C 88 96, 176 248, 274 78 S 404 236, 560 118",
  "M 40 -20 C 120 80, 90 160, 210 190 S 360 40, 480 210",
];

function setPoint(e: PointerEvent<HTMLAnchorElement>) {
  const node = e.currentTarget;
  const r = node.getBoundingClientRect();
  node.style.setProperty("--atm-nx", ((e.clientX - r.left) / r.width).toFixed(3));
  node.style.setProperty("--atm-ny", ((e.clientY - r.top) / r.height).toFixed(3));
}
function clearPoint(e: PointerEvent<HTMLAnchorElement>) {
  e.currentTarget.style.removeProperty("--atm-nx");
  e.currentTarget.style.removeProperty("--atm-ny");
}

export function AtmosphereCard({ item }: { item: CardItem }) {
  return (
    <a
      href={item.href}
      className="atm-card group relative isolate flex h-full gap-4 overflow-hidden p-5 sm:p-6"
      onPointerMove={setPoint}
      onPointerLeave={clearPoint}
    >
      <span className="atm-bloom" aria-hidden="true" />
      <span className="atm-field" aria-hidden="true">
        <svg className="atm-waves" viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice">
          {WAVES.map((d, i) => (
            <path key={d} className={`atm-wave atm-wave--${i + 1}`} d={d} />
          ))}
        </svg>
      </span>
      <span className="atm-quiet" aria-hidden="true" />
      <span className="atm-presence" aria-hidden="true" />

      <span
        aria-hidden="true"
        className="atm-icon relative z-10 grid size-10 shrink-0 place-items-center rounded-md"
      >
        {item.icon}
      </span>
      <span className="relative z-10 min-w-0">
        <span className="flex items-center gap-2 font-mono text-[15px] font-medium text-bone">
          {item.name}
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="size-3.5 text-brass2 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17 17 7M7 7h10v10" />
          </svg>
        </span>
        <span className="mt-1.5 block text-[14.5px] leading-relaxed text-sage transition-colors duration-300 group-hover:text-[#c7cabf]">
          {item.blurb}
        </span>
      </span>
    </a>
  );
}
