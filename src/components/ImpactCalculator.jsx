import { useState } from "react";
import { RIHAI_DATA } from "../data/rihaiData";
import { ArrowUpRight, Check, KeyRound, FileCheck, Coins, HeartHandshake } from "lucide-react";

export const ImpactCalculator = () => {
  const [selectedAmount, setSelectedAmount] = useState(15000);
  const [customAmount, setCustomAmount] = useState("");

  const iconMap = {
    FileCheck,
    Coins,
    KeyRound,
    HeartHandshake,
  };

  const handleCustomChange = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, "");
    setCustomAmount(val);
    if (val) {
      setSelectedAmount(parseInt(val, 10));
    }
  };

  const currentAmount = customAmount ? parseInt(customAmount, 10) || 0 : selectedAmount;
  const inmatesFreed = (currentAmount / 20000).toFixed(1);
  const bondsFunded = Math.floor(currentAmount / 15000);

  const goal = RIHAI_DATA.meta.campaignGoal;
  const raisedSimulated = 245000;
  const percentage = Math.round((raisedSimulated / goal) * 100);

  return (
    <section id="impact" className="py-16 sm:py-24 bg-[#FAF9F5] border-t border-[#E2DCCF]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* Left-aligned Header */}
        <div className="max-w-[65ch] mb-10 sm:mb-12">
          <h2 className="font-poppins text-[1.75rem] sm:text-[2.25rem] leading-[1.15] tracking-[-0.02em] font-bold text-[#181715]">
            Directly Fund a Prisoner’s Freedom
          </h2>
          <p className="mt-3.5 text-[15px] sm:text-[17px] text-[#4A453E] leading-[1.65] font-roboto">
            Every rupee goes directly toward court-mandated fixed deposits and verified legal
            compliance. Select a tier or enter an amount to see the release impact.
          </p>
        </div>

        {/* Campaign Goal Progress Banner */}
        <div className="bg-[#F2EDE3] rounded-2xl p-6 sm:p-8 border border-[#E2DCCF] mb-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-4">
            <div>
              <div className="text-[11px] font-mono text-[#59534A] uppercase tracking-wider">
                Phase 1 Pilot Target
              </div>
              <div className="mt-1 font-poppins text-[1.5rem] sm:text-[1.85rem] font-extrabold text-[#181715] tabular-nums">
                ₹6,00,000 for 30 Undertrials
              </div>
            </div>
            <div className="text-left sm:text-right">
              <div className="text-[12px] font-mono text-[#9B231B] font-semibold tabular-nums">
                {percentage}% REACHED
              </div>
              <div className="text-[13px] text-[#4A453E] font-roboto tabular-nums">
                ₹2,45,000 raised • 12 lives assisted
              </div>
            </div>
          </div>

          <div className="w-full bg-[#E2DCCF] h-2.5 rounded-full overflow-hidden">
            <div
              className="bg-[#9B231B] h-full rounded-full transition-all duration-500"
              style={{ width: `${percentage}%` }}
            />
          </div>

          <div className="mt-3 flex flex-wrap justify-between items-center gap-2 text-[12px] text-[#59534A] font-roboto">
            <span>6-Month Intervention Cycle</span>
            <span>Target: 30 Releases in NCR &amp; UP</span>
          </div>
        </div>

        {/* Interactive Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Preset Tiers & Custom Amount */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {RIHAI_DATA.donationTiers.map((tier) => {
                const isSelected = selectedAmount === tier.amount && !customAmount;
                const Icon = iconMap[tier.icon] || Coins;
                return (
                  <button
                    key={tier.amount}
                    type="button"
                    onClick={() => {
                      setSelectedAmount(tier.amount);
                      setCustomAmount("");
                    }}
                    className={`text-left p-6 rounded-2xl border transition-colors flex flex-col justify-between ${
                      isSelected
                        ? "bg-[#181715] text-white border-[#181715]"
                        : "bg-white text-[#181715] border-[#E2DCCF] hover:border-[#C5BCA8]"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span
                          className={`font-poppins text-[1.5rem] font-bold tabular-nums ${
                            isSelected ? "text-white" : "text-[#181715]"
                          }`}
                        >
                          ₹{tier.amount.toLocaleString("en-IN")}
                        </span>
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            isSelected ? "bg-white/10 text-white" : "bg-[#FAF9F5] text-[#9B231B]"
                          }`}
                        >
                          <Icon className="w-4 h-4" aria-hidden="true" />
                        </div>
                      </div>

                      <div
                        className={`mt-3 text-[13px] font-poppins font-semibold ${
                          isSelected ? "text-[#E0685D]" : "text-[#9B231B]"
                        }`}
                      >
                        {tier.title}
                      </div>

                      <p
                        className={`mt-2 text-[13.5px] font-roboto leading-[1.55] ${
                          isSelected ? "text-[#DCD5C7]" : "text-[#4A453E]"
                        }`}
                      >
                        {tier.impact}
                      </p>
                    </div>

                    {tier.popular && (
                      <div
                        className={`mt-4 pt-3 border-t text-[11px] font-mono ${
                          isSelected
                            ? "border-white/15 text-[#F1C27D]"
                            : "border-[#F2EDE3] text-[#855314]"
                        }`}
                      >
                        Most Crucial Threshold
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Custom Amount Input */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E2DCCF] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <label
                htmlFor="custom-donation-amount"
                className="text-[14px] font-poppins font-medium text-[#181715]"
              >
                Or enter a custom amount (INR)
              </label>
              <div className="flex items-center gap-2">
                <span className="text-[15px] font-semibold text-[#181715]">₹</span>
                <input
                  id="custom-donation-amount"
                  type="text"
                  inputMode="numeric"
                  value={customAmount}
                  onChange={handleCustomChange}
                  placeholder="e.g. 50000"
                  className="w-full sm:w-40 h-10 px-3.5 border border-[#D4CCB9] rounded-xl text-[14px] font-mono text-[#181715] tabular-nums focus:outline-hidden focus:border-[#9B231B] focus:ring-2 focus:ring-[#9B231B]/15"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Calculated Impact Summary */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-[#E2DCCF] shadow-[0_2px_10px_rgba(24,23,21,0.03)]">
            <div className="text-[11px] font-mono text-[#59534A] uppercase tracking-wider">
              Estimated Impact
            </div>

            <div className="mt-1 font-poppins text-[2rem] font-extrabold text-[#181715] tabular-nums">
              ₹{currentAmount.toLocaleString("en-IN")}
            </div>

            <div className="mt-5 p-4 rounded-xl bg-[#FAF9F5] border border-[#E2DCCF] divide-y divide-[#E2DCCF] font-roboto">
              <div className="pb-3 flex items-center justify-between gap-4 text-[13.5px]">
                <span className="text-[#4A453E]">Full Court Bail Bonds</span>
                <span className="font-mono font-bold text-[#181715] tabular-nums">
                  {bondsFunded} {bondsFunded === 1 ? "Inmate" : "Inmates"}
                </span>
              </div>
              <div className="py-3 flex items-center justify-between gap-4 text-[13.5px]">
                <span className="text-[#4A453E]">Freedom &amp; Reintegration</span>
                <span className="font-mono font-bold text-[#9B231B] tabular-nums">
                  ~{inmatesFreed} Individuals
                </span>
              </div>
              <div className="pt-3 flex items-center justify-between gap-4 text-[13.5px]">
                <span className="text-[#4A453E]">Disbursement</span>
                <span className="font-medium text-[#181715]">Court Registry FD</span>
              </div>
            </div>

            <ul className="mt-6 space-y-2.5 text-[13.5px] text-[#4A453E] font-roboto">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#1F5E43] shrink-0 mt-0.5" aria-hidden="true" />
                <span>Zero cash handovers; direct court fixed deposits</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#1F5E43] shrink-0 mt-0.5" aria-hidden="true" />
                <span>Verified by pro-bono advocates and prison legal clinics</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#1F5E43] shrink-0 mt-0.5" aria-hidden="true" />
                <span>Eligible for 80G tax benefits under TYCIA Foundation</span>
              </li>
            </ul>

            <a
              href={RIHAI_DATA.meta.donationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 w-full inline-flex items-center justify-center gap-2 h-12 px-6 bg-[#9B231B] hover:bg-[#7A1913] text-white text-[14px] font-poppins font-semibold rounded-full transition-colors"
            >
              <span>Proceed to Verified Campaign</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>

            <p className="mt-3.5 text-center text-[12px] text-[#59534A] font-roboto">
              Secured campaign portal hosted on Milaap / Project Second Chance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
