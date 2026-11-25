import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import StatsBand from "./components/StatsBand";
import Catalogue from "./components/Catalogue";
import Tenets from "./components/Tenets";
import ClosingCTA from "./components/ClosingCTA";
import Reveal from "./components/Reveal";
import { GH_ORG } from "./data";

export default function App() {
  return (
    <>
      <Header />
      <Hero />

      {/* creed */}
      <section className="border-y" style={{ borderColor: "var(--line)", background: "var(--color-ink2)" }}>
        <div className="mx-auto w-full max-w-[980px] px-[34px] py-[46px]">
          <Reveal as="p" className="m-0 font-display text-[clamp(22px,3.3vw,31px)] font-normal leading-[1.3] tracking-[-0.01em]">
            Fifteen instruments. <b className="font-medium text-brass2">No runtime dependencies.</b>{" "}
            Every one runs offline, ships with its own tests, and gives a result you can{" "}
            <b className="font-medium text-brass2">check by hand.</b>
          </Reveal>
        </div>
      </section>

      <Marquee />
      <StatsBand />
      <Catalogue />
      <Tenets />
      <ClosingCTA />

      <footer className="border-t py-[56px] pb-[72px]" style={{ borderColor: "var(--line)" }}>
        <div className="mx-auto flex w-full max-w-[980px] flex-wrap items-end justify-between gap-6 px-[34px]">
          <div className="font-display text-[23px] font-medium">
            Cryptid <em className="font-normal not-italic text-brass2 [font-style:italic]">Security</em>
          </div>
          <div className="text-right text-[14px] leading-[1.7] text-faint">
            Defensive tooling for people who read the source.
            <br />
            <a href={GH_ORG}>github.com/cryptid-security</a>
          </div>
        </div>
      </footer>
    </>
  );
}
