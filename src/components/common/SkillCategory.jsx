import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable Skill Category Component
 * - Category name with icon
 * - Skills with proficiency bars
 * - Smooth animations
 */
function SkillCategory({ category }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800 hover:shadow-lg transition-shadow duration-300"
    >
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="text-3xl">{category.icon}</div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
          {category.name}
        </h3>
      </div>

      {/* Skills List */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-4"
      >
        {category.skills.map((skill, index) => (
          <motion.div key={index} variants={itemVariants}>
            {/* Skill name and percentage */}
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                {skill.name}
              </span>
              <span className="text-xs font-bold text-primary-600 dark:text-primary-400">
                {skill.level}%
              </span>
            </div>

            {/* Proficiency bar */}
            <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 1, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default SkillCategory;
