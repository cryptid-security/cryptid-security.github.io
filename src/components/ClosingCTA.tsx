import { motion, useReducedMotion } from "framer-motion";
import { GH_ORG } from "../data";

export default function ClosingCTA() {
  const reduce = useReducedMotion();
  return (
    <section className="mx-auto w-full max-w-[980px] px-[34px] py-[90px]">
      <motion.div
        className="border-spin relative overflow-hidden rounded-[20px] p-px"
        style={{
          background:
            "conic-gradient(from var(--angle,0deg), rgba(207,154,58,.65), transparent 25%, rgba(232,197,126,.5) 50%, transparent 75%, rgba(207,154,58,.65))",
        }}
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
      >
        <div
          className="relative overflow-hidden rounded-[19px] px-8 py-16 text-center sm:px-16"
          style={{ background: "radial-gradient(120% 140% at 50% 0%, #0d1510, #080b0a 70%)" }}
        >
          {/* soft pooled glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-40 opacity-70 blur-2xl"
            style={{ background: "radial-gradient(60% 100% at 50% 0%, rgba(207,154,58,.2), transparent)" }}
          />
          <p className="relative font-mono text-[11.5px] uppercase tracking-[0.3em] text-brass2">
            Trust is earned by legibility
          </p>
          <h2 className="relative mx-auto mt-4 max-w-[18ch] font-display text-[clamp(32px,5vw,52px)] font-medium leading-[1.05] tracking-[-0.02em]">
            Short enough to <span className="shimmer italic">read in a sitting.</span>
          </h2>
          <p className="relative mx-auto mt-5 max-w-[54ch] text-[17px] text-sage">
            No telemetry, no hidden model, nothing you cannot audit. Open the catalogue and read the
            source for yourself.
          </p>
          <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={GH_ORG}
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-medium text-ink transition-transform hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(180deg,var(--color-brass2),var(--color-brass))",
                boxShadow: "0 0 0 1px rgba(207,154,58,.5), 0 16px 44px -12px rgba(207,154,58,.55)",
              }}
            >
              Explore the organisation
              <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
