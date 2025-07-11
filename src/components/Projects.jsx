import { motion } from 'framer-motion';
import { FaProjectDiagram, FaArrowDown } from 'react-icons/fa';
import { BsBoxArrowUpRight } from 'react-icons/bs';

// ✅ Imported images
import blockchainCertImg from '../assets/Digital.jpg';
import hospitalImg from '../assets/Hospital-Management-System.jpg';
import portfolioImg from '../assets/Portfolio.jpg';

// ✅ Project List
const projectList = [
  {
    title: 'Digital Certificate System (Blockchain)',
    description:
      'Eliminates time-consuming manual certificate verification for organizations. Reduces fraud and enhances transparency using blockchain.',
    image: blockchainCertImg,
    tech: ['Blockchain', 'Smart Contracts', 'Ethereum'],
    liveLink: '#',
  },
  {
    title: 'Hospital Management System',
    description:
      'A complete management system to handle patients, doctors, appointments, billing, and records using Java and MySQL.',
    image: hospitalImg,
    tech: ['Java', 'MySQL', 'Swing'],
    liveLink: '#',
  },
  {
    title: 'Portfolio Website',
    description:
      'Responsive developer portfolio made with React, Tailwind CSS and Framer Motion to showcase projects and skills attractively.',
    image: portfolioImg,
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    liveLink: '#',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-16 px-4 bg-gradient-to-br from-purple-100 to-blue-200 dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-3 mb-2">
            <FaProjectDiagram className="text-3xl text-cyan-600 dark:text-cyan-400" />
            <h2 className="text-3xl sm:text-4xl font-bold text-cyan-700 dark:text-cyan-400">Projects</h2>
          </div>
          <div className="w-20 h-1 bg-cyan-600 dark:bg-cyan-400 rounded-full animate-pulse"></div>
          <p className="text-center text-gray-600 dark:text-gray-300 mt-3">My academic and personal project highlights</p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projectList.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white/80 dark:bg-white/10 border border-white/20 rounded-xl shadow-xl p-4 backdrop-blur-sm transition-all duration-300 hover:shadow-cyan-300/30 dark:hover:shadow-cyan-500/20"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg mb-4 border border-white/20"
              />
              <h3 className="text-xl font-semibold text-cyan-700 dark:text-cyan-400 mb-2">{project.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-300 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-cyan-600 dark:text-cyan-400 hover:underline text-sm"
              >
                <BsBoxArrowUpRight /> View Project
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll Down Arrow - Right Corner */}
      <a
        href="#contact"
        className="absolute bottom-6 right-6 sm:right-10 text-white dark:text-cyan-400 hover:text-cyan-500 transition text-2xl sm:text-3xl animate-bounce z-10"
        aria-label="Scroll to Contact"
      >
        <FaArrowDown />
      </a>
    </section>
  );
};

export default Projects;
