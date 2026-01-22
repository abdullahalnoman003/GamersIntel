import React, { useState } from 'react';
import { FaChevronDown, FaGamepad, FaQuestionCircle, FaRocket, FaShieldAlt } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';
import { MdHelp } from 'react-icons/md';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqCategories = [
        {
            icon: <FaGamepad className="text-4xl text-purple-400" />,
            category: "Getting Started",
            questions: [
                {
                    question: "What is GamersIntel?",
                    answer: "GamersIntel is your personal gaming tracker - like MyAnimeList but for video games. Track what you've played, rate your experiences, write reviews, and never forget a gaming moment again. It's your gaming memory system."
                },
                {
                    question: "Is GamersIntel really free?",
                    answer: "Yes! GamersIntel is 100% free and will always be free. No hidden costs, no premium tiers, no credit card required. We built this for gamers, by gamers."
                },
                {
                    question: "How do I create an account?",
                    answer: "Click the 'Get Started' or 'Sign Up' button, fill in your email and password, and you're in! You can also sign up instantly using your Google account. It takes less than 2 minutes."
                },
                {
                    question: "Do I need to download anything?",
                    answer: "Nope! GamersIntel is a web application that works directly in your browser. Access it from any device - desktop, laptop, tablet, or phone. No downloads, no installations."
                }
            ]
        },
        {
            icon: <FaRocket className="text-4xl text-cyan-400" />,
            category: "Using GamersIntel",
            questions: [
                {
                    question: "How do I add games to my library?",
                    answer: "Use the search bar to find games, then click 'Add to Library'. Choose a status (Playing, Completed, Plan to Play, etc.), add your rating, playtime, and personal notes. It's that simple!"
                },
                {
                    question: "Can I track games from all platforms?",
                    answer: "Absolutely! Track games from PC, PlayStation, Xbox, Nintendo Switch, mobile, VR, retro consoles - any gaming platform. Our database includes 10,000+ games across all platforms."
                },
                {
                    question: "How do I rate and review games?",
                    answer: "Once you add a game to your library, you can give it a score (1-10), write a review, and share your thoughts. Your reviews help other gamers discover great titles!"
                },
                {
                    question: "Can I track my playtime and progress?",
                    answer: "Yes! For each game, you can log hours played, completion percentage, achievements unlocked, and track your progress over time. View your stats on your personal dashboard."
                },
                {
                    question: "What are custom collections?",
                    answer: "Create custom lists to organize games however you want - by genre, mood, platform, year, or anything else. Examples: 'Cozy Games', 'Backlog Priority', 'Multiplayer with Friends', etc."
                }
            ]
        },
        {
            icon: <FaShieldAlt className="text-4xl text-pink-400" />,
            category: "Privacy & Security",
            questions: [
                {
                    question: "Is my data secure?",
                    answer: "Yes! We use industry-standard encryption (HTTPS) for all data transmission and secure Firebase authentication. Your password is encrypted and never stored in plain text."
                },
                {
                    question: "Can I make my profile private?",
                    answer: "Absolutely! You have full control over your privacy settings. Choose to make your library public, friends-only, or completely private. It's your gaming data, your choice."
                },
                {
                    question: "Do you sell my data?",
                    answer: "Never. We will NEVER sell your personal information or gaming data to third parties. Your data is yours, period. Read our Privacy Policy for full details."
                },
                {
                    question: "Can I delete my account?",
                    answer: "Yes, you can delete your account anytime from your dashboard settings. This action is permanent and will remove all your data from our servers."
                }
            ]
        },
        {
            icon: <MdHelp className="text-4xl text-green-400" />,
            category: "Features & Support",
            questions: [
                {
                    question: "What features are coming soon?",
                    answer: "We're constantly improving! Upcoming features include: social following/friends system, game recommendations based on your taste, achievement tracking, gaming streaks, mobile app, and more. Join our Discord to vote on features!"
                },
                {
                    question: "Can I import my data from other platforms?",
                    answer: "This feature is in development! We're working on import tools for Steam, PlayStation, Xbox, and other platforms. Stay tuned!"
                },
                {
                    question: "I found a bug. How do I report it?",
                    answer: "Thank you for helping us improve! Report bugs through our Contact page or Discord server. Include details about what happened, what you expected, and your browser/device info."
                },
                {
                    question: "How can I request a new feature?",
                    answer: "We love feature suggestions! Share your ideas on our Discord server or through the Contact page. The most requested features get prioritized in our development roadmap."
                },
                {
                    question: "What if a game isn't in the database?",
                    answer: "We're constantly adding games! If you can't find a game, let us know through the Contact page and we'll add it to our database. We prioritize requests from our users."
                }
            ]
        }
    ];

    let globalIndex = 0;

    return (
        <div className="min-h-screen bg-black pt-20">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `
                        linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px'
                }}></div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-6 py-2 bg-purple-600/20 border border-purple-500/40 rounded-full mb-6">
                            <HiLightningBolt className="text-yellow-400" />
                            <span className="text-purple-300 font-semibold text-sm uppercase tracking-wider">Help Center</span>
                        </div>
                        
                        <h1 className="poetsen-one-regular text-5xl md:text-7xl text-white mb-6">
                            FREQUENTLY{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                ASKED QUESTIONS
                            </span>
                        </h1>
                        
                        <p className="galdeano-regular text-xl text-gray-300 max-w-3xl mx-auto">
                            Got questions? We've got answers! Find everything you need to know about GamersIntel.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="py-12 bg-black">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        {faqCategories.map((cat, index) => (
                            <a
                                key={index}
                                href={`#${cat.category.toLowerCase().replace(/\s+/g, '-')}`}
                                className="flex items-center gap-2 px-6 py-3 bg-purple-500/10 border border-purple-500/30 rounded-lg hover:bg-purple-500/20 hover:scale-105 hover:border-purple-500/50 transition-all duration-300 text-purple-300 hover:text-white"
                            >
                                <span className="text-xl">{cat.icon}</span>
                                <span className="font-semibold">{cat.category}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Categories */}
            <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                    {faqCategories.map((category, catIndex) => (
                        <div key={catIndex} id={category.category.toLowerCase().replace(/\s+/g, '-')}>
                            {/* Category Header */}
                            <div className="flex items-center gap-4 mb-8">
                                {category.icon}
                                <h2 className="poetsen-one-regular text-4xl text-white">{category.category}</h2>
                            </div>

                            {/* FAQ Items */}
                            <div className="space-y-4">
                                {category.questions.map((faq, qIndex) => {
                                    const currentIndex = globalIndex++;
                                    const isOpen = openIndex === currentIndex;
                                    
                                    return (
                                        <div 
                                            key={qIndex}
                                            className="bg-gray-900/50 border border-purple-500/30 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300"
                                        >
                                            <button
                                                onClick={() => toggleFAQ(currentIndex)}
                                                className="w-full flex items-center justify-between p-6 text-left hover:bg-purple-500/5 transition-colors duration-300"
                                            >
                                                <span className="text-lg font-bold text-white pr-4">{faq.question}</span>
                                                <FaChevronDown 
                                                    className={`text-purple-400 text-xl flex-shrink-0 transition-transform duration-300 ${
                                                        isOpen ? 'rotate-180' : ''
                                                    }`}
                                                />
                                            </button>
                                            
                                            <div 
                                                className={`overflow-hidden transition-all duration-300 ${
                                                    isOpen ? 'max-h-96' : 'max-h-0'
                                                }`}
                                            >
                                                <div className="px-6 pb-6 border-t border-purple-500/20">
                                                    <p className="text-gray-400 leading-relaxed pt-4">{faq.answer}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Still Have Questions */}
            <section className="py-20 bg-black">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-gray-900/90 to-black/90 border border-purple-500/50 rounded-2xl p-12 text-center hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
                        <FaQuestionCircle className="text-6xl text-purple-400 mx-auto mb-6" />
                        <h2 className="poetsen-one-regular text-4xl text-white mb-4">
                            STILL HAVE{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                QUESTIONS?
                            </span>
                        </h2>
                        <p className="galdeano-regular text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Can't find what you're looking for? We're here to help! Reach out through our contact page or join our Discord community.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href="/contact" 
                                className="inline-block px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50 text-white font-bold uppercase tracking-wider transition-all duration-300"
                            >
                                Contact Us
                            </a>
                            <a 
                                href="https://discord.gg/gamersintel" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-10 py-4 bg-transparent border-2 border-purple-500 rounded-lg hover:bg-purple-500/20 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 text-purple-300 hover:text-white font-bold uppercase tracking-wider transition-all duration-300"
                            >
                                Join Discord
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;