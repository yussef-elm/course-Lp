
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FeaturesProps {
  t: any;
  lang: string;
}

const Features: React.FC<FeaturesProps> = ({ t, lang }) => {
  const [activePhase, setActivePhase] = useState<number>(0);
  const isAr = lang === 'ar';

  const images = [
    "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <section id="system" className="py-24 md:py-40 bg-brand-dark relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24 md:mb-32">
          <motion.h2 
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
            className="text-brand-pink text-xs font-black uppercase mb-8"
          >
            {t.tag}
          </motion.h2>
          <h3 className={`font-black mb-10 leading-none uppercase text-white ${isAr ? 'text-4xl md:text-7xl' : 'text-4xl md:text-8xl'}`}>
            {t.title} <br /><span className="text-outline text-white/10 uppercase">{t.sub}</span>
          </h3>
        </div>

        <div className="max-w-6xl mx-auto relative mb-24">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/5 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-16 md:space-y-24 relative">
            {t.modules.map((mod: any, idx: number) => {
              const isActive = activePhase === idx;
              const isEven = idx % 2 === 0;

              return (
                <div key={idx} className="relative">
                  {/* Indicator Node */}
                  <div 
                    onClick={() => setActivePhase(idx)}
                    className={`absolute left-4 md:left-1/2 top-0 -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full z-30 cursor-pointer border-2 transition-all duration-700 flex items-center justify-center ${
                      isActive ? 'bg-brand-pink border-brand-pink shadow-[0_0_30px_rgba(255,158,237,0.5)]' : 'bg-brand-dark border-white/20'
                    }`}
                  >
                    <span className={`text-[10px] font-black ${isActive ? 'text-brand-dark' : 'text-white/40'}`}>{idx + 1}</span>
                  </div>

                  <div className={`flex flex-col md:flex-row items-start ${isEven ? (isAr ? 'md:flex-row' : 'md:flex-row-reverse') : (isAr ? 'md:flex-row-reverse' : 'md:flex-row')}`}>
                    <div className="hidden md:block w-1/2"></div>
                    
                    <motion.div 
                      layout
                      onClick={() => setActivePhase(idx)}
                      className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? (isAr ? 'md:pl-16' : 'md:pr-16') : (isAr ? 'md:pr-16' : 'md:pl-16')} cursor-pointer group`}
                    >
                      <motion.div className={`glass-card p-1 transition-all duration-700 ${isActive ? 'border-brand-pink/40' : 'hover:border-white/10'}`}>
                        <div className={`bg-brand-dark/40 p-8 md:p-14 relative overflow-hidden ${isAr ? 'text-right' : 'text-left'}`}>
                          <h4 className={`text-2xl md:text-4xl font-black mb-6 transition-all duration-500 uppercase ${isActive ? 'text-white' : 'text-white/30 group-hover:text-white/60'}`}>
                            {mod.title}
                          </h4>
                          <AnimatePresence mode='wait'>
                            {isActive && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                              >
                                <div className="space-y-8">
                                  <p className={`text-gray-400 font-light leading-relaxed text-base md:text-lg italic ${isAr ? 'border-r-2 border-brand-pink/30 pr-8' : 'border-l-2 border-brand-pink/30 pl-8'}`}>
                                    "{mod.desc}"
                                  </p>
                                  <img src={images[idx]} className="grayscale opacity-50 h-32 md:h-48 w-full object-cover rounded-lg" />
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
