import { Home, User, Code, Phone, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const Sidebar = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed h-[80vh] mt-10 ml-4 w-14 glass rounded-2xl flex flex-col items-center justify-around p-2 shadow-xl z-50"
    >
      <a href="#home" title="Home"><Home className="text-white hover:text-cyan-400" /></a>
      <a href="#about" title="About"><User className="text-white hover:text-cyan-400" /></a>
      <a href="#skills" title="Skills"><Layers className="text-white hover:text-cyan-400" /></a>
      <a href="#projects" title="Projects"><Code className="text-white hover:text-cyan-400" /></a>
      <a href="#contact" title="Contact"><Phone className="text-white hover:text-cyan-400" /></a>
    </motion.div>
  );
};

export default Sidebar;
