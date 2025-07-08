import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, Building, GraduationCap } from 'lucide-react';

interface TimelineItem {
  id: number;
  title: string;
  location: string;
  description: string;
  date: string;
  icon: 'work' | 'education';
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "Cybersecurity Engineer",
    location: "Malawi Research and Education Network (MAREN)",
    description: "Designed and implemented security infrastructure for cloud-based applications. Developed automated security testing tools. Conducted vulnerability assessments and implemented security protocols.",
    date: "2024 - Present",
    icon: "work"
  },
  
  {
    id: 2,
    title: "ICT Associate",
    location: "Kwathu Kollective (Ntha Foundation)",
    description: "Led ICT operations including infrastructure management, user support, and LMS development. Delivered digital literacy training, maintained WordPress platforms, and ensured system security, performance, and documentation.",
    date: "01/2024 - 10/2024",
    icon: "work"
  },
  {
    id: 3,
    title: "BSc in Computer Systems and Security",
    location: "Malawi University of Science and Technology (MUST)",
    description: "Focus on software engineering and cybersecurity. Graduated with Credit.",
    date: "2019 - 2024",
    icon: "education"
  }
];

const TimelineItem: React.FC<{ item: TimelineItem; index: number; isInView: boolean }> = ({ 
  item, 
  index, 
  isInView 
}) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`mb-8 flex justify-between items-center w-full ${
      isEven ? 'flex-row-reverse' : ''
    }`}>
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <div className="mx-auto font-semibold text-lg text-white">
          {item.icon === 'work' ? (
            <Briefcase size={16} />
          ) : (
            <GraduationCap size={16} />
          )}
        </div>
      </div>
      <motion.div 
        className={`order-1 bg-white dark:bg-dark-700 rounded-lg shadow-md w-5/12 px-6 py-4 ${
          isEven ? 'text-right' : 'text-left'
        }`}
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 50 : -50 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <div className={`flex items-center ${isEven ? 'justify-end' : 'justify-start'} mb-2`}>
          <div className={`flex items-center text-sm text-dark-500 dark:text-gray-400`}>
            <Calendar size={12} className="mr-1" />
            <span>{item.date}</span>
          </div>
        </div>
        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
        <div className={`flex items-center text-dark-500 dark:text-gray-400 text-sm mb-2 ${
          isEven ? 'justify-end' : 'justify-start'
        }`}>
          <Building size={14} className="mr-1" />
          <span>{item.location}</span>
        </div>
        <p className="text-dark-600 dark:text-gray-300 text-sm leading-snug tracking-wide">
          {item.description}
        </p>
      </motion.div>
    </div>
  );
};

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" ref={ref} className="section bg-gray-50 dark:bg-dark-900 py-20">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-secondary-500 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-dark-600 dark:text-gray-300 text-lg">
            My professional journey and academic background have shaped me into the security-focused
            professional I am today.
          </p>
        </motion.div>

        <div className="relative wrap overflow-hidden">
          <div className="absolute border-opacity-20 border-gray-400 dark:border-gray-600 h-full border left-1/2"></div>
          
          {timelineData.map((item, index) => (
            <TimelineItem 
              key={item.id} 
              item={item} 
              index={index} 
              isInView={inView} 
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-xl font-bold mb-4">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white dark:bg-dark-700 px-4 py-2 rounded-lg shadow-sm">
              <span className="font-medium">Cisco CyberOps Associate</span>
            </div>
            <div className="bg-white dark:bg-dark-700 px-4 py-2 rounded-lg shadow-sm">
              <span className="font-medium">ISC2 CC</span>
            </div>
            {/*<div className="bg-white dark:bg-dark-700 px-4 py-2 rounded-lg shadow-sm">
              <span className="font-medium">OSCP</span>
            </div>
            <div className="bg-white dark:bg-dark-700 px-4 py-2 rounded-lg shadow-sm">
              <span className="font-medium">AWS Security Specialist</span>
            </div>*/}
            <div className="bg-white dark:bg-dark-700 px-4 py-2 rounded-lg shadow-sm">
              <span className="font-medium">Google Project Management</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;