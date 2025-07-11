import { motion } from 'framer-motion';
import {
  FaJava, FaReact, FaHtml5, FaCss3Alt, FaBootstrap,
  FaTools, FaLaptopCode,
} from 'react-icons/fa';
import {
  SiSpringboot, SiJavascript, SiMysql,
} from 'react-icons/si';
import { FaChevronDown } from 'react-icons/fa6';
import { MdStorage } from 'react-icons/md';

const skillCategories = {
  'Frontend': [
    { icon: FaHtml5, name: 'HTML5' },
    { icon: FaCss3Alt, name: 'CSS3' },
    { icon: FaBootstrap, name: 'Bootstrap' },
    { icon: SiJavascript, name: 'JavaScript' },
    { icon: FaReact, name: 'React JS' },
  ],
  'Backend': [
    { icon: FaJava, name: 'Core Java' },
    { icon: SiSpringboot, name: 'Spring Boot' },
  ],
  'Database': [
    { icon: SiMysql, name: 'MySQL' },
    { icon: MdStorage, name: 'SQL' },
  ]
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 px-4 bg-gradient-to-br from-purple-100 to-indigo-200 dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-white transition-all duration-300"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header with icon and underline */}
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-3 mb-2">
            <FaTools className="text-3xl text-cyan-600 dark:text-cyan-400" />
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-cyan-700 dark:text-cyan-400">
              Skills
            </h2>
          </div>
          <div className="w-20 h-1 bg-cyan-600 dark:bg-cyan-400 rounded-full animate-pulse"></div>
          <p className="text-center text-gray-600 dark:text-gray-300 mt-3">
            Technologies & tools I work with
          </p>
        </div>

        {/* Skill Categories */}
        <div className="space-y-12">
          {Object.entries(skillCategories).map(([category, skills], idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-cyan-700 dark:text-cyan-400">
                {category === 'Frontend' && <FaLaptopCode />}
                {category === 'Backend' && <FaJava />}
                {category === 'Database' && <MdStorage />}
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="flex flex-col items-center justify-center bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl shadow-md p-4 hover:shadow-lg hover:shadow-cyan-300/30 dark:hover:shadow-cyan-500/20 transition-all duration-300"
                  >
                    <skill.icon className="text-4xl mb-2 text-cyan-600 dark:text-cyan-400" />
                    <p className="font-medium text-center">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Down Arrow Animation */}
        <div className="flex justify-center mt-12">
          <FaChevronDown className="animate-bounce text-2xl text-cyan-600 dark:text-cyan-400" />
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
