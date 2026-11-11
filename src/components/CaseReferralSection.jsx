import { useState } from "react";
import { RIHAI_DATA } from "../data/rihaiData";
import { Send, CheckCircle2, Phone, Mail, AlertCircle } from "lucide-react";

export const CaseReferralSection = () => {
  const [formData, setFormData] = useState({
    inmateName: "",
    prisonFacility: "",
    bailAmount: "",
    dateBailGranted: "",
    referrerName: "",
    referrerContact: "",
    referrerRole: "family",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.inmateName || !formData.referrerContact) return;
    setSubmitted(true);
  };

  const inputClass =
    "w-full h-11 px-3.5 rounded-xl border border-[#D4CCB9] bg-white text-[14px] text-[#181715] placeholder:text-[#8E877A] focus:outline-hidden focus:border-[#9B231B] focus:ring-2 focus:ring-[#9B231B]/15 transition-colors";

  return (
    <section id="referral" className="py-16 sm:py-24 bg-[#F2EDE3] border-t border-[#E2DCCF]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Intake Context & Helplines */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="font-poppins text-[1.75rem] sm:text-[2.25rem] leading-[1.15] tracking-[-0.02em] font-bold text-[#181715]">
                Refer an Undertrial or Join as a Pro-Bono Advocate
              </h2>
              <p className="mt-3.5 text-[15px] sm:text-[16px] text-[#4A453E] leading-[1.65] font-roboto">
                If you know an individual who has already received a bail order from a competent
                court but cannot be released due to lack of funds or surety, submit their details
                for legal review.
              </p>
            </div>

            <div className="space-y-3">
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E2DCCF] flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAF9F5] border border-[#E2DCCF] flex items-center justify-center text-[#9B231B] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-[#6B655B] uppercase tracking-wider">
                    Direct Case Helpline
                  </div>
                  <div className="mt-0.5 flex flex-wrap gap-x-2.5 text-[14px] font-poppins font-semibold text-[#181715] tabular-nums">
                    <a href={`tel:${RIHAI_DATA.meta.phonePrimary}`} className="hover:text-[#9B231B]">
                      {RIHAI_DATA.meta.phonePrimary}
                    </a>
                    <span className="text-[#ABA496]">•</span>
                    <a href={`tel:${RIHAI_DATA.meta.phoneSecondary}`} className="hover:text-[#9B231B]">
                      {RIHAI_DATA.meta.phoneSecondary}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E2DCCF] flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAF9F5] border border-[#E2DCCF] flex items-center justify-center text-[#9B231B] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-[#6B655B] uppercase tracking-wider">
                    Case Documents Submission
                  </div>
                  <a
                    href={`mailto:${RIHAI_DATA.meta.emailPrimary}`}
                    className="mt-0.5 block text-[14px] font-poppins font-semibold text-[#181715] hover:text-[#9B231B] break-all"
                  >
                    {RIHAI_DATA.meta.emailPrimary}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#FAF9F5] p-5 rounded-2xl border border-[#E2DCCF] text-[13.5px] font-roboto text-[#4A453E] leading-[1.6] space-y-1.5">
              <div className="font-poppins font-semibold text-[#181715] flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-[#9B231B] shrink-0" />
                <span>Notice on Submissions</span>
              </div>
              <p>
                Submission does not guarantee funding. Every case undergoes independent verification
                against our eligibility criteria (valid bail order, maximum ₹20,000 bond, local surety).
              </p>
            </div>
          </div>

          {/* Right Column: Referral Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2DCCF] shadow-[0_2px_10px_rgba(24,23,21,0.03)]">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 bg-[#1F5E43]/10 text-[#1F5E43] rounded-full flex items-center justify-center mx-auto border border-[#1F5E43]/25">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-poppins text-[22px] font-bold text-[#181715]">
                    Referral Received
                  </h3>
                  <p className="text-[15px] font-roboto text-[#4A453E] max-w-md mx-auto leading-[1.6]">
                    Thank you for submitting this case for review. Our legal coordinator will review
                    the details and reach out within 48 to 72 hours for document verification.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        inmateName: "",
                        prisonFacility: "",
                        bailAmount: "",
                        dateBailGranted: "",
                        referrerName: "",
                        referrerContact: "",
                        referrerRole: "family",
                        notes: "",
                      });
                    }}
                    className="inline-flex items-center justify-center h-10 px-5 text-[13px] font-poppins font-semibold rounded-full border border-[#D4CCB9] hover:bg-[#FAF9F5] text-[#181715] transition-colors"
                  >
                    Submit Another Referral
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[13px] font-poppins font-medium text-[#181715] block mb-1.5">
                        Inmate Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.inmateName}
                        onChange={(e) => setFormData({ ...formData, inmateName: e.target.value })}
                        placeholder="e.g. Vinay Kumar"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="text-[13px] font-poppins font-medium text-[#181715] block mb-1.5">
                        Prison / Jail Facility *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.prisonFacility}
                        onChange={(e) =>
                          setFormData({ ...formData, prisonFacility: e.target.value })
                        }
                        placeholder="e.g. Central Jail Tihar #4"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[13px] font-poppins font-medium text-[#181715] block mb-1.5">
                        Bail Bond Amount (INR)
                      </label>
                      <input
                        type="text"
                        inputMode="numeric"
                        value={formData.bailAmount}
                        onChange={(e) => setFormData({ ...formData, bailAmount: e.target.value })}
                        placeholder="e.g. 15000"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="text-[13px] font-poppins font-medium text-[#181715] block mb-1.5">
                        Approx. Date Bail Granted
                      </label>
                      <input
                        type="date"
                        value={formData.dateBailGranted}
                        onChange={(e) =>
                          setFormData({ ...formData, dateBailGranted: e.target.value })
                        }
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[13px] font-poppins font-medium text-[#181715] block mb-1.5">
                        Your Name (Referrer) *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.referrerName}
                        onChange={(e) =>
                          setFormData({ ...formData, referrerName: e.target.value })
                        }
                        placeholder="e.g. Advocate Rajesh / Sunita Devi"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="text-[13px] font-poppins font-medium text-[#181715] block mb-1.5">
                        Your Phone / WhatsApp *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.referrerContact}
                        onChange={(e) =>
                          setFormData({ ...formData, referrerContact: e.target.value })
                        }
                        placeholder="+91 98765 43210"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[13px] font-poppins font-medium text-[#181715] block mb-1.5">
                      Your Relationship / Role
                    </label>
                    <select
                      value={formData.referrerRole}
                      onChange={(e) => setFormData({ ...formData, referrerRole: e.target.value })}
                      className={inputClass}
                    >
                      <option value="family">Immediate Family Member</option>
                      <option value="lawyer">Pro-Bono Advocate / Legal Aid Counsel</option>
                      <option value="social_worker">Prison Visitor / Social Worker / NGO</option>
                      <option value="other">Other Concerned Citizen</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[13px] font-poppins font-medium text-[#181715] block mb-1.5">
                      Additional Information / Family Circumstances
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Brief details about the family's financial situation, whether local surety is available, etc."
                      className="w-full p-3.5 rounded-xl border border-[#D4CCB9] bg-white text-[14px] text-[#181715] placeholder:text-[#8E877A] focus:outline-hidden focus:border-[#9B231B] focus:ring-2 focus:ring-[#9B231B]/15 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 h-12 px-6 bg-[#181715] hover:bg-[#2E2B27] text-white text-[14px] font-poppins font-semibold rounded-full transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Case for Legal Review</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
