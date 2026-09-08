import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export default function CountdownSection() {
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

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, '0');
  };

  return (
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
  );
}
