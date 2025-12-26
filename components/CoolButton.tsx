
import React from 'react';
import { motion } from 'framer-motion';

interface CoolButtonProps {
  text: string;
  href?: string;
  className?: string;
  primary?: boolean;
}

const CoolButton: React.FC<CoolButtonProps> = ({ text, href = "#pricing", className = "", primary = true }) => {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05, y: -4 }}
      whileTap={{ scale: 0.95 }}
      initial={{ boxShadow: "0 0 0px rgba(255,158,237,0)" }}
      animate={{ 
        boxShadow: primary 
          ? ["0 0 20px rgba(255,255,255,0.1)", "0 0 40px rgba(255,255,255,0.2)", "0 0 20px rgba(255,255,255,0.1)"]
          : ["0 0 20px rgba(255,158,237,0.1)", "0 0 40px rgba(255,158,237,0.3)", "0 0 20px rgba(255,158,237,0.1)"]
      }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className={`group relative inline-flex items-center justify-center px-8 py-4 sm:px-14 sm:py-7 overflow-hidden font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-sm sm:text-lg transition-all duration-500 rounded-xl ${
        primary 
          ? 'bg-white text-brand-dark' 
          : 'bg-brand-pink text-brand-dark'
      } ${className}`}
    >
      {/* Animated Neon Border */}
      <div className="absolute inset-0 p-[2px] opacity-100 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-[-500%] bg-gradient-to-r from-brand-pink via-white to-brand-pink animate-spin-fast group-hover:animate-spin-ultra"></div>
      </div>

      <div className={`absolute inset-[2px] rounded-[10px] z-0 ${primary ? 'bg-white' : 'bg-brand-pink'} group-hover:bg-brand-dark transition-colors duration-500`}></div>

      <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
        {text}
      </span>
      
      {/* Flare/Glint Animation */}
      <motion.div
        animate={{ x: ['-150%', '300%'] }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "linear", repeatDelay: 1 }}
        className="absolute top-0 bottom-0 left-0 w-1/4 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[35deg] pointer-events-none z-20"
      />

      {/* Hover Pulse Ripple */}
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-brand-pink/20 animate-ping"></div>
      </div>

      <style>{`
        @keyframes spin-fast {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-fast {
          animation: spin-fast 6s linear infinite;
        }
        .animate-spin-ultra {
          animation: spin-fast 1.5s linear infinite;
        }
      `}</style>
    </motion.a>
  );
};

export default CoolButton;
