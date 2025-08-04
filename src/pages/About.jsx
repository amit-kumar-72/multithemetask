import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

function About() {
  const { theme } = useTheme();

  return (
    <div className={`p-6 mt-20 transition-all duration-300 ${
      theme === 'theme1' ? 'font-sans text-gray-800' :
      theme === 'theme2' ? 'font-serif text-gray-200 bg-gray-900' :
      'font-[Pacifico] text-purple-800 bg-gradient-to-r from-yellow-100 to-pink-200'
    }`}>
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="text-lg leading-relaxed">
        This is the About page with sample content. It demonstrates how each theme affects layout,
        typography, and styling.
      </p>
    </div>
  );
}

export default About;
