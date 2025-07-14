import React from 'react';
import { MessageSquare, Heart, Star, Zap, Users, Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white relative">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-8 gradient-text">
            عن قرية Ice
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
           من افضل مجموعات ورد عليا ولو استطتعت
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-xl">
              <MessageSquare className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">محادثات لا تنتهي</h3>
            <p className="text-gray-600 text-lg leading-relaxed">تكلم عن انمي وعن اخبار الانمي الرسميه</p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-xl">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">تعاون الاعضاء</h3>
            <p className="text-gray-600 text-lg leading-relaxed">علاقات قوية وصداقات حقيقية تدوم مدى الحياة</p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-xl">
              <Star className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">محتوى انمي</h3>
            <p className="text-gray-600 text-lg leading-relaxed">لو خبر لسه ناول هيتلاقيه</p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-xl">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">نشاط مستمر</h3>
            <p className="text-gray-600 text-lg leading-relaxed">فعاليات ومسابقات دورية ممتعة للأعضاء</p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-xl">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">تنوع الأعضاء</h3>
            <p className="text-gray-600 text-lg leading-relaxed">أعضاء من خلفيات متنوعة يثرون المجموعة بخبراتهم</p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-xl">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">بيئة آمنة</h3>
            <p className="text-gray-600 text-lg leading-relaxed">مساحة آمنة ومحترمة للجميع مع قوانين واضحة</p>
          </div>
        </div>

        <div className="text-center">
          <div className="glass-effect rounded-3xl p-8 max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-3xl font-bold gradient-text mb-6">لماذا قرية Ice؟</h3>
            <p className="text-xl text-gray-700 leading-relaxed font-medium">
            خش يا محترم من غير ما اشرح
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;