const VOICES = {
  items: [
    {
      initial: "T",
      name: "Tさん",
      detail: "24歳・入社3年目",
      prevJob: null as string | null,
      headline: null as string | null,
      paragraphs: [
        "前職はバイトで、正直現場仕事が怖かったです。でも思ってたより怒鳴られたりしない。資格も取れて、自分に少し自信がつきました。",
      ],
    },
    {
      initial: "M",
      name: "Mさん",
      detail: "25歳・入社3年目",
      prevJob: "前職：ケータイショップ店員",
      headline: "接客から、現場の仕事へ。",
      paragraphs: [
        "ケータイショップで2年ほど働いていました。接客も悪くなかったけど、この先もずっと続けるイメージは持てなくて。",
        "水道の仕事は完全に未経験で、最初は道具の名前も何も分かりませんでした。でも先輩と一緒に現場に入りながら少しずつ覚えていけて、思ったよりも怖くなかったです。",
        "今は任せてもらえる仕事も増えてきて、自信もついてきた気がします。最初からできなくて当然なので、気になったらまず話だけ聞いてみてください。",
      ],
    },
  ],
} as const;

export function VoiceSection() {
  // 最も長いインタビューをメイン、それ以外をサブとして扱う
  const main = VOICES.items.find((v) => v.headline) ?? VOICES.items[0];
  const subs = VOICES.items.filter((v) => v !== main);

  return (
    <section id="voice" className="overflow-hidden bg-white pb-24 pt-20" aria-label="先輩の声">
      <div className="px-5">
        <p
          className="select-none font-display text-[clamp(48px,14vw,66px)] font-bold leading-none tracking-[-0.01em] text-sky-100"
          aria-hidden
        >
          INTERVIEW
        </p>
        <h2 className="mt-3 text-[clamp(26px,7vw,30px)] font-bold leading-[1.45] text-slate-950">
          先輩のリアルな声
        </h2>
      </div>

      {/* メインインタビュー */}
      <article className="relative mt-12 px-5">
        {/* イニシャルを人物写真の代わりの大きなタイポグラフィとして置く */}
        <span
          className="pointer-events-none absolute -top-6 right-2 select-none font-display text-[170px] font-bold leading-none text-sky-600/[0.07]"
          aria-hidden
        >
          {main.initial}
        </span>

        <span className="block font-display text-[88px] font-bold leading-[0.6] text-sky-300" aria-hidden>
          “
        </span>
        <h3 className="relative mt-2 text-[clamp(24px,6.6vw,28px)] font-black leading-[1.5] text-slate-900">
          {main.headline}
        </h3>
        <p className="relative mt-4 text-[14px] leading-[1.7] text-slate-700">
          <span className="font-semibold text-slate-800">{main.name}</span>
          <span className="mx-2 text-slate-300">/</span>
          {main.detail}
          {main.prevJob && <span className="block text-sky-700">{main.prevJob}</span>}
        </p>

        <div className="mt-8 space-y-5 border-l border-sky-200 pl-5 text-[16px] leading-[1.95] text-slate-800">
          {main.paragraphs.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>
      </article>

      {/* サブインタビュー：右にずらし、補助的に見せる */}
      <div className="mt-16 px-5">
        {subs.map((v) => (
          <article
            key={v.name}
            className="ml-10 border-t border-slate-200 py-8"
          >
            <p className="text-[14px] text-slate-700">
              <span className="text-[15px] font-bold text-slate-900">{v.name}</span>
              <span className="mx-2 text-slate-300">/</span>
              {v.detail}
            </p>
            {v.paragraphs.map((para) => (
              <p key={para} className="mt-3 text-[15px] leading-[1.9] text-slate-800">
                「{para}」
              </p>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}
