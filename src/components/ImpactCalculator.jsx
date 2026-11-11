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

  // Goal metrics
  const goal = RIHAI_DATA.meta.campaignGoal;
  const raisedSimulated = 245000;
  const percentage = Math.round((raisedSimulated / goal) * 100);

  return (
    <section id="impact" className="py-24 bg-[#FAF9F5] border-t border-[#E8E4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-[#B85042] font-semibold mb-2">
            Targeted Crowdfunding & Partnership
          </div>
          <h2 className="font-poppins text-3xl sm:text-4xl text-[#181715] font-bold tracking-tight mb-4">
            Directly Fund a Prisoner’s Freedom
          </h2>
          <p className="text-base sm:text-lg text-[#625D54] leading-relaxed font-roboto">
            Every rupee is dedicated directly toward court-mandated fixed deposits and verified legal compliance.
            See exactly how your contribution unlocks a real person’s release.
          </p>
        </div>

        {/* Campaign Goal Progress Card */}
        <div className="bg-[#F4F1EA] rounded-3xl p-6 sm:p-8 border border-[#E8E4DA] mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-xs font-mono text-[#857F73] uppercase tracking-wider block">
                Current Campaign Target: Phase 1 Pilot
              </span>
              <span className="font-poppins text-2xl sm:text-3xl font-extrabold text-[#181715]">
                ₹6,00,000 for 30 Undertrials
              </span>
            </div>
            <div className="text-right sm:text-right">
              <span className="text-xs font-mono text-[#B85042] font-semibold block">
                {percentage}% REACHED
              </span>
              <span className="text-xs text-[#625D54] font-roboto">
                ₹2,45,000 raised • 12 lives assisted
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-[#E8E4DA] h-3 rounded-full overflow-hidden mb-3">
            <div
              className="bg-[#B85042] h-full rounded-full transition-all duration-500"
              style={{ width: `${percentage}%` }}
            />
          </div>

          <div className="flex justify-between items-center text-xs text-[#625D54] font-roboto">
            <span>6-Month Intervention Cycle</span>
            <span>Target: 30 Releases in NCR & UP</span>
          </div>
        </div>

        {/* Interactive Calculator Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Preset Tiers */}
          <div className="lg:col-span-7 space-y-4">
            <label className="text-xs font-mono text-[#857F73] uppercase tracking-wider block mb-2">
              Select Support Tier
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {RIHAI_DATA.donationTiers.map((tier) => {
                const isSelected = selectedAmount === tier.amount && !customAmount;
                const Icon = iconMap[tier.icon] || Coins;
                return (
                  <button
                    key={tier.amount}
                    onClick={() => {
                      setSelectedAmount(tier.amount);
                      setCustomAmount("");
                    }}
                    className={`text-left p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                      isSelected
                        ? "bg-[#181715] text-white border-[#181715] shadow-xs"
                        : "bg-white text-[#181715] border-[#E8E4DA] hover:border-[#D9D3C5]"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className={`font-poppins text-2xl font-bold ${
                            isSelected ? "text-white" : "text-[#181715]"
                          }`}
                        >
                          ₹{tier.amount.toLocaleString("en-IN")}
                        </span>
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                            isSelected ? "bg-white/10 text-white" : "bg-[#FAF9F5] text-[#B85042]"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      <div className="text-xs font-poppins font-semibold uppercase tracking-wider mb-2 text-[#B85042]">
                        {tier.title}
                      </div>

                      <p
                        className={`text-xs font-roboto leading-relaxed ${
                          isSelected ? "text-[#E8E4DA]" : "text-[#625D54]"
                        }`}
                      >
                        {tier.impact}
                      </p>
                    </div>

                    {tier.popular && (
                      <div className="mt-4 pt-2 border-t border-white/10 text-[10.5px] font-mono text-amber-300">
                        ★ Most Crucial Threshold
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Custom Amount Input */}
            <div className="pt-2">
              <div className="bg-white p-4 rounded-2xl border border-[#E8E4DA] flex items-center justify-between">
                <label className="text-xs font-poppins font-medium text-[#423E38]">
                  Or enter custom amount (INR):
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-[#181715]">₹</span>
                  <input
                    type="text"
                    value={customAmount}
                    onChange={handleCustomChange}
                    placeholder="e.g. 50000"
                    className="w-32 px-3 py-1.5 border border-[#E8E4DA] rounded-lg text-sm font-mono text-[#181715] focus:outline-hidden focus:border-[#B85042]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Calculated Real-World Impact Breakdown */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-7 border border-[#E8E4DA] shadow-xs">
            <div className="text-[11px] font-mono text-[#857F73] uppercase tracking-wider mb-2">
              Impact Assessment
            </div>

            <div className="font-poppins text-3xl font-extrabold text-[#181715] mb-4">
              ₹{currentAmount.toLocaleString("en-IN")}
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E8E4DA] mb-6 space-y-3 font-roboto">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#625D54]">Full Court Bail Bonds Funded</span>
                <span className="font-mono font-bold text-[#181715]">
                  {bondsFunded} {bondsFunded === 1 ? "Inmate" : "Inmates"}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#625D54]">Complete Freedom & Reintegration</span>
                <span className="font-mono font-bold text-[#B85042]">
                  ~{inmatesFreed} Individuals
                </span>
              </div>
              <div className="flex items-center justify-between text-xs border-t border-[#E8E4DA] pt-2">
                <span className="text-[#625D54]">Disbursement Mechanism</span>
                <span className="font-medium text-[#181715]">Court Registry FD</span>
              </div>
            </div>

            <div className="space-y-2 mb-6 text-xs text-[#625D54] font-roboto">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>Zero cash handovers; direct court fixed deposits</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>Verified by pro-bono advocates and prison legal clinic</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>Eligible for 80G tax benefits under TYCIA Foundation</span>
              </div>
            </div>

            <a
              href={RIHAI_DATA.meta.donationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#B85042] hover:bg-[#9F3E32] text-white text-sm font-poppins font-semibold rounded-full shadow-xs hover:shadow transition-all"
            >
              <span>Proceed to Verified Campaign Page</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="mt-4 text-center">
              <span className="text-[11px] text-[#857F73] font-roboto">
                Secured campaign portal hosted on Milaap / Project Second Chance
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
