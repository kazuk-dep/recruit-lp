const CONDITIONS = {
  rows: [
    {
      label: "募集職種",
      lines: ["施工職（水道工事・土木工事）", "水道設備設計スタッフ（未経験歓迎）"],
    },
    { label: "雇用形態", lines: ["正社員"] },
    {
      label: "年収目安",
      salary: [
        { job: "施工職", years: ["1年目 500万円", "2年目 600万円"] },
        { job: "設計スタッフ", years: ["1年目 350万円", "3年目 400万円"] },
      ],
      lines: ["経験や能力に応じて昇給あり"],
    },
    { label: "勤務地", lines: ["神奈川県青葉区周辺、横浜市・川崎市周辺"] },
    { label: "対象", lines: ["18歳〜 / 未経験歓迎 / 学歴不問"] },
    {
      label: "勤務時間",
      lines: [
        "現場作業 9:00〜17:00（昼休憩1時間）",
        "実働 1日あたり8時間",
        "作業の前後に準備や片付けがあります",
      ],
    },
    { label: "勤務日数", lines: ["1ヶ月あたり平均23日"] },
    { label: "休日・休暇", lines: ["土日祝日", "夏季休暇、年末年始休暇、GW休暇、有給休暇"] },
    { label: "社会保険", lines: ["健康保険、厚生年金保険、雇用保険、労災保険"] },
    {
      label: "待遇",
      columns: true,
      lines: ["寮・社宅あり", "資格取得支援あり", "各種手当あり", "残業代あり", "作業着・道具支給"],
    },
    {
      label: "補足",
      lines: [
        "現場により集合・帰社時間は変動します。",
        "働き方は、相談のうえ決定します。",
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
            {"salary" in row && (
              <dd className="mt-2 grid grid-cols-2 gap-4 text-[16px] leading-[1.8] text-slate-900">
                {row.salary.map((s) => (
                  <div key={s.job}>
                    <span className="block font-bold">{s.job}</span>
                    {s.years.map((y) => (
                      <span key={y} className="block">{y}</span>
                    ))}
                  </div>
                ))}
              </dd>
            )}
            {"columns" in row ? (
              <dd className="mt-1.5 grid grid-cols-2 gap-x-4 text-[16px] leading-[1.8] text-slate-900">
                {row.lines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </dd>
            ) : (
              row.lines.map((line) => (
                <dd key={line} className="mt-1.5 text-[16px] leading-[1.8] text-slate-900">
                  {line}
                </dd>
              ))
            )}
          </div>
        ))}
      </dl>

    </section>
  );
}
