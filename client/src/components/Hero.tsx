import { MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-white to-[#F5F7FA]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="mb-8"><img src="/assets/pussa-logo.svg" alt="Pussa Refrigeração" className="h-32 w-32 mx-auto md:mx-0" /></div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-4">Assistência Técnica em Refrigeração Residencial</h1>
            <p className="text-lg text-[#6B7280] mb-8 leading-relaxed">Soluções para o seu lar. Atendimento rápido, profissionais qualificados e serviço com qualidade.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary flex items-center justify-center gap-2">Solicitar Orçamento</button>
              <a href="https://wa.me/558198540421" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center justify-center gap-2"><MessageCircle size={20} />Falar no WhatsApp</a>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row gap-6 text-sm">
              <div className="flex items-center gap-2"><div className="w-2 h-2 bg-[#10B981] rounded-full"></div><span className="text-[#374151]">Responde rapidamente</span></div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 bg-[#10B981] rounded-full"></div><span className="text-[#374151]">Profissionais qualificados</span></div>
            </div>
          </div>
          <div className="animate-slide-in-right hidden md:block"><div className="relative"><div className="absolute inset-0 bg-gradient-to-br from-[#0066CC]/20 to-[#001F3F]/20 rounded-2xl blur-2xl"></div><img src="/assets/service-fridge.svg" alt="Refrigeração residencial" className="relative rounded-2xl shadow-2xl w-full h-auto object-cover" /></div></div>
        </div>
      </div>
    </section>
  );
}
