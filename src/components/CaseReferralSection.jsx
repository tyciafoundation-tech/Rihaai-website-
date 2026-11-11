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
    referrerRole: "family", // family | lawyer | social_worker | other
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.inmateName || !formData.referrerContact) return;
    setSubmitted(true);
  };

  return (
    <section id="referral" className="py-20 bg-[#F4F1EA] border-t border-[#E8E4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Context & Helplines */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#B85042] font-semibold mb-2">
                Case Intake & Legal Network
              </div>
              <h2 className="font-poppins text-3xl sm:text-4xl text-[#181715] font-bold tracking-tight mb-4">
                Refer an Undertrial or Join as a Pro-Bono Advocate
              </h2>
              <p className="text-sm sm:text-base text-[#625D54] leading-relaxed font-roboto">
                If you know an individual who has already received a bail order from a competent court
                but cannot be released due to lack of funds or surety, submit their details for legal review.
              </p>
            </div>

            {/* Direct contact cards */}
            <div className="space-y-3 pt-2">
              <div className="bg-white p-4 rounded-2xl border border-[#E8E4DA] flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAF9F5] border border-[#E8E4DA] flex items-center justify-center text-[#B85042] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#857F73] uppercase tracking-wider block">
                    Direct Case Helpline
                  </span>
                  <div className="flex flex-wrap gap-x-3 text-xs sm:text-sm font-poppins font-semibold text-[#181715]">
                    <a href={`tel:${RIHAI_DATA.meta.phonePrimary}`} className="hover:text-[#B85042]">
                      {RIHAI_DATA.meta.phonePrimary}
                    </a>
                    <span>•</span>
                    <a href={`tel:${RIHAI_DATA.meta.phoneSecondary}`} className="hover:text-[#B85042]">
                      {RIHAI_DATA.meta.phoneSecondary}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-[#E8E4DA] flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAF9F5] border border-[#E8E4DA] flex items-center justify-center text-[#B85042] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#857F73] uppercase tracking-wider block">
                    Case Documents Submission
                  </span>
                  <a
                    href={`mailto:${RIHAI_DATA.meta.emailPrimary}`}
                    className="text-xs sm:text-sm font-poppins font-semibold text-[#181715] hover:text-[#B85042]"
                  >
                    {RIHAI_DATA.meta.emailPrimary}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#FAF9F5] p-5 rounded-2xl border border-[#E8E4DA] text-xs font-roboto text-[#625D54] space-y-2">
              <div className="font-poppins font-semibold text-[#181715] flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-[#B85042]" />
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
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E4DA] shadow-xs">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-poppins text-2xl font-bold text-[#181715]">
                    Referral Received
                  </h3>
                  <p className="text-sm font-roboto text-[#625D54] max-w-md mx-auto leading-relaxed">
                    Thank you for submitting this case for review. Our legal coordinator will review
                    the provided details and reach out within 48 to 72 hours for document verification.
                  </p>
                  <button
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
                    className="inline-flex items-center text-xs font-poppins font-semibold px-4 py-2 rounded-full border border-[#D9D3C5] hover:bg-[#FAF9F5] text-[#181715]"
                  >
                    Submit Another Referral
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-poppins font-medium text-[#423E38] block mb-1.5">
                        Inmate Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.inmateName}
                        onChange={(e) => setFormData({ ...formData, inmateName: e.target.value })}
                        placeholder="e.g. Vinay Kumar"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E4DA] text-sm text-[#181715] placeholder:text-[#ABA496] focus:outline-hidden focus:border-[#B85042]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-poppins font-medium text-[#423E38] block mb-1.5">
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
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E4DA] text-sm text-[#181715] placeholder:text-[#ABA496] focus:outline-hidden focus:border-[#B85042]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-poppins font-medium text-[#423E38] block mb-1.5">
                        Bail Bond Amount (INR)
                      </label>
                      <input
                        type="text"
                        value={formData.bailAmount}
                        onChange={(e) => setFormData({ ...formData, bailAmount: e.target.value })}
                        placeholder="e.g. 15000"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E4DA] text-sm text-[#181715] placeholder:text-[#ABA496] focus:outline-hidden focus:border-[#B85042]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-poppins font-medium text-[#423E38] block mb-1.5">
                        Approx. Date Bail Granted
                      </label>
                      <input
                        type="date"
                        value={formData.dateBailGranted}
                        onChange={(e) =>
                          setFormData({ ...formData, dateBailGranted: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E4DA] text-sm text-[#181715] focus:outline-hidden focus:border-[#B85042]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-poppins font-medium text-[#423E38] block mb-1.5">
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
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E4DA] text-sm text-[#181715] placeholder:text-[#ABA496] focus:outline-hidden focus:border-[#B85042]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-poppins font-medium text-[#423E38] block mb-1.5">
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
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E4DA] text-sm text-[#181715] placeholder:text-[#ABA496] focus:outline-hidden focus:border-[#B85042]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-poppins font-medium text-[#423E38] block mb-1.5">
                      Your Relationship / Role
                    </label>
                    <select
                      value={formData.referrerRole}
                      onChange={(e) => setFormData({ ...formData, referrerRole: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E4DA] text-sm text-[#181715] bg-white focus:outline-hidden focus:border-[#B85042]"
                    >
                      <option value="family">Immediate Family Member</option>
                      <option value="lawyer">Pro-Bono Advocate / Legal Aid Counsel</option>
                      <option value="social_worker">Prison Visitor / Social Worker / NGO</option>
                      <option value="other">Other Concerned Citizen</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-poppins font-medium text-[#423E38] block mb-1.5">
                      Additional Information / Family Circumstances
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Brief details about the family's financial situation, whether local surety is available, etc."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E4DA] text-sm text-[#181715] placeholder:text-[#ABA496] focus:outline-hidden focus:border-[#B85042]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#181715] hover:bg-[#292723] text-white text-xs font-poppins font-semibold rounded-xl shadow-xs transition-all mt-2"
                  >
                    <Send className="w-3.5 h-3.5" />
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
