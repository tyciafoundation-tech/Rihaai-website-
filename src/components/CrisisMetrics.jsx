import { RIHAI_DATA } from "../data/rihaiData";
import { AlertCircle, TrendingUp, Users2, Landmark } from "lucide-react";

export const CrisisMetrics = () => {
  const iconMap = [Users2, TrendingUp, AlertCircle, Landmark];

  return (
    <section id="crisis" className="py-20 bg-[#F4F1EA] border-y border-[#E8E4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-[#B85042] font-semibold mb-2">
            The Structural Crisis
          </div>
          <h2 className="font-poppins text-3xl sm:text-4xl text-[#181715] font-bold tracking-tight mb-4">
            India’s Undertrial Emergency in Verified Data
          </h2>
          <p className="text-base sm:text-lg text-[#625D54] leading-relaxed font-roboto">
            Data from the National Crime Records Bureau (NCRB) and the National Legal Services Authority
            (NALSA) reveals a quiet humanitarian crisis: our prisons are overcrowded not by convicted
            offenders, but by people who cannot afford a financial bond.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {RIHAI_DATA.crisisStats.map((stat, idx) => {
            const Icon = iconMap[idx] || AlertCircle;
            return (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-6 border border-[#E8E4DA] shadow-xs flex flex-col justify-between hover:border-[#D9D3C5] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-medium text-[#857F73]">METRIC 0{idx + 1}</span>
                    <div className="w-8 h-8 rounded-lg bg-[#FAF9F5] border border-[#E8E4DA] flex items-center justify-center text-[#B85042]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="font-poppins text-3xl sm:text-4xl font-extrabold text-[#181715] mb-2 tracking-tight">
                    {stat.value}
                  </div>
                  <h3 className="text-sm font-poppins font-semibold text-[#292723] mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-xs font-roboto text-[#625D54] leading-relaxed">
                    {stat.detail}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#F4F1EA] text-[10.5px] font-mono text-[#857F73]">
                  Source: {stat.source}
                </div>
              </div>
            );
          })}
        </div>

        {/* Systemic Insight Quote Box */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E4DA] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-3xl">
            <div className="text-xs font-mono font-semibold uppercase text-[#B85042] tracking-wider">
              From the 2024 Special Release Drive
            </div>
            <p className="text-sm sm:text-base text-[#292723] font-roboto italic leading-relaxed">
              "In a 2024 nationwide campaign, 951 prisoners were officially cleared for release. Yet 617
              individuals remained locked behind bars because their families could not produce an eligible
              surety. Bail without the means to pay is no bail at all."
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="#case-study"
              className="inline-flex items-center text-xs font-poppins font-semibold text-[#181715] hover:text-[#B85042] underline underline-offset-4"
            >
              Read Vinay’s Story →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
