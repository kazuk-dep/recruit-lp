import { CertificateIcon, SproutIcon, StackIcon, ToolIcon } from "./FeatureIcons";

const FEATURE = {
  heading: ["技術が残れば、", "自信も残る。"],
  items: [
    {
      title: "現場で使える技術が身につく",
      body: "道具の使い方、現場での動き方、安全に作業する判断など、実際に使える技術が身につきます。",
      Icon: ToolIcon,
    },
    {
      title: "未経験から始める",
      body: "最初は、道具の名前も現場の流れも分からなくて大丈夫です。",
      Icon: SproutIcon,
    },
    {
      title: "資格取得をサポート",
      body: "仕事に必要な資格の取得もサポートします。",
      Icon: CertificateIcon,
    },
    {
      title: "自分に残る力になる",
      body: "ただ働くだけではなく、自分の中に残る力を少しずつ増やしていける仕事です。",
      Icon: StackIcon,
    },
  ],
} as const;

const num = (i: number) => String(i + 1).padStart(2, "0");

export function FeatureSection() {
  const [main, second, third, fourth] = FEATURE.items;

  return (
    <section id="skill" className="bg-[#F0F9FF] px-6 pb-24 pt-20" aria-label="この仕事の魅力">
      <p className="font-display text-[13px] font-semibold uppercase tracking-[0.2em] text-sky-600">
        Feature
      </p>
      <h2 className="mt-5 text-[clamp(32px,8.8vw,40px)] font-black leading-[1.35] text-slate-950">
        {FEATURE.heading[0]}
        <br />
        <span className="text-sky-700">{FEATURE.heading[1]}</span>
      </h2>

      {/* 01：大きく */}
      <article className="mt-10 border-t-2 border-slate-900 pt-5">
        <div className="flex items-start justify-between">
          <span className="font-display text-[64px] font-medium leading-none tabular-nums text-sky-600">
            {num(0)}
          </span>
          <main.Icon className="h-11 w-11 text-slate-900" />
        </div>
        <h3 className="mt-5 text-[22px] font-bold leading-[1.5] text-slate-900">{main.title}</h3>
        <p className="mt-3 text-[16px] leading-[1.9] text-slate-800">{main.body}</p>
      </article>

      {/* 02・03：横並び */}
      <div className="mt-12 grid grid-cols-2 gap-5">
        {[second, third].map((f, i) => (
          <article
            key={f.title}
            id={i === 0 ? "beginner" : undefined}
            className="scroll-mt-6 border-t border-slate-300 pt-4"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-[34px] font-medium leading-none tabular-nums text-sky-600">
                {num(i + 1)}
              </span>
              <f.Icon className="h-8 w-8 text-slate-700" />
            </div>
            <h3 className="mt-4 text-[16px] font-bold leading-[1.5] text-slate-900">{f.title}</h3>
            <p className="mt-2 text-[14px] leading-[1.8] text-slate-800">{f.body}</p>
          </article>
        ))}
      </div>

      {/* 04：右にずらして締める */}
      <article className="ml-10 mt-12 border-l-2 border-emerald-500 pl-5">
        <div className="flex items-center gap-3">
          <span className="font-display text-[34px] font-medium leading-none tabular-nums text-emerald-600">
            {num(3)}
          </span>
          <fourth.Icon className="h-8 w-8 text-emerald-700" />
        </div>
        <h3 className="mt-4 text-[18px] font-bold leading-[1.5] text-slate-900">{fourth.title}</h3>
        <p className="mt-2 text-[15px] leading-[1.85] text-slate-800">{fourth.body}</p>
      </article>
    </section>
  );
}
