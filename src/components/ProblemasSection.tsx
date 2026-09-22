import React from 'react';
import Reveal from './Reveal';

export default function ProblemasSection() {
  const problemas = [
    {
      title: 'Você já tentou mudar sozinho',
      desc: 'Você começa cheio de força, mas duas semanas depois já tá rolando o feed de novo, adiando pra amanhã. Não falta vontade, falta um caminho.'
    },
    {
      title: 'Sua fé fica num compartimento separado',
      desc: 'Você lê um versículo de manhã, mas na reunião difícil, na discussão com quem você ama, na hora de decidir uma compra, é como se a Bíblia nunca tivesse sido aberta.'
    },
    {
      title: 'Conteúdo solto, sem ordem',
      desc: 'Você já salvou dezenas de posts, assistiu vídeo atrás de vídeo - mas se alguém pedir pra explicar o que mudou de verdade na sua vida, a resposta não vem.'
    }
  ];

  return (
    <section className="py-14 sm:py-20 relative bg-transparent">
      <div className="container mx-auto px-5 sm:px-8 max-w-5xl relative z-10">
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
              <div className="h-full bg-card border border-accent/15 hover:border-gold/40 p-6 sm:p-7 rounded-sm flex flex-col justify-between relative transition-all duration-300 hover:shadow-xs group">
                <div>
                  <div className="w-5 h-0.5 bg-gold/40 group-hover:bg-gold/80 transition-colors mb-3 rounded-full" />
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

        {/* Parágrafo de Transição */}
        <Reveal>
          <div className="max-w-2xl mx-auto text-center mt-10 sm:mt-14">
            <p className="text-lg sm:text-xl font-serif font-normal text-text leading-relaxed italic">
              Por trás de tudo isso, uma pergunta vem antes de qualquer outra:{' '}
              <span className="text-accent not-italic">você sabe quem você é?</span>
            </p>
            <p className="text-xs sm:text-sm font-sans text-olive font-normal leading-relaxed mt-3">
              É aí que a Jornada começa.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
