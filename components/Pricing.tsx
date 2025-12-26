
import React from 'react';
import CoolButton from './CoolButton';

interface PricingProps {
  t: any;
  lang: string;
}

const Pricing: React.FC<PricingProps> = ({ t, lang }) => {
  const isAr = lang === 'ar';
  
  return (
    <section id="pricing" className="py-24 md:py-40 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-pink/5 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto glass-card rounded-[2rem] md:rounded-[4rem] border-brand-pink/30 glow-pink overflow-hidden">
          <div className="bg-brand-dark/50 p-8 md:p-24">
            <div className="text-center mb-16">
              <h2 className="text-brand-pink text-xs font-black tracking-[0.4em] uppercase mb-8">{t.tag}</h2>
              <h3 className={`font-black mb-10 leading-[0.85] uppercase text-white ${isAr ? 'text-4xl md:text-7xl' : 'text-4xl md:text-8xl'}`}>{t.title}</h3>
            </div>
            
            <div className={`flex flex-col lg:flex-row justify-between items-center lg:items-start gap-16 md:gap-20 ${isAr ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2 space-y-8 w-full">
                <ul className={`space-y-6 ${isAr ? 'text-right' : 'text-left'}`}>
                  {t.bullets.map((item: string, i: number) => (
                    <li key={i} className={`flex items-center space-x-4 ${isAr ? 'space-x-reverse text-right flex-row-reverse' : 'text-left'}`}>
                      <div className="w-5 h-5 bg-brand-pink flex items-center justify-center text-brand-dark rounded-full shrink-0">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                      </div>
                      <span className="font-bold text-xs md:text-sm uppercase tracking-widest px-4">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="lg:w-1/2 w-full bg-white/[0.03] p-10 md:p-16 rounded-[2rem] md:rounded-[3rem] border border-white/10 text-center">
                <span className="text-gray-500 line-through text-2xl mb-2 block font-black">{t.original} MAD</span>
                <span className={`font-black text-white block mb-4 ${isAr ? 'text-6xl md:text-7xl' : 'text-6xl md:text-8xl'}`}>{t.price} <span className="text-2xl md:text-3xl align-middle uppercase">MAD</span></span>
                
                <div className="mt-12">
                   <CoolButton text={t.cta} className="w-full" />
                </div>
                
                <p className="text-[9px] md:text-[10px] text-gray-600 uppercase tracking-widest leading-relaxed font-bold mt-12">
                  {isAr ? '* الثمن يرتفع بـ 500 درهم كلما دخل 20 شخص جديد.' : '* Price increases by 500 MAD for every 20 new members.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
