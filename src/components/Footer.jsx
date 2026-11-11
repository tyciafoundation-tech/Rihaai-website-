import { RIHAI_DATA } from "../data/rihaiData";
import rihaaiLogoLight from "../assets/rihaai-logo-light.webp";
import { ArrowUpRight, Phone, Mail, Globe } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#181715] text-[#CFC8BA] pt-16 pb-12 border-t border-[#2B2925]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/12">
          {/* Col 1: Official White+Red Rihaai Logo & Mission */}
          <div className="lg:col-span-5 space-y-5">
            <a href="#" className="inline-block" aria-label="Rihaai Home">
              <img
                src={rihaaiLogoLight}
                alt="Rihaai — Unpricing Freedom"
                width={320}
                height={137}
                loading="lazy"
                decoding="async"
                className="h-12 w-auto object-contain select-none"
              />
            </a>

            <p className="text-[14px] font-roboto text-[#CFC8BA] leading-[1.65] max-w-[40ch]">
              An initiative of <strong className="text-white">TYCIA Foundation</strong> in
              collaboration with <strong className="text-white">Project Second Chance</strong>.
              Bridging the gap between judicial bail and actual release for underprivileged
              undertrials across India.
            </p>

            <p className="text-[12px] font-mono text-[#A8A194]">
              “Systemic change starts with awareness.”
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3.5">
            <h3 className="text-[11px] font-mono uppercase tracking-wider text-white font-semibold">
              Explore Rihaai
            </h3>
            <ul className="space-y-2.5 text-[13.5px] font-poppins">
              <li>
                <a href="#crisis" className="hover:text-white transition-colors">
                  The Undertrial Crisis
                </a>
              </li>
              <li>
                <a href="#case-study" className="hover:text-white transition-colors">
                  Vinay’s Case Study
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  7-Stage Support Pathway
                </a>
              </li>
              <li>
                <a href="#khel" className="hover:text-white transition-colors">
                  Khel Rihaai Ka
                </a>
              </li>
              <li>
                <a href="#eligibility" className="hover:text-white transition-colors">
                  Eligibility &amp; Safeguards
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-white transition-colors">
                  Fund Freedom
                </a>
              </li>
              <li>
                <a href="#referral" className="hover:text-white transition-colors">
                  Refer an Undertrial
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-white transition-colors">
                  Team &amp; Leadership
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-[11px] font-mono uppercase tracking-wider text-white font-semibold">
              Official Contact &amp; Helplines
            </h3>
            <div className="space-y-3 text-[13.5px] text-[#CFC8BA] font-roboto">
              <div className="flex items-center gap-2.5 tabular-nums">
                <Phone className="w-4 h-4 text-[#E25B4F] shrink-0" aria-hidden="true" />
                <span>
                  {RIHAI_DATA.meta.phonePrimary} • {RIHAI_DATA.meta.phoneSecondary}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E25B4F] shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${RIHAI_DATA.meta.emailPrimary}`}
                  className="hover:text-white transition-colors inline-flex items-center min-h-[24px]"
                >
                  {RIHAI_DATA.meta.emailPrimary}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#E25B4F] shrink-0" aria-hidden="true" />
                <a
                  href={RIHAI_DATA.meta.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1 min-h-[24px]"
                >
                  <span>tyciafoundation.org</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={RIHAI_DATA.meta.donationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 h-10 px-5 text-[13px] font-poppins font-semibold bg-[#9B231B] hover:bg-[#7A1913] text-white rounded-full transition-colors"
              >
                <span>Support Campaign on Milaap</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-[12px] text-[#A8A194] font-roboto">
          <p>
            © {new Date().getFullYear()} Rihaai. An initiative of TYCIA Foundation (Working since
            2011).
          </p>
          <p className="md:text-right max-w-xl leading-relaxed">
            Disclaimer: Rihaai operates strictly within verified judicial orders. We do not
            determine guilt, interfere with police or prison procedures, or replace competent legal
            counsel.
          </p>
        </div>
      </div>
    </footer>
  );
};
