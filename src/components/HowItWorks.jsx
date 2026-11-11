import { useState } from "react";
import { RIHAI_DATA } from "../data/rihaiData";
import { ChevronRight, ShieldCheck, ArrowRight, ArrowLeft } from "lucide-react";

export const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = RIHAI_DATA.supportProcess;
  const current = steps[activeStep];

  return (
    <section id="process" className="py-20 bg-[#F4F1EA] border-t border-[#E8E4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-[#B85042] font-semibold mb-2">
            The 7-Stage Support Lifecycle
          </div>
          <h2 className="font-poppins text-3xl sm:text-4xl text-[#181715] font-bold tracking-tight mb-4">
            How Project Rihaai Works
          </h2>
          <p className="text-base sm:text-lg text-[#625D54] leading-relaxed font-roboto">
            A rigorous, lawful, and dignity-first protocol developed under TYCIA Foundation guidelines
            to ensure 100% transparency, institutional compliance, and lasting reintegration.
          </p>
        </div>

        {/* Interactive Step Navigator for desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 mb-8">
          {steps.map((s, index) => {
            const isActive = index === activeStep;
            return (
              <button
                key={s.step}
                onClick={() => setActiveStep(index)}
                className={`text-left p-3.5 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                  isActive
                    ? "bg-[#181715] text-[#FAF9F5] border-[#181715] shadow-xs"
                    : "bg-white text-[#423E38] border-[#E8E4DA] hover:border-[#D9D3C5]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-[10px] font-mono font-semibold uppercase ${
                      isActive ? "text-[#B85042]" : "text-[#857F73]"
                    }`}
                  >
                    Step 0{s.step}
                  </span>
                  {isActive && <ChevronRight className="w-3.5 h-3.5 text-[#B85042]" />}
                </div>
                <div className="text-xs font-poppins font-semibold leading-tight line-clamp-2">
                  {s.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Stage Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E4DA] shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-[#FAF9F5] border border-[#E8E4DA] text-[#B85042]">
                  STAGE 0{current.step} OF 07
                </span>
                <span className="text-xs font-medium text-[#857F73] uppercase tracking-wider font-mono">
                  {current.tag}
                </span>
              </div>

              <h3 className="font-poppins text-2xl sm:text-3xl font-bold text-[#181715]">
                {current.title}
              </h3>

              <p className="text-base sm:text-lg font-medium text-[#423E38] font-roboto">
                {current.summary}
              </p>

              <p className="text-sm sm:text-base text-[#625D54] leading-relaxed font-roboto">
                {current.description}
              </p>

              {/* Safeguard banner */}
              <div className="pt-3">
                <div className="bg-[#FAF9F5] border border-[#E8E4DA] rounded-2xl p-4 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-800 block">
                      Core Accountability Safeguard
                    </span>
                    <span className="text-xs sm:text-sm text-[#423E38] font-roboto">
                      {current.safeguard}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Next / Prev controls & Quick summary */}
            <div className="lg:col-span-4 bg-[#FAF9F5] rounded-2xl p-6 border border-[#E8E4DA] space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-[#857F73] mb-3">
                  Lifecycle Progress
                </h4>
                <div className="w-full bg-[#E8E4DA] h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#B85042] h-full transition-all duration-300 rounded-full"
                    style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between text-[11px] font-mono text-[#857F73] mt-2">
                  <span>Start: Identification</span>
                  <span>End: Reintegration</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="inline-flex items-center gap-1.5 text-xs font-poppins font-semibold px-3.5 py-2 rounded-lg border border-[#D9D3C5] bg-white text-[#181715] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#FAF9F5] transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>

                <button
                  disabled={activeStep === steps.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
                  className="inline-flex items-center gap-1.5 text-xs font-poppins font-semibold px-4 py-2 rounded-lg bg-[#181715] text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#292723] transition-colors"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="border-t border-[#E8E4DA] pt-4 text-xs text-[#625D54] font-roboto">
                <p>
                  Have an undertrial family member or legal aid client?
                </p>
                <a
                  href="#referral"
                  className="inline-block mt-2 font-poppins font-semibold text-[#B85042] hover:underline"
                >
                  Submit case details for review →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
