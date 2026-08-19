import { Phone, MapPin, Clock, ArrowUp, MessageCircle } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <footer className="bg-[#001F3F] text-white">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4"><img src="/assets/pussa-logo.svg" alt="Pussa" className="h-12 w-12 rounded-lg" /><div><h3 className="text-xl font-bold">Pussa</h3><p className="text-sm text-white/70">Refrigeração</p></div></div>
            <p className="text-white/80 leading-relaxed">Soluções para seu lar. Assistência técnica profissional em refrigeração residencial.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <div className="space-y-3">
              <a href="tel:+558198540421" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"><Phone size={18} /><span>(81) 9854-0421</span></a>
              <a href="https://wa.me/558198540421" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"><MessageCircle size={18} /><span>WhatsApp</span></a>
              <div className="flex items-start gap-3"><MapPin size={18} className="mt-1 flex-shrink-0" /><span className="text-white/80">Rua Francisco Soares Canha, 172<br />Recife - PE</span></div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Horário de Atendimento</h4>
            <div className="space-y-2 text-white/80"><div className="flex items-center gap-3"><Clock size={18} /><span>Segunda a Sábado</span></div><p className="ml-9 text-lg font-semibold text-white">08:00 - 18:00</p><p className="text-sm text-white/60 mt-4">Atendimento rápido e profissional para seus equipamentos de refrigeração.</p></div>
          </div>
        </div>
        <div className="border-t border-white/10 py-8"><div className="flex flex-col md:flex-row items-center justify-between gap-4"><p className="text-white/60 text-sm">© 2026 Pussa Refrigeração. Todos os direitos reservados.</p><button onClick={scrollToTop} className="flex items-center gap-2 bg-[#0066CC] hover:bg-[#1E40AF] text-white px-4 py-2 rounded-lg transition-all duration-300">Voltar ao Topo<ArrowUp size={18} /></button></div></div>
      </div>
    </footer>
  );
}
