import React, { useState, useEffect } from 'react';

export default function PilaresSection() {
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

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, '0');
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

  return (
    <section className="py-14 sm:py-20 bg-bg/85 border-b border-text/8 relative">
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

            {/* Contador Regressivo Integrado */}
            <div className="mt-6 pt-6 border-t border-text/10">
              <p className="text-[11px] font-sans font-medium tracking-[0.2em] text-accent uppercase mb-3">
                Chega em:
              </p>
              
              <div className="border border-text/12 rounded-sm grid grid-cols-4 max-w-md mx-auto mb-3 bg-bg-light/90 overflow-hidden">
                <div className="py-2.5 px-1 sm:py-3 text-center">
                  <span className="block text-xl sm:text-2xl md:text-3xl font-serif font-normal text-text leading-none">
                    {formatNumber(timeLeft.days)}
                  </span>
                  <span className="block text-[10px] font-sans text-olive uppercase tracking-widest mt-1.5 font-medium">
                    Dias
                  </span>
                </div>
                <div className="py-2.5 px-1 sm:py-3 text-center border-l border-text/10">
                  <span className="block text-xl sm:text-2xl md:text-3xl font-serif font-normal text-text leading-none">
                    {formatNumber(timeLeft.hours)}
                  </span>
                  <span className="block text-[10px] font-sans text-olive uppercase tracking-widest mt-1.5 font-medium">
                    Horas
                  </span>
                </div>
                <div className="py-2.5 px-1 sm:py-3 text-center border-l border-text/10">
                  <span className="block text-xl sm:text-2xl md:text-3xl font-serif font-normal text-text leading-none">
                    {formatNumber(timeLeft.minutes)}
                  </span>
                  <span className="block text-[10px] font-sans text-olive uppercase tracking-widest mt-1.5 font-medium">
                    Min
                  </span>
                </div>
                <div className="py-2.5 px-1 sm:py-3 text-center border-l border-text/10">
                  <span className="block text-xl sm:text-2xl md:text-3xl font-serif font-normal text-text leading-none">
                    {formatNumber(timeLeft.seconds)}
                  </span>
                  <span className="block text-[10px] font-sans text-olive uppercase tracking-widest mt-1.5 font-medium">
                    Seg
                  </span>
                </div>
              </div>

              <p className="text-xs font-sans text-olive mt-3">
                Compre agora e receba essa atualização de graça quando lançar.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
