import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

/**
 * Hero Section
 * - Welcome message with name and title
 * - Call-to-action buttons
 * - Social media links
 * - Animated scroll indicator
 */
function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 gradient-text"
        >
          Nagaraju Kommanaboyina
        </motion.h1>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-slate-600 dark:text-slate-400"
        >
          Frontend Developer <span className="text-primary-500">|</span> AI App Developer
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          I build elegant, user-friendly web applications with modern technologies. 
          Specializing in React, AI integrations, and creating seamless user experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <button
            onClick={handleContactClick}
            className="px-8 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </button>
          <a
            href="#projects"
            className="px-8 py-3 border-2 border-primary-500 text-primary-500 dark:text-primary-400 rounded-lg font-semibold hover:bg-primary-500 hover:text-white transition-colors"
          >
            View My Work
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-200 dark:bg-slate-800 rounded-full hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-200 dark:bg-slate-800 rounded-full hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="p-3 bg-slate-200 dark:bg-slate-800 rounded-full hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-12 flex justify-center"
        >
          <ArrowDown className="text-primary-500" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
