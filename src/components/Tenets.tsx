import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";
import { tenets } from "../data";

export default function Tenets() {
  const reduce = useReducedMotion();
  return (
    <section className="border-t" style={{ borderColor: "var(--line)", background: "var(--color-ink2)" }}>
      <div className="mx-auto w-full max-w-[1080px] px-[34px] pb-[84px] pt-[76px]">
        <Reveal className="mb-9 flex items-baseline gap-4">
          <h2 className="m-0 font-display text-[clamp(26px,3.6vw,33px)] font-medium tracking-[-0.01em]">
            How these are built
          </h2>
          <span className="font-mono text-[12px] tracking-[0.1em] text-faint">06</span>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tenets.map((t, i) => (
            <motion.div
              key={t.title}
              className="group relative overflow-hidden rounded-[12px] border p-6 transition-colors"
              style={{ borderColor: "#1b211c", background: "linear-gradient(180deg,#0c110e,#0a0e0c)" }}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1], delay: i * 0.05 }}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(circle, rgba(207,154,58,.22), transparent 70%)" }}
              />
              <div className="relative flex items-center gap-3">
                <span className="grid size-7 place-items-center font-mono text-[12px] text-brass2" style={{ border: "1px solid rgba(207,154,58,.3)", borderRadius: 6 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <b className="font-display text-[19px] font-medium">{t.title}</b>
              </div>
              <p className="relative mt-3 text-[15px] leading-[1.6] text-sage transition-colors group-hover:text-[#c7cabf]">
                {t.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
