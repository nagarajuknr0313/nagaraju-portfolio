import React from 'react';

/**
 * Reusable Section Title Component
 * - Main title with gradient text
 * - Optional subtitle
 */
function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-slate-600 dark:text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;
