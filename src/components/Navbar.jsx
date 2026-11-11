import { useState, useEffect } from "react";
import { RIHAI_DATA } from "../data/rihaiData";
import rihaaiLogoDark from "../assets/rihaai-logo-dark.webp";
import { Menu, X, ArrowUpRight } from "lucide-react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Crisis", href: "#crisis" },
    { name: "Vinay’s Story", href: "#case-study" },
    { name: "Process", href: "#process" },
    { name: "Khel Rihaai Ka", href: "#khel" },
    { name: "Eligibility", href: "#eligibility" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#FAF9F5]/95 border-b border-[#E2DCCF] shadow-[0_1px_2px_rgba(24,23,21,0.04)]"
          : "bg-[#FAF9F5] border-b border-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="h-[76px] flex items-center justify-between gap-6">
          {/* Official Rihaai Logo + TYCIA Attribution */}
          <a href="#" className="flex items-center gap-3.5 shrink-0 group" aria-label="Rihaai Home">
            <img
              src={rihaaiLogoDark}
              alt="Rihaai — Unpricing Freedom"
              width={320}
              height={137}
              decoding="async"
              fetchPriority="high"
              className="h-10 sm:h-11 w-auto object-contain select-none"
            />
            <span className="hidden xl:block pl-3.5 border-l border-[#E2DCCF] text-[11px] leading-[1.3] text-[#59534A] font-roboto">
              An initiative by
              <br />
              <strong className="font-poppins font-semibold text-[#181715]">TYCIA Foundation</strong>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-6 xl:gap-7 text-[14px] font-poppins font-medium text-[#3D3933]"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="py-1 whitespace-nowrap hover:text-[#9B231B] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <a
              href="#referral"
              className="inline-flex items-center justify-center h-9 px-4 text-[13px] font-poppins font-semibold text-[#181715] hover:bg-[#F2EDE3] rounded-full border border-[#D4CCB9] transition-colors whitespace-nowrap"
            >
              Refer a Case
            </a>
            <a
              href={RIHAI_DATA.meta.donationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 h-9 px-4 bg-[#9B231B] hover:bg-[#7A1913] text-white text-[13px] font-poppins font-semibold rounded-full transition-colors whitespace-nowrap"
            >
              <span>Donate</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-[#181715] hover:bg-[#F2EDE3] transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF9F5] border-t border-[#E2DCCF] px-5 sm:px-8 py-5 shadow-md">
          <nav aria-label="Mobile Navigation" className="flex flex-col divide-y divide-[#E2DCCF]/70">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 text-[15px] font-poppins font-medium text-[#181715] hover:text-[#9B231B]"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-5">
            <a
              href="#referral"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center h-11 text-sm font-poppins font-semibold rounded-full border border-[#D4CCB9] text-[#181715] hover:bg-[#F2EDE3]"
            >
              Refer a Case
            </a>
            <a
              href={RIHAI_DATA.meta.donationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 h-11 text-sm font-poppins font-semibold rounded-full bg-[#9B231B] text-white hover:bg-[#7A1913]"
            >
              <span>Donate Now</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
