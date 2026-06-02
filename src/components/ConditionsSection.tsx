import { MarkerText } from "./MarkerText";

const CONDITIONS = {
  rows: [
    {
      label: "給与",
      content: (
        <>
          <p className="text-xl font-bold text-slate-900">月給 22万円〜</p>
          <ul className="mt-2 space-y-1 text-base leading-relaxed text-slate-600">
            <li>経験や能力に応じて昇給あり</li>
            <li>1年後には月給28万円＋残業代も目指せます</li>
          </ul>
        </>
      ),
    },
    { label: "仕事内容", text: "水道工事・土木工事の補助" },
    { label: "勤務地", text: "神奈川県青葉区周辺、横浜市・川崎市周辺" },
    { label: "対象", text: "18歳〜 / 未経験歓迎 / 学歴不問" },
    { label: "勤務時間", text: "8:00〜17:00" },
    { label: "待遇", text: "社会保険完備、作業着・道具支給、資格取得支援あり" },
    {
      label: "補足",
      text: "現場により集合・帰社時間は変動します。移動時間・残業代の扱いは面談時に説明します。",
    },
    { label: "応募方法", text: "LINEで連絡" },
  ],
  note: "雇用形態や働き方は、相談のうえ決定します。気になることはLINEで聞いてください。",
} as const;

export function ConditionsSection() {
  return (
    <section className="px-5 py-14" aria-label="条件">
      <div className="mx-auto w-full max-w-[480px]">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-sky-500">
          Conditions
        </p>
        <h2 className="text-[2rem] font-extrabold leading-[1.3] tracking-tight text-slate-950">
          <MarkerText color="blue">働き方・条件</MarkerText>
        </h2>

        <p className="mt-4 text-base leading-relaxed text-slate-600">
          給与や働き方も、話を聞く前にざっくり確認できます。
        </p>

        <dl className="mt-7 divide-y divide-slate-100">
          {CONDITIONS.rows.map((row) => (
            <div key={row.label} className="grid grid-cols-[6.5rem_1fr] gap-3 py-4">
              <dt className="pt-0.5 text-sm font-semibold text-slate-400">{row.label}</dt>
              <dd>
                {"content" in row ? (
                  row.content
                ) : (
                  <p className="text-base leading-relaxed text-slate-900">{row.text}</p>
                )}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-5 text-sm leading-relaxed text-slate-500">{CONDITIONS.note}</p>
      </div>
    </section>
  );
}
