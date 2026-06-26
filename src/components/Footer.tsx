import { motion } from 'motion/react';
import { Compass, Mail, Phone, Instagram, Linkedin, Globe, ArrowUp } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { name: 'Instagram', icon: <Instagram className="w-4 h-4" />, href: '#' },
    { name: 'LinkedIn', icon: <Linkedin className="w-4 h-4" />, href: '#' },
    { name: 'Architecture Portal', icon: <Globe className="w-4 h-4" />, href: '#' },
  ];

  const quickNav = [
    { name: 'About Studio', targetId: 'about-section' },
    { name: 'Selected Works', targetId: 'portfolio-section' },
    { name: 'Capabilities', targetId: 'services-section' },
    { name: 'Consultations', targetId: 'contact-section' },
  ];

  const handleScrollTop = () => {
    window.dispatchEvent(new CustomEvent('scrollToSection', { detail: { targetId: 'home' } }));
  };

  const handleScrollToSection = (id: string) => {
    window.dispatchEvent(new CustomEvent('scrollToSection', { detail: { targetId: id } }));
  };

  return (
    <footer className="bg-[#faf9f6] pt-20 pb-12 px-6 md:px-12 lg:px-24 w-full relative border-t border-black/10">
      <div className="max-w-[1400px] mx-auto flex flex-col">
        
        {/* Top footer row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 items-start">
          
          {/* Column 1: Monograph logo */}
          <div className="md:col-span-4 flex flex-col gap-4 text-left">
            <span className="font-regular tracking-tighter text-3xl text-zinc-900 select-none block">
              4 FOLDS <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-600 block mt-1 font-mono">DESIGN STUDIO</span>
            </span>
            <p className="text-xs text-slate-600 font-light leading-relaxed max-w-xs mt-2">
              Sculpting residential, civic, and cultural spaces where atmospheric gravity, tactile truths, and daylight converge.
            </p>
          </div>
 
          {/* Column 2: Quick Index links */}
          <div className="md:col-span-3 flex flex-col gap-3 text-left">
            <span className="text-[10px] uppercase tracking-[0.25em] text-slate-500 font-semibold mb-2 block font-mono">
              Atelier Index
            </span>
            <ul className="space-y-3.5 text-xs text-slate-600">
              {quickNav.map((link, idx) => (
                <li
                  key={idx}
                  onClick={() => handleScrollToSection(link.targetId)}
                  className="hover:text-zinc-950 hover:font-medium cursor-pointer select-none transition-all duration-300 hover:translate-x-0.5 flex items-center gap-1.5"
                >
                  <span className="opacity-0 hover:opacity-100 transition-opacity">✦</span>
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
 
          {/* Column 3: Contact quick references */}
          <div className="md:col-span-3 flex flex-col gap-3 text-left">
            <span className="text-[10px] uppercase tracking-[0.25em] text-slate-500 font-semibold mb-2 block font-mono">
              Studio Location
            </span>
            <div className="space-y-4 text-xs text-slate-600 font-light">
              <div>
                <span className="font-semibold block uppercase text-[10px] text-zinc-900 mb-0.5">HYDERABAD STUDIO</span>
                <span>Madhapur, Hyderabad, India</span>
              </div>
            </div>
          </div>
 
          {/* Column 4: Elegant controls */}
          <div className="md:col-span-2 flex flex-col gap-4 text-left md:items-end">
            <span className="text-[10px] uppercase tracking-[0.25em] text-slate-500 font-semibold mb-2 block font-mono">
              Rise Above
            </span>
            
            {/* Scroll back to top button with magnetic animation style */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScrollTop}
              className="p-4 rounded-full border border-black/10 bg-black/5 backdrop-blur-md shadow-sm text-slate-700 hover:text-zinc-950 hover:bg-black/10 cursor-pointer transition-colors flex items-center justify-center w-12 h-12"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
 
         </div>
 
        {/* Thin elegant separator */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-black/15 to-transparent mb-10" />
 
        {/* Bottom footer row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 text-xs text-slate-600 font-light">
          
          {/* Copyright lines */}
          <div className="text-center md:text-left">
            <span>© 2026 4 FOLDS DESIGN STUDIO. All rights reserved.</span>
            <span className="text-[10px] opacity-60 block md:inline md:ml-4">
              Designed around physical truths and cinematic weight.
            </span>
          </div>
 
          {/* Connected Socials */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social, sIdx) => (
              <a
                key={sIdx}
                href={social.href}
                className="flex items-center gap-1.5 hover:text-zinc-950 hover:font-medium transition-colors group"
              >
                <span>{social.icon}</span>
                <span className="hidden sm:inline group-hover:underline">{social.name}</span>
              </a>
            ))}
          </div>
 
        </div>

      </div>
    </footer>
  );
}
