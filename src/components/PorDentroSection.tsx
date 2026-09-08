import React from 'react';
import Reveal from './Reveal';

export default function PorDentroSection() {
  const provaSocialCards = [
    {
      title: 'CONTEÚDO DIRETO AO PONTO',
      desc: 'Vídeos objetivos e organizados para ajudar você a avançar sem se perder no caminho.',
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
    <section className="py-14 sm:py-20 bg-bg/85 border-b border-text/8 relative">
      <div className="container mx-auto px-5 sm:px-8 max-w-6xl">
        
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
          <span className="text-[11px] font-sans font-medium tracking-[0.24em] text-accent uppercase block mb-2">
            POR DENTRO DA JORNADA
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-text mb-3">
            O que você encontra lá dentro
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-sans text-olive font-normal leading-relaxed">
            Cada elemento da plataforma foi desenhado para criar uma experiência de estudo contínua, sem atritos ou distrações.
          </p>
        </div>

        {/* Grid Editorial com Todas as Pranchas Visíveis no Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {provaSocialCards.map((card, idx) => (
            <Reveal key={idx} delay={idx * 0.08}>
              <div className="h-full bg-card border border-text/10 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-accent/40 group">
                
                {/* Moldura da Imagem com Aspect Ratio Preciso */}
                <div className="relative aspect-[16/10] bg-bg-alt/50 overflow-hidden border-b border-text/8">
                  <img
                    src={card.img}
                    alt={card.caption}
                    width={card.width}
                    height={card.height}
                    loading="lazy"
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

      </div>
    </section>
  );
}
