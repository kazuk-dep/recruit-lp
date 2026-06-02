import Image from "next/image";

const WORK_APPEAL = {
  heading: ["見えないところで、", "暮らしを支える仕事。"],
  body: [
    "水道や配管の仕事は、普段はあまり目立ちません。",
    "でも、暮らしに欠かせない大事な仕事です。",
    "直した場所に水が通る。現場が終わる。",
    "その一つひとつが、自分の仕事として残っていきます。",
  ],
} as const;

export function WorkAppealSection() {
  return (
    <section className="px-5 py-12 bg-slate-950 text-white" aria-label="仕事の魅力">
      <div className="mx-auto w-full max-w-[480px]">
        <h2 className="text-[2rem] font-extrabold leading-[1.3] tracking-tight">
          {WORK_APPEAL.heading[0]}
          <br />
          {WORK_APPEAL.heading[1]}
        </h2>

        <div className="mt-5 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <div className="relative aspect-[4/5] w-full">
            <Image
              src="/images/hero.jpg"
              alt=""
              fill
              sizes="(max-width: 480px) 100vw, 480px"
              className="object-cover object-[70%_60%] opacity-90"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-slate-950/55 to-slate-950/0"
              aria-hidden
            />
          </div>
        </div>

        <div className="mt-5 space-y-3 text-base leading-relaxed text-white/80">
          {WORK_APPEAL.body.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
