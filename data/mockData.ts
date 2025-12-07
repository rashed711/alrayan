
import { Service, Article, Settings } from '../types';

export const mockSettings: Settings = {
  site_name_ar: "مكتب الريان للاستقدام",
  site_name_en: "Al-Rayan Recruitment",
  phone: "0500000000",
  email: "info@Al-Rayan.net"
};

export const mockServices: Service[] = [
  { 
    id: 1, 
    title_ar: "نقل كفالة خادمات", 
    title_en: "Maid Sponsorship Transfer",
    description_ar: "خدمة سريعة وموثوقة لنقل كفالة العمالة المنزلية وفق الأنظمة.",
    description_en: "Fast and reliable maid sponsorship transfer service according to regulations.",
    long_description_ar: "نقدم خدمة نقل الكفالة المتكاملة التي تضمن لك إنهاء جميع الإجراءات القانونية والإدارية في وقت قياسي. فريقنا المختص يتولى مراجعة كافة الأوراق، التأكد من خلو السجل من المخالفات، وإتمام النقل عبر منصة أبشر ومساند بكل احترافية.",
    long_description_en: "We offer a comprehensive sponsorship transfer service ensuring all legal and administrative procedures are completed in record time. Our dedicated team handles all paperwork, checks for violations, and completes the transfer via Absher and Musaned platforms professionally.",
    features_ar: ["إنهاء الإجراءات في 24 ساعة", "فحص طبي شامل", "ضمان التجربة لمدة 3 أشهر", "عقود موثقة إلكترونياً"],
    features_en: ["Procedures completed in 24h", "Comprehensive medical check", "3-month probation guarantee", "Electronically documented contracts"]
  },
  { 
    id: 2, 
    title_ar: "استقدام طباخات", 
    title_en: "Cooks Recruitment",
    description_ar: "طباخات ماهرات من مختلف الجنسيات لتقديم أشهى الأطباق.",
    description_en: "Skilled cooks from various nationalities to serve delicious dishes.",
    long_description_ar: "استمتع بأشهى المأكولات مع خدمة استقدام الطباخات المحترفات. نوفر لك طباخات ذوات خبرة عالية في المطبخ الشرقي والغربي، مدربات على أعلى معايير النظافة وإدارة المطبخ.",
    long_description_en: "Enjoy delicious meals with our professional cook recruitment service. We provide cooks highly experienced in Oriental and Western cuisines, trained in top hygiene standards and kitchen management.",
    features_ar: ["خبرة لا تقل عن 5 سنوات", "إتقان المأكولات العربية", "تدريب على الإتيكيت", "شهادات صحية معتمدة"],
    features_en: ["Minimum 5 years experience", "Mastery of Arabic cuisine", "Etiquette training", "Certified health certificates"]
  },
  { 
    id: 3, 
    title_ar: "مربيات أطفال", 
    title_en: "Professional Nannies",
    description_ar: "رعاية حنونة واحترافية لأطفالكم مع مربيات مؤهلات.",
    description_en: "Compassionate and professional care for your children with qualified nannies.",
    long_description_ar: "أطفالكم في أيدٍ أمينة. نختار بعناية مربيات أطفال حاصلات على شهادات في التربية أو التمريض، مع خبرة في التعامل مع مختلف الأعمار، لضمان بيئة آمنة ومحفزة لنمو طفلك.",
    long_description_en: "Your children are in safe hands. We carefully select nannies with degrees in education or nursing, experienced in dealing with various ages, ensuring a safe and stimulating environment for your child's growth.",
    features_ar: ["شهادات في التمريض أو التربية", "إجادة اللغة الإنجليزية", "خبرة في التعامل مع الرضع", "برامج تعليمية ترفيهية"],
    features_en: ["Nursing or Education degrees", "English proficiency", "Infant care experience", "Educational entertainment programs"]
  },
  { 
    id: 4, 
    title_ar: "رعاية كبار السن", 
    title_en: "Elderly Care",
    description_ar: "رعاية صحية ونفسية متكاملة لكبار السن في منازلهم.",
    description_en: "Integrated health and psychological care for the elderly at home.",
    long_description_ar: "نقدر أهمية رعاية كبار السن، ولذلك نوفر ممرضات ومساعدات شخصيات مدربات على التعامل مع الاحتياجات الخاصة لكبار السن، ومراقبة الأدوية، والمساعدة في الحركة، مع توفير الدعم النفسي.",
    long_description_en: "We value elderly care, providing nurses and personal assistants trained to handle special needs, medication monitoring, mobility assistance, along with psychological support.",
    features_ar: ["خبرة تمريضية", "صبر وحسن تعامل", "مراقبة العلامات الحيوية", "مساعدة في النظافة الشخصية"],
    features_en: ["Nursing experience", "Patience and good conduct", "Vital signs monitoring", "Personal hygiene assistance"]
  },
  { 
    id: 5, 
    title_ar: "سائقين خاصين", 
    title_en: "Private Drivers",
    description_ar: "سائقين محترفين برخص قيادة سارية وخبرة بالطرق.",
    description_en: "Professional drivers with valid licenses and road experience.",
    long_description_ar: "تنقل براحة وأمان مع سائقينا المحترفين. نضمن لك سائقين يحملون رخص قيادة سارية، على دراية تامة بقوانين المرور وطرق المملكة، ويتميزون بالأمانة وحسن المظهر.",
    long_description_en: "Commute with comfort and safety with our professional drivers. We guarantee drivers with valid licenses, fully aware of traffic laws and KSA roads, characterized by honesty and good appearance.",
    features_ar: ["رخصة قيادة سارية", "سجل خالي من الحوادث", "إلمام بتطبيقات الخرائط", "المحافظة على نظافة السيارة"],
    features_en: ["Valid driving license", "Accident-free record", "Maps app proficiency", "Car cleanliness maintenance"]
  },
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
