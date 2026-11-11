import { useEffect } from "react";
import { CrisisMetrics } from "./CrisisMetrics";
import { VinayStory } from "./VinayStory";
import { HowItWorks } from "./HowItWorks";
import { KhelRihaaiKa } from "./KhelRihaaiKa";
import { EligibilityCriteria } from "./EligibilityCriteria";
import { ImpactCalculator } from "./ImpactCalculator";
import { CaseReferralSection } from "./CaseReferralSection";
import { FAQ } from "./FAQ";
import { TeamSection } from "./TeamSection";

/**
 * Lazy-loaded container for below-the-fold sections so the hero paints immediately.
 */
export default function BelowFold() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) target.scrollIntoView();
    }
  }, []);

  return (
    <>
      <CrisisMetrics />
      <VinayStory />
      <HowItWorks />
      <KhelRihaaiKa />
      <EligibilityCriteria />
      <ImpactCalculator />
      <CaseReferralSection />
      <FAQ />
      <TeamSection />
    </>
  );
}
