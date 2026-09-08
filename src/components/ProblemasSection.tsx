import React from 'react';
import Reveal from './Reveal';

export default function ProblemasSection() {
  const problemas = [
    {
      roman: 'I',
      title: 'Você já tentou mudar sozinho',
      desc: 'Motivação forte na primeira semana, e depois nada pra sustentar. Não falta vontade, falta um caminho.'
    },
    {
      roman: 'II',
      title: 'Sua fé fica num compartimento separado',
      desc: 'Você sabe o que a Bíblia diz, mas ela nunca chega no seu trabalho, no seu relacionamento, no seu dinheiro.'
    },
    {
      roman: 'III',
      title: 'Conteúdo solto, sem ordem',
      desc: 'Você já consumiu conteúdo cristão sobre isso, mas nunca em sequência, nunca formando um caminho de verdade.'
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-bg-alt/40 border-b border-text/8">
      <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
            <span className="text-[11px] font-sans font-medium tracking-[0.24em] text-accent uppercase block mb-2">
              O QUE TRAVA VOCÊ
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-text mb-3">
              Por que muita gente começa e nunca chega lá
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {problemas.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="h-full bg-card border border-text/10 p-6 sm:p-7 rounded-sm flex flex-col justify-between relative">
                <div>
                  {/* Marcador Romano Editorial */}
                  <span className="block font-serif text-2xl sm:text-3xl text-accent mb-4 font-normal">
                    {item.roman}
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
