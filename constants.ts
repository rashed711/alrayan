
// This file contains all global configuration.
// Change values here to update them across the entire website instantly.

export const APP_CONFIG = {
    // Toggle this to true to immediately show a maintenance screen to users
    MAINTENANCE_MODE: false,

    // General Site Info
    siteName: {
        ar: 'مكتب الريان للاستقدام',
        en: 'Al-Rayan Recruitment'
    },
    
    // Contact Information
    contact: {
        phone: '0500000000',
        email: 'info@Al-Rayan.net',
        address: {
            ar: 'الرياض، طريق الملك فهد، العليا',
            en: 'Riyadh, King Fahd Road, Olaya'
        },
        // Coordinates for map links
        locationUrl: 'https://maps.google.com/?q=24.7136,46.6753' 
    },

    // Social Media Links
    socials: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        whatsapp: 'https://wa.me/966500000000'
    },

    // Theme Colors (matched with Tailwind config for consistency in JS logic)
    colors: {
        primary: '#0F2C59',
        secondary: '#3282B8',
        tertiary: '#00ADB5'
    }
};
