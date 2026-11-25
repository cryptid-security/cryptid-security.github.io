import { motion, useReducedMotion } from "framer-motion";
import { AtmosphereCard } from "./AtmosphereCard";
import Reveal from "./Reveal";
import { categories, GH_USER } from "../data";
import type { ReactNode } from "react";

const icon = (d: string): ReactNode => (
  <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

// one evocative line-icon per tool
const ICONS: Record<string, string> = {
  unmask: "M15 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM13 11H3M6 9v4M9 9v4",
  "kira-scan": "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14ZM20 20l-4-4",
  "ghost-hunter": "M5 21V9a7 7 0 0 1 14 0v12l-3-2-2 2-2-2-2 2-3-2ZM9 10h.01M15 10h.01",
  unwrap: "M3 8l9-5 9 5v8l-9 5-9-5V8ZM3 8l9 5 9-5M12 13v8",
  "driver-guard": "M7 7h10v10H7zM9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2",
  "evtx-hunter": "M4 6h16M4 12h11M4 18h7M18 15l2 2 3-3",
  panoptes: "M3 12a9 9 0 0 1 18 0M6 12a6 6 0 0 1 12 0M9 12a3 3 0 0 1 6 0",
  "ioc-hunter": "M12 3v4M12 17v4M3 12h4M17 12h4M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",
  headerguard: "M12 3l7 3v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3ZM9 12l2 2 4-4",
  mailguard: "M3 6h18v12H3zM3 7l9 6 9-6",
  "bundle-leak": "M12 3s6 6 6 10a6 6 0 0 1-12 0c0-4 6-10 6-10ZM9 13a3 3 0 0 0 3 3",
  slopcheck: "M12 3l8 4-8 4-8-4 8-4ZM4 7v10l8 4M20 7v10l-8 4",
  provenance: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM8.5 12l2.5 2.5L16 9",
  unseen: "M12 3l9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 16l9 5 9-5",
  "harden-check": "M6 10V8a6 6 0 0 1 12 0v2M5 10h14v10H5zM12 14v3",
};

export default function Catalogue() {
  const reduce = useReducedMotion();
  return (
    <main id="catalogue" className="mx-auto w-full max-w-[1080px] px-[34px]">
      {categories.map((cat) => (
        <section key={cat.title} className="pb-2 pt-[72px] last:pb-[64px]">
          <Reveal className="mb-[6px] flex items-baseline gap-4">
            <h2 className="m-0 font-display text-[clamp(26px,3.6vw,33px)] font-medium tracking-[-0.01em]">
              {cat.title}
            </h2>
            <span className="font-mono text-[12px] tracking-[0.1em] text-faint">{cat.count}</span>
          </Reveal>
          <Reveal as="p" className="m-0 mb-7 max-w-[62ch] text-[16px] text-sage">
            {cat.about}
          </Reveal>

          <ul
            className="grid gap-px overflow-hidden rounded-[12px] border sm:grid-cols-2 lg:grid-cols-3"
            style={{ borderColor: "#1b211c", background: "#141a16" }}
          >
            {cat.tools.map((tool, i) => (
              <motion.li
                key={tool.name}
                className="min-w-0"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -6% 0px" }}
                transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1], delay: i * 0.05 }}
              >
                <AtmosphereCard
                  item={{
                    name: tool.name,
                    blurb: tool.blurb,
                    href: `${GH_USER}/${tool.name}`,
                    icon: icon(ICONS[tool.name] ?? "M12 3v18M3 12h18"),
                  }}
                />
              </motion.li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
