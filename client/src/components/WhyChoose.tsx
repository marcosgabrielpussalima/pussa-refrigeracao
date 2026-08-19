import { Zap, Users, Home, FileCheck, Clock, Wrench } from 'lucide-react';

const reasons = [
  { icon: Zap, title: 'Atendimento Rápido', description: 'Respondemos rapidamente suas solicitações' },
  { icon: Users, title: 'Técnicos Especializados', description: 'Profissionais qualificados e experientes' },
  { icon: Home, title: 'Serviço Residencial', description: 'Atendimento especializado em residências' },
  { icon: FileCheck, title: 'Orçamento sem Compromisso', description: 'Diagnóstico e orçamento gratuitos' },
  { icon: Clock, title: 'Atendimento de Segunda a Sábado', description: 'Disponível 08:00 - 18:00' },
  { icon: Wrench, title: 'Diversas Marcas Atendidas', description: 'Reparamos todas as principais marcas' }
];

export default function WhyChoose() {
  return (
    <section id="por-que" className="section-padding bg-gradient-to-br from-[#F5F7FA] to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-4">Por que Escolher a Pussa Refrigeração</h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">Somos referência em assistência técnica com qualidade, confiança e profissionalismo.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-out hover:scale-105 border border-[#E5E7EB] animate-fade-in-up" style={{ animationDelay: `${index * 80}ms` }}>
                <div className="mb-4"><div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#0066CC] to-[#1E40AF] rounded-lg"><Icon className="text-white" size={28} /></div></div>
                <h3 className="text-xl font-bold text-[#001F3F] mb-2">{reason.title}</h3>
                <p className="text-[#6B7280]">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
