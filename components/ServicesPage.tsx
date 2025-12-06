import React from 'react';
import ServiceCard from './ServiceCard';
import { Service, Language } from '../types';

interface ServicesPageProps {
  services: Service[];
  lang: Language;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ services, lang }) => {
  const isAr = lang === 'ar';

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
            {isAr ? 'خدماتنا المتميزة' : 'Our Premium Services'}
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            {isAr 
              ? 'نحن نقدم مجموعة متكاملة من حلول الاستقدام لتلبية احتياجات منزلك وعملك. اختر من بين خدماتنا المتنوعة المصممة لراحتك.'
              : 'We offer a comprehensive range of recruitment solutions to meet your home and business needs. Choose from our diverse services designed for your comfort.'}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-8 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} lang={lang} index={index} />
          ))}
        </div>
        
        {/* Call to Action Banner */}
        <div className="mt-20 bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl relative overflow-hidden animate-fade-in-up">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    {isAr ? 'لم تجد ما تبحث عنه؟' : 'Didn\'t find what you are looking for?'}
                </h2>
                <p className="mb-8 text-white/80 max-w-2xl mx-auto">
                    {isAr ? 'فريقنا مستعد لتلبية طلباتك الخاصة. تواصل معنا الآن للحصول على استشارة مجانية.' : 'Our team is ready to fulfill your special requests. Contact us now for a free consultation.'}
                </p>
                <a href="#contact" className="inline-block bg-tertiary text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-primary transition-all transform hover:-translate-y-1 shadow-lg">
                    {isAr ? 'تواصل معنا' : 'Contact Us'}
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;