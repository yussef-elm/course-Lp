
import React from 'react';
import CoolButton from './CoolButton';

interface OwnerProps {
  t: any;
  lang: string;
}

const CourseOwner: React.FC<OwnerProps> = ({ t, lang }) => {
  const isAr = lang === 'ar';
  
  return (
    <section id="owner" className="py-24 md:py-40 bg-brand-dark overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className={`flex flex-col lg:flex-row items-center gap-16 md:gap-20 ${isAr ? 'lg:flex-row-reverse' : ''}`}>
          <div className="lg:w-1/2 relative w-full">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] md:rounded-[4rem] glass-card p-2">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1000" 
                alt="Owner" 
                className="w-full h-full object-cover grayscale brightness-75"
              />
            </div>
            <div className={`absolute -bottom-6 md:-bottom-10 w-32 h-32 md:w-48 md:h-48 bg-brand-pink rounded-full flex flex-col items-center justify-center text-brand-dark shadow-[0_0_50px_rgba(255,158,237,0.3)] rotate-12 ${isAr ? '-left-6 md:-left-10' : '-right-6 md:-right-10'}`}>
               <span className="text-3xl md:text-4xl font-black tracking-tighter">25+</span>
               <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest">{isAr ? 'مركز تم تطويره' : 'Centers Scaled'}</span>
            </div>
          </div>
          
          <div className={`lg:w-1/2 space-y-10 text-center ${isAr ? 'lg:text-right' : 'lg:text-left'}`}>
            <span className="text-brand-pink text-xs font-black tracking-[0.6em] uppercase">{t.tag}</span>
            <h3 className={`font-black mb-8 leading-[0.9] uppercase text-white ${isAr ? 'text-4xl md:text-6xl' : 'text-4xl md:text-7xl'}`}>{t.title}</h3>
            
            <div className={`space-y-8 text-gray-400 font-light text-lg leading-relaxed`}>
              <p className={`italic border-brand-pink/20 ${isAr ? 'border-r-2 pr-0 lg:pr-8' : 'border-l-2 pl-0 lg:pl-8'}`}>
                {t.desc}
              </p>
            </div>

            <CoolButton text={t.cta} primary={false} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseOwner;
