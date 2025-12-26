
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CoolButton from './CoolButton';

interface HeroProps {
  t: any;
  lang: string;
}

const Hero: React.FC<HeroProps> = ({ t, lang }) => {
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const isAr = lang === 'ar';

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + i * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-brand-dark px-6 pt-20">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{ backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-brand-pink rounded-full blur-[150px]"
        />
      </div>

      <div className="container relative z-20 mx-auto flex flex-col items-center lg:items-start">
        {/* LOGO AREA */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8 lg:mb-12"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 md:w-16 md:h-16">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_15px_rgba(255,158,237,0.4)]">
                <path d="M20 15 L80 15 L80 30 L40 30 L60 50 L20 50 Z" fill="#ff9eed" />
                <path d="M10 60 L60 60 L85 85 L15 85 Z" fill="white" />
              </svg>
            </div>
            <span className="text-white font-black tracking-[0.4em] text-[10px] md:text-xs opacity-50 uppercase">Sbitis Acquisition</span>
          </div>
        </motion.div>

        <div className={`flex flex-col lg:flex-row items-center gap-12 w-full ${isAr ? 'lg:flex-row-reverse' : ''}`}>
          <div className={`max-w-5xl flex-1 text-center ${isAr ? 'lg:text-right' : 'lg:text-left'}`}>
            <motion.p 
              custom={0} initial="hidden" animate="visible" variants={titleVariants}
              className="text-brand-pink text-xs md:text-sm font-black uppercase tracking-[0.5em] mb-6 block"
            >
              {t.tagline}
            </motion.p>
            
            <motion.h1 
              custom={1} initial="hidden" animate="visible" variants={titleVariants}
              className={`font-black leading-[0.85] tracking-tighter mb-10 uppercase text-white ${isAr ? 'text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem]' : 'text-5xl sm:text-7xl md:text-8xl lg:text-[10rem]'}`}
            >
              {t.title1} <br />
              <span className="text-outline-strong text-white/5">{t.title2}</span>
            </motion.h1>

            <motion.div 
              custom={2} initial="hidden" animate="visible" variants={titleVariants}
              className={`text-lg md:text-2xl text-gray-400 max-w-3xl mb-14 font-light leading-relaxed uppercase tracking-[0.1em] mx-auto lg:mx-0 border-brand-pink/30 ${isAr ? 'border-r-2 pr-8 lg:text-right' : 'border-l-2 pl-8 lg:text-left'}`}
            >
              {t.sub}
            </motion.div>

            <motion.div 
              custom={3} initial="hidden" animate="visible" variants={titleVariants}
              className={`flex flex-col sm:flex-row items-center gap-8 justify-center ${isAr ? 'lg:justify-end' : 'lg:justify-start'}`}
            >
              <CoolButton text={t.cta} className="shadow-[0_0_100px_rgba(255,158,237,0.2)]" />
              <div className="flex flex-col items-start gap-1">
                <div className="flex items-center gap-3 text-[10px] font-bold tracking-[0.4em] uppercase text-white/30">
                  <span className="w-8 h-[1px] bg-white/20"></span>
                  {t.status}
                </div>
              </div>
            </motion.div>
          </div>

          {/* OWNER IMAGE */}
          <motion.div 
            style={{ y: yImage, opacity }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 0.8, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full lg:w-[500px] aspect-[4/5] rounded-[2rem] lg:rounded-[4rem] overflow-hidden group border border-white/10 shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200" 
              alt="Owners" 
              className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
               <div className={`bg-brand-dark/60 backdrop-blur-xl p-8 rounded-3xl border border-white/10 ${isAr ? 'text-right' : 'text-left'}`}>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-pink mb-2">{isAr ? 'نتائج مثبتة' : 'Proven Results'}</p>
                  <p className="text-white text-sm md:text-base font-bold uppercase tracking-widest leading-snug">{isAr ? 'السيستيم الوحيد المصمم من طرف أصحاب المراكز، لأصحاب المراكز.' : 'The only system built by medspa owners, for owners.'}</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .text-outline-strong {
          -webkit-text-stroke: 2px rgba(255, 255, 255, 0.3);
          color: transparent;
        }
      `}</style>
    </section>
  );
};

export default Hero;
