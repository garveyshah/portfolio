import React, { useState, useEffect } from 'react';
import { Menu, Github, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-xl font-bold">OG Portfolio</a>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu />
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
            <a href="#about" className="hover:text-blue-600 transition">About</a>
            <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#projects" className="block py-2 hover:text-blue-600">Projects</a>
            <a href="#about" className="block py-2 hover:text-blue-600">About</a>
            <a href="#skills" className="block py-2 hover:text-blue-600">Skills</a>
            <a href="#contact" className="block py-2 hover:text-blue-600">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
};


const Hero = () => (
  <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 pt-16">
    <div className="text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hello, I'm <span className="text-blue-600">Ouma</span>
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Full Stack Developer specializing in Go and React
      </p>
      <div className="flex justify-center space-x-4">
        <a 
          href="#contact" 
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
        >
          Contact Me
        </a>
      </div>
    </div>
  </section>
);

const Skills = () => {
  const skills = {
    "Frontend": ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
    "Backend": ["Go", "Gin", "RESTful APIs", "PostgreSQL"],
    "Tools": ["Git", "Docker", "VS Code", "Linux"]
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, index) => (
                  <span 
                    key={index}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4 max-w-2xl">
      <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex flex-col space-y-6">
          <a 
            href="https://github.com/garveyshah" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-blue-600 transition"
          >
            <Github className="w-6 h-6 mr-3" />
            github.com/garveyshah
          </a>
          <a 
            href="mailto:ouma.godwin10@gmail.com"
            className="flex items-center text-gray-600 hover:text-blue-600 transition"
          >
            <Mail className="w-6 h-6 mr-3" />
            your.ouma.godwin10@gmail.com
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Here you'll fetch projects from your Go backend
    // For now, using sample data
    setProjects([
      {
        title: "Project 1",
        description: "A web application built with Go and React",
        githubUrl: "https://github.com/garveyshah/project1",
        demoUrl: "https://project1.demo",
        tech: ["Go", "React", "PostgreSQL"]
      },
      // Add more projects here
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      {/* <Projects projects={projects} /> */}
      <Skills />
      <Contact />
    </div>
  );
};

export default Portfolio;