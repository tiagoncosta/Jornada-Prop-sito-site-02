import React from 'react';
import { ArrowLeft } from 'lucide-react';
import JornadaSymbol from './JornadaSymbol';

export default function FooterSection() {
  return (
    <footer className="pt-20 sm:pt-28 pb-12 sm:pb-16 bg-gradient-to-b from-transparent via-[#162332]/90 to-[#121B27] text-[#FAF7F2] relative">
      {/* Luz ambiente difusa no topo do rodapé para transição fluida */}
      <div className="pointer-events-none absolute top-0 left-1/4 w-80 h-32 rounded-full bg-azure-light/10 blur-3xl" />
      <div className="pointer-events-none absolute top-0 right-1/4 w-80 h-32 rounded-full bg-gold-light/10 blur-3xl" />

      <div className="container mx-auto px-5 sm:px-8 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left relative z-10">
        <div className="flex items-center gap-3.5 justify-center md:justify-start">
          <div className="w-6 h-7 text-gold-light shrink-0">
            <JornadaSymbol size="100%" color="currentColor" />
          </div>
          <div>
            <span className="text-xs font-serif font-semibold tracking-[0.24em] text-[#FDFCFA] uppercase block">
              Jornada Propósito Pleno
            </span>
            <span className="text-[11px] font-sans text-[#C7C0B2] block mt-0.5">
              Acompanhamento e clareza para a sua caminhada.
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <a
            id="btn-voltar-portal"
            href="https://www.portalguilhermekoichi.com.br/"
            className="inline-flex items-center justify-center gap-2 border border-gold/30 hover:border-gold-light text-gold-light hover:text-[#FDFCFA] hover:bg-gold/10 bg-[#1A2637] px-5 py-2.5 rounded-sm font-sans font-medium text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer active:scale-[0.98] shadow-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-gold-light" />
            <span>Voltar ao portal</span>
          </a>
        </div>

        <p className="text-[11px] font-sans text-[#8E877B]">
          &copy; 2026 Jornada Propósito Pleno • Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
