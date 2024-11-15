import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects([
      {
        title: "Project 1",
        description: "A web application built with Go and React",
        githubUrl: "https://github.com/skanenje/project1",
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
      <Projects projects={projects} />
    </div>
  );
};

export default Portfolio;
