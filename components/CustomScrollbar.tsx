
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const CustomScrollbar: React.FC = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const [thumbHeight, setThumbHeight] = useState(100);

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;

        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;

            const scrollableHeight = documentHeight - windowHeight;
            const currentScroll = (scrollTop / scrollableHeight) * 100;

            setScrollPercentage(currentScroll);
            setIsScrolling(true);

            // Calculate thumb height relative to viewport
            const calculatedThumbHeight = (windowHeight / documentHeight) * windowHeight;
            setThumbHeight(Math.max(calculatedThumbHeight, 40));

            clearTimeout(timeout);
            timeout = setTimeout(() => {
                setIsScrolling(false);
            }, 1500);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        handleScroll(); // Initial call

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    const isPastHero = window.scrollY > window.innerHeight * 0.8;

    return (
        <div className="fixed right-2 top-0 bottom-0 w-2.5 z-[9999] py-4 pointer-events-none">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: !isPastHero ? 0 : (isScrolling ? 0.8 : 0.2)
                }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full"
            >
                <motion.div
                    className="absolute bg-white/30 backdrop-blur-md border border-white/20 rounded-full"
                    animate={{
                        width: isScrolling ? '100%' : '60%',
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                        height: `${thumbHeight}px`,
                        top: `${(scrollPercentage * (window.innerHeight - thumbHeight - 32)) / 100}px`,
                        right: 0,
                    }}
                />
            </motion.div>
        </div>
    );
};

export default CustomScrollbar;
