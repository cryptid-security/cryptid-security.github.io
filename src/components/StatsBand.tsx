import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -12% 0px" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce || to === 0) {
      setN(to);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const dur = 1100;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, reduce]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

const STATS = [
  { to: 15, suffix: "", label: "instruments" },
  { to: 5, suffix: "", label: "disciplines" },
  { to: 0, suffix: "", label: "runtime dependencies" },
  { to: 100, suffix: "%", label: "reproducible by hand" },
];

export default function StatsBand() {
  return (
    <section className="border-b" style={{ borderColor: "var(--line)", background: "var(--color-ink)" }}>
      <div className="mx-auto grid w-full max-w-[980px] grid-cols-2 gap-px px-[34px] py-[52px] sm:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="px-2 text-center sm:text-left">
            <div className="font-display text-[clamp(40px,6vw,60px)] font-medium leading-none text-brass2">
              <CountUp to={s.to} suffix={s.suffix} />
            </div>
            <div className="mt-2 font-mono text-[11.5px] uppercase tracking-[0.18em] text-sage">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
