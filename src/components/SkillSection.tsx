import { MarkerText } from "./MarkerText";

const SKILL = {
  heading: ["自分に残るのは、", "現場で使える技術です。"],
  points: [
    {
      title: "実践的な技術",
      body: "道具の使い方、現場での動き方、安全に作業する判断など、実際に使える技術が身につきます。",
    },
    {
      title: "資格取得サポート",
      body: "仕事に必要な資格の取得もサポートします。",
    },
    {
      title: "自分の力になる仕事",
      body: "ただ働くだけではなく、自分の中に残る力を少しずつ増やしていける仕事です。",
    },
  ],
} as const;

export function SkillSection() {
  return (
    <section className="px-5 py-14 bg-sky-50" aria-label="身につく技術">
      <div className="mx-auto w-full max-w-[480px]">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-sky-500">
          Skill
        </p>
        <h2 className="text-[2rem] font-extrabold leading-[1.3] tracking-tight text-slate-950">
          <MarkerText color="blue">{SKILL.heading[0]}</MarkerText>
          <br />
          <MarkerText color="blue">{SKILL.heading[1]}</MarkerText>
        </h2>
        <ul className="mt-7 space-y-3">
          {SKILL.points.map((point, i) => (
            <li
              key={point.title}
              className="flex gap-4 rounded-2xl bg-white px-4 py-4 shadow-sm"
            >
              <div className="flex h-8 w-8 flex-none items-center justify-center rounded-xl bg-sky-100 text-sky-700 text-sm font-bold">
                {i + 1}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">{point.title}</p>
                <p className="mt-1 text-base leading-relaxed text-slate-600">{point.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
