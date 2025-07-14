import React, { useState } from 'react';
import { MessageCircle, Users, ArrowLeft, CheckCircle, Star, Heart, Shield } from 'lucide-react';

const JoinUs = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="join" className="py-24 px-6 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-8 text-white">
            انضم إلى قرية Ice
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Star className="w-6 h-6 text-yellow-300" />
            <p className="text-2xl text-blue-100 font-bold">
              كن جزءاً من مجتمعنا المميز
            </p>
            <Star className="w-6 h-6 text-yellow-300" />
          </div>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-medium">
            استمتع بتجربة فريدة مع أصدقاء جدد في بيئة ممتعة ومفيدة ومليئة بالمغامرات الشيقة
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-16">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl hover:bg-white/20 transition-all duration-300">
            <CheckCircle className="w-16 h-16 text-green-300 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">مجاني تماماً</h3>
            <p className="text-blue-100 text-lg leading-relaxed">الانضمام مجاني بدون أي رسوم أو التزامات مالية</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl hover:bg-white/20 transition-all duration-300">
            <Users className="w-16 h-16 text-yellow-300 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">مجتمع نشط</h3>
            <p className="text-blue-100 text-lg leading-relaxed">أعضاء فعالون ومحادثات مستمرة ومثيرة للاهتمام</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl hover:bg-white/20 transition-all duration-300">
            <MessageCircle className="w-16 h-16 text-pink-300 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">تفاعل مميز</h3>
            <p className="text-blue-100 text-lg leading-relaxed">مشاركة وتفاعل إيجابي بين الأعضاء في جو ودي</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <button
            className="group relative w-full bg-white text-blue-600 font-black py-6 px-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-3xl overflow-hidden text-xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className={`absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 transform transition-transform duration-500 ${isHovered ? 'translate-x-0' : 'translate-x-full'}`}></div>
            <div className="relative flex items-center justify-center gap-4">
              <MessageCircle className="w-8 h-8" />
              <span className="text-2xl">انضم عبر واتساب الآن</span>
              <ArrowLeft className="w-6 h-6 transform group-hover:-translate-x-2 transition-transform duration-300" />
            </div>
          </button>
          
          <p className="mt-6 text-blue-200 text-lg font-medium">
            اضغط على الزر للانضمام إلى مجموعة واتساب قرية Ice والاستمتاع بالتجربة
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6 text-red-300" />
              قواعد المجموعة
            </h4>
            <ul className="text-lg text-blue-100 space-y-3 text-right">
              <li className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-red-300" />
                احترام جميع الأعضاء والتعامل بأدب
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-300" />
                عدم إرسال رسائل مزعجة أو غير مناسبة
              </li>
              <li className="flex items-center gap-3">
                <Star className="w-5 h-5 text-yellow-300" />
                المحتوى المناسب والهادف فقط
              </li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Star className="w-6 h-6 text-yellow-300" />
              مميزات العضوية
            </h4>
            <ul className="text-lg text-blue-100 space-y-3 text-right">
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-blue-300" />
                الوصول لجميع المحادثات والمناقشات
              </li>
              <li className="flex items-center gap-3">
                <Users className="w-5 h-5 text-purple-300" />
                المشاركة في الفعاليات والمسابقات
              </li>
              <li className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-pink-300" />
                الدعم والمساعدة من الإدارة والأعضاء
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;