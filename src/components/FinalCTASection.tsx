import { CTAButton } from "./CTAButton";

const FINAL_CTA = {
  heading: ["少しでも気になったら、", "まずは話だけ聞いてみてください。"],
  body: [
    "いきなり応募じゃなくて大丈夫です。",
    "仕事内容、働き方、給与のことなど、気になることをLINEで聞けます。",
  ],
  cta: "話を聞いてみる",
  note: "LINEで質問できます。匿名でもOK。",
} as const;

export function FinalCTASection() {
  return (
    <section
      className="relative overflow-hidden px-5 py-16 text-white"
      style={{
        background: "linear-gradient(150deg, #0c1a2e 0%, #0d2035 50%, #0a1f1b 100%)",
      }}
      aria-label="最終CTA"
    >
      <div
        className="pointer-events-none absolute -right-12 -top-12 h-52 w-52 rounded-full bg-sky-500/8"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-10 -left-10 h-44 w-44 rounded-full bg-emerald-500/8"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-[480px]">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
          Contact
        </p>

        <h2 className="text-[1.625rem] font-extrabold leading-[1.55] tracking-tight">
          {FINAL_CTA.heading[0]}
          <br />
          {FINAL_CTA.heading[1]}
        </h2>

        <div className="mt-5 space-y-2 text-base leading-[1.8] text-white/75">
          {FINAL_CTA.body.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <div id="contact" className="mt-9">
          <CTAButton href="#contact">{FINAL_CTA.cta}</CTAButton>
          <p className="mt-3 text-center text-sm text-white/65">{FINAL_CTA.note}</p>
        </div>
      </div>
    </section>
  );
}
