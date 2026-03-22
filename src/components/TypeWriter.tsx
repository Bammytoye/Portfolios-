import React, { useState, useEffect } from 'react';

interface TypeWriterProps {
    words: string[];
}

const TypeWriter: React.FC<TypeWriterProps> = ({ words }) => {
    const [idx, setIdx] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const word = words[idx % words.length];

        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    if (text.length < word.length) {
                        setText(word.slice(0, text.length + 1));
                    } else {
                        setTimeout(() => setIsDeleting(true), 1200);
                    }
                } else {
                    if (text.length > 0) {
                        setText(word.slice(0, text.length - 1));
                    } else {
                        setIsDeleting(false);
                        setIdx((i) => i + 1);
                    }
                }
            },
            isDeleting ? 60 : 100
        );

        return () => clearTimeout(timeout);
    }, [text, isDeleting, idx, words]);

    return (
        <span
            className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[65px]'
            style={{ color: 'var(--accent)', fontFamily: "'Space Mono', monospace" }}
        >
            {text}
            <span style={{ animation: 'blink 1s infinite', color: 'var(--accent)' }}>|</span>
        </span>
    );
};

export default TypeWriter;