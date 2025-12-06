import { Service, Article, Settings } from '../types';

export const mockSettings: Settings = {
  site_name_ar: "مكتب الريان للاستقدام",
  site_name_en: "Al-Rayan Recruitment",
  phone: "0500000000",
  email: "info@Al-Rayan.net"
};

export const mockServices: Service[] = [
  { id: 1, title_ar: "نقل كفالة خادمات", title_en: "Maid Sponsorship Transfer" },
  { id: 2, title_ar: "استقدام طباخات", title_en: "Cooks Recruitment" },
  { id: 3, title_ar: "مربيات أطفال", title_en: "Professional Nannies" },
  { id: 4, title_ar: "رعاية كبار السن", title_en: "Elderly Care" },
  { id: 5, title_ar: "سائقين خاصين", title_en: "Private Drivers" },
];

export const mockArticles: Article[] = [
  { 
    id: 1, 
    title_ar: "خطوات نقل الكفالة إلكترونيًا في السعودية 2025", 
    title_en: "Steps for Online Sponsorship Transfer in Saudi Arabia 2025",
    content_ar: "<p>تعتبر منصة أبشر من أهم المنصات الحكومية. لنقل الكفالة، يجب أولاً موافقة الكفيل الحالي، ثم تقديم الطلب عبر أبشر أفراد...</p>",
    content_en: "<p>Absher platform is vital. For sponsorship transfer, first obtain current sponsor consent, then apply via Absher Individuals...</p>",
    created_at: "2025-01-15T10:00:00Z"
  },
  { 
    id: 2, 
    title_ar: "كيف تختار العاملة المنزلية المناسبة لأسرتك؟", 
    title_en: "How to Choose the Right Domestic Worker for Your Family?",
    content_ar: "<p>تحديد الاحتياجات هو الخطوة الأولى. هل تحتاج لرعاية أطفال أم طبخ؟ راجع الخبرات السابقة بدقة...</p>",
    content_en: "<p>Defining needs is step one. Do you need childcare or cooking? Review past experiences carefully...</p>",
    created_at: "2025-02-01T14:30:00Z"
  },
  { 
    id: 3, 
    title_ar: "حقوق وواجبات العمالة المنزلية: دليل شامل", 
    title_en: "Rights and Duties of Domestic Workers: A Comprehensive Guide",
    content_ar: "<p>تنص اللوائح السعودية على دفع الرواتب في مواعيدها، وتوفير سكن لائق، ومنح يوم راحة أسبوعي...</p>",
    content_en: "<p>Saudi regulations mandate timely salary payments, decent accommodation, and a weekly day off...</p>",
    created_at: "2025-02-10T09:15:00Z"
  },
  { 
    id: 4, 
    title_ar: "أفضل جنسيات العمالة المنزلية المتاحة حالياً", 
    title_en: "Best Domestic Worker Nationalities Available Now",
    content_ar: "<p>تختلف الجنسيات حسب السرعة في الوصول والتدريب. الفلبين تتميز باللغة، بينما دول أخرى تتميز بالسرعة...</p>",
    content_en: "<p>Nationalities vary by arrival speed and training. Philippines is known for language, while others for speed...</p>",
    created_at: "2025-02-20T11:45:00Z"
  },
];
