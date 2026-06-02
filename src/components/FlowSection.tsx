import { MarkerText } from "./MarkerText";

const FLOW = {
  steps: [
    { title: "LINEで「話を聞きたい」と送る" },
    { title: "仕事内容や条件を簡単に説明" },
    { title: "希望があれば面談・見学" },
    { title: "お互い納得したらスタート" },
  ],
  body: "いきなり応募しなくても大丈夫です。まずは気になることだけ聞いてください。",
} as const;

export function FlowSection() {
  return (
    <section className="px-5 py-14 bg-sky-50" aria-label="流れ">
      <div className="mx-auto w-full max-w-[480px]">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-sky-500">
          Flow
        </p>
        <h2 className="text-[2rem] font-extrabold leading-[1.3] tracking-tight text-slate-950">
          <MarkerText color="blue">応募・相談の流れ</MarkerText>
        </h2>

        <ol className="mt-7">
          {FLOW.steps.map((step, idx) => (
            <li key={step.title} className="relative flex gap-4 pb-5 last:pb-0">
              <div className="flex flex-col items-center">
                <div className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-sky-600 text-xs font-bold text-white shadow-sm">
                  {idx + 1}
                </div>
                {idx < FLOW.steps.length - 1 && (
                  <div className="mt-1 w-[2px] flex-1 bg-sky-200" aria-hidden />
                )}
              </div>
              <div className="flex-1 pb-1">
                <div className="rounded-2xl bg-white px-4 py-3.5 shadow-sm">
                  <p className="text-base font-semibold text-slate-900">{step.title}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-5 text-base leading-relaxed text-slate-600">{FLOW.body}</p>
      </div>
    </section>
  );
}
