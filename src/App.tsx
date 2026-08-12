/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Lock } from 'lucide-react';

const Reveal = ({ 
  children, 
  delay = 0, 
  className = "" 
}: { 
  children: React.ReactNode; 
  delay?: number; 
  className?: string; 
  key?: React.Key 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Target: 05 de outubro de 2026, 00:00 (Brasília UTC-3)
      const target = new Date('2026-10-05T00:00:00-03:00');
      const now = new Date();
      const diff = target.getTime() - now.getTime();

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-bg text-text selection:bg-accent/15 selection:text-text font-sans flex flex-col justify-between">
      
      {/* Navigation Header */}
      <header className="fixed top-0 w-full z-50 bg-bg/95 border-b border-border">
        <div className="container mx-auto px-6 h-16 md:h-20 flex items-center justify-between max-w-5xl">
          <div className="flex items-center gap-3">
            <div>
              <span className="text-xs md:text-sm font-serif font-semibold tracking-[0.2em] text-text block leading-none uppercase">
                Jornada Propósito Pleno
              </span>
              <span className="text-[10px] font-sans text-olive tracking-wider block mt-1">
                05 de Outubro
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="pt-32 pb-20 md:pt-44 md:pb-28">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <Reveal>
              <h1 className="text-4xl md:text-6xl font-display font-normal text-text tracking-tight mb-6 leading-[1.15]">
                Algo grande está vindo.
              </h1>
              
              <p className="text-xl md:text-2.5xl font-serif italic text-accent mb-12">
                Uma reformulação que muda tudo.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-6 text-base md:text-lg text-text/85 font-light leading-relaxed max-w-2xl mx-auto border-t border-b border-border py-8">
                <p>
                  Depois de ouvir milhares de pessoas perguntando <span className="font-serif italic font-normal text-text">"por onde eu começo?"</span>, a Jornada volta com uma estrutura que finalmente responde essa pergunta de verdade.
                </p>
                <p className="font-serif italic text-accent font-medium text-lg md:text-xl">
                  Com pilares novos que só estarão disponíveis neste momento.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 2. Seção Contagem Regressiva */}
        <section className="py-20 bg-beige-light border-y border-border">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <Reveal>
              <h2 className="text-2.5xl md:text-4xl font-display font-normal text-text mb-3">
                O relógio já está correndo
              </h2>
              
              <p className="text-text/75 text-sm md:text-base font-light max-w-lg mx-auto mb-12">
                Acompanhe o tempo exato para a abertura do novo portal da Jornada Propósito Pleno.
              </p>
            </Reveal>

            {/* Countdown Grid */}
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 max-w-2xl mx-auto mb-12">
                {[
                  { label: 'Dias', value: timeLeft.days },
                  { label: 'Horas', value: timeLeft.hours },
                  { label: 'Minutos', value: timeLeft.minutes },
                  { label: 'Segundos', value: timeLeft.seconds },
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    className="bg-bg border border-border p-6 rounded-lg text-center"
                  >
                    <span className="block text-3xl md:text-4xl font-serif font-medium text-accent mb-1">
                      {String(item.value).padStart(2, '0')}
                    </span>
                    <span className="text-[11px] font-sans font-medium tracking-widest text-text/60 uppercase">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-lg md:text-xl font-serif italic text-text">
                A partir de <span className="text-accent font-semibold not-italic">05 de outubro</span>, tudo muda.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 3. Seção O Que Você Vai Encontrar */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <Reveal>
                <h2 className="text-3xl md:text-4.5xl font-display font-normal text-text mb-4">
                  Uma estrutura ainda mais completa
                </h2>
                <p className="text-text/75 text-base md:text-lg font-light">
                  Desenvolvida para resolver os problemas reais que você enfrenta no dia a dia:
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  num: 'PILAR 01',
                  quote: 'Como sair da prisão mental que foi instalada desde pequeno',
                  tag: 'Renovação'
                },
                {
                  num: 'PILAR 02',
                  quote: 'Como transformar ansiedade em clareza',
                  tag: 'Paz Interna'
                },
                {
                  num: 'PILAR 03',
                  quote: 'Como alinhar trabalho e rotina com propósito real',
                  tag: 'Vocação & Trabalho'
                },
                {
                  num: 'PILAR 04',
                  quote: 'Como ter relacionamentos verdadeiros (não superficiais)',
                  tag: 'Conexão Profunda'
                },
                {
                  num: 'PILAR 05',
                  quote: 'Como deixar um legado que importa',
                  tag: 'Visão Eterna'
                },
                {
                  num: 'E mais pilares inéditos',
                  quote: 'que ainda não estão no ar e serão revelados exclusivamente no lançamento',
                  locked: true
                }
              ].map((item, idx) => (
                <Reveal key={idx} delay={idx * 0.05}>
                  <div 
                    className={`h-full p-8 rounded-xl border flex flex-col justify-between transition-colors ${
                      item.locked 
                        ? 'bg-[#F2EAE0] border-accent/30 text-text' 
                        : 'bg-card border-border hover:border-text/20'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className={`text-[11px] font-sans font-semibold tracking-wider uppercase ${
                          item.locked ? 'text-accent' : 'text-olive'
                        }`}>
                          {item.num}
                        </span>

                        {item.locked && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-sans text-accent">
                            <Lock size={12} />
                            <span>Bloqueado</span>
                          </span>
                        )}
                      </div>

                      <p className="text-base md:text-lg font-serif italic text-text leading-relaxed mb-8">
                        {item.locked ? item.quote : `"${item.quote}"`}
                      </p>
                    </div>

                    {item.tag && (
                      <div className="pt-4 border-t border-border/60 text-[11px] font-sans font-medium tracking-widest text-text/60 uppercase">
                        {item.tag}
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Seção CTA de Agenda */}
        <section id="cta" className="py-20 md:py-28 bg-beige-light border-y border-border">
          <div className="container mx-auto px-6 max-w-xl text-center space-y-8">
            <Reveal>
              <span className="text-xs font-sans font-semibold tracking-[0.2em] text-accent uppercase block mb-3">
                Anote em sua agenda
              </span>

              <h2 className="text-3xl md:text-4xl font-display font-normal text-text mb-4">
                Volte em 05 de outubro
              </h2>

              <p className="text-text/80 text-base md:text-lg font-light leading-relaxed">
                As portas para o novo portal oficial serão abertas para todos nesta data.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 5. Seção de Fechamento */}
        <section className="py-24 md:py-32 text-center">
          <div className="container mx-auto px-6 max-w-2xl">
            <Reveal>
              <blockquote className="text-2xl md:text-3.5xl font-display font-normal text-text leading-snug italic mb-8">
                "A Jornada não é pra todo mundo. Mas se você sente que nasceu pra algo maior... essa é a hora."
              </blockquote>

              <div className="space-y-1">
                <span className="text-base font-serif font-semibold text-text block">
                  Guilherme Koichi
                </span>
                <span className="text-xs font-sans text-olive tracking-wider block">
                  Jornada Propósito Pleno
                </span>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="py-10 border-t border-border bg-beige-light">
        <div className="container mx-auto px-6 max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <span className="text-xs font-serif font-semibold tracking-widest text-text uppercase block">
              Jornada Propósito Pleno
            </span>
            <span className="text-[11px] font-sans text-text/60 block mt-0.5">
              Acompanhamento e clareza para a sua caminhada.
            </span>
          </div>

          <p className="text-[11px] font-sans text-text/50">
            &copy; 2026 Jornada Propósito Pleno • Todos os direitos reservados
          </p>
        </div>
      </footer>

    </div>
  );
}
