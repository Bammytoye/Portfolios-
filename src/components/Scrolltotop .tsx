import React, { useState, useEffect } from 'react';

const ScrollToTop: React.FC = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 300);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToTop = (): void => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            title="Back to top"
            className={`
                fixed bottom-8 right-8 z-50
                w-11 h-11 rounded-full
                flex items-center justify-center
                border border-[rgba(0,255,224,0.35)]
                bg-[rgba(3,7,18,0.85)] backdrop-blur-md
                text-[var(--accent)]
                shadow-[0_0_16px_rgba(0,255,224,0.15)]
                cursor-pointer
                transition-all duration-300 ease-in-out
                hover:border-[rgba(0,255,224,0.7)]
                hover:shadow-[0_0_24px_rgba(0,255,224,0.35)]
                hover:-translate-y-0.5
                ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}
            `}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <polyline points="18 15 12 9 6 15" />
            </svg>
        </button>
    );
};

export default ScrollToTop;