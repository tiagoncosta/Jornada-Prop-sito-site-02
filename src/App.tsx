/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from 'react';

// Code splitting: Seções abaixo da dobra carregadas assincronamente com React.lazy
const CountdownSection = React.lazy(() => import('./components/CountdownSection'));
const PorDentroSection = React.lazy(() => import('./components/PorDentroSection'));
const ProblemasSection = React.lazy(() => import('./components/ProblemasSection'));
const PilaresSection = React.lazy(() => import('./components/PilaresSection'));
const ComoFuncionaSection = React.lazy(() => import('./components/ComoFuncionaSection'));
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
      
      {/* Elemento de Linhas Tracejadas em Toda a Extensão da Página para Contraste e Estrutura Arquitetural */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none" aria-hidden="true">
        {/* Colunas verticais arquiteturais com linhas tracejadas */}
        <div className="h-full max-w-6xl mx-auto px-5 sm:px-8 flex justify-between">
          <div className="w-full h-full border-x border-dashed border-text/20 flex justify-between">
            <div className="hidden md:block h-full border-r border-dashed border-text/10 w-1/3" />
            <div className="h-full border-r border-dashed border-accent/20 w-1/2 md:w-1/3" />
          </div>
        </div>

        {/* Padrão contínuo de trajetórias tracejadas e nós da jornada em toda a extensão da página */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.26] text-accent" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="jornada-dashed-path" width="1440" height="960" patternUnits="userSpaceOnUse">
              {/* Linha mestra vertical tracejada central */}
              <line x1="720" y1="0" x2="720" y2="960" stroke="currentColor" strokeWidth="1" strokeDasharray="6 8" strokeOpacity="0.45" />
              
              {/* Trajetória orgânica principal em curva tracejada */}
              <path 
                d="M-40,160 C280,260 480,60 720,240 C960,420 1160,180 1480,340" 
                stroke="currentColor" 
                strokeWidth="1.75" 
                strokeDasharray="6 8" 
                fill="none"
              />
              {/* Trajetória de retorno/convergência tracejada */}
              <path 
                d="M-40,640 C340,520 560,780 720,620 C940,460 1200,700 1480,590" 
                stroke="currentColor" 
                strokeWidth="1.25" 
                strokeDasharray="4 6" 
                fill="none"
              />
              {/* Conexão transversal diagonal pontilhada */}
              <path 
                d="M720,240 C760,400 780,480 720,620" 
                stroke="currentColor" 
                strokeWidth="1" 
                strokeDasharray="3 5" 
                strokeOpacity="0.5" 
                fill="none"
              />
              {/* Marcos e nós de chegada nos cruzamentos */}
              <circle cx="720" cy="240" r="4.5" fill="currentColor" />
              <circle cx="720" cy="620" r="4.5" fill="currentColor" />
              <circle cx="280" cy="260" r="3.5" fill="currentColor" />
              <circle cx="1160" cy="180" r="3.5" fill="currentColor" />
              <circle cx="340" cy="520" r="3.5" fill="currentColor" />
              <circle cx="1200" cy="700" r="3.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#jornada-dashed-path)" />
        </svg>
      </div>

      {/* 0. HEADER EDITORIAL MINIMALISTA (Carregamento Imediato no Bundle Principal) */}
      <header className="fixed top-0 w-full z-50 bg-bg/95 backdrop-blur-md border-b border-text/8 transition-all">
        <div className="container mx-auto px-5 sm:px-8 h-16 sm:h-18 flex items-center justify-between max-w-6xl">
          {/* Logomarca Editorial com Letras Espaçadas */}
          <div className="flex items-center gap-3">
            <span className="text-xs sm:text-sm font-serif font-semibold tracking-[0.22em] text-text uppercase select-none">
              Jornada Propósito Pleno
            </span>
          </div>
        </div>
      </header>

      <main className="flex-1 relative z-10">

        {/* 1. HERO SECTION (Carregamento Imediato sem Lazy / Renderização Direta para LCP Instantâneo) */}
        <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 relative overflow-hidden isolate border-b border-text/8">

          <div className="container mx-auto px-5 sm:px-8 max-w-4xl relative z-10 text-center">
            
            {/* Headline em Tamanho Editorial Harmonioso - Renderização Direta sem Atraso de Animação */}
            <h1 className="text-[1.85rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif font-normal tracking-tight leading-[1.22] sm:leading-[1.18] mb-5 sm:mb-6 max-w-3xl mx-auto">
              <span className="text-accent block">
                Sua vida não vai mudar sozinha.
              </span>
              <span className="text-text block mt-1.5 sm:mt-1">
                Mas ela também não precisa mudar tudo de uma vez.
              </span>
            </h1>
            
            {/* Subtítulo Arejado e Reflexivo */}
            <p className="text-base sm:text-lg font-sans text-olive font-normal leading-relaxed max-w-xl mx-auto mb-8 sm:mb-9 px-1 sm:px-0">
              Não é falta de vontade. É nunca ter tido um caminho claro pra seguir. Esse é o caminho.
            </p>

            {/* Botão de Navegação */}
            <div className="flex items-center justify-center max-w-md mx-auto">
              <button
                onClick={scrollToNextSection}
                className="w-full sm:w-auto border border-text/30 hover:border-text text-text hover:bg-text/5 bg-transparent font-sans font-medium text-xs sm:text-sm tracking-wider uppercase px-7 py-3.5 rounded-sm transition-all duration-200 inline-flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98] text-center"
              >
                <span>Explore a jornada</span>
              </button>
            </div>

          </div>
        </section>

        {/* 2 a 9. SEÇÕES ABAIXO DA DOBRA (Code Splitting com Fallbacks Individuais para Zero CLS) */}
        <Suspense
          fallback={
            <div id="proxima-secao" className="py-10 sm:py-14 bg-bg-alt/60 border-b border-text/8 min-h-[340px] sm:min-h-[360px] flex items-center justify-center">
              <div className="container mx-auto px-5 sm:px-8 max-w-3xl w-full">
                <div className="bg-card border border-text/10 rounded-sm p-6 sm:p-8 md:p-9 h-[230px] sm:h-[220px] shadow-xs animate-pulse" />
              </div>
            </div>
          }
        >
          <CountdownSection />
        </Suspense>

        <Suspense
          fallback={
            <div className="py-14 sm:py-20 bg-bg/85 border-b border-text/8 min-h-[580px] lg:min-h-[580px] max-lg:min-h-[1450px]">
              <div className="container mx-auto px-5 sm:px-8 max-w-6xl">
                <div className="max-w-2xl mx-auto h-20 bg-text/5 rounded-sm mb-10 sm:mb-14 animate-pulse" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-80 bg-card/60 border border-text/10 rounded-sm animate-pulse" />
                  ))}
                </div>
              </div>
            </div>
          }
        >
          <PorDentroSection />
        </Suspense>

        <Suspense
          fallback={
            <div className="py-14 sm:py-20 bg-bg-alt/40 border-b border-text/8 min-h-[420px] md:min-h-[420px] max-md:min-h-[700px]">
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
            <div className="py-14 sm:py-20 bg-bg/85 border-b border-text/8 min-h-[850px] lg:min-h-[850px] max-lg:min-h-[1350px]">
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
            <div id="como-funciona" className="py-14 sm:py-20 bg-bg-alt/50 border-b border-text/8 min-h-[360px] md:min-h-[360px] max-md:min-h-[560px]">
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
            <div className="py-14 sm:py-20 bg-bg/85 border-b border-text/8 min-h-[600px]">
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
            <div id="oferta" className="py-16 sm:py-24 bg-bg-alt/40 border-b border-text/8 min-h-[720px]">
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
            <div className="py-14 sm:py-18 bg-bg/85 border-b border-text/8 min-h-[180px]">
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
            <div className="py-8 sm:py-10 bg-bg-alt/30 min-h-[100px]">
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
