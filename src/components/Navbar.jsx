import { useState, useEffect } from "react";
import { RIHAI_DATA } from "../data/rihaiData";
import { Scale, Menu, X, ArrowUpRight } from "lucide-react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "The Crisis", href: "#crisis" },
    { name: "Vinay's Story", href: "#case-study" },
    { name: "How It Works", href: "#process" },
    { name: "The Journey", href: "#khel" },
    { name: "Eligibility", href: "#eligibility" },
    { name: "Impact", href: "#impact" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#E8E4DA] py-3.5 shadow-xs"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Foundation Tagline */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#181715] flex items-center justify-center text-[#FAF9F5] shadow-xs group-hover:bg-[#B85042] transition-colors">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-poppins text-2xl font-bold tracking-tight text-[#181715]">
                  Project Rihaai
                </span>
                <span className="hidden sm:inline-block text-[11px] font-mono tracking-widest text-[#B85042] uppercase font-semibold">
                  रिहाई
                </span>
              </div>
              <p className="text-[11px] tracking-wide text-[#625D54] font-roboto">
                A <span className="font-medium text-[#181715]">TYCIA Foundation</span> Initiative
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[13.5px] font-poppins font-medium text-[#423E38]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#B85042] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA & Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#referral"
              className="text-xs font-poppins font-semibold px-3.5 py-2 text-[#423E38] hover:text-[#181715] rounded-full border border-[#D9D3C5] hover:border-[#181715] transition-all"
            >
              Refer a Case
            </a>
            <a
              href={RIHAI_DATA.meta.donationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-poppins font-semibold px-4 py-2 bg-[#B85042] hover:bg-[#9F3E32] text-white rounded-full transition-all shadow-xs"
            >
              <span>Donate Now</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#181715] hover:bg-[#E8E4DA]/50 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF9F5] border-b border-[#E8E4DA] px-4 pt-3 pb-6 shadow-lg animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-poppins font-medium text-[#423E38] hover:text-[#B85042] py-2 border-b border-[#E8E4DA]/50"
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-3">
              <a
                href="#referral"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center text-sm font-poppins font-semibold py-2.5 rounded-lg border border-[#D9D3C5] text-[#181715]"
              >
                Refer a Case
              </a>
              <a
                href={RIHAI_DATA.meta.donationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center text-sm font-poppins font-semibold py-2.5 rounded-lg bg-[#B85042] text-white flex items-center justify-center gap-2"
              >
                <span>Support Freedom (Donate)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
