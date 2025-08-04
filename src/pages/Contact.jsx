import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

function Contact() {
  const { theme } = useTheme();

  return (
    <div className={`p-6 mt-20 transition-all duration-300 ${
      theme === 'theme1' ? 'font-sans text-gray-800' :
      theme === 'theme2' ? 'font-serif text-gray-200 bg-gray-900' :
      'font-[Pacifico] text-purple-800 bg-gradient-to-r from-yellow-100 to-pink-200'
    }`}>
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p className="text-lg">
        Email us at: <a href="mailto:support@example.com" className="underline hover:text-blue-500">support@example.com</a>
      </p>
    </div>
  );
}

export default Contact;
