import React, { useRef } from 'react';
import Reveal from './Reveal';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

export default function MetodoOrigemSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const depoimentos = [
    {
      nome: 'Bruna',
      src: '/depoimento-bruna.mp4',
      cargo: 'Membro da comunidade'
    },
    {
      nome: 'Thaísa',
      src: '/depoimento-thaisa.mp4',
      cargo: 'Membro da comunidade'
    },
    {
      nome: 'Mônica',
      src: '/depoimento-monica.mp4',
      cargo: 'Membro da comunidade'
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-14 sm:py-20 relative bg-transparent">
      <div className="container mx-auto px-5 sm:px-8 max-w-5xl relative z-10">
        
        {/* Cabeçalho da Seção */}
        <Reveal>
          <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-12">
            <span className="text-[11px] font-sans font-medium tracking-[0.24em] text-accent uppercase block mb-2">
              ORIGEM DO MÉTODO
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-text mb-3">
              De onde vem o método da Jornada
            </h2>
            <p className="text-xs sm:text-sm md:text-base font-sans text-olive font-normal leading-relaxed max-w-xl mx-auto">
              Esse conteúdo nasceu no Forte das Almas, comunidade guiada por Guilherme com encontros semanais ao vivo. Veja quem já viveu essa transformação:
            </p>
          </div>
        </Reveal>

        {/* Carrossel Horizontal Nativo sem Dependências Externas */}
        <div className="relative max-w-4xl mx-auto mb-8 sm:mb-10">
          {/* Botões de Navegação Desktop */}
          <div className="hidden sm:flex items-center justify-between absolute -top-12 right-0 gap-2 z-10">
            <button
              onClick={() => scroll('left')}
              aria-label="Depoimento anterior"
              className="w-9 h-9 rounded-sm border border-accent/20 bg-card hover:bg-accent/5 hover:border-accent flex items-center justify-center text-accent transition-all cursor-pointer active:scale-95 shadow-2xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Próximo depoimento"
              className="w-9 h-9 rounded-sm border border-accent/20 bg-card hover:bg-accent/5 hover:border-accent flex items-center justify-center text-accent transition-all cursor-pointer active:scale-95 shadow-2xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Trilho de Scroll Snap Horizontal */}
          <div
            ref={carouselRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 pt-1 px-1 no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {depoimentos.map((dep, idx) => (
              <div
                key={idx}
                className="w-[280px] sm:w-[320px] md:w-[340px] shrink-0 snap-center bg-card border border-accent/15 hover:border-gold/50 rounded-sm overflow-hidden flex flex-col justify-between shadow-2xs transition-all group"
              >
                {/* Reprodutor de Vídeo HTML5 */}
                <div className="relative aspect-[9/16] bg-text/5 flex items-center justify-center overflow-hidden">
                  <video
                    controls
                    preload="metadata"
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={`${dep.src}#t=0.001`} type="video/mp4" />
                    <source src={dep.src} type="video/mp4" />
                    Seu navegador não suporta a reprodução deste vídeo.
                  </video>

                  {/* Placeholder Informativo de Fallback visual */}
                  <div className="absolute inset-0 pointer-events-none -z-10 flex flex-col items-center justify-center p-4 text-center bg-bg-alt/60">
                    <div className="w-12 h-12 rounded-full bg-accent/15 text-accent flex items-center justify-center mb-3">
                      <Play className="w-5 h-5 fill-accent" />
                    </div>
                    <span className="text-xs font-serif font-medium text-text">
                      Vídeo de {dep.nome}
                    </span>
                  </div>
                </div>

                {/* Legenda do Depoimento */}
                <div className="p-4 bg-card border-t border-text/8">
                  <p className="text-sm font-serif font-normal text-text">
                    Depoimento de {dep.nome}
                  </p>
                  <span className="text-[11px] font-sans text-olive block mt-0.5">
                    {dep.cargo}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Controles de Navegação Mobile */}
          <div className="flex sm:hidden items-center justify-center gap-3 mt-4">
            <button
              onClick={() => scroll('left')}
              aria-label="Depoimento anterior"
              className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-sm border border-accent/20 bg-card hover:bg-accent/5 flex items-center justify-center text-accent transition-all cursor-pointer active:scale-95 shadow-2xs"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Próximo depoimento"
              className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-sm border border-accent/20 bg-card hover:bg-accent/5 flex items-center justify-center text-accent transition-all cursor-pointer active:scale-95 shadow-2xs"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Parágrafo de Fechamento */}
        <Reveal>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs sm:text-sm md:text-base font-sans text-olive font-normal leading-relaxed">
              Hoje, o mesmo método está na Jornada Propósito Pleno - em devocionais diários gravados, no seu ritmo, sem precisar de encontro marcado.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
