
import React, { useEffect } from 'react';
import Hero from '../../components/Hero';
import { Collaborations } from '../../components/Collaborations';
import { Work } from '../../components/Work';
import { Value } from '../../components/Value';
import { Testimonials } from '../../components/Testimonials';
import { Process } from '../../components/Process';
import { FinalCTA } from '../../components/FinalCTA';
import { Footer } from '../../components/Footer';

const Home: React.FC = () => {
    useEffect(() => {
        // Re-run reveal observation when component mounts
        const reveals = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            },
            { threshold: 0.1 }
        );
        reveals.forEach((reveal) => observer.observe(reveal));
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Hero />

            <div className="reveal">
                <Collaborations />
            </div>

            <div className="reveal">
                <Work />
            </div>

            <div className="reveal">
                <Value />
            </div>

            <div className="reveal">
                <Testimonials />
            </div>

            <div className="reveal">
                <Process />
            </div>

            <div className="reveal">
                <FinalCTA />
            </div>

            <Footer />
        </>
    );
};

export default Home;
