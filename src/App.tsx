/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Metrics from './components/Metrics';
import Timeline from './components/Timeline';
import Services from './components/Services';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about-section', label: 'Philosophy' },
  { id: 'portfolio-section', label: 'Works' },
  { id: 'metrics-section', label: 'Metrics' },
  { id: 'timeline-section', label: 'Process' },
  { id: 'services-section', label: 'Services' },
  { id: 'showcase-section', label: 'Showcase' },
  { id: 'testimonials-section', label: 'Reviews' },
  { id: 'contact-section', label: 'Consult' }
];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isSnapping, setIsSnapping] = useState(true);

  useEffect(() => {
    const observerOptions = {
      root: null, // relative to viewport
      rootMargin: '-40% 0px -40% 0px', // trigger more reliably when section occupies the center of the screen
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    // Custom Scroll event listener for external triggers
    const handleScrollEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ targetId: string }>;
      if (customEvent.detail && customEvent.detail.targetId) {
        handleDotClick(customEvent.detail.targetId);
      }
    };

    window.addEventListener('scrollToSection', handleScrollEvent as EventListener);

    return () => {
      observer.disconnect();
      window.removeEventListener('scrollToSection', handleScrollEvent as EventListener);
    };
  }, []);

  const handleDotClick = (id: string) => {
    setIsSnapping(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    // Re-enable CSS snaps safely after the smooth scroll completes
    setTimeout(() => {
      setIsSnapping(true);
    }, 1000);
  };

  return (
    <main
      id="main-scroll-container"
      className={`h-screen w-full overflow-y-scroll no-scrollbar scroll-smooth relative selection:bg-zinc-900 selection:text-white text-zinc-900 bg-[#faf9f6] ${
        isSnapping ? 'snap-y snap-mandatory' : ''
      }`}
    >
      {/* Absolute Decorative Background Orbs across pages scroll */}
      <div className="absolute top-[120vh] -left-[15rem] w-[40rem] h-[40rem] rounded-full bg-cyan-500/4 blur-[130px] pointer-events-none z-0" />
      <div className="absolute top-[280vh] -right-[15rem] w-[50rem] h-[50rem] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[450vh] -left-[20rem] w-[45rem] h-[45rem] rounded-full bg-purple-500/4 blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-[650vh] -right-[15rem] w-[45rem] h-[45rem] rounded-full bg-teal-500/4 blur-[140px] pointer-events-none z-0" />

      {/* Structured Sections fitting viewport snaps */}
      <div className="relative z-10 w-full flex flex-col">
        {/* 1. Hero Section Section */}
        <div id="home" className="snap-start snap-always w-full h-screen shrink-0 overflow-hidden relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            <Hero />
          </motion.div>
        </div>

        {/* 2. Philosophy & About Sector */}
        <div id="about-section" className="snap-start snap-always w-full h-screen shrink-0 overflow-y-auto no-scrollbar relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            <About />
          </motion.div>
        </div>

        {/* 3. Portfolio & Built Commissions */}
        <div id="portfolio-section" className="snap-start snap-always w-full h-screen shrink-0 overflow-y-auto no-scrollbar relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            <Portfolio />
          </motion.div>
        </div>

        {/* 4. Global Studio Metrics */}
        <div id="metrics-section" className="snap-start snap-always w-full h-screen shrink-0 overflow-y-auto no-scrollbar flex flex-col justify-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <Metrics />
          </motion.div>
        </div>

        {/* 5. Precise Development Phases */}
        <div id="timeline-section" className="snap-start snap-always w-full h-screen shrink-0 overflow-y-auto no-scrollbar relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            <Timeline />
          </motion.div>
        </div>

        {/* 6. Capabilities & Bento Layouts */}
        <div id="services-section" className="snap-start snap-always w-full h-screen shrink-0 overflow-y-auto no-scrollbar relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            <Services />
          </motion.div>
        </div>

        {/* 7. Immersive Cinematic Film Showcase */}
        <div id="showcase-section" className="snap-start snap-always w-full h-screen shrink-0 overflow-y-auto no-scrollbar relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            <Showcase />
          </motion.div>
        </div>

        {/* 8. Testimonials & Client Reviews */}
        <div id="testimonials-section" className="snap-start snap-always w-full h-screen shrink-0 overflow-y-auto no-scrollbar flex flex-col justify-center relative justify-items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <Testimonials />
          </motion.div>
        </div>

        {/* 9. Proposal Consultations + Luxury Footer combined inside final unified viewport snap */}
        <div id="contact-section" className="snap-start snap-always w-full h-screen shrink-0 overflow-y-auto no-scrollbar relative flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-grow flex flex-col h-full justify-between"
          >
            <div className="flex-grow flex items-center justify-center">
              <Contact />
            </div>
            <Footer />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
