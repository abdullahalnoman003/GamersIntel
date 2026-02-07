import React, { useEffect } from 'react';
import { FaGamepad, FaHeart, FaUsers, FaRocket } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';

const About = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
}, []);
    const values = [
        {
            icon: <FaGamepad className="text-5xl text-primary" />,
            title: "For Gamers, By Gamers",
            description: "We're gamers ourselves who got tired of forgetting what we played and thought about games. GamersIntel was born from our own need."
        },
        {
            icon: <FaHeart className="text-5xl text-accent" />,
            title: "Simple & Beautiful",
            description: "No complicated interfaces or cluttered dashboards. Just a clean, beautiful way to track your gaming journey."
        },
        {
            icon: <FaUsers className="text-5xl text-secondary" />,
            title: "Community First",
            description: "Built with feedback from thousands of gamers. Your gaming memory system, shaped by the community."
        },
        {
            icon: <FaRocket className="text-5xl text-success" />,
            title: "Always Improving",
            description: "We're constantly adding features and improvements based on what gamers actually want and need."
        }
    ];

    return (
        <div className="min-h-screen bg-base-100 pt-20">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-b from-base-100 via-base-200 to-base-100 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `
                        linear-gradient(oklch(var(--p) / 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, oklch(var(--p) / 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px'
                }}></div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-6 py-2 bg-primary/20 border border-primary/40 rounded-full mb-6">
                            <HiLightningBolt className="text-warning" />
                            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
                        </div>
                        
                        <h1 className="poetsen-one-regular text-5xl md:text-7xl text-base-content mb-6">
                            YOUR GAMING{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                                MEMORY SYSTEM
                            </span>
                        </h1>
                        
                        <p className="galdeano-regular text-xl text-base-content/70 max-w-3xl mx-auto">
                            GamersIntel is your personal gaming tracker - like MyAnimeList, but for video games. 
                            Track what you've played, rate your experiences, and never forget a gaming moment again.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 bg-base-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-base-200/90 to-base-100/90 border border-primary/30 rounded-2xl p-12 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300">
                        <h2 className="poetsen-one-regular text-4xl text-base-content mb-6 text-center">
                            OUR{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
                                MISSION
                            </span>
                        </h2>
                        <p className="galdeano-regular text-lg text-base-content/70 leading-relaxed text-center max-w-3xl mx-auto mb-6">
                            Gaming is an incredible journey full of memorable experiences, emotional stories, and amazing adventures. 
                            But unlike movies or books, there's no easy way to keep track of what you've played and how you felt about it.
                        </p>
                        <p className="galdeano-regular text-lg text-base-content/70 leading-relaxed text-center max-w-3xl mx-auto">
                            GamersIntel solves this problem. We give gamers a simple, beautiful platform to track their gaming library, 
                            rate games, write reviews, and look back at their gaming journey anytime they want.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-gradient-to-b from-base-100 via-base-200 to-base-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="poetsen-one-regular text-4xl md:text-5xl text-base-content text-center mb-16">
                        WHAT WE{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                            BELIEVE IN
                        </span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {values.map((value, index) => (
                            <div 
                                key={index}
                                className="bg-base-200/50 border border-primary/30 rounded-xl p-8 hover:border-primary/60 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
                            >
                                <div className="mb-6">{value.icon}</div>
                                <h3 className="text-2xl font-bold text-base-content mb-3">{value.title}</h3>
                                <p className="text-base-content/60 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-base-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="poetsen-one-regular text-4xl text-base-content text-center mb-12">
                        BY THE{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            NUMBERS
                        </span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center bg-primary/10 border border-primary/20 rounded-xl p-8 hover:bg-primary/20 hover:scale-110 hover:border-primary/40 transition-all duration-300">
                            <div className="text-5xl font-black text-primary mb-2">10K+</div>
                            <div className="text-base-content/60">Games in Database</div>
                        </div>
                        <div className="text-center bg-accent/10 border border-accent/20 rounded-xl p-8 hover:bg-accent/20 hover:scale-110 hover:border-accent/40 transition-all duration-300">
                            <div className="text-5xl font-black text-accent mb-2">5K+</div>
                            <div className="text-base-content/60">Active Gamers</div>
                        </div>
                        <div className="text-center bg-secondary/10 border border-secondary/20 rounded-xl p-8 hover:bg-secondary/20 hover:scale-110 hover:border-secondary/40 transition-all duration-300">
                            <div className="text-5xl font-black text-secondary mb-2">50K+</div>
                            <div className="text-base-content/60">Reviews Written</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-b from-base-100 to-base-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="poetsen-one-regular text-4xl md:text-5xl text-base-content mb-6">
                        JOIN OUR{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                            COMMUNITY
                        </span>
                    </h2>
                    <p className="galdeano-regular text-xl text-base-content/70 mb-8">
                        Start tracking your gaming journey today. It's free, always will be.
                    </p>
                    <a 
                        href="/registration" 
                        className="inline-block px-10 py-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 rounded-lg hover:scale-105 hover:shadow-xl hover:shadow-primary/50 text-base-content font-bold uppercase tracking-wider transition-all duration-300"
                    >
                        Get Started Free
                    </a>
                </div>
            </section>
        </div>
    );
};

export default About;
