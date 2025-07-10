import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true' ||
      window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <Router>
      <ScrollToTop />
      <div className={`min-h-screen flex flex-col transition-colors duration-300 ${darkMode ? 'dark:bg-gray-900 dark:text-white' : 'bg-white text-black'
        }`}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="*"
                element={
                  <div className="text-center py-20">
                    <h1 className="text-4xl font-bold text-red-600 dark:text-red-400 mb-4">
                      404 - Page Not Found
                    </h1>
                    <p className="text-lg dark:text-gray-300">
                      The page you're looking for doesn't exist.
                    </p>
                  </div>
                }
              />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer darkMode={darkMode} />
      </div>
    </Router>
  );
}

export default App;