import { motion } from 'motion/react';
import { Compass, Pencil, Layers, FileText, HardHat } from 'lucide-react';
import { PROCESS_STEPS } from '../data';

export default function Timeline() {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return <Compass className="w-5 h-5 text-[#b8956e]" />;
      case 1: return <Pencil className="w-5 h-5 text-[#b8956e]" />;
      case 2: return <Layers className="w-5 h-5 text-[#b8956e]" />;
      case 3: return <FileText className="w-5 h-5 text-[#b8956e]" />;
      case 4: return <HardHat className="w-5 h-5 text-[#b8956e]" />;
      default: return <Compass className="w-5 h-5 text-[#b8956e]" />;
    }
  };

  return (
    <section className="py-28 px-4 sm:px-6 md:px-12 lg:px-24 bg-[#faf9f6] w-full">
      <div className="max-w-[1250px] mx-auto">
        
        {/* Editorial Subheader */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-md text-left">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-amber-850 text-[11px] font-mono font-bold">+</span>
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-500 font-semibold block">
                CORE FLOW
              </span>
            </div>
            <h2 className="text-4xl md:text-[54px] font-serif font-light text-zinc-900 tracking-tight leading-none animate-fade-in">
              Our Process
            </h2>
          </div>
          <p className="text-xs md:text-sm text-slate-500 font-light max-w-sm leading-relaxed text-left md:text-right md:self-end">
            Our step-by-step roadmap to design, plan, and build your dream spaces with professional care and premium materials.
          </p>
        </div>

        {/* Dynamic & Symmetrical Roadmap Grid matching mock design completely */}
        <div className="space-y-6 lg:space-y-8">
          
          {/* Row 1: Image, 01 Card, 02 Card, Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            
            {/* Block 1: Discovery Image (Sofa Room) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="rounded-[2rem] overflow-hidden h-[280px] w-full border border-zinc-900/5 shadow-sm"
            >
              <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80" 
                alt="Discovery Phase" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 select-none"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Block 2: 01 Discovery Text Card */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-[2.2rem] bg-[#fcfaf6] border border-zinc-900/5 p-6 sm:p-8 flex flex-col justify-start text-left h-[280px] shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Custom brown badge for icon */}
              <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] border border-[#EBE3D3] flex items-center justify-center">
                {getStepIcon(0)}
              </div>
              
              {/* Step number row */}
              <div className="flex items-center gap-3 mb-2 mt-5">
                <span className="text-xs font-mono font-semibold text-[#B58E58] tracking-widest">01</span>
                <div className="w-10 h-[1px] bg-[#E0D8CC]" />
              </div>

              <h3 className="font-serif font-normal text-zinc-900 text-xl tracking-tight mb-2">
                Discovery
              </h3>
              <p className="text-[12px] sm:text-[13px] text-slate-500 font-light leading-relaxed">
                We meet with you to explore your ideas and needs, look at the site, and study properties of natural daylight.
              </p>
            </motion.div>

            {/* Block 3: 02 Concept Design Text Card */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-[2.2rem] bg-[#fcfaf6] border border-zinc-900/5 p-6 sm:p-8 flex flex-col justify-start text-left h-[280px] shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Custom brown badge for icon */}
              <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] border border-[#EBE3D3] flex items-center justify-center">
                {getStepIcon(1)}
              </div>
              
              {/* Step number row */}
              <div className="flex items-center gap-3 mb-2 mt-5">
                <span className="text-xs font-mono font-semibold text-[#B58E58] tracking-widest">02</span>
                <div className="w-10 h-[1px] bg-[#E0D8CC]" />
              </div>

              <h3 className="font-serif font-normal text-zinc-900 text-xl tracking-tight mb-2">
                Concept Design
              </h3>
              <p className="text-[12px] sm:text-[13px] text-slate-500 font-light leading-relaxed">
                We design layout options and build 3D visual models and hand drawings to show you how the space will look.
              </p>
            </motion.div>

            {/* Block 4: Concept Sketch Image */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-[2rem] overflow-hidden h-[280px] w-full border border-zinc-900/5 shadow-sm"
            >
              <img 
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80" 
                alt="Concept Design Sketch" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 select-none"
                referrerPolicy="no-referrer"
              />
            </motion.div>

          </div>

          {/* Row 2: 03 Card, Image, 04 Card, Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            
            {/* Block 5: 03 Material Selection Text Card */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="rounded-[2.2rem] bg-[#fcfaf6] border border-zinc-900/5 p-6 sm:p-8 flex flex-col justify-start text-left h-[280px] shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Custom brown badge for icon */}
              <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] border border-[#EBE3D3] flex items-center justify-center">
                {getStepIcon(2)}
              </div>
              
              {/* Step number row */}
              <div className="flex items-center gap-3 mb-2 mt-5">
                <span className="text-xs font-mono font-semibold text-[#B58E58] tracking-widest">03</span>
                <div className="w-10 h-[1px] bg-[#E0D8CC]" />
              </div>

              <h3 className="font-serif font-normal text-zinc-900 text-xl tracking-tight mb-2">
                Material Selection
              </h3>
              <p className="text-[12px] sm:text-[13px] text-slate-500 font-light leading-relaxed">
                We pick matching premium natural stone, wood types, paint finishes, and custom metal fixtures together.
              </p>
            </motion.div>

            {/* Block 6: Materials Image */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-[2rem] overflow-hidden h-[280px] w-full border border-zinc-900/5 shadow-sm"
            >
              <img 
                src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80" 
                alt="Materials Palette" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 select-none"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Block 7: 04 Detailed Planning Text Card */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-[2.2rem] bg-[#fcfaf6] border border-zinc-900/5 p-6 sm:p-8 flex flex-col justify-start text-left h-[280px] shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Custom brown badge for icon */}
              <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] border border-[#EBE3D3] flex items-center justify-center">
                {getStepIcon(3)}
              </div>
              
              {/* Step number row */}
              <div className="flex items-center gap-3 mb-2 mt-5">
                <span className="text-xs font-mono font-semibold text-[#B58E58] tracking-widest">04</span>
                <div className="w-10 h-[1px] bg-[#E0D8CC]" />
              </div>

              <h3 className="font-serif font-normal text-zinc-900 text-xl tracking-tight mb-2">
                Detailed Planning
              </h3>
              <p className="text-[12px] sm:text-[13px] text-slate-500 font-light leading-relaxed">
                We create perfect blueprints and structural maps covering lighting, plumbing, and wall drawings.
              </p>
            </motion.div>

            {/* Block 8: Blueprints Image */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-[2rem] overflow-hidden h-[280px] w-full border border-zinc-900/5 shadow-sm"
            >
              <img 
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80" 
                alt="Technical Planning Drawings" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 select-none"
                referrerPolicy="no-referrer"
              />
            </motion.div>

          </div>

          {/* Row 3: Full Width Split Card (05 Card Left, Construction Image Right with left-fade) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] bg-[#fcfaf6] border border-zinc-900/5 overflow-hidden flex flex-col md:flex-row h-wrap md:h-[280px] w-full text-left shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* Left Portion of Row 3 Card (text & details) */}
            <div className="w-full md:w-[45%] lg:w-[40%] p-6 sm:p-8 flex flex-col justify-center relative z-20">
              {/* Custom brown hat badge */}
              <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] border border-[#EBE3D3] flex items-center justify-center mb-1">
                {getStepIcon(4)}
              </div>
              
              {/* Step number row */}
              <div className="flex items-center gap-3 mb-2 mt-4">
                <span className="text-xs font-mono font-semibold text-[#B58E58] tracking-widest">05</span>
                <div className="w-10 h-[1px] bg-[#E0D8CC]" />
              </div>

              <h3 className="font-serif font-normal text-zinc-900 text-xl tracking-tight mb-2">
                On-Site Overseeing
              </h3>
              <p className="text-[12px] sm:text-[13px] text-slate-500 font-light leading-relaxed">
                We supervise builders and custom craftsmen on-site daily to ensure everything is put together perfectly.
              </p>
            </div>

            {/* Right Portion of Row 3 Card (image with soft left fade to match card color) */}
            <div className="w-full md:w-[55%] lg:w-[60%] h-[180px] md:h-full relative overflow-hidden self-stretch border-t md:border-t-0 md:border-l border-zinc-900/5">
              
              {/* Beautiful soft fade overlay mimicking the image template */}
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#fcfaf6] to-transparent z-10 hidden md:block" />
              
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80" 
                alt="On-Site Supervision" 
                className="w-full h-full object-cover select-none"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
