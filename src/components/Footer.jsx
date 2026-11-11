import { RIHAI_DATA } from "../data/rihaiData";
import { Scale, ArrowUpRight, Phone, Mail, Globe } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#181715] text-[#ABA496] pt-16 pb-12 border-t border-[#292723]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#292723]">
          {/* Col 1: About & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#B85042] flex items-center justify-center text-white">
                <Scale className="w-4 h-4" />
              </div>
              <span className="font-poppins text-2xl font-bold tracking-tight text-[#FAF9F5]">
                Project Rihaai
              </span>
            </div>

            <p className="text-sm font-roboto text-[#ABA496] leading-relaxed max-w-sm">
              An initiative of <strong className="text-white">TYCIA Foundation</strong> in collaboration
              with <strong className="text-white">Project Second Chance</strong>. Bridging the gap
              between judicial bail and actual release for underprivileged undertrials across India.
            </p>

            <div className="text-xs font-mono text-[#857F73]">
              “Systemic change starts with awareness.”
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3 font-poppins">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Exploration
            </h4>
            <ul className="space-y-2 text-xs">
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
                  Khel Rihaai Ka (Journey)
                </a>
              </li>
              <li>
                <a href="#eligibility" className="hover:text-white transition-colors">
                  Eligibility & Safeguards
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-white transition-colors">
                  Fund Freedom (Donate)
                </a>
              </li>
              <li>
                <a href="#referral" className="hover:text-white transition-colors">
                  Refer an Undertrial
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Official Contact & Helplines
            </h4>
            <div className="space-y-2.5 text-xs text-[#ABA496] font-roboto">
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#B85042] shrink-0" />
                <span>+91 90848-93438 • +91 99994 81241</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#B85042] shrink-0" />
                <a
                  href={`mailto:${RIHAI_DATA.meta.emailPrimary}`}
                  className="hover:text-white transition-colors"
                >
                  {RIHAI_DATA.meta.emailPrimary}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-3.5 h-3.5 text-[#B85042] shrink-0" />
                <a
                  href={RIHAI_DATA.meta.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>tyciafoundation.org</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="pt-3">
              <a
                href={RIHAI_DATA.meta.donationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-poppins font-semibold px-4 py-2 bg-[#B85042] hover:bg-[#9F3E32] text-white rounded-full transition-all"
              >
                <span>Support Campaign on Milaap</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#625D54] font-roboto">
          <p>
            © {new Date().getFullYear()} Project Rihaai. An initiative of TYCIA Foundation (Working since 2011).
          </p>
          <p className="text-center md:text-right max-w-xl">
            Disclaimer: Project Rihaai operates strictly within verified judicial orders. We do not determine guilt,
            interfere with police/prison procedures, or replace competent legal counsel.
          </p>
        </div>
      </div>
    </footer>
  );
};
