import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import SectionTitle from './common/SectionTitle';
import ProjectCard from './common/ProjectCard';

/**
 * Projects Section
 * - Showcase of key projects
 * - Project filtering capability
 * - Links to GitHub and live demos
 */
function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'AI Chat Application',
      description: 'A real-time chat application powered by AI. Features intelligent responses, conversation history, and multi-user support with a beautiful UI.',
      image: '🤖',
      technologies: ['React', 'Node.js', 'OpenAI API', 'WebSocket', 'MongoDB'],
      category: 'ai',
      github: 'https://github.com',
      demo: 'https://example.com',
      highlights: [
        'Real-time messaging with WebSocket',
        'AI-powered responses',
        'User authentication',
        'Conversation history'
      ]
    },
    {
      id: 2,
      title: 'AI Resume Analyzer',
      description: 'Intelligent resume analysis tool that uses AI to evaluate resumes, provide feedback, and suggest improvements. Includes ATS optimization.',
      image: '📄',
      technologies: ['React', 'Python', 'NLP', 'TailwindCSS', 'FastAPI'],
      category: 'ai',
      github: 'https://github.com',
      demo: 'https://example.com',
      highlights: [
        'Resume parsing and analysis',
        'ATS optimization scoring',
        'Skills extraction',
        'Improvement suggestions'
      ]
    },
    {
      id: 3,
      title: 'AI Task Agent',
      description: 'An intelligent task automation agent that can understand natural language commands and execute various tasks. Features adaptive learning and context awareness.',
      image: '⚙️',
      technologies: ['React', 'Python', 'LLM', 'Redis', 'Express'],
      category: 'ai',
      github: 'https://github.com',
      demo: 'https://example.com',
      highlights: [
        'Natural language processing',
        'Task automation',
        'Learning from interactions',
        'Multi-task capability'
      ]
    },
  ];

  const categories = ['all', 'ai', 'web', 'other'];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Featured Projects" subtitle="Showcasing my best work" />

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all capitalize ${
                activeFilter === category
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white hover:shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
