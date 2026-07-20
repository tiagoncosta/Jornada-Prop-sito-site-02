/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  Users, 
  Video, 
  ChevronDown, 
  Star, 
  ShieldCheck, 
  Zap,
  Compass,
  Heart,
  Sun,
  Feather,
  Check
} from 'lucide-react';

const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string; key?: React.Key }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Accordion = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-border transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 md:py-6 flex items-center justify-between text-left hover:text-accent transition-colors group cursor-pointer"
      >
        <span className="text-base md:text-lg font-display font-medium text-text group-hover:text-accent transition-colors">{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-olive/60 group-hover:text-accent shrink-0 ml-4"
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-sm md:text-base text-text/75 leading-relaxed font-light">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text selection:bg-accent/20 selection:text-text relative overflow-x-hidden">
      
      {/* Soft decorative morning sun rays (ambient glowing backdrops) */}
      <div className="absolute top-0 left-1/3 w-[35rem] h-[35rem] bg-gold/5 rounded-full blur-[160px] -z-20 pointer-events-none" />
      <div className="absolute top-[25%] right-0 w-[45rem] h-[45rem] bg-accent/4 rounded-full blur-[200px] -z-20 pointer-events-none" />
      <div className="absolute bottom-[20%] left-0 w-[35rem] h-[35rem] bg-olive/4 rounded-full blur-[150px] -z-20 pointer-events-none" />

      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-bg/80 backdrop-blur-md border-b border-border/50 transition-all duration-300">
        <div className="container mx-auto px-6 h-16 md:h-20 flex items-center justify-between max-w-5xl">
          <div className="flex items-center gap-3 group">
            <div className="w-5 h-5 rounded-full bg-accent/10 border border-accent/25 flex items-center justify-center">
              <Sun size={10} className="text-accent animate-spin-slow" />
            </div>
            <span className="text-base md:text-lg font-serif font-semibold tracking-[0.25em] text-text">
              JORNADA
            </span>
          </div>
          
          <div>
            <a 
              href="#oferta" 
              className="bg-accent hover:bg-accent-light text-white px-5 md:px-6 py-2 md:py-2.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-350 shadow-sm shadow-accent/10 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap cursor-pointer"
            >
              Começar Agora
            </a>
          </div>
        </div>
      </header>

      {/* 1. Headline de Dor / Hero */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-6 text-center max-w-4xl relative">
          <Reveal>
            <h1 className="text-4xl md:text-6.5xl lg:text-7.5xl font-serif font-medium mb-8 leading-[1.12] tracking-tight text-text">
              Você tá cansado de viver correndo e não saber pra onde.
            </h1>
          </Reveal>
          
          <Reveal delay={0.25}>
            <p className="text-base md:text-xl max-w-2.5xl mx-auto text-text/80 font-serif leading-relaxed italic">
              "Acorda, trabalha, resolve os problemas dos outros, apaga incêndio. Chega a noite e sobra só um vazio: 'isso é tudo que minha vida vai ser?' Você sabe que nasceu pra mais - só não sabe mais por onde começar."
            </p>
          </Reveal>
          
          <Reveal delay={0.4} className="mt-12">
            <div className="flex justify-center gap-2 items-center text-olive/60">
              <span className="w-1.5 h-1.5 rounded-full bg-olive/40" />
              <Feather size={14} className="animate-bounce" />
              <span className="w-1.5 h-1.5 rounded-full bg-olive/40" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Agitação (Pain Points) */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-beige-light">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12 md:mb-16">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-text tracking-tight leading-tight">
                Honestamente, você se identifica com isso?
              </h2>
              <p className="text-olive/70 text-xs md:text-sm mt-3 uppercase tracking-[0.18em] font-medium font-sans">Abra o seu coração e reflita</p>
            </Reveal>
          </div>

          <div className="grid gap-4 md:gap-5">
            {[
              "Você sente que tem um propósito, mas não sabe qual é o primeiro passo real",
              "A ansiedade fala mais alto que sua fé, quase todo dia",
              "Trabalho e rotina viraram só obrigação, sem sentido nenhum",
              "A vida tá passando rápido demais e você não tá vivendo, só sobrevivendo"
            ].map((point, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group p-6 rounded-2xl border border-border bg-[#FCFAF7] hover:border-accent/30 hover:bg-white transition-all duration-300 flex items-center gap-5 shadow-sm">
                  <div className="w-9 h-9 rounded-full bg-accent/5 flex items-center justify-center shrink-0 border border-accent/10 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                    <Heart size={14} className="text-accent group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-sm md:text-base font-light text-text/90 group-hover:text-text transition-colors leading-relaxed">
                    {point}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Apresentação da Solução */}
      <section className="py-20 md:py-32 bg-[#FCFAF7] border-y border-border relative">
        <div className="container mx-auto px-6 max-w-5xl text-center relative">
          <Reveal>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-accent mb-4 block">
              O caminho prático para organizar a sua mente
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-text tracking-tight mb-8">
              A Jornada para um <span className="text-olive italic font-normal">Propósito Pleno</span>
            </h2>
            <p className="text-base md:text-lg text-text/80 max-w-3xl mx-auto mb-16 leading-relaxed font-light">
              Não se trata de colocar mais peso nas suas costas ou encher a sua rotina com tarefas chatas. É um método direto para organizar o seu dia a dia e alinhar suas obrigações com o que realmente importa.
            </p>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-left max-w-4xl mx-auto">
              <div className="bg-bg p-8 rounded-3xl border border-border hover:border-accent/20 transition-all duration-300 relative group shadow-sm">
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-accent/20" />
                <span className="text-xs font-sans text-accent tracking-widest block mb-1.5 font-bold">PROCESSO I</span>
                <h3 className="text-xl font-serif font-medium text-text mb-3">Clareza no Caminhar</h3>
                <p className="text-sm text-text/80 leading-relaxed font-light">
                  Mapeie os seus talentos de maneira autêntica e compreenda como aplicá-los com equilíbrio na família, no seu trabalho e na caminhada pessoal, longe da sobrecarga.
                </p>
              </div>
              
              <div className="bg-bg p-8 rounded-3xl border border-border hover:border-accent/20 transition-all duration-300 relative group shadow-sm">
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-accent/20" />
                <span className="text-xs font-sans text-accent tracking-widest block mb-1.5 font-bold">PROCESSO II</span>
                <h3 className="text-xl font-serif font-medium text-text mb-3">Sustento e Intimidade</h3>
                <p className="text-sm text-text/80 leading-relaxed font-light">
                  Aprenda a ouvir o silêncio divino e a discernir as decisões fundamentais da sua vida em meio aos barulhos e exigências urgentes da sociedade moderna.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. O que você vai encontrar */}
      <section id="entrega" className="py-20 md:py-32 bg-bg relative">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16 md:mb-24">
            <Reveal>
              <span className="text-[10px] md:text-sm text-accent tracking-[0.2em] font-semibold uppercase block mb-3">CONFORTO DIÁRIO</span>
              <h2 className="text-3.5xl md:text-5xl font-serif font-medium text-text tracking-tight">
                O que você vai receber na Jornada
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: <Video size={20} />,
                title: "14 Módulos Estratégicos",
                desc: "Aulas curtas e diretas ao ponto, com fundamentação sólida e aplicação prática para mudar seus hábitos."
              },
              {
                icon: <BookOpen size={20} />,
                title: "70 Devocionais de Apoio",
                desc: "Um roteiro prático para acompanhar o seu dia com direção clara e sem enrolação."
              },
              {
                icon: <Sparkles size={20} />,
                title: "Plataforma completa",
                desc: "Acesso aos 70 devocionais em vídeo, cada um com ebook complementar, no seu tempo - sem precisar de mais nada."
              }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.15}>
                <div className="bg-[#FAF6F0] p-8 md:p-10 rounded-[2rem] h-full border border-border hover:border-accent/15 hover:bg-[#F3ECE2] transition-all duration-350 group shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-11 h-11 rounded-2xl bg-olive/5 flex items-center justify-center text-olive border border-olive/10 mb-6 group-hover:bg-olive group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <h4 className="text-lg font-serif font-semibold text-text mb-3 group-hover:text-accent transition-colors">{item.title}</h4>
                    <p className="text-text/75 text-sm leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Por que funciona (Stats & Pilares) */}
      <section className="py-20 md:py-32 bg-beige-light border-y border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-serif font-medium text-text tracking-tight mb-6">
                Um método prático para o seu dia a dia
              </h2>
              <p className="text-text/80 text-sm md:text-base font-light leading-relaxed">
                Essa jornada foi criada pensando em quem tem uma rotina corrida e precisa de direcionamento real. É um passo a passo objetivo para você aplicar de forma simples, no seu próprio tempo.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center mb-24 max-w-2xl mx-auto">
            {[
              { label: "Módulos de Mentoria Prática", value: "14" },
              { label: "Devocionais em Vídeo", value: "70" }
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="border border-border p-6 rounded-2xl bg-bg/50">
                  <div className="text-3xl md:text-4xl font-serif font-bold text-accent leading-none mb-2">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-olive/70">
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mb-8 text-center md:text-left">
            <Reveal>
              <h3 className="text-2.5xl md:text-3.5xl font-serif font-medium text-text mt-1">Os 5 Pilares da Reorganização Espiritual</h3>
            </Reveal>
          </div>

          <div id="pilares" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { weeks: "Semanas 1 - 2", title: "Fundamentos", desc: "Varra as mentiras sobre sua identidade. Edifique suas bases espirituais e emocionais na Verdade." },
              { weeks: "Semanas 3 - 4", title: "Mente & Espírito", desc: "Desenvolva o autocontrole contra distrações digitais e organize suas prioridades matinais." },
              { weeks: "Semanas 5 - 6", title: "Corpo & Templo", desc: "Aprenda a descansar de verdade e cuide da energia do corpo de maneira honrosa a Deus." },
              { weeks: "Semanas 7 - 12", title: "Relacionamentos", desc: "Edifique conversas maduras no casamento, mentore seus filhos e estabeleça limites saudáveis." },
              { weeks: "Semanas 13 - 14", title: "Vocação & Legado", desc: "Direcione sua carreira e dons rumo a um propósito integral que reverbera para a eternidade." }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.08} className="h-full">
                <div className="group p-6 rounded-2xl border border-border bg-bg/70 hover:bg-white hover:border-accent/25 transition-all duration-300 h-full flex flex-col justify-between shadow-sm">
                  <div>
                    <span className="text-[10px] font-semibold text-accent uppercase tracking-widest block mb-4">{item.weeks}</span>
                    <h3 className="text-base font-serif font-semibold leading-snug text-text group-hover:text-accent transition-colors">{item.title}</h3>
                  </div>
                  <p className="text-xs text-text/75 leading-relaxed font-light mt-4 pt-4 border-t border-border/60">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>



      {/* 7. Dúvidas Frequentes */}
      <section className="py-20 md:py-32 bg-beige-light border-t border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <Reveal>
              <h2 className="text-3.5xl md:text-5xl font-serif font-medium text-text tracking-tight">
                Dúvidas comuns esclarecidas
              </h2>
            </Reveal>
          </div>
          
          <Reveal>
            <div className="bg-bg border border-border rounded-3xl p-6 md:p-8 space-y-2 shadow-sm">
              <Accordion title="Como recebo o acesso ao Guia?">
                O acesso é completamente imediato. Assim que o pagamento de R$ 97,00 for aprovado, seu e-mail cadastrado receberá um link individual contendo as instruções didáticas e as chaves de acesso para a nossa plataforma.
              </Accordion>
              <Accordion title="Por quanto tempo terei acesso a todo o material?">
                O seu acesso é vitalício. Você pode ler as 70 devocionais, assistir às aulas dos 14 módulos e rever as meditações no seu ritmo, sempre que a sua rotina pedir por um momento de paz profunda.
              </Accordion>
              <Accordion title="Preciso dominar teologia ou oratória para usufruir?">
                Não. A Jornada Propósito Pleno foi inteiramente estruturada com clareza para receber quem está iniciando o hábito de devotionais diários, estimulando conversas francas e aplicáveis.
              </Accordion>
              <Accordion title="E se o método não funcionar para o meu cotidiano?">
                Fique em total tranquilidade: oferecemos uma garantia integral e incondicional de reembolso de 7 dias. Seu conforto e convicção são o nosso maior compromisso ético.
              </Accordion>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. Garantia - Bloco Dedicado */}
      <section className="py-20 md:py-32 bg-bg relative">
        <div className="container mx-auto px-6 max-w-4xl relative">
          <Reveal>
            <div className="relative p-0.5 rounded-[2.5rem] md:rounded-[3rem] bg-gradient-to-br from-accent/20 via-border to-accent/5">
              <div className="bg-[#FAF6F0] p-8 md:p-14 rounded-[2.4rem] md:rounded-[2.9rem] flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-sm relative overflow-hidden">
                
                {/* Background ambient shade inside guarantee block */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-gold/3 rounded-full blur-[80px] -z-10" />

                <div className="relative shrink-0">
                  <div className="w-24 h-24 md:w-36 md:h-36 rounded-full bg-accent/5 flex items-center justify-center border-2 border-accent/20 shadow-[0_0_30px_rgba(179,93,67,0.03)]">
                    <ShieldCheck size={42} className="text-accent" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-accent text-white px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest shadow-md">
                    7 dias
                  </div>
                </div>
                
                <div className="text-center md:text-left">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase block mb-2">RISCO ZERO</span>
                  <h2 className="text-2xl md:text-3xl font-serif font-medium text-text mb-4 tracking-tight">
                    Testa por 7 dias.
                  </h2>
                  <p className="text-text/80 text-sm leading-relaxed mb-6 font-light">
                    Se não for pra você, devolvemos seu dinheiro. Sem enrolação, sem pergunta.
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <div className="flex gap-1 text-gold">
                      {[1, 2, 3, 4, 5].map(s => <Star key={s} size={11} fill="currentColor" className="stroke-none" />)}
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-text/50 font-sans">Garantia incondicional de reembolso</span>
                  </div>
                </div>

              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. Oferta + CTA */}
      <section id="oferta" className="py-20 md:py-32 relative overflow-hidden bg-beige-light">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-glow-clay -z-10 pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-3xl">
          <Reveal>
            <div className="bg-bg border border-accent/25 text-text rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-14 text-center relative overflow-hidden shadow-lg backdrop-blur-md">
              
              <div className="mb-10 max-w-md mx-auto text-left space-y-4">
                <h3 className="text-2xl md:text-3.5xl font-serif font-medium text-text text-center mb-4 tracking-tight">
                  Você já tentou resolver isso sozinho. Não funcionou.
                </h3>

                <p className="text-sm md:text-base text-text/80 text-center max-w-lg mx-auto mb-10 leading-relaxed font-light">
                  R$97. Acesso vitalício. 14 módulos estratégicos e 70 devocionais em vídeo com e-books complementares.
                </p>

                {[
                  { title: "14 Módulos Práticos", desc: "Aulas curtas e diretas ao ponto pra você mudar seus hábitos" },
                  { title: "70 Devocionais em Vídeo", desc: "Acompanhamento diário sem enrolação pra guiar suas manhãs" },
                  { title: "Plataforma Completa", desc: "Acesso no seu próprio tempo com ebooks complementares inclusos" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start bg-white/40 p-4 rounded-xl border border-border group hover:border-accent/20 hover:bg-white/90 transition-all duration-300">
                    <div className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5 border border-accent/15">
                      <Check size={12} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="text-sm md:text-base font-bold text-text mb-0.5 font-serif">{item.title}</h4>
                      <p className="text-xs text-text/70 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-10 cursor-default border-t border-b border-border py-8 max-w-sm mx-auto">
                <h2 className="text-base md:text-lg font-serif font-medium mb-3 text-text/70 uppercase tracking-widest">Invista em você</h2>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-lg md:text-2xl text-text/60 font-medium mr-1.5 font-serif">R$</span>
                  <p className="text-5xl md:text-6.5xl font-serif font-semibold tracking-tight text-text drop-shadow-sm select-all">97,00</p>
                </div>
                <p className="text-xs text-text/60 mt-3 font-sans">Acesso vitalício completo, sem novas taxas ou mensalidades</p>
              </div>

              <div className="grid grid-cols-1 gap-3 mb-10 max-w-xs mx-auto">
                <div className="bg-white/40 border border-border py-3 rounded-xl flex items-center justify-center gap-2 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-text/80">
                  <span className="text-accent"><ShieldCheck size={11} /></span>
                  Garantia 7 Dias
                </div>
              </div>

              <div className="space-y-6">
                <a 
                  href="https://pay.hub.la/RBS2l0kJ8JIuPjA14Nr5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative bg-[#B35D43] hover:bg-[#C26B50] text-white px-10 md:px-14 py-4.5 md:py-5 rounded-full text-xs md:text-sm font-extrabold uppercase tracking-[0.15em] hover:scale-[1.02] active:scale-[0.98] transition-all w-full md:w-auto inline-flex items-center justify-center gap-3 shadow-md shadow-accent/15 overflow-hidden cursor-pointer"
                >
                  <span className="absolute inset-x-0 top-0 h-1/2 bg-white/5" />
                  COMEÇAR AGORA
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform stroke-[2.5]" />
                </a>
                
                <div className="flex items-center justify-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] opacity-50">
                  <ShieldCheck size={12} strokeWidth={2.5} />
                  Checkout Criptografado & Amparado
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-border bg-[#F5EFE6]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="text-center md:text-left">
              <span className="text-base font-serif font-semibold tracking-[0.25em] text-text block mb-3">JORNADA Propósito Pleno</span>
            </div>
            <div className="text-[10px] font-bold uppercase tracking-widest opacity-50 text-center md:text-right">
              &copy; {new Date().getFullYear()} Jornada Propósito Pleno. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
