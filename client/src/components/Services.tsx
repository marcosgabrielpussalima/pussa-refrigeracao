import { Snowflake } from 'lucide-react';

const services = [
  { id: 1, title: 'Conserto de Geladeiras', description: 'Conserto de geladeiras de todas as marcas.', image: '/assets/service-fridge.svg', icon: '❄️' },
  { id: 2, title: 'Conserto de Micro-ondas', description: 'Diagnóstico e reparo em micro-ondas residenciais.', image: '/assets/service-microwave.svg', icon: '🌡️' },
  { id: 3, title: 'Manutenção de Freezers', description: 'Conserto e manutenção preventiva e corretiva.', image: '/assets/service-freezer.svg', icon: '🧊' },
  { id: 4, title: 'Manutenção de Máquinas de Lavar', description: 'Limpeza, manutenção preventiva e troca de componentes.', image: '/assets/service-fridge.svg', icon: '🔧' }
];

export default function Services() {
  return (
    <section id="servicos" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-4">Nossos Serviços</h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">Oferecemos soluções completas em refrigeração residencial com profissionais qualificados e atendimento rápido.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={service.id} className="service-card animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#0066CC]/10 to-[#001F3F]/10">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#001F3F] mb-2">{service.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
