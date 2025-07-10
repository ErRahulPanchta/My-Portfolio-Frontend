import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaFileDownload, FaBars, FaTimes } from 'react-icons/fa';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/projects", name: "Projects" },
    { path: "/skills", name: "Skills" },
    { path: "/contact", name: "Contact" }
  ];

  const externalLinks = [
    {
      name: "GitHub",
      icon: <FaGithub className="w-5 h-5" />,
      url: "https://github.com/ErRahulPanchta",
      color: "bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600"
    },
    {
      name: "Resume",
      icon: <FaFileDownload className="w-5 h-5" />,
      url: "/resume.pdf",
      color: "bg-blue-700 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500",
      download: true
    }
  ];

  const navItemClass = ({ isActive }) =>
    `px-4 py-2 rounded-md transition-all font-medium ${
      isActive 
        ? 'text-white bg-blue-600 dark:bg-blue-700 shadow-lg' 
        : 'text-gray-700 hover:bg-blue-500/10 dark:text-gray-300 dark:hover:bg-gray-700/50'
    }`;

  return (
    <nav className="relative">
      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-end">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md bg-gray-200 dark:bg-gray-700"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-4 items-center">
        {navLinks.map((link, index) => (
          <NavLink 
            key={index}
            to={link.path}
            className={navItemClass}
          >
            {link.name}
          </NavLink>
        ))}
        {externalLinks.map((link, index) => (
          <a
            key={`ext-${index}`}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            download={link.download}
            className={`flex items-center gap-2 ${link.color} text-white px-4 py-2 rounded-md`}
          >
            {link.icon}
            {link.name}
          </a>
        ))}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
          aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
        >
          {darkMode ? (
            <FaSun className="w-5 h-5 text-yellow-300" />
          ) : (
            <FaMoon className="w-5 h-5 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-12 right-0 w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 z-50">
          <div className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <NavLink 
                key={index}
                to={link.path}
                className={navItemClass}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            {externalLinks.map((link, index) => (
              <a
                key={`ext-${index}`}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                download={link.download}
                className={`flex items-center gap-2 ${link.color} text-white px-4 py-2 rounded-md`}
                onClick={() => setIsOpen(false)}
              >
                {link.icon}
                {link.name}
              </a>
            ))}
            <div className="flex justify-center pt-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
                aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
              >
                {darkMode ? (
                  <FaSun className="w-5 h-5 text-yellow-300" />
                ) : (
                  <FaMoon className="w-5 h-5 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;