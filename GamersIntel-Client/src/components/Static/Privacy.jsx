import React from 'react';
import { FaShieldAlt, FaLock, FaUserSecret, FaDatabase } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';

const Privacy = () => {
    const sections = [
        {
            icon: <FaShieldAlt className="text-4xl text-purple-400" />,
            title: "Information We Collect",
            content: [
                {
                    subtitle: "Account Information",
                    text: "When you create an account, we collect your email address, username, and profile picture (optional). This helps us provide you with a personalized gaming tracking experience."
                },
                {
                    subtitle: "Gaming Data",
                    text: "We store the games you track, your ratings, reviews, playtime logs, and completion status. This data is yours and helps you remember your gaming journey."
                },
                {
                    subtitle: "Usage Information",
                    text: "We collect basic analytics like pages visited and features used to improve GamersIntel. No personal identifiers are shared with third parties."
                }
            ]
        },
        {
            icon: <FaLock className="text-4xl text-cyan-400" />,
            title: "How We Use Your Data",
            content: [
                {
                    subtitle: "To Provide Our Service",
                    text: "Your gaming data is used to display your library, generate statistics, and provide personalized recommendations."
                },
                {
                    subtitle: "To Improve GamersIntel",
                    text: "Anonymous usage data helps us understand which features are loved and which need improvement."
                },
                {
                    subtitle: "To Communicate",
                    text: "We may send important service updates or new feature announcements to your email. You can opt-out anytime."
                }
            ]
        },
        {
            icon: <FaUserSecret className="text-4xl text-pink-400" />,
            title: "Your Privacy Rights",
            content: [
                {
                    subtitle: "Access Your Data",
                    text: "You can view, export, or download all your gaming data at any time from your dashboard."
                },
                {
                    subtitle: "Delete Your Data",
                    text: "You have the right to delete your account and all associated data. This action is permanent and irreversible."
                },
                {
                    subtitle: "Control Your Privacy",
                    text: "Choose what information is public or private. Your gaming library can be completely private if you prefer."
                }
            ]
        },
        {
            icon: <FaDatabase className="text-4xl text-green-400" />,
            title: "Data Security",
            content: [
                {
                    subtitle: "Secure Storage",
                    text: "All data is encrypted in transit (HTTPS) and at rest. We use industry-standard security measures to protect your information."
                },
                {
                    subtitle: "No Selling Data",
                    text: "We will NEVER sell your personal information or gaming data to third parties. Your data is yours, period."
                },
                {
                    subtitle: "Third-Party Services",
                    text: "We use Firebase for authentication and image hosting services for profile pictures. These services have their own privacy policies."
                }
            ]
        }
    ];

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
                            <span className="text-purple-300 font-semibold text-sm uppercase tracking-wider">Privacy Policy</span>
                        </div>
                        
                        <h1 className="poetsen-one-regular text-5xl md:text-7xl text-white mb-6">
                            YOUR{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                PRIVACY MATTERS
                            </span>
                        </h1>
                        
                        <p className="galdeano-regular text-xl text-gray-300 max-w-3xl mx-auto">
                            We take your privacy seriously. This policy explains how we collect, use, and protect your data.
                        </p>
                        
                        <div className="mt-8 inline-block bg-green-500/10 border border-green-500/30 rounded-lg px-6 py-3">
                            <p className="text-green-400 font-semibold">Last Updated: January 2026</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-black">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-12">
                        {sections.map((section, index) => (
                            <div 
                                key={index}
                                className="bg-gray-900/50 border border-purple-500/30 rounded-xl p-8 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    {section.icon}
                                    <h2 className="poetsen-one-regular text-3xl text-white">{section.title}</h2>
                                </div>
                                
                                <div className="space-y-6">
                                    {section.content.map((item, idx) => (
                                        <div key={idx} className="border-l-4 border-purple-500/50 pl-6 hover:border-purple-500 transition-colors duration-300">
                                            <h3 className="text-xl font-bold text-purple-300 mb-2">{item.subtitle}</h3>
                                            <p className="text-gray-400 leading-relaxed">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Points Summary */}
            <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="poetsen-one-regular text-4xl text-white text-center mb-12">
                        KEY{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                            TAKEAWAYS
                        </span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6 hover:bg-purple-500/20 hover:scale-105 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                                <h3 className="text-xl font-bold text-white">100% Privacy Focused</h3>
                            </div>
                            <p className="text-gray-400">We never sell your data to anyone, ever.</p>
                        </div>

                        <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-6 hover:bg-cyan-500/20 hover:scale-105 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                                <h3 className="text-xl font-bold text-white">Your Data, Your Control</h3>
                            </div>
                            <p className="text-gray-400">Export or delete your data anytime you want.</p>
                        </div>

                        <div className="bg-pink-500/10 border border-pink-500/30 rounded-lg p-6 hover:bg-pink-500/20 hover:scale-105 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                                <h3 className="text-xl font-bold text-white">Secure & Encrypted</h3>
                            </div>
                            <p className="text-gray-400">Industry-standard encryption keeps your data safe.</p>
                        </div>

                        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 hover:bg-green-500/20 hover:scale-105 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                <h3 className="text-xl font-bold text-white">Transparent & Honest</h3>
                            </div>
                            <p className="text-gray-400">No hidden data collection or shady practices.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-black">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-gradient-to-br from-gray-900/90 to-black/90 border border-purple-500/50 rounded-2xl p-12">
                        <h2 className="poetsen-one-regular text-4xl text-white mb-4">
                            QUESTIONS ABOUT{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                YOUR PRIVACY?
                            </span>
                        </h2>
                        <p className="galdeano-regular text-xl text-gray-300 mb-8">
                            We're here to help. Contact us anytime at support@gamersintel.com
                        </p>
                        <a 
                            href="/contact" 
                            className="inline-block px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50 text-white font-bold uppercase tracking-wider transition-all duration-300"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Privacy;