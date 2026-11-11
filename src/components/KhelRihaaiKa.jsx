import { useState } from "react";
import { RIHAI_DATA } from "../data/rihaiData";
import khelBoardImg from "../assets/khel-board.png";
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
    <section id="khel" className="py-16 sm:py-24 bg-[#FAF9F5] border-t border-[#E2DCCF]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* Top Row: Left-aligned Header + Interactive Roll Action */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-[65ch]">
            <h2 className="font-poppins text-[1.75rem] sm:text-[2.25rem] leading-[1.15] tracking-[-0.02em] font-bold text-[#181715]">
              Khel Rihaai Ka: The Undertrial Journey
            </h2>
            <p className="mt-3.5 text-[15px] sm:text-[17px] text-[#4A453E] leading-[1.65] font-roboto">
              Adapted from our field education board game (खेल रिहाई का). Small twists of fortune,
              legal aid quality, clerical errors, and family finances decide whether a person walks
              free or stays trapped indefinitely.
            </p>
          </div>

          <button
            type="button"
            onClick={rollDie}
            className="self-start lg:self-auto shrink-0 inline-flex items-center gap-2.5 h-11 px-5 rounded-full bg-[#181715] hover:bg-[#2E2B27] text-white text-[13px] font-poppins font-semibold transition-colors"
          >
            <Dices className="w-4 h-4 text-[#D14A3E]" />
            <span>Roll for Fortune (+ / -)</span>
          </button>
        </div>

        {/* 12-Column Split: Authentic Board Image + Interactive Journey Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Authentic Game Board Graphic */}
          <figure className="lg:col-span-4 bg-[#181715] rounded-2xl p-3.5 sm:p-4 border border-[#E2DCCF] shadow-[0_6px_24px_rgba(24,23,21,0.06)]">
            <img
              src={khelBoardImg}
              alt="Khel Rihaai Ka — Original field education board game"
              className="w-full aspect-[960/1408] rounded-xl object-contain bg-[#201E1B]"
            />
            <figcaption className="mt-3 px-1 flex items-center justify-between text-[12px] text-[#CFC8BA] font-roboto">
              <span>Original Game Board (खेल रिहाई का)</span>
              <span className="font-mono text-[#D14A3E]">8 Stages</span>
            </figcaption>
          </figure>

          {/* Right Column: Interactive Checkpoint Simulator */}
          <div className="lg:col-span-8 space-y-6">
            {/* Unified Stage Selector & Mode Switcher */}
            <div className="bg-[#F2EDE3] rounded-2xl p-4 sm:p-6 border border-[#E2DCCF] space-y-5">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {khelCards.stages.map((stage, idx) => {
                  const isSelected = idx === selectedStageIdx;
                  const shortDay =
                    stage.stageName.split(":")[1]?.split("(")[0]?.trim() || `Stage ${idx + 1}`;
                  const phase = stage.stageName.split(":")[0]?.trim();
                  return (
                    <button
                      key={stage.stageName}
                      type="button"
                      onClick={() => {
                        setSelectedStageIdx(idx);
                        if (viewMode !== "compare") setViewMode("compare");
                      }}
                      className={`px-3 py-2.5 rounded-xl text-left transition-colors border ${
                        isSelected
                          ? "bg-[#9B231B] text-white border-[#9B231B]"
                          : "bg-white text-[#3D3933] border-[#E2DCCF] hover:border-[#C5BCA8]"
                      }`}
                    >
                      <div
                        className={`text-[10px] font-mono uppercase tracking-wide ${
                          isSelected ? "text-white/80" : "text-[#6B655B]"
                        }`}
                      >
                        {phase}
                      </div>
                      <div className="text-[12px] font-poppins font-semibold mt-0.5 truncate">
                        {shortDay}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Checkpoint Title & View Filter */}
              <div className="pt-4 border-t border-[#E2DCCF] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] font-mono text-[#6B655B] uppercase tracking-wider">
                    Active Checkpoint ({selectedStageIdx + 1} of {khelCards.stages.length})
                  </div>
                  <div className="font-poppins text-[16px] sm:text-[18px] font-bold text-[#181715] mt-0.5">
                    {currentStage.stageName}
                  </div>
                </div>

                <div className="inline-flex self-start sm:self-auto items-center gap-1 bg-white p-1 rounded-xl border border-[#E2DCCF] text-[12px] font-poppins shrink-0">
                  <button
                    type="button"
                    onClick={() => setViewMode("compare")}
                    className={`px-3 py-1.5 rounded-lg transition-colors ${
                      viewMode === "compare"
                        ? "bg-[#181715] text-white font-semibold"
                        : "text-[#4A453E] hover:text-[#181715]"
                    }`}
                  >
                    Side-by-Side
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode("positive")}
                    className={`px-3 py-1.5 rounded-lg transition-colors ${
                      viewMode === "positive"
                        ? "bg-[#1F5E43] text-white font-semibold"
                        : "text-[#4A453E] hover:text-[#1F5E43]"
                    }`}
                  >
                    + Supported
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode("negative")}
                    className={`px-3 py-1.5 rounded-lg transition-colors ${
                      viewMode === "negative"
                        ? "bg-[#9B231B] text-white font-semibold"
                        : "text-[#4A453E] hover:text-[#9B231B]"
                    }`}
                  >
                    - Wall
                  </button>
                </div>
              </div>
            </div>

            {/* Comparison Cards */}
            <div
              className={`grid gap-5 items-stretch ${
                viewMode === "compare" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
              }`}
            >
              {(viewMode === "compare" || viewMode === "positive") && (
                <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#CFE0D7] shadow-[0_2px_10px_rgba(24,23,21,0.03)] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-[#EBF2EE]">
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-full bg-[#1F5E43]/12 text-[#1F5E43] font-mono text-xs font-bold flex items-center justify-center">
                          +
                        </span>
                        <span className="text-[12px] font-mono font-semibold uppercase tracking-wider text-[#1F5E43]">
                          Supported Outcome
                        </span>
                      </div>
                      <Sparkles className="w-4 h-4 text-[#1F5E43]" />
                    </div>

                    <h3 className="mt-5 font-poppins text-[19px] sm:text-[21px] font-bold text-[#181715]">
                      {currentStage.positive.title}
                    </h3>

                    <p className="mt-3 text-[14.5px] sm:text-[15.5px] font-roboto text-[#3D3933] leading-[1.68]">
                      “{currentStage.positive.text}”
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#EBF2EE] flex items-center justify-between text-[12px] text-[#1F5E43] font-mono">
                    <span>Positive / Reintegration</span>
                    <span>Move Ahead</span>
                  </div>
                </div>
              )}

              {(viewMode === "compare" || viewMode === "negative") && (
                <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E5C5C1] shadow-[0_2px_10px_rgba(24,23,21,0.03)] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-[#F5E5E3]">
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-full bg-[#9B231B]/12 text-[#9B231B] font-mono text-xs font-bold flex items-center justify-center">
                          -
                        </span>
                        <span className="text-[12px] font-mono font-semibold uppercase tracking-wider text-[#9B231B]">
                          Harsh Reality
                        </span>
                      </div>
                      <AlertCircle className="w-4 h-4 text-[#9B231B]" />
                    </div>

                    <h3 className="mt-5 font-poppins text-[19px] sm:text-[21px] font-bold text-[#181715]">
                      {currentStage.negative.title}
                    </h3>

                    <p className="mt-3 text-[14.5px] sm:text-[15.5px] font-roboto text-[#3D3933] leading-[1.68]">
                      “{currentStage.negative.text}”
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#F5E5E3] flex items-center justify-between text-[12px] text-[#9B231B] font-mono">
                    <span>Negative / Systemic Trap</span>
                    <span>Hold in Custody</span>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Prev/Next Navigation */}
            <div className="pt-2 flex items-center justify-between">
              <button
                type="button"
                disabled={selectedStageIdx === 0}
                onClick={() => setSelectedStageIdx((prev) => Math.max(0, prev - 1))}
                className="inline-flex items-center gap-1.5 text-[13px] font-poppins font-semibold text-[#181715] disabled:opacity-35 disabled:cursor-not-allowed hover:text-[#9B231B] transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Checkpoint</span>
              </button>

              <button
                type="button"
                disabled={selectedStageIdx === khelCards.stages.length - 1}
                onClick={() =>
                  setSelectedStageIdx((prev) => Math.min(khelCards.stages.length - 1, prev + 1))
                }
                className="inline-flex items-center gap-1.5 text-[13px] font-poppins font-semibold text-[#181715] disabled:opacity-35 disabled:cursor-not-allowed hover:text-[#9B231B] transition-colors"
              >
                <span>Next Checkpoint</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
