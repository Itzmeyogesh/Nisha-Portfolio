import { motion } from 'framer-motion';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLanguage,
  FaJava,
  FaDatabase,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaTools,
  FaArrowDown,
} from 'react-icons/fa';

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen px-4 py-16 bg-gradient-to-tr from-[#d1c4e9] via-[#bbdefb] to-[#c8e6c9] dark:from-[#1f1f2e] dark:via-[#2a2a3d] dark:to-[#1c1c2b] text-gray-800 dark:text-white transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full bg-white/60 dark:bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6 sm:p-10 shadow-2xl ring-1 ring-white/20 hover:ring-cyan-500/40 hover:scale-[1.01] transition-all duration-300"
        >
          {/* Heading */}
          <div className="mb-6 text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-cyan-700 dark:text-cyan-400 relative inline-block">
              About Me
              <span className="block h-1 w-16 bg-cyan-500 dark:bg-cyan-400 mx-auto mt-2 rounded-full animate-pulse" />
            </h2>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg leading-relaxed sm:leading-8 tracking-wide text-justify text-gray-700 dark:text-gray-200">
            I’m a passionate Java Backend Developer based in Hadapsar, Pune with strong fundamentals in Java, Spring Boot,
            Hibernate, and SQL. I have internship experience contributing to backend architecture and building RESTful APIs.
            I’m a fast learner, multilingual (English, Hindi, Marathi), and always eager to embrace new technologies.
          </p>

          {/* Contact Info */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5 text-base sm:text-lg">
            {[
              { icon: FaEnvelope, label: 'patolenisha59@gmail.com' },
              { icon: FaPhoneAlt, label: '+91-9765128389' },
              { icon: FaMapMarkerAlt, label: 'Hadapsar, Pune' },
              { icon: FaLanguage, label: 'English, Hindi, Marathi' },
            ].map((item, index) => (
              <p key={index} className="flex items-center gap-3">
                <item.icon className="text-cyan-600 dark:text-cyan-400 text-xl" />
                <span>{item.label}</span>
              </p>
            ))}
          </div>

          {/* Skills Section */}
          <h3 className="text-2xl font-semibold mt-12 mb-6 text-center text-cyan-700 dark:text-cyan-400 underline underline-offset-4 decoration-cyan-400">
            Technical Skills
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: FaJava, label: 'Core Java', color: 'text-orange-600' },
              { icon: FaDatabase, label: 'MySQL', color: 'text-blue-700' },
              { icon: FaReact, label: 'React JS', color: 'text-cyan-500' },
              { icon: FaJs, label: 'JavaScript', color: 'text-yellow-500' },
              { icon: FaHtml5, label: 'HTML5', color: 'text-orange-500' },
              { icon: FaCss3Alt, label: 'CSS3', color: 'text-blue-500' },
              { icon: FaBootstrap, label: 'Bootstrap', color: 'text-indigo-700' },
              { icon: FaTools, label: 'Spring Boot / Hibernate', color: 'text-gray-600 dark:text-gray-300' },
            ].map((skill, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.12 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="flex flex-col items-center gap-2 p-4 bg-white/80 dark:bg-white/10 border border-white/20 rounded-xl shadow-md hover:shadow-cyan-400/30 transition-all duration-300"
              >
                <skill.icon size={36} className={`${skill.color}`} />
                <span className="font-medium">{skill.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Arrow */}
      <a
        href="#projects"
        aria-label="Scroll to Projects section"
        className="absolute bottom-6 right-6 sm:right-10 text-cyan-700 dark:text-cyan-300 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-full text-2xl sm:text-3xl animate-bounce z-20 transition duration-300"
      >
        <FaArrowDown />
      </a>
    </section>
  );
};

export default About;
