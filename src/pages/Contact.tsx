import React, { useEffect } from 'react';
import { Footer } from '../../components/Footer';

const Contact: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-black min-h-screen text-white selection:bg-white selection:text-black">

            <div className="pt-32 md:pt-48 pb-20 px-6 md:px-12 max-w-[1800px] mx-auto">
                {/* Intro */}
                <div className="mb-24 md:mb-32">
                    <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl mb-8 leading-[1.1]">
                        Let’s create<br />something refined.
                    </h1>
                    <p className="text-neutral-400 text-sm md:text-base tracking-wide max-w-md font-light">
                        We are always looking for new challenges and collaborations. Tell us about your project.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-20 lg:gap-40">
                    {/* Contact Form */}
                    <div className="flex-1">
                        <form className="space-y-12" onSubmit={(e) => {
                            e.preventDefault();
                            alert("Thank you for your inquiry. We will be in touch shortly.");
                            // ideally send data to backend here
                        }}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-4 group">
                                    <label htmlFor="name" className="text-xs uppercase tracking-widest text-neutral-500 group-focus-within:text-white transition-colors duration-300">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        autoComplete="name"
                                        className="w-full bg-transparent border-b border-white/20 pb-4 text-lg focus:outline-none focus:border-white transition-all duration-300 placeholder:text-neutral-800 focus:placeholder:text-neutral-700"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div className="space-y-4 group">
                                    <label htmlFor="email" className="text-xs uppercase tracking-widest text-neutral-500 group-focus-within:text-white transition-colors duration-300">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        autoComplete="email"
                                        className="w-full bg-transparent border-b border-white/20 pb-4 text-lg focus:outline-none focus:border-white transition-all duration-300 placeholder:text-neutral-800 focus:placeholder:text-neutral-700"
                                        placeholder="Your email"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4 group">
                                <label htmlFor="company" className="text-xs uppercase tracking-widest text-neutral-500 group-focus-within:text-white transition-colors duration-300">Company / Brand</label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    autoComplete="organization"
                                    className="w-full bg-transparent border-b border-white/20 pb-4 text-lg focus:outline-none focus:border-white transition-all duration-300 placeholder:text-neutral-800 focus:placeholder:text-neutral-700"
                                    placeholder="Brand name"
                                />
                            </div>

                            <div className="space-y-4 group">
                                <label htmlFor="project" className="text-xs uppercase tracking-widest text-neutral-500 group-focus-within:text-white transition-colors duration-300">Project Type</label>
                                <input
                                    type="text"
                                    id="project"
                                    name="project"
                                    required
                                    className="w-full bg-transparent border-b border-white/20 pb-4 text-lg focus:outline-none focus:border-white transition-all duration-300 placeholder:text-neutral-800 focus:placeholder:text-neutral-700"
                                    placeholder="e.g. Lookbook, Campaign, Editorial"
                                />
                            </div>

                            <div className="space-y-4 group">
                                <label htmlFor="message" className="text-xs uppercase tracking-widest text-neutral-500 group-focus-within:text-white transition-colors duration-300">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    className="w-full bg-transparent border-b border-white/20 pb-4 text-lg focus:outline-none focus:border-white transition-all duration-300 resize-none placeholder:text-neutral-800 focus:placeholder:text-neutral-700"
                                    placeholder="Tell us about your vision..."
                                />
                            </div>

                            <div className="pt-8 mb-20 md:mb-0">
                                <button type="submit" className="group relative text-xs uppercase tracking-[0.3em] border border-white/20 px-12 py-4 bg-transparent hover:bg-white hover:text-black transition-all duration-500 overflow-hidden">
                                    <span className="relative z-10 block transition-transform duration-500 group-hover:translate-x-1">Send Inquiry</span>
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Direct Contact Info */}
                    <div className="lg:w-1/3 space-y-16">
                        <div>
                            <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-6">Contact</h3>
                            <a href="mailto:hello@aymanlimouri.com" className="text-xl md:text-2xl font-serif hover:opacity-50 transition-opacity block mb-2">
                                hello@aymanlimouri.com
                            </a>
                            <p className="text-neutral-400 font-light">+971 50 123 4567</p>
                        </div>

                        <div>
                            <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-6">Studio</h3>
                            <p className="text-xl font-light text-neutral-300 leading-relaxed">
                                Dubai Design District<br />
                                Building 7, Office 402<br />
                                Dubai, UAE
                            </p>
                        </div>

                        <div className="pt-12 border-t border-white/10">
                            <p className="text-neutral-500 text-sm leading-relaxed font-light">
                                For urgent inquiries, please contact us directly via WhatsApp or phone. We aim to respond to all project requests within 24 hours.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Contact;
