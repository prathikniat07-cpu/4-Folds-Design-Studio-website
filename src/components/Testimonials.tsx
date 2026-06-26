import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  // Triple the items to guarantee a continuous seamless stream for infinite scrolling marquee
  const tripledTestimonials = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-24 bg-[#faf9f6] w-full relative overflow-hidden" id="testimonials-section">
      {/* Background soft gradients */}
      <div className="absolute top-1/4 right-[10%] w-96 h-96 bg-blue-500/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-[5%] w-[30rem] h-[30rem] bg-black/[0.01] rounded-full blur-2xl pointer-events-none" />
 
      <div className="w-full relative z-10">
        
        {/* Header */}
        <div className="max-w-xl mx-auto mb-16 text-center px-6">
          <span className="text-xs uppercase tracking-[0.25em] text-slate-500 font-semibold block mb-4">
            Voices
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-zinc-900 tracking-tight leading-tight">
            Client Perspectives
          </h2>
          <div className="w-12 h-[1px] bg-black/10 mx-auto mt-6" />
        </div>
 
        {/* Infinite Marquee Container */}
        <div className="relative flex overflow-x-hidden w-full py-4">
          {/* Fading overlay at the edges of the marquee for premium visual mask */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-48 bg-gradient-to-r from-[#faf9f6] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-48 bg-gradient-to-l from-[#faf9f6]/95 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Row */}
          <motion.div 
            className="flex gap-8 md:gap-10 shrink-0 select-none cursor-grab active:cursor-grabbing"
            animate={{ x: [0, -1140] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 35,
            }}
          >
            {tripledTestimonials.map((testimonial, idx) => (
              <div
                key={`${testimonial.id}-${idx}`}
                className="w-[280px] sm:w-[380px] p-8 rounded-[2rem] bg-white border border-black/5 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden shrink-0 whitespace-normal"
              >
                {/* Big decorative quote */}
                <Quote className="absolute top-6 right-6 w-10 h-10 text-black/5 pointer-events-none" />

                {/* Quote */}
                <blockquote className="text-slate-800 font-serif italic text-sm sm:text-base leading-relaxed mb-6">
                  {testimonial.quote}
                </blockquote>

                {/* Author Info */}
                <div className="border-t border-black/10 pt-4 mt-auto">
                  <span className="text-xs font-semibold text-zinc-900 uppercase tracking-wide block">
                    {testimonial.author}
                  </span>
                  <span className="text-[11px] text-slate-600 block">
                    {testimonial.role}
                  </span>
                  <span className="text-[10px] text-slate-500 mt-1 block font-mono font-semibold">
                    ✦ {testimonial.project}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
