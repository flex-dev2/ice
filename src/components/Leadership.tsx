import React from 'react';
import { Crown, Settings, Sword, Shield, Zap, Star } from 'lucide-react';

const Leadership = () => {
  return (
    <section id="leadership" className="py-24 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-8 gradient-text">
            قيادة المجموعة
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            فريق إدارة متميز ومتفاني يعمل بجد على تطوير المجموعة وخدمة الأعضاء بأفضل شكل ممكن
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Emperor Lelouch */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl p-10 text-white shadow-2xl transform hover:scale-105 transition-all duration-500">
              <div className="text-center mb-8">
                <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 floating-animation">
                  <Crown className="w-16 h-16 text-yellow-300" />
                </div>
                <h3 className="text-4xl font-black mb-3">الأمبراطور لولوش</h3>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-yellow-300" />
                  <p className="text-purple-100 text-xl font-bold">قائد المجموعة الأعلى</p>
                  <Star className="w-5 h-5 text-yellow-300" />
                </div>
                <p className="text-purple-200 text-lg">الحاكم المطلق لقرية Ice</p>
              </div>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-300/20 rounded-xl flex items-center justify-center">
                    <Sword className="w-6 h-6 text-yellow-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">قيادة استراتيجية محكمة</h4>
                    <p className="text-purple-100">يضع الخطط ويتخذ القرارات الحكيمة</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-300/20 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-yellow-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">حماية الأعضاء والمجموعة</h4>
                    <p className="text-purple-100">يحافظ على أمان وسلامة الجميع</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-300/20 rounded-xl flex items-center justify-center">
                    <Crown className="w-6 h-6 text-yellow-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">اتخاذ القرارات المصيرية</h4>
                    <p className="text-purple-100">يقود المجموعة نحو مستقبل أفضل</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <p className="text-lg italic text-center leading-relaxed">
                  "القوة الحقيقية تكمن في القدرة على حماية من نحب وبناء مجتمع قوي ومترابط يدوم إلى الأبد"
                </p>
              </div>
            </div>
          </div>

          {/* Technical Manager Flex */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-teal-700 rounded-3xl transform -rotate-3"></div>
            <div className="relative bg-gradient-to-br from-blue-500 to-teal-600 rounded-3xl p-10 text-white shadow-2xl transform hover:scale-105 transition-all duration-500">
              <div className="text-center mb-8">
                <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 floating-animation">
                  <Settings className="w-16 h-16 text-blue-200 animate-spin" style={{ animationDuration: '4s' }} />
                </div>
                <h3 className="text-4xl font-black mb-3">المسؤول الفني فلكس</h3>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-blue-200" />
                  <p className="text-blue-100 text-xl font-bold">خبير التقنية والتطوير</p>
                  <Star className="w-5 h-5 text-blue-200" />
                </div>
                <p className="text-blue-200 text-lg">عبقري التكنولوجيا في قرية Ice</p>
              </div>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-200/20 rounded-xl flex items-center justify-center">
                    <Settings className="w-6 h-6 text-blue-200" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">إدارة البنية التقنية</h4>
                    <p className="text-blue-100">يطور ويحافظ على الأنظمة التقنية</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-200/20 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-blue-200" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">تطوير الأدوات والخدمات</h4>
                    <p className="text-blue-100">يبتكر حلول تقنية مبدعة</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-200/20 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-blue-200" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">الأمان والحماية التقنية</h4>
                    <p className="text-blue-100">يضمن أمان البيانات والخصوصية</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <p className="text-lg italic text-center leading-relaxed">
                  "التقنية في خدمة الإنسان، والإبداع في خدمة المجتمع، والابتكار طريقنا للمستقبل"
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="glass-effect rounded-3xl px-10 py-6 shadow-2xl max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-4">
              <Crown className="w-8 h-8 text-purple-600" />
              <span className="text-2xl text-gray-700 font-bold">فريق متكامل للنجاح والتميز</span>
              <Settings className="w-8 h-8 text-blue-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;