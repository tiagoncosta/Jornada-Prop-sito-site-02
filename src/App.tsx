/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Clock, ArrowRight, Check, ShieldCheck } from 'lucide-react';

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

  // Countdown timer state to 05/10/2026 00:00 (Brasilia UTC-3)
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

  const provaSocialCards = [
    {
      title: 'CONTEÚDO DIRETO AO PONTO',
      desc: 'Vídeos objetivos e organizados para ajudar você a avançar sem se perder no caminho.',
      caption: 'Conteúdo em vídeo, direto ao ponto',
      img: '/prova-social-capa-membros.webp',
      width: 560,
      height: 286
    },
    {
      title: '6 PILARES. 17 SEMANAS.',
      desc: 'Uma jornada estruturada para desenvolver clareza e construir uma nova direção.',
      caption: '6 pilares, 17 semanas de jornada',
      img: '/prova-social-galeria-modulos.webp',
      width: 560,
      height: 286
    },
    {
      title: 'ACOMPANHE SUA EVOLUÇÃO',
      desc: 'Visualize seu progresso e perceba como cada etapa se conecta à próxima.',
      caption: 'Acompanhe seu progresso semana a semana',
      img: '/prova-social-lista-progresso.webp',
      width: 560,
      height: 283
    },
    {
      title: 'COMUNIDADE E TROCA REAL',
      desc: 'Uma comunidade exclusiva no WhatsApp com pessoas que compartilham da mesma busca.',
      caption: 'Uma comunidade real de quem está vivendo a jornada',
      img: '/prova-social-whatsapp.webp',
      width: 560,
      height: 423
    }
  ];

  const problemas = [
    {
      roman: 'I',
      title: 'Você já tentou mudar sozinho',
      desc: 'Motivação forte na primeira semana, e depois nada pra sustentar. Não falta vontade, falta um caminho.'
    },
    {
      roman: 'II',
      title: 'Sua fé fica num compartimento separado',
      desc: 'Você sabe o que a Bíblia diz, mas ela nunca chega no seu trabalho, no seu relacionamento, no seu dinheiro.'
    },
    {
      roman: 'III',
      title: 'Conteúdo solto, sem ordem',
      desc: 'Você já consumiu conteúdo cristão sobre isso, mas nunca em sequência, nunca formando um caminho de verdade.'
    }
  ];

  const passosComoFunciona = [
    {
      step: '01',
      title: 'Comece pelo Pilar 1',
      desc: 'A Jornada segue uma ordem definida, um pilar de cada vez. Você não decide o que vem depois, só segue o caminho.'
    },
    {
      step: '02',
      title: 'Assista o devocional do dia',
      desc: 'Vídeo curto, direto ao ponto, dentro da área de membros.'
    },
    {
      step: '03',
      title: 'Aplique com o material de apoio',
      desc: 'O ebook de cada módulo ajuda a levar aquilo pra prática real, antes de seguir pro próximo.'
    }
  ];

  const scrollToNextSection = () => {
    const el = document.getElementById('proxima-secao');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className="min-h-screen bg-bg text-text selection:bg-accent/20 selection:text-text font-sans flex flex-col justify-between antialiased overflow-x-hidden">
      
      {/* 0. HEADER EDITORIAL MINIMALISTA */}
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

      <main className="flex-1">

        {/* 1. HERO SECTION REDESENHADA: EDITORIAL, EQUILIBRADA, PRIMEIRA DOBRA RICA */}
        <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 relative overflow-hidden isolate border-b border-text/8">
          
          {/* Elemento Conceitual Sutil no Fundo: Linha Contínua Representando o Caminho */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
            <svg 
              className="absolute w-[1200px] h-[600px] left-1/2 -translate-x-1/2 top-0 opacity-[0.06] text-accent" 
              viewBox="0 0 1200 600" 
              fill="none"
            >
              <path 
                d="M50,120 C320,180 480,40 680,180 C880,320 1020,140 1150,220" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeDasharray="4 6"
              />
              <path 
                d="M100,280 C360,220 540,360 760,260 C980,160 1060,340 1180,310" 
                stroke="currentColor" 
                strokeWidth="1" 
              />
            </svg>
          </div>

          <div className="container mx-auto px-5 sm:px-8 max-w-4xl relative z-10 text-center">
            <Reveal>

              {/* Headline em Tamanho Editorial Harmonioso */}
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

            </Reveal>
          </div>
        </section>

        {/* 2. COUNTDOWN BANNER EM CARD EDITORIAL SUTIL */}
        <section id="proxima-secao" className="py-10 sm:py-14 bg-bg-alt/60 border-b border-text/8 relative scroll-mt-16 sm:scroll-mt-18">
          <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
            <div className="bg-card border border-text/10 rounded-sm p-6 sm:p-8 md:p-9 text-center shadow-xs relative">
              
              {/* Badge Superior em Destaque Terroso */}
              <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.22em] text-accent uppercase mb-3">
                <Clock className="w-3.5 h-3.5 shrink-0 text-accent" />
                <span>PRÓXIMA ATUALIZAÇÃO</span>
              </div>

              <h2 className="text-lg sm:text-xl md:text-2.5xl font-serif font-normal text-text mb-5 px-1 leading-snug">
                O Pilar 6 - Multiplique seus Talentos - chega em:
              </h2>

              {/* Relógio Regressivo em Bloco Editorial Segmentado */}
              <div className="border border-text/12 rounded-sm grid grid-cols-4 max-w-md mx-auto mb-4 bg-bg-light/90 overflow-hidden">
                <div className="py-3 px-1 sm:py-3.5 text-center">
                  <span className="block text-2xl sm:text-3xl md:text-3.5xl font-serif font-normal text-text leading-none">
                    {formatNumber(timeLeft.days)}
                  </span>
                  <span className="block text-[10px] font-sans text-olive uppercase tracking-widest mt-1.5 font-medium">
                    Dias
                  </span>
                </div>
                <div className="py-3 px-1 sm:py-3.5 text-center border-l border-text/10">
                  <span className="block text-2xl sm:text-3xl md:text-3.5xl font-serif font-normal text-text leading-none">
                    {formatNumber(timeLeft.hours)}
                  </span>
                  <span className="block text-[10px] font-sans text-olive uppercase tracking-widest mt-1.5 font-medium">
                    Horas
                  </span>
                </div>
                <div className="py-3 px-1 sm:py-3.5 text-center border-l border-text/10">
                  <span className="block text-2xl sm:text-3xl md:text-3.5xl font-serif font-normal text-text leading-none">
                    {formatNumber(timeLeft.minutes)}
                  </span>
                  <span className="block text-[10px] font-sans text-olive uppercase tracking-widest mt-1.5 font-medium">
                    Min
                  </span>
                </div>
                <div className="py-3 px-1 sm:py-3.5 text-center border-l border-text/10">
                  <span className="block text-2xl sm:text-3xl md:text-3.5xl font-serif font-normal text-text leading-none">
                    {formatNumber(timeLeft.seconds)}
                  </span>
                  <span className="block text-[10px] font-sans text-olive uppercase tracking-widest mt-1.5 font-medium">
                    Seg
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm font-sans text-olive font-normal">
                Compre agora e receba essa atualização de graça quando lançar.
              </p>
            </div>
          </div>
        </section>

        {/* 3. POR DENTRO DA JORNADA: ESTRUTURA EDITORIAL PREMIUM COM SCREENSHOTS */}
        <section className="py-14 sm:py-20 bg-bg border-b border-text/8">
          <div className="container mx-auto px-5 sm:px-8 max-w-6xl">
            
            <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
              <span className="text-[11px] font-sans font-medium tracking-[0.24em] text-accent uppercase block mb-2">
                POR DENTRO DA JORNADA
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-text mb-3">
                O que você encontra lá dentro
              </h2>
              <p className="text-xs sm:text-sm md:text-base font-sans text-olive font-normal leading-relaxed">
                Cada elemento da plataforma foi desenhado para criar uma experiência de estudo contínua, sem atritos ou distrações.
              </p>
            </div>

            {/* Grid Editorial com Todas as Pranchas Visíveis no Desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {provaSocialCards.map((card, idx) => (
                <Reveal key={idx} delay={idx * 0.08}>
                  <div className="h-full bg-card border border-text/10 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-accent/40 group">
                    
                    {/* Moldura da Imagem com Aspect Ratio Preciso */}
                    <div className="relative aspect-[16/10] bg-bg-alt/50 overflow-hidden border-b border-text/8">
                      <img
                        src={card.img}
                        alt={card.caption}
                        width={card.width}
                        height={card.height}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>

                    {/* Bloco de Conteúdo Textual */}
                    <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Título do Card */}
                        <h3 className="text-sm font-sans font-semibold tracking-wide text-text uppercase mb-2 leading-snug">
                          {card.title}
                        </h3>

                        {/* Pequena Descrição Explicando o Benefício */}
                        <p className="text-xs sm:text-sm font-sans text-olive font-normal leading-relaxed">
                          {card.desc}
                        </p>
                      </div>
                    </div>

                  </div>
                </Reveal>
              ))}
            </div>

          </div>
        </section>

        {/* 4. O QUE TRAVA VOCÊ (PROBLEMAS) COM TRATAMENTO EDITORIAL EM COLUNAS */}
        <section className="py-14 sm:py-20 bg-bg-alt/40 border-b border-text/8">
          <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
            <Reveal>
              <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
                <span className="text-[11px] font-sans font-medium tracking-[0.24em] text-accent uppercase block mb-2">
                  O QUE TRAVA VOCÊ
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-text mb-3">
                  Por que muita gente começa e nunca chega lá
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {problemas.map((item, idx) => (
                <Reveal key={idx} delay={idx * 0.1}>
                  <div className="h-full bg-card border border-text/10 p-6 sm:p-7 rounded-sm flex flex-col justify-between relative">
                    <div>
                      {/* Marcador Romano Editorial */}
                      <span className="block font-serif text-2xl sm:text-3xl text-accent mb-4 font-normal">
                        {item.roman}
                      </span>
                      <h3 className="text-base sm:text-lg font-serif font-normal text-text mb-2.5 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-sans text-olive font-normal leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 5. OS 5 PILARES QUE JÁ ESTÃO DE PÉ + 6º PILAR INTEGRADO */}
        <section className="py-14 sm:py-20 bg-bg border-b border-text/8">
          <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
            
            <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
              <span className="text-[11px] font-sans font-medium tracking-[0.24em] text-accent uppercase block mb-2">
                DISPONÍVEL AGORA
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-text">
                Os 5 pilares que já estão de pé
              </h2>
            </div>

            {/* Grid dos 5 Pilares com Tipografia de Alto Contraste */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 sm:mb-10">
              {pilares.map((pilar, idx) => (
                <div 
                  key={idx} 
                  className={`border border-text/10 bg-card p-6 sm:p-7 rounded-sm shadow-2xs hover:border-accent/30 transition-all flex flex-col justify-between ${
                    idx === 4 ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  <div>
                    <span className="block text-3xl sm:text-4xl font-serif font-normal text-accent mb-3 select-none leading-none">
                      {pilar.num}
                    </span>

                    <h3 className="text-base sm:text-lg font-serif font-normal text-text mb-2.5 leading-snug">
                      {pilar.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-sans text-olive font-normal leading-relaxed">
                      {pilar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* 6º Pilar: Card Editorial com Badge de Prévia e Cores Alinhadas */}
            <div className="max-w-3xl mx-auto bg-card border border-text/10 p-6 sm:p-8 md:p-10 rounded-sm relative overflow-hidden">
              <div className="relative z-10">
                <div className="inline-flex items-center text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.22em] text-accent uppercase bg-accent/10 px-3.5 py-1.5 rounded-sm mb-3.5">
                  <span>CHEGANDO EM OUTUBRO</span>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-normal text-text mb-3 leading-snug">
                  O 6º pilar: Multiplique seus Talentos
                </h3>

                <div className="text-xs sm:text-sm md:text-base font-sans text-olive font-normal leading-relaxed">
                  <p>
                    Crescimento intelectual, autoconhecimento e finanças caminhando juntos, fechando o ciclo: até o seu dinheiro alinhado com quem você é. Três semanas que respondem uma pergunta que a Jornada ainda não tinha respondido - o que fazer com tudo que você já reconstruiu até aqui.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 6. COMO FUNCIONA: CAMINHO PROGRESSIVO CONECTADO */}
        <section id="como-funciona" className="py-14 sm:py-20 bg-bg-alt/50 border-b border-text/8">
          <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
            <Reveal>
              <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-text">
                  Como funciona
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {passosComoFunciona.map((item, idx) => (
                <Reveal key={idx} delay={idx * 0.1}>
                  <div className="h-full border border-text/10 bg-card p-6 sm:p-7 rounded-sm flex flex-col justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-serif font-normal text-text mb-2.5 leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm font-sans text-olive font-normal leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 7. PERGUNTAS E RESPOSTAS COM LINHAS EDITORIAIS LIMPAS */}
        <section className="py-14 sm:py-20 bg-bg border-b border-text/8">
          <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
            
            <div className="text-center mb-10 sm:mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-text">
                Dúvidas Frequentes
              </h2>
            </div>

            <div className="border-t border-text/12">
              {faqItems.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div 
                    key={idx} 
                    className="border-b border-text/12 transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left py-4 sm:py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none group"
                    >
                      <span className="font-serif text-base sm:text-lg text-text leading-snug flex-1 group-hover:text-accent transition-colors">
                        {item.q}
                      </span>
                      <div className="w-6 h-6 flex items-center justify-center shrink-0 text-accent">
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isOpen ? 'rotate-180 text-text' : 'text-accent'
                          }`} 
                        />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="pb-5 pt-1 text-olive text-xs sm:text-sm font-sans font-normal leading-relaxed pr-6">
                            {item.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 8. OFERTA + ENTREGÁVEIS + CTA COM DESIGN EDITORIAL CLÁSSICO */}
        <section id="oferta" className="py-16 sm:py-24 bg-bg-alt/40 relative overflow-hidden isolate border-b border-text/8">
          <div className="container mx-auto px-5 sm:px-8 max-w-2xl relative z-10">
            <div className="bg-card border border-text/12 p-7 sm:p-10 md:p-12 text-center rounded-sm shadow-sm relative">
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-text mb-7 sm:mb-8 leading-tight">
                O que você recebe ao entrar hoje
              </h2>

              {/* Lista de Entregáveis em Moldura Delicada */}
              <div className="text-left max-w-lg mx-auto bg-bg-light border border-text/10 p-5 sm:p-7 rounded-sm mb-7 sm:mb-8 space-y-3.5">
                <span className="text-[10px] font-sans font-semibold tracking-[0.2em] text-olive uppercase block mb-3">
                  O que você vai receber:
                </span>
                {entregaveis.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-accent text-[#F8F6F2] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </div>
                    <span className="text-xs sm:text-sm text-text font-sans font-normal leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bloco de Preço com Tipografia Editorial */}
              <div className="mb-7 sm:mb-8 max-w-lg mx-auto space-y-1.5">
                <div className="flex items-baseline justify-center gap-3">
                  <span className="text-base sm:text-lg font-serif text-olive/60 line-through">
                    R$ 697
                  </span>
                  <span className="text-3.5xl sm:text-4xl md:text-5xl font-serif font-normal text-text">
                    R$ 97
                  </span>
                </div>
                <p className="text-xs font-sans text-olive font-normal">
                  Cada semana adiando é uma semana a mais no mesmo lugar.
                </p>
              </div>

              {/* Botão CTA Principal com Máxima Clareza */}
              <a 
                href="https://pay.hub.la/RBS2l0kJ8JIuPjA14Nr5"
                className="w-full sm:w-auto min-h-[48px] sm:min-w-[300px] bg-text hover:bg-text/90 active:scale-[0.98] text-[#F8F6F2] font-sans font-medium py-3.5 sm:py-4 px-8 rounded-sm shadow-sm hover:shadow transition-all duration-200 text-xs sm:text-sm tracking-wider uppercase inline-flex items-center justify-center gap-2.5 cursor-pointer text-center"
              >
                <span>Quero começar minha Jornada</span>
                <ArrowRight className="w-4 h-4 text-[#F8F6F2]/80" />
              </a>

              {/* Indicador de Garantia e Pagamento Seguro */}
              <div className="mt-5 text-[11px] font-sans text-olive/70 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                <span>Garantia incondicional de 7 dias • Pagamento seguro via Hubla</span>
              </div>

            </div>
          </div>
        </section>

        {/* 9. FECHAMENTO COM CITAÇÃO EM ESTILO EDITORIAL */}
        <section className="py-14 sm:py-18 bg-bg text-center border-b border-text/8">
          <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
            <blockquote className="text-lg sm:text-xl md:text-2xl font-serif font-normal text-text leading-relaxed italic mb-4">
              "A Jornada não é pra todo mundo. Mas se você sente que nasceu pra algo maior... essa é a hora."
            </blockquote>

            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-sans text-olive">
              <span className="w-6 h-[1px] bg-accent/60" />
              <span className="font-medium tracking-wide uppercase">Guilherme Koichi</span>
              <span className="w-6 h-[1px] bg-accent/60" />
            </div>
          </div>
        </section>

      </main>

      {/* 10. RODAPÉ EDITORIAL MINIMALISTA */}
      <footer className="py-8 sm:py-10 bg-bg-alt/30">
        <div className="container mx-auto px-5 sm:px-8 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <span className="text-xs font-serif font-semibold tracking-[0.2em] text-text uppercase block">
              Jornada Propósito Pleno
            </span>
            <span className="text-[11px] font-sans text-olive block mt-0.5">
              Acompanhamento e clareza para a sua caminhada.
            </span>
          </div>

          <p className="text-[11px] font-sans text-olive/70">
            &copy; 2026 Jornada Propósito Pleno • Todos os direitos reservados
          </p>
        </div>
      </footer>

    </div>
  );
}
