/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Clock, 
  ArrowRight, 
  ShieldCheck, 
  Sun, 
  Lock, 
  Mail, 
  CheckCircle2, 
  Bell, 
  Compass
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

  const [email, setEmail] = useState('');
  const [wantsWhatsapp, setWantsWhatsapp] = useState(false);
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      let year = now.getFullYear();
      let target = new Date(year, 7, 20, 0, 0, 0); // August 20th
      
      if (now.getTime() > target.getTime()) {
        target = new Date(year + 1, 7, 20, 0, 0, 0);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-bg text-text selection:bg-accent/15 selection:text-text relative font-sans">
      
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-bg/90 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 h-16 md:h-20 flex items-center justify-between max-w-5xl">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
              <Sun size={13} />
            </div>
            <div>
              <span className="text-base md:text-lg font-serif font-semibold tracking-[0.2em] text-text block leading-none">
                JORNADA
              </span>
              <span className="text-[9px] font-sans font-medium tracking-widest text-olive uppercase block mt-1">
                Guilherme Koichi
              </span>
            </div>
          </div>
          
          <a 
            href="#vip" 
            className="bg-accent hover:bg-accent-light text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-colors inline-flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <Bell size={13} className="shrink-0" />
            <span>Acesso Antecipado</span>
          </a>
        </div>
      </header>

      {/* 1. Hero */}
      <section className="relative pt-36 pb-16 md:pt-48 md:pb-24">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          
          <Reveal>
            <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-6">
              Relançamento Oficial • 20 de Agosto
            </p>
            
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

      {/* 2. Countdown Section */}
      <section className="py-16 md:py-24 bg-beige-light border-y border-border">
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
                  className="bg-bg border border-border rounded-2xl p-5 md:p-6 flex flex-col items-center justify-center"
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-accent mb-1 tracking-tight">
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.18em] text-text/60">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="text-base md:text-lg font-serif text-text">
              A partir de <span className="text-accent font-semibold">20 de agosto</span>, tudo muda.
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

      {/* 4. Depoimento Sugestivo */}
      <section className="py-16 md:py-24 bg-beige-light border-y border-border">
        <div className="container mx-auto px-6 max-w-2.5xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-olive mb-6">
              Experiência Real
            </p>

            <div className="bg-bg border border-border p-8 md:p-12 rounded-2xl text-center">
              <p className="text-lg md:text-2xl font-serif italic text-text leading-relaxed mb-6">
                "Eu já tentei tudo sozinho. Nunca funcionou até ter um mapa real pra seguir."
              </p>
              
              <div className="pt-4 border-t border-border/60 inline-block">
                <span className="text-sm font-serif font-semibold text-text block">Marcos V., 34 anos</span>
                <span className="text-[10px] uppercase font-semibold tracking-widest text-olive font-sans">Participante da Jornada</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. Captura de Interesse / Lista VIP */}
      <section id="vip" className="py-20 md:py-32 bg-bg">
        <div className="container mx-auto px-6 max-w-2xl">
          <Reveal>
            <div className="bg-[#FCFAF7] border border-border rounded-3xl p-8 md:p-12 text-center">
              
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
                Lista VIP de Relançamento
              </p>

              <h2 className="text-3xl md:text-4xl font-serif font-medium text-text mb-4">
                Receba acesso 24h antes do lançamento oficial
              </h2>

              <p className="text-text/75 text-sm md:text-base font-light leading-relaxed max-w-md mx-auto mb-8">
                Inscreva-se para receber o aviso em primeira mão no seu e-mail e garantir prioridade para os 3 novos pilares.
              </p>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    onSubmit={handleSubmit}
                    className="space-y-4 max-w-md mx-auto text-left"
                  >
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-text/70 mb-2">
                        Seu melhor e-mail:
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-olive/60">
                          <Mail size={16} />
                        </div>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="seu e-mail aqui..."
                          className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white border border-border text-text placeholder:text-text/40 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                        />
                      </div>
                    </div>

                    <div className="bg-bg p-4 rounded-xl border border-border space-y-3">
                      <label className="flex items-center gap-3 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={wantsWhatsapp}
                          onChange={(e) => setWantsWhatsapp(e.target.checked)}
                          className="w-4 h-4 rounded border-border text-accent focus:ring-accent accent-accent cursor-pointer"
                        />
                        <span className="text-xs text-text/80 font-medium">
                          Quero receber também um lembrete no WhatsApp (opcional)
                        </span>
                      </label>

                      {wantsWhatsapp && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="(11) 99999-9999"
                            className="w-full px-4 py-2.5 rounded-lg bg-white border border-border text-text placeholder:text-text/40 text-xs focus:outline-none focus:border-accent transition-colors"
                          />
                        </motion.div>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-xl text-xs md:text-sm font-semibold uppercase tracking-wider transition-colors w-full flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {loading ? (
                        <span>Cadastrando...</span>
                      ) : (
                        <>
                          <span>Quero Entrar Primeiro</span>
                          <ArrowRight size={15} />
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-center text-text/50 flex items-center justify-center gap-1.5 pt-2">
                      <ShieldCheck size={13} className="text-olive" />
                      Seus dados estão seguros. Apenas avisos do lançamento.
                    </p>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white border border-accent/30 p-8 rounded-2xl max-w-md mx-auto text-center space-y-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mx-auto text-accent">
                      <CheckCircle2 size={22} />
                    </div>
                    
                    <h3 className="text-xl font-serif font-semibold text-text">
                      Inscrição Confirmada
                    </h3>

                    <p className="text-xs md:text-sm text-text/80 leading-relaxed font-light">
                      Você receberá o acesso exclusivo em <span className="font-semibold text-accent">{email}</span> 24h antes do lançamento em 20 de Agosto.
                    </p>

                    <button 
                      onClick={() => { setSubmitted(false); setEmail(''); }}
                      className="text-[11px] font-semibold uppercase tracking-wider text-olive hover:text-accent transition-colors pt-2 underline cursor-pointer"
                    >
                      Cadastrar outro e-mail
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

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
