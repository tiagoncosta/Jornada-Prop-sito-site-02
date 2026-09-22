/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from 'react';
import PorDentroSection from './components/PorDentroSection';
import JornadaSymbol from './components/JornadaSymbol';

// Code splitting: Seções abaixo da dobra carregadas assincronamente com React.lazy
const ProblemasSection = React.lazy(() => import('./components/ProblemasSection'));
const PilaresSection = React.lazy(() => import('./components/PilaresSection'));
const ComoFuncionaSection = React.lazy(() => import('./components/ComoFuncionaSection'));
const MetodoOrigemSection = React.lazy(() => import('./components/MetodoOrigemSection'));
const FaqSection = React.lazy(() => import('./components/FaqSection'));
const OfertaSection = React.lazy(() => import('./components/OfertaSection'));
const CitacaoSection = React.lazy(() => import('./components/CitacaoSection'));
const FooterSection = React.lazy(() => import('./components/FooterSection'));

export default function App() {
  const scrollToNextSection = () => {
    const el = document.getElementById('proxima-secao');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-bg text-text selection:bg-accent/20 selection:text-text font-sans flex flex-col justify-between antialiased overflow-x-hidden relative">
      
      {/* Luzes Ambientais Contínuas e Fluídas em Toda a Extensão da Página */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none" aria-hidden="true">
        {/* Focos difusos de luz da aurora dourada e do azul celeste da imagem de referência */}
        <div className="absolute top-[6%] -left-40 w-[580px] h-[580px] rounded-full bg-gold-light/20 blur-[140px]" />
        <div className="absolute top-[20%] -right-40 w-[620px] h-[620px] rounded-full bg-azure-light/22 blur-[140px]" />
        <div className="absolute top-[42%] -left-36 w-[560px] h-[560px] rounded-full bg-azure/16 blur-[130px]" />
        <div className="absolute top-[62%] -right-36 w-[580px] h-[580px] rounded-full bg-gold/15 blur-[130px]" />
        <div className="absolute top-[80%] left-[10%] w-[540px] h-[540px] rounded-full bg-azure-light/18 blur-[130px]" />
      </div>

      {/* 0. HEADER EDITORIAL MINIMALISTA */}
      <header className="fixed top-0 w-full z-50 bg-bg/90 backdrop-blur-md transition-all shadow-xs">
        <div className="container mx-auto px-5 sm:px-8 h-16 sm:h-18 flex items-center justify-between max-w-6xl">
          {/* Logomarca Editorial com o Símbolo Oficial da Imagem */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-5 h-6 text-accent transition-transform duration-300 group-hover:scale-105 shrink-0">
              <JornadaSymbol size="100%" color="currentColor" />
            </div>
            <span className="text-xs sm:text-sm font-serif font-semibold tracking-[0.24em] text-accent uppercase select-none">
              Jornada Propósito Pleno
            </span>
          </a>
        </div>
      </header>

      <main className="flex-1 relative z-10">

        {/* 1. HERO SECTION (Com a atmosfera fluida e sem linha dura de corte) */}
        <section className="pt-26 sm:pt-32 md:pt-36 pb-14 sm:pb-22 relative isolate jornada-hero-atmosphere bg-transparent">
          
          {/* Brilhos suaves da aurora dourada e do azul celeste */}
          <div className="pointer-events-none absolute -top-20 -left-20 w-80 h-80 rounded-full bg-gold-light/25 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-azure-light/25 blur-3xl" aria-hidden="true" />

          <div className="container mx-auto px-5 sm:px-8 max-w-4xl relative z-10 text-center">
            
            {/* Emblema Central: A Cruz e o Caminho do Propósito */}
            <div className="flex flex-col items-center justify-center mb-6 sm:mb-8">
              <div className="w-11 h-13 sm:w-13 sm:h-15 text-accent mb-2.5 transition-transform duration-500 hover:scale-105">
                <JornadaSymbol size="100%" color="currentColor" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.26em] text-accent uppercase">
                Jornada Propósito Pleno
              </span>
            </div>

            {/* Headline em Tamanho Editorial Harmonioso */}
            <h1 className="text-[1.85rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif font-normal tracking-tight leading-[1.22] sm:leading-[1.18] mb-5 sm:mb-6 max-w-3xl mx-auto">
              <span className="text-accent block">
                Você não sabe seu propósito
              </span>
              <span className="text-text block mt-1.5 sm:mt-1">
                porque ainda não sabe quem você é.
              </span>
            </h1>
            
            {/* Subtítulo Arejado e Reflexivo */}
            <p className="text-base sm:text-lg font-sans text-olive font-normal leading-relaxed max-w-xl mx-auto mb-8 sm:mb-9 px-1 sm:px-0">
              Nenhuma meta, motivação ou tentativa nova resolve isso. Primeiro se reconstrói a base - depois vem a clareza.
            </p>

            {/* Botão de Navegação com acabamento editorial nas cores da marca */}
            <div className="flex items-center justify-center max-w-md mx-auto">
              <button
                onClick={scrollToNextSection}
                className="w-full sm:w-auto min-h-[44px] bg-accent hover:bg-accent-hover text-[#FDFCFA] font-sans font-medium text-xs sm:text-sm tracking-wider uppercase px-8 py-3.5 rounded-sm transition-all duration-200 inline-flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98] text-center shadow-sm hover:shadow-md hover:ring-2 hover:ring-gold/30"
              >
                <span>Explore a jornada</span>
              </button>
            </div>

          </div>
        </section>

        {/* 2. SEÇÃO LOGO ABAIXO DO HERO (Carregamento Estático Prioritário para LCP) */}
        <PorDentroSection />

        <Suspense
          fallback={
            <div className="py-14 sm:py-20 min-h-[420px] md:min-h-[420px] max-md:min-h-[700px]">
              <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
                <div className="max-w-2xl mx-auto h-16 bg-text/5 rounded-sm mb-10 sm:mb-14 animate-pulse" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-44 bg-card/60 border border-text/10 rounded-sm animate-pulse" />
                  ))}
                </div>
              </div>
            </div>
          }
        >
          <ProblemasSection />
        </Suspense>

        <Suspense
          fallback={
            <div className="py-14 sm:py-20 min-h-[850px] lg:min-h-[850px] max-lg:min-h-[1350px]">
              <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
                <div className="max-w-2xl mx-auto h-16 bg-text/5 rounded-sm mb-10 sm:mb-14 animate-pulse" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className={`h-48 bg-card/60 border border-text/10 rounded-sm animate-pulse ${i === 5 ? 'md:col-span-2 lg:col-span-2' : ''}`} />
                  ))}
                </div>
                <div className="max-w-3xl mx-auto h-40 bg-card/60 border border-text/10 rounded-sm animate-pulse" />
              </div>
            </div>
          }
        >
          <PilaresSection />
        </Suspense>

        <Suspense
          fallback={
            <div id="como-funciona" className="py-14 sm:py-20 min-h-[360px] md:min-h-[360px] max-md:min-h-[560px]">
              <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
                <div className="max-w-2xl mx-auto h-12 bg-text/5 rounded-sm mb-10 sm:mb-14 animate-pulse" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-36 bg-card/60 border border-text/10 rounded-sm animate-pulse" />
                  ))}
                </div>
              </div>
            </div>
          }
        >
          <ComoFuncionaSection />
        </Suspense>

        <Suspense
          fallback={
            <div className="py-14 sm:py-20 min-h-[500px]">
              <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
                <div className="max-w-2xl mx-auto h-16 bg-text/5 rounded-sm mb-8 sm:mb-12 animate-pulse" />
                <div className="flex gap-6 max-w-4xl mx-auto mb-8 overflow-hidden">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-[320px] h-[480px] bg-card/60 border border-text/10 rounded-sm animate-pulse shrink-0" />
                  ))}
                </div>
              </div>
            </div>
          }
        >
          <MetodoOrigemSection />
        </Suspense>

        <Suspense
          fallback={
            <div id="oferta" className="py-16 sm:py-24 min-h-[720px]">
              <div className="container mx-auto px-5 sm:px-8 max-w-2xl">
                <div className="bg-card border border-text/12 rounded-sm p-7 sm:p-12 h-[600px] animate-pulse" />
              </div>
            </div>
          }
        >
          <OfertaSection />
        </Suspense>

        <Suspense
          fallback={
            <div className="py-14 sm:py-20 min-h-[600px]">
              <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
                <div className="h-12 bg-text/5 rounded-sm mb-10 sm:mb-14 max-w-sm mx-auto animate-pulse" />
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                    <div key={i} className="h-12 border-b border-text/10 animate-pulse" />
                  ))}
                </div>
              </div>
            </div>
          }
        >
          <FaqSection />
        </Suspense>

        <Suspense
          fallback={
            <div className="py-14 sm:py-18 min-h-[180px]">
              <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
                <div className="h-14 bg-text/5 rounded-sm mb-4 max-w-xl mx-auto animate-pulse" />
                <div className="h-4 bg-text/5 rounded-sm w-36 mx-auto animate-pulse" />
              </div>
            </div>
          }
        >
          <CitacaoSection />
        </Suspense>

        <Suspense
          fallback={
            <div className="py-8 sm:py-10 bg-transparent min-h-[100px]">
              <div className="container mx-auto px-5 sm:px-8 max-w-6xl h-8 animate-pulse" />
            </div>
          }
        >
          <FooterSection />
        </Suspense>

      </main>

    </div>
  );
}
