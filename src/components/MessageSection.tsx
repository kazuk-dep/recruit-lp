import { MarkerText } from "./MarkerText";

const MESSAGE = {
  heading: ["技術が残れば、", "自信も残る。"],
  body: [
    "最初は、道具の名前も現場の流れも分からなくて大丈夫です。",
    "一つずつ覚えていけば、できることが増えていきます。",
    "その積み重ねが、自分の技術になり、自信になります。",
  ],
} as const;

export function MessageSection() {
  return (
    <section
      className="relative overflow-hidden px-5 py-16"
      style={{
        background:
          "linear-gradient(160deg, #f0f9ff 0%, #ecfdf5 100%)",
      }}
      aria-label="メッセージ"
    >
      {/* 薄い円形装飾 */}
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-sky-200/25"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-emerald-200/25"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-[480px]">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-sky-500">
          Message
        </p>

        {/* 見出し：左側に縦アクセントライン */}
        <div className="flex gap-4">
          <div
            className="w-1 flex-none rounded-full"
            style={{
              background: "linear-gradient(to bottom, #0ea5e9, #10b981)",
            }}
            aria-hidden
          />
          <h2 className="text-[2.25rem] font-extrabold leading-[1.3] tracking-tight text-slate-950">
            <MarkerText color="green">{MESSAGE.heading[0]}</MarkerText>
            <br />
            <MarkerText color="green">{MESSAGE.heading[1]}</MarkerText>
          </h2>
        </div>

        {/* 本文ブロック */}
        <div className="mt-7 space-y-4 rounded-2xl bg-white/60 px-5 py-5 text-base leading-[1.85] text-slate-600 backdrop-blur-sm">
          {MESSAGE.body.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
