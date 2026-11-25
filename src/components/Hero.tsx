import { motion } from "framer-motion";
import AuroraRibbons from "./AuroraRibbons";
import Mark from "./Mark";
import { GH_ORG } from "../data";

const ease = [0.2, 0.7, 0.2, 1] as const;

function rise(delay: number) {
  return {
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease, delay },
  };
}

export default function Hero() {
  return (
    <header className="relative flex min-h-[100svh] items-center overflow-hidden">
      <AuroraRibbons />

      {/* slow drifting ambient glows — autonomous motion, not cursor-driven */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[8%] top-[18%] z-[1] size-[42vw] max-w-[560px] rounded-full opacity-70 blur-[70px] [animation:float-slow_13s_ease-in-out_infinite]"
        style={{ background: "radial-gradient(circle, rgba(207,154,58,.14), transparent 68%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[6%] bottom-[10%] z-[1] size-[36vw] max-w-[480px] rounded-full opacity-60 blur-[70px] [animation:float-slow_17s_ease-in-out_infinite_reverse]"
        style={{ background: "radial-gradient(circle, rgba(232,197,126,.1), transparent 68%)" }}
      />

      {/* depth: vignette + a faint horizon wash, no cursor tracking */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 115%, rgba(207,154,58,.07), transparent 55%), radial-gradient(100% 100% at 50% 0%, transparent 60%, rgba(8,11,10,.6))",
        }}
      />

      <div className="relative z-[3] mx-auto w-full max-w-[980px] px-[34px] py-[70px]">
        <motion.div className="mb-[46px] flex items-center gap-[13px]" {...rise(0)}>
          <Mark size={38} />
          <span className="font-mono text-[13px] tracking-[0.34em] text-bone">
            CRYPTID&nbsp;&nbsp;SECURITY
          </span>
        </motion.div>

        <motion.div
          className="mb-7 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-[11px] tracking-[0.22em] text-sage"
          style={{ borderColor: "var(--line)", background: "rgba(207,154,58,.04)" }}
          {...rise(0.06)}
        >
          <span className="size-1.5 rounded-full bg-brass [animation:pulse-soft_2.4s_ease-in-out_infinite]" />
          FIFTEEN OPEN-SOURCE INSTRUMENTS
        </motion.div>

        <motion.h1
          className="m-0 max-w-[16ch] font-display text-[clamp(44px,8vw,92px)] font-medium leading-[1.0] tracking-[-0.02em]"
          {...rise(0.12)}
        >
          The instruments that find <span className="shimmer italic">what hides.</span>
        </motion.h1>

        <motion.p className="mt-[32px] max-w-[52ch] text-[19px] text-sage" {...rise(0.22)}>
          Open-source defensive security tooling for malware analysis, reverse engineering,
          incident response, and application security — built to run offline and be checked by hand.
        </motion.p>

        <motion.div className="mt-[40px] flex flex-wrap items-center gap-4" {...rise(0.32)}>
          <a
            href={GH_ORG}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-[15px] font-medium text-ink transition-transform hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(180deg,var(--color-brass2),var(--color-brass))",
              boxShadow: "0 0 0 1px rgba(207,154,58,.5), 0 14px 40px -12px rgba(207,154,58,.5)",
            }}
          >
            View the organisation
            <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a
            href="#catalogue"
            className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-[15px] text-bone transition-colors hover:border-brass2/60 hover:text-brass2"
            style={{ borderColor: "var(--line)" }}
          >
            Browse the toolkit
          </a>
        </motion.div>

        <motion.div
          className="mt-[52px] flex flex-wrap gap-x-10 gap-y-3 font-mono text-[12.5px] tracking-[0.08em] text-faint"
          {...rise(0.42)}
        >
          <span><span className="text-brass2">15</span> instruments</span>
          <span><span className="text-brass2">0</span> runtime dependencies</span>
          <span>every result <span className="text-brass2">reproducible by hand</span></span>
        </motion.div>
      </div>
    </header>
  );
}
