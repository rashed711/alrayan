import React from 'react';
import { Service, Language } from '../types';

interface ServiceCardProps {
  service: Service;
  lang: Language;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, lang, index }) => {
  const isAr = lang === 'ar';
  
  return (
    <div 
        className="group relative bg-white rounded-2xl md:rounded-3xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 md:hover:-translate-y-3 animate-fade-in-up flex flex-col h-full"
        style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Decorative Gradient Background on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#456882]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#234C6A] to-[#456882] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

      <div className="p-4 md:p-8 relative z-10 flex flex-col h-full">
        {/* Icon Container - Responsive Size */}
        <div className={`mb-3 md:mb-6 inline-block transform transition-transform duration-500 ease-out ${isAr ? 'group-hover:-translate-x-1 md:group-hover:-translate-x-2' : 'group-hover:translate-x-1 md:group-hover:translate-x-2'}`}>
             <div className="w-12 h-12 md:w-20 md:h-20 bg-[#1B3C53] rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl group-hover:bg-[#234C6A] group-hover:rotate-6 transition-all duration-500 relative overflow-hidden">
                {/* Gloss effect on icon */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10 pointer-events-none"></div>
                
                {/* Animated Icon Inner */}
                <i className={`fas fa-hands-helping text-lg md:text-3xl transform group-hover:scale-125 transition-transform duration-500`}></i>
            </div>
        </div>
        
        <div className="flex-1 min-h-[60px] md:min-h-0">
            <h3 className="text-sm md:text-2xl font-extrabold text-[#1B3C53] mb-2 md:mb-4 group-hover:text-[#456882] transition-colors duration-300 leading-tight">
                {isAr ? service.title_ar : service.title_en}
            </h3>
            
            <p className="text-xs md:text-sm text-gray-500 leading-relaxed mb-4 md:mb-6 group-hover:text-gray-700 transition-colors opacity-80 group-hover:opacity-100 duration-500 line-clamp-3 md:line-clamp-none">
                {isAr 
                    ? 'نقدم هذه الخدمة بمعايير احترافية تضمن رضاكم التام وتوفير الوقت.' 
                    : 'We provide this service with professional standards ensuring satisfaction.'}
            </p>
        </div>

        {/* Action Button - Slides Horizontally */}
        <div className={`mt-auto flex items-center text-[#456882] font-bold transition-transform duration-500 transform ${isAr ? 'group-hover:-translate-x-2' : 'group-hover:translate-x-2'}`}>
            <span className="text-[10px] md:text-sm uppercase tracking-wider group-hover:underline hidden sm:inline">{isAr ? 'عرض التفاصيل' : 'View Details'}</span>
            <span className="text-[10px] md:text-sm uppercase tracking-wider group-hover:underline sm:hidden">{isAr ? 'المزيد' : 'More'}</span>
            <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-50 flex items-center justify-center mx-2 md:mx-3 group-hover:bg-[#456882] group-hover:text-white transition-all duration-300 shadow-sm group-hover:scale-110`}>
                 <i className={`fas fa-arrow-${isAr ? 'left' : 'right'} text-xs transform transition-transform group-hover:animate-pulse`}></i>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;