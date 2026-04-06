/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Sparkles, ArrowRight, BookOpen, Users, Video } from 'lucide-react';

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number; key?: React.Key }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text selection:bg-accent selection:text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-bg/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-display font-bold tracking-tighter">JORNADA</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest">
            <a href="#sobre" className="hover:opacity-50 transition-opacity">O Programa</a>
            <a href="#pilares" className="hover:opacity-50 transition-opacity">Os Pilares</a>
            <a href="#entrega" className="hover:opacity-50 transition-opacity">O que você recebe</a>
            <a href="#oferta" className="bg-accent text-white px-5 py-2 rounded-full hover:opacity-90 transition-all">Garantir Jornada</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="container mx-auto px-6 text-center max-w-5xl">
          <Reveal>
            <span className="inline-block py-1 px-3 rounded-full bg-muted text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
              Programa de Devocionais • 14 Semanas
            </span>
            <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 leading-[0.95] tracking-tighter">
              Transforme seu lar em um <span className="opacity-40 italic">refúgio sagrado</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-text/60 font-medium leading-relaxed">
              Um programa desenhado para alinhar cada aspecto da sua vida ao chamado divino. Deixe o "fazer" ser reflexo do "ser" em Cristo.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#oferta" className="w-full sm:w-auto bg-accent text-white px-12 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-2xl shadow-accent/10">
                Garantir Minha Jornada
                <ArrowRight size={16} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-32 border-y border-border bg-beige-light">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <div className="pt-8">
              <Reveal delay={0.2}>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 tracking-tight">
                  Alinhamento e <br />Propósito Pleno
                </h2>
                <p className="text-lg text-text/60 leading-relaxed mb-12">
                  Através de princípios bíblicos e ferramentas práticas, você aprenderá a edificar um lar de paz, fortalecer relacionamentos e construir um legado de fé e saúde duradouro.
                </p>
                <div className="space-y-6 flex flex-col items-center">
                  {[
                    "Princípios Bíblicos Aplicados",
                    "Ferramentas de Gestão do Lar",
                    "Legado de Fé e Saúde"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-sm font-semibold">
                      <div className="w-6 h-6 rounded-full bg-accent/5 flex items-center justify-center">
                        <CheckCircle2 size={14} className="text-accent" />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

      {/* Pillars Section */}
      <section id="pilares" className="py-32">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-24">
            <Reveal>
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">Os 5 Pilares</h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { weeks: "1 - 2", title: "Fundamentos" },
              { weeks: "3 - 4", title: "Mente & Espírito" },
              { weeks: "5 - 6", title: "Corpo & Alma" },
              { weeks: "7 - 12", title: "Relacionamentos" },
              { weeks: "13 - 14", title: "Vocação & Legado" }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group p-8 rounded-3xl border border-border hover:border-accent transition-colors h-full flex flex-col justify-between aspect-square">
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">{item.weeks}</span>
                  <h3 className="text-xl font-display font-bold leading-none">{item.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What you receive Section */}
      <section id="entrega" className="py-32 bg-olive/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-24">
            <Reveal>
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">O que você recebe</h2>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Video size={24} />,
                title: "14 Módulos",
                desc: "Video aulas profundas divididas em módulos estratégicos para cada pilar da sua jornada."
              },
              {
                icon: <BookOpen size={24} />,
                title: "70 Devocionais",
                desc: "Cinco devocionais por módulo + E-book complementar exclusivo para aprofundamento diário."
              },
              {
                icon: <Users size={24} />,
                title: "Comunidade",
                desc: "Grupo exclusivo com serviço de suporte, conteúdos inéditos."
              }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.2}>
                <div className="bg-bg p-12 rounded-[2rem] h-full border border-border">
                  <div className="mb-8 text-accent opacity-40">
                    {item.icon}
                  </div>
                  <h4 className="text-2xl font-display font-bold mb-4">{item.title}</h4>
                  <p className="text-text/50 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="oferta" className="py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <Reveal>
            <div className="bg-accent text-white rounded-[2.5rem] p-10 md:p-16 text-center shadow-2xl shadow-accent/20">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 inline-block opacity-60">Oferta de Lançamento</span>
              
              <div className="mb-8">
                <p className="opacity-40 line-through text-base mb-2">De R$ 1.000,00 por</p>
                <h2 className="text-xl md:text-2xl font-display font-medium mb-3 opacity-80">Invista hoje apenas</h2>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-lg opacity-40">12x de</span>
                  <span className="text-6xl md:text-7xl font-display font-bold tracking-tighter">50,50</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
                {[
                  "Acesso Imediato",
                  "Todos os 5 Pilares",
                  "7 Dias de Garantia"
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 py-3 rounded-xl text-[9px] font-bold uppercase tracking-widest">
                    {item}
                  </div>
                ))}
              </div>

              <a 
                href="https://pay.hub.la/RBS2l0kJ8JIuPjA14Nr5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-accent px-12 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-muted transition-all w-full md:w-auto inline-block text-center"
              >
                Garantir Minha Jornada
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 border-t border-border">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left">
              <span className="text-lg font-display font-bold tracking-tighter mb-4 block">JORNADA</span>
              <p className="text-sm text-text/40 max-w-xs leading-relaxed">
                Edificando lares de paz e legados de fé através de princípios bíblicos.
              </p>
            </div>
            <div className="text-xs font-bold uppercase tracking-widest opacity-40">
              &copy; {new Date().getFullYear()} Jornada Propósito Pleno
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
