import React, { useState } from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-md z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Updated anchor to navigate to #home or use button if it's non-navigational */}
          <a href="#home" className="text-2xl font-extrabold text-gray-900 hover:text-blue-600 transition duration-300">
            OG Portfolio
          </a>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-900 hover:text-blue-600 transition duration-300 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#projects" className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition duration-300">Projects</a>
            <a href="#about" className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition duration-300">About</a>
            <a href="#skills" className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition duration-300">Skills</a>
            <a href="#contact" className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition duration-300">Contact</a>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#projects" className="block py-2 text-lg font-semibold text-gray-700 hover:text-blue-600 transition duration-300">Projects</a>
            <a href="#about" className="block py-2 text-lg font-semibold text-gray-700 hover:text-blue-600 transition duration-300">About</a>
            <a href="#skills" className="block py-2 text-lg font-semibold text-gray-700 hover:text-blue-600 transition duration-300">Skills</a>
            <a href="#contact" className="block py-2 text-lg font-semibold text-gray-700 hover:text-blue-600 transition duration-300">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
