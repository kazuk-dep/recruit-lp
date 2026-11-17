const PRESIDENT = {
  name: "和田",
  role: "代表",
  qa: [
    {
      q: ["会社づくりで", "大切にしていることは？"],
      a: [
        "以前、不動産業界で働いていたとき、怒鳴り声が飛び交い、失敗した人が厳しく責められる職場を経験しました。",
        "その経験から「怒っても何も生まれない」という考えを大切にしています。",
        "マイ建設では、失敗を責めるのではなく、原因を一緒に考え、次に活かすことを大切にしています。",
      ],
    },
    {
      q: ["未経験の人には、どんなふうに", "仕事を教えていますか？"],
      a: [
        "最初からできる人はいないので、道具の使い方から一つずつ教えています。",
        "「職人の背中を見て覚えろ」という昔ながらの指導ではなく、先輩と一緒に実際の仕事を経験しながら、少しずつ技術を身につけてもらいたいと考えています。",
      ],
    },
  ],
} as const;

export function PresidentInterviewSection() {
  return (
    <section className="bg-[#F0F9FF] px-6 pb-24 pt-20" aria-label="代表インタビュー">
      <p className="font-display text-[13px] font-semibold uppercase tracking-[0.2em] text-sky-600">
        Message
      </p>
      <h2 className="mt-5 text-[clamp(28px,7.8vw,34px)] font-bold leading-[1.45] text-slate-950">
        代表インタビュー
      </h2>

      <div className="mt-12 border-b-2 border-slate-900 pb-3">
        <p className="text-[20px] font-bold leading-none text-slate-950">{PRESIDENT.name}</p>
        <p className="mt-2 text-[14px] leading-none text-slate-600">{PRESIDENT.role}</p>
      </div>

      {PRESIDENT.qa.map((item, i) => (
        <div key={item.q.join("")} className={i === 0 ? "mt-8" : "mt-12"}>
          <h3 className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-2 text-[18px] font-bold leading-[1.6] text-slate-950">
            <span className="font-display text-sky-600">Q.</span>
            <span>
              {item.q.map((part) => (
                <span key={part} className="inline-block">
                  {part}
                </span>
              ))}
            </span>
          </h3>
          <div className="mt-4 space-y-5 text-[16px] leading-[1.95] text-slate-800">
            {item.a.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
