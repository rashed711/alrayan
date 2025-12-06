import React from 'react';
import { Language, Settings } from '../types';

interface ContactPageProps {
  lang: Language;
  settings: Settings;
}

const ContactPage: React.FC<ContactPageProps> = ({ lang, settings }) => {
  const isAr = lang === 'ar';

  return (
    <div className="bg-gray-50 min-h-screen py-16 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
             <h1 className="text-4xl font-extrabold text-primary mb-4">{isAr ? 'تواصل معنا' : 'Contact Us'}</h1>
             <p className="text-gray-600 max-w-2xl mx-auto">
                 {isAr 
                 ? 'نحن هنا للإجابة على جميع استفساراتك. لا تتردد في الاتصال بنا أو زيارة مكتبنا.' 
                 : 'We are here to answer all your inquiries. Feel free to contact us or visit our office.'}
             </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex items-start gap-4">
                    <div className="w-12 h-12 bg-tertiary/10 rounded-full flex items-center justify-center text-tertiary text-xl flex-shrink-0">
                        <i className="fas fa-phone-alt"></i>
                    </div>
                    <div>
                        <h3 className="font-bold text-primary text-lg mb-1">{isAr ? 'اتصل بنا' : 'Call Us'}</h3>
                        <p className="text-gray-500 text-sm mb-2">{isAr ? 'متاحين من 9 صباحاً - 9 مساءً' : 'Available 9 AM - 9 PM'}</p>
                        <a href={`tel:${settings.phone}`} className="text-tertiary font-bold hover:underline dir-ltr block text-left">
                            {settings.phone}
                        </a>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex items-start gap-4">
                    <div className="w-12 h-12 bg-tertiary/10 rounded-full flex items-center justify-center text-tertiary text-xl flex-shrink-0">
                        <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                        <h3 className="font-bold text-primary text-lg mb-1">{isAr ? 'راسلنا' : 'Email Us'}</h3>
                        <p className="text-gray-500 text-sm mb-2">{isAr ? 'سنرد عليك خلال 24 ساعة' : 'We reply within 24 hours'}</p>
                        <a href={`mailto:${settings.email}`} className="text-tertiary font-bold hover:underline block break-all">
                            {settings.email}
                        </a>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex items-start gap-4">
                    <div className="w-12 h-12 bg-tertiary/10 rounded-full flex items-center justify-center text-tertiary text-xl flex-shrink-0">
                        <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                        <h3 className="font-bold text-primary text-lg mb-1">{isAr ? 'زرنا' : 'Visit Us'}</h3>
                        <p className="text-gray-500 text-sm">
                            {isAr ? 'طريق الملك فهد، العليا، الرياض' : 'King Fahd Road, Olaya, Riyadh'}
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-tertiary"></div>
                
                <h2 className="text-2xl font-bold text-primary mb-8">{isAr ? 'أرسل لنا رسالة' : 'Send us a message'}</h2>
                
                <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700">{isAr ? 'الاسم الكامل' : 'Full Name'}</label>
                            <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-tertiary focus:ring-2 focus:ring-tertiary/20 outline-none transition-all" placeholder={isAr ? 'الاسم...' : 'Name...'} />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700">{isAr ? 'رقم الهاتف' : 'Phone Number'}</label>
                            <input type="tel" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-tertiary focus:ring-2 focus:ring-tertiary/20 outline-none transition-all" placeholder={isAr ? '05xxxxxxxx' : '+966...'} />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">{isAr ? 'الموضوع' : 'Subject'}</label>
                        <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-tertiary focus:ring-2 focus:ring-tertiary/20 outline-none transition-all">
                            <option>{isAr ? 'استفسار عام' : 'General Inquiry'}</option>
                            <option>{isAr ? 'طلب استقدام' : 'Recruitment Request'}</option>
                            <option>{isAr ? 'شكوى او اقتراح' : 'Complaint or Suggestion'}</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">{isAr ? 'الرسالة' : 'Message'}</label>
                        <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-tertiary focus:ring-2 focus:ring-tertiary/20 outline-none transition-all" placeholder={isAr ? 'اكتب رسالتك هنا...' : 'Write your message here...'}></textarea>
                    </div>

                    <button type="button" className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:bg-tertiary transition-all transform hover:-translate-y-1">
                        {isAr ? 'إرسال الرسالة' : 'Send Message'}
                    </button>
                </form>
            </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-12 rounded-3xl overflow-hidden shadow-lg h-80 bg-gray-200 relative group">
             {/* Simulating a Map */}
             <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/Riyadh_map_sample.png')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"></div>
             <div className="absolute inset-0 bg-primary/20 pointer-events-none"></div>
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                 <div className="w-16 h-16 bg-tertiary text-white rounded-full flex items-center justify-center text-3xl shadow-2xl animate-bounce">
                     <i className="fas fa-map-marker-alt"></i>
                 </div>
             </div>
             <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer" 
                className="absolute bottom-4 right-4 bg-white text-primary px-4 py-2 rounded-lg font-bold text-sm shadow-md hover:bg-gray-100 transition"
            >
                {isAr ? 'افتح في خرائط جوجل' : 'Open in Google Maps'}
            </a>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;