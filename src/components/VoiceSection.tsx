const VOICES = {
  items: [
    {
      name: "施工スタッフ",
      detail: "26歳",
      tag: "元サラリーマンも活躍中" as string | null,
      // 本文中の一文をそのまま引用
      quote: ["今まで怒鳴られたことは", "一度もありません。"],
      paragraphs: [
        "新卒で営業の仕事に就いたものの、毎日同じことの繰り返しで成長できている実感がなかったため退職。無職の期間中に友人から誘われたこともあり、マイ建設で水道工事の手伝いをしていました。それが面白くて！",
        "水道工事といっても様々な場所の工事があり、知識が身につけば身につくほどできる仕事も増えて、成長できている実感がありました。入社して2年目ですが、現場でまとめ役を任され日々刺激を受けて楽しい毎日です。",
        "建設業界って怖いイメージがあったのですが、代表の和田さんがすごく優しく、従業員のことを考えてくださる方。昔ながらの慣習ではなく、今の従業員の考え方や悩みに向き合ってくれ、働きやすい環境を作ってくださっています。",
        "今まで怒鳴られたことは一度もありませんし、きっとこれからもないと思います。",
      ],
    },
    {
      name: "設計スタッフ",
      detail: "36歳・設計2年目",
      tag: null as string | null,
      quote: ["入社後は私がマンツーマンで", "指導させていただきます。"],
      paragraphs: [
        "私も未経験からのスタート。この会社には営業で入ったのですが、2年前に経験ゼロから設計の仕事を担当することに。",
        "社内初の設計スタッフで、当然指導してくれる人もおらず、独学でひたすら勉強し、一人前になりました（もちろん勉強に関する費用や資格取得費用は会社に負担してもらいました）。",
        "ただ、皆さんにはこの苦労を味わってほしくない。ですので、入社後は私がマンツーマンで指導させていただきます。",
      ],
    },
  ],
} as const;

export function VoiceSection() {
  return (
    <section id="voice" className="bg-white px-6 pb-24 pt-20" aria-label="先輩の声">
      <p className="font-display text-[13px] font-semibold uppercase tracking-[0.2em] text-sky-600">
        Interview
      </p>
      <h2 className="mt-5 text-[clamp(28px,7.8vw,34px)] font-bold leading-[1.45] text-slate-950">
        先輩のリアルな声
      </h2>

      {VOICES.items.map((v, i) => (
        <article key={v.name} className={i === 0 ? "mt-12" : "mt-20"}>
          <div className="border-b-2 border-slate-900 pb-3">
            <p className="text-[20px] font-bold leading-none text-slate-950">{v.name}</p>
            <p className="mt-2 text-[14px] leading-none text-slate-600">{v.detail}</p>
          </div>

          {v.tag && <p className="mt-6 text-[15px] font-bold text-sky-700">{v.tag}</p>}
          <p
            className={`${v.tag ? "mt-2" : "mt-6"} text-[clamp(21px,5.8vw,24px)] font-bold leading-[1.6] text-slate-950`}
          >
            「{v.quote[0]}
            <br />
            {v.quote[1]}」
          </p>

          <div className="mt-6 space-y-5 text-[16px] leading-[1.95] text-slate-800">
            {v.paragraphs.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}
