import { MarkerText } from "./MarkerText";

const VOICES = {
  items: [
    {
      initial: "K",
      name: "Kさん",
      detail: "22歳・入社2年目",
      prevJob: null as string | null,
      headline: null as string | null,
      paragraphs: [
        "最初は道具の名前すら分からなくて。でも先輩が毎回ちゃんと教えてくれて、3ヶ月くらいで流れが掴めてきました。今は任せてもらえる作業が少しずつ増えてきてます。",
      ],
    },
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
  return (
    <section className="px-5 py-14" aria-label="先輩の声">
      <div className="mx-auto w-full max-w-[480px]">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-sky-500">
          Voice
        </p>
        <h2 className="text-[2rem] font-extrabold leading-[1.3] tracking-tight text-slate-950">
          <MarkerText color="blue">先輩のリアルな声</MarkerText>
        </h2>

        <ul className="mt-7 space-y-4">
          {VOICES.items.map((v) => (
            <li
              key={v.name}
              className={`rounded-3xl px-5 py-5 shadow-sm ${
                v.headline
                  ? "bg-sky-50 ring-1 ring-sky-200"
                  : "bg-white ring-1 ring-slate-900/5"
              }`}
            >
              {v.headline && (
                <p className="mb-3 text-sm font-bold text-sky-700">{v.headline}</p>
              )}
              <div className="space-y-3">
                {v.paragraphs.map((para, i) => (
                  <p
                    key={i}
                    className="text-base italic leading-[1.8] text-slate-700"
                  >
                    {i === 0 ? `「${para}` : para}
                    {i === v.paragraphs.length - 1 ? "」" : ""}
                  </p>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3 border-t border-slate-100 pt-4">
                <div
                  className="flex h-9 w-9 flex-none items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ background: "linear-gradient(135deg, #0ea5e9, #10b981)" }}
                  aria-hidden
                >
                  {v.initial}
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{v.name}</div>
                  <div className="text-xs text-slate-500">{v.detail}</div>
                  {v.prevJob && (
                    <div className="mt-0.5 text-xs font-medium text-sky-600">{v.prevJob}</div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
