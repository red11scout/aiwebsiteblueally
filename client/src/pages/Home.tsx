/**
 * BlueAlly AI Landing Page
 * Design: Premium dark aesthetic — CrewAI-caliber
 * Style: Dark navy foundation, animated flywheel, immersive hero
 * Typography: DM Sans with professional hierarchy
 */

import Navigation from "@/components/Navigation";
import AIChatWidget from "@/components/AIChatWidget";
import HeroSection from "@/components/sections/HeroSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import StakesSection from "@/components/sections/StakesSection";
import OpportunitySection from "@/components/sections/OpportunitySection";
import FlywheelSection from "@/components/sections/FlywheelSection";
import FrameworkSection from "@/components/sections/FrameworkSection";
import ProcessSection from "@/components/sections/ProcessSection";
import SuccessStoriesSection from "@/components/sections/SuccessStoriesSection";
import DifferentiatorSection from "@/components/sections/DifferentiatorSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import AssessmentCTASection from "@/components/sections/AssessmentCTASection";
import OfferingsSection from "@/components/sections/OfferingsSection";
import JourneySection from "@/components/sections/JourneySection";
import RapidPrototypeSection from "@/components/sections/RapidPrototypeSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <SocialProofSection />
        <StakesSection />
        <OpportunitySection />
        <FlywheelSection />
        <FrameworkSection />
        <ProcessSection />
        <SuccessStoriesSection />
        <DifferentiatorSection />
        <IndustriesSection />
        <AssessmentCTASection />
        <OfferingsSection />
        <JourneySection />
        <RapidPrototypeSection />
        <CTASection />
      </main>
      <Footer />
      <AIChatWidget />
    </div>
  );
}
