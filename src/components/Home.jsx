import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaArrowDown } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import profileImg from '../assets/profile.jpg'; // Ensure correct path

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white px-4 overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#1e3a8a] via-[#4f46e5] to-[#8b5cf6] animate-gradientBlur" />

      {/* Glassmorphic Content Box */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 bg-white/10 dark:bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl text-center max-w-3xl w-full border border-white/20 ring-1 ring-white/10"
      >
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <img
            src={profileImg}
            alt="Profile"
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-cyan-400 shadow-lg object-cover"
          />
        </div>

        {/* Name & Typewriter */}
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 tracking-tight text-white drop-shadow-md">
          Hi, I'm Nisha Patole
        </h1>

        <div className="text-xl sm:text-2xl font-light text-cyan-300 mb-6">
          <Typewriter
            options={{
              strings: ['Java Backend Developer', 'Spring Boot Enthusiast', 'Passionate Coder'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        {/* Objective */}
        <p className="text-sm sm:text-base text-gray-200 mb-6 max-w-2xl mx-auto leading-relaxed">
          Career Objective: Highly motivated and detail-oriented computer engineering graduate seeking an entry-level Java Backend Developer position to leverage my programming skills and passion for backend development.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://www.linkedin.com/in/nisha-patole"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-white transition text-3xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-white transition text-3xl"
          >
            <FaGithub />
          </a>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/Nisha_CV.pdf"
            download
            className="bg-cyan-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-cyan-600 transition-all"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="border border-cyan-500 text-cyan-400 px-6 py-2 rounded-full hover:bg-cyan-500 hover:text-white transition-all"
          >
            Connect Me
          </a>
        </div>
      </motion.div>

      {/* Scroll Down Arrow - Right Corner */}
      <a
        href="#about"
        className="absolute bottom-6 right-6 sm:right-10 text-white hover:text-cyan-400 transition text-2xl sm:text-3xl animate-bounce z-10"
        aria-label="Scroll to About section"
      >
        <FaArrowDown />
      </a>
    </section>
  );
};

export default Home;
