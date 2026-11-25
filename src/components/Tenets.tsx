import Reveal from "./Reveal";
import { tenets } from "../data";

export default function Tenets() {
  return (
    <section className="border-t" style={{ borderColor: "var(--line)", background: "var(--color-ink2)" }}>
      <div className="mx-auto w-full max-w-[980px] px-[34px] pb-[74px] pt-[68px]">
        <Reveal as="h2" className="m-0 mb-9 font-display text-[29px] font-medium tracking-[-0.01em]">
          How these are built
        </Reveal>
        <ol className="m-0 grid list-none grid-cols-2 gap-x-[58px] gap-y-[34px] p-0 max-[640px]:grid-cols-1 max-[640px]:gap-[26px]">
          {tenets.map((t, i) => (
            <Reveal key={t.title} as="li" delay={i * 0.05} className="relative pl-6">
              <span className="absolute left-0 top-[11px] h-[9px] w-[9px] rotate-45 border-[1.5px] border-brass" />
              <b className="mb-1 block font-display text-[19px] font-medium">{t.title}</b>
              <span className="text-[15px] leading-[1.55] text-sage">{t.body}</span>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
