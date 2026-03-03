import { Hero } from "@/components/homepage/Hero";
import { StakesGrid } from "@/components/homepage/StakesGrid";
import { MethodologyTimeline } from "@/components/homepage/MethodologyTimeline";
import { IndustryHub } from "@/components/homepage/IndustryHub";
import { DeliverablePreview } from "@/components/homepage/DeliverablePreview";
import { Calculator } from "@/components/homepage/Calculator";
import { SocialProofWall } from "@/components/homepage/SocialProofWall";
import { FinalCta } from "@/components/homepage/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StakesGrid />
      <MethodologyTimeline />
      <IndustryHub />
      <DeliverablePreview />
      <Calculator />
      <SocialProofWall />
      <FinalCta />
    </>
  );
}
