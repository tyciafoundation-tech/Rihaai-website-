import { ArrowRight, ShieldCheck, HeartHandshake, Compass } from "lucide-react";
import rihaaiFreedomImg from "../assets/rihaai-freedom.jpg";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle organic background mesh */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-[#EFECE3] rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute top-1/3 left-10 -z-10 w-80 h-80 bg-[#F4EFEB] rounded-full blur-2xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#F4F1EA] border border-[#E8E4DA] text-xs font-mono text-[#625D54] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#B85042] animate-pulse" />
              <span>FREEDOM BEYOND BAIL • NATIONAL INITIATIVE</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-poppins text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.12] font-bold text-[#181715] tracking-tight mb-6">
              In India, bail is granted by law.{" "}
              <span className="font-semibold text-[#B85042] block sm:inline">
                Yet freedom is still bought with money.
              </span>
            </h1>

            {/* Narrative Paragraph */}
            <p className="font-roboto text-lg sm:text-xl text-[#423E38] font-normal leading-relaxed mb-8 max-w-2xl">
              Over 24,000 undertrials across India remain incarcerated despite winning bail—purely
              because their families cannot furnish a ₹15,000–₹20,000 court bond. Project Rihaai
              breaks this wall through verified court fixed deposits and community reintegration.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#impact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#B85042] hover:bg-[#9F3E32] text-white text-sm font-poppins font-semibold rounded-full shadow-sm hover:shadow transition-all duration-200"
              >
                <span>Support a Prisoner’s Release</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#khel"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent hover:bg-[#F4F1EA] text-[#181715] text-sm font-poppins font-semibold rounded-full border border-[#D9D3C5] hover:border-[#181715] transition-all duration-200"
              >
                <Compass className="w-4 h-4 text-[#B85042]" />
                <span>The Journey: Khel Rihaai Ka</span>
              </a>
            </div>

            {/* Micro Credibility Badges */}
            <div className="pt-6 border-t border-[#E8E4DA] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-roboto text-[#625D54]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#B85042] shrink-0" />
                <span>Court-sanctioned bank FDs</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-[#B85042] shrink-0" />
                <span>Pro-bono legal vetting</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <span className="font-mono text-[#181715] font-semibold">₹6 Lakhs</span>
                <span>to free 30 lives</span>
              </div>
            </div>
          </div>

          {/* Right Column: AI-Generated Editorial Artwork */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Decorative framed backdrop */}
              <div className="absolute inset-0 bg-[#EFECE3] rounded-3xl -rotate-1.5 transform transition-transform" />

              <div className="relative bg-white p-4 sm:p-5 rounded-3xl border border-[#E8E4DA] shadow-sm">
                <div className="relative overflow-hidden rounded-2xl bg-[#F7F6F2] aspect-video border border-[#E8E4DA]/60 group">
                  <img
                    src={rihaaiFreedomImg}
                    alt="Project Rihaai - Metamorphosis of prison bars into birds of freedom"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-mono">
                    <span className="bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-full">
                      Bars into Flight • Legal Release
                    </span>
                    <span className="hidden sm:inline-block opacity-80">
                      TYCIA Foundation
                    </span>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#625D54]">
                    <span className="font-mono uppercase font-semibold text-[#B85042]">
                      Artwork: Freedom Beyond Bail
                    </span>
                    <span className="font-roboto">Editorial Series</span>
                  </div>
                  <blockquote className="font-roboto text-sm text-[#292723] leading-snug font-medium italic border-l-2 border-[#B85042] pl-3">
                    "When freedom depends on a surety you cannot pay, poverty itself becomes a prison
                    sentence."
                  </blockquote>
                  <div className="pt-2 text-[11px] text-[#857F73] font-roboto">
                    TYCIA Foundation • Facilitating dignity, release, and second chances since 2011.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
