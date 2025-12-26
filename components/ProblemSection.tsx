
import React from 'react';
import { motion } from 'framer-motion';
import CoolButton from './CoolButton';

interface ProblemProps {
  t: any;
  lang: string;
}

const ProblemSection: React.FC<ProblemProps> = ({ t, lang }) => {
  const isAr = lang === 'ar';
  
  return (
    <section id="problem" className="py-24 md:py-40 bg-brand-dark border-t border-white/5 relative z-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className={`max-w-4xl mb-24 md:mb-32 ${isAr ? 'mr-auto text-right' : 'ml-0 text-left'}`}>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-pink text-xs font-black tracking-[0.5em] uppercase mb-8 block"
          >
            {t.tag}
          </motion.span>
          <h2 className={`font-black mb-12 leading-[0.9] uppercase text-white ${isAr ? 'text-4xl md:text-7xl' : 'text-4xl md:text-8xl'}`}>
            {t.title}
          </h2>
          <div className={`glass-card p-8 md:p-16 ${isAr ? 'border-r-4 border-r-brand-pink' : 'border-l-4 border-l-brand-pink'}`}>
            <p className="text-lg md:text-2xl text-white font-light leading-relaxed">
              {t.scare}
            </p>
          </div>
        </div>

        <div className={`grid lg:grid-cols-3 gap-8 md:gap-12 mb-24 ${isAr ? 'direction-rtl' : ''}`}>
          {t.reasons.map((item: any, idx: number) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`glass-card p-10 md:p-12 group hover:bg-white/[0.04] transition-all duration-700 ${isAr ? 'text-right' : 'text-left'}`}
            >
              <div className={`flex justify-between items-center mb-8 ${isAr ? 'flex-row-reverse' : ''}`}>
                <span className="text-brand-pink text-[10px] font-black tracking-[0.4em] uppercase">0{idx + 1}</span>
              </div>
              <h4 className="text-2xl md:text-3xl font-black uppercase mb-6 tracking-tight text-white">{item.title}</h4>
              <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <CoolButton text={t.cta} primary={false} />
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
