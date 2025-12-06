import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import ArticleCard from './components/ArticleCard';
import ArticleDetail from './components/ArticleDetail';
import BackendViewer from './components/BackendViewer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import { mockSettings, mockServices, mockArticles } from './data/mockData';
import { Language, Article } from './types';

function App() {
  // Global State for Language and Navigation
  const [lang, setLang] = useState<Language>('ar');
  const [activeTab, setActiveTab] = useState('home');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const isAr = lang === 'ar';

  const handleArticleClick = (article: Article) => {
    setSelectedArticle(article);
    setActiveTab('article');
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setSelectedArticle(null);
    setActiveTab('home');
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
      switch (activeTab) {
        case 'about':
            return <AboutPage lang={lang} settings={mockSettings} />;
        case 'services':
            return <ServicesPage services={mockServices} lang={lang} />;
        case 'contact':
            return <ContactPage lang={lang} settings={mockSettings} />;
        case 'backend':
            return <BackendViewer lang={lang} />;
        case 'article':
            return selectedArticle ? (
                <ArticleDetail 
                    article={selectedArticle} 
                    lang={lang} 
                    onBack={handleBackToHome}
                />
            ) : <div />;
        case 'home':
        default:
            return (
                <>
                  <Hero lang={lang} settings={mockSettings} />

                  {/* Services Section */}
                  <div className="py-24 bg-white relative overflow-hidden">
                     {/* Decorative Background Elements */}
                     <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                     <div className="absolute bottom-0 right-0 w-96 h-96 bg-tertiary/5 rounded-full translate-x-1/2 translate-y-1/2"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                      <div className="text-center mb-16 animate-fade-in-up">
                        <h2 className="text-sm text-tertiary font-bold tracking-wide uppercase mb-2 flex items-center justify-center gap-2">
                          <span className="w-8 h-[2px] bg-tertiary inline-block"></span>
                          {isAr ? 'خدماتنا' : 'Our Services'}
                          <span className="w-8 h-[2px] bg-tertiary inline-block"></span>
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-extrabold text-primary mb-4">
                          {isAr ? 'حلول استقدام شاملة' : 'Comprehensive Recruitment Solutions'}
                        </h3>
                        <p className="max-w-2xl mx-auto text-gray-500">
                             {isAr ? 'نقدم مجموعة واسعة من الخدمات لتلبية جميع احتياجاتك' : 'We offer a wide range of services to meet all your needs'}
                        </p>
                      </div>

                      {/* Updated Grid for Mobile (2 cols) */}
                      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {mockServices.slice(0, 6).map((service, index) => (
                          <ServiceCard key={service.id} service={service} lang={lang} index={index} />
                        ))}
                      </div>
                      
                      <div className="text-center mt-12">
                          <button 
                            onClick={() => { setActiveTab('services'); window.scrollTo(0,0); }}
                            className="inline-flex items-center gap-2 text-tertiary font-bold hover:text-primary transition-colors border-b-2 border-tertiary pb-1"
                          >
                              {isAr ? 'عرض جميع الخدمات' : 'View All Services'}
                              <i className={`fas fa-arrow-${isAr ? 'left' : 'right'}`}></i>
                          </button>
                      </div>
                    </div>
                  </div>

                  {/* Blog/Articles Section */}
                  <div className="py-24 bg-light relative">
                     <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                     <div className="absolute -left-20 top-20 text-[200px] text-gray-200 font-black opacity-20 pointer-events-none select-none">BLOG</div>
                     
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                      <div className="flex flex-col md:flex-row justify-between items-end mb-12 animate-fade-in-up">
                          <div className="text-center md:text-start">
                            <h2 className="text-4xl font-extrabold text-primary mb-2">
                            {isAr ? 'أحدث المقالات والأخبار' : 'Latest Articles & News'}
                            </h2>
                            <p className="mt-2 text-lg text-gray-500 max-w-2xl">
                            {isAr 
                                ? 'ابق على اطلاع دائم بكل ما يخص قطاع الاستقدام والأنظمة الجديدة.' 
                                : 'Stay updated with everything related to the recruitment sector and new regulations.'}
                            </p>
                          </div>
                          <button 
                            onClick={() => { /* In a real app this would go to a blog list page */ }}
                            className="hidden md:flex items-center gap-2 text-white bg-tertiary px-6 py-3 rounded-full font-bold hover:bg-primary transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                          >
                              {isAr ? 'عرض كل المقالات' : 'View All Articles'} <i className={`fas fa-arrow-${isAr ? 'left' : 'right'}`}></i>
                          </button>
                      </div>
                      
                      <div className="grid gap-8 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
                        {mockArticles.map((article, index) => (
                          <ArticleCard 
                            key={article.id} 
                            article={article} 
                            lang={lang} 
                            onClick={handleArticleClick}
                            index={index}
                          />
                        ))}
                      </div>
                      
                       <div className="md:hidden mt-10 text-center">
                          <button className="text-white bg-tertiary px-6 py-3 rounded-full font-bold shadow-lg w-full">
                              {isAr ? 'عرض كل المقالات' : 'View All Articles'}
                          </button>
                      </div>
                    </div>
                  </div>
                </>
            );
      }
  };

  return (
    <div className={`min-h-screen bg-light ${isAr ? 'font-sans' : 'font-sans'}`} dir={isAr ? 'rtl' : 'ltr'}>
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        activeTab={activeTab === 'article' ? 'home' : activeTab}
        setActiveTab={(tab) => {
            setActiveTab(tab);
            if(tab !== 'article') setSelectedArticle(null);
            window.scrollTo(0,0);
        }}
      />

      {renderContent()}

      {/* Footer Contact Info - Always Visible */}
      <div className="bg-[#1B3C53] text-white pt-16 pb-8 border-t-8 border-tertiary relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-start mb-12">
                <div className="flex flex-col items-center md:items-start animate-fade-in-up">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-primary font-bold text-2xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform">W</div>
                            <span className="text-2xl font-bold">{isAr ? mockSettings.site_name_ar : mockSettings.site_name_en}</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed max-w-xs mb-6">
                            {isAr ? 'مكتب الريان للاستقدام، خيارك الأول للعمالة المنزلية والمهنية. نلتزم بأعلى معايير الجودة والمصداقية.' : 'Al-Rayan Recruitment, your first choice for domestic and professional workers. We adhere to the highest standards of quality and credibility.'}
                        </p>
                        
                        {/* Social Media Links in Footer */}
                        <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all transform hover:-translate-y-1">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-all transform hover:-translate-y-1">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition-all transform hover:-translate-y-1">
                            <i className="fab fa-instagram"></i>
                        </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all transform hover:-translate-y-1">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                        </div>
                </div>
                
                <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                    <h3 className="text-xl font-bold mb-6 text-white relative inline-block">
                        {isAr ? 'روابط سريعة' : 'Quick Links'}
                        <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-tertiary rounded-full"></span>
                    </h3>
                    <ul className="space-y-4 text-gray-300">
                        <li><button onClick={() => { setActiveTab('home'); window.scrollTo(0,0); }} className="hover:text-tertiary hover:translate-x-2 transition-all block flex items-center gap-2"><i className="fas fa-chevron-right text-xs"></i> {isAr ? 'الرئيسية' : 'Home'}</button></li>
                        <li><button onClick={() => { setActiveTab('services'); window.scrollTo(0,0); }} className="hover:text-tertiary hover:translate-x-2 transition-all block flex items-center gap-2"><i className="fas fa-chevron-right text-xs"></i> {isAr ? 'خدماتنا' : 'Services'}</button></li>
                        <li><button onClick={() => { setActiveTab('about'); window.scrollTo(0,0); }} className="hover:text-tertiary hover:translate-x-2 transition-all block flex items-center gap-2"><i className="fas fa-chevron-right text-xs"></i> {isAr ? 'من نحن' : 'About Us'}</button></li>
                        <li><button onClick={() => { setActiveTab('contact'); window.scrollTo(0,0); }} className="hover:text-tertiary hover:translate-x-2 transition-all block flex items-center gap-2"><i className="fas fa-chevron-right text-xs"></i> {isAr ? 'اتصل بنا' : 'Contact'}</button></li>
                    </ul>
                </div>
                
                <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                        <h3 className="text-xl font-bold mb-6 text-white relative inline-block">
                            {isAr ? 'معلومات التواصل' : 'Contact Info'}
                            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-tertiary rounded-full"></span>
                        </h3>
                        <div className="space-y-6">
                            <div className="flex items-center justify-center md:justify-start gap-4 text-gray-300 group hover:text-white transition-colors">
                                <div className="w-10 h-10 rounded-full bg-tertiary/20 flex items-center justify-center text-tertiary group-hover:bg-tertiary group-hover:text-white transition-all">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <span className="text-lg">{mockSettings.phone}</span>
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-4 text-gray-300 group hover:text-white transition-colors">
                                <div className="w-10 h-10 rounded-full bg-tertiary/20 flex items-center justify-center text-tertiary group-hover:bg-tertiary group-hover:text-white transition-all">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <span className="text-lg">{mockSettings.email}</span>
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-4 text-gray-300 group hover:text-white transition-colors">
                                <div className="w-10 h-10 rounded-full bg-tertiary/20 flex items-center justify-center text-tertiary group-hover:bg-tertiary group-hover:text-white transition-all">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <span className="text-lg">{isAr ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia'}</span>
                            </div>
                        </div>
                </div>
            </div>
            
            <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
                <p>&copy; 2025 {isAr ? mockSettings.site_name_ar : mockSettings.site_name_en}. All rights reserved.</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white transition-colors">{isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}</a>
                    <a href="#" className="hover:text-white transition-colors">{isAr ? 'الشروط والأحكام' : 'Terms & Conditions'}</a>
                </div>
            </div>
        </div>
      </div>
      
      {/* Floating Action Button */}
      <FloatingWhatsApp phone={mockSettings.phone} lang={lang} />
    </div>
  );
}

export default App;