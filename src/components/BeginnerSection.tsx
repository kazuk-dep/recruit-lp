import { MarkerText } from "./MarkerText";

const BEGINNER = {
  heading: ["最初からできる人なんて、", "いません。"],
  steps: [
    {
      label: "まず安心して",
      body: "最初は、道具の名前も現場の流れも分からなくて大丈夫です。",
    },
    {
      label: "一人じゃない",
      body: "いきなり一人で任せることはありません。",
    },
    {
      label: "先輩と一緒にスタート",
      body: "まずは先輩と一緒に現場へ行き、準備・片付け・簡単な補助から覚えていきます。",
    },
  ],
} as const;

export function BeginnerSection() {
  return (
    <section className="px-5 py-14" aria-label="未経験の始め方">
      <div className="mx-auto w-full max-w-[480px]">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-emerald-500">
          For Beginners
        </p>
        <h2 className="text-[2rem] font-extrabold leading-[1.3] tracking-tight text-slate-950">
          <MarkerText color="green">{BEGINNER.heading[0]}</MarkerText>
          <br />
          <MarkerText color="green">{BEGINNER.heading[1]}</MarkerText>
        </h2>
        <ul className="mt-7 space-y-3">
          {BEGINNER.steps.map((s, i) => (
            <li
              key={s.label}
              className="flex gap-4 rounded-2xl border border-slate-100 bg-white px-4 py-4 shadow-sm"
            >
              <div className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold">
                {i + 1}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">{s.label}</p>
                <p className="mt-1 text-base leading-relaxed text-slate-600">{s.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
