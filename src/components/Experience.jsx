import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './common/SectionTitle';
import TimelineItem from './common/TimelineItem';

/**
 * Experience & Education Section
 * - Work experience timeline
 * - Education details
 * - Editable placeholders
 */
function Experience() {
  const experiences = [
    {
      type: 'experience',
      title: 'Senior Frontend Developer',
      company: 'Tech Company Name',
      date: 'Jan 2022 - Present',
      description: 'Lead frontend development projects, mentor junior developers, and implement modern React architectures.',
      skills: ['React', 'TypeScript', 'Leadership'],
      isEditable: true
    },
    {
      type: 'experience',
      title: 'Frontend Developer',
      company: 'Previous Company',
      date: 'Jun 2020 - Dec 2021',
      description: 'Developed responsive web applications using React and Tailwind CSS. Implemented AI features and optimized performance.',
      skills: ['React', 'JavaScript', 'UI/UX'],
      isEditable: true
    },
    {
      type: 'education',
      title: 'Bachelor of Technology (B.Tech)',
      company: 'Your University Name',
      date: '2016 - 2020',
      description: 'Computer Science & Engineering. Focused on software development and AI technologies.',
      skills: ['Data Structures', 'Algorithms', 'Web Dev'],
      isEditable: true
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        <SectionTitle 
          title="Experience & Education" 
          subtitle="My professional journey" 
        />

        {/* Timeline */}
        <div className="relative">
          {/* Timeline vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-primary-300 dark:to-primary-700" />

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <TimelineItem item={item} index={index} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Edit Note */}
        <div className="mt-12 p-4 bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-lg text-center">
          <p className="text-sm text-primary-800 dark:text-primary-300">
            💡 <strong>Tip:</strong> Edit the experience and education details in the Experience.jsx file to match your profile
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
