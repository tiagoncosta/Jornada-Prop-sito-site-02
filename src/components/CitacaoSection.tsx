import React from 'react';

export default function CitacaoSection() {
  return (
    <section className="py-14 sm:py-18 bg-bg/85 text-center border-b border-text/8 relative">
      <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
        <blockquote className="text-lg sm:text-xl md:text-2xl font-serif font-normal text-text leading-relaxed italic mb-4">
          "A Jornada não é pra todo mundo. Mas se você sente que nasceu pra algo maior... essa é a hora."
        </blockquote>

        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-sans text-olive">
          <span className="w-6 h-[1px] bg-accent/60" />
          <span className="font-medium tracking-wide uppercase">Guilherme Koichi</span>
          <span className="w-6 h-[1px] bg-accent/60" />
        </div>
      </div>
    </section>
  );
}
