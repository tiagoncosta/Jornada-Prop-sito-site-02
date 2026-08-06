/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Clock, 
  Sun, 
  Lock, 
  Compass,
  Calendar
} from 'lucide-react';

const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string; key?: React.Key }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
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
      const now = new Date();
      let year = now.getFullYear();
      let target = new Date(year, 8, 5, 0, 0, 0); // September 5th (Month index 8 = September)
      
      if (now.getTime() > target.getTime()) {
        target = new Date(year + 1, 8, 5, 0, 0, 0);
      }

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
    <div className="min-h-screen bg-bg text-text selection:bg-accent/15 selection:text-text relative font-sans">
      
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-bg/90 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 h-16 md:h-20 flex items-center justify-between max-w-5xl">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
              <Sun size={13} />
            </div>
          </div>
        </div>
      </header>

      {/* 1. Hero / Mistério */}
      <section className="relative pt-36 pb-16 md:pt-48 md:pb-24">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          

          <Reveal>
            <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 leading-[1.12] text-text">
              Algo grande está vindo.
            </h1>

            <p className="text-xl md:text-2.5xl font-serif italic text-accent/90 mb-10">
              Uma reformulação que muda tudo.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="bg-[#FCFAF7] border border-border p-8 md:p-10 rounded-2xl max-w-2xl mx-auto text-left md:text-center space-y-4">
              <p className="text-base md:text-lg text-text/85 font-light leading-relaxed font-sans">
                Depois de ouvir milhares de pessoas perguntando <span className="font-serif italic text-text font-medium">"por onde eu começo?"</span>, a Jornada volta com uma estrutura que finalmente responde essa pergunta de verdade.
              </p>
              
              <div className="pt-4 border-t border-border/70 text-sm font-serif italic text-accent font-medium">
                Com 3 pilares novos que só estarão disponíveis neste momento.
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* 2. Countdown Section (Visual Principal) */}
      <section id="countdown" className="py-16 md:py-24 bg-beige-light border-y border-border">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-olive mb-3">
              <Clock size={14} className="text-accent" />
              <span>Contagem Regressiva</span>
            </div>

            <h2 className="text-2.5xl md:text-4xl font-serif font-medium text-text mb-3">
              O relógio já está correndo
            </h2>
            <p className="text-text/70 text-sm md:text-base font-light max-w-lg mx-auto mb-10">
              Acompanhe o tempo exato para a abertura do novo portal da Jornada Propósito Pleno.
            </p>
          </Reveal>

          {/* Countdown Grid */}
          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2.5xl mx-auto mb-10">
              {[
                { label: 'Dias', value: timeLeft.days },
                { label: 'Horas', value: timeLeft.hours },
                { label: 'Minutos', value: timeLeft.minutes },
                { label: 'Segundos', value: timeLeft.seconds },
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-bg border border-border rounded-2xl p-6 flex flex-col items-center justify-center"
                >
                  <div className="text-4xl md:text-5xl font-serif font-semibold text-accent mb-1 tracking-tight">
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-text/60">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="text-base md:text-lg font-serif text-text">
              A partir de <span className="text-accent font-semibold">05 de setembro</span>, tudo muda.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. Tease dos Pilares */}
      <section className="py-20 md:py-32 bg-bg">
        <div className="container mx-auto px-6 max-w-5xl">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
                O Que Você Vai Encontrar
              </p>
              <h2 className="text-3xl md:text-4.5xl font-serif font-medium text-text mb-4">
                8 pilares estruturados
              </h2>
              <p className="text-text/75 text-base font-light leading-relaxed">
                Desenvolvidos para resolver os problemas reais que você enfrenta no dia a dia:
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                text: "Como sair da prisão mental que foi instalada desde pequeno",
                tag: "Renovação"
              },
              {
                num: "02",
                text: "Como transformar ansiedade em clareza",
                tag: "Paz Interna"
              },
              {
                num: "03",
                text: "Como alinhar trabalho e rotina com propósito real",
                tag: "Vocação & Trabalho"
              },
              {
                num: "04",
                text: "Como ter relacionamentos verdadeiros (não superficiais)",
                tag: "Conexão Profunda"
              },
              {
                num: "05",
                text: "Como deixar um legado que importa",
                tag: "Visão Eterna"
              },
              {
                num: "06, 07 e 08",
                text: "E 3 pilares novos que ainda não estão no ar e serão revelados exclusivamente no lançamento",
                tag: "Inédito & Secreto",
                highlight: true
              }
            ].map((card, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div 
                  className={`p-7 rounded-2xl border h-full flex flex-col justify-between ${
                    card.highlight 
                      ? 'bg-[#F3ECE2] border-accent/40' 
                      : 'bg-[#FCFAF7] border-border'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className={`text-[11px] font-semibold tracking-wider px-3 py-1 rounded-full border ${
                        card.highlight 
                          ? 'bg-accent/10 border-accent/20 text-accent' 
                          : 'bg-olive/10 border-olive/15 text-olive'
                      }`}>
                        PILAR {card.num}
                      </span>
                      {card.highlight && (
                        <Lock size={14} className="text-accent" />
                      )}
                    </div>

                    <p className={`text-base font-serif font-medium leading-relaxed mb-6 ${
                      card.highlight ? 'text-accent' : 'text-text'
                    }`}>
                      "{card.text}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border/60 text-[10px] font-semibold uppercase tracking-widest text-text/60">
                    {card.tag}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Volte em 05 de Setembro (Lembrete do Lançamento) */}
      <section className="py-20 md:py-28 bg-bg">
        <div className="container mx-auto px-6 max-w-2xl">
          <Reveal>
            <div className="bg-[#FCFAF7] border border-border rounded-3xl p-8 md:p-12 text-center space-y-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto text-accent">
                <Calendar size={18} />
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Anote em sua agenda
              </p>

              <h2 className="text-3xl md:text-4xl font-serif font-medium text-text">
                Volte em 05 de setembro
              </h2>

              <p className="text-text/75 text-sm md:text-base font-light leading-relaxed max-w-md mx-auto">
                As portas para o novo portal oficial serão abertas para todos nesta data.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. Frase de Fechamento */}
      <section className="py-20 md:py-28 bg-beige-light border-t border-border text-center">
        <div className="container mx-auto px-6 max-w-2.5xl">
          <Reveal>
            <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-6 text-accent">
              <Compass size={20} />
            </div>

            <p className="text-xl md:text-3xl font-serif font-medium text-text leading-relaxed italic mb-8">
              "A Jornada não é pra todo mundo. Mas se você sente que nasceu pra algo maior... essa é a hora."
            </p>

            <div className="space-y-0.5">
              <span className="text-sm font-serif font-semibold text-text block">
                Guilherme Koichi
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-widest text-olive font-sans block">
                Jornada Propósito Pleno
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-border bg-[#F5EFE6]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <span className="text-sm font-serif font-semibold tracking-wider text-text block">
                JORNADA PROPÓSITO PLENO
              </span>
              <span className="text-[10px] text-text/60 font-sans">
                Acompanhamento e clareza para a sua caminhada.
              </span>
            </div>

            <div className="text-[10px] font-semibold uppercase tracking-widest text-text/50 text-center md:text-right">
              &copy; {new Date().getFullYear()} Jornada Propósito Pleno • Todos os direitos reservados
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
