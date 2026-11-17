import { CityInfrastructureIllustration } from "./CityInfrastructureIllustration";

const WORK = {
  heading: ["見えないところで、", "暮らしを支える仕事。"],
  lead: "マイ建設の仕事は、新築の戸建て住宅やアパートの給水・排水設備の施工です。水が出る、流れる。その当たり前を、見えないところでつくっています。",
  jobs: [
    {
      mark: "A",
      title: "建物の中の配管工事",
      body: "新築の戸建てやアパートの中に、水やお湯を届ける配管と、使った水を外へ流す配管を施工します。",
    },
    {
      mark: "B",
      title: "道路から住宅への引き込み工事",
      body: "道路の下に埋まっている水道管・下水道管と住宅をつなぐ配管を、新しく引き込む工事です。",
    },
  ],
  note: "このほか、給排水設備の設置など、施工に関わる作業も担当します。",
  facts: [
    { label: "現場エリア", value: ["川崎市・横浜市・", "東京都の一部"] },
    { label: "作業体制", value: ["1現場あたり", "2〜4名程度"] },
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

      <div className="mt-10 px-6">
        {WORK.jobs.map((job, i) => (
          <article
            key={job.mark}
            className={`grid grid-cols-[28px_minmax(0,1fr)] gap-x-4 ${
              i > 0 ? "mt-8 border-t border-slate-200 pt-8" : ""
            }`}
          >
            <span
              className="mt-[3px] flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 font-display text-[14px] font-bold text-white"
              aria-hidden
            >
              {job.mark}
            </span>
            <div>
              <h3 className="text-[19px] font-bold leading-[1.5] text-slate-950">{job.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.85] text-slate-800">{job.body}</p>
            </div>
          </article>
        ))}

        <p className="mt-8 text-[14px] leading-[1.8] text-slate-600">{WORK.note}</p>

        <dl className="mt-10 border-y-2 border-slate-900">
          {WORK.facts.map((f, i) => (
            <div
              key={f.label}
              className={`grid grid-cols-[96px_minmax(0,1fr)] gap-4 py-4 ${
                i > 0 ? "border-t border-slate-200" : ""
              }`}
            >
              <dt className="text-[14px] font-bold leading-[1.7] text-sky-800">{f.label}</dt>
              <dd className="text-[15px] font-bold leading-[1.7] text-slate-900">
                {f.value.map((part) => (
                  <span key={part} className="inline-block">
                    {part}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
