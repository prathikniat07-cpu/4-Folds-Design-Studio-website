import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, MapPin, Calendar, Layers } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#faf9f6] w-full">
      <div className="max-w-[1400px] mx-auto text-center">
        
        {/* Dynamic header */}
        <div className="max-w-xl mx-auto mb-16 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.25em] text-slate-500 font-semibold block mb-4"
          >
            Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-normal text-zinc-900 tracking-tight leading-tight"
          >
            Sculptured Monuments
          </motion.h2>
          <div className="w-12 h-[1px] bg-black/10 mx-auto mt-6" />
        </div>

        {/* Uniform Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 text-left items-stretch"
        >
          {PROJECTS.map((project, idx) => {
            return (
              <motion.div
                key={project.id}
                layoutId={`card-container-${project.id}`}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="relative group rounded-[1.8rem] md:rounded-[2.5rem] overflow-hidden bg-white border border-black/5 hover:border-black/15 transition-all duration-500 cursor-pointer shadow-sm hover:shadow-xl flex flex-col justify-between h-full animate-relative"
              >
                {/* Cinematic Image Frame */}
                <div className="relative w-full overflow-hidden aspect-[4/3] shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out scale-100 group-hover:scale-[1.04]"
                  />
                  
                  {/* Subtle blur card glass overlay on hover */}
                  <div className="absolute inset-0 bg-black/15 backdrop-blur-0 opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-[0.5px] transition-all duration-500 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="bg-white/85 p-3.5 rounded-full shadow-lg border border-black/5 text-zinc-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </motion.div>
                  </div>

                  {/* Gradient to darken top/bottom inside card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Card Description Block */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                  <div className="flex justify-between items-start mb-2 gap-4">
                    <h3 className="text-xl md:text-2xl font-normal text-zinc-900 tracking-tight leading-snug">
                      {project.title}
                    </h3>
                    <span className="text-[14px] text-slate-500 font-mono shrink-0 font-medium">
                      {project.year}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-xs text-slate-600 font-light mt-auto pt-4">
                    <MapPin className="w-3.5 h-3.5 opacity-70" />
                    <span>{project.location}</span>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

        {/* Project Expanded Modal Panel */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 bg-zinc-900/40 backdrop-blur-md">
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-[1000px] max-h-[90vh] rounded-[2.5rem] bg-white border border-black/10 shadow-2xl p-6 md:p-10 overflow-y-auto no-scrollbar flex flex-col gap-8 text-slate-800"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 md:top-8 md:right-8 bg-black/5 hover:bg-black/10 text-slate-800 p-2 rounded-full cursor-pointer transition-colors z-20 border border-black/10"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Grid layout inside modal */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  
                  {/* Left: Cinematic Portrait Image */}
                  <div className="w-full h-[320px] md:h-[500px] rounded-[1.8rem] overflow-hidden border border-black/5 relative">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                  </div>

                  {/* Right: Technical Project Review */}
                  <div className="flex flex-col justify-between h-full py-2">
                    
                    <div>
                      {/* Title */}
                      <h3 className="text-3xl sm:text-4xl font-normal leading-tight text-zinc-900 mb-4">
                        {selectedProject.title}
                      </h3>

                      {/* Line info */}
                      <div className="grid grid-cols-2 gap-4 border-y border-black/10 py-4 mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-slate-500" />
                          <div className="text-xs">
                            <span className="text-slate-500 block uppercase font-medium">Location</span>
                            <span className="font-semibold text-sm text-zinc-950">{selectedProject.location}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-slate-500" />
                          <div className="text-xs">
                            <span className="text-slate-500 block uppercase font-medium">Year Finished</span>
                            <span className="font-semibold text-sm text-zinc-950">{selectedProject.year}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm md:text-base leading-relaxed text-slate-600 font-light mb-6">
                        {selectedProject.description}
                      </p>
                    </div>

                    {/* Material philosophies (Strict design rules) */}
                    {selectedProject.philosophies && (
                      <div className="mt-4">
                        <div className="flex items-center gap-1.5 text-xs font-semibold uppercase text-zinc-900 tracking-wider mb-2.5">
                          <Layers className="w-4 h-4 text-slate-700" />
                          <span>Material Philosophies</span>
                        </div>
                        <ul className="flex flex-wrap gap-2">
                          {selectedProject.philosophies.map((phil, pIdx) => (
                            <li
                              key={pIdx}
                              className="text-xs bg-black/5 px-4 py-2 rounded-full border border-black/5 whitespace-nowrap text-slate-700 font-light animate-relative"
                            >
                              ✧ {phil}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                  </div>

                </div>

              </motion.div>

            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
