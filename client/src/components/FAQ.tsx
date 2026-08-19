import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { id: 1, question: 'Vocês atendem em domicílio?', answer: 'Sim! Realizamos atendimento técnico em sua residência. Agendamos o horário mais conveniente para você.' },
  { id: 2, question: 'Fazem orçamento?', answer: 'Sim, fazemos orçamento sem compromisso. O técnico avalia o equipamento e apresenta o valor do serviço antes de executar.' },
  { id: 3, question: 'Quais marcas atendem?', answer: 'Atendemos todas as principais marcas de refrigeração: Brastemp, Consul, Electrolux, LG, Samsung, Midea, Cônsul e outras.' },
  { id: 4, question: 'Quanto tempo leva o conserto?', answer: 'O tempo varia conforme o problema. Alguns consertos são rápidos (30 minutos), outros podem levar mais tempo. O técnico informará durante o diagnóstico.' },
  { id: 5, question: 'Qual horário de atendimento?', answer: 'Atendemos de segunda a sábado, de 08:00 às 18:00. Entre em contato pelo WhatsApp para agendar.' },
  { id: 6, question: 'O serviço tem garantia?', answer: 'Sim! Oferecemos garantia nos serviços realizados. Consulte os detalhes com nosso técnico.' }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);
  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-4">Perguntas Frequentes</h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">Encontre respostas para as dúvidas mais comuns sobre nossos serviços.</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="border border-[#E5E7EB] rounded-lg overflow-hidden animate-fade-in-up" style={{ animationDelay: `${index * 60}ms` }}>
              <button onClick={() => setOpenId(openId === faq.id ? null : faq.id)} className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-[#F5F7FA] transition-colors">
                <span className="font-bold text-[#001F3F] text-left">{faq.question}</span>
                <ChevronDown size={20} className={`text-[#0066CC] transition-transform duration-300 flex-shrink-0 ml-4 ${openId === faq.id ? 'rotate-180' : ''}`} />
              </button>
              {openId === faq.id && <div className="px-6 py-4 bg-[#F5F7FA] border-t border-[#E5E7EB]"><p className="text-[#6B7280] leading-relaxed">{faq.answer}</p></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
