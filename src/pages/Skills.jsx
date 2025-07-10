import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiMongodb, SiTailwindcss, SiJavascript, SiPostman, SiJsonwebtokens, SiTypescript, SiMongoose } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: 'React', level: 85, icon: <FaReact className="text-[#61DAFB]" /> },
        { name: 'JavaScript', level: 90, icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: 'Tailwind CSS', level: 85, icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: 'Next.js', level: 30, icon: <SiNextdotjs /> },
        { name: 'TypeScript', level: 25, icon: <SiTypescript className="text-orange-500" /> }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: 'Node.js', level: 80, icon: <FaNodeJs className="text-[#339933]" /> },
        { name: 'Express', level: 85, icon: <SiExpress /> },
        { name: 'MongoDB', level: 80, icon: <SiMongodb className="text-[#47A248]" /> },
        { name: 'Mongoose', level: 80, icon: <SiMongoose className="text-orange-500" /> }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: 'Git', level: 75, icon: <FaGitAlt className="text-[#F05032]" /> },
        { name: 'VS Code', level: 80, icon: <TbBrandVscode className="text-[#007ACC]" /> },
        { name: 'Postman', level: 78, icon: <SiPostman className="text-orange-500" /> },
        { name: 'JWT', level: 75, icon: <SiJsonwebtokens className="text-amber-500" /> }
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-800 dark:text-blue-400">
          My Skills
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-4 py-2 rounded-full ${activeCategory === 'All' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
          >
            All
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.title}
              onClick={() => setActiveCategory(category.title)}
              className={`px-4 py-2 rounded-full ${activeCategory === category.title ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            (activeCategory === 'All' || activeCategory === category.title) && (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white flex items-center gap-2">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center gap-3 mb-1">
                        <div className="text-2xl">
                          {skill.icon}
                        </div>
                        <span className="font-medium text-gray-800 dark:text-white">
                          {skill.name}
                        </span>
                        <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                        <motion.div
                          className="bg-blue-600 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
