import { motion } from 'framer-motion';
import {
  FaEnvelope, FaPhoneAlt, FaLinkedin, FaHeadset, FaUser, FaPaperPlane,
} from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 px-4 bg-gradient-to-bl from-blue-100 to-indigo-200 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white transition-all duration-300"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start bg-white/80 dark:bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl ring-1 ring-white/20"
      >
        {/* Left - Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-cyan-600 dark:text-cyan-400 mb-3">
            <FaHeadset className="text-3xl" />
            <h2 className="text-3xl sm:text-4xl font-bold">Contact Me</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            Feel free to reach out via email, phone, or LinkedIn. I’m always open to collaboration and new opportunities!
          </p>
          <div className="space-y-5 text-base sm:text-lg">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-cyan-600 dark:text-cyan-400 text-xl" />
              <span>patolenisha59@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-cyan-600 dark:text-cyan-400 text-xl" />
              <span>+91-9765128389</span>
            </div>
            <div className="flex items-center gap-3">
              <FaLinkedin className="text-cyan-600 dark:text-cyan-400 text-xl" />
              <a
                href="https://www.linkedin.com/in/nisha-patole"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-700 dark:text-cyan-400 hover:underline"
              >
                linkedin.com/in/nisha-patole
              </a>
            </div>
          </div>
        </div>

        {/* Right - Contact Form */}
        <form className="space-y-4 w-full">
          <div className="relative">
            <FaUser className="absolute left-3 top-3.5 text-cyan-600 dark:text-cyan-400" />
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/70 dark:bg-white/10 border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 text-gray-800 dark:text-white"
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3.5 text-cyan-600 dark:text-cyan-400" />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/70 dark:bg-white/10 border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 text-gray-800 dark:text-white"
            />
          </div>
          <div className="relative">
            <textarea
              rows="4"
              placeholder="Your Message"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/70 dark:bg-white/10 border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 text-gray-800 dark:text-white resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="flex items-center gap-2 justify-center w-full bg-cyan-600 text-white font-semibold py-2 rounded-lg hover:bg-cyan-700 transition-colors dark:bg-cyan-500 dark:hover:bg-cyan-600"
          >
            <FaPaperPlane />
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
