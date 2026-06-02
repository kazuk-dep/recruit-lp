import { MarkerText } from "./MarkerText";

const TEACHING = {
  heading: ["「見て盗め」とは言いません。", "ちゃんと教えます。"],
  points: [
    {
      title: "完璧を求めない",
      body: "未経験の人に、いきなり完璧を求めることはありません。",
    },
    {
      title: "先輩と一緒に覚える",
      body: "道具の名前、現場での動き方、作業の流れを、先輩と一緒に少しずつ覚えていきます。",
    },
    {
      title: "失敗しても一緒に考える",
      body: "失敗したときも、ただ怒るのではなく、次にどうすればいいかを一緒に考えることを大切にしています。",
    },
  ],
} as const;

export function TeachingSection() {
  return (
    <section className="px-5 py-14 bg-emerald-50" aria-label="教え方">
      <div className="mx-auto w-full max-w-[480px]">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-emerald-600">
          Teaching
        </p>
        <h2 className="text-[2rem] font-extrabold leading-[1.3] tracking-tight text-slate-950">
          <MarkerText color="green">{TEACHING.heading[0]}</MarkerText>
          <br />
          <MarkerText color="green">{TEACHING.heading[1]}</MarkerText>
        </h2>
        <ul className="mt-7 space-y-3">
          {TEACHING.points.map((p) => (
            <li key={p.title} className="rounded-2xl bg-white px-4 py-4 shadow-sm">
              <p className="text-sm font-bold text-emerald-700">{p.title}</p>
              <p className="mt-1.5 text-base leading-relaxed text-slate-600">{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
