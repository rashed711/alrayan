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

  return (
    <div className="bg-white min-h-screen pb-12 animate-fade-in">
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
                <span className={isAr ? "rotate-180" : ""}>&larr;</span> {isAr ? 'العودة للمقالات' : 'Back to Articles'}
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
                
                <p className="mt-6">
                    {/* Dummy extra content to make the page look full */}
                    {isAr 
                     ? 'للمزيد من المعلومات حول هذا الموضوع، يمكنك التواصل مع فريق خدمة العملاء لدينا. نحن هنا لمساعدتك في اتخاذ القرارات الصحيحة بشأن العمالة المنزلية.'
                     : 'For more information on this topic, feel free to contact our customer support team. We are here to help you make the right decisions regarding domestic workers.'}
                </p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold text-primary mb-4">{isAr ? 'شارك المقال' : 'Share Article'}</h3>
                <div className="flex space-x-4 space-x-reverse">
                    <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:opacity-80 transition">f</button>
                    <button className="w-10 h-10 rounded-full bg-sky-400 text-white flex items-center justify-center hover:opacity-80 transition">t</button>
                    <button className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center hover:opacity-80 transition">w</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;