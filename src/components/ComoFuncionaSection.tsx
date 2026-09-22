import React from 'react';
import Reveal from './Reveal';

export default function ComoFuncionaSection() {
  const passosComoFunciona = [
    {
      step: '01',
      title: 'Comece pelo Pilar 1',
      desc: 'A Jornada segue uma ordem definida, um pilar de cada vez - mas no seu tempo. Você não precisa decidir o que vem depois, só seguir o caminho, sem prazo pra isso.'
    },
    {
      step: '02',
      title: 'Assista o devocional do dia',
      desc: 'Vídeo curto, direto ao ponto - pelo site ou pelo aplicativo, como for mais prático pra você.'
    },
    {
      step: '03',
      title: 'Aplique com o material de apoio',
      desc: 'O ebook de cada módulo ajuda a levar aquilo pra prática real, antes de seguir pro próximo.'
    }
  ];

  return (
    <section id="como-funciona" className="py-14 sm:py-20 relative bg-transparent">
      <div className="container mx-auto px-5 sm:px-8 max-w-5xl relative z-10">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-text">
              Como funciona
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {passosComoFunciona.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="h-full border border-accent/15 hover:border-gold/50 bg-card p-6 sm:p-7 rounded-sm flex flex-col justify-between transition-all duration-300 hover:shadow-xs group">
                <div>
                  <span className="block text-2xl font-serif font-normal text-gold group-hover:text-accent transition-colors mb-2">
                    {item.step}
                  </span>

                  <h3 className="text-base sm:text-lg font-serif font-normal text-text mb-2.5 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-sans text-olive font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
