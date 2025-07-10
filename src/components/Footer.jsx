import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const Footer = ({ darkMode }) => {
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
      url: 'https://linkedin.com/in/yourprofile',
      color: 'hover:text-blue-700 dark:hover:text-blue-400'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram className="w-5 h-5" />,
      url: 'https://www.instagram.com/rahul_panchta',
      color: 'hover:text-sky-500 dark:hover:text-sky-400'
    },
    {
      name: 'Email',
      icon: <HiMail className="w-5 h-5" />,
      url: 'mailto:rahulpanchta12@gmail.com',
      color: 'hover:text-red-600 dark:hover:text-red-400'
    }
  ];

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/projects", text: "Projects" },
    { to: "/skills", text: "Skills" },
    { to: "/contact", text: "Contact" }
  ];

  return (
    <footer className={`py-8 px-6 border-t ${
      darkMode 
        ? 'bg-gray-800 border-gray-700 text-white' 
        : 'bg-blue-50 border-blue-100 text-black'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.text}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className={`text-gray-500 dark:text-gray-400 transition-colors ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Rahul Panchta. All rights reserved.</p>
          <p className="mt-1">Built with React, Tailwind CSS, and Vite</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;