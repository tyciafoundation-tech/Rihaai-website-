import { RIHAI_DATA } from "../data/rihaiData";
import bailBondHandsImg from "../assets/bail-bond-hands.png";
import { ArrowRight } from "lucide-react";

export const VinayStory = () => {
  const { vinayCaseStudy } = RIHAI_DATA;

  const dossierRows = [
    { label: "Location", value: vinayCaseStudy.location },
    { label: "Charge", value: vinayCaseStudy.chargeType },
    {
      label: "Judicial Status",
      value: "Bail Formally Granted",
      highlight: "text-[#1F5E43] bg-[#1F5E43]/10 px-2.5 py-0.5 rounded-full inline-block font-medium",
    },
    {
      label: "Financial Barrier",
      value: "₹15,000 Bail Bond • Zero family savings",
      highlight: "text-[#9B231B] font-medium",
    },
  ];

  return (
    <section id="case-study" className="py-16 sm:py-24 bg-[#FAF9F5]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Visual Bail Bond Illustration + Structured Dossier */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-[#E2DCCF] shadow-[0_2px_10px_rgba(24,23,21,0.03)] overflow-hidden">
              <div className="bg-[#EFECE4] border-b border-[#E2DCCF] px-4 pt-4">
                <img
                  src={bailBondHandsImg}
                  alt="Illustration of hands bound by a financial bail bond"
                  className="w-full aspect-[767/401] object-contain"
                />
              </div>

              <div className="p-6 sm:p-7 border-b border-[#E2DCCF] flex items-baseline justify-between gap-4">
                <h3 className="font-poppins text-[20px] font-bold text-[#181715]">
                  {vinayCaseStudy.name}’s Case Dossier
                </h3>
                <span className="text-[12px] font-mono text-[#6B655B] tabular-nums shrink-0">
                  Case #014
                </span>
              </div>

              <dl className="divide-y divide-[#F2EDE3] px-6 sm:px-7">
                {dossierRows.map((row) => (
                  <div
                    key={row.label}
                    className="py-4 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 items-baseline"
                  >
                    <dt className="text-[12px] font-mono text-[#6B655B] uppercase tracking-wide">
                      {row.label}
                    </dt>
                    <dd className="sm:col-span-2 text-[14px] font-roboto text-[#181715]">
                      <span className={row.highlight || ""}>{row.value}</span>
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="p-6 sm:p-7 bg-[#F2EDE3]/70 border-t border-[#E2DCCF]">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#5F594F] font-semibold mb-1.5">
                  Primary Household Impact
                </div>
                <p className="text-[14px] font-roboto text-[#3D3933] leading-[1.6]">
                  Widowed mother living in an informal settlement, earning daily domestic wages.
                  Without Vinay’s income, the family faced immediate rent default and food insecurity.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Prose */}
          <div className="lg:col-span-7">
            <h2 className="font-poppins text-[1.75rem] sm:text-[2.25rem] leading-[1.15] tracking-[-0.02em] font-bold text-[#181715] max-w-[24ch]">
              Granted liberty by a judge. Kept in prison by a ₹15,000 gap.
            </h2>

            <p className="mt-5 text-[16px] sm:text-[17px] font-roboto text-[#3D3933] leading-[1.7] max-w-[62ch]">
              {vinayCaseStudy.story}
            </p>

            <blockquote className="mt-6 bg-[#F2EDE3] rounded-xl p-5 sm:p-6 font-roboto text-[15px] sm:text-[16px] text-[#181715] italic leading-[1.65] max-w-[60ch]">
              “{vinayCaseStudy.takeaway}”
            </blockquote>

            <p className="mt-6 text-[15px] font-roboto text-[#4A453E] leading-[1.7] max-w-[62ch]">
              Vinay’s case is not an exception. It represents thousands of undertrials in Tihar,
              Dasna, and jails across Uttar Pradesh, Maharashtra, and Bihar. When Rihaai covers
              the verified court Fixed Deposit through legal counsel, Vinay is reunited with his
              family, resumes his livelihood, and defends his case with dignity.
            </p>

            <div className="mt-7">
              <a
                href="#process"
                className="inline-flex items-center gap-2 text-[14px] font-poppins font-semibold text-[#9B231B] hover:text-[#7A1913] transition-colors"
              >
                <span>See how Rihaai bridges this gap step-by-step</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
