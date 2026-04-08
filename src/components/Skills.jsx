import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './common/SectionTitle';
import SkillCategory from './common/SkillCategory';

/**
 * Skills Section
 * - Categorized skills display
 * - Frontend, Backend, Tools, and AI/ML categories
 * - Proficiency levels visualization
 */
function Skills() {
  const skillCategories = [
    {
      name: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'React', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Framer Motion', level: 85 },
        { name: 'Redux', level: 80 },
      ]
    },
    {
      name: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'REST APIs', level: 90 },
      ]
    },
    {
      name: 'AI & ML',
      icon: '🤖',
      skills: [
        { name: 'OpenAI API', level: 85 },
        { name: 'LLMs', level: 82 },
        { name: 'Python', level: 80 },
        { name: 'NLP', level: 78 },
        { name: 'Prompt Engineering', level: 88 },
        { name: 'LangChain', level: 80 },
      ]
    },
    {
      name: 'Tools & DevOps',
      icon: '🛠️',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 70 },
        { name: 'Vercel', level: 85 },
        { name: 'Linux', level: 75 },
      ]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Skills & Expertise" subtitle="Technologies I work with" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
