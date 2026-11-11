import { RIHAI_DATA } from "../data/rihaiData";
import { Scale, Coins, Users, ShieldCheck, FileText, Building2, CheckCircle2, XCircle } from "lucide-react";

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
    <section id="eligibility" className="py-20 bg-[#F4F1EA] border-t border-[#E8E4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-[#B85042] font-semibold mb-2">
            Standards & Governance
          </div>
          <h2 className="font-poppins text-3xl sm:text-4xl text-[#181715] font-bold tracking-tight mb-4">
            Indicative Eligibility & Verification Criteria
          </h2>
          <p className="text-base sm:text-lg text-[#625D54] leading-relaxed font-roboto">
            Project Rihaai operates within a strictly defined, transparent mandate to ensure funding reaches
            the most vulnerable cases while upholding the rule of law.
          </p>
        </div>

        {/* 6 Criteria Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {RIHAI_DATA.eligibilityCriteria.map((item) => {
            const Icon = iconComponents[item.icon] || Scale;
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-[#E8E4DA] shadow-xs flex flex-col justify-between hover:border-[#D9D3C5] transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FAF9F5] border border-[#E8E4DA] flex items-center justify-center text-[#B85042] mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-poppins text-lg font-bold text-[#181715] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#625D54] leading-relaxed font-roboto">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#F4F1EA] flex items-center gap-1.5 text-xs text-emerald-800 font-poppins font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Mandatory Requirement</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ethical Boundaries & Scope Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E4DA]">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B85042]" />
            <h4 className="font-poppins text-lg font-bold text-[#181715]">
              Institutional Scope & Ethical Boundaries
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-roboto">
            {boundaries.map((rule, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF9F5] border border-[#E8E4DA]/70 text-xs text-[#423E38] leading-relaxed"
              >
                <XCircle className="w-4 h-4 text-[#B85042] shrink-0 mt-0.5" />
                <span>{rule}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-[#E8E4DA] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#625D54] font-roboto">
            <p>
              Are you an institutional partner or prison visitor seeking to collaborate?
            </p>
            <a
              href={`mailto:${RIHAI_DATA.meta.emailPrimary}`}
              className="font-poppins font-semibold text-[#181715] hover:text-[#B85042] underline underline-offset-4"
            >
              Contact Legal Review Committee →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
