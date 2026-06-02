import { MarkerText } from "./MarkerText";

const FIT = {
  heading: "こんな人に向いています。",
  items: [
    "営業や接客より、手を動かす仕事の方が合いそう",
    "何か一つ、自分に残る技術を身につけたい",
    "体を動かす仕事が嫌いではない",
    "分からないことを少しずつ覚えていける",
    "今の働き方を少し変えたい気持ちがある",
  ],
  note:
    "気になることはLINEで気軽に聞いてください。いきなり応募じゃなくて大丈夫です。",
} as const;

export function FitSection() {
  return (
    <section className="px-5 py-14 bg-sky-50" aria-label="向いている人">
      <div className="mx-auto w-full max-w-[480px]">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-sky-500">
          Fit
        </p>
        <h2 className="text-[2rem] font-extrabold leading-[1.3] tracking-tight text-slate-950">
          <MarkerText color="blue">{FIT.heading}</MarkerText>
        </h2>
        <ul className="mt-7 space-y-3">
          {FIT.items.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-2xl bg-white px-4 py-3.5 text-base leading-relaxed text-slate-800 shadow-sm"
            >
              <span
                className="mt-[0.2em] inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-500 text-xs text-white"
                aria-hidden
              >
                ✓
              </span>
              <span className="text-pretty">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm leading-relaxed text-slate-500">{FIT.note}</p>
      </div>
    </section>
  );
}
