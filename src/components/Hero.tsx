import React from 'react';
import { Snowflake, Users, MessageCircle, Sparkles } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Hero = () => {
  const { theme } = useTheme();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className={`absolute top-20 left-10 w-32 h-32 rounded-full filter blur-xl animate-pulse ${
        theme === 'dark' ? 'bg-blue-400/20' : 'bg-blue-500/30'
      }`}></div>
      <div className={`absolute bottom-20 right-10 w-40 h-40 rounded-full filter blur-xl animate-pulse ${
        theme === 'dark' ? 'bg-cyan-300/20' : 'bg-cyan-400/30'
      }`} style={{ animationDelay: '1s' }}></div>
      <div className={`absolute top-1/2 left-1/4 w-24 h-24 rounded-full filter blur-xl animate-pulse ${
        theme === 'dark' ? 'bg-purple-400/20' : 'bg-purple-500/30'
      }`} style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className={`backdrop-blur-md rounded-3xl p-12 shadow-2xl border max-w-4xl mx-auto ${
          theme === 'dark'
            ? 'bg-white/5 border-white/10'
            : 'bg-white/70 border-white/50'
        }`}>
          {/* Logo Section */}
          <div className="flex justify-center mb-8">
            <div className={`relative p-6 rounded-full shadow-2xl ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-blue-400 via-cyan-300 to-blue-500'
                : 'bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-600'
            }`}>
              <Snowflake className="w-16 h-16 text-white animate-spin" style={{ animationDuration: '10s' }} />
              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent animate-pulse">
            قرية Ice
          </h1>
          
          <p className={`text-2xl md:text-3xl mb-8 font-bold ${
            theme === 'dark' ? 'text-white/90' : 'text-gray-800'
          }`}>
            مجموعة واتساب للأصدقاء والمرح
          </p>
          
          <p className={`text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed ${
            theme === 'dark' ? 'text-white/70' : 'text-gray-600'
          }`}>
            انضم إلى مجتمعنا المميز واستمتع بأجواء ودية ومحادثات شيقة مع أصدقاء جدد من جميع أنحاء العالم
          </p>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className={`backdrop-blur-sm rounded-2xl p-6 border hover:scale-105 transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-white/10 border-white/20 hover:bg-white/20'
                : 'bg-white/50 border-white/40 hover:bg-white/70'
            }`}>
              <Users className="w-12 h-12 text-blue-300 mx-auto mb-4" />
              <h3 className={`text-3xl font-black mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-800'
              }`}>500+</h3>
              <p className={`font-semibold ${
                theme === 'dark' ? 'text-white/80' : 'text-gray-600'
              }`}>عضو نشط</p>
            </div>
            
            <div className={`backdrop-blur-sm rounded-2xl p-6 border hover:scale-105 transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-white/10 border-white/20 hover:bg-white/20'
                : 'bg-white/50 border-white/40 hover:bg-white/70'
            }`}>
              <MessageCircle className="w-12 h-12 text-cyan-300 mx-auto mb-4" />
              <h3 className={`text-3xl font-black mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-800'
              }`}>24/7</h3>
              <p className={`font-semibold ${
                theme === 'dark' ? 'text-white/80' : 'text-gray-600'
              }`}>محادثات مستمرة</p>
            </div>
            
            <div className={`backdrop-blur-sm rounded-2xl p-6 border hover:scale-105 transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-white/10 border-white/20 hover:bg-white/20'
                : 'bg-white/50 border-white/40 hover:bg-white/70'
            }`}>
              <Sparkles className="w-12 h-12 text-purple-300 mx-auto mb-4" />
              <h3 className={`text-3xl font-black mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-800'
              }`}>100%</h3>
              <p className={`font-semibold ${
                theme === 'dark' ? 'text-white/80' : 'text-gray-600'
              }`}>مجاني تماماً</p>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="#join"
            className={`inline-flex items-center gap-4 text-white font-black py-4 px-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 text-xl ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-blue-500 to-cyan-400 hover:shadow-cyan-500/25'
                : 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-cyan-600/30'
            }`}
          >
            <Snowflake className="w-6 h-6" />
            انضم إلى قرية Ice
            <Sparkles className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;