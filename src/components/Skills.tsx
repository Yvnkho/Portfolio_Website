import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ShieldAlert, 
  Code, 
  Network,
  ServerCrash,
  FileSearch,
  Shield,
  Workflow,
  Database,
  LineChart,
  Globe,
  Layout
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  category: 'security' | 'development';
}

const skills: Skill[] = [
  // Security Skills - in the exact order requested
  { name: 'SIEM & Log Analysis', level: 95, icon: <FileSearch size={24} />, category: 'security' },
  { name: 'Vulnerability Assessment', level: 90, icon: <ServerCrash size={24} />, category: 'security' },
  { name: 'Network Traffic Analysis & Security', level: 88, icon: <LineChart size={24} />, category: 'security' },
  { name: 'Threat Intelligence & Incident Response', level: 85, icon: <Shield size={24} />, category: 'security' },
  { name: 'Firewall Configuration', level: 80, icon: <Network size={24} />, category: 'security' },
  { name: 'Penetration Testing & Blue Teaming', level: 75, icon: <ShieldAlert size={24} />, category: 'security' },
  
  // Development Skills - in the exact order requested
  { name: 'HTML & CSS', level: 90, icon: <Layout size={24} />, category: 'development' },
  { name: 'WordPress CMS', level: 90, icon: <Globe size={24} />, category: 'development' },
  { name: 'JavaScript/TypeScript', level: 75, icon: <Code size={24} />, category: 'development' },
  { name: 'React & Node.js', level: 70, icon: <Workflow size={24} />, category: 'development' },
  { name: 'SQL & NoSQL Databases', level: 70, icon: <Database size={24} />, category: 'development' }
];

const SkillBar: React.FC<{ skill: Skill, delay: number }> = ({ skill, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getColorClasses = (category: string) => {
    switch(category) {
      case 'security':
        return {
          icon: 'text-slate-500',
          bar: 'bg-slate-400'
        };
      default:
        return {
          icon: 'text-gray-500',
          bar: 'bg-gray-400'
        };
    }
  };

  const colorClasses = getColorClasses(skill.category);

  return (
    <motion.div 
      ref={ref}
      className="mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <div className="flex items-center mb-2">
        <div className={`mr-3 ${colorClasses.icon}`}>
          {skill.icon}
        </div>
        <h4 className="font-medium">{skill.name}</h4>
      </div>
      <div className="h-2.5 w-full bg-gray-200 rounded-full dark:bg-dark-700 overflow-hidden">
        <motion.div 
          className={`h-2.5 rounded-full ${colorClasses.bar}`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay * 0.1 + 0.3, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const securitySkills = skills.filter(skill => skill.category === 'security');
  const developmentSkills = skills.filter(skill => skill.category === 'development');

  return (
    <section id="skills" ref={ref} className="section bg-white dark:bg-dark-800 py-20">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-secondary-500 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-dark-600 dark:text-gray-300 text-lg">
            My expertise spans across cybersecurity and development, allowing me to approach 
            security challenges with a comprehensive understanding of modern technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <div className="flex items-center mb-4">
                <ShieldAlert size={24} className="text-slate-500 mr-2" />
                <h3 className="text-xl font-bold">🔐 Security</h3>
              </div>
              <p className="text-dark-600 dark:text-gray-300 mb-6">
                Comprehensive security expertise including SIEM analysis, vulnerability assessment,
                and network security with advanced threat analysis capabilities.
              </p>
            </motion.div>
            {securitySkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} delay={index} />
            ))}
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <div className="flex items-center mb-4">
                <Code size={24} className="text-gray-500 mr-2" />
                <h3 className="text-xl font-bold">🌐 Development</h3>
              </div>
              <p className="text-dark-600 dark:text-gray-300 mb-6">
                Strong foundation in web development with expertise in modern frameworks
                and secure application development practices.
              </p>
            </motion.div>
            {developmentSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} delay={index + securitySkills.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;