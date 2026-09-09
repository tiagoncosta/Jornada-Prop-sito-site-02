import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="py-8 sm:py-10 bg-bg-alt/30 border-t border-text/8">
      <div className="container mx-auto px-5 sm:px-8 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
        <div>
          <span className="text-xs font-serif font-semibold tracking-[0.2em] text-text uppercase block">
            Jornada Propósito Pleno
          </span>
          <span className="text-[11px] font-sans text-olive block mt-0.5">
            Acompanhamento e clareza para a sua caminhada.
          </span>
        </div>

        <div className="flex items-center justify-center">
          <a
            id="btn-voltar-portal"
            href="https://www.portalguilhermekoichi.com.br/"
            className="inline-flex items-center justify-center gap-2 border border-text/20 hover:border-text text-text hover:bg-text/5 bg-card/70 px-5 py-2.5 rounded-sm font-sans font-medium text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer active:scale-[0.98]"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-accent" />
            <span>Voltar ao portal</span>
          </a>
        </div>

        <p className="text-[11px] font-sans text-olive/70">
          &copy; 2026 Jornada Propósito Pleno • Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
