
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import Portfolio from './components/Portfolio';
import ArticleCard from './components/ArticleCard';
import ArticleDetail from './components/ArticleDetail';
import ServiceDetail from './components/ServiceDetail';
import BackendViewer from './components/BackendViewer';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ArticlesPage from './components/ArticlesPage';
import ContactPage from './components/ContactPage';
import ScrollReveal from './components/ScrollReveal'; // Import the new component
import { mockSettings, mockServices, mockArticles } from './data/mockData';
import { APP_CONFIG } from './constants';
import { Language, Article, Service } from './types';

function App() {
  // Global State
  const [lang, setLang] = useState<Language>('ar');
  
  // --- Enhanced URL Parsing Logic ---
  const getInitialStateFromUrl = () => {
    if (typeof window === 'undefined') return { tab: 'home', service: null, article: null };

    const path = window.location.pathname;
    // Split path into segments and remove empty strings
    const segments = path.split('/').filter(Boolean);

    // 1. Check for Service Detail (e.g., /service/1)
    // We look for the 'service' keyword and check if the NEXT segment is a number
    const serviceIndex = segments.indexOf('service');
    if (serviceIndex !== -1 && segments[serviceIndex + 1]) {
        const id = parseInt(segments[serviceIndex + 1]);
        const service = mockServices.find(s => s.id === id);
        if (service) return { tab: 'service', service: service, article: null };
    }

    // 2. Check for Article Detail (e.g., /article/1)
    const articleIndex = segments.indexOf('article');
    if (articleIndex !== -1 && segments[articleIndex + 1]) {
        const id = parseInt(segments[articleIndex + 1]);
        const article = mockArticles.find(a => a.id === id);
        if (article) return { tab: 'article', service: null, article: article };
    }

    // 3. Check for Standard Pages (about, contact, etc.)
    // We iterate backwards to find the most relevant "tab" name in the URL
    // This handles subdirectories like /my-repo/about correctly
    const validTabs = ['about', 'services', 'contact', 'articles', 'backend', 'home'];
    for (let i = segments.length - 1; i >= 0; i--) {
        if (validTabs.includes(segments[i])) {
            return { tab: segments[i], service: null, article: null };
        }
    }

    // Default to home
    return { tab: 'home', service: null, article: null };
  };

  // Initialize state based on the URL analysis
  const initialState = getInitialStateFromUrl();

  const [activeTab, setActiveTab] = useState(initialState.tab);
  const [selectedService, setSelectedService] = useState<Service | null>(initialState.service);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(initialState.article);
  
  // Transitions
  const [isLoading, setIsLoading] = useState(false);
  const [showContent, setShowContent] = useState(true);

  const isAr = lang === 'ar';

  // Handle Browser Back/Forward Buttons
  useEffect(() => {
    const handlePopState = () => {
      // Re-analyze URL when user presses Back/Forward
      const newState = getInitialStateFromUrl();
      
      setIsLoading(true);
      setShowContent(false);

      setTimeout(() => {
          setActiveTab(newState.tab);
          setSelectedService(newState.service);
          setSelectedArticle(newState.article);
          
          window.scrollTo(0, 0);
          setIsLoading(false);
          setShowContent(true);
      }, 300);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Safety Timeout: Force loading to false if it gets stuck
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        setShowContent(true);
      }, 2000); // Reduced to 2 seconds for snappier feel
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  // Handle Maintenance Mode
  if (APP_CONFIG.MAINTENANCE_MODE) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-primary text-white text-center p-4">
        <i className="fas fa-tools text-6xl text-tertiary mb-6 animate-bounce"></i>
        <h1 className="text-4xl font-bold mb-4">{isAr ? 'الموقع تحت الصيانة' : 'Website Under Maintenance'}</h1>
        <p className="text-gray-300">{isAr ? 'نعود إليكم قريباً بشكل أفضل.' : 'We will be back soon.'}</p>
      </div>
    );
  }

  // Navigation Logic
  const handleNavigation = (tab: string, item?: Article | Service | null) => {
    // Prevent reloading same tab/item
    if (tab === activeTab && !item) return;
    if (tab === 'service' && selectedService?.id === (item as Service)?.id) return;
    if (tab === 'article' && selectedArticle?.id === (item as Article)?.id) return;

    setIsLoading(true);
    setShowContent(false);

    // Update URL History
    let newUrl = '/';
    
    // Construct the correct URL based on the action
    if (tab === 'home') {
        newUrl = './'; // Relative path for home
    } else if (tab === 'service' && item) {
        newUrl = `./service/${item.id}`; // Deep link for service
    } else if (tab === 'article' && item) {
        newUrl = `./article/${item.id}`; // Deep link for article
    } else {
        newUrl = `./${tab}`; // Standard page link
    }

    try {
        // Use pushState with the constructed URL
        // We use relative paths (./) to play nicely with subdirectories if possible,
        // but for deep links, we might need to handle the base path carefully in a real deployment.
        // For this demo, we assume the router handles it via the browser URL bar.
        const state = { tab, itemId: item?.id };
        window.history.pushState(state, '', newUrl);
    } catch (e) {
        console.log('Navigation updated state only (URL update failed)');
    }

    setTimeout(() => {
        setActiveTab(tab);
        
        if (tab === 'article') setSelectedArticle(item as Article);
        else if (tab === 'service') setSelectedService(item as Service);
        else {
            setSelectedArticle(null);
            setSelectedService(null);
        }

        window.scrollTo(0, 0);
        
        // Short delay to allow render before fading in
        setTimeout(() => {
            setIsLoading(false);
            setShowContent(true);
        }, 300);
    }, 600);
  };

  // Helper Wrappers for Navigation
  const handleArticleClick = (article: Article) => handleNavigation('article', article);
  const handleServiceClick = (service: Service) => handleNavigation('service', service);
  const handleBack = (target: string) => handleNavigation(target);

  // Content Renderer
  const renderContent = () => {
      const contentClass = `transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`;

      switch (activeTab) {
        case 'about':
            return <div className={contentClass}><AboutPage lang={lang} settings={mockSettings} /></div>;
        case 'services':
            return <div className={contentClass}><ServicesPage services={mockServices} lang={lang} onServiceClick={handleServiceClick} /></div>;
        case 'contact':
            return <div className={contentClass}><ContactPage lang={lang} settings={mockSettings} /></div>;
        case 'articles':
            return <div className={contentClass}><ArticlesPage articles={mockArticles} lang={lang} onArticleClick={handleArticleClick} /></div>;
        case 'backend':
            return <div className={contentClass}><BackendViewer lang={lang} /></div>;
        case 'article':
            return selectedArticle ? (
                <div className={contentClass}>
                    <ArticleDetail article={selectedArticle} lang={lang} onBack={() => handleBack('articles')} />
                </div>
            ) : <div />;
        case 'service':
            return selectedService ? (
                <div className={contentClass}>
                    <ServiceDetail service={selectedService} lang={lang} onBack={() => handleBack('services')} onContact={() => handleBack('contact')} />
                </div>
            ) : <div />;
        case 'home':
        default:
            return (
                <div className={contentClass}>
                  <Hero lang={lang} settings={mockSettings} onNavigate={handleNavigation} />

                  {/* Services Section */}
                  <div className="py-24 bg-white relative overflow-hidden">
                     <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                     <div className="absolute bottom-0 right-0 w-96 h-96 bg-tertiary/5 rounded-full translate-x-1/2 translate-y-1/2"></div>

                    <ScrollReveal animation="fade-up">
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
                        <div className="text-center">
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
                      </div>
                    </ScrollReveal>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {mockServices.map((service, index) => (
                                <ScrollReveal key={service.id} animation="fade-up" delay={index * 150} className="h-full">
                                    <ServiceCard 
                                        service={service} 
                                        lang={lang} 
                                        index={0} // Index handled by ScrollReveal delay now
                                        onClick={handleServiceClick}
                                    />
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                      
                    <div className="text-center mt-12 max-w-7xl mx-auto px-4">
                        <ScrollReveal animation="zoom-in" delay={600}>
                          <button 
                          onClick={() => handleNavigation('services')}
                          className="inline-flex items-center gap-2 text-tertiary font-bold hover:text-primary transition-colors border-b-2 border-tertiary pb-1"
                          >
                              {isAr ? 'عرض جميع الخدمات' : 'View All Services'}
                              <i className={`fas fa-arrow-${isAr ? 'left' : 'right'}`}></i>
                          </button>
                        </ScrollReveal>
                    </div>
                  </div>

                  {/* Portfolio Section (New) */}
                  <Portfolio lang={lang} />

                  {/* Blog Section */}
                  <div className="py-24 bg-light relative overflow-hidden">
                     <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                     <div className="absolute -left-20 top-20 text-[200px] text-gray-200 font-black opacity-20 pointer-events-none select-none">BLOG</div>
                     
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                      <ScrollReveal animation="fade-right">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                            <div className="text-center md:text-start">
                              <h2 className="text-4xl font-extrabold text-primary mb-2">
                              {isAr ? 'أحدث المقالات والأخبار' : 'Latest Articles & News'}
                              </h2>
                              <p className="mt-2 text-lg text-gray-500 max-w-2xl">
                              {isAr ? 'ابق على اطلاع دائم بكل ما يخص قطاع الاستقدام والأنظمة الجديدة.' : 'Stay updated with everything related to the recruitment sector and new regulations.'}
                              </p>
                            </div>
                            <button 
                              onClick={() => handleNavigation('articles')}
                              className="hidden md:flex items-center gap-2 text-white bg-tertiary px-6 py-3 rounded-full font-bold hover:bg-primary transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                {isAr ? 'عرض كل المقالات' : 'View All Articles'} <i className={`fas fa-arrow-${isAr ? 'left' : 'right'}`}></i>
                            </button>
                        </div>
                      </ScrollReveal>
                      
                      <div className="grid gap-8 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
                        {mockArticles.map((article, index) => (
                          <ScrollReveal key={article.id} animation="fade-up" delay={index * 200} className="h-full">
                            <ArticleCard 
                              article={article} 
                              lang={lang} 
                              onClick={handleArticleClick}
                              index={0} // Animation handled by ScrollReveal
                            />
                          </ScrollReveal>
                        ))}
                      </div>
                      
                       <div className="md:hidden mt-10 text-center">
                          <button 
                             onClick={() => handleNavigation('articles')}
                             className="text-white bg-tertiary px-6 py-3 rounded-full font-bold shadow-lg w-full"
                          >
                              {isAr ? 'عرض كل المقالات' : 'View All Articles'}
                          </button>
                      </div>
                    </div>
                  </div>
                </div>
            );
      }
  };

  return (
    <>
      <LoadingScreen isLoading={isLoading} lang={lang} />
      <Layout lang={lang} setLang={setLang} activeTab={activeTab} onNavigate={handleNavigation}>
        {renderContent()}
      </Layout>
    </>
  );
}

export default App;
