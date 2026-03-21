import { useEffect, useRef, useState } from 'react';

const Cursor: React.FC = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };

        checkScreen();
        window.addEventListener('resize', checkScreen);

        return () => window.removeEventListener('resize', checkScreen);
    }, []);

    useEffect(() => {
        if (!isLargeScreen) return;

        const handleMouseMove = (e: MouseEvent): void => {
            if (cursorRef.current) {
                cursorRef.current.style.left = `${e.clientX}px`;
                cursorRef.current.style.top = `${e.clientY}px`;
            }
            if (ringRef.current) {
                ringRef.current.style.left = `${e.clientX}px`;
                ringRef.current.style.top = `${e.clientY}px`;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [isLargeScreen]);

    if (!isLargeScreen) return null;

    return (
        <>
            <div className="cursor" ref={cursorRef} />
            <div className="cursor-ring" ref={ringRef} />
        </>
    );
};

export default Cursor;