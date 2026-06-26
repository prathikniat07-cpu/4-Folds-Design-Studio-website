import { motion } from 'motion/react';

export default function Metrics() {
  return (
    <section className="py-20 px-6 sm:px-12 lg:px-24 bg-[#faf9f6] w-full relative overflow-hidden flex items-center justify-center min-h-screen">
      {/* Background blueprint details to mimic an architectural drawing draft room */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
      
      {/* Subtle floor-plan style keylines centered behind to emphasize the draft paper style */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] border border-black/[0.015] rounded-full [background:radial-gradient(circle,rgba(245,242,235,0.7)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1300px] mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Concept Editorial Branding with copper detail */}
          <div className="lg:col-span-5 text-left space-y-7 md:pr-4">
            <div className="flex items-center gap-2.5">
              {/* Elegant dual-star icon */}
              <svg className="w-4 h-4 text-[#b8956e] fill-[#b8956e]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0L14.85 9.15L24 12L14.85 14.85L12 24L9.15 14.85L0 12L9.15 9.15L12 0Z"/>
              </svg>
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-zinc-700 font-bold block">
                STUDIO NUMBERS
              </span>
            </div>
            
            <h2 className="text-[44px] md:text-[58px] font-serif font-light text-zinc-900 tracking-tight leading-[1.08]">
              Crafted in <br/>
              <span className="italic font-normal text-[#b8956e] font-serif">Precision</span>
            </h2>
            
            <p className="text-xs sm:text-[13.5px] text-zinc-650 font-light leading-relaxed max-w-sm">
              Behind our bespoke architecture is a disciplined loop of conceptual drafts, meticulous material specification, and absolute structural precision. We track every millimeter to build a tactile legacy.
            </p>

            {/* Custom 3D warm premium copper keyline block with metallic shine reflection */}
            <div className="pt-4 flex justify-start">
              <div 
                className="w-[210px] h-3.5 rounded-[3px] bg-gradient-to-b from-[#efe0c9] via-[#b8956e] to-[#735230] border-t border-[#fbf9f5]/55 shadow-[0_6px_10px_rgba(0,0,0,0.15),0_1.5px_3px_rgba(0,0,0,0.1),inset_0_-2.5px_2px_rgba(0,0,0,0.35)] relative overflow-hidden"
              >
                {/* Highlight glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full animate-[pulse_6s_infinite]" />
              </div>
            </div>
          </div>

          {/* Right Column: Symmetrical Editorial Stat Bento/Grid tray */}
          <div className="lg:col-span-7">
            {/* Highly crafted physical mahogany wooden presentation board base tray with smooth bevel */}
            <div className="bg-[#1f1610] p-4 rounded-[2.5rem] border border-[#2b1f16] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4),0_10px_20px_rgba(0,0,0,0.2),inset_0_-4px_6px_rgba(0,0,0,0.7),inset_0_2.5px_6px_rgba(255,255,255,0.07)] relative overflow-hidden">
              
              {/* Outer physical glossy glow of wooden borders */}
              <div className="absolute inset-0 bg-gradient-to-tl from-black/20 via-transparent to-white/5 pointer-events-none" stroke-width="0" />
              
              <div className="grid grid-cols-2 gap-4 relative z-10">
                
                {/* Tile 01: Light Granite/Polished Concrete Architectural Block */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6 }}
                  className="relative h-[250px] rounded-[1.8rem] overflow-hidden p-6 md:p-8 flex flex-col justify-between text-left shadow-[0_5px_12px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(0,0,0,0.1)] group transition-all duration-300 bg-[#e3e1dc] pointer-events-none"
                >
                  {/* Concrete/Granite Subtle Texture Overlay */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-25"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=400&q=80')`
                    }}
                  />
                  {/* Smooth card highlights */}
                  <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

                  {/* Top row */}
                  <div className="flex justify-between items-start w-full relative z-10">
                    <span className="text-[12px] font-mono font-bold text-zinc-900/60">
                      // 01
                    </span>
                    
                    {/* Architectural Masonry classical building embossed facade */}
                    <div className="relative">
                      <svg className="w-12 h-12 text-zinc-900/15 drop-shadow-[0_1.5px_0.5px_rgba(255,255,255,0.9)]" viewBox="0 0 64 64" fill="currentColor">
                        <path d="M12 50h40V14H12v36zm4-32h8v6h-8v-6zm0 10h8v6h-8v-6zm0 10h8v6h-8v-6zm14-20h8v6h-8v-6zm0 10h8v6h-8v-6zm0 10h8v6h-8v-6zm14-20h8v6h-8v-6zm0 10h8v6h-8v-6zm0 10h8v6h-8v-6z" />
                        <path d="M8 54h48v4H8z" stroke="currentColor" strokeWidth="0.5" />
                      </svg>
                    </div>
                  </div>

                  {/* Center & bottom metrics */}
                  <div className="space-y-1 relative z-10">
                    <div className="flex items-baseline gap-2">
                      <span className="text-6xl md:text-7xl font-sans font-semibold text-zinc-900 tracking-tighter leading-none">
                        7
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-1.5 pt-1.5 pb-1">
                      <div className="w-3.5 h-[1.5px] bg-zinc-900/50" />
                      <span className="text-[10px] font-mono uppercase tracking-[0.15em] font-extrabold text-zinc-900">
                        COMPLETED PROJECTS
                      </span>
                    </div>

                    <p className="text-[11px] md:text-xs text-zinc-700 font-medium leading-snug">
                      Exacting high-end architectural designs delivered
                    </p>
                  </div>
                </motion.div>

                {/* Tile 02: Warm Vertical Walnut Wood Plaquette */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative h-[250px] rounded-[1.8rem] overflow-hidden p-6 md:p-8 flex flex-col justify-between text-left shadow-[0_5px_12px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(0,0,0,0.1)] group transition-all duration-300 bg-[#ebdcb9] pointer-events-none"
                >
                  {/* Beautiful high quality walnut wood/timber design detail underlay */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-[0.35]"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=400&q=80')`
                    }}
                  />
                  {/* Smooth card highlights */}
                  <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/45 to-transparent pointer-events-none" />

                  {/* Top row */}
                  <div className="flex justify-between items-start w-full relative z-10">
                    <span className="text-[12px] font-mono font-bold text-[#382513]/65">
                      // 02
                    </span>
                    
                    {/* Embossed Luxury Bronze Compass Medallion */}
                    <div className="relative">
                      <svg className="w-12 h-12 text-[#382513]/20 drop-shadow-[0_1px_0.5px_rgba(255,255,255,0.7)]" viewBox="0 0 100 100" fill="currentColor">
                        <circle cx="50" cy="50" r="41" fill="none" stroke="currentColor" strokeWidth="3" />
                        <circle cx="50" cy="50" r="37" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" />
                        <polygon points="50,15 54,42 50,46" fill="#bf9a75" />
                        <polygon points="50,15 46,42 50,46" fill="#5c3d25" />
                        <polygon points="50,85 46,58 50,54" fill="#bf9a75" />
                        <polygon points="50,85 54,58 50,54" fill="#5c3d25" />
                        <polygon points="85,50 58,46 54,50" fill="#bf9a75" />
                        <polygon points="85,50 58,54 54,50" fill="#5c3d25" />
                        <polygon points="15,50 42,54 46,50" fill="#bf9a75" />
                        <polygon points="15,50 42,46 46,50" fill="#5c3d25" />
                        <circle cx="50" cy="50" r="3" fill="#382513" />
                      </svg>
                    </div>
                  </div>

                  {/* Center & bottom metrics */}
                  <div className="space-y-1 relative z-10">
                    <div className="flex items-baseline gap-2">
                      <span className="text-[#382513] text-[38px] md:text-[44px] font-serif font-light tracking-tight leading-none">
                        4 Years
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-1.5 pt-1 pb-1">
                      <div className="w-3.5 h-[1px] bg-[#382513]/30" />
                      <span className="text-[10px] font-mono uppercase tracking-[0.15em] font-medium text-[#382513]/90">
                        STUDIO EXPERIENCE
                      </span>
                    </div>

                    <p className="text-[11.5px] md:text-xs text-[#4c351c]/95 font-light leading-relaxed">
                      Founded and shaping environment since 2022
                    </p>
                  </div>
                </motion.div>

                {/* Tile 03: Raw Limestone Travertine Slab with heavy sand carving */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative h-[250px] rounded-[1.8rem] overflow-hidden p-6 md:p-8 flex flex-col justify-between text-left shadow-[0_5px_12px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(0,0,0,0.1)] group transition-all duration-300 bg-[#e5decb] pointer-events-none"
                >
                  {/* Heavy travertine concrete wall texture */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-[0.35]"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=400&q=80')`
                    }}
                  />
                  {/* Edge highlight shine */}
                  <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/45 to-transparent pointer-events-none" />

                  {/* Top row */}
                  <div className="flex justify-between items-start w-full relative z-10">
                    <span className="text-[12px] font-mono font-bold text-amber-950/60">
                      // 03
                    </span>
                    
                    {/* Raw chiseled metal map pin/classical emblem */}
                    <div className="relative">
                      <svg className="w-12 h-12 text-amber-950/20 drop-shadow-[0_1.5px_0.5px_rgba(255,255,255,0.8)]" viewBox="0 0 64 64" fill="currentColor">
                        <path d="M32 6c-10 0-18 8-18 18c0 14 18 34 18 34s18-20 18-34c0-10-8-18-18-18zm0 24c-3.3 0-6-2.7-6-6s2.7-6 6-6s6 2.7 6 6s-2.7 6-6 6zm-4 4h8v4h-8z" />
                      </svg>
                    </div>
                  </div>

                  {/* Center & bottom metrics */}
                  <div className="space-y-1 relative z-10">
                    <div className="flex items-baseline gap-2">
                      <span className="text-stone-900 text-3xl md:text-[38px] font-serif font-light tracking-tight leading-none">
                        Hyderabad
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-1.5 pt-1 pb-1">
                      <div className="w-3.5 h-[1px] bg-stone-900/30" />
                      <span className="text-[10px] font-mono uppercase tracking-[0.15em] font-medium text-stone-900/80">
                        DESIGN HUB
                      </span>
                    </div>

                    <p className="text-[11.5px] md:text-xs text-stone-800/95 font-light leading-snug">
                      Headquartered at Madhapur, Hyderabad
                    </p>
                  </div>
                </motion.div>

                {/* Tile 04: Elite Hand-Brushed Brass/Gold Plaque Plate */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative h-[250px] rounded-[1.8rem] overflow-hidden p-6 md:p-8 flex flex-col justify-between text-left shadow-[0_5px_12px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(0,0,0,0.1)] group transition-all duration-300 bg-[#e7d8bd] pointer-events-none"
                >
                  {/* Real premium architectural brass metal detailing underlay photo */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-[0.35]"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80')`
                    }}
                  />
                  {/* Subtle 3D gradient highlights within frame corner */}
                  <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/45 to-transparent pointer-events-none" />

                  {/* Top row */}
                  <div className="flex justify-between items-start w-full relative z-10">
                    <span className="text-[12px] font-mono font-bold text-[#4c351c]/65">
                      // 04
                    </span>
                    
                    {/* Imperial Greco-Roman Corinthian Classic Pillar SVG */}
                    <div className="relative">
                      <svg className="w-12 h-14 text-[#4c351c]/20 drop-shadow-[0_1.5px_0.5px_rgba(255,255,255,0.7)]" viewBox="0 0 40 60" fill="currentColor">
                        <path d="M4 11 h32 v2 H4 z" />
                        <path d="M5 8 h30 v3 H5 z" />
                        <rect x="8" y="15" width="4" height="36" />
                        <rect x="14" y="15" width="4" height="36" />
                        <rect x="20" y="15" width="4" height="36" />
                        <rect x="26" y="15" width="4" height="36" />
                        <rect x="32" y="15" width="4" height="36" />
                        <path d="M6 51 h28 v3 H6 z" />
                        <path d="M4 54 h32 v4 H4 z" />
                      </svg>
                    </div>
                  </div>

                  {/* Center & bottom metrics */}
                  <div className="space-y-1 relative z-10">
                    <div className="flex items-baseline gap-2">
                      <span className="text-[#3c2813] text-[38px] md:text-[44px] font-serif font-light tracking-tight leading-none">
                        100%
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-1.5 pt-1 pb-1">
                      <div className="w-3.5 h-[1px] bg-[#3c2813]/35" />
                      <span className="text-[10px] font-mono uppercase tracking-[0.12em] font-medium text-[#3c2813]/90">
                        BESPOKE FOCUS
                      </span>
                    </div>

                    <p className="text-[11.5px] md:text-xs text-[#45311c]/95 font-light leading-relaxed">
                      Upholding hand-chiseled design & shape integrity
                    </p>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
