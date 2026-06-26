import { motion } from 'motion/react';
import { ArrowUpRight, ChevronRight } from 'lucide-react';

interface BottomRightCornerProps {
  style?: any;
}

export default function BottomRightCorner({ style }: BottomRightCornerProps) {
  const handleScrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio-section');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      style={style}
      className="absolute bottom-0 right-0 p-3 pt-5 pl-8 sm:p-4 sm:pt-6 sm:pl-10 md:p-6 md:pt-8 md:pl-14 bg-[#faf9f6]/95 backdrop-blur-md rounded-tl-[1.5rem] sm:rounded-tl-[2rem] md:rounded-tl-[3.5rem] flex items-center gap-3 sm:gap-4 md:gap-6 z-20"
    >
      {/* CRITICAL corner masks to include inside this container */}
      {/* Top intersection mask */}
      <div className="absolute -top-[1.5rem] sm:-top-[2rem] md:-top-[3.5rem] right-0 w-[1.5rem] sm:w-[2rem] md:w-[3.5rem] h-[1.5rem] sm:h-[2rem] md:h-[3.5rem] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M56 56V0C56 30.9279 30.9279 56 0 56H56Z" fill="#faf9f6" />
        </svg>
      </div>

      {/* Left intersection mask */}
      <div className="absolute bottom-0 -left-[1.5rem] sm:-left-[2rem] md:-left-[3.5rem] w-[1.5rem] sm:w-[2rem] md:w-[3.5rem] h-[1.5rem] sm:h-[2rem] md:h-[3.5rem] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M56 56H0C30.9279 56 56 30.9279 56 0V56Z" fill="#faf9f6" />
        </svg>
      </div>

      {/* Circle Icon */}
      <div 
        onClick={handleScrollToPortfolio}
        className="bg-black/5 w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center border border-black/10 shrink-0 cursor-pointer hover:bg-black/10 transition-colors"
      >
        <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-zinc-900" />
      </div>

      {/* Info Column */}
      <div className="flex flex-col">
        <span className="text-[14px] md:text-[18px] font-normal text-zinc-900 leading-tight">
          Selected Portfolio
        </span>
        <div 
          onClick={handleScrollToPortfolio}
          className="flex items-center gap-1 text-slate-600 cursor-pointer hover:text-zinc-900 transition-colors select-none"
        >
          <span className="text-[11px] md:text-[13px] font-normal">View Commissions</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        </div>
      </div>
    </motion.div>
  );
}
