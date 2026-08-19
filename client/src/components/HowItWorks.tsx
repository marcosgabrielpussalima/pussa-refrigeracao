import { MessageCircle, Calendar, Stethoscope, Wrench, ChevronRight } from 'lucide-react';

const steps = [
  { number: 1, title: 'Entre em Contato', description: 'Envie uma mensagem pelo WhatsApp com detalhes do problema', icon: MessageCircle },
  { number: 2, title: 'Agende uma Visita', description: 'Escolha o melhor horário para o atendimento técnico', icon: Calendar },
  { number: 3, title: 'Diagnóstico', description: 'Avaliamos o equipamento e apresentamos o orçamento', icon: Stethoscope },
  { number: 4, title: 'Conserto Realizado', description: 'Executamos o serviço com qualidade e garantia', icon: Wrench }
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-4">Como Funciona</h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">Processo simples e eficiente para resolver seus problemas de refrigeração.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[#0066CC] to-[#001F3F]" style={{ width: 'calc(100% - 60px)', marginLeft: '30px', marginRight: '30px' }}></div>
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-[#E5E7EB] h-full">
                  <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-[#0066CC] to-[#1E40AF] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">{step.number}</div>
                  <div className="mt-6 mb-4"><div className="inline-flex items-center justify-center w-16 h-16 bg-[#F5F7FA] rounded-lg"><Icon className="text-[#0066CC]" size={32} /></div></div>
                  <h3 className="text-xl font-bold text-[#001F3F] mb-2">{step.title}</h3>
                  <p className="text-[#6B7280] text-sm">{step.description}</p>
                </div>
                {index < steps.length - 1 && <div className="lg:hidden flex justify-center mt-4"><ChevronRight className="text-[#0066CC] rotate-90" size={24} /></div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
