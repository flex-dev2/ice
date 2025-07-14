import React, { useState } from 'react';
import { Menu, X, Snowflake } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <header className={`fixed top-0 w-full z-40 backdrop-blur-md border-b transition-all duration-300 ${
      theme === 'dark' 
        ? 'bg-white/5 border-white/10' 
        : 'bg-white/80 border-gray-200/50'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-xl shadow-lg ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-blue-400 to-cyan-300'
                : 'bg-gradient-to-br from-blue-500 to-cyan-400'
            }`}>
              <Snowflake className="w-8 h-8 text-white animate-spin" style={{ animationDuration: '8s' }} />
            </div>
            <h1 className={`text-2xl font-black ${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`}>قرية Ice</h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {['الرئيسية', 'عن المجموعة', 'القيادة', 'انضم إلينا'].map((item, index) => (
              <a
                key={item}
                className={`font-semibold transition-all duration-300 hover:scale-105 relative group ${
                  theme === 'dark' 
                    ? 'text-white/90 hover:text-white' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
                href={`#${['home', 'about', 'leadership', 'join'][index]}`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-blue-400 to-cyan-300'
                    : 'bg-gradient-to-r from-blue-500 to-cyan-400'
                }`}></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              theme === 'dark'
                ? 'text-white hover:bg-white/10'
                : 'text-gray-800 hover:bg-gray-200/50'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden backdrop-blur-md border-t transition-all duration-300 ${
          theme === 'dark'
            ? 'bg-black/20 border-white/10'
            : 'bg-white/90 border-gray-200/50'
        }`}>
          <nav className="container mx-auto px-6 py-4 space-y-4">
            {['الرئيسية', 'عن المجموعة', 'القيادة', 'انضم إلينا'].map((item, index) => (
              <a
                key={item}
                className={`block font-semibold transition-colors py-2 ${
                  theme === 'dark'
                    ? 'text-white/90 hover:text-white'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
                href={`#${['home', 'about', 'leadership', 'join'][index]}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;