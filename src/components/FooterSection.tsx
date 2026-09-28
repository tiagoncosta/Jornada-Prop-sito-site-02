import React from 'react';
import { ArrowLeft } from 'lucide-react';
import JornadaSymbol from './JornadaSymbol';

function WhatsAppIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.889-9.885 9.889m0-18.177c-4.57 0-8.287 3.717-8.29 8.29 0 1.46.381 2.88 1.104 4.135l.17.294-.73 2.665 2.73-.716.284.168a8.27 8.27 0 004.726 1.45h.006c4.57 0 8.288-3.717 8.29-8.29 0-2.215-.863-4.298-2.43-5.864A8.23 8.23 0 0012.051 3.608" />
    </svg>
  );
}

export default function FooterSection() {
  return (
    <footer className="pt-20 sm:pt-28 pb-12 sm:pb-16 bg-gradient-to-b from-transparent via-[#162332]/90 to-[#121B27] text-[#FAF7F2] relative">
      {/* Luz ambiente difusa no topo do rodapé para transição fluida */}
      <div className="pointer-events-none absolute top-0 left-1/4 w-80 h-32 rounded-full bg-azure-light/10 blur-3xl" />
      <div className="pointer-events-none absolute top-0 right-1/4 w-80 h-32 rounded-full bg-gold-light/10 blur-3xl" />

      <div className="container mx-auto px-5 sm:px-8 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          {/* Marca e Identidade */}
          <div className="flex items-center gap-3.5 justify-center lg:justify-start">
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

          {/* Links de Ação: Suporte WhatsApp e Retorno ao Portal */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
            <a
              id="btn-suporte-whatsapp"
              href="https://wa.me/5562985187659"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Suporte no WhatsApp"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#25D366]/35 hover:border-[#25D366] text-[#A7F3D0] hover:text-[#FFFFFF] hover:bg-[#25D366]/10 bg-[#132225] px-5 py-2.5 rounded-sm font-sans font-medium text-xs tracking-wider transition-all duration-200 cursor-pointer active:scale-[0.98] shadow-xs min-h-[44px]"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
              <span>Suporte WhatsApp</span>
            </a>

            <a
              id="btn-voltar-portal"
              href="https://www.portalguilhermekoichi.com.br/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-gold/30 hover:border-gold-light text-gold-light hover:text-[#FDFCFA] hover:bg-gold/10 bg-[#1A2637] px-5 py-2.5 rounded-sm font-sans font-medium text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer active:scale-[0.98] shadow-xs min-h-[44px]"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-gold-light shrink-0" />
              <span>Voltar ao portal</span>
            </a>
          </div>

          {/* Direitos Reservados */}
          <p className="text-[11px] font-sans text-[#8E877B]">
            &copy; 2026 Jornada Propósito Pleno • Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
