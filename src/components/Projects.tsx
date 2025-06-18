import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Lock, Globe } from 'lucide-react';
import * as LucideReact from 'lucide-react';
import { projects } from '../data/projects';

const ProjectCard: React.FC<{ project: any }> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="card overflow-hidden group"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48 md:h-56">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/40 to-transparent p-4 flex flex-col justify-end">
          <div className="flex gap-2 mb-2">
            {project.category === 'security' ? (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-100 text-accent-800">
                <Lock size={12} className="mr-1" />
                Security
              </span>
            ) : (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                <Globe size={12} className="mr-1" />
                Web Dev
              </span>
            )}
          </div>
          <h3 className="text-lg font-bold text-white">{project.title}</h3>
        </div>
      </div>
      
      <div className="p-5">
        <p className="text-dark-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string, index: number) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 rounded-full bg-gray-100 text-dark-600 dark:bg-dark-700 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          {project.links.live && (
            <a 
              href={project.links.live} 
              className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={16} className="mr-1" />
              Live
            </a>
          )}
          {project.links.github && (
            <a 
              href={project.links.github} 
              className="inline-flex items-center text-sm font-medium text-dark-600 hover:text-dark-800 dark:text-gray-400 dark:hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LucideReact.Github size={16} className="mr-1" />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'security' | 'web'>('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
    
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section 
      id="projects" 
      ref={ref} 
      className="section bg-gray-50 dark:bg-dark-900 py-20"
    >
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-secondary-500 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-dark-600 dark:text-gray-300 text-lg">
            A selection of my work across web development and cybersecurity, showcasing my
            commitment to creating secure and user-friendly applications.
          </p>
        </motion.div>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md shadow-sm bg-white dark:bg-dark-800 p-1">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                filter === 'all'
                  ? 'bg-primary-500 text-white'
                  : 'text-dark-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-dark-700'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('security')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                filter === 'security'
                  ? 'bg-primary-500 text-white'
                  : 'text-dark-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-dark-700'
              }`}
            >
              Security
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                filter === 'web'
                  ? 'bg-primary-500 text-white'
                  : 'text-dark-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-dark-700'
              }`}
            >
              Web Dev
            </button>
          </div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;