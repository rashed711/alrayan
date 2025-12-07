
import React from 'react';
import { Language, Settings } from '../types';
import ScrollReveal from './ScrollReveal';

interface AboutPageProps {
  lang: Language;
  settings: Settings;
}

const AboutPage: React.FC<AboutPageProps> = ({ lang, settings }) => {
  const isAr = lang === 'ar';

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <div className="relative bg-primary py-24 text-white overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
             <ScrollReveal animation="fade-down">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{isAr ? 'من نحن' : 'About Us'}</h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    {isAr ? 'قصة نجاح في عالم الاستقدام، مبنية على الثقة والجودة.' : 'A success story in the world of recruitment, built on trust and quality.'}
                </p>
             </ScrollReveal>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Story */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            <div className="w-full lg:w-1/2">
                <ScrollReveal animation="fade-right">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-tertiary/20 rounded-xl transform rotate-3"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                            alt="Our Team" 
                            className="relative rounded-xl shadow-2xl w-full"
                        />
                    </div>
                </ScrollReveal>
            </div>
            <div className="w-full lg:w-1/2">
                <ScrollReveal animation="fade-left" delay={200}>
                    <h2 className="text-sm font-bold text-tertiary uppercase tracking-wider mb-2">{isAr ? 'قصتنا' : 'Our Story'}</h2>
                    <h3 className="text-3xl font-extrabold text-primary mb-6">{isAr ? 'الريادة في حلول الموارد البشرية' : 'Leading HR Solutions'}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        {isAr 
                        ? `تأسس ${settings.site_name_ar} برؤية واضحة تهدف إلى تنظيم وتسهيل عملية استقدام العمالة المنزلية والمهنية في المملكة العربية السعودية. نحن نؤمن بأن العامل المناسب هو أساس استقرار المنزل ونجاح العمل.`
                        : `${settings.site_name_en} was established with a clear vision aimed at organizing and facilitating the recruitment of domestic and professional workers in KSA. We believe that the right worker is the foundation of home stability and business success.`}
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-8">
                        {isAr
                        ? 'نمتلك شبكة واسعة من الوكالات العالمية الموثوقة، ونتبع إجراءات صارمة في اختيار العمالة لضمان الكفاءة والمصداقية.'
                        : 'We possess a wide network of trusted international agencies and follow strict procedures in selecting workers to ensure efficiency and credibility.'}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-6">
                        <div className="border-l-4 border-tertiary pl-4 rtl:border-l-0 rtl:border-r-4 rtl:pr-4">
                            <span className="block text-3xl font-bold text-primary mb-1">+10</span>
                            <span className="text-sm text-gray-500">{isAr ? 'سنوات خبرة' : 'Years Experience'}</span>
                        </div>
                        <div className="border-l-4 border-tertiary pl-4 rtl:border-l-0 rtl:border-r-4 rtl:pr-4">
                            <span className="block text-3xl font-bold text-primary mb-1">98%</span>
                            <span className="text-sm text-gray-500">{isAr ? 'نسبة رضا العملاء' : 'Client Satisfaction'}</span>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
            <ScrollReveal animation="fade-up" className="h-full">
                <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 hover:shadow-xl transition-shadow h-full">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary text-2xl shadow-md mb-6">
                        <i className="fas fa-eye"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-4">{isAr ? 'رؤيتنا' : 'Our Vision'}</h3>
                    <p className="text-gray-600 leading-relaxed">
                        {isAr
                        ? 'أن نكون الخيار الأول والأكثر موثوقية في المملكة العربية السعودية في مجال خدمات الاستقدام، من خلال تقديم حلول مبتكرة وخدمة عملاء استثنائية.'
                        : 'To be the first and most trusted choice in Saudi Arabia in the field of recruitment services, by offering innovative solutions and exceptional customer service.'}
                    </p>
                </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={200} className="h-full">
                <div className="bg-primary text-white p-10 rounded-3xl border border-primary hover:shadow-xl transition-shadow h-full">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white text-2xl shadow-md mb-6">
                        <i className="fas fa-bullseye"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{isAr ? 'رسالتنا' : 'Our Mission'}</h3>
                    <p className="text-gray-300 leading-relaxed">
                        {isAr
                        ? 'توفير كوادر بشرية مؤهلة ومدربة تلبي احتياجات المجتمع السعودي، مع الالتزام التام بالأنظمة وحفظ حقوق جميع الأطراف (العميل والعامل).'
                        : 'Providing qualified and trained human cadres that meet the needs of the Saudi society, with full commitment to regulations and preserving the rights of all parties (client and worker).'}
                    </p>
                </div>
            </ScrollReveal>
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-16">
            <ScrollReveal animation="fade-up">
                <h2 className="text-3xl font-bold text-primary mb-12">{isAr ? 'لماذا تختارنا؟' : 'Why Choose Us?'}</h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { icon: 'fa-shield-alt', titleAr: 'ضمان ومصداقية', titleEn: 'Guarantee & Credibility', textAr: 'نضمن لك حقوقك وعمالة مطابقة للمواصفات.', textEn: 'We guarantee your rights and workers matching specifications.' },
                    { icon: 'fa-shipping-fast', titleAr: 'سرعة الإنجاز', titleEn: 'Fast Processing', textAr: 'إجراءات سريعة لضمان وصول العمالة في وقت قياسي.', textEn: 'Fast procedures ensuring workers arrival in record time.' },
                    { icon: 'fa-headset', titleAr: 'دعم مستمر', titleEn: 'Ongoing Support', textAr: 'فريق خدمة عملاء جاهز لمساعدتك طوال فترة العقد.', textEn: 'Customer support team ready to help you throughout the contract.' }
                ].map((item, idx) => (
                    <ScrollReveal key={idx} animation="zoom-in" delay={idx * 150} className="h-full">
                        <div className="p-6 rounded-2xl bg-white shadow-lg hover:-translate-y-2 transition-transform duration-300 border border-gray-50 h-full">
                            <div className="w-14 h-14 mx-auto bg-tertiary/10 rounded-full flex items-center justify-center text-tertiary text-2xl mb-4">
                                <i className={`fas ${item.icon}`}></i>
                            </div>
                            <h4 className="text-xl font-bold text-primary mb-2">{isAr ? item.titleAr : item.titleEn}</h4>
                            <p className="text-gray-500 text-sm">{isAr ? item.textAr : item.textEn}</p>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
