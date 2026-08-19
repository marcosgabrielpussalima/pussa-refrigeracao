import { MessageCircle, Phone } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contato" className="section-padding gradient-blue">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Seu equipamento apresentou defeito?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">Entre em contato agora mesmo e solicite um orçamento sem compromisso. Nossos técnicos estão prontos para ajudar!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/558198540421" target="_blank" rel="noopener noreferrer" className="btn-success flex items-center justify-center gap-2 text-lg"><MessageCircle size={24} />Falar no WhatsApp</a>
            <a href="tel:+558198540421" className="bg-white text-[#0066CC] font-semibold py-3 px-8 rounded-lg hover:bg-[#F5F7FA] transition-all duration-300 ease-out active:scale-95 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-lg"><Phone size={24} />Ligar Agora</a>
          </div>
          <p className="text-white/80 mt-8 text-sm">Disponível de segunda a sábado, de 08:00 às 18:00</p>
        </div>
      </div>
    </section>
  );
}
