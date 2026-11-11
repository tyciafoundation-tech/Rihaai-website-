import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { CrisisMetrics } from "./components/CrisisMetrics";
import { VinayStory } from "./components/VinayStory";
import { HowItWorks } from "./components/HowItWorks";
import { KhelRihaaiKa } from "./components/KhelRihaaiKa";
import { EligibilityCriteria } from "./components/EligibilityCriteria";
import { ImpactCalculator } from "./components/ImpactCalculator";
import { CaseReferralSection } from "./components/CaseReferralSection";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#181715] selection:bg-[#EAE4D7] selection:text-[#181715]">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CrisisMetrics />
        <VinayStory />
        <HowItWorks />
        <KhelRihaaiKa />
        <EligibilityCriteria />
        <ImpactCalculator />
        <CaseReferralSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
