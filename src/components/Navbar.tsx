import { motion } from 'motion/react';
import { ChevronRight, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const menuItems = [
    { name: 'Philosophy', id: 'about-section' },
    { name: 'Works', id: 'portfolio-section' },
    { name: 'Process', id: 'timeline-section' },
    { name: 'Services', id: 'services-section' },
  ];

  const handleScrollToSection = (id: string) => {
    window.dispatchEvent(new CustomEvent('scrollToSection', { detail: { targetId: id } }));
  };

  const handleScrollToContact = () => {
    window.dispatchEvent(new CustomEvent('scrollToSection', { detail: { targetId: 'contact-section' } }));
  };

  return (
    <nav className="flex items-center justify-between py-6 px-6 md:px-10 w-full relative z-10" id="navbar">
      {/* Left Side (hidden spacer for centering as per requirement, but we can also put a desktop logo here for architectural realism, keeping it responsive and elegant) */}
      <div className="flex-1 hidden md:block">
        <span className="font-regular tracking-tighter text-2xl text-white cursor-pointer select-none font-sans block">
          4 FOLDS <span className="text-[10px] tracking-widest uppercase opacity-75 font-light ml-1 font-mono">DESIGN STUDIO</span>
        </span>
      </div>

      {/* Center Menu */}
      <ul className="hidden md:flex items-center gap-8 text-slate-300 font-medium text-xs uppercase tracking-wider">
        {menuItems.map((item) => (
          <li
            key={item.name}
            onClick={() => handleScrollToSection(item.id)}
            className="cursor-pointer hover:text-white transition-colors flex items-center gap-1 group"
          >
            <span>{item.name}</span>
          </li>
        ))}
      </ul>

      {/* Mobile Logo */}
      <div className="md:hidden">
        <span className="font-regular tracking-tighter text-xl text-white font-sans">4 FOLDS</span>
      </div>

      {/* Right Button */}
      <div className="flex-1 flex justify-end">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleScrollToContact}
          className="flex items-center bg-white text-zinc-950 rounded-full pl-2 pr-4 md:pr-6 py-1.5 md:py-2 gap-2 md:gap-3 hover:bg-white/90 border border-white transition-colors group cursor-pointer shadow-lg"
        >
          <div className="bg-black/10 p-1 md:p-1.5 rounded-full flex items-center justify-center border border-black/5">
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-zinc-950" />
          </div>
          <span className="text-xs md:text-sm font-semibold">Book Consultation</span>
        </motion.button>
      </div>
    </nav>
  );
}
