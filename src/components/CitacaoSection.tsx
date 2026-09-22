import React from 'react';
import JornadaSymbol from './JornadaSymbol';

export default function CitacaoSection() {
  return (
    <section className="py-16 sm:py-24 relative text-center bg-transparent">
      {/* Luz ambiente da aurora e do azul celeste fluindo na seção */}
      <div className="pointer-events-none absolute -top-16 left-1/4 w-72 h-72 rounded-full bg-azure-light/15 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-gold-light/15 blur-3xl" aria-hidden="true" />

      <div className="container mx-auto px-5 sm:px-8 max-w-3xl relative z-10">
        <div className="jornada-dusk-card border border-gold/30 p-8 sm:p-12 md:p-14 rounded-sm relative overflow-hidden shadow-xl text-center">
          {/* Brilhos atmosféricos internos: aurora dourada e azul celeste */}
          <div className="pointer-events-none absolute -top-16 -left-16 w-56 h-56 rounded-full bg-gold-light/25 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 w-60 h-60 rounded-full bg-azure-light/25 blur-3xl" aria-hidden="true" />

          <div className="relative z-10">
            <div className="w-8 h-10 text-gold-light mx-auto mb-4 drop-shadow-xs">
              <JornadaSymbol size="100%" color="currentColor" />
            </div>

            <p className="text-[11px] font-sans font-semibold tracking-[0.24em] text-gold-light uppercase mb-4">
              Conduzido por quem já viveu essa travessia
            </p>

            <blockquote className="text-xl sm:text-2xl md:text-3xl font-serif font-normal text-[#FDFCFA] leading-relaxed italic mb-5 max-w-2xl mx-auto">
              "A Jornada não é pra todo mundo. Mas se você sente que nasceu pra algo maior... essa é a hora."
            </blockquote>

            <div className="flex items-center justify-center gap-2.5 text-xs sm:text-sm font-sans text-gold">
              <span className="w-8 h-[1px] bg-gold/50" />
              <span className="font-semibold tracking-widest uppercase text-gold-light">Guilherme Koichi</span>
              <span className="w-8 h-[1px] bg-gold/50" />
            </div>

            <p className="text-xs sm:text-sm font-sans text-[#DDD6C8] font-normal leading-relaxed max-w-md mx-auto mt-4">
              Guilherme já atravessou seu próprio vazio de propósito - e foi dali que nasceu esse caminho.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
