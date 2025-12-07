
/**
 * Centralized logic to get service images.
 * This ensures ServiceCard and ServiceDetail always show the same image.
 */
export const getServiceImage = (id: number): string => {
    switch(id) {
      case 1: return "https://cdn.dubaiclean.com/uploads/2025/01/can-i-hire-a-maid-without-agency-in-dubai-3.webp"; // Maid
      case 2: return "https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80&w=1200"; // Cook
      case 3: return "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=1200"; // Nanny
      case 4: return "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&q=80&w=1200"; // Elderly
      case 5: return "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1200"; // Driver
      default: return "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200"; // Generic
    }
};

/**
 * Helper to clean phone numbers for WhatsApp links
 */
export const cleanPhoneNumber = (phone: string): string => {
    let clean = phone.replace(/[^\d]/g, '');
    if (clean.startsWith('0')) {
        clean = '966' + clean.substring(1);
    }
    return clean;
};
