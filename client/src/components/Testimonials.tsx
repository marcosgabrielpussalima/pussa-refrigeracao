import { Star } from 'lucide-react';

const testimonials = [
  { id: 1, name: 'João Silva', role: 'Cliente Residencial', text: 'Excelente atendimento! O técnico foi muito profissional e resolveu o problema da minha geladeira rapidamente. Recomendo!', rating: 5 },
  { id: 2, name: 'Maria Santos', role: 'Cliente Residencial', text: 'Serviço de qualidade com preço justo. Atendimento rápido e técnico muito competente. Voltaria a chamar com certeza.', rating: 5 },
  { id: 3, name: 'Carlos Oliveira', role: 'Cliente Residencial', text: 'Muito satisfeito com o conserto do meu freezer. Profissionais qualificados e atendimento atencioso do início ao fim.', rating: 5 },
  { id: 4, name: 'Ana Costa', role: 'Cliente Residencial', text: 'Responderam rapidamente e agendaram a visita no mesmo dia. Problema resolvido com garantia. Muito bom!', rating: 5 },
  { id: 5, name: 'Pedro Ferreira', role: 'Cliente Residencial', text: 'Ótima experiência! Técnico chegou no horário, diagnosticou bem o problema e executou o serviço com perfeição.', rating: 5 }
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-gradient-to-br from-[#F5F7FA] to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-4">Avaliações de Clientes</h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">Veja o que nossos clientes satisfeitos dizem sobre nosso serviço.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-[#E5E7EB] animate-fade-in-up" style={{ animationDelay: `${index * 80}ms` }}>
              <div className="flex gap-1 mb-4">{[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={18} className="fill-[#FCD34D] text-[#FCD34D]" />)}</div>
              <p className="text-[#6B7280] mb-6 leading-relaxed italic">"{testimonial.text}"</p>
              <div className="border-t border-[#E5E7EB] pt-4"><p className="font-bold text-[#001F3F]">{testimonial.name}</p><p className="text-sm text-[#6B7280]">{testimonial.role}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
