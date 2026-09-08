import React from 'react';

export default function FooterSection() {
  return (
    <footer className="py-8 sm:py-10 bg-bg-alt/30">
      <div className="container mx-auto px-5 sm:px-8 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <span className="text-xs font-serif font-semibold tracking-[0.2em] text-text uppercase block">
            Jornada Propósito Pleno
          </span>
          <span className="text-[11px] font-sans text-olive block mt-0.5">
            Acompanhamento e clareza para a sua caminhada.
          </span>
        </div>

        <p className="text-[11px] font-sans text-olive/70">
          &copy; 2026 Jornada Propósito Pleno • Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
