import { RIHAI_DATA } from "../data/rihaiData";
import { Scale, Coins, Users, ShieldCheck, FileText, Building2, XCircle, ArrowRight } from "lucide-react";

export const EligibilityCriteria = () => {
  const iconComponents = {
    Scale,
    Coins,
    Users,
    ShieldCheck,
    FileText,
    Building2,
  };

  const boundaries = [
    "Rihaai DOES NOT decide guilt or innocence, or interfere with ongoing criminal trials.",
    "Rihaai DOES NOT replace state legal aid, private defence advocates, or prison authorities.",
    "Rihaai DOES NOT act as personal/local surety or assume legal custody liabilities.",
    "Rihaai DOES NOT disburse unverified cash directly to individuals or third parties.",
  ];

  return (
    <section id="eligibility" className="py-16 sm:py-24 bg-[#F2EDE3] border-t border-[#E2DCCF]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* Left-aligned Header */}
        <div className="max-w-[65ch] mb-10 sm:mb-14">
          <h2 className="font-poppins text-[1.75rem] sm:text-[2.25rem] leading-[1.15] tracking-[-0.02em] font-bold text-[#181715]">
            Eligibility & Verification Criteria
          </h2>
          <p className="mt-3.5 text-[15px] sm:text-[17px] text-[#4A453E] leading-[1.65] font-roboto">
            Rihaai operates within a strictly defined, transparent mandate so every rupee reaches
            verified cases while upholding the rule of law.
          </p>
        </div>

        {/* 6 Criteria Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RIHAI_DATA.eligibilityCriteria.map((item) => {
            const Icon = iconComponents[item.icon] || Scale;
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E2DCCF] shadow-[0_2px_10px_rgba(24,23,21,0.03)]"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FAF9F5] border border-[#E2DCCF] flex items-center justify-center text-[#C93E31]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="mt-5 font-poppins text-[17px] font-bold text-[#181715]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14px] sm:text-[15px] text-[#4A453E] leading-[1.6] font-roboto">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* High-Contrast Ethical Scope Banner */}
        <div className="mt-8 bg-[#181715] text-[#FAF9F5] rounded-2xl p-6 sm:p-9">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/15">
            <div>
              <h3 className="font-poppins text-[20px] sm:text-[22px] font-bold text-white">
                Institutional Scope & Ethical Boundaries
              </h3>
              <p className="mt-1.5 text-[14px] text-[#CFC8BA] font-roboto">
                Clear guardrails that govern every case review and court deposit.
              </p>
            </div>
            <a
              href={`mailto:${RIHAI_DATA.meta.emailPrimary}`}
              className="shrink-0 inline-flex items-center gap-1.5 text-[13px] font-poppins font-semibold text-[#E66558] hover:text-white transition-colors"
            >
              <span>Contact Legal Review Committee</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {boundaries.map((rule) => (
              <div
                key={rule}
                className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 text-[14px] text-[#E8E2D5] leading-[1.55] font-roboto"
              >
                <XCircle className="w-4 h-4 text-[#E66558] shrink-0 mt-0.5" />
                <span>{rule}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
