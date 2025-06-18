import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      if (!formRef.current) return;

      await emailjs.sendForm(
        'service_lpy0gc5',
        'template_mdmplxe',
        formRef.current,
        'LsRTqM42ocK3sYOZ3'
        
      );

      setIsSubmitted(true);
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (err) {
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="section bg-white dark:bg-dark-800 py-20">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-secondary-500 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-dark-600 dark:text-gray-300 text-lg">
            Have a project in mind or want to discuss potential collaborations? 
            I'm always open to new opportunities and interesting conversations.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-dark-700 rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-8">
                  <CheckCircle2 size={64} className="text-green-500 mb-4" />
                  <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                  <p className="text-dark-600 dark:text-gray-300 text-center">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="from_name" className="block text-sm font-medium text-dark-700 dark:text-gray-300 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="from_name"
                        name="from_name"
                        required
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-600 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-dark-800 text-dark-800 dark:text-gray-100"
                        placeholder=""
                      />
                    </div>
                    <div>
                      <label htmlFor="from_email" className="block text-sm font-medium text-dark-700 dark:text-gray-300 mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="from_email"
                        name="from_email"
                        required
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-600 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-dark-800 text-dark-800 dark:text-gray-100"
                        placeholder=""
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-dark-700 dark:text-gray-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-600 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-dark-800 text-dark-800 dark:text-gray-100"
                      placeholder=""
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-gray-300 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-600 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-dark-800 text-dark-800 dark:text-gray-100"
                      placeholder=""
                    />
                  </div>

                  {error && (
                    <div className="mb-4 p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg">
                      {error}
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-lg font-medium text-white bg-primary-600 hover:bg-primary-700 transition-colors flex items-center justify-center ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;