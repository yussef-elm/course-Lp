
import React from 'react';

interface FooterProps {
  lang: string;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  return (
    <footer className="py-32 bg-brand-dark border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 mb-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
             <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M10 5 L60 5 L60 20 L25 20 L40 35 L10 35 Z" fill="#ff9eed" />
                <path d="M0 45 L40 45 L55 60 L55 80 L15 80 L0 65 Z" fill="white" />
             </svg>
          </div>
          
          <h4 className="text-2xl font-black uppercase tracking-tighter mb-8 italic">
            {isAr ? 'امتلك محركك الخاص.' : 'OWN THE ENGINE.'}
          </h4>
          
          <div className={`flex flex-wrap justify-center gap-12 text-xs font-bold tracking-[0.3em] uppercase text-gray-500 mb-20 ${isAr ? 'flex-row-reverse' : ''}`}>
            <a href="#" className="hover:text-white transition-colors">{isAr ? 'البيان' : 'Manifesto'}</a>
            <a href="#" className="hover:text-white transition-colors">{isAr ? 'البروتوكول' : 'The Protocol'}</a>
            <a href="#" className="hover:text-white transition-colors">{isAr ? 'الدليل' : 'Proof'}</a>
            <a href="#" className="hover:text-white transition-colors">{isAr ? 'السيادة' : 'Sovereignty'}</a>
          </div>
          
          <div className={`w-full pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 tracking-[0.2em] uppercase ${isAr ? 'md:flex-row-reverse' : ''}`}>
            <p>{isAr ? '© 2024 SBITIS ACQUISITION. ممنوع دخول الوكالات.' : '© 2024 SBITIS ACQUISITION. NO AGENCIES ALLOWED.'}</p>
            <div className={`flex space-x-12 mt-6 md:mt-0 ${isAr ? 'space-x-reverse' : ''}`}>
              <a href="#" className="hover:text-white transition-colors">{isAr ? 'بروتوكول الخصوصية' : 'Privacy Protocol'}</a>
              <a href="#" className="hover:text-white transition-colors">{isAr ? 'شروط القيادة' : 'Terms of Command'}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
