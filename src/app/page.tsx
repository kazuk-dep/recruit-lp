import { HeroSection } from "@/components/HeroSection";
import { MessageSection } from "@/components/MessageSection";
import { SkillSection } from "@/components/SkillSection";
import { BeginnerSection } from "@/components/BeginnerSection";
import { WorkAppealSection } from "@/components/WorkAppealSection";
import { TeachingSection } from "@/components/TeachingSection";
import { VoiceSection } from "@/components/VoiceSection";
import { FitSection } from "@/components/FitSection";
import { ConditionsSection } from "@/components/ConditionsSection";
import { FlowSection } from "@/components/FlowSection";
import { FinalCTASection } from "@/components/FinalCTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 flex justify-center">
      <div className="w-full max-w-[480px] bg-white">
        <HeroSection />
        <MessageSection />
        <SkillSection />
        <BeginnerSection />
        <TeachingSection />
        <VoiceSection />
        <FitSection />
        <ConditionsSection />
        <FlowSection />
        <FinalCTASection />
      </div>
    </main>
  );
}
