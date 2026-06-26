import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, ChevronLeft, ChevronRight, Compass } from 'lucide-react';
import { IMMERSIVE_IMAGES } from '../data';

export default function Showcase() {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % IMMERSIVE_IMAGES.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % IMMERSIVE_IMAGES.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + IMMERSIVE_IMAGES.length) % IMMERSIVE_IMAGES.length);
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-[#faf9f6] w-full relative">
      <div className="max-w-[1400px] mx-auto text-center">
        
        {/* Header */}
        <div className="max-w-xl mx-auto mb-16 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-slate-500 font-semibold block mb-4">
            Film Experience
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-zinc-900 tracking-tight leading-tight">
            Immersive Showcase
          </h2>
          <div className="w-12 h-[1px] bg-black/10 mx-auto mt-6" />
        </div>

        {/* Fullscreen Video/Renders Frame Box */}
        <div className="relative w-full h-[500px] md:h-[650px] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden bg-zinc-950 shadow-2xl group border border-black/5">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, filter: 'blur(15px)', scale: 1.05 }}
              animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
              exit={{ opacity: 0, filter: 'blur(15px)', scale: 0.96 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={IMMERSIVE_IMAGES[index].url}
                alt={IMMERSIVE_IMAGES[index].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center absolute inset-0 z-0 scale-100 animate-[pulse_12s_infinite_alternate]"
              />
              
              {/* Premium overlay to ensure caption contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,20,40,0.6)] via-[rgba(10,20,40,0.15)] to-transparent z-10 pointer-events-none" />
            </motion.div>
          </AnimatePresence>

          {/* Floating UI Typography over architectural scene */}
          <div className="absolute inset-0 z-20 p-8 md:p-14 flex flex-col justify-between items-start text-white pointer-events-none">
            
            {/* Top row: Coordinates */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/25 backdrop-blur-md border border-white/10 text-xs tracking-widest font-mono">
              <Compass className="w-4 h-4 text-sky-300 animate-spin-slow" />
              <span>{IMMERSIVE_IMAGES[index].coords}</span>
            </div>

            {/* Bottom column: Floating caption */}
            <div className="w-full text-left max-w-xl self-end sm:self-start">
              <motion.span
                key={`sub-${index}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-xs uppercase tracking-[0.3em] font-medium text-sky-200 block mb-3"
              >
                TACTILE VISUAL CHAPTER
              </motion.span>
              <motion.h3
                key={`title-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-3xl md:text-5xl font-normal text-white mb-3 tracking-tight"
              >
                {IMMERSIVE_IMAGES[index].title}
              </motion.h3>
              <motion.p
                key={`desc-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 1.0, delay: 0.7 }}
                className="text-white/80 text-xs md:text-sm font-light max-w-md leading-relaxed"
              >
                {IMMERSIVE_IMAGES[index].desc}
              </motion.p>
            </div>

          </div>

          {/* Interactive Player Controls (Manual Overrides) */}
          <div className="absolute bottom-8 right-8 z-30 flex items-center gap-3">
            
            {/* Play/Pause toggle */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-3 bg-white/20 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/45 text-white transition-colors cursor-pointer"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            {/* Previous slide */}
            <button
              onClick={handlePrev}
              className="p-3 bg-white/20 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/45 text-white transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Next slide */}
            <button
              onClick={handleNext}
              className="p-3 bg-white/20 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/45 text-white transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

          </div>

          {/* Indicator light dots along the bottom */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
            {IMMERSIVE_IMAGES.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setIndex(dotIdx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  index === dotIdx ? 'bg-white w-6 shadow' : 'bg-white/35 hover:bg-white/60'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
