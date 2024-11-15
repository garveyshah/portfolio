import React from 'react';

const ProjectCard = ({ title, description, githubUrl, demoUrl, tech }) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {tech.map((item, index) => (
        <span 
          key={index} 
          className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
        >
          {item}
        </span>
      ))}
    </div>
    <div className="flex space-x-4">
      <a 
        href={githubUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center text-gray-600 hover:text-blue-600"
      >
        Code
      </a>
      {demoUrl && (
        <a 
          href={demoUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center text-gray-600 hover:text-blue-600"
        >
          Live Demo
        </a>
      )}
    </div>
  </div>
);

const Projects = ({ projects }) => (
  <section id="projects" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
