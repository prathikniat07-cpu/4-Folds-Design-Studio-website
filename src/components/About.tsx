import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#faf9f6] w-full overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Editorial Image Block with glass shadows and organic curves */}
        <div className="lg:col-span-6 relative group">
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-blue-500/3 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-52 h-52 bg-black/[0.01] rounded-full blur-2xl" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.0, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] border border-black/5 shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80"
              alt="Architectural Material Interface"
              referrerPolicy="no-referrer"
              className="w-full h-[500px] sm:h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Soft dark elegant overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>
 
        {/* Right Side: Philosophy Content */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          {/* Tag */}
          <motion.span
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.25em] text-slate-500 font-semibold mb-4"
          >
            Philosophy
          </motion.span>
 
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-normal text-zinc-900 mb-6 leading-tight tracking-tight"
          >
            Architecture Rooted in Emotion
          </motion.h2>
 
          {/* Body minimal paragraphs */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed font-light"
          >
            <p>
              We believe a building is more than its structural components. It is a vessel for life’s quietest states, designed around the movement of light, the soft weight of natural materials, and the timeless geometry of nature.
            </p>
            <p>
              4 FOLDS DESIGN STUDIO operates at the quiet frontier of modern design. Our process rejects mass production in favor of raw tactile precision, utilizing rammed earth, travertine slabs, and custom oxidations that heal and gain character as time moves forward.
            </p>
          </motion.div>
 
          {/* Founder Quote in glass box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 p-6 rounded-[1.8rem] bg-zinc-950/5 backdrop-blur-xl border border-black/5 relative"
          >
            <Quote className="absolute top-4 right-4 w-10 h-10 text-zinc-950/5 pointer-events-none" />
            
            <p className="font-serif italic text-base md:text-lg text-slate-800 leading-relaxed mb-4">
              "We strive not to impose concrete monuments upon environments, but to weave spatial rhythms where native trees, air masses, and humans slide seamlessly together."
            </p>
            
            <div className="flex justify-between items-center mt-4 border-t border-black/10 pt-4">
              <div>
                <h4 className="text-sm font-semibold text-zinc-900 uppercase tracking-wide">
                  Harshini
                </h4>
                <p className="text-xs text-slate-500">
                  Founder & Lead Architect, 4 FOLDS DESIGN STUDIO
                </p>
              </div>
              
              {/* Monogram or Stylized Signature Typography */}
              <div className="h-10 flex items-center justify-center font-serif text-2xl text-zinc-950/30 select-none italic font-light scale-x-110 tracking-widest pl-4">
                  Harshini
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
