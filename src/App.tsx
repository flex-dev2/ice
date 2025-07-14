import React from 'react';
import ThemeToggle from './components/ThemeToggle';
import Header from './components/Header';
import Hero from './components/Hero';
import Leadership from './components/Leadership';
import About from './components/About';
import JoinUs from './components/JoinUs';
import Footer from './components/Footer';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
    }`}>
      <ThemeToggle />
      <Header />
      <Hero />
      <About />
      <Leadership />
      <JoinUs />
      <Footer />
    </div>
  );
}

export default App;