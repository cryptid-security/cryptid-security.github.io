import { allToolNames } from "../data";

/** Slow drifting ticker of all fifteen tool names. Pure CSS, pauses for reduced-motion. */
export default function Marquee() {
  const row = [...allToolNames, ...allToolNames];
  return (
    <div
      className="relative flex overflow-hidden border-y py-4"
      style={{ borderColor: "var(--line)", background: "var(--color-ink)" }}
      aria-hidden="true"
    >
      <div className="flex shrink-0 [animation:drift_48s_linear_infinite] gap-10 whitespace-nowrap pr-10">
        {row.map((name, i) => (
          <span
            key={i}
            className="font-mono text-[13px] tracking-[0.1em] text-faint"
          >
            <span className="text-brassdim">◆</span>&nbsp;&nbsp;{name}
          </span>
        ))}
      </div>
    </div>
  );
}
