import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Shield, Workflow } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg")',
      }}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 flex items-center justify-center gap-4">
            <div className="flex items-center gap-2 py-1 px-3 rounded-full text-xs font-medium bg-primary-100/10 text-primary-300">
              <Shield size={14} />
              <span>Cybersecurity Engineer</span>
            </div>
            <div className="flex items-center gap-2 py-1 px-3 rounded-full text-xs font-medium bg-secondary-100/10 text-secondary-300">
              <Workflow size={14} />
              <span>Web/App Developer</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-white">
            Securing the <span className="gradient-text">digital world</span>, one line of code at a time
          </h1>
          
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
           Hi 👋🏽, I'm Yankho. My superpower is cyber security and software development. 
             Whether it’s defending systems or crafting seamless apps, 
             I’m here to turn ideas into secure realities.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#projects" className="cta-button">
              View My Work
            </a>
            <a href="#contact" className="secondary-button">
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <motion.a
          href="#about"
          className="animate-bounce p-2 rounded-full bg-white/10 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <ChevronDown size={24} className="text-white" />
        </motion.a>
      </div>
      
      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 24px 24px;
        }
      `}</style>
    </section>
  );
};

export default Hero;