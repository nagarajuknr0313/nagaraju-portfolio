import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

/**
 * Footer Component
 * - Copyright information
 * - Social links
 * - Quick navigation
 * - Attribution
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:your.email@example.com'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white transition-colors duration-300">
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-2">NK</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Frontend Developer & AI App Developer building elegant digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-800 hover:bg-primary-500 rounded-lg transition-colors"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          {/* Bottom content */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <p className="flex items-center gap-1 mb-4 md:mb-0">
              © {currentYear} Nagaraju Kommanaboyina. Made with <Heart size={16} className="text-red-500" /> 
            </p>
            <p>
              Deployed on <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">Vercel</a>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-slate-400 hover:text-primary-400 transition-colors text-sm"
        >
          ↑ Back to top
        </button>
      </div>
    </footer>
  );
}

export default Footer;
