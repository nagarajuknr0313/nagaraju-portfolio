import React from 'react';
import { Briefcase, BookOpen } from 'lucide-react';

/**
 * Reusable Timeline Item Component
 * - Experience or Education entry
 * - Icon indicator
 * - Skills tags
 * - Timeline positioning
 */
function TimelineItem({ item, index }) {
  const isExperience = item.type === 'experience';
  
  return (
    <div className="relative">
      {/* Timeline dot */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
        <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full border-4 border-primary-500 flex items-center justify-center shadow-lg z-10">
          {isExperience ? (
            <Briefcase size={20} className="text-primary-500" />
          ) : (
            <BookOpen size={20} className="text-primary-500" />
          )}
        </div>
      </div>

      {/* Content */}
      <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:ml-0 ml-0' : 'md:pl-12 md:mr-0 ml-0'}`}>
        <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          {/* Mobile icon */}
          <div className="md:hidden flex items-center gap-3 mb-4">
            {isExperience ? (
              <Briefcase size={20} className="text-primary-500" />
            ) : (
              <BookOpen size={20} className="text-primary-500" />
            )}
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300">
              {item.type}
            </span>
          </div>

          {/* Title and company */}
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
            {item.title}
          </h3>
          <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2">
            {item.company}
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            {item.date}
          </p>

          {/* Description */}
          <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
            {item.description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {item.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-300"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Edit Indicator */}
          {item.isEditable && (
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-4 italic">
              ✏️ Editable field - Update in source code
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TimelineItem;
