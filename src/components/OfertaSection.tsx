import React from 'react';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';

export default function OfertaSection() {
  const entregaveis = [
    'Acesso vitalício à área de membros',
    '70 devocionais em vídeo, organizados em 5 pilares, ao longo de 14 semanas',
    'Material de apoio (ebook) por módulo, pra acompanhar cada devocional',
    'Acesso ao grupo de WhatsApp exclusivo de quem comprou a Jornada',
    'O Pilar 6 completo, incluso sem custo extra, quando lançar em outubro'
  ];

  return (
    <section id="oferta" className="py-16 sm:py-24 bg-bg-alt/40 relative overflow-hidden isolate border-b border-text/8">
      <div className="container mx-auto px-5 sm:px-8 max-w-2xl relative z-10">
        <div className="bg-card border border-text/12 p-7 sm:p-10 md:p-12 text-center rounded-sm shadow-sm relative">
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-text mb-7 sm:mb-8 leading-tight">
            O que você recebe ao entrar hoje
          </h2>

          {/* Lista de Entregáveis em Moldura Delicada */}
          <div className="text-left max-w-lg mx-auto bg-bg-light border border-text/10 p-5 sm:p-7 rounded-sm mb-7 sm:mb-8 space-y-3.5">
            <span className="text-[10px] font-sans font-semibold tracking-[0.2em] text-olive uppercase block mb-3">
              O que você vai receber:
            </span>
            {entregaveis.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-4 h-4 rounded-full bg-accent text-[#F8F6F2] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                </div>
                <span className="text-xs sm:text-sm text-text font-sans font-normal leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Bloco de Preço com Tipografia Editorial */}
          <div className="mb-7 sm:mb-8 max-w-lg mx-auto space-y-1.5">
            <div className="flex items-baseline justify-center gap-3">
              <span className="text-base sm:text-lg font-serif text-olive/60 line-through">
                R$ 697
              </span>
              <span className="text-3.5xl sm:text-4xl md:text-5xl font-serif font-normal text-text">
                R$ 97
              </span>
            </div>
            <p className="text-xs font-sans text-olive font-normal">
              Cada semana adiando é uma semana a mais no mesmo lugar.
            </p>
          </div>

          {/* Botão CTA Principal com Máxima Clareza */}
          <a 
            href="https://pay.hub.la/RBS2l0kJ8JIuPjA14Nr5"
            className="w-full sm:w-auto min-h-[48px] sm:min-w-[300px] bg-text hover:bg-text/90 active:scale-[0.98] text-[#F8F6F2] font-sans font-medium py-3.5 sm:py-4 px-8 rounded-sm shadow-sm hover:shadow transition-all duration-200 text-xs sm:text-sm tracking-wider uppercase inline-flex items-center justify-center gap-2.5 cursor-pointer text-center"
          >
            <span>Quero começar minha Jornada</span>
            <ArrowRight className="w-4 h-4 text-[#F8F6F2]/80" />
          </a>

          {/* Indicador de Garantia e Pagamento Seguro */}
          <div className="mt-5 text-[11px] font-sans text-olive/70 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-accent" />
            <span>Garantia incondicional de 7 dias • Pagamento seguro via Hubla</span>
          </div>

        </div>
      </div>
    </section>
  );
}
