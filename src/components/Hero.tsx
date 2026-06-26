import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import Navbar from './Navbar';
import BottomLeftCard from './BottomLeftCard';
import BottomRightCorner from './BottomRightCorner';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [progress, setProgress] = useState(0); // 0 (only brand logo visible) to 1 (hero elements fully visible)

  useEffect(() => {
    // Elegant, automatic opening sequence on load
    // Brand logo is displayed first. After a short delay, the hero content fades in beautifully.
    const delayTimer = setTimeout(() => {
      let start: number | null = null;
      const duration = 1200; // 1.2s smooth reveal

      const animate = (timestamp: number) => {
        if (!start) start = timestamp;
        const elapsed = timestamp - start;
        const progressVal = Math.min(1, elapsed / duration);

        // cubic easeInOut transition
        const ease = progressVal < 0.5
          ? 4 * progressVal * progressVal * progressVal
          : 1 - Math.pow(-2 * progressVal + 2, 3) / 2;

        setProgress(ease);

        if (elapsed < duration) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, 1000); // 1-second focus on elite logo on initial load

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(delayTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollDown = () => {
    setProgress(1);
    window.dispatchEvent(new CustomEvent('scrollToSection', { detail: { targetId: 'about-section' } }));
  };

  // Grand Centered Brand Logo fade parameters relative to progress state
  const logoOpacity = Math.max(0, 1 - progress / 0.7);
  const logoScale = 1 - progress * 0.06;
  const logoY = -progress * 50;

  // Inner elements fade parameters (0.0 on load, fully fade-in relative to progress)
  const contentOpacity = Math.max(0, (progress - 0.3) / 0.7);
  const contentY = 25 * (1 - progress);
  const pointerEvents = progress > 0.8 ? 'auto' : 'none' as const;

  // Premium transitions driven by cubic-beziers for elite fluid timing
  const logoStyle = {
    opacity: logoOpacity,
    transform: `scale(${logoScale}) translateY(${logoY}px)`,
    transition: 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
  };

  const contentStyle = {
    opacity: contentOpacity,
    transform: `translateY(${contentY}px)`,
    transition: 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
    pointerEvents,
  };

  return (
    <div className="w-full h-screen bg-[#0a0c10] relative overflow-hidden" id="home">
      {/* Dynamic ambient colorful lighting orbs */}
      <div className="absolute top-[10%] left-[10%] w-[45rem] h-[45rem] rounded-full bg-cyan-600/12 blur-[130px] pointer-events-none z-0 animate-[pulse_10s_ease-in-out_infinite]" />
      <div className="absolute bottom-[10%] right-[10%] w-[50rem] h-[50rem] rounded-full bg-indigo-600/10 blur-[140px] pointer-events-none z-0 animate-[pulse_12s_ease-in-out_infinite_2s]" />
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[35rem] h-[35rem] rounded-full bg-purple-500/8 blur-[120px] pointer-events-none z-0" />

      {/* Main Inner Container (Fully Expanded) */}
      <section className="relative w-full h-full overflow-hidden shadow-none flex flex-col items-center bg-transparent group">
        
        {/* The Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-[65%] lg:object-center z-0 opacity-70 select-none pointer-events-none"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260428_193507_4286c423-2fd9-4efd-92bd-91a939453fc1.mp4" type="video/mp4" />
        </video>

        {/* Cinematic gradient overlay and vignettes - bottom fades into light #faf9f6 for exquisite seamless scrolling transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#0a0c10]/20 to-[#faf9f6] z-0 pointer-events-none" />

        {/* Grand Centered Brand Logo (Featured on load, fades out as we scroll) */}
        <div
          style={logoStyle}
          className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none px-6"
        >
          <div className="flex flex-col items-center">
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[95px] font-thin tracking-[0.2em] text-white font-sans uppercase text-center leading-none">
              4 FOLDS
            </h2>
            <span className="text-[11px] sm:text-xs lg:text-sm tracking-[0.5em] font-light mt-5 text-slate-300 font-mono uppercase text-center ml-[0.5em]">
              DESIGN STUDIO
            </span>
          </div>
        </div>

        {/* Content Layer */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-between pb-6 md:pb-12">
          
          {/* Top Navbar */}
          <div 
            style={contentStyle} 
            className="w-full relative z-30"
          >
            <Navbar />
          </div>

          {/* Text Container */}
          <div
            style={contentStyle}
            className="w-full flex flex-col items-center pt-2 px-6 text-center max-w-4xl my-auto"
          >
            {/* Cinematic Headings Layer */}
            <div className="min-h-[160px] md:min-h-[200px] flex flex-col items-center justify-center">
              <div className="flex flex-col items-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-normal mb-6 tracking-tighter leading-[1.05] bg-gradient-to-b from-white via-slate-100 to-slate-200 bg-clip-text text-transparent">
                  Spaces That Breathe
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-slate-200 font-light leading-relaxed max-w-2xl">
                  4 FOLDS DESIGN STUDIO crafts residential, civic, and cultural architecture where light, material, and nature converge into living experiences.
                </p>
              </div>
            </div>

            {/* Scroll Indicator Icon */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
              onClick={handleScrollDown}
              className="mt-6 p-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md cursor-pointer hover:bg-white/10 transition-colors hidden sm:block z-20 shadow-sm"
            >
              <ArrowDown className="w-5 h-5 text-slate-300" />
            </motion.div>
          </div>

          {/* Bottom Left Card */}
          <BottomLeftCard 
            style={contentStyle} 
          />

          {/* Bottom Right Corner (Custom Faux-Cutout layout) */}
          <BottomRightCorner 
            style={contentStyle} 
          />
        </div>
      </section>
    </div>
  );
}
