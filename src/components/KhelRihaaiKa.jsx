import { useState } from "react";
import { RIHAI_DATA } from "../data/rihaiData";
import { Sparkles, AlertCircle, Dices, ChevronLeft, ChevronRight } from "lucide-react";

export const KhelRihaaiKa = () => {
  const { khelCards } = RIHAI_DATA;
  const [selectedStageIdx, setSelectedStageIdx] = useState(0);
  const [viewMode, setViewMode] = useState("compare"); // "compare" | "positive" | "negative"

  const currentStage = khelCards.stages[selectedStageIdx];

  const rollDie = () => {
    const isPositive = Math.random() > 0.45;
    const randomStageIdx = Math.floor(Math.random() * khelCards.stages.length);
    setSelectedStageIdx(randomStageIdx);
    setViewMode(isPositive ? "positive" : "negative");
  };

  return (
    <section id="khel" className="py-24 bg-[#FAF9F5] border-t border-[#E8E4DA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F1EA] border border-[#E8E4DA] text-xs font-mono text-[#B85042] font-semibold mb-3">
              <span>EDUCATIONAL SIMULATION</span>
              <span>•</span>
              <span className="font-poppins font-medium">खेल रिहाई का</span>
            </div>
            <h2 className="font-poppins text-3xl sm:text-4xl text-[#181715] font-bold tracking-tight mb-3">
              Khel Rihaai Ka: The Undertrial Journey
            </h2>
            <p className="text-base text-[#625D54] leading-relaxed font-roboto">
              Adapted from our field education board game. In an undertrial’s life, small twists of fortune,
              legal aid quality, clerical errors, and family finances decide whether a person walks free or
              remains trapped in barracks indefinitely.
            </p>
          </div>

          {/* Interactive Dice Roll Button */}
          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={rollDie}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#181715] hover:bg-[#292723] text-white text-xs font-poppins font-semibold shadow-xs hover:shadow transition-all"
            >
              <Dices className="w-4 h-4 text-[#B85042]" />
              <span>Roll for Fortune (+ / -)</span>
            </button>
          </div>
        </div>

        {/* Timeline / Stage Stepper */}
        <div className="mb-10 overflow-x-auto pb-4 scrollbar-none">
          <div className="flex items-center gap-2 min-w-max">
            {khelCards.stages.map((stage, idx) => {
              const isSelected = idx === selectedStageIdx;
              return (
                <button
                  key={stage.stageName}
                  onClick={() => {
                    setSelectedStageIdx(idx);
                    if (viewMode !== "compare") setViewMode("compare");
                  }}
                  className={`px-4 py-2.5 rounded-full text-xs font-poppins transition-all ${
                    isSelected
                      ? "bg-[#B85042] text-white shadow-xs font-semibold"
                      : "bg-[#F4F1EA] text-[#625D54] hover:bg-[#E8E4DA] border border-[#E8E4DA] font-medium"
                  }`}
                >
                  {stage.stageName.split(":")[0]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Current Stage Indicator & Mode Toggle */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 bg-[#F4F1EA] p-4 rounded-2xl border border-[#E8E4DA]">
          <div>
            <span className="text-[11px] font-mono text-[#857F73] uppercase tracking-wider block">
              Timeline Checkpoint
            </span>
            <span className="font-poppins text-lg font-bold text-[#181715]">
              {currentStage.stageName}
            </span>
          </div>

          <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-[#E8E4DA] text-xs font-poppins">
            <button
              onClick={() => setViewMode("compare")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                viewMode === "compare"
                  ? "bg-[#181715] text-white font-medium shadow-xs"
                  : "text-[#625D54] hover:text-[#181715]"
              }`}
            >
              Side-by-Side
            </button>
            <button
              onClick={() => setViewMode("positive")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                viewMode === "positive"
                  ? "bg-emerald-700 text-white font-medium shadow-xs"
                  : "text-[#625D54] hover:text-emerald-700"
              }`}
            >
              + Supported Path
            </button>
            <button
              onClick={() => setViewMode("negative")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                viewMode === "negative"
                  ? "bg-[#B85042] text-white font-medium shadow-xs"
                  : "text-[#625D54] hover:text-[#B85042]"
              }`}
            >
              - Systemic Wall
            </button>
          </div>
        </div>

        {/* Interactive Cards Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Positive Card */}
          {(viewMode === "compare" || viewMode === "positive") && (
            <div
              className={`rounded-3xl p-7 border transition-all flex flex-col justify-between ${
                viewMode === "positive" ? "md:col-span-2 max-w-2xl mx-auto w-full" : ""
              } bg-gradient-to-b from-white to-[#F9FAF8] border-emerald-200 shadow-xs`}
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-emerald-100 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-mono text-xs font-bold flex items-center justify-center">
                      +
                    </span>
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-800">
                      The Supported Outcome
                    </span>
                  </div>
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                </div>

                <h3 className="font-poppins text-xl sm:text-2xl font-bold text-[#181715] mb-4">
                  {currentStage.positive.title}
                </h3>

                <p className="text-sm sm:text-base font-roboto text-[#423E38] leading-relaxed">
                  "{currentStage.positive.text}"
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-emerald-100 flex items-center justify-between text-xs text-emerald-800 font-mono">
                <span>Card Type: Positive / Reintegration</span>
                <span>Move Ahead</span>
              </div>
            </div>
          )}

          {/* Negative Card */}
          {(viewMode === "compare" || viewMode === "negative") && (
            <div
              className={`rounded-3xl p-7 border transition-all flex flex-col justify-between ${
                viewMode === "negative" ? "md:col-span-2 max-w-2xl mx-auto w-full" : ""
              } bg-gradient-to-b from-white to-[#FAF6F5] border-[#F1D2CC] shadow-xs`}
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#F7E1DD] mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#FCE8E6] text-[#B85042] font-mono text-xs font-bold flex items-center justify-center">
                      -
                    </span>
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#B85042]">
                      The Harsh Reality
                    </span>
                  </div>
                  <AlertCircle className="w-4 h-4 text-[#B85042]" />
                </div>

                <h3 className="font-poppins text-xl sm:text-2xl font-bold text-[#181715] mb-4">
                  {currentStage.negative.title}
                </h3>

                <p className="text-sm sm:text-base font-roboto text-[#423E38] leading-relaxed">
                  "{currentStage.negative.text}"
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#F7E1DD] flex items-center justify-between text-xs text-[#B85042] font-mono">
                <span>Card Type: Negative / Systemic Trap</span>
                <span>Hold in Custody</span>
              </div>
            </div>
          )}
        </div>

        {/* Stepper Navigation Footer */}
        <div className="mt-10 flex items-center justify-between font-roboto">
          <button
            disabled={selectedStageIdx === 0}
            onClick={() => setSelectedStageIdx((prev) => Math.max(0, prev - 1))}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#423E38] disabled:opacity-30 disabled:cursor-not-allowed hover:text-[#181715]"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous Checkpoint</span>
          </button>

          <span className="text-xs font-mono text-[#857F73]">
            {selectedStageIdx + 1} of {khelCards.stages.length} Stages
          </span>

          <button
            disabled={selectedStageIdx === khelCards.stages.length - 1}
            onClick={() => setSelectedStageIdx((prev) => Math.min(khelCards.stages.length - 1, prev + 1))}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#423E38] disabled:opacity-30 disabled:cursor-not-allowed hover:text-[#181715]"
          >
            <span>Next Checkpoint</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
