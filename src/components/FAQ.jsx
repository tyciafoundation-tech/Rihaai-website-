import { useState } from "react";
import { RIHAI_DATA } from "../data/rihaiData";
import { ChevronDown, Mail } from "lucide-react";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FAF9F5] border-t border-[#E2DCCF]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Consistent Left-Aligned Header + Direct Email Callout */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
            <div>
              <h2 className="font-poppins text-[1.75rem] sm:text-[2.25rem] leading-[1.15] tracking-[-0.02em] font-bold text-[#181715]">
                Frequently Asked Questions
              </h2>
              <p className="mt-3.5 text-[15px] sm:text-[16px] text-[#4A453E] leading-[1.65] font-roboto">
                Clear answers about our mandate, judicial non-interference, fund disbursement, and
                post-release reintegration.
              </p>
            </div>

            <div className="bg-[#F2EDE3] rounded-2xl p-5 sm:p-6 border border-[#E2DCCF] space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E2DCCF] flex items-center justify-center text-[#C93E31] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[14px] font-poppins font-semibold text-[#181715]">
                    Have a specific legal or partnership question?
                  </div>
                  <div className="mt-0.5 text-[13px] font-roboto text-[#4A453E]">
                    Reach out directly to our secretariat.
                  </div>
                </div>
              </div>

              <a
                href={`mailto:${RIHAI_DATA.meta.emailPrimary}`}
                className="inline-flex items-center justify-center h-10 px-5 bg-white text-[#181715] hover:bg-[#181715] hover:text-white text-[13px] font-poppins font-semibold rounded-full border border-[#D4CCB9] transition-colors"
              >
                Email Legal Team
              </a>
            </div>
          </div>

          {/* Right Column: Hairline Accordion */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E2DCCF] divide-y divide-[#E2DCCF] overflow-hidden shadow-[0_2px_10px_rgba(24,23,21,0.03)]">
            {RIHAI_DATA.faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.q}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-[#FAF9F5] transition-colors"
                  >
                    <span className="font-poppins text-[16px] sm:text-[17px] font-semibold text-[#181715] leading-snug">
                      {faq.q}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-200 ${
                        isOpen
                          ? "rotate-180 bg-[#181715] border-[#181715] text-white"
                          : "bg-[#FAF9F5] border-[#E2DCCF] text-[#3D3933]"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-[14.5px] sm:text-[15px] font-roboto text-[#4A453E] leading-[1.68]">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
