import { CTAButton } from "./CTAButton";

const FINAL_CTA = {
  heading: ["少しでも気になったら、", "まずは話だけ", "聞いてみてください。"],
  body: [
    "いきなり応募じゃなくて大丈夫です。",
    "仕事内容、働き方、給与のことなど、気になることをLINEで聞けます。",
  ],
  steps: [
    "LINEで「話を聞きたい」と送る",
    "仕事内容や条件を簡単に説明",
    "希望があれば面談・見学",
    "お互い納得したらスタート",
  ],
  cta: "話を聞いてみる",
  note: "LINEで質問できます。匿名でもOK。",
} as const;

export function FinalCTASection() {
  return (
    <section className="bg-[#0F172A] px-6 pb-20 pt-20 text-white" aria-label="応募・相談">
      <p className="font-display text-[13px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
        Contact
      </p>
      <h2 className="mt-5 text-[clamp(26px,7.4vw,30px)] font-black leading-[1.45]">
        {FINAL_CTA.heading.map((line, i) => (
          <span key={line} className="block">
            {i === FINAL_CTA.heading.length - 1 ? (
              <span className="text-emerald-300">{line}</span>
            ) : (
              line
            )}
          </span>
        ))}
      </h2>
      <div className="mt-6 space-y-2 text-[16px] leading-[1.9] text-white/90">
        {FINAL_CTA.body.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      {/* 相談の流れ */}
      <div id="flow" className="mt-12 scroll-mt-6">
        <p className="text-[14px] font-bold text-emerald-300">相談の流れ</p>
        <ol className="mt-4 border-l border-white/25">
          {FINAL_CTA.steps.map((step, i) => (
            <li key={step} className="relative py-2.5 pl-6">
              <span
                className="absolute -left-[4.5px] top-[1.15rem] h-2 w-2 rounded-full bg-emerald-300"
                aria-hidden
              />
              <span className="mr-2 font-display text-[13px] font-semibold tabular-nums text-emerald-300">STEP {i + 1}</span>
              <span className="text-[15px] font-semibold">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      <div id="contact" className="mt-12">
        <CTAButton href="#contact">{FINAL_CTA.cta}</CTAButton>
        <p className="mt-4 text-center text-[14px] font-medium text-white/90">{FINAL_CTA.note}</p>
      </div>
    </section>
  );
}
