import React from 'react';
import Reveal from './Reveal';

export default function ComoFuncionaSection() {
  const passosComoFunciona = [
    {
      step: '01',
      title: 'Comece pelo Pilar 1',
      desc: 'A Jornada segue uma ordem definida, um pilar de cada vez. Você não decide o que vem depois, só segue o caminho.'
    },
    {
      step: '02',
      title: 'Assista o devocional do dia',
      desc: 'Vídeo curto, direto ao ponto, dentro da área de membros.'
    },
    {
      step: '03',
      title: 'Aplique com o material de apoio',
      desc: 'O ebook de cada módulo ajuda a levar aquilo pra prática real, antes de seguir pro próximo.'
    }
  ];

  return (
    <section id="como-funciona" className="py-14 sm:py-20 bg-bg-alt/50 border-b border-text/8">
      <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
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
              <div className="h-full border border-text/10 bg-card p-6 sm:p-7 rounded-sm flex flex-col justify-between">
                <div>
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
