import { Barlow, Zen_Kaku_Gothic_New } from "next/font/google";
import { HeroSection } from "@/components/HeroSection";
import { WorkSection } from "@/components/WorkSection";
import { FeatureSection } from "@/components/FeatureSection";
import { VoiceSection } from "@/components/VoiceSection";
import { ConditionsSection } from "@/components/ConditionsSection";
import { FinalCTASection } from "@/components/FinalCTASection";

// Hero の見た目を変えないため、下層セクションだけに適用する書体
const zenKaku = Zen_Kaku_Gothic_New({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const barlow = Barlow({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 flex justify-center">
      <div className="w-full max-w-[480px] bg-white">
        <HeroSection />
        <div className={`lp-type ${zenKaku.className} ${barlow.variable}`}>
          <WorkSection />
          <FeatureSection />
          <VoiceSection />
          <ConditionsSection />
          <FinalCTASection />
        </div>
      </div>
    </main>
  );
}
