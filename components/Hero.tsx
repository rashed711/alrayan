
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
    "https://cdn.dubaiclean.com/uploads/2025/01/can-i-hire-a-maid-without-agency-in-dubai-3.webp", // Handshake
    "https://www.miamilifestylevip.com/cdn/shop/products/Personal_Driver.jpg?v=1548923724", // Nanny/Care
    "https://cdn.dubaiclean.com/uploads/2025/01/can-i-hire-a-maid-without-agency-in-dubai-4.webp"  // Chef/Kitchen
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

  // Split Countries into two rings for visual balance
  const outerRingCountries = [
    { code: 'ph', nameAr: 'الفلبين', nameEn: 'Philippines' },
    { code: 'lk', nameAr: 'سيريلانكا', nameEn: 'Sri Lanka' },
    { code: 'ke', nameAr: 'كينيا', nameEn: 'Kenya' },
    { code: 'ug', nameAr: 'أوغندا', nameEn: 'Uganda' },
    { code: 'bd', nameAr: 'بنجلاديش', nameEn: 'Bangladesh' },
    { code: 'in', nameAr: 'الهند', nameEn: 'India' },
    { code: 'id', nameAr: 'إندونيسيا', nameEn: 'Indonesia' },
    { code: 'pk', nameAr: 'باكستان', nameEn: 'Pakistan' },
  ];

  const innerRingCountries = [
    { code: 'np', nameAr: 'نيبال', nameEn: 'Nepal' },
    { code: 'vn', nameAr: 'فيتنام', nameEn: 'Vietnam' },
    { code: 'et', nameAr: 'إثيوبيا', nameEn: 'Ethiopia' },
    { code: 'sd', nameAr: 'السودان', nameEn: 'Sudan' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-primary">
      
      {/* BACKGROUND IMAGE SLIDER (Absolute behind everything) */}
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
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r ${isAr ? 'from-secondary/10 via-primary/50 to-primary/90' : 'from-primary/90 via-primary/50 to-secondary/10'}`}></div>
          </div>
        ))}
      </div>

      {/* FLOATING DECORATIONS */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-tertiary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float z-10 pointer-events-none"></div>
      <div className="absolute bottom-40 right-20 w-48 h-48 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float z-10 pointer-events-none" style={{animationDelay: '2s'}}></div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col justify-center relative z-20 w-full pt-10 pb-8">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
            
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

                {/* BUTTONS */}
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
      </div>

      {/* MARQUEE STRIP (Relative to flow) */}
      <div className="relative z-20 h-14 bg-white/10 backdrop-blur-md border-t border-white/10 flex items-center overflow-hidden" dir="ltr">
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

      {/* NEW: RECRUITMENT COUNTRIES DOUBLE ORBIT (Under News Bar) */}
      <div className="relative z-20 bg-gradient-to-b from-primary/95 to-primary border-t border-white/10 py-16 overflow-hidden">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
              
              {/* Text Description */}
              <div className={`w-full md:w-1/3 text-center ${isAr ? 'md:text-right' : 'md:text-left'} z-10`}>
                   <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                       <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                       <span className="text-tertiary font-bold tracking-widest text-xs uppercase">{isAr ? 'نطاق خدماتنا' : 'OUR REACH'}</span>
                   </div>
                   <h3 className="text-3xl font-extrabold text-white mb-3">
                       {isAr ? 'وجهات استقدام عالمية' : 'Global Recruitment Hubs'}
                   </h3>
                   <p className="text-gray-300 text-sm leading-relaxed mb-6">
                       {isAr 
                       ? 'شبكة واسعة من المكاتب المعتمدة حول العالم في دائرة متكاملة لخدمتكم.' 
                       : 'A wide network of accredited offices around the world in an integrated circle to serve you.'}
                   </p>
                   
                   {/* Decorative button-like indicator */}
                   <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-pointer">
                       <i className="fas fa-globe text-tertiary"></i>
                       <span className="text-white text-xs font-bold">{isAr ? 'تغطية دولية شاملة' : 'Comprehensive International Coverage'}</span>
                   </div>
              </div>

              {/* Dual Orbit Visualization - RESPONSIVE CONTAINER */}
              <div className="w-full md:w-2/3 h-[320px] sm:h-[400px] md:h-[450px] relative flex items-center justify-center perspective-1000 overflow-hidden md:overflow-visible">
                  
                  {/* SCALING WRAPPER: Ensures it fits on mobile without overflow */}
                  <div className="relative flex items-center justify-center transform scale-[0.45] sm:scale-75 md:scale-100 origin-center">

                      {/* Central Globe Core */}
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-primary relative z-20 shadow-[0_0_60px_rgba(50,130,184,0.6)] flex items-center justify-center border border-white/20">
                          {/* Stylized Globe Lines */}
                          <div className="absolute inset-0 rounded-full border border-white/10 rotate-45"></div>
                          <div className="absolute inset-0 rounded-full border border-white/10 -rotate-45"></div>
                          <div className="absolute inset-2 rounded-full border-t border-b border-white/20"></div>
                          
                          <i className="fas fa-globe-asia text-7xl text-white/90 drop-shadow-lg animate-pulse-glow"></i>
                      </div>

                      {/* ================= INNER ORBIT (Counter-Clockwise) ================= */}
                      <div className="absolute w-[240px] h-[240px] z-10">
                          {/* Dashed Path */}
                          <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/20 animate-[spin_40s_linear_infinite_reverse]"></div>
                          
                          {/* Moving Flags Container */}
                          <div className="absolute inset-0 animate-spin-reverse-slower">
                              {innerRingCountries.map((country, index) => {
                                  const total = innerRingCountries.length;
                                  const angle = (index / total) * 2 * Math.PI;
                                  const radius = 50; // 50% = edge of container
                                  
                                  const left = 50 + radius * Math.cos(angle);
                                  const top = 50 + radius * Math.sin(angle);

                                  return (
                                      <div 
                                        key={country.code}
                                        className="absolute flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 animate-spin-slower" // Counter rotate
                                        style={{ left: `${left}%`, top: `${top}%` }}
                                      >
                                          <div className="w-10 h-10 rounded-full bg-white shadow-lg border-2 border-white overflow-hidden hover:scale-125 transition-transform duration-300 relative z-10">
                                            <img src={`https://flagcdn.com/w80/${country.code}.png`} alt={isAr ? country.nameAr : country.nameEn} className="w-full h-full object-cover" />
                                          </div>
                                          <div className="mt-1 px-1.5 py-0.5 bg-tertiary/80 backdrop-blur-sm rounded-md shadow-sm">
                                              <span className="text-[9px] text-white font-bold whitespace-nowrap">{isAr ? country.nameAr : country.nameEn}</span>
                                          </div>
                                      </div>
                                  );
                              })}
                          </div>
                      </div>

                      {/* ================= OUTER ORBIT (Clockwise) ================= */}
                      <div className="absolute w-[420px] h-[420px] z-0">
                          {/* Dashed Path */}
                          <div className="absolute inset-0 rounded-full border border-dashed border-white/10 animate-[spin_60s_linear_infinite]"></div>
                          
                          {/* Moving Flags Container */}
                          <div className="absolute inset-0 animate-spin-super-slow">
                              {outerRingCountries.map((country, index) => {
                                  const total = outerRingCountries.length;
                                  const angle = (index / total) * 2 * Math.PI;
                                  const radius = 50; 
                                  
                                  const left = 50 + radius * Math.cos(angle);
                                  const top = 50 + radius * Math.sin(angle);

                                  return (
                                      <div 
                                        key={country.code}
                                        className="absolute flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 animate-spin-reverse-super-slow" // Counter rotate
                                        style={{ left: `${left}%`, top: `${top}%` }}
                                      >
                                          <div className="w-14 h-14 rounded-full bg-white shadow-xl border-[3px] border-white overflow-hidden hover:scale-125 transition-transform duration-300 relative z-10">
                                            <img src={`https://flagcdn.com/w80/${country.code}.png`} alt={isAr ? country.nameAr : country.nameEn} className="w-full h-full object-cover" />
                                          </div>
                                          <div className="mt-2 px-2.5 py-1 bg-black/60 backdrop-blur-sm rounded-full border border-white/20 shadow-lg">
                                              <span className="text-[10px] md:text-xs text-white font-bold whitespace-nowrap">{isAr ? country.nameAr : country.nameEn}</span>
                                          </div>
                                      </div>
                                  );
                              })}
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
