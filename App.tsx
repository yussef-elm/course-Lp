
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import Features from './components/Features';
import CourseOwner from './components/CourseOwner';
import Pricing from './components/Pricing';
import MarketGrowth from './components/MarketGrowth';
import Footer from './components/Footer';
import { translations } from './translations';

export type Language = 'en' | 'fr' | 'ar';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('fr');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const t = translations[lang];

  const languages: { code: Language; label: string }[] = [
    { code: 'fr', label: 'FR' },
    { code: 'en', label: 'EN' },
    { code: 'ar', label: 'AR' },
  ];

  return (
    <div className={`min-h-screen selection:bg-brand-pink selection:text-brand-dark bg-brand-dark transition-all duration-700 font-sans ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
      
      {/* Small Fixed Language Switcher - Top Right */}
      <div className={`fixed top-8 ${lang === 'ar' ? 'left-8' : 'right-8'} z-[100]`} ref={dropdownRef}>
        <div className="relative">
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg glass-card border-white/10 hover:border-brand-pink/40 transition-all duration-300"
          >
            <span className="text-[10px] font-black uppercase tracking-widest text-white">
              {lang}
            </span>
            <svg 
              className={`w-2.5 h-2.5 text-brand-pink transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} 
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <AnimatePresence>
            {isLangOpen && (
              <motion.div
                initial={{ opacity: 0, y: 5, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 5, scale: 0.95 }}
                className="absolute top-full mt-1 right-0 w-16 glass-card border-white/10 overflow-hidden rounded-lg shadow-2xl"
              >
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setIsLangOpen(false);
                    }}
                    className={`w-full px-3 py-2 text-center text-[9px] font-black uppercase tracking-widest transition-colors ${
                      lang === l.code 
                        ? 'bg-brand-pink text-brand-dark' 
                        : 'text-white/60 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <main>
        <Hero t={t.hero} lang={lang} />
        <ProblemSection t={t.problem} lang={lang} />
        <MarketGrowth t={t.market} lang={lang} />
        <Features t={t.features} lang={lang} />
        <CourseOwner t={t.owner} lang={lang} />
        <Pricing t={t.pricing} lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
};

export default App;
