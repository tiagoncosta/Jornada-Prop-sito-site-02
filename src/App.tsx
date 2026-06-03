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
  Zap 
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
    <div className="border-b border-border/60 last:border-none transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 md:py-6 flex items-center justify-between text-left hover:text-accent transition-colors group cursor-pointer"
      >
        <span className="text-base md:text-lg font-display font-semibold text-white/95 group-hover:text-accent-light transition-colors">{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-accent/60 group-hover:text-accent shrink-0 ml-4"
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
            <div className="pb-6 text-sm md:text-base text-text/70 leading-relaxed font-light">
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
    <div className="min-h-screen bg-bg text-text selection:bg-accent/30 selection:text-white relative overflow-x-hidden">
      
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-0 left-1/4 w-[35rem] h-[35rem] bg-olive/10 rounded-full blur-[150px] -z-20 pointer-events-none" />
      <div className="absolute top-[30%] right-10 w-[40rem] h-[40rem] bg-accent/3 rounded-full blur-[180px] -z-20 pointer-events-none" />
      <div className="absolute bottom-[15%] left-10 w-[35rem] h-[35rem] bg-olive/5 rounded-full blur-[140px] -z-20 pointer-events-none" />

      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-bg/85 backdrop-blur-md border-b border-border/40 transition-all duration-300">
        <div className="container mx-auto px-6 h-16 md:h-20 flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-2.5 group">
            <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
            <span className="text-lg md:text-xl font-display font-extrabold tracking-[0.2em] text-white">
              JORNADA
            </span>
          </div>
          
          <nav className="flex items-center gap-4 md:gap-8">
            <a 
              href="#pilares" 
              className="hidden sm:inline text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-text/80 hover:text-accent transition-colors"
            >
              Pilares
            </a>
            <a 
              href="#oferta" 
              className="bg-accent/10 hover:bg-accent text-accent hover:text-bg border border-accent/30 hover:border-accent px-5 md:px-7 py-2.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-300 whitespace-nowrap"
            >
              Garantir Vaga
            </a>
          </nav>
        </div>
      </header>

      {/* 1. Headline de Dor / Hero */}
      <section className="relative pt-36 pb-16 md:pt-48 md:pb-28 overflow-hidden">
        <div className="container mx-auto px-6 text-center max-w-4xl relative">
          <Reveal>
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-accent/5 border border-accent/20 text-[10px] font-bold uppercase tracking-[0.2em] mb-8 text-accent-light shadow-sm">
              <Sparkles size={11} className="text-accent animate-spin-slow" />
              Para quem busca sair do automático
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold mb-8 leading-[1.1] tracking-tight text-white">
              Cansado de sentir que sua vida está <br/>
              <span className="text-accent font-serif italic font-normal tracking-wide">desconectada</span> do céu?
            </h1>
          </Reveal>
          
          <Reveal delay={0.25}>
            <p className="text-base md:text-lg max-w-2xl mx-auto text-text/70 font-light leading-relaxed">
              Você acorda, corre, resolve problemas, mas no fim do dia sente um vazio. Parece que falta algo essencial. Você sabe que tem um propósito, mas na pressa do dia a dia ele parece cada vez mais distante e inalcançável.
            </p>
          </Reveal>
          
          <Reveal delay={0.4} className="mt-10">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent mx-auto rounded-full" />
          </Reveal>
        </div>
      </section>

      {/* 2. Agitação (Pain Points) */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12 md:mb-16">
            <Reveal>
              <h2 className="text-2xl md:text-3.5xl font-display font-bold text-white tracking-tight leading-tight">
                Honestamente, você se identifica com isso?
              </h2>
              <p className="text-text/50 text-xs md:text-sm mt-3 uppercase tracking-[0.15em]">Reflita sobre os seus últimos dias</p>
            </Reveal>
          </div>

          <div className="grid gap-4 md:gap-5">
            {[
              "Sente que tem um chamado, mas não sabe como dar o primeiro passo",
              "A ansiedade costuma falar mais alto que a sua confiança em Deus",
              "Sua rotina e seu trabalho parecem não refletir os valores que você acredita",
              "Sente que a vida está passando e você ainda não viveu o que nasceu para viver"
            ].map((point, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group p-5 md:p-6 rounded-2xl border border-border/40 bg-muted/20 hover:border-accent/40 hover:bg-muted/40 transition-all duration-300 flex items-center gap-4 md:gap-5 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-accent/5 flex items-center justify-center shrink-0 border border-accent/15 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                    <CheckCircle2 size={16} className="text-accent group-hover:text-bg transition-colors" />
                  </div>
                  <p className="text-sm md:text-base font-medium text-text/80 group-hover:text-word-high transition-colors leading-relaxed">
                    {point}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Apresentação da Solução */}
      <section className="py-20 md:py-32 bg-olive/15 border-y border-border/50 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/20 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 max-w-5xl text-center relative">
          <Reveal>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-accent mb-4 block">
              Apresentamos a Solução que Organiza a Alma
            </span>
            <h2 className="text-4xl md:text-5.5xl font-display font-extrabold text-white tracking-tight mb-8">
              A Jornada para um <span className="text-accent font-serif italic font-normal">Propósito Pleno</span>
            </h2>
            <p className="text-base md:text-lg text-text/75 max-w-3xl mx-auto mb-16 leading-relaxed font-light">
              Não é sobre acrescentar mais tarefas à sua rotina cansativa. É um método estruturado para alinhar seu cotidiano ao plano eterno. Deixe o seu <span className="text-accent-light font-medium">fazer</span> diário ser apenas o transbordar de quem você <span className="text-accent-light font-medium">é</span> em Deus.
            </p>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-left max-w-4xl mx-auto">
              <div className="bg-bg/60 p-8 rounded-3xl border border-border/80 shadow-lg hover:border-accent/30 transition-all duration-300 relative group overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent/40" />
                <span className="text-xs font-mono text-accent/50 group-hover:text-accent transition-colors block mb-2 font-bold tracking-widest">PROCESSO I</span>
                <h3 className="text-xl font-display font-bold text-white mb-3">A Clareza que falta</h3>
                <p className="text-sm text-text/65 leading-relaxed font-light">
                  Mapeie seus talentos e aprenda a aplicá-los de forma equilibrada no seu trabalho, na família e no ministério, sem sobrecarga ou frustração.
                </p>
              </div>
              
              <div className="bg-bg/60 p-8 rounded-3xl border border-border/80 shadow-lg hover:border-accent/30 transition-all duration-300 relative group overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent/40" />
                <span className="text-xs font-mono text-accent/50 group-hover:text-accent transition-colors block mb-2 font-bold tracking-widest">PROCESSO II</span>
                <h3 className="text-xl font-display font-bold text-white mb-3">O Alinhamento Espiritual</h3>
                <p className="text-sm text-text/65 leading-relaxed font-light">
                  Desenvolva intimidade real. Aprenda a discernir a voz divina em meio ao barulho moderno e tome decisões cruciais com paz e convicção inabaláveis.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. O que você vai encontrar */}
      <section id="entrega" className="py-20 md:py-32 bg-bg relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16 md:mb-20">
            <Reveal>
              <span className="text-[10px] md:text-sm text-accent tracking-[0.2em] font-semibold uppercase block mb-3">Os Detalhes do Guia</span>
              <h2 className="text-3.5xl md:text-5xl font-display font-extrabold text-white tracking-tight">
                Estrutura Completa do Método
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: <Video size={22} />,
                title: "14 Módulos Estratégicos",
                desc: "Aulas cirúrgicas com fundamentação sólida e aplicação prática instantânea para mudar hábitos enraizados."
              },
              {
                icon: <BookOpen size={22} />,
                title: "70 Devocionais de Apoio",
                desc: "Um cronograma diário detalhado para alimentar sua alma cotidianamente e manter o alinhamento espiritual ativo."
              },
              {
                icon: <Users size={22} />,
                title: "Comunidade Amparada",
                desc: "Espaço exclusivo para trocar experiências, pedir orações e caminhar cercado de pessoas que falam a mesma língua."
              }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.15}>
                <div className="bg-muted/10 p-8 md:p-10 rounded-3xl h-full border border-border/40 hover:border-accent/30 hover:bg-muted/20 transition-all duration-300 group shadow-md flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-accent/5 flex items-center justify-center text-accent border border-accent/10 mb-6 group-hover:bg-accent group-hover:text-bg transition-all duration-300">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-display font-bold text-white mb-3 group-hover:text-accent-light transition-colors">{item.title}</h4>
                    <p className="text-text/60 text-sm leading-relaxed font-light">
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
      <section className="py-20 md:py-32 bg-olive/10 border-y border-border/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-6">
                Por que este método realmente funciona?
              </h2>
              <p className="text-text/70 text-sm md:text-base font-light leading-relaxed">
                Nossa abordagem não se limita à teoria. É fundamentada em anos de caminhada prática e na mentoria espiritual de centenas de corações restaurados.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 text-center mb-24 max-w-4xl mx-auto">
            {[
              { label: "Vidas Restauradas", value: "1.2k+" },
              { label: "Módulos Práticos", value: "14" },
              { label: "Guias Devocionais", value: "70" }
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-bg/40 border border-border/40 p-6 rounded-2xl md:bg-transparent md:border-none md:p-0">
                  <div className="text-4xl md:text-5xl font-display font-extrabold text-accent leading-none mb-2">
                    {stat.value}
                  </div>
                  <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-text/50">
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mb-10 text-center sm:text-left">
            <Reveal>
              <span className="text-xs font-mono font-bold uppercase text-accent tracking-widest gap-2 inline-flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Roteiro de Transformação
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mt-1">Os 5 Pilares Fundamentais</h3>
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
                <div className="group p-6 md:p-7 rounded-3xl border border-border/50 bg-bg/40 hover:bg-bg/85 hover:border-accent/40 transition-all duration-300 h-full flex flex-col justify-between shadow-sm">
                  <div>
                    <span className="text-[10px] font-semibold text-accent uppercase tracking-widest block mb-4">{item.weeks}</span>
                    <h3 className="text-base md:text-lg font-display font-bold leading-tight text-white mb-3 group-hover:text-accent-light transition-colors">{item.title}</h3>
                  </div>
                  <p className="text-xs text-text/55 leading-relaxed font-light mt-4 pt-4 border-t border-border/10">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Depoimentos */}
      <section className="py-20 md:py-32 bg-bg relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16 md:mb-20">
            <Reveal>
              <span className="text-[10px] md:text-sm text-accent tracking-[0.2em] font-semibold uppercase block mb-3">Vozes Da Jornada</span>
              <h2 className="text-3.5xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
                Relatos Reais de Transformação
              </h2>
              <p className="text-text/50 max-w-lg mx-auto text-sm md:text-base font-light">
                Compreenda a mudança de perspectiva na prática através do depoimento sincero de nossos alunos.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                name: "Ana Paula S.",
                role: "Mãe e Empreendedora",
                text: "O método trouxe um alinhamento maravilhoso para a rotina da minha casa. Hoje, em vez de viver exausta ou culpada, sinto que cada detalhe do dia tem uma direção espiritual e prática clara."
              },
              {
                name: "Marcos V. Silva",
                role: "Líder e Engenheiro",
                text: "Os pilares de relacionamento e vocação redefiniram a forma como encaro o meu trabalho. Descobri que meu ganho e minhas habilidades são extensões do meu chamado divino."
              },
              {
                name: "Juliana Costa",
                role: "Professora de Artes",
                text: "O guia devocional é extremamente profundo. Não é apenas leitura rápida, são diretrizes reais de oração e ação. Vale cada centavo investido na minha saúde espiritual."
              }
            ].map((t, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-muted/15 p-8 md:p-10 rounded-[2rem] border border-border/40 relative hover:border-accent/25 hover:bg-muted/20 transition-all duration-300 h-full flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="flex gap-1 mb-5 text-gold">
                      {[1, 2, 3, 4, 5].map(s => <Star key={s} size={12} fill="currentColor" className="stroke-none" />)}
                    </div>
                    <p className="text-text/75 italic mb-8 leading-relaxed text-sm md:text-base font-light">
                      "{t.text}"
                    </p>
                  </div>
                  <div className="border-t border-border/10 pt-4 mt-auto">
                    <div className="font-display font-bold text-white text-sm md:text-base">{t.name}</div>
                    <div className="text-[10px] md:text-xs text-text/45 font-semibold uppercase mt-0.5 tracking-wider">{t.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Dúvidas Frequentes */}
      <section className="py-20 md:py-32 bg-olive/5 border-t border-border/20">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <Reveal>
              <span className="text-[10px] md:text-xs text-accent tracking-[0.2em] font-semibold uppercase block mb-3">Suporte e Respostas</span>
              <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight">
                Perguntas Frequentes
              </h2>
            </Reveal>
          </div>
          
          <Reveal>
            <div className="bg-muted/5 border border-border/40 rounded-3xl p-6 md:p-8 space-y-2 backdrop-blur-sm shadow-inner">
              <Accordion title="Como recebo o acesso ao Guia?">
                O acesso é completamente imediato. Assim que o pagamento de R$ 97,00 for aprovado, seu e-mail cadastrado receberá um link individual com as instruções e as chaves de acesso para a nossa plataforma.
              </Accordion>
              <Accordion title="Por quanto tempo terei acesso a todo o material?">
                O acesso é vitalício. Você pode assistir às aulas dos 14 módulos, ler as 70 devocionais e desfrutar do material complementar no seu ritmo e retornar a eles quantas vezes precisar.
              </Accordion>
              <Accordion title="Preciso dominar teologia ou oratória para usufruir?">
                Não. A Jornada Propósito Pleno foi estruturada para acolher desde quem está iniciando sua devoção diária até líderes experientes, oferecendo uma linguagem sincera e aplicável à vida real.
              </Accordion>
              <Accordion title="E se o método não funcionar para mim?">
                Não se preocupe: oferecemos uma garantia incondicional de reembolso total por 7 dias. O risco é inteiramente nosso, como detalhado no bloco de garantia abaixo.
              </Accordion>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. Garantia - Bloco Dedicado */}
      <section className="py-20 md:py-32 bg-bg relative">
        <div className="container mx-auto px-6 max-w-4xl relative">
          <Reveal>
            <div className="relative p-0.5 rounded-[2.5rem] md:rounded-[3rem] bg-gradient-to-br from-accent/30 via-border/50 to-accent/10">
              <div className="bg-[#101215] p-8 md:p-16 rounded-[2.4rem] md:rounded-[2.9rem] flex flex-col md:flex-row items-center gap-8 md:gap-14 shadow-2xl relative overflow-hidden">
                
                {/* Background ambient shade inside guarantee block */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-accent/2 rounded-full blur-[80px] -z-10" />

                <div className="relative shrink-0">
                  <div className="w-28 h-28 md:w-40 md:h-40 rounded-full bg-accent/5 flex items-center justify-center border-2 border-accent/40 shadow-[0_0_40px_rgba(212,175,55,0.05)]">
                    <ShieldCheck size={50} className="text-accent" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-accent text-bg px-4 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-widest shadow-lg">
                    7 dias
                  </div>
                </div>
                
                <div className="text-center md:text-left">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase block mb-2">Segurança Absoluta</span>
                  <h2 className="text-2xl md:text-3xl font-display font-extrabold text-white mb-4 tracking-tight">
                    Risco Zero para a sua decisão.
                  </h2>
                  <p className="text-text/70 text-sm leading-relaxed mb-6 font-light">
                    Confiamos tanto no poder transformador dessa caminhada bíblica que removemos todo o risco de suas costas. Participe da comunidade, acesse os materiais. Se em até 7 dias você entender que a jornada não atende às suas expectativas, basta nos enviar um único e-mail e estornaremos 100% do seu valor. Sem perguntas ou burocracia.
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <div className="flex gap-1 text-accent">
                      {[1, 2, 3, 4, 5].map(s => <Star key={s} size={11} fill="currentColor" className="stroke-none" />)}
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-text/40">Satisfação 100% Assegurada</span>
                  </div>
                </div>

              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. Oferta + CTA */}
      <section id="oferta" className="py-20 md:py-32 relative overflow-hidden bg-bg">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-glow -z-10 pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-3xl">
          <Reveal>
            <div className="bg-[#121417]/95 border-2 border-accent/20 text-text rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl backdrop-blur-md">
              
              {/* Decorative intense inner glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-accent/3 blur-[120px] rounded-full -z-10 pointer-events-none" />
              
              <div className="absolute top-0 right-0 p-8 opacity-5 hidden md:block">
                <ShieldCheck size={100} className="text-accent" />
              </div>
              
              <div className="mb-10 max-w-md mx-auto text-left space-y-4">
                <div className="text-center mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent font-sans bg-accent/5 px-4 py-1.5 rounded-full border border-accent/10">O que você recebe</span>
                </div>
                {[
                  { title: "14 Módulos Estruturados", desc: "Aulas focadas em destravar seu chamado integral" },
                  { title: "70 Devocionais Diárias", desc: "Instruções diárias para consolidação da jornada" },
                  { title: "Comunidade Exclusiva", desc: "Espaço de partilha mútua e crescimento coletivo" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start bg-white/[0.02] p-4 rounded-xl border border-white/5 group hover:border-accent/20 hover:bg-white/[0.04] transition-all duration-300">
                    <div className="w-7 h-7 rounded-full bg-accent/15 flex items-center justify-center shrink-0 mt-0.5 border border-accent/20">
                      <CheckCircle2 size={13} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="text-sm md:text-base font-bold text-white mb-0.5">{item.title}</h4>
                      <p className="text-xs text-text/55 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-10 cursor-default border-t border-b border-white/5 py-8 max-w-sm mx-auto">
                <h2 className="text-lg md:text-xl font-display font-medium mb-4 text-text/70 uppercase tracking-widest">Invista hoje apenas</h2>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-xl md:text-3xl text-text/45 font-medium mr-1.5 font-display">R$</span>
                  <p className="text-5xl md:text-7xl font-display font-extrabold tracking-tight text-white drop-shadow-sm select-all">97,00</p>
                </div>
                <p className="text-xs text-text/50 mt-3">Para acesso vitalício sem mensalidades</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10 max-w-lg mx-auto">
                {[
                  { icon: <Zap size={12} />, text: "Acesso Vitalício" },
                  { icon: <Star size={12} />, text: "Bônus Exclusivos" },
                  { icon: <ShieldCheck size={12} />, text: "Garantia 7 Dias" }
                ].map((item, i) => (
                  <div key={i} className="bg-white/[0.02] py-3 rounded-xl flex items-center justify-center gap-2.5 text-[9px] md:text-[10px] font-bold uppercase tracking-widest border border-white/5 text-text/70">
                    <span className="text-accent">{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <a 
                  href="https://pay.hub.la/RBS2l0kJ8JIuPjA14Nr5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative bg-[#D4AF37] hover:bg-[#E2C255] text-bg px-10 md:px-16 py-5 md:py-5.5 rounded-full text-xs md:text-sm font-extrabold uppercase tracking-[0.15em] hover:scale-[1.03] active:scale-[0.98] transition-all w-full md:w-auto inline-flex items-center justify-center gap-3 shadow-2xl shadow-accent/20 overflow-hidden cursor-pointer"
                >
                  <span className="absolute inset-x-0 top-0 h-1/2 bg-white/10" />
                  Sim, Eu Quero Me Transformar
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform stroke-[2.5]" />
                </a>
                
                <div className="flex items-center justify-center gap-2 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">
                  <ShieldCheck size={12} strokeWidth={2.5} />
                  Pagamento 100% Criptografado & Seguro
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-border/30 bg-[#0A0B0D]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="text-center md:text-left">
              <span className="text-lg font-display font-extrabold tracking-[0.25em] text-white block mb-3">JORNADA</span>
              <p className="text-sm text-text/45 max-w-xs leading-relaxed font-light">
                Edificando lares de paz, mentes disciplinadas e legados de fé inabalável através de práticos princípios bíblicos.
              </p>
            </div>
            <div className="text-[10px] font-bold uppercase tracking-widest opacity-40 text-center md:text-right">
              &copy; {new Date().getFullYear()} Jornada Propósito Pleno. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
