import { CityInfrastructureIllustration } from "./CityInfrastructureIllustration";

const WORK = {
  heading: ["見えないところで、", "暮らしを支える仕事。"],
  lead: "水道や配管の仕事は、普段はあまり目立ちません。でも、暮らしに欠かせない大事な仕事です。",
  points: [
    { title: "水道工事", body: "水道や配管の工事。直した場所に、また水が通ります。" },
    { title: "土木工事", body: "配管を通すための、地面や道路まわりの工事です。" },
    { title: "仕事が残る", body: "現場が終わる。その一つひとつが、自分の仕事として残っていきます。" },
  ],
} as const;

export function WorkSection() {
  return (
    <section className="bg-white pb-20 pt-20" aria-label="私たちの仕事">
      <div className="px-6">
        <p className="font-display text-[13px] font-semibold uppercase tracking-[0.2em] text-sky-600">
          Work
        </p>
        <h2 className="mt-5 text-[clamp(28px,7.8vw,34px)] font-bold leading-[1.45] text-slate-950">
          {WORK.heading[0]}
          <br />
          {WORK.heading[1]}
        </h2>
        <p className="mt-6 text-[16px] leading-[1.95] text-slate-800">{WORK.lead}</p>
      </div>

      <div className="mt-10 px-3">
        <CityInfrastructureIllustration />
      </div>

      <dl className="mt-10 px-6">
        {WORK.points.map((p, i) => (
          <div
            key={p.title}
            className={`grid grid-cols-[96px_minmax(0,1fr)] gap-4 py-4 ${
              i > 0 ? "border-t border-slate-200" : ""
            }`}
          >
            <dt className="text-[15px] font-bold leading-[1.7] text-sky-800">{p.title}</dt>
            <dd className="text-[15px] leading-[1.8] text-slate-800">{p.body}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
