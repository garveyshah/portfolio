import React from 'react';

const Hero = () => (
  <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 pt-16">
    <div className="text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hello, I'm <span className="text-blue-600">SK</span>
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Full Stack Developer specializing in Go and React
      </p>
      <div className="flex justify-center space-x-4">
        <a 
          href="#projects" 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          View Projects
        </a>
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

export default Hero;
