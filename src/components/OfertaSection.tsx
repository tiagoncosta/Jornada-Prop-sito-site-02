import React from 'react';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';
import JornadaSymbol from './JornadaSymbol';

export default function OfertaSection() {
  const entregaveis = [
    'Acesso vitalício à área de membros',
    '17 semanas em 6 pilares: 5 pilares disponíveis agora e o Pilar 6 liberado em outubro, sem custo extra.',
    'Aplicativo exclusivo para assistir os devocionais de onde quiser',
    'Ebook de apoio por módulo',
    'Agente de IA na plataforma: peça um resumo, um mapa mental ou os principais insights de qualquer parte do conteúdo, quando quiser',
    'Grupo de WhatsApp exclusivo da Jornada',
    'Pilar 6 incluso de graça, quando lançar em outubro'
  ];

  return (
    <section id="oferta" className="py-16 sm:py-24 relative isolate bg-transparent">
      {/* Luz ambiente da aurora e do azul celeste fluindo na seção */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-gold-light/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-80 h-80 rounded-full bg-azure-light/20 blur-3xl" aria-hidden="true" />

      <div className="container mx-auto px-5 sm:px-8 max-w-2xl relative z-10">
        {/* Card Crepuscular Atmosférico com a Aurora Dourada e o Azul Celeste da Imagem */}
        <div className="jornada-dusk-card border border-gold/30 p-7 sm:p-10 md:p-12 text-center rounded-sm shadow-xl relative overflow-hidden">
          
          {/* Brilhos atmosféricos internos da aurora e do azul celeste */}
          <div className="pointer-events-none absolute -top-16 -left-16 w-56 h-56 rounded-full bg-gold-light/25 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute top-8 -right-16 w-60 h-60 rounded-full bg-azure-light/25 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-16 left-1/3 w-64 h-64 rounded-full bg-accent/30 blur-3xl" aria-hidden="true" />

          <div className="relative z-10">
            {/* Símbolo do Caminho e Cruz em Destaque Dourado */}
            <div className="w-9 h-11 text-gold-light mx-auto mb-3.5 drop-shadow-xs">
              <JornadaSymbol size="100%" color="currentColor" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-[#FDFCFA] mb-7 sm:mb-8 leading-tight">
              O que você recebe ao entrar hoje
            </h2>

            {/* Lista de Entregáveis em Vidro Crepuscular */}
            <div className="text-left max-w-lg mx-auto bg-[#101A27]/85 backdrop-blur-xs border border-gold/25 p-5 sm:p-7 rounded-sm mb-7 sm:mb-8 space-y-3.5 shadow-inner">
              <span className="text-[10px] font-sans font-semibold tracking-[0.2em] text-gold-light uppercase block mb-3">
                O que você vai receber:
              </span>
              {entregaveis.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-gold text-[#101A27] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[2.8]" />
                  </div>
                  <span className="text-xs sm:text-sm text-[#EAE4D9] font-sans font-normal leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Bloco de Preço com Tipografia Editorial */}
            <div className="mb-7 sm:mb-8 max-w-lg mx-auto space-y-2">
              <div className="inline-flex items-center text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.22em] text-gold-light uppercase bg-gold/15 border border-gold/30 px-3.5 py-1.5 rounded-sm mb-2">
                <span>86% DE DESCONTO</span>
              </div>
              <div className="flex items-baseline justify-center gap-3">
                <span className="text-base sm:text-lg font-serif text-gold-light/50 line-through">
                  R$ 697
                </span>
                <span className="text-3.5xl sm:text-4xl md:text-5xl font-serif font-normal text-gold-light">
                  R$ 97
                </span>
              </div>
              <p className="text-xs sm:text-[13px] font-sans text-gold-light/90 font-normal">
                Menos de R$1 por dia ao longo das 17 semanas, e o acesso é seu para sempre.
              </p>
              <p className="text-xs font-sans text-gold-light/75 font-normal">
                Cada semana adiando é uma semana a mais no mesmo lugar.
              </p>
            </div>

            {/* Botão CTA Principal com Máxima Força Visual */}
            <a 
              href="https://pay.hub.la/RBS2l0kJ8JIuPjA14Nr5"
              className="w-full sm:w-auto min-h-[48px] sm:min-w-[300px] bg-accent hover:bg-accent-hover active:scale-[0.98] text-[#FDFCFA] border border-gold/35 font-sans font-medium py-3.5 sm:py-4 px-8 rounded-sm shadow-md hover:shadow-xl hover:ring-2 hover:ring-gold/50 transition-all duration-200 text-xs sm:text-sm tracking-wider uppercase inline-flex items-center justify-center gap-2.5 cursor-pointer text-center"
            >
              <span>Quero começar minha Jornada</span>
              <ArrowRight className="w-4 h-4 text-[#FDFCFA]/80" />
            </a>

            {/* Indicador de Garantia e Pagamento Seguro */}
            <div className="mt-5 text-[11px] font-sans text-gold-light/75 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-light" />
              <span>Garantia incondicional de 7 dias • Pagamento seguro via Hubla</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
