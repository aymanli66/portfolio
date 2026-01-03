
import React, { useEffect } from 'react';
import { Footer } from '../../components/Footer';
import ParallaxImage from '../../components/ParallaxImage';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
    useEffect(() => {
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
        <div className="bg-black min-h-screen text-white selection:bg-white selection:text-black">

            {/* 1. INTRO SECTION */}
            <section className="pt-48 pb-24 px-8 md:px-16 max-w-[1800px] mx-auto min-h-screen flex flex-col justify-center">
                <div className="flex flex-col md:flex-row items-center gap-20">
                    <div className="w-full md:w-5/12 reveal">
                        <div className="aspect-[3/4] overflow-hidden relative grayscale contrast-125">
                            <ParallaxImage
                                src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=2787&auto=format&fit=crop"
                                alt="Ayman Limouri Portrait"
                                speed={0.1}
                                className="h-[120%]"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-6/12 space-y-8 reveal transition-delay-200">
                        <span className="text-xs tracking-[0.4em] uppercase text-gray-500">The Photographer</span>
                        <h1 className="text-5xl md:text-7xl font-serif leading-[1.1]">
                            Silent observer <br />
                            of the <span className="italic text-white/50">fleeting</span> moment.
                        </h1>
                        <p className="text-gray-400 font-light leading-relaxed max-w-lg text-lg">
                            I am Ayman Limouri, a photographer based in the UAE. My work creates a dialogue between light, architecture, and the human form, translating raw reality into a refined visual language for brands who seek depth over noise.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. ARTISTIC VISION */}
            <section className="py-32 px-8 md:px-16 border-t border-white/5">
                <div className="max-w-[1800px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                        <div className="reveal">
                            <span className="text-xs tracking-[0.4em] uppercase text-gray-500 block mb-8">Direction Artistique</span>
                            <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
                                Stripping away the <br /> superfluous.
                            </h2>
                        </div>
                        <div className="space-y-12 reveal transition-delay-200">
                            <div className="space-y-4">
                                <h3 className="text-xl font-serif">Visual Identity</h3>
                                <p className="text-gray-400 font-light leading-relaxed">
                                    My approach is rooted in minimalism and consistency. I build visual identities that breathe—images that are not just seen, but felt. Every frame is a study in composition, balance, and the deliberate use of negative space.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-serif">Consistency</h3>
                                <p className="text-gray-400 font-light leading-relaxed">
                                    True luxury lies in restraint. I maintain a cohesive aesthetic across every project, ensuring that your brand's narrative is told with a singular, sophisticated voice that cuts through the clutter.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. EXPERIENCE & COLLABORATIONS */}
            <section className="py-32 px-8 md:px-16 bg-white/5">
                <div className="max-w-[1800px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-24 reveal">
                        <h2 className="text-4xl md:text-6xl font-serif">Selected <br /> Collaborations</h2>
                        <p className="text-gray-400 mt-8 md:mt-0 max-w-md font-light">
                            A curated list of partners who value craft, precision, and the art of storytelling.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 reveal transition-delay-200">
                        <div className="space-y-8">
                            <span className="text-xs tracking-[0.4em] uppercase text-white/40 border-b border-white/10 pb-4 block">Gastronomy</span>
                            <ul className="space-y-4 font-serif text-2xl text-gray-300">
                                <li className="hover:text-white transition-colors cursor-default">Zuma Dubai</li>
                                <li className="hover:text-white transition-colors cursor-default">LPM Restaurant</li>
                                <li className="hover:text-white transition-colors cursor-default">Galaxy Bar</li>
                                <li className="hover:text-white transition-colors cursor-default">The Arts Club</li>
                            </ul>
                        </div>
                        <div className="space-y-8">
                            <span className="text-xs tracking-[0.4em] uppercase text-white/40 border-b border-white/10 pb-4 block">Brands</span>
                            <ul className="space-y-4 font-serif text-2xl text-gray-300">
                                <li className="hover:text-white transition-colors cursor-default">Cartier</li>
                                <li className="hover:text-white transition-colors cursor-default">Aesop</li>
                                <li className="hover:text-white transition-colors cursor-default">Four Seasons</li>
                                <li className="hover:text-white transition-colors cursor-default">Aman Resorts</li>
                            </ul>
                        </div>
                        <div className="space-y-8">
                            <span className="text-xs tracking-[0.4em] uppercase text-white/40 border-b border-white/10 pb-4 block">Editorial</span>
                            <ul className="space-y-4 font-serif text-2xl text-gray-300">
                                <li className="hover:text-white transition-colors cursor-default">Vogue Arabia</li>
                                <li className="hover:text-white transition-colors cursor-default">GQ Middle East</li>
                                <li className="hover:text-white transition-colors cursor-default">Harper's Bazaar</li>
                                <li className="hover:text-white transition-colors cursor-default">Architectural Digest</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. PHILOSOPHY / APPROACH */}
            <section className="py-32 px-8 md:px-16">
                <div className="max-w-4xl mx-auto text-center reveal">
                    <span className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-6 block">Philosophy</span>
                    <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-12">
                        "I do not take photographs. <br /> I construct moments of silence."
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                        <p className="text-gray-400 font-light leading-relaxed">
                            Collaboration is at the heart of my process. I listen deeply to the brand's essence before lifting the camera. It is not about capturing what is there, but revealing what <em>should</em> be seen.
                        </p>
                        <p className="text-gray-400 font-light leading-relaxed">
                            We work together to define a visual language that elevates your identity. Whether it's a dish, a space, or a face, I seek the angle of most resistance—the one that yields the most timeless result.
                        </p>
                    </div>
                </div>
            </section>

            {/* 5. CTA */}
            <div className="py-32 flex justify-center border-t border-white/5 reveal">
                <Link to="/contact" className="group flex flex-col items-center space-y-6">
                    <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
                        <ArrowRight className="w-8 h-8 text-white group-hover:text-black transition-colors" />
                    </div>
                    <span className="text-3xl font-serif group-hover:text-white/80 transition-colors">Start a Project</span>
                </Link>
            </div>

            <Footer />
        </div>
    );
};

export default About;
