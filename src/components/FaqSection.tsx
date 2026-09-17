import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowRight, ShieldCheck } from 'lucide-react';

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = [
    {
      q: 'E se eu não tiver tempo?',
      a: 'A Jornada é feita pra caber na vida real, não pra competir com ela. Cada devocional é curto o suficiente pra entrar no seu dia, não pra tomar ele.'
    },
    {
      q: 'Já tentei outros cursos e não terminei.',
      a: 'Essa não é uma lista de aulas soltas pra você se organizar sozinho. É um caminho com ordem definida, mas sem prazo - você segue pilar a pilar, pausa quando precisar e retoma de onde parou. A Jornada espera por você.'
    },
    {
      q: 'Quanto tempo eu tenho acesso?',
      a: 'Pagamento único. Você entra uma vez, e o caminho é seu pra sempre.'
    },
    {
      q: 'O Pilar 6 já está incluído se eu comprar agora?',
      a: 'Sim. Você garante o acesso vitalício hoje, com os 5 pilares disponíveis, e o Pilar 6 entra na sua área de membros automaticamente em outubro, sem cobrança adicional.'
    },
    {
      q: 'E se eu não gostar ou não me identificar com a Jornada?',
      a: 'Você não precisa carregar a dúvida. Tem 7 dias pra sentir se faz sentido pra você - sem risco, sem burocracia pra pedir reembolso.'
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-bg/85 border-b border-text/8 relative">
      <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
        
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-text">
            Dúvidas Frequentes
          </h2>
        </div>

        <div className="border-t border-text/12">
          {faqItems.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx} 
                className="border-b border-text/12 transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left py-4 sm:py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none group"
                >
                  <span className="font-serif text-base sm:text-lg text-text leading-snug flex-1 group-hover:text-accent transition-colors">
                    {item.q}
                  </span>
                  <div className="w-6 h-6 flex items-center justify-center shrink-0 text-accent">
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-text' : 'text-accent'
                      }`} 
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="pb-5 pt-1 text-olive text-xs sm:text-sm font-sans font-normal leading-relaxed pr-6">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10 sm:mt-14">
          <a 
            href="https://pay.hub.la/RBS2l0kJ8JIuPjA14Nr5"
            className="w-full sm:w-auto min-h-[48px] sm:min-w-[300px] bg-text hover:bg-text/90 active:scale-[0.98] text-[#F8F6F2] font-sans font-medium py-3.5 sm:py-4 px-8 rounded-sm shadow-sm hover:shadow transition-all duration-200 text-xs sm:text-sm tracking-wider uppercase inline-flex items-center justify-center gap-2.5 cursor-pointer text-center"
          >
            <span>Quero começar minha Jornada</span>
            <ArrowRight className="w-4 h-4 text-[#F8F6F2]/80" />
          </a>
          <div className="mt-4 text-[11px] font-sans text-olive/70 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-accent" />
            <span>Garantia incondicional de 7 dias • Pagamento seguro via Hubla</span>
          </div>
        </div>

      </div>
    </section>
  );
}
