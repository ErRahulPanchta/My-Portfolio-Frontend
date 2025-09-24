import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      name: "Blinkit Clone",
      description:
        "A full-stack grocery delivery clone of Blinkit with cart, checkout, cash-on-delivery, Stripe payments, authentication, order management, and responsive UI.",
      tech: [
        "React.js",
        "Redux Toolkit",
        "Tailwind CSS",
        "React Router",
        "Axios",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Stripe",
        "Cloudinary",
        "Multer",
        "Render",
        "Vercel",
      ],
      image: "/images/blinkit.png",
      github: "https://github.com/ErRahulPanchta/Blinkit-Clone-client",
      server: "https://github.com/ErRahulPanchta/Blinkit-Clone-server",
      demo: "https://blinkit-clone-client.vercel.app/",
      featured: true,
    },
    {
      name: "Book Review System",
      description:
        "Developed a full-stack book review web app with authentication, image uploads, and role-based access.",
      tech: [
        "React.js",
        "Redux",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Tailwind CSS",
        "Multer",
        "Render",
        "Vercel",
      ],
      image: "/images/bookreview.png",
      github: "https://github.com/ErRahulPanchta/BookReview-Frontend",
      demo: "https://book-review-f.vercel.app/",
      featured: true,
    },
    {
      name: "Speech to Text",
      description:
        "Developed a full-stack speech-to-text web app with authentication, audio upload, and real-time transcription.",
      tech: [
        "React.js",
        "Redux",
        "Redux Toolkit",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Tailwind CSS",
        "Multer",
        "AssemblyAI",
        "Render",
        "Vercel",
      ],
      image: "/images/stt.png",
      github: "https://github.com/ErRahulPanchta/SpeechToText-Frontend",
      demo: "https://speech-to-text-one-gamma.vercel.app/",
      featured: true,
    },
    {
      name: "Password Manager",
      description: "Secure credential storage with encryption and JWT authentication.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      image: "/images/password.png",
      github: "https://github.com/ErRahulPanchta/password-manager",
      demo: "https://erp-password-manager.vercel.app/",
    },
    {
      name: "iTaskTeam Collaboration System",
      description:
        "Developed a backend-powered team collaboration app with single user role, task board, and edit/delete functionality.",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Multer",
        "Render",
        "Vercel",
      ],
      image: "/images/teamcollab.png",
      github: "https://github.com/ErRahulPanchta/Board-Team-Collaboration-B",
      demo: "https://client-nu-eight-51.vercel.app/",
      featured: true,
    },
    {
      name: "Todo Manager",
      description: "Responsive todo management system with persistent storage.",
      tech: ["React", "Tailwind CSS", "LocalStorage"],
      image: "/images/todo.png",
      github: "https://github.com/ErRahulPanchta/portfolio",
    },
    {
      name: "Spotify Clone",
      description: "UI clone with audio playback functionality built using vanilla JS.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      image: "/images/spotify.png",
      github: "https://github.com/ErRahulPanchta/Spotify-Clone",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Projects | Rahul Panchta | MERN Stack Developer</title>
        <meta
          name="description"
          content="Explore MERN stack projects by Rahul Panchta including Blinkit Clone, Book Review System, Speech-to-Text, Password Manager, and more."
        />
        <link
          rel="canonical"
          href="https://my-portfolio-frontend-nu-three.vercel.app/projects"
        />
      </Helmet>

      <section
        className="py-16 px-6 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900"
        id="projects"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-800 dark:text-blue-400">
            My Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image || "/images/placeholder.png"}
                    alt={project.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 dark:bg-gray-600 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors"
                      >
                        <FaGithub />
                        Code
                      </a>
                    )}

                    {project.server && (
                      <a
                        href={project.server}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-md transition-colors"
                      >
                        <FaGithub />
                        Server
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
