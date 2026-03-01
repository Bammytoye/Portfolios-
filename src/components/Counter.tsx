import React, { useState, useEffect, useRef } from 'react';

interface CounterProps {
    end: number;
    suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ end, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let start = 0;
                    const step = end / 60;
                    const interval = setInterval(() => {
                        start += step;
                        if (start >= end) {
                            setCount(end);
                            clearInterval(interval);
                        } else {
                            setCount(Math.floor(start));
                        }
                    }, 20);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [end]);

    return (
        <span ref={ref}>
            {count}
            {suffix}
        </span>
    );
};

export default Counter;