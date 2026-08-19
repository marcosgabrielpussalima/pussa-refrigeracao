import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return isVisible ? (
    <a href="https://wa.me/558198540421" target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 z-40 bg-[#10B981] hover:bg-[#059669] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse-glow" title="Falar no WhatsApp">
      <MessageCircle size={28} />
    </a>
  ) : null;
}
