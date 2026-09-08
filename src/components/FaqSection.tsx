import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

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
      a: 'Essa não é uma lista de aulas soltas pra você ter que se organizar sozinho. É um caminho com ordem definida - você não decide o que assistir, só segue o passo a passo.'
    },
    {
      q: 'É só mais uma coisa sobre finanças/mentalidade?',
      a: 'Não. É uma série de devocionais com base bíblica sobre desenvolvimento pessoal integrado - fé, mente, corpo, relacionamentos, vocação e finanças como parte de uma vida só, não tópicos soltos.'
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
      a: 'Você tem 7 dias de garantia. Se não fizer sentido pra você, é só pedir o reembolso, sem burocracia.'
    },
    {
      q: 'E se eu travar no meio e não conseguir terminar?',
      a: 'Você não perde o acesso. É vitalício - você pode pausar, voltar, recomeçar um pilar, no seu tempo. A Jornada espera por você.'
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

      </div>
    </section>
  );
}
