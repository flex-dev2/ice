import React from 'react';
import { Snowflake, Heart, MessageCircle, Star, Crown, Settings } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Snowflake className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-black gradient-text">قرية Ice</h3>
                <p className="text-gray-400 font-medium">مجموعة واتساب مميزة</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              مجموعة واتساب استثنائية تجمع الأصدقاء في مجتمع رقمي متميز مليء بالمحبة والمرح والإبداع. 
              انضم إلينا واستمتع بتجربة فريدة مع أصدقاء رائعين.
            </p>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center hover:bg-purple-500 transition-colors cursor-pointer">
                <Star className="w-6 h-6" />
              </div>
              <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center hover:bg-indigo-500 transition-colors cursor-pointer">
                <Heart className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-400" />
              روابط سريعة
            </h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors text-lg font-medium hover:translate-x-2 transform duration-300 block">الرئيسية</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors text-lg font-medium hover:translate-x-2 transform duration-300 block">عن المجموعة</a></li>
              <li><a href="#leadership" className="text-gray-300 hover:text-blue-400 transition-colors text-lg font-medium hover:translate-x-2 transform duration-300 block">القيادة</a></li>
              <li><a href="#join" className="text-gray-300 hover:text-blue-400 transition-colors text-lg font-medium hover:translate-x-2 transform duration-300 block">انضم إلينا</a></li>
            </ul>
          </div>

          {/* Leadership */}
          <div>
            <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Crown className="w-6 h-6 text-yellow-400" />
              القيادة
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Crown className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300 font-medium">الأمبراطور لولوش</span>
              </div>
              <div className="flex items-center gap-3">
                <Settings className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300 font-medium">المسؤول الفني فلكس</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-red-400" />
                <span className="text-gray-300 font-medium">مجتمع محب ومترابط</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-lg font-medium">
              © 2024 قرية Ice. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center gap-3 text-gray-400 text-lg font-medium">
              <span>صُنع بـ</span>
              <Heart className="w-5 h-5 text-red-400 animate-pulse" />
              <span>من أجل المجتمع</span>
              <Snowflake className="w-5 h-5 text-blue-400" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;