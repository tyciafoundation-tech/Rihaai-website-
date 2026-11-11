import { ArrowRight, ShieldCheck, HeartHandshake, Compass } from "lucide-react";
import rihaaiFreedomImg from "../assets/rihaai-freedom.jpg";

export const Hero = () => {
  return (
    <section className="pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Editorial Headline & Action */}
          <div className="lg:col-span-7">
            <h1 className="font-poppins text-[2.25rem] sm:text-[3rem] lg:text-[3.4rem] leading-[1.09] tracking-[-0.025em] font-bold text-[#181715] max-w-[18ch]">
              In India, bail is granted by law.{" "}
              <span className="text-[#9B231B]">Yet freedom is still priced.</span>
            </h1>

            <p className="mt-6 font-roboto text-[16px] sm:text-[18px] text-[#3D3933] leading-[1.65] max-w-[56ch]">
              Over 24,000 undertrials across India remain incarcerated despite winning bail—purely
              because their families cannot furnish a ₹15,000–₹20,000 court bond. Rihaai breaks this
              barrier through verified court fixed deposits and community reintegration.
            </p>

            {/* Primary & Secondary Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#impact"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 bg-[#9B231B] hover:bg-[#7A1913] text-white text-[14px] font-poppins font-semibold rounded-full transition-colors"
              >
                <span>Fund a Prisoner’s Release</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#khel"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 bg-transparent hover:bg-[#F2EDE3] text-[#181715] text-[14px] font-poppins font-semibold rounded-full border border-[#D4CCB9] transition-colors"
              >
                <Compass className="w-4 h-4 text-[#9B231B]" />
                <span>Explore Khel Rihaai Ka</span>
              </a>
            </div>

            {/* Aligned Proof Strip */}
            <div className="mt-10 pt-6 border-t border-[#E2DCCF] grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#9B231B] shrink-0 mt-0.5" />
                <div className="text-[13px] leading-snug text-[#4A453E]">
                  <strong className="block font-poppins font-semibold text-[#181715]">
                    Court Bank FDs
                  </strong>
                  Zero cash handovers
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <HeartHandshake className="w-4 h-4 text-[#9B231B] shrink-0 mt-0.5" />
                <div className="text-[13px] leading-snug text-[#4A453E]">
                  <strong className="block font-poppins font-semibold text-[#181715]">
                    Pro-Bono Vetting
                  </strong>
                  Legal due diligence
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="font-mono text-[13px] font-semibold text-[#9B231B] tabular-nums shrink-0 mt-0.5">
                  ₹6L
                </span>
                <div className="text-[13px] leading-snug text-[#4A453E]">
                  <strong className="block font-poppins font-semibold text-[#181715]">
                    Phase 1 Pilot
                  </strong>
                  Goal to free 30 lives
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Artwork Frame */}
          <div className="lg:col-span-5">
            <figure className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E2DCCF] shadow-[0_6px_24px_rgba(24,23,21,0.06)]">
              <div className="relative overflow-hidden rounded-xl bg-[#181715] aspect-[4/3]">
                <img
                  src={rihaaiFreedomImg}
                  alt="Rihaai — Metamorphosis of prison bars into birds of freedom"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-mono">
                  <span className="bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-full">
                    Bars into Flight
                  </span>
                  <span className="opacity-90">TYCIA Foundation</span>
                </div>
              </div>

              <figcaption className="mt-4 pt-3.5 border-t border-[#F2EDE3] space-y-2">
                <blockquote className="font-roboto text-[14px] sm:text-[15px] text-[#181715] leading-relaxed italic">
                  “When freedom depends on a surety you cannot pay, poverty itself becomes a prison
                  sentence.”
                </blockquote>
                <p className="text-[12px] text-[#5F594F] font-roboto">
                  TYCIA Foundation • Facilitating dignity, release, and second chances since 2011.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
