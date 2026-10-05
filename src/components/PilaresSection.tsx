import React from 'react';

export default function PilaresSection() {
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
    },
    {
      num: '06',
      title: 'Multiplique seus Talentos',
      desc: 'crescimento intelectual, autoconhecimento e finanças. Depois de entender quem você é para Deus e levar isso para cada área da vida, a última etapa é aprender a multiplicar o que Ele colocou nas suas mãos.',
      isNew: true
    }
  ];

  return (
    <section className="py-14 sm:py-20 relative bg-transparent">
      <div className="container mx-auto px-5 sm:px-8 max-w-5xl relative z-10">
        
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
          <span className="text-[11px] font-sans font-medium tracking-[0.24em] text-accent uppercase block mb-2">
            DISPONÍVEL AGORA
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-text">
            Os 6 pilares da Jornada
          </h2>
        </div>

        {/* Grid dos 6 Pilares com Tipografia de Alto Contraste */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 sm:mb-10">
          {pilares.map((pilar, idx) => (
            <div 
              key={idx} 
              className="border border-accent/15 bg-card p-6 sm:p-7 rounded-sm shadow-2xs hover:border-gold/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="block text-3xl sm:text-4xl font-serif font-normal text-gold group-hover:text-accent transition-colors select-none leading-none">
                    {pilar.num}
                  </span>
                  {pilar.isNew && (
                    <span className="text-[10px] font-sans font-semibold tracking-wider text-accent bg-accent/10 border border-accent/25 px-2 py-0.5 rounded-xs uppercase">
                      Novo · já disponível
                    </span>
                  )}
                </div>

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

        {/* 6º Pilar: Card Atmosférico Crepuscular com a Iluminação da Imagem */}
        <div className="max-w-3xl mx-auto jornada-dusk-card border border-gold/30 p-6 sm:p-8 md:p-10 rounded-sm relative overflow-hidden shadow-lg">
          {/* Brilho da Aurora e do Azul Celeste nos cantos do card */}
          <div className="pointer-events-none absolute -top-12 -left-12 w-48 h-48 rounded-full bg-gold-light/25 blur-2xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-12 -right-12 w-52 h-52 rounded-full bg-azure-light/25 blur-2xl" aria-hidden="true" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.22em] text-gold-light uppercase bg-gold/15 border border-gold/30 px-3.5 py-1.5 rounded-sm mb-3.5">
              <span>Novo · já disponível</span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-normal text-[#FDFCFA] mb-3 leading-snug">
              Pilar 6: Multiplique seus Talentos
            </h3>

            <div className="text-xs sm:text-sm md:text-base font-sans text-[#E5E0D6] font-normal leading-relaxed">
              <p>
                Crescimento intelectual, autoconhecimento e finanças. Depois de entender quem você é para Deus e levar isso para cada área da vida, a última etapa é aprender a multiplicar o que Ele colocou nas suas mãos. Incluso na Jornada, sem custo extra.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
