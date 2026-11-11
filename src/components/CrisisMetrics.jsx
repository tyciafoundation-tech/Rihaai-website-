import { RIHAI_DATA } from "../data/rihaiData";
import khelBarsImg from "../assets/khel-bars-silhouette.webp";
import { ArrowRight } from "lucide-react";

export const CrisisMetrics = () => {
  return (
    <section id="crisis" className="py-16 sm:py-24 bg-[#F2EDE3] border-y border-[#E2DCCF]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* Left-aligned Section Header */}
        <div className="max-w-[65ch] mb-10 sm:mb-14">
          <h2 className="font-poppins text-[1.75rem] sm:text-[2.25rem] leading-[1.15] tracking-[-0.02em] font-bold text-[#181715]">
            India’s Undertrial Emergency in Verified Data
          </h2>
          <p className="mt-3.5 text-[15px] sm:text-[17px] text-[#4A453E] leading-[1.65] font-roboto">
            Data from the National Crime Records Bureau (NCRB) and the National Legal Services Authority
            (NALSA) reveals a quiet humanitarian crisis: our prisons are overcrowded not by convicted
            offenders, but by people who cannot afford a financial bond.
          </p>
        </div>

        {/* Unified 4-Column Ruled Data Grid */}
        <div className="bg-white rounded-2xl border border-[#E2DCCF] shadow-[0_2px_10px_rgba(24,23,21,0.03)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E2DCCF]">
          {RIHAI_DATA.crisisStats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 sm:p-7 flex flex-col justify-between gap-6"
            >
              <div>
                <div className="font-poppins text-[2rem] sm:text-[2.25rem] leading-none font-extrabold text-[#181715] tracking-[-0.03em] tabular-nums">
                  {stat.value}
                </div>
                <h3 className="mt-3 font-poppins text-[15px] font-semibold text-[#9B231B]">
                  {stat.label}
                </h3>
                <p className="mt-2.5 text-[14px] font-roboto text-[#4A453E] leading-[1.6]">
                  {stat.detail}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F2EDE3] text-[11px] font-mono text-[#59534A]">
                Source: {stat.source}
              </div>
            </div>
          ))}
        </div>

        {/* Aligned Systemic Insight Callout with PDF Illustration */}
        <div className="mt-8 bg-white rounded-2xl p-6 sm:p-7 border border-[#E2DCCF] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 max-w-[74ch]">
            <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-xl overflow-hidden border border-[#E2DCCF] bg-[#759B8F]">
              <img
                src={khelBarsImg}
                alt="Illustration of an undertrial prisoner waiting behind bars"
                width={240}
                height={263}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-1.5">
              <h3 className="font-poppins text-[14px] font-semibold text-[#9B231B]">
                From the 2024 Special Release Drive
              </h3>
              <p className="text-[15px] sm:text-[16px] text-[#181715] font-roboto leading-[1.65]">
                “In a 2024 nationwide campaign, 951 prisoners were officially cleared for release. Yet 617
                individuals remained locked behind bars because their families could not produce an eligible
                surety. Bail without the means to pay is no bail at all.”
              </p>
            </div>
          </div>

          <a
            href="#case-study"
            className="shrink-0 inline-flex items-center gap-2 text-[14px] font-poppins font-semibold text-[#181715] hover:text-[#9B231B] transition-colors whitespace-nowrap"
          >
            <span>Read Vinay’s Story</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
