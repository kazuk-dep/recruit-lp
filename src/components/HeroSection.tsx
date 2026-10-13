"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const HERO = {
  cta: "話を聞いてみる",
  ctaNote: "LINEで質問できます。匿名でもOK。",
} as const;

const NAV_ITEMS = [
  { label: "身につく技術", href: "#skill" },
  { label: "未経験でも大丈夫", href: "#beginner" },
  { label: "先輩の声", href: "#voice" },
  { label: "働き方・条件", href: "#conditions" },
  { label: "相談の流れ", href: "#flow" },
] as const;

export function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    const onOutside = (e: MouseEvent) => {
      if (
        !menuRef.current?.contains(e.target as Node) &&
        !buttonRef.current?.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onOutside);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onOutside);
    };
  }, [isMenuOpen]);

  return (
    <section
      className="relative min-h-[100svh] w-full overflow-hidden"
      aria-label="採用ヒーロー"
    >
      {/* Background image */}
      <Image
        src="/images/hero.jpg"
        alt="青空の下で配管作業をする作業員"
        fill
        priority
        sizes="(max-width: 480px) 100vw, 480px"
        className="object-cover object-[58%_92%]"
      />

      {/* Top gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(150deg, rgba(240,252,255,0.58) 0%, rgba(224,242,254,0.32) 44%, rgba(209,250,229,0.10) 70%, transparent 100%)",
        }}
        aria-hidden
      />

      {/* Bottom vignette */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64"
        style={{
          background:
            "linear-gradient(to top, rgba(10,40,60,0.52) 0%, rgba(10,40,60,0.22) 55%, transparent 100%)",
        }}
        aria-hidden
      />

      {/* Decorative water curve */}
      <svg
        className="pointer-events-none absolute inset-x-0 w-full"
        style={{ bottom: "14rem" }}
        height="48"
        viewBox="0 0 430 48"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0 32 Q108 4 215 24 Q322 44 430 16 V48 H0Z"
          fill="rgba(186,230,253,0.20)"
        />
      </svg>

      {/* Header */}
      <header className="relative z-20 h-16 bg-white/10 backdrop-blur-[2px]">
        <div className="flex h-full items-center justify-between px-5">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt=""
              width={120}
              height={40}
              className="h-8 w-auto object-contain"
            />
            <span className="text-sm font-semibold tracking-wide text-sky-950">
              マイ建設株式会社
            </span>
          </div>
          <button
            ref={buttonRef}
            type="button"
            onClick={() => setIsMenuOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 text-sky-950 backdrop-blur-sm"
            aria-label="メニューを開く"
            aria-expanded={isMenuOpen}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Dropdown menu — sibling to header, absolute within section */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute right-4 top-[68px] z-30 w-[240px] rounded-2xl border border-white/50 bg-white/90 p-2 shadow-lg backdrop-blur-md"
          role="dialog"
          aria-label="ページ内メニュー"
        >
          <ul className="divide-y divide-slate-100/70">
            {NAV_ITEMS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-xl px-3 py-3 text-sm font-medium text-sky-950 hover:bg-sky-50 active:bg-emerald-50"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Main copy */}
      <div className="relative z-10 px-5 pt-10">
        <div
          className="mb-4 h-[3px] w-10 rounded-full"
          style={{ background: "linear-gradient(to right, #0ea5e9, #10b981)" }}
          aria-hidden
        />
        <h1
          className="select-none text-5xl font-black leading-tight tracking-tight text-sky-950"
          style={{ textShadow: "0 1px 8px rgba(255,255,255,0.70)" }}
        >
          <span className="block">未経験から</span>
          <span className="block">技術が残る</span>
          <span className="block">仕事へ。</span>
        </h1>
      </div>

      {/* CTA */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-[max(3.5rem,env(safe-area-inset-bottom))]">
        <a
          href="#contact"
          className="flex min-h-14 w-full items-center justify-center rounded-2xl bg-white/75 px-5 text-base font-semibold text-sky-950 backdrop-blur-sm transition-[transform,filter] hover:brightness-95 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-950"
        >
          {HERO.cta}
        </a>
        <p
          className="mt-3 text-center text-xs leading-relaxed text-white/70"
          style={{ textShadow: "0 1px 4px rgba(10,40,60,0.4)" }}
        >
          {HERO.ctaNote}
        </p>
      </div>
    </section>
  );
}
