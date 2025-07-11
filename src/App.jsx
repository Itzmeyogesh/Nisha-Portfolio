import React from 'react';
import Sidebar from './components/sidebar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'; // ✅ Add Footer import

const App = () => {
  return (
    <div className="flex min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Sidebar - fixed or sticky */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto scroll-smooth">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer /> {/* ✅ Add Footer here */}
      </main>
    </div>
  );
};

export default App;
