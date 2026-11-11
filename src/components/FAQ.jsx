import { useState } from "react";
import { RIHAI_DATA } from "../data/rihaiData";
import { ChevronDown, Mail } from "lucide-react";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#FAF9F5] border-t border-[#E8E4DA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-[#B85042] font-semibold mb-2">
            Questions & Legal Clarifications
          </div>
          <h2 className="font-poppins text-3xl sm:text-4xl text-[#181715] font-bold tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#625D54] font-roboto">
            Clear, transparent answers about our mandate, judicial non-interference, fund disbursement,
            and post-release reintegration.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3 mb-12">
          {RIHAI_DATA.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.q}
                className="bg-white rounded-2xl border border-[#E8E4DA] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-[#FAF9F5]/50 transition-colors"
                >
                  <span className="font-poppins text-base sm:text-lg font-semibold text-[#181715]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#FAF9F5] border border-[#E8E4DA] flex items-center justify-center text-[#423E38] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#181715] text-white" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-sm font-roboto text-[#625D54] leading-relaxed border-t border-[#F4F1EA]">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support callout */}
        <div className="bg-[#F4F1EA] rounded-2xl p-6 border border-[#E8E4DA] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E4DA] flex items-center justify-center text-[#B85042] shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-poppins font-semibold text-[#181715]">
                Have a specific question not covered here?
              </div>
              <div className="text-xs font-roboto text-[#625D54]">
                Reach out to our project secretariat directly.
              </div>
            </div>
          </div>

          <a
            href={`mailto:${RIHAI_DATA.meta.emailPrimary}`}
            className="text-xs font-poppins font-semibold px-4 py-2 bg-white text-[#181715] hover:bg-[#181715] hover:text-white rounded-lg border border-[#D9D3C5] transition-all"
          >
            Email Legal Team
          </a>
        </div>
      </div>
    </section>
  );
};
