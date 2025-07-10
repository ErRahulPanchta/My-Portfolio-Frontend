import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Home = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub className="w-6 h-6" />,
      url: 'https://github.com/ErRahulPanchta',
      color: 'hover:text-gray-800 dark:hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-6 h-6" />,
      url: 'https://www.linkedin.com/in/er-rahul-panchta/',
      color: 'hover:text-blue-700 dark:hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: <HiMail className="w-6 h-6" />,
      url: 'mailto:rahulpanchta12@gmail.com',
      color: 'hover:text-red-600 dark:hover:text-red-400'
    }
  ];

  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-12 px-6 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        {/* Greeting */}
        <p className="text-lg md:text-xl text-blue-600 dark:text-blue-400 mb-2 font-medium">
          Hello, I'm
        </p>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">
          Rahul Panchta
        </h1>

        {/* Animated Roles */}
        <div className="h-12 md:h-14 mb-6">
          <TypeAnimation
            sequence={[
              'Full-Stack Developer',
              1500,
              'MERN Stack Specialist',
              1500,
              'React Enthusiast',
              1500,
              'Problem Solver',
              1500
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium"
          />
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          I build responsive, accessible, and performant web applications with modern technologies.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link to="/projects" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all">
            View My Work
          </Link>
          <a
            href="/resume.pdf"
            download
            className="bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 text-blue-600 dark:text-white border border-blue-600 dark:border-gray-600 font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <FaFileDownload />
            Download CV
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className={`text-gray-500 dark:text-gray-400 hover:scale-110 transition-all ${social.color} text-2xl`}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;