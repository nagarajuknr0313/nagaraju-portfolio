import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './common/SectionTitle';

/**
 * About Section
 * - Personal introduction
 * - Key highlights
 * - Skills overview (linked to Skills section)
 */
function About() {
  const highlights = [
    '5+ years of web development experience',
    'Expert in React and modern JavaScript',
    'AI & Machine Learning integration',
    'Full-stack development capabilities',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="About Me" subtitle="Learn more about who I am" />

        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              I'm a passionate frontend developer with a keen interest in artificial intelligence 
              and creating meaningful digital experiences. My journey in tech started with curiosity 
              and has evolved into a career dedicated to building elegant solutions.
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              I specialize in transforming complex problems into simple, beautiful, and intuitive 
              designs. Whether it's building responsive web applications or integrating AI capabilities, 
              I'm committed to delivering high-quality work.
            </p>

            {/* Highlights */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3 mt-8"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary-500 mt-1 flex-shrink-0" />
                  <p className="text-slate-700 dark:text-slate-300">{highlight}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-sm aspect-square rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 shadow-lg flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">👨‍💻</div>
                <p className="text-xl font-semibold">Your Photo Here</p>
                <p className="text-sm opacity-90 mt-2">Add your professional photo</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
