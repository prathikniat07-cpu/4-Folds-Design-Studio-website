import { motion } from 'motion/react';
import { Home, Compass, Leaf, Layers, Globe, Maximize2, ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../data';

export default function Services() {
  const getIcon = (iconName: string, css: string) => {
    switch (iconName) {
      case 'Home': return <Home className={css} />;
      case 'Compass': return <Compass className={css} />;
      case 'Leaf': return <Leaf className={css} />;
      case 'Layers': return <Layers className={css} />;
      case 'Globe': return <Globe className={css} />;
      case 'Maximize': return <Maximize2 className={css} />;
      default: return <Home className={css} />;
    }
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-28 px-4 sm:px-6 md:px-12 lg:px-24 bg-[#faf9f6] w-full">
      <div className="max-w-[1250px] mx-auto">
        
        {/* Simple Premium Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-md text-left">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[1.5px] bg-slate-400" />
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-500 font-semibold block">
                WHAT WE DO
              </span>
            </div>
            <h2 className="text-4xl md:text-[54px] font-serif font-light text-zinc-900 tracking-tight leading-none">
              Our Services
            </h2>
          </div>
          <p className="text-xs md:text-sm text-slate-500 font-light max-w-xs leading-relaxed text-left md:text-right">
            Providing custom architectural design, detailed blueprints, and beautiful modern styling with clear communication.
          </p>
        </div>

        {/* Premium Split Card Grid matching example image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: idx * 0.08 }}
              className="group flex flex-row rounded-3xl bg-white border border-zinc-900/5 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-[260px] sm:h-[280px] md:h-[290px] lg:h-[265px] xl:h-[280px] w-full text-left"
            >
              {/* Left Column (55% width) holding Text, Badge, Icon, Accent and Arrow */}
              <div className="w-[56%] p-5 sm:p-6 lg:p-7 flex flex-col justify-between bg-white relative z-10">
                
                {/* Top row: Icon Badge (left) & Number (right) */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-900/5 flex items-center justify-center transition-all duration-300 group-hover:bg-zinc-900 group-hover:text-white">
                    {getIcon(service.iconName, "w-4 h-4 text-zinc-750 group-hover:text-white transition-colors duration-300")}
                  </div>
                  <span className="text-[10px] font-mono font-medium tracking-widest text-slate-400">
                    0{idx + 1}
                  </span>
                </div>

                {/* Middle Content */}
                <div className="my-auto pt-2">
                  <h3 className="text-base sm:text-lg font-medium text-zinc-900 mb-1.5 sm:mb-2 tracking-tight group-hover:text-amber-805 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[11px] sm:text-[12px] text-slate-500 font-light leading-relaxed line-clamp-3 sm:line-clamp-4">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Row: Accent horizontal line (left) */}
                <div className="flex items-center pt-2 border-t border-zinc-900/5">
                  <div className="w-8 h-[2px] bg-[#b8956e]" />
                </div>

              </div>

              {/* Right Column (44% width) holding the photo */}
              <div className="w-[44%] relative overflow-hidden self-stretch border-l border-zinc-900/5">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                  referrerPolicy="no-referrer"
                />
                
                {/* Beautiful custom play icon overlay specifically on 3D Visual Tours card (service #6) */}
                {service.id === 's6' && (
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-black/20">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[9px] border-l-zinc-900 ml-0.5" />
                    </div>
                  </div>
                )}
              </div>

            </motion.div>
          ))}
        </div>

        {/* Simple Elegant callout banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onClick={handleScrollToContact}
          className="mt-16 rounded-3xl bg-zinc-900 p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 hover:bg-zinc-950 transition-colors cursor-pointer group text-left"
        >
          <div>
            <h3 className="text-lg md:text-xl font-light text-white mb-1.5 tracking-tight animate-pulse-slow">
              Ready to start your project?
            </h3>
            <p className="text-slate-400 text-xs font-light">
              We look forward to helping you design your ideal custom home or interior space.
            </p>
          </div>

          <button
            className="px-5 py-2.5 rounded-full bg-white text-zinc-950 text-xs md:text-sm font-medium flex items-center gap-2 hover:bg-zinc-100 transition-colors shrink-0 cursor-pointer"
          >
            Get In Touch
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-950" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
