
import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../types';
import ScrollReveal from './ScrollReveal';

// Helper Component for Counting Animation
const AnimatedCounter = ({ end, duration = 2000, prefix = '', suffix = '' }: { end: number, duration?: number, prefix?: string, suffix?: string }) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Only run once
                }
            },
            { threshold: 0.5 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number | null = null;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            // Ease out quart function for smooth professional feel
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            
            setCount(Math.floor(easeProgress * end));

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }, [isVisible, end, duration]);

    return (
        <span ref={elementRef} dir="ltr" className="inline-block tabular-nums">
            {prefix}{count}{suffix}
        </span>
    );
};

interface PortfolioProps {
  lang: Language;
}

const Portfolio: React.FC<PortfolioProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const items = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      titleAr: "مركز التدريب",
      titleEn: "Training Center",
      categoryAr: "تأهيل",
      categoryEn: "Qualification"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      titleAr: "توقيع العقود",
      titleEn: "Contract Signing",
      categoryAr: "إجراءات",
      categoryEn: "Procedures"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      titleAr: "استقبال العمالة",
      titleEn: "Worker Reception",
      categoryAr: "المطار",
      categoryEn: "Airport"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      titleAr: "خدمة العملاء",
      titleEn: "Customer Service",
      categoryAr: "المكتب",
      categoryEn: "Office"
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        titleAr: "الفحص الطبي",
        titleEn: "Medical Check",
        categoryAr: "السلامة",
        categoryEn: "Safety"
      },
      {
        id: 6,
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        titleAr: "فريق العمل",
        titleEn: "Our Team",
        categoryAr: "إدارة",
        categoryEn: "Management"
      }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal animation="fade-down">
            <div className="text-center mb-16">
                <h2 className="text-sm text-tertiary font-bold tracking-wide uppercase mb-2 flex items-center justify-center gap-2">
                    <span className="w-8 h-[2px] bg-tertiary inline-block"></span>
                    {isAr ? 'معرض أعمالنا' : 'Our Portfolio'}
                    <span className="w-8 h-[2px] bg-tertiary inline-block"></span>
                </h2>
                <h3 className="text-3xl md:text-5xl font-extrabold text-primary mb-4">
                    {isAr ? 'لمحات من تميزنا' : 'Glimpses of Excellence'}
                </h3>
                <p className="max-w-2xl mx-auto text-gray-500">
                    {isAr 
                    ? 'جولة مصورة داخل أروقة مكتبنا وعملياتنا اليومية لخدمتكم' 
                    : 'A visual tour inside our office and daily operations serving you'}
                </p>
            </div>
        </ScrollReveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
                <ScrollReveal 
                    key={item.id} 
                    animation="zoom-in" 
                    delay={index * 100} // Staggered delay: 0ms, 100ms, 200ms...
                    className="h-full"
                >
                    <div 
                        className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
                    >
                        {/* Image */}
                        <img 
                            src={item.image} 
                            alt={isAr ? item.titleAr : item.titleEn} 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                        
                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <span className="text-tertiary text-xs font-bold uppercase tracking-wider mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                {isAr ? item.categoryAr : item.categoryEn}
                            </span>
                            <h4 className="text-white text-xl font-bold mb-1">
                                {isAr ? item.titleAr : item.titleEn}
                            </h4>
                            <div className="h-1 w-12 bg-tertiary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </div>
                        
                        {/* Icon Overlay */}
                        <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-90">
                            <i className="fas fa-plus"></i>
                        </div>
                    </div>
                </ScrollReveal>
            ))}
        </div>
        
        {/* Stats Strip */}
        <ScrollReveal animation="fade-up" delay={400} className="w-full">
            <div className="mt-16 bg-gray-50 rounded-2xl p-8 border border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="group border-b md:border-b-0 md:border-l border-gray-200 pb-4 md:pb-0 last:border-0 md:last:border-l-0 rtl:md:border-l-0 rtl:md:border-r">
                    <div className="text-4xl font-black text-secondary mb-1 group-hover:text-tertiary transition-colors">
                        <AnimatedCounter end={98} suffix="%" />
                    </div>
                    <div className="text-sm text-gray-500 font-bold">{isAr ? 'سرعة الإنجاز' : 'Processing Speed'}</div>
                </div>
                <div className="group border-b md:border-b-0 md:border-l border-gray-200 pb-4 md:pb-0 last:border-0 md:last:border-l-0 rtl:md:border-l-0 rtl:md:border-r">
                    <div className="text-4xl font-black text-secondary mb-1 group-hover:text-tertiary transition-colors">
                        <AnimatedCounter end={24} suffix="/7" />
                    </div>
                    <div className="text-sm text-gray-500 font-bold">{isAr ? 'دعم فني' : 'Technical Support'}</div>
                </div>
                <div className="group">
                    <div className="text-4xl font-black text-secondary mb-1 group-hover:text-tertiary transition-colors">
                        <AnimatedCounter end={15} prefix="+" />
                    </div>
                    <div className="text-sm text-gray-500 font-bold">{isAr ? 'دولة' : 'Countries'}</div>
                </div>
            </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Portfolio;
