import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShieldCheck, Code } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" ref={ref} className="section bg-white dark:bg-dark-800 py-20">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who I am</h2>
          <div className="w-20 h-1 bg-secondary-500 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-dark-600 dark:text-gray-300 text-lg">
            I'm a cybersecurity professional  with 2 years of experience in protecting 
                digital assets and creating secure systems. My journey in tech began with a fascination 
                for how things work and how they can be broken.
            With expertise spanning across multiple domains, I bring a unique perspective to every project.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <div className="space-y-6 mb-12">
              <p className="text-dark-600 dark:text-gray-300 text-lg leading-relaxed">
                Beyond security, I'm passionate about web development and creating intuitive, beautiful 
                user interfaces. This unique combination allows me to build systems that are not only 
                secure but also a joy to use.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center mb-4">
                  <ShieldCheck className="w-8 h-8 text-secondary-500" />
                </div>
                <h4 className="font-bold text-lg mb-2">Security Expertise</h4>
                <p className="text-dark-500 dark:text-gray-400">
                  Penetration testing, Network security and vulnerability assessment
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-4">
                  <Code className="w-8 h-8 text-primary-500" />
                </div>
                <h4 className="font-bold text-lg mb-2">Development Skills</h4>
                <p className="text-dark-500 dark:text-gray-400">
                  Full-stack web/app development with focus on secure application architecture
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;