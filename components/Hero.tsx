import React from 'react';
import { Language, Settings } from '../types';

interface HeroProps {
  lang: Language;
  settings: Settings;
}

const Hero: React.FC<HeroProps> = ({ lang, settings }) => {
  const isAr = lang === 'ar';

  return (
    <div className="relative bg-gradient-to-br from-primary via-secondary to-primary overflow-hidden min-h-[90vh] flex items-center">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 animate-pulse"></div>
      
      {/* Floating Blobs for decoration */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-tertiary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{animationDelay: '2s'}}></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        
        {/* Text Content */}
        <div className={`w-full lg:w-1/2 pt-16 pb-16 text-center ${isAr ? 'lg:text-right' : 'lg:text-left'}`}>
            <div className="inline-block px-4 py-1 mb-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-tertiary text-sm font-bold animate-fade-in-down">
                 ✨ {isAr ? 'الخيار الأول في المملكة' : '#1 Choice in KSA'}
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6 animate-fade-in-right">
                <span className="block">{isAr ? 'استقدام' : 'Recruitment'}</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-tertiary to-white">
                    {isAr ? 'بمعايير عالمية' : 'World Class'}
                </span>
            </h1>

            <p className="mt-4 max-w-lg mx-auto lg:mx-0 text-xl text-gray-300 sm:mt-6 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            {isAr 
                ? 'شريكك الموثوق لاستقدام الكفاءات المهنية والمنزلية. نقدم خدمات متميزة تضمن راحة بالك مع التزام تام بالأنظمة والجودة.'
                : 'Your trusted partner for recruiting professional and domestic competencies. We offer distinguished services guaranteeing your peace of mind.'}
            </p>

            <div className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center ${isAr ? 'lg:justify-start' : 'lg:justify-start'} animate-fade-in-up`} style={{animationDelay: '0.5s'}}>
                <a
                    href="#contact"
                    className="group relative px-8 py-4 bg-tertiary text-white font-bold rounded-full overflow-hidden shadow-lg hover:shadow-tertiary/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                >
                    <span className="relative z-10">{isAr ? 'تواصل معنا' : 'Contact Us'}</span>
                    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                </a>
                
                <a
                    href="#services"
                    className="px-8 py-4 bg-white/5 border border-white/30 text-white font-bold rounded-full backdrop-blur-sm hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
                >
                     {isAr ? 'خدماتنا' : 'Our Services'}
                </a>
            </div>

            {/* Social Media Icons */}
            <div className={`mt-10 flex items-center justify-center ${isAr ? 'lg:justify-start' : 'lg:justify-start'} gap-4 animate-fade-in-up`} style={{animationDelay: '0.7s'}}>
                <span className="text-gray-400 text-sm font-semibold">{isAr ? 'تابعنا على:' : 'Follow us:'}</span>
                <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#1877F2] hover:scale-110 transition-all duration-300 shadow-lg">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#1DA1F2] hover:scale-110 transition-all duration-300 shadow-lg">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#E4405F] hover:scale-110 transition-all duration-300 shadow-lg">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#25D366] hover:scale-110 transition-all duration-300 shadow-lg">
                        <i className="fab fa-whatsapp"></i>
                    </a>
                </div>
            </div>
        </div>

        {/* Hero Image / Illustration */}
        <div className="w-full lg:w-1/2 relative lg:h-[600px] flex items-center justify-center animate-fade-in-left" style={{animationDelay: '0.2s'}}>
             {/* Decorative Circles */}
             <div className="absolute w-[500px] h-[500px] border border-white/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
             <div className="absolute w-[400px] h-[400px] border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

             <div className="relative z-10 transform hover:scale-105 transition-transform duration-700">
                <div className="absolute -inset-4 bg-tertiary/30 rounded-full blur-2xl animate-pulse-glow"></div>
                <img
                    className="relative rounded-3xl shadow-2xl border-4 border-white/10 object-cover h-[400px] w-full max-w-md mx-auto mask-image-gradient"
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Professional Recruitment"
                />
                
                {/* Floating Cards */}
                <div className="absolute -bottom-10 -right-10 bg-white p-4 rounded-xl shadow-xl animate-float" style={{animationDelay: '1s'}}>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                            <i className="fas fa-check"></i>
                        </div>
                        <div>
                            <div className="text-sm font-bold text-gray-800">{isAr ? 'معتمد رسمياً' : 'Officially Certified'}</div>
                            <div className="text-xs text-gray-500">{isAr ? 'وزارة الموارد البشرية' : 'HR Ministry'}</div>
                        </div>
                    </div>
                </div>

                <div className="absolute top-10 -left-10 bg-white p-4 rounded-xl shadow-xl animate-float" style={{animationDelay: '2s'}}>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                            <i className="fas fa-users"></i>
                        </div>
                        <div>
                            <div className="text-sm font-bold text-gray-800">+5000</div>
                            <div className="text-xs text-gray-500">{isAr ? 'عميل سعيد' : 'Happy Clients'}</div>
                        </div>
                    </div>
                </div>
             </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;