import React, { useState, useEffect } from 'react';
import { Language, Settings } from '../types';

interface HeroProps {
  lang: Language;
  settings: Settings;
  onNavigate: (tab: string) => void;
}

const Hero: React.FC<HeroProps> = ({ lang, settings, onNavigate }) => {
  const isAr = lang === 'ar';
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Professional Recruitment Images
  const heroImages = [
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80", // Professional Business Woman
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80", // Handshake
    "https://images.unsplash.com/photo-1581579186913-45ac3e6e3dd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80", // Nanny/Care
    "https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"  // Chef/Kitchen
  ];

  // Marquee Content
  const marqueeItems = [
    { textAr: "نقل كفالة", textEn: "Sponsorship Transfer", icon: "fa-exchange-alt" },
    { textAr: "عمالة منزلية", textEn: "Domestic Workers", icon: "fa-home" },
    { textAr: "استقدام سريع", textEn: "Fast Recruitment", icon: "fa-shipping-fast" },
    { textAr: "سائقين محترفين", textEn: "Professional Drivers", icon: "fa-car" },
    { textAr: "طباخات ماهرات", textEn: "Skilled Cooks", icon: "fa-utensils" },
    { textAr: "رعاية كبار السن", textEn: "Elderly Care", icon: "fa-heart" },
    { textAr: "دعم 24/7", textEn: "24/7 Support", icon: "fa-headset" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden bg-primary">
      
      {/* BACKGROUND IMAGE SLIDER */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={img}
              alt={`Slide ${index}`}
              className={`w-full h-full object-cover ${
                index === currentImageIndex ? 'animate-ken-burns' : ''
              }`}
            />
            {/* Gradient Overlay - Made lighter to show images better */}
            <div className={`absolute inset-0 bg-gradient-to-r ${isAr ? 'from-secondary/10 via-primary/50 to-primary/90' : 'from-primary/90 via-primary/50 to-secondary/10'}`}></div>
          </div>
        ))}
      </div>

      {/* FLOATING DECORATIONS */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-tertiary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-40 right-20 w-48 h-48 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{animationDelay: '2s'}}></div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto w-full relative z-10 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center pt-10 pb-20">
        
        {/* TEXT SECTION */}
        <div className={`w-full lg:w-3/5 text-center ${isAr ? 'lg:text-right' : 'lg:text-left'}`}>
            <div className="inline-block px-4 py-1 mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-sm font-bold animate-fade-in-down shadow-lg">
                 ✨ {isAr ? 'الخيار الأول في المملكة للاستقدام' : '#1 Choice in KSA for Recruitment'}
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6 animate-fade-in-right drop-shadow-lg">
                <span className="block">{isAr ? 'استقدام' : 'Recruitment'}</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-tertiary to-white">
                    {isAr ? 'بمعايير عالمية' : 'World Class Standards'}
                </span>
            </h1>

            <p className="mt-4 max-w-lg mx-auto lg:mx-0 text-xl text-gray-100 sm:mt-6 animate-fade-in-up leading-relaxed drop-shadow-md" style={{animationDelay: '0.3s'}}>
            {isAr 
                ? 'شريكك الموثوق لاستقدام الكفاءات المهنية والمنزلية. نقدم خدمات متميزة تضمن راحة بالك مع التزام تام بالأنظمة والجودة.'
                : 'Your trusted partner for recruiting professional and domestic competencies. We offer distinguished services guaranteeing your peace of mind.'}
            </p>

            {/* BUTTONS: FORCED FLEX-ROW TO STAY ON SAME LINE */}
            <div className={`mt-10 flex flex-row flex-wrap gap-4 justify-center ${isAr ? 'lg:justify-start' : 'lg:justify-start'} animate-fade-in-up`} style={{animationDelay: '0.5s'}}>
                <button
                    onClick={() => onNavigate('contact')}
                    className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-tertiary text-white font-bold rounded-full overflow-hidden shadow-lg hover:shadow-tertiary/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex-1 sm:flex-none justify-center flex"
                >
                    <span className="relative z-10">{isAr ? 'تواصل معنا' : 'Contact Us'}</span>
                    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                </button>
                
                <button
                    onClick={() => onNavigate('services')}
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 border border-white/30 text-white font-bold rounded-full backdrop-blur-sm hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-1 shadow-md flex-1 sm:flex-none justify-center flex"
                >
                     {isAr ? 'خدماتنا' : 'Our Services'}
                </button>
            </div>

            {/* Social Media Icons */}
            <div className={`mt-10 flex items-center justify-center ${isAr ? 'lg:justify-start' : 'lg:justify-start'} gap-4 animate-fade-in-up`} style={{animationDelay: '0.7s'}}>
                <span className="text-gray-200 text-sm font-semibold">{isAr ? 'تابعنا على:' : 'Follow us:'}</span>
                <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#1877F2] hover:scale-110 transition-all duration-300 shadow-lg border border-white/5">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#1DA1F2] hover:scale-110 transition-all duration-300 shadow-lg border border-white/5">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#E4405F] hover:scale-110 transition-all duration-300 shadow-lg border border-white/5">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#25D366] hover:scale-110 transition-all duration-300 shadow-lg border border-white/5">
                        <i className="fab fa-whatsapp"></i>
                    </a>
                </div>
            </div>
        </div>

        {/* IMAGE/CARD SECTION (Right Side) */}
        <div className="w-full lg:w-2/5 relative mt-12 lg:mt-0 flex justify-center animate-fade-in-left" style={{animationDelay: '0.2s'}}>
             {/* Floating Cards overlaid on the background slider context */}
             <div className="relative z-10 w-full max-w-sm">
                
                {/* Stats Card */}
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl mb-6 animate-float">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-tertiary rounded-full flex items-center justify-center text-white text-xl shadow-lg">
                            <i className="fas fa-users"></i>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white">+5,000</div>
                            <div className="text-sm text-gray-200 font-medium">{isAr ? 'عميل تم خدمتهم' : 'Clients Served'}</div>
                        </div>
                    </div>
                </div>

                {/* Rating Card */}
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl ml-8 animate-float" style={{animationDelay: '1.5s'}}>
                    <div className="flex items-center gap-4">
                         <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg">
                            <i className="fas fa-star"></i>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white">4.9/5</div>
                            <div className="text-sm text-gray-200 font-medium">{isAr ? 'تقييم العملاء' : 'Customer Rating'}</div>
                        </div>
                    </div>
                </div>

             </div>
        </div>

      </div>

      {/* INFINITE MARQUEE STRIP (Fixed Loop) */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white/10 backdrop-blur-md border-t border-white/10 flex items-center z-20 overflow-hidden" dir="ltr">
        {/* 
            FIX: Using w-max to ensure full content width is calculated.
            Using 2 sets of items.
            Animating to -50% creates a perfect seamless loop.
            Conditional class handles direction.
        */}
        <div className={`flex w-max ${isAr ? 'animate-scroll-infinite-reverse' : 'animate-scroll-infinite'} hover:[animation-play-state:paused]`}>
            {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex items-center shrink-0">
                    {marqueeItems.map((item, index) => (
                        <div key={index} className="flex items-center mx-8 group cursor-pointer">
                            <i className={`fas ${item.icon} text-white text-lg mx-2 transform group-hover:scale-125 transition-transform`}></i>
                            <span className="text-white font-bold text-sm tracking-wide group-hover:text-tertiary transition-colors">
                                {isAr ? item.textAr : item.textEn}
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-white/30 mx-8"></span>
                        </div>
                    ))}
                </div>
            ))}
        </div>
      </div>

    </div>
  );
};

export default Hero;