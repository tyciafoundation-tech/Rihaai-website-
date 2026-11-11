import { useState } from "react";
import { RIHAI_DATA } from "../data/rihaiData";
import { ChevronRight, ShieldCheck, ArrowRight, ArrowLeft } from "lucide-react";

export const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = RIHAI_DATA.supportProcess;
  const current = steps[activeStep];

  return (
    <section id="process" className="py-16 sm:py-24 bg-[#F2EDE3] border-t border-[#E2DCCF]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* Left-aligned Section Header */}
        <div className="max-w-[65ch] mb-10 sm:mb-14">
          <h2 className="font-poppins text-[1.75rem] sm:text-[2.25rem] leading-[1.15] tracking-[-0.02em] font-bold text-[#181715]">
            How Rihaai Works
          </h2>
          <p className="mt-3.5 text-[15px] sm:text-[17px] text-[#4A453E] leading-[1.65] font-roboto">
            A rigorous, lawful, and dignity-first 7-stage protocol developed under TYCIA Foundation
            guidelines to ensure full transparency, institutional compliance, and lasting reintegration.
          </p>
        </div>

        {/* 2-Column Pathway: Full-width Step Rail + Active Stage Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Rail: 7 Readable Sequential Steps */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-[#E2DCCF] divide-y divide-[#F2EDE3] overflow-hidden shadow-[0_2px_10px_rgba(24,23,21,0.03)]">
            {steps.map((s, index) => {
              const isActive = index === activeStep;
              return (
                <button
                  key={s.step}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  aria-current={isActive ? "step" : undefined}
                  className={`w-full text-left px-5 py-4 flex items-center justify-between gap-4 transition-colors ${
                    isActive
                      ? "bg-[#181715] text-[#FAF9F5]"
                      : "bg-white text-[#181715] hover:bg-[#FAF9F5]"
                  }`}
                >
                  <div className="flex items-baseline gap-3.5 min-w-0">
                    <span
                      className={`font-mono text-[12px] font-semibold tabular-nums shrink-0 ${
                        isActive ? "text-[#E25B4F]" : "text-[#59534A]"
                      }`}
                    >
                      0{s.step}
                    </span>
                    <div className="min-w-0">
                      <div className="font-poppins text-[14px] sm:text-[15px] font-semibold leading-snug">
                        {s.title}
                      </div>
                      <div
                        className={`text-[12px] font-roboto mt-0.5 truncate ${
                          isActive ? "text-[#D4CCB9]" : "text-[#59534A]"
                        }`}
                      >
                        {s.tag}
                      </div>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isActive ? "text-[#E25B4F] translate-x-0.5" : "text-[#ABA496]"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Panel: Active Stage Detail */}
          <div className="lg:col-span-7 lg:sticky lg:top-24 bg-white rounded-2xl p-6 sm:p-9 border border-[#E2DCCF] shadow-[0_2px_10px_rgba(24,23,21,0.03)]">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#F2EDE3]">
              <span className="font-mono text-[12px] font-semibold text-[#9B231B] uppercase tracking-wider tabular-nums">
                Stage 0{current.step} of 0{steps.length} • {current.tag}
              </span>
              <span className="font-mono text-[12px] text-[#59534A] tabular-nums">
                {Math.round(((activeStep + 1) / steps.length) * 100)}% Complete
              </span>
            </div>

            <div className="mt-6">
              <h3 className="font-poppins text-[1.35rem] sm:text-[1.75rem] leading-tight font-bold text-[#181715]">
                {current.title}
              </h3>

              <p className="mt-3 text-[16px] font-medium text-[#3D3933] font-roboto leading-[1.55]">
                {current.summary}
              </p>

              <p className="mt-4 text-[15px] text-[#4A453E] leading-[1.7] font-roboto max-w-[60ch]">
                {current.description}
              </p>
            </div>

            {/* Accountability Safeguard */}
            <div className="mt-6 bg-[#FAF9F5] border border-[#E2DCCF] rounded-xl p-4 sm:p-5 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#1F5E43] shrink-0 mt-0.5" />
              <div>
                <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#1F5E43]">
                  Core Accountability Safeguard
                </div>
                <p className="mt-1 text-[14px] text-[#3D3933] font-roboto leading-relaxed">
                  {current.safeguard}
                </p>
              </div>
            </div>

            {/* Progress & Step Controls */}
            <div className="mt-8 pt-6 border-t border-[#E2DCCF] space-y-5">
              <div className="w-full bg-[#F2EDE3] h-2 rounded-full overflow-hidden">
                <div
                  className="bg-[#9B231B] h-full transition-all duration-300 rounded-full"
                  style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                    className="inline-flex items-center gap-1.5 h-10 px-4 text-[13px] font-poppins font-semibold rounded-full border border-[#D4CCB9] bg-white text-[#181715] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#FAF9F5] transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Previous</span>
                  </button>

                  <button
                    type="button"
                    disabled={activeStep === steps.length - 1}
                    onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
                    className="inline-flex items-center gap-1.5 h-10 px-4 text-[13px] font-poppins font-semibold rounded-full bg-[#181715] text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#2E2B27] transition-colors"
                  >
                    <span>Next Stage</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <a
                  href="#referral"
                  className="text-[13px] font-poppins font-semibold text-[#9B231B] hover:text-[#7A1913] transition-colors"
                >
                  Submit a case for review →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
