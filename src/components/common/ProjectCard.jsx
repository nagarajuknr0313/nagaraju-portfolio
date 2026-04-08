import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

/**
 * Reusable Project Card Component
 * - Project information display
 * - Technology tags
 * - Links to GitHub and demo
 * - Hover animations
 */
function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
      className="group rounded-xl overflow-hidden bg-white dark:bg-slate-700 shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Image/Emoji Section */}
      <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
        {project.image}
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-semibold rounded-full bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-200"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-4 border-t border-slate-200 dark:border-slate-600">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-semibold transition-colors"
          >
            <Github size={18} />
            GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-semibold transition-colors ml-auto"
          >
            Live Demo
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      {/* Highlights (shown on hover) */}
      <div className="hidden group-hover:block px-6 pb-6 border-t border-slate-200 dark:border-slate-600">
        <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Highlights:</h4>
        <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
          {project.highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-primary-500 mt-1">•</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
