import { ArrowUpRight } from "lucide-react";
import { RIHAI_DATA } from "../data/rihaiData";
import shivaniImg from "../assets/shivani-kumari.webp";
import karanImg from "../assets/karan-kumar.webp";

const TEAM_PHOTOS = {
  "shivani-kumari": shivaniImg,
  "karan-kumar": karanImg,
};

/**
 * Leadership & Team showcase displaying verified member bios, portraits, and LinkedIn links.
 */
export const TeamSection = () => {
  return (
    <section id="team" className="py-20 sm:py-28 bg-[#F2EDE3] border-t border-[#E2DCCF]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] font-semibold text-[#9B231B]">
            Leadership &amp; Team
          </span>
          <h2 className="mt-2 font-poppins text-[28px] sm:text-[38px] font-bold tracking-[-0.02em] text-[#181715] leading-[1.15]">
            The people behind Rihaai.
          </h2>
          <p className="mt-3 font-roboto text-[15px] sm:text-[17px] text-[#3D3933] leading-[1.65]">
            Meet the social sector practitioners leading prison-based interventions, legal
            coordination, and post-release rehabilitation.
          </p>
        </div>

        {/* Team Member Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {RIHAI_DATA.team.map((member) => (
            <article
              key={member.id}
              className="bg-white rounded-2xl border border-[#E2DCCF] p-6 sm:p-8 flex flex-col justify-between shadow-[0_6px_24px_rgba(24,23,21,0.04)]"
            >
              <div>
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="shrink-0 w-32 sm:w-36 aspect-[4/5] rounded-xl overflow-hidden bg-[#FAF9F5] border border-[#E2DCCF]">
                    <img
                      src={TEAM_PHOTOS[member.id]}
                      alt={`${member.name} — ${member.role}`}
                      width={480}
                      height={600}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div className="min-w-0">
                    <span className="inline-block font-mono text-[11px] uppercase tracking-wider font-semibold text-[#9B231B] bg-[#FAF9F5] border border-[#E2DCCF] px-2.5 py-1 rounded-full">
                      {member.role}
                    </span>
                    <h3 className="mt-3 font-poppins text-[22px] sm:text-[24px] font-bold text-[#181715] leading-tight">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#9B231B] transition-colors"
                      >
                        {member.name}
                      </a>
                    </h3>
                    <p className="mt-2 font-roboto text-[13.5px] font-medium text-[#4A453E] leading-snug">
                      {member.tagline}
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-3 font-roboto text-[14.5px] text-[#3D3933] leading-[1.68]">
                  {member.summary.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>

              {/* LinkedIn Redirect Action */}
              <div className="mt-6 pt-5 border-t border-[#F2EDE3] flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#59534A] whitespace-nowrap">
                  Verified Profile
                </span>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Connect with ${member.name} on LinkedIn`}
                  className="inline-flex items-center justify-center gap-2 h-10 px-4 bg-[#181715] hover:bg-[#9B231B] text-white text-[13px] font-poppins font-semibold rounded-full transition-colors whitespace-nowrap"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

