import { FaArrowUp } from 'react-icons/fa';
import technicalOneLogo from '../assets/logo.jpg'; // ✅ Make sure the path is correct

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-indigo-200 to-purple-300 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white py-6 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo and Credit */}
        <div className="flex items-center gap-3 text-center sm:text-left">
          <img
            src={technicalOneLogo}
            alt="Technical One Logo"
            className="w-10 h-10 rounded-full object-cover shadow-md"
          />
          <p className="text-sm sm:text-base font-medium">
            Portfolio created by{' '}
            <span className="text-cyan-600 dark:text-cyan-400 font-semibold">
              Technical One
            </span>
          </p>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition-all duration-300 shadow-md"
        >
          <FaArrowUp /> Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
