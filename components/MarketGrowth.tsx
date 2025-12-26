
import React from 'react';
import { motion } from 'framer-motion';

interface MarketGrowthProps {
  t: any;
  lang: string;
}

const MarketGrowth: React.FC<MarketGrowthProps> = ({ t, lang }) => {
  const isAr = lang === 'ar';
  
  return (
    <section className="py-24 md:py-40 bg-brand-dark border-t border-white/5 relative overflow-hidden">
      {/* Visual Ambience */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-pink/5 blur-[120px] pointer-events-none opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-4xl mb-24 ${isAr ? 'mr-auto text-right' : 'ml-0 text-left'}`}>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-pink text-xs font-black tracking-[0.5em] uppercase mb-8 block"
          >
            {t.tag}
          </motion.span>
          <h2 className={`font-black mb-12 leading-[0.9] uppercase text-white ${isAr ? 'text-4xl md:text-7xl' : 'text-5xl md:text-8xl'}`}>
            {t.title} <br />
            <span className="text-brand-pink">{t.title2}</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl">
            {t.desc}
          </p>
        </div>

        {/* Impact Stats Grid */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-32 ${isAr ? 'direction-rtl' : ''}`}>
          {t.stats.map((stat: any, idx: number) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-10 text-center flex flex-col items-center justify-center border-white/5 hover:border-brand-pink/20 transition-colors"
            >
              <span className="text-4xl md:text-6xl font-black text-brand-pink mb-4">{stat.value}</span>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-gray-500">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Calculation Logic Box */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/[0.02] border border-white/5 p-8 md:p-20 rounded-[3rem] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className={`flex flex-col lg:flex-row items-center gap-16 relative z-10 ${isAr ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`lg:w-1/2 ${isAr ? 'text-right' : 'text-left'}`}>
                <h4 className="text-3xl md:text-5xl font-black mb-8 text-white uppercase">{t.mathTitle}</h4>
                <p className={`text-lg md:text-xl text-gray-400 font-light leading-relaxed italic border-brand-pink/40 ${isAr ? 'border-r-2 pr-8' : 'border-l-2 pl-8'}`}>
                  "{t.mathDesc}"
                </p>
              </div>
              
              <div className="lg:w-1/2 w-full">
                <div className="grid grid-cols-1 gap-6">
                  <div className={`flex items-center justify-between p-8 bg-brand-dark/50 rounded-2xl border border-white/5 ${isAr ? 'flex-row-reverse' : ''}`}>
                    <span className="text-xs font-black tracking-widest text-gray-500 uppercase">{isAr ? 'الزبناء المحتملين' : 'Input Leads'}</span>
                    <span className="text-3xl font-black text-white">78,000+</span>
                  </div>
                  <div className="flex items-center justify-center p-2">
                    <svg className="w-8 h-8 text-brand-pink animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                  </div>
                  <div className={`flex items-center justify-between p-8 bg-brand-pink/10 rounded-2xl border border-brand-pink/20 ${isAr ? 'flex-row-reverse' : ''}`}>
                    <span className="text-xs font-black tracking-widest text-brand-pink uppercase">{isAr ? 'مبيعات محققة' : 'Concretizations'}</span>
                    <span className="text-4xl font-black text-white">7,637</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketGrowth;
