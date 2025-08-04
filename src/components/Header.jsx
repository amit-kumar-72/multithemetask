import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Link } from 'react-router-dom';

function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header
      className={`
        fixed top-0 w-full z-10 shadow-md px-6 py-4 flex flex-wrap justify-between items-center transition-all duration-300
        ${theme === 'theme1' ? 'bg-white text-black' : ''}
        ${theme === 'theme2' ? 'bg-gray-900 text-white' : ''}
        ${theme === 'theme3' ? 'bg-gradient-to-r from-yellow-200 to-pink-300 text-purple-800' : ''}
      `}
    >
      <div className="flex items-center space-x-4">
        <h1 className={`text-xl font-bold ${theme === 'theme3' ? 'font-[Pacifico]' : ''}`}>
          Theme Switcher App
        </h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>
      </div>

      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="p-2 rounded border"
      >
        <option value="theme1">Theme 1 - Minimal</option>
        <option value="theme2">Theme 2 - Dark</option>
        <option value="theme3">Theme 3 - Colorful</option>
      </select>
    </header>
  );
}

export default Header;
