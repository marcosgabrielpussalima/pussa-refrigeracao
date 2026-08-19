import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50">
      <div className="container mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img src="/assets/pussa-logo.svg" alt="Pussa Refrigeração" className="h-12 w-12" />
            <div className="hidden sm:block"><h1 className="text-lg font-bold text-[#001F3F]">Pussa</h1><p className="text-xs text-[#0066CC]">Refrigeração</p></div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('servicos')} className="text-[#374151] hover:text-[#0066CC] transition-colors font-medium">Serviços</button>
            <button onClick={() => scrollToSection('por-que')} className="text-[#374151] hover:text-[#0066CC] transition-colors font-medium">Por que Pussa</button>
            <button onClick={() => scrollToSection('como-funciona')} className="text-[#374151] hover:text-[#0066CC] transition-colors font-medium">Como Funciona</button>
            <button onClick={() => scrollToSection('faq')} className="text-[#374151] hover:text-[#0066CC] transition-colors font-medium">FAQ</button>
            <a href="tel:+558198540421" className="btn-primary flex items-center gap-2"><Phone size={18} />Ligar</a>
          </nav>
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>
        </div>
        {mobileMenuOpen && <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-[#E5E7EB] pt-4">
          <button onClick={() => scrollToSection('servicos')} className="text-left text-[#374151] hover:text-[#0066CC] transition-colors font-medium">Serviços</button>
          <button onClick={() => scrollToSection('por-que')} className="text-left text-[#374151] hover:text-[#0066CC] transition-colors font-medium">Por que Pussa</button>
          <button onClick={() => scrollToSection('como-funciona')} className="text-left text-[#374151] hover:text-[#0066CC] transition-colors font-medium">Como Funciona</button>
          <button onClick={() => scrollToSection('faq')} className="text-left text-[#374151] hover:text-[#0066CC] transition-colors font-medium">FAQ</button>
          <a href="tel:+558198540421" className="btn-primary flex items-center justify-center gap-2 w-full"><Phone size={18} />Ligar Agora</a>
        </nav>}
      </div>
    </header>
  );
}
