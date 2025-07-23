'use client';

import { motion, useAnimation, Variants } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Packages from './components/Packages';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Variants para animación fade+slide
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.3,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

export default function Home() {
  // Hook para detectar si la sección está en viewport
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  return (
    <>
      {/* Animar toda la página con fade-in */}
      <motion.main
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 1 } },
        }}
        className="bg-white text-gray-800"
      >
        {/* Header no animado para mejor UX */}
        <Header />

        {/* Animamos las secciones por separado para stagger */}
        <motion.section
          ref={ref}
          variants={sectionVariants}
          initial="hidden"
          animate={controls}
          custom={0}
          className="overflow-hidden"
        >
          <Hero />
        </motion.section>

        <motion.section variants={sectionVariants} initial="hidden" animate="visible" custom={1}>
          <Services />
        </motion.section>

        <motion.section variants={sectionVariants} initial="hidden" animate="visible" custom={2}>
          <WhyUs />
        </motion.section>

        <motion.section variants={sectionVariants} initial="hidden" animate="visible" custom={3}>
          <Portfolio />
        </motion.section>

        <motion.section variants={sectionVariants} initial="hidden" animate="visible" custom={4}>
          <About />
        </motion.section>

        <motion.section variants={sectionVariants} initial="hidden" animate="visible" custom={5}>
          <Packages />
        </motion.section>

        <motion.section variants={sectionVariants} initial="hidden" animate="visible" custom={6}>
          <Testimonials />
        </motion.section>

        <motion.section variants={sectionVariants} initial="hidden" animate="visible" custom={7}>
          <Blog />
        </motion.section>

        <motion.section variants={sectionVariants} initial="hidden" animate="visible" custom={8}>
          <Process />
        </motion.section>

        <motion.section variants={sectionVariants} initial="hidden" animate="visible" custom={9}>
          <FAQ />
        </motion.section>

        <motion.section variants={sectionVariants} initial="hidden" animate="visible" custom={10}>
          <Contact />
        </motion.section>

        <motion.section variants={sectionVariants} initial="hidden" animate="visible" custom={11}>
          <Footer />
        </motion.section>

        {/* Botón WhatsApp animado con loop */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          className="fixed bottom-8 right-8 z-50"
        >
          <WhatsAppButton />
        </motion.div>
      </motion.main>
    </>
  );
}
