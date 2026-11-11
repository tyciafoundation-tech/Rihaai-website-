import { RIHAI_DATA } from "../data/rihaiData";
import { User, MapPin, Scale, Clock, AlertTriangle, ArrowRight } from "lucide-react";

export const VinayStory = () => {
  const { vinayCaseStudy } = RIHAI_DATA;

  return (
    <section id="case-study" className="py-20 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Dossier Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-7 border border-[#E8E4DA] shadow-xs relative overflow-hidden">
              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-28 h-28 bg-[#F4F1EA] rounded-full pointer-events-none -z-0" />

              <div className="relative z-10">
                <div className="flex items-center justify-between pb-5 border-b border-[#E8E4DA]">
                  <div>
                    <span className="text-[11px] font-mono tracking-wider uppercase text-[#B85042] font-semibold">
                      Case Dossier #014
                    </span>
                    <h3 className="font-poppins text-2xl font-bold text-[#181715]">
                      {vinayCaseStudy.name}’s Reality
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#FAF9F5] border border-[#E8E4DA] flex items-center justify-center text-[#423E38]">
                    <User className="w-5 h-5" />
                  </div>
                </div>

                <div className="py-5 space-y-4 text-xs font-roboto">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#857F73] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[#857F73] block">Location</span>
                      <span className="font-medium text-[#181715]">{vinayCaseStudy.location}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Scale className="w-4 h-4 text-[#857F73] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[#857F73] block">Charge</span>
                      <span className="font-medium text-[#181715]">{vinayCaseStudy.chargeType}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#857F73] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[#857F73] block">Judicial Status</span>
                      <span className="font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-sm inline-block">
                        Bail Formally Granted
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-[#B85042] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[#857F73] block">The Barrier</span>
                      <span className="font-medium text-[#B85042]">
                        ₹15,000 Bail Bond • Family has zero savings
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E8E4DA] bg-[#FAF9F5] -mx-7 -mb-7 p-6 rounded-b-3xl">
                  <div className="text-[11px] font-mono text-[#857F73] mb-1">
                    PRIMARY HOUSEHOLD IMPACT
                  </div>
                  <p className="text-xs font-roboto text-[#423E38] leading-relaxed">
                    Widowed mother living in an informal settlement, earning daily domestic wages.
                    Without Vinay's income, the family faced immediate rent default and malnutrition.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Prose */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-[#B85042] font-semibold">
              The Human Face of Bail
            </div>

            <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-[#181715] tracking-tight leading-tight">
              Granted liberty by a judge. Kept in prison by a ₹15,000 gap.
            </h2>

            <p className="text-base sm:text-lg font-roboto text-[#423E38] leading-relaxed">
              {vinayCaseStudy.story}
            </p>

            <blockquote className="border-l-4 border-[#B85042] pl-4 sm:pl-6 py-3 my-6 font-roboto text-base sm:text-lg font-medium text-[#292723] bg-[#F4F1EA]/60 rounded-r-xl italic leading-relaxed">
              "{vinayCaseStudy.takeaway}"
            </blockquote>

            <p className="text-sm font-roboto text-[#625D54] leading-relaxed">
              Vinay’s case is not an exception. It is representative of thousands of undertrials in Tihar,
              Dasna, and jails across Uttar Pradesh, Maharashtra, and Bihar. When Project Rihaai covers
              the verified court Fixed Deposit through legal counsel, Vinay is reunited with his family,
              can resume his livelihood, and defend his case with dignity.
            </p>

            <div className="pt-2">
              <a
                href="#process"
                className="inline-flex items-center gap-2 text-xs font-poppins font-semibold text-[#181715] hover:text-[#B85042] transition-colors"
              >
                <span>See how Project Rihaai bridges this gap step-by-step</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
