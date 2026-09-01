/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ChevronDown, Clock } from 'lucide-react';

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
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Countdown timer state to 05/10/2026 00:00 (Brasília UTC-3)
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
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

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pilares = [
    {
      num: '01',
      title: 'Fundamentos & Audição Divina',
      desc: 'você aprende a reconhecer a voz de Deus em meio ao barulho do dia a dia. Isso sozinho já muda a forma como você toma decisão.'
    },
    {
      num: '02',
      title: 'Mente & Espírito',
      desc: 'sua cabeça para de ser o lugar mais barulhento da sua vida. Você aprende a alinhar pensamento com propósito, não só "pensar positivo".'
    },
    {
      num: '03',
      title: 'Corpo & Alma',
      desc: 'seu corpo deixa de ser tratado como separado da sua fé. Cuidar de você vira parte do chamado, não distração dele.'
    },
    {
      num: '04',
      title: 'Relacionamentos',
      desc: 'o pilar mais longo da Jornada, porque é onde a fragmentação mais dói. Você aprende a estar presente de verdade com quem você ama.'
    },
    {
      num: '05',
      title: 'Vocação & Legado',
      desc: 'seu trabalho para de ser só sustento e vira parte de um propósito maior que vai além de você.'
    }
  ];

  const faqItems = [
    {
      q: 'E se eu não tiver tempo?',
      a: 'A Jornada é feita pra caber na vida real, não pra competir com ela. Cada devocional é curto o suficiente pra entrar no seu dia, não pra tomar ele.'
    },
    {
      q: 'Já tentei outros cursos e não terminei.',
      a: 'Essa não é uma lista de aulas soltas pra você ter que se organizar sozinho. É um caminho com ordem definida - você não decide o que assistir, só segue o passo a passo.'
    },
    {
      q: 'É só mais uma coisa sobre finanças/mentalidade?',
      a: 'Não. É uma série de devocionais com base bíblica sobre desenvolvimento pessoal integrado - fé, mente, corpo, relacionamentos, vocação e finanças como parte de uma vida só, não tópicos soltos.'
    },
    {
      q: 'Quanto tempo eu tenho acesso?',
      a: 'Pagamento único. Você entra uma vez, e o caminho é seu pra sempre.'
    },
    {
      q: 'O Pilar 6 já está incluído se eu comprar agora?',
      a: 'Sim. Você garante o acesso vitalício hoje, com os 5 pilares disponíveis, e o Pilar 6 entra na sua área de membros automaticamente em outubro, sem cobrança adicional.'
    },
    {
      q: 'E se eu não gostar ou não me identificar com a Jornada?',
      a: 'Você tem 7 dias de garantia. Se não fizer sentido pra você, é só pedir o reembolso, sem burocracia.'
    },
    {
      q: 'E se eu travar no meio e não conseguir terminar?',
      a: 'Você não perde o acesso. É vitalício - você pode pausar, voltar, recomeçar um pilar, no seu tempo. A Jornada espera por você.'
    }
  ];

  const entregaveis = [
    'Acesso vitalício à área de membros',
    '70 devocionais em vídeo, organizados em 5 pilares, ao longo de 14 semanas',
    'Material de apoio (ebook) por módulo, pra acompanhar cada devocional',
    'Acesso ao grupo de WhatsApp exclusivo de quem comprou a Jornada',
    'O Pilar 6 completo, incluso sem custo extra, quando lançar em outubro'
  ];

  const provaSocial = [
    {
      img: '/prova-social-capa-membros.png',
      caption: 'Conteúdo em vídeo, direto ao ponto'
    },
    {
      img: '/prova-social-galeria-modulos.png',
      caption: '6 pilares, 17 semanas de jornada'
    },
    {
      img: '/prova-social-lista-progresso.png',
      caption: 'Acompanhe seu progresso semana a semana'
    },
    {
      img: '/prova-social-whatsapp.png',
      caption: 'Uma comunidade real de quem está vivendo a jornada'
    }
  ];

  const scrollToOffer = () => {
    const el = document.getElementById('oferta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className="min-h-screen bg-bg text-text selection:bg-accent/15 selection:text-text font-sans flex flex-col justify-between antialiased overflow-x-hidden">
      
      {/* Header/Navbar */}
      <header className="fixed top-0 w-full z-50 bg-bg/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 h-14 sm:h-16 md:h-20 flex items-center justify-between max-w-5xl">
          <div className="flex items-center gap-3">
            <span className="text-[11px] sm:text-xs md:text-sm font-serif font-semibold tracking-[0.18em] sm:tracking-[0.2em] text-text block leading-tight uppercase truncate">
              Jornada Propósito Pleno
            </span>
          </div>
          <button 
            onClick={scrollToOffer}
            className="text-[11px] sm:text-xs font-sans font-medium text-accent hover:text-accent-hover transition-colors border border-accent/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-md hover:bg-accent/5 cursor-pointer whitespace-nowrap active:scale-95"
          >
            Garantir Acesso
          </button>
        </div>
      </header>

      <main className="flex-1">

        {/* 1. HERO SECTION */}
        <section className="pt-24 pb-10 sm:pt-32 sm:pb-14 md:pt-40 md:pb-20">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
            <Reveal>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-normal text-text tracking-tight mb-5 sm:mb-6 leading-[1.18] sm:leading-[1.14]">
                Sua vida não vai mudar sozinha. Mas ela também não precisa mudar tudo de uma vez.
              </h1>
              
              <p className="text-base sm:text-xl md:text-2xl font-serif text-text/85 max-w-3xl mx-auto leading-relaxed mb-5 sm:mb-6 px-1 sm:px-0">
                A Jornada Propósito Pleno já está aberta, com 5 pilares e 70 devocionais prontos pra você começar hoje. E em outubro, ela cresce: chega o 6º pilar, com mais 3 semanas inteiras de conteúdo novo, direto pra quem já é aluno.
              </p>

              <p className="text-xs sm:text-sm md:text-base font-sans text-olive tracking-wide max-w-2xl mx-auto mb-8 sm:mb-10 px-2">
                Cada dia que passa esperando é um dia de propósito que você não viveu. Comece agora.
              </p>

              <button 
                onClick={scrollToOffer}
                className="w-full sm:w-auto min-h-[48px] sm:min-w-[300px] bg-accent hover:bg-accent-hover active:scale-[0.98] text-white font-medium py-3.5 sm:py-4 px-6 sm:px-8 rounded-xl shadow-md hover:shadow-lg transition-all text-base sm:text-lg inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Quero começar minha Jornada</span>
              </button>
            </Reveal>
          </div>
        </section>

        {/* 2. COUNTDOWN BANNER */}
        <section className="pb-12 sm:pb-16 md:pb-24">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            <Reveal delay={0.08}>
              <div className="bg-card border border-border p-4 sm:p-6 md:p-8 rounded-2xl shadow-sm text-center">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.16em] sm:tracking-[0.2em] text-accent uppercase bg-accent/10 px-3 py-1 rounded-full mb-3">
                  <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                  <span>PRÓXIMA ATUALIZAÇÃO</span>
                </div>

                <h2 className="text-base sm:text-lg md:text-xl font-display font-normal text-text mb-4 sm:mb-6 px-1">
                  O Pilar 6 - Multiplique seus Talentos - chega em:
                </h2>

                {/* Relógio regressivo responsivo */}
                <div className="grid grid-cols-4 gap-1.5 sm:gap-3 md:gap-4 max-w-md mx-auto mb-4 sm:mb-6">
                  <div className="bg-bg border border-border/80 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 text-center">
                    <span className="block text-xl sm:text-3xl md:text-4xl font-display font-normal text-accent leading-none sm:leading-tight">
                      {formatNumber(timeLeft.days)}
                    </span>
                    <span className="block text-[9px] sm:text-[10px] md:text-xs font-sans text-olive uppercase tracking-wider mt-1">
                      Dias
                    </span>
                  </div>
                  <div className="bg-bg border border-border/80 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 text-center">
                    <span className="block text-xl sm:text-3xl md:text-4xl font-display font-normal text-accent leading-none sm:leading-tight">
                      {formatNumber(timeLeft.hours)}
                    </span>
                    <span className="block text-[9px] sm:text-[10px] md:text-xs font-sans text-olive uppercase tracking-wider mt-1">
                      Horas
                    </span>
                  </div>
                  <div className="bg-bg border border-border/80 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 text-center">
                    <span className="block text-xl sm:text-3xl md:text-4xl font-display font-normal text-accent leading-none sm:leading-tight">
                      {formatNumber(timeLeft.minutes)}
                    </span>
                    <span className="block text-[9px] sm:text-[10px] md:text-xs font-sans text-olive uppercase tracking-wider mt-1">
                      Minutos
                    </span>
                  </div>
                  <div className="bg-bg border border-border/80 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 text-center">
                    <span className="block text-xl sm:text-3xl md:text-4xl font-display font-normal text-accent leading-none sm:leading-tight">
                      {formatNumber(timeLeft.seconds)}
                    </span>
                    <span className="block text-[9px] sm:text-[10px] md:text-xs font-sans text-olive uppercase tracking-wider mt-1">
                      Segundos
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm font-sans text-text/80 font-light px-2">
                  Compre agora e receba essa atualização de graça quando lançar.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 3. PRODUTO - OS 5 PILARES QUE JÁ ESTÃO DE PÉ */}
        <section className="py-14 sm:py-20 md:py-28 bg-beige-light border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
              <Reveal>
                <span className="text-[11px] sm:text-xs font-sans font-semibold tracking-[0.18em] sm:tracking-[0.2em] text-accent uppercase block mb-2 sm:mb-3">
                  DISPONÍVEL AGORA
                </span>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-normal text-text mb-4 sm:mb-6">
                  Os 5 pilares que já estão de pé
                </h2>
                <p className="text-text/80 text-sm sm:text-base md:text-lg font-light leading-relaxed">
                  Não é um curso pra você assistir e esquecer. É uma série de devocionais - vídeo e material de apoio - organizada num caminho progressivo, passo a passo:
                </p>
              </Reveal>
            </div>

            {/* Grid dos 5 Pilares */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16">
              {pilares.map((pilar, idx) => (
                <Reveal key={idx} delay={idx * 0.04}>
                  <div className="h-full p-5 sm:p-7 md:p-8 rounded-xl border border-border bg-card hover:border-accent/30 transition-all flex flex-col justify-between group">
                    <div>
                      <div className="flex items-center justify-between mb-4 sm:mb-6">
                        <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-widest text-olive uppercase">
                          PILAR {pilar.num}
                        </span>
                        <span className="text-[11px] sm:text-xs font-serif italic text-accent/70 group-hover:text-accent transition-colors">
                          Disponível
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl md:text-2xl font-display font-normal text-text mb-2.5 sm:mb-3 leading-snug">
                        {pilar.title}
                      </h3>

                      <p className="text-xs sm:text-sm md:text-base text-text/85 font-light leading-relaxed">
                        {pilar.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* 4. SEÇÃO DEDICADA AO PILAR 6 */}
            <Reveal delay={0.1}>
              <div className="max-w-4xl mx-auto bg-card border border-accent/40 sm:border-2 p-5 sm:p-8 md:p-12 rounded-2xl shadow-sm mb-10 sm:mb-16 relative overflow-hidden">
                <div className="inline-flex items-center text-[10px] sm:text-xs font-sans font-semibold tracking-[0.16em] sm:tracking-[0.2em] text-accent uppercase bg-accent/10 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4">
                  <span>CHEGANDO EM OUTUBRO</span>
                </div>

                <h3 className="text-xl sm:text-3xl md:text-4xl font-display font-normal text-text mb-4 sm:mb-6 leading-snug">
                  O 6º pilar: Multiplique seus Talentos
                </h3>

                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-text/85 font-light leading-relaxed">
                  <p>
                    Crescimento intelectual, autoconhecimento e finanças caminhando juntos, fechando o ciclo: até o seu dinheiro alinhado com quem você é. Três semanas que respondem uma pergunta que a Jornada ainda não tinha respondido - o que fazer com tudo que você já reconstruiu até aqui.
                  </p>
                  <p>
                    Se você começar agora, esse pilar entra na sua área de membros sozinho, no dia do lançamento. Sem pagar de novo, sem fazer nada. É como a Jornada agradece quem topou começar antes de todo mundo saber que ela tinha voltado.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Texto de fechamento */}
            <Reveal delay={0.15}>
              <div className="max-w-3xl mx-auto bg-bg border border-border p-5 sm:p-8 md:p-10 rounded-2xl text-center">
                <p className="text-sm sm:text-base md:text-lg text-text/85 font-light leading-relaxed">
                  Não é um monte de aula solta pra você escolher o que assistir hoje. É um caminho inteiro, pensado do começo ao fim, pra te levar de onde você tá até uma vida com propósito de verdade. Você não precisa decidir por onde começar nem manter disciplina sozinho pra dar conta - o caminho já tá desenhado, você só segue.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 4B. PROVA SOCIAL - POR DENTRO DA JORNADA */}
        <section className="py-14 sm:py-20 md:py-28 bg-bg border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
              <Reveal>
                <span className="text-[11px] sm:text-xs font-sans font-semibold tracking-[0.18em] sm:tracking-[0.2em] text-accent uppercase block mb-2 sm:mb-3">
                  POR DENTRO DA JORNADA
                </span>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-normal text-text mb-4 sm:mb-6">
                  O que você encontra lá dentro
                </h2>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {provaSocial.map((item, idx) => (
                <Reveal key={idx} delay={idx * 0.05}>
                  <div className="rounded-xl border border-border bg-card overflow-hidden shadow-sm">
                    <img
                      src={item.img}
                      alt={item.caption}
                      className="w-full h-auto object-cover"
                    />
                    <div className="p-3 sm:p-4">
                      <span className="text-xs sm:text-sm text-text/80 font-light leading-snug">
                        {item.caption}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 5. FAQ (ACCORDION) */}
        <section className="py-14 sm:py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            <div className="text-center mb-10 sm:mb-16">
              <Reveal>
                <span className="text-[11px] sm:text-xs font-sans font-semibold tracking-[0.18em] sm:tracking-[0.2em] text-accent uppercase block mb-2 sm:mb-3">
                  Dúvidas Frequentes
                </span>
                <h2 className="text-2xl sm:text-3.5xl md:text-4.5xl font-display font-normal text-text mb-2 sm:mb-4">
                  Perguntas e Respostas
                </h2>
              </Reveal>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {faqItems.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <Reveal key={idx} delay={idx * 0.03}>
                    <div className="border border-border rounded-xl bg-card overflow-hidden transition-colors">
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full text-left p-4 sm:p-6 flex items-center justify-between gap-3 sm:gap-4 cursor-pointer focus:outline-none min-h-[48px]"
                      >
                        <span className="font-display font-normal text-base sm:text-lg md:text-xl text-text leading-snug">
                          {item.q}
                        </span>
                        <ChevronDown 
                          className={`w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                          >
                            <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-0 text-text/85 text-xs sm:text-sm md:text-base font-light leading-relaxed border-t border-border/40 mt-1 sm:mt-2">
                              {item.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. OFERTA + ENTREGÁVEIS + CTA FINAL */}
        <section id="oferta" className="py-16 sm:py-24 md:py-32 bg-beige-light border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            <Reveal>
              <div className="bg-card border border-border p-5 sm:p-8 md:p-12 rounded-2xl shadow-sm text-center relative overflow-hidden">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-normal text-text mb-3 sm:mb-4">
                  O que você recebe ao entrar hoje
                </h2>

                <p className="text-text/80 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto mb-6 sm:mb-10">
                  A Jornada Propósito Pleno é sua, pra sempre, a partir de agora.
                </p>

                {/* Lista de Entregáveis */}
                <div className="text-left max-w-xl mx-auto bg-bg border border-border/80 p-4 sm:p-6 md:p-8 rounded-xl mb-6 sm:mb-10 space-y-3 sm:space-y-4">
                  <span className="text-[10px] sm:text-xs font-sans font-semibold tracking-widest text-olive uppercase block mb-2 sm:mb-4">
                    O que você vai receber:
                  </span>
                  {entregaveis.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 sm:gap-3">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-accent/15 text-accent flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
                      </div>
                      <span className="text-xs sm:text-sm md:text-base text-text/90 font-light leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Texto de Preço */}
                <div className="mb-6 sm:mb-10 max-w-xl mx-auto space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-center gap-3 sm:gap-4">
                    <span className="text-lg sm:text-xl md:text-2xl font-display text-text/40 line-through">
                      R$ 697
                    </span>
                    <span className="text-3xl sm:text-4xl md:text-5xl font-display font-normal text-accent">
                      R$ 97
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-sans text-olive font-medium">
                    Vagas limitadas a esse valor.
                  </p>
                  <p className="text-xs sm:text-sm md:text-base text-text/80 font-light leading-relaxed px-1">
                    Os 6 pilares, o caminho inteiro, por um pagamento único de R$97. Você entra uma vez, e esse caminho é seu pra sempre.
                  </p>
                </div>

                {/* Botão CTA Grande */}
                <a 
                  href="https://pay.hub.la/RBS2l0kJ8JIuPjA14Nr5"
                  className="w-full sm:w-auto min-h-[52px] sm:min-w-[320px] bg-accent hover:bg-accent-hover active:scale-[0.98] text-white font-medium py-4 sm:py-5 px-6 sm:px-10 rounded-xl shadow-md hover:shadow-lg transition-all text-base sm:text-lg md:text-xl inline-flex items-center justify-center gap-2 sm:gap-3 cursor-pointer text-center"
                >
                  <span>Quero começar minha Jornada</span>
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Seção de Fechamento com citação do Koichi */}
        <section className="py-12 sm:py-16 md:py-20 text-center border-t border-border bg-bg">
          <div className="container mx-auto px-4 sm:px-6 max-w-2xl">
            <Reveal>
              <blockquote className="text-lg sm:text-xl md:text-2.5xl font-display font-normal text-text leading-snug italic mb-4 sm:mb-6 px-2">
                "A Jornada não é pra todo mundo. Mas se você sente que nasceu pra algo maior... essa é a hora."
              </blockquote>

              <div className="space-y-1">
                <span className="text-sm sm:text-base font-serif font-semibold text-text block">
                  Guilherme Koichi
                </span>
              </div>
            </Reveal>
          </div>
        </section>

      </main>

      {/* Rodapé */}
      <footer className="py-8 sm:py-10 border-t border-border bg-bg">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <div>
            <span className="text-xs font-serif font-semibold tracking-widest text-text uppercase block">
              Jornada Propósito Pleno
            </span>
            <span className="text-[10px] sm:text-[11px] font-sans text-text/60 block mt-0.5">
              Acompanhamento e clareza para a sua caminhada.
            </span>
          </div>

          <p className="text-[10px] sm:text-[11px] font-sans text-text/50">
            &copy; 2026 Jornada Propósito Pleno • Todos os direitos reservados
          </p>
        </div>
      </footer>

    </div>
  );
}
