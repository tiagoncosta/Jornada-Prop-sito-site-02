import React from 'react';

export default function CitacaoSection() {
  return (
    <section className="py-14 sm:py-18 bg-bg/85 text-center border-b border-text/8 relative">
      <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
        <p className="text-[11px] font-sans font-medium tracking-[0.2em] text-accent uppercase mb-4">
          Conduzido por quem já viveu essa travessia
        </p>

        <blockquote className="text-lg sm:text-xl md:text-2xl font-serif font-normal text-text leading-relaxed italic mb-4">
          "A Jornada não é pra todo mundo. Mas se você sente que nasceu pra algo maior... essa é a hora."
        </blockquote>

        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-sans text-olive">
          <span className="w-6 h-[1px] bg-accent/60" />
          <span className="font-medium tracking-wide uppercase">Guilherme Koichi</span>
          <span className="w-6 h-[1px] bg-accent/60" />
        </div>

        <p className="text-xs sm:text-sm font-sans text-olive font-normal leading-relaxed max-w-md mx-auto mt-4">
          Guilherme já atravessou seu próprio vazio de propósito - e foi dali que nasceu esse caminho.
        </p>
      </div>
    </section>
  );
}
