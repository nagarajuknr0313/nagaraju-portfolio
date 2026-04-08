import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin } from 'lucide-react';
import SectionTitle from './common/SectionTitle';

/**
 * Contact Section
 * - Email contact form (using Formspree)
 * - Social media links
 * - Direct email link
 */
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using Formspree for free form submissions
      // Sign up at https://formspree.io and replace with your form ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'Send me an email',
      action: 'mailto:your.email@example.com',
      label: 'your.email@example.com'
    },
    {
      icon: Github,
      title: 'GitHub',
      description: 'Check my code',
      action: 'https://github.com',
      label: '@yourprofile'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      description: 'Connect with me',
      action: 'https://linkedin.com/in/yourprofile',
      label: 'View Profile'
    }
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Get In Touch" subtitle="Let's work together" />

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Left: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hello, feel free to reach out!
            </p>

            {/* Contact Methods */}
            <div className="space-y-4 mt-8">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={index}
                    href={method.action}
                    target={method.action.startsWith('http') ? '_blank' : undefined}
                    rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors group cursor-pointer"
                  >
                    <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900 group-hover:bg-primary-500 group-hover:text-white dark:group-hover:bg-primary-500 transition-colors">
                      <Icon size={24} className="text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                        {method.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        {method.description}
                      </p>
                      <p className="text-primary-600 dark:text-primary-400 text-sm font-medium mt-1">
                        {method.label}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {/* Name input */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                placeholder="Your name"
              />
            </div>

            {/* Email input */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Subject input */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                placeholder="Subject"
              />
            </div>

            {/* Message textarea */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                placeholder="Your message..."
              />
            </div>

            {/* Submit status messages */}
            {submitStatus === 'success' && (
              <div className="p-3 bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-800 rounded-lg text-green-700 dark:text-green-400 text-sm">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-3 bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400 text-sm">
                ✗ Failed to send message. Please try again.
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-primary-500 hover:bg-primary-600 disabled:bg-slate-400 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <Send size={20} />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {/* Form note */}
            <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
              💡 To enable the form, sign up at <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline">formspree.io</a> and update the form ID in Contact.jsx
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
