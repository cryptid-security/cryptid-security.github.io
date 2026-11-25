import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Mark from "./Mark";
import { GH_ORG } from "../data";

export default function Header() {
  const { scrollYProgress } = useScroll();
  const width = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.7);
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => removeEventListener("scroll", onScroll);
  }, []);

  const scaleX = useTransform(width, (v) => v);

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left"
        style={{
          scaleX,
          background: "linear-gradient(90deg,var(--color-brassdim),var(--color-brass2))",
        }}
      />
      <motion.nav
        className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b px-[34px] py-[14px] backdrop-blur-md"
        style={{ background: "rgba(8,11,10,.72)", borderColor: "var(--line)" }}
        initial={{ y: "-110%" }}
        animate={{ y: show ? 0 : "-110%" }}
        transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
      >
        <div className="flex items-center gap-[10px] font-mono text-[12px] tracking-[0.26em] text-bone">
          <Mark size={22} stroke={4} />
          <span>CRYPTID</span>
        </div>
        <a
          href={GH_ORG}
          className="border-b border-brass2/40 pb-[2px] text-[14px] text-brass2 transition-colors hover:text-bone"
        >
          Organisation
        </a>
      </motion.nav>
    </>
  );
}
