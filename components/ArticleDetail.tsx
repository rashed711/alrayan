import React, { useEffect } from 'react';
import { Article, Language } from '../types';

interface ArticleDetailProps {
  article: Article;
  lang: Language;
  onBack: () => void;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article, lang, onBack }) => {
  const isAr = lang === 'ar';
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle Social Sharing
  const handleShare = (platform: 'facebook' | 'twitter' | 'whatsapp') => {
    // In a real deployed app, this would be the specific URL of the article.
    // For this demo, we use the current page URL.
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(isAr ? article.title_ar : article.title_en);
    
    let shareUrl = '';
    let windowFeatures = 'width=600,height=400,scrollbars=yes,resizable=yes';

    switch (platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${title}&url=${url}`;
            break;
        case 'whatsapp':
            // WhatsApp usually opens in a new tab/app, so window size matters less
            shareUrl = `https://wa.me/?text=${title}%20${url}`;
            break;
    }

    window.open(shareUrl, '_blank', windowFeatures);
  };

  return (
    <div className="bg-white min-h-screen pb-12 animate-fade-in" dir={isAr ? 'rtl' : 'ltr'}>
      {/* Article Header Image */}
      <div className="relative h-64 md:h-96 w-full overflow-hidden">
        <div className="absolute inset-0 bg-primary/40 z-10"></div>
        <img 
            src={`https://picsum.photos/seed/${article.id}/1600/900`} 
            alt="Article Banner" 
            className="w-full h-full object-cover"
        />
        <div className="absolute top-8 left-8 right-8 z-20 max-w-7xl mx-auto">
             <button 
                onClick={onBack}
                className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-full hover:bg-white/40 transition-colors flex items-center gap-2 font-bold"
            >
                <i className={`fas fa-arrow-${isAr ? 'right' : 'left'}`}></i> {isAr ? 'العودة للمقالات' : 'Back to Articles'}
            </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-30">
        <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="flex items-center space-x-4 space-x-reverse text-sm text-gray-500 mb-6">
                <span className="bg-tertiary text-white px-3 py-1 rounded-full text-xs font-bold">
                    {isAr ? 'مدونة الاستقدام' : 'Recruitment Blog'}
                </span>
                <span>•</span>
                <time dateTime={article.created_at}>
                    {new Date(article.created_at).toLocaleDateString(lang === 'ar' ? 'ar-SA' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-8 leading-tight">
                {isAr ? article.title_ar : article.title_en}
            </h1>

            <div className="prose prose-lg prose-slate max-w-none text-gray-600 leading-8">
                {/* SEO: Rendering HTML content. In a real app we'd sanitize this. */}
                <div dangerouslySetInnerHTML={{ __html: isAr ? article.content_ar : article.content_en }} />
                
                <p className="mt-6 bg-light p-6 rounded-lg border-r-4 border-tertiary italic text-gray-700">
                    {/* Professional disclaimer/CTA */}
                    {isAr 
                     ? 'للمزيد من المعلومات حول هذا الموضوع، يمكنك التواصل مع فريق خدمة العملاء لدينا. نحن هنا لمساعدتك في اتخاذ القرارات الصحيحة بشأن العمالة المنزلية.'
                     : 'For more information on this topic, feel free to contact our customer support team. We are here to help you make the right decisions regarding domestic workers.'}
                </p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                    <i className="fas fa-share-alt text-tertiary"></i>
                    {isAr ? 'شارك هذا المقال' : 'Share this Article'}
                </h3>
                
                <div className="flex flex-wrap gap-4">
                    {/* Facebook Button */}
                    <button 
                        onClick={() => handleShare('facebook')}
                        className="group flex items-center gap-3 px-6 py-3 rounded-full bg-[#1877F2] text-white font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30"
                    >
                        <i className="fab fa-facebook-f text-xl group-hover:scale-110 transition-transform"></i>
                        <span>Facebook</span>
                    </button>

                    {/* Twitter Button */}
                    <button 
                        onClick={() => handleShare('twitter')}
                        className="group flex items-center gap-3 px-6 py-3 rounded-full bg-[#1DA1F2] text-white font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/30"
                    >
                        <i className="fab fa-twitter text-xl group-hover:scale-110 transition-transform"></i>
                        <span>Twitter</span>
                    </button>

                    {/* WhatsApp Button */}
                    <button 
                        onClick={() => handleShare('whatsapp')}
                        className="group flex items-center gap-3 px-6 py-3 rounded-full bg-[#25D366] text-white font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/30"
                    >
                        <i className="fab fa-whatsapp text-xl group-hover:scale-110 transition-transform"></i>
                        <span>WhatsApp</span>
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;