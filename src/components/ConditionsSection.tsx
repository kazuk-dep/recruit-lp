const CONDITIONS = {
  rows: [
    {
      label: "給与",
      lines: [
        "月給 22万円〜",
        "経験や能力に応じて昇給あり",
        "1年後には月給28万円＋残業代も目指せます",
      ],
    },
    { label: "仕事内容", lines: ["水道工事・土木工事の補助"] },
    { label: "勤務地", lines: ["神奈川県青葉区周辺、横浜市・川崎市周辺"] },
    { label: "対象", lines: ["18歳〜 / 未経験歓迎 / 学歴不問"] },
    { label: "勤務時間", lines: ["8:00〜17:00"] },
    { label: "待遇", lines: ["社会保険完備、作業着・道具支給、資格取得支援あり"] },
    {
      label: "補足",
      lines: [
        "現場により集合・帰社時間は変動します。移動時間・残業代の扱いは面談時に説明します。",
        "雇用形態や働き方は、相談のうえ決定します。",
      ],
    },
    { label: "応募方法", lines: ["LINEで連絡"] },
  ],
} as const;

export function ConditionsSection() {
  return (
    <section
      id="conditions"
      className="border-t border-slate-200 bg-white px-6 pb-20 pt-20"
      aria-label="募集要項"
    >
      <p className="font-display text-[13px] font-semibold uppercase tracking-[0.2em] text-sky-600">
        Recruit
      </p>
      <h2 className="mt-4 text-[30px] font-bold leading-[1.4] text-slate-950">
        募集要項
      </h2>

      {/* 全項目を同じ情報階層で表示する */}
      <dl className="mt-9 border-t border-slate-200">
        {CONDITIONS.rows.map((row) => (
          <div key={row.label} className="border-b border-slate-200 py-5">
            <dt className="text-[13px] font-bold text-sky-800">
              {row.label}
            </dt>
            {row.lines.map((line) => (
              <dd key={line} className="mt-1.5 text-[16px] leading-[1.8] text-slate-900">
                {line}
              </dd>
            ))}
          </div>
        ))}
      </dl>

    </section>
  );
}
