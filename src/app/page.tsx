"use client";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaBars, FaTimes, FaMoon, FaSun, FaEnvelope } from "react-icons/fa";
import { SiFlutter, SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiExpress, SiJavascript, SiDart, SiMysql } from "react-icons/si";
import { useState } from "react";

const skills = [
  { name: "Flutter", icon: <SiFlutter className="text-[#02569B]" size={40} /> },
  { name: "Dart", icon: <SiDart className="text-[#00B4A2]" size={40} /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" size={40} /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" size={40} /> },
  { name: "React", icon: <FaReact className="text-[#61DBFB]" size={40} /> },
  { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" size={40} /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-[#06B6D4]" size={40} /> },
  { name: "Node.js", icon: <FaNodeJs className="text-[#68A063]" size={40} /> },
  { name: "Express.js", icon: <SiExpress className="text-[#000000]" size={40} /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#4DB33D]" size={40} /> },
  { name: "MySQL", icon: <SiMysql className="text-[#00618A]" size={40} /> },
  { name: "Git", icon: <FaGitAlt className="text-[#F1502F]" size={40} /> },
];

export default function Home() {
  // Dark/Light mode toggle state
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      {/* Header Section */}

      <header className={`fixed top-0 left-0 right-0 z-10 flex shadow-md max-w-5xl md:shadow-none mx-auto items-center justify-between p-6 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>

        <h1
          className="text-2xl font-bold"
        >
          Portfolio
        </h1>

        {/* Desktop Menu */}
        <nav className="space-x-4 hidden md:flex text-lg">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#skills" className="hover:text-blue-500">Skills</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </nav>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`hidden p-2 text-white rounded-full md:flex ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}
        >
          {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} className="text-black" />}
        </button>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden p-2 rounded-full ${isDarkMode ? 'text-white' : 'text-black'}`}
        >
          <FaBars size={24} />
        </button>

      </header>
      <motion.div
        className={`fixed top-0 right-0 z-20 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'} w-64 h-full md:hidden transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-100`}
        initial={{ x: '100%' }}
        animate={{ x: isMenuOpen ? 0 : '100%' }}
        exit={{ x: '100%' }}
      >
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-full flex justify-end p-4"
        >
          <FaTimes size={24} />
        </button>

        <nav onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex flex-col items-center space-y-4 mt-6">
          <a href="#about" className="text-xl hover:text-blue-500">About</a>
          <a href="#skills" className="text-xl hover:text-blue-500">Skills</a>
          <a href="#projects" className="text-xl hover:text-blue-500">Projects</a>
          <a href="#contact" className="text-xl hover:text-blue-500">Contact</a>
        </nav>

        <div className="flex items-center justify-center mt-6">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 "
          >
            {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
        </div>
      </motion.div>

      {/* Hero Section */}

      <section className="max-w-5xl h-screen mx-auto px-4 flex flex-col justify-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, Do You want to
          <br></br>
          <span className={isDarkMode ? 'text-blue-600' : 'text-blue-500'}>transform </span>your ideas into <span className={isDarkMode ? 'text-orange-600' : 'text-orange-500'}>reality?</span>
        </motion.h1>
        <p className="text-lg md:text-xl mt-4 mb-8 max-w-3xl">
          I craft seamless digital experiences, blending powerful user interface and experiences with cutting-edge tech.
          Whether it’s a mobile app or a website, I build solutions that feel intuitive and irresistible.
        </p>
        <div className='flex mt-2 gap-5'>
          <motion.a
            href="#about"
            className="flex gap-3 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition-all"
            whileHover={{ scale: 1.1 }}
          >
            Learn More
          </motion.a>
          <motion.a
            href="#contact"
            className="flex gap-3 px-6 py-3 bg-transparent border-2 border-blue-500 hover:border-blue-600 font-semibold rounded-full transition-all"
            whileHover={{ scale: 1.1 }}
          >
            Lets Talk
            <FaEnvelope size={20} />
          </motion.a>

        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="max-w-4xl mx-auto justify-center py-12 px-4">
        <h2 className="text-3xl font-semibold text-center">About Me</h2>
        <p className="mt-4 text-lg leading-relaxed">
          I entered the world of development not just to write code but to craft experiences that captivate, empower, and leave a lasting impression. From my early days with Flutter, I realized that my work wasn’t just about functionality it was about shaping realities and enchanting users.
          <br></br>
          <br></br>
          Inspired by perception and influence, I mastered user experience, crafting every detail to captivate. Web development became more than aesthetics it became seamless engagement. I don’t just build; I innovate and position myself where my audience can’t look away..
          <br /><br />
          If you’re looking for someone who builds not just apps but experiences, not just websites but digital journeys you already know what to do. Let’s create something unforgettable.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-5xl mx-auto justify-center py-12 text-center">
        <h2 className="text-3xl font-semibold">Skills</h2>
        <div className="grid grid-cols-3 px-4 gap-2 md:grid-cols-4 md:gap-6 md:px-0 justify-center mt-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
              whileHover={{ scale: 1.1 }}
            >
              {skill.icon}
              <p className="text-sm mt-2">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-5xl mx-auto justify-center py-12 text-center">
        <h2 className="text-3xl font-semibold">Projects</h2>
        <p className="mt-2 text-gray-400">Check out some of my best work:</p>
        <div className="grid grid-cols-1 px-4 md:px-0 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>🚧 Coming Soon...</div>
          <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>🚧 Coming Soon...</div>
          <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>🚧 Coming Soon...</div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto flex flex-col justify-center mt-20 text-center">
        <h2 className="text-3xl font-semibold">Contact</h2>
        <p className="mt-2 text-gray-400">Let’s build something amazing together!</p>
        <a href="hanselmega@gmail.com" className="mt-4 inline-block px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all">
          Email Me 📩
        </a>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://github.com/yourgithub/megaafu" className="text-gray-400 hover:text-white">GitHub</a>
          <a href="https://linkedin.com/in/yourlinkedin/mega-afu-923852179" className="text-gray-400 hover:text-white">LinkedIn</a>
        </div>
      </section>
    </main>
  );
}

