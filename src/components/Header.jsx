import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { FaMoon, FaSun } from 'react-icons/fa';

const Header = ({ darkMode, toggleDarkMode }) => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub className="w-5 h-5" />,
      url: 'https://github.com/ErRahulPanchta',
      color: 'hover:text-gray-800 dark:hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/er-rahul-panchta/',
      color: 'hover:text-blue-700 dark:hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: <HiMail className="w-5 h-5" />,
      url: 'mailto:rahulpanchta12@gmail.com',
      color: 'hover:text-red-600 dark:hover:text-red-400'
    }
  ];

  return (
    <header className="bg-gradient-to-r from-blue-100 to-blue-50 dark:from-gray-800 dark:to-gray-900 py-6 px-6 shadow-md relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo and Name */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Link to="/" className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full">
            <motion.img
              src="/logo.png"
              alt="Logo"
              className="h-24 w-24 object-contain rounded-full border-4 border-blue-200 dark:border-gray-600 shadow-lg"
              whileHover={{ rotate: 5, scale: 1.05 }}
            />
          </Link>

          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">
              Rahul Panchta
            </h1>
            <h2 className="text-lg font-medium text-blue-600 dark:text-blue-400 mt-2">
              Full Stack MERN Developer
            </h2>

            <a
              href="/RahulsResume.pdf"
              download
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-md"
            >
              <FaFileDownload />
              Download Resume
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-5 text-2xl">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className={`text-gray-500 dark:text-gray-400 transition-colors ${link.color}`}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleDarkMode}
          className="absolute top-6 right-6 p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
          aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
        >
          {darkMode ? (
            <FaSun className="w-5 h-5 text-yellow-300" />
          ) : (
            <FaMoon className="w-5 h-5 text-gray-700" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;