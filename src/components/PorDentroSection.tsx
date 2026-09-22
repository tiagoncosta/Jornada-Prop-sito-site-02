import React, { useState, useRef } from 'react';
import Reveal from './Reveal';

export default function PorDentroSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollLeft = containerRef.current.scrollLeft;
      const cardWidth = containerRef.current.offsetWidth * 0.85;
      if (cardWidth > 0) {
        const index = Math.round(scrollLeft / cardWidth);
        setActiveIdx(Math.min(Math.max(index, 0), provaSocialCards.length - 1));
      }
    }
  };

  const provaSocialCards = [
    {
      title: 'CONTEÚDO DIRETO AO PONTO',
      desc: 'Vídeos objetivos e organizados, acessíveis pelo site ou pelo aplicativo - você escolhe o que for mais prático pra sua rotina.',
      caption: 'Conteúdo em vídeo, direto ao ponto',
      img: '/prova-social-capa-membros.webp',
      width: 560,
      height: 286
    },
    {
      title: '6 PILARES. 17 SEMANAS.',
      desc: 'Uma jornada estruturada para desenvolver clareza e construir uma nova direção.',
      caption: '6 pilares, 17 semanas de jornada',
      img: '/prova-social-galeria-modulos.webp',
      width: 560,
      height: 286
    },
    {
      title: 'ACOMPANHE SUA EVOLUÇÃO',
      desc: 'Visualize seu progresso e perceba como cada etapa se conecta à próxima.',
      caption: 'Acompanhe seu progresso semana a semana',
      img: '/prova-social-lista-progresso.webp',
      width: 560,
      height: 283
    },
    {
      title: 'COMUNIDADE E TROCA REAL',
      desc: 'Uma comunidade exclusiva no WhatsApp com pessoas que compartilham da mesma busca.',
      caption: 'Uma comunidade real de quem está vivendo a jornada',
      img: '/prova-social-whatsapp.webp',
      width: 450,
      height: 340
    }
  ];

  return (
    <section id="proxima-secao" className="py-14 sm:py-20 jornada-section-aurora relative scroll-mt-16 sm:scroll-mt-18 bg-transparent">
      <div className="container mx-auto px-5 sm:px-8 max-w-6xl relative z-10">
        
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
          <span className="text-[11px] font-sans font-semibold tracking-[0.24em] text-accent uppercase block mb-2">
            POR DENTRO DA JORNADA
          </span>
          <p className="text-xs sm:text-sm md:text-base font-sans text-olive font-normal leading-relaxed">
            Cada elemento da plataforma foi desenhado para criar uma experiência de estudo contínua, sem atritos ou distrações.
          </p>
        </div>

        {/* Carrossel Horizontal no Mobile e Grid Editorial no Desktop */}
        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none -mx-5 px-5 md:mx-0 md:px-0 scrollbar-hide pb-2 md:pb-0"
        >
          {provaSocialCards.map((card, idx) => (
            <Reveal
              key={idx}
              delay={idx * 0.08}
              className="snap-center shrink-0 w-[85vw] max-w-sm md:w-auto md:max-w-none h-full"
            >
              <div className="w-full h-full bg-card border border-accent/15 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-gold/50 hover:shadow-md hover:shadow-accent/5 group">
                
                {/* Moldura da Imagem com Aspect Ratio Preciso */}
                <div className="relative aspect-[16/10] bg-bg-alt/50 overflow-hidden border-b border-accent/10">
                  <img
                    src={card.img}
                    alt={card.caption}
                    width={card.width}
                    height={card.height}
                    loading={idx === 0 ? 'eager' : 'lazy'}
                    fetchPriority={idx === 0 ? 'high' : 'auto'}
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                {/* Bloco de Conteúdo Textual */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Título do Card */}
                    <h3 className="text-sm font-sans font-semibold tracking-wide text-text uppercase mb-2 leading-snug">
                      {card.title}
                    </h3>

                    {/* Pequena Descrição Explicando o Benefício */}
                    <p className="text-xs sm:text-sm font-sans text-olive font-normal leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

        {/* Indicador Visível Apenas no Mobile */}
        <div className="md:hidden flex flex-col items-center justify-center gap-2 mt-4">
          <div className="flex items-center justify-center gap-1.5" aria-hidden="true">
            {provaSocialCards.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIdx === i ? 'w-5 bg-accent' : 'w-1.5 bg-text/25'
                }`}
              />
            ))}
          </div>
          <p className="text-center text-[11px] font-sans text-olive/70">
            Arraste para o lado para ver mais →
          </p>
        </div>

      </div>
    </section>
  );
}
