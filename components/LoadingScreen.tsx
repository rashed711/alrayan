
import React from 'react';
import { Language } from '../types';

interface LoadingScreenProps {
    isLoading: boolean;
    lang: Language;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading, lang }) => {
    const isAr = lang === 'ar';

    return (
        <div className={`fixed inset-0 z-[1000] bg-primary flex flex-col items-center justify-center transition-opacity duration-500 ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="relative mb-4">
                {/* Spinning Rings */}
                <div className="absolute inset-0 border-4 border-tertiary/30 rounded-full animate-[spin_3s_linear_infinite]"></div>
                <div className="absolute inset-0 border-t-4 border-white rounded-full animate-[spin_1.5s_linear_infinite]"></div>
                
                {/* Logo */}
                <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full shadow-2xl relative z-10 animate-pulse">
                <span className="text-3xl font-bold text-primary">W</span>
                </div>
            </div>
            <div className="text-white text-lg font-bold tracking-widest animate-pulse">
                {isAr ? 'جاري التحميل...' : 'LOADING...'}
            </div>
        </div>
    );
};

export default LoadingScreen;
