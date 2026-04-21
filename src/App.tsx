/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Sparkles, ArrowRight, BookOpen, Users, Video, ChevronDown, Star, ShieldCheck, Zap } from 'lucide-react';

const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string; key?: React.Key }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Accordion = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-accent transition-colors"
      >
        <span className="text-lg font-display font-bold">{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-text/60 leading-relaxed">
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
    <div className="min-h-screen bg-bg text-text selection:bg-accent selection:text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-bg/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-display font-bold tracking-tighter">JORNADA</span>
          </div>
          
          <nav className="flex items-center gap-4 md:gap-8">
            <a href="#pilares" className="hidden sm:inline text-[10px] md:text-xs font-bold uppercase tracking-widest hover:text-accent transition-colors">
              Pilares
            </a>
            <a href="#oferta" className="bg-accent text-white px-4 md:px-6 py-2.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all whitespace-nowrap">
              Garantir Vaga
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-accent/5 rounded-full blur-[80px] md:blur-[120px] -z-10 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-gold/5 rounded-full blur-[80px] md:blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto px-6 text-center max-w-5xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-accent/5 border border-accent/10 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
              <Sparkles size={12} className="text-accent" />
              Guia de 14 semanas de transformação
            </div>
            
            <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 leading-[0.95] tracking-tighter">
              A jornada para um <span className="text-accent italic">propósito pleno</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base md:text-xl max-w-2xl mx-auto mb-12 text-text/60 font-medium leading-relaxed">
              Um guia desenhado para alinhar cada aspecto da sua vida ao chamado divino. Deixe o "fazer" ser reflexo do "ser" em Cristo.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="flex flex-col items-center gap-10">
              <a href="#oferta" className="group relative w-full sm:w-auto bg-accent text-white px-10 md:px-12 py-5 md:py-6 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest hover:scale-[1.05] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-2xl shadow-accent/30 overflow-hidden">
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-[-20deg]" />
                Garantir Minha Jornada
                <ArrowRight size={16} />
              </a>
              
              <div className="flex flex-col items-center gap-4">
                <div className="flex -space-x-2 md:-space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-bg bg-muted overflow-hidden">
                      <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest opacity-40">
                  Junte-se a +1.200 vidas transformadas
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 md:py-32 bg-bg relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12 md:mb-16">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter mb-6">Você se identifica com isso?</h2>
              <div className="w-12 h-1 bg-accent/20 mx-auto rounded-full" />
            </Reveal>
          </div>

          <div className="grid gap-4">
            {[
              "Sente que tem um propósito, mas não sabe por onde começar",
              "Age por ansiedade mesmo tendo fé",
              "Sua rotina, seus relacionamentos e seu trabalho parecem desconectados de Deus",
              "Quer viver com intenção, mas o dia a dia te engole"
            ].map((point, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group p-6 md:p-8 rounded-2xl border border-border bg-white/50 hover:border-accent/30 transition-all flex items-center gap-4 md:gap-6">
                  <div className="w-10 h-10 rounded-full bg-accent/5 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                    <CheckCircle2 size={18} className="opacity-40 group-hover:opacity-100" />
                  </div>
                  <p className="text-base md:text-xl font-medium text-text/80 leading-tight">{point}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-border bg-white/50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
            {[
              { label: "Vidas Impactadas", value: "1.2k+" },
              { label: "Módulos Práticos", value: "14" },
              { label: "Devocionais", value: "70" }
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="space-y-2">
                  <div className="text-4xl md:text-5xl font-display font-bold text-accent">{stat.value}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-40">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section id="pilares" className="py-20 md:py-32">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-16 md:mb-24">
            <Reveal>
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">Os 5 Pilares</h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { weeks: "1 - 2", title: "Fundamentos", desc: "Construa sua vida sobre a rocha inabalável." },
              { weeks: "3 - 4", title: "Mente & Espírito", desc: "Renove seu entendimento e fortaleça sua fé." },
              { weeks: "5 - 6", title: "Corpo & Alma", desc: "Cuide do templo do Espírito com sabedoria." },
              { weeks: "7 - 12", title: "Relacionamentos", desc: "Edifique lares de paz e conexões profundas." },
              { weeks: "13 - 14", title: "Vocação & Legado", desc: "Descubra seu chamado e deixe sua marca no mundo." }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1} className="h-full">
                <div className="group p-6 md:p-8 rounded-3xl border border-border hover:border-accent transition-all h-full flex flex-col justify-between hover:bg-accent/5">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 block mb-4">{item.weeks}</span>
                    <h3 className="text-lg md:text-xl font-display font-bold leading-tight mb-4">{item.title}</h3>
                  </div>
                  <p className="text-[10px] md:text-xs text-text/50 leading-relaxed font-medium mt-auto">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What you receive Section */}
      <section id="entrega" className="py-20 md:py-32 bg-olive/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16 md:mb-24">
            <Reveal>
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">O que você recebe</h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Video size={24} />,
                title: "14 Módulos",
                desc: "14 semanas de conteúdo que vão reorganizar sua vida de dentro pra fora"
              },
              {
                icon: <BookOpen size={24} />,
                title: "70 Devocionais",
                desc: "70 devocionais para você não perder o fio com Deus em nenhum dia da jornada"
              },
              {
                icon: <Users size={24} />,
                title: "Comunidade",
                desc: "Uma comunidade de pessoas que estão na mesma caminhada que você"
              }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.2}>
                <div className="bg-bg p-8 md:p-12 rounded-[2rem] h-full border border-border">
                  <div className="mb-6 md:mb-8 text-accent opacity-40">
                    {item.icon}
                  </div>
                  <h4 className="text-xl md:text-2xl font-display font-bold mb-4">{item.title}</h4>
                  <p className="text-text/50 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-beige-light">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16 md:mb-24">
            <Reveal>
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6">Relatos Reais</h2>
              <p className="text-text/50 max-w-xl mx-auto text-sm md:text-base">Vejas o que dizem aqueles que já iniciaram sua jornada de transformação.</p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "Ana Paula",
                text: "O guia mudou completamente a atmosfera da minha casa. Hoje temos paz e um propósito claro em cada pequena ação do dia."
              },
              {
                name: "Marcos Silva",
                text: "Os pilares de relacionamentos e vocação me ajudaram a entender meu papel como provedor espiritual do meu lar."
              },
              {
                name: "Juliana Costa",
                text: "As devocionais são profundas e práticas. É impossível passar por essas 14 semanas e continuar a mesma pessoa."
              }
            ].map((t, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-bg p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-border relative">
                  <div className="flex gap-1 mb-6 text-gold">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-text/70 italic mb-8 leading-relaxed text-sm md:text-base">"{t.text}"</p>
                  <div>
                    <div className="font-display font-bold">{t.name}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-20">
            <Reveal>
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6">Dúvidas Frequentes</h2>
            </Reveal>
          </div>
          
          <Reveal>
            <div className="space-y-2">
              <Accordion title="Como recebo o acesso?">
                O acesso é imediato após a confirmação do pagamento. Você receberá um e-mail com todas as instruções para acessar a plataforma.
              </Accordion>
              <Accordion title="Por quanto tempo terei acesso?">
                Você terá acesso vitalício a todo o conteúdo do guia, incluindo todas as atualizações futuras.
              </Accordion>
              <Accordion title="Preciso de algum conhecimento prévio?">
                Não. O guia foi desenhado para acompanhar você desde os fundamentos até os níveis mais profundos de aplicação prática.
              </Accordion>
              <Accordion title="E se eu não gostar?">
                Oferecemos uma garantia incondicional de 7 dias. Se você sentir que o guia não é para você, devolvemos 100% do seu investimento.
              </Accordion>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Offer Section */}
      <section id="oferta" className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-glow -z-10" />
        
        <div className="container mx-auto px-6 max-w-4xl">
          <Reveal>
            <div className="bg-accent text-white rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-20 text-center shadow-[0_40px_100px_-20px_rgba(139,69,19,0.3)] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 hidden md:block">
                <ShieldCheck size={120} />
              </div>
              
              <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 border border-white/20 text-[10px] font-bold uppercase tracking-[0.3em] mb-10 md:mb-12">
                <Zap size={12} className="text-gold" />
                Oferta Exclusiva de Lançamento
              </span>
              
              <div className="mb-10 md:mb-12">
                <p className="opacity-40 line-through text-base md:text-lg mb-2">De R$ 1.000,00 por</p>
                <h2 className="text-xl md:text-3xl font-display font-medium mb-4 opacity-90">Invista hoje apenas</h2>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-lg md:text-xl opacity-40">12x de</span>
                  <span className="text-6xl md:text-9xl font-display font-bold tracking-tighter text-white">37,40</span>
                </div>
                <p className="mt-4 text-gold font-bold uppercase tracking-widest text-[10px] md:text-xs">ou R$ 368,00 à vista</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-10 md:mb-12">
                {[
                  { icon: <Zap size={14} />, text: "Acesso Vitalício" },
                  { icon: <Star size={14} />, text: "Bônus Exclusivos" },
                  { icon: <ShieldCheck size={14} />, text: "Garantia 7 Dias" }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 py-3 md:py-4 rounded-xl md:rounded-2xl flex items-center justify-center gap-3 text-[9px] md:text-[10px] font-bold uppercase tracking-widest border border-white/10">
                    <span className="text-gold">{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <a 
                  href="https://pay.hub.la/RBS2l0kJ8JIuPjA14Nr5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative bg-white text-accent px-10 md:px-16 py-5 md:py-6 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest hover:scale-[1.05] active:scale-[0.98] transition-all w-full md:w-auto inline-flex items-center justify-center gap-3 shadow-2xl"
                >
                  Garantir Minha Vaga Agora
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                
                <div className="flex items-center justify-center gap-2 text-[9px] md:text-[10px] font-bold uppercase tracking-widest opacity-40">
                  <ShieldCheck size={14} />
                  Pagamento 100% Seguro
                </div>
              </div>
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
