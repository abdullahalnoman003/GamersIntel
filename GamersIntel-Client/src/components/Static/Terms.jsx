import React from 'react';
import { FaFileContract,FaShieldAlt, FaCheckCircle, FaExclamationTriangle, FaHandshake } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';

const Terms = () => {
    const sections = [
        {
            icon: <FaHandshake className="text-4xl text-purple-400" />,
            title: "Acceptance of Terms",
            content: [
                {
                    text: "By accessing and using GamersIntel, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service."
                },
                {
                    text: "We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the modified terms."
                }
            ]
        },
        {
            icon: <FaCheckCircle className="text-4xl text-green-400" />,
            title: "User Accounts",
            content: [
                {
                    subtitle: "Account Creation",
                    text: "You must provide accurate and complete information when creating an account. You are responsible for maintaining the security of your account credentials."
                },
                {
                    subtitle: "Account Responsibility",
                    text: "You are solely responsible for all activity that occurs under your account. Notify us immediately if you suspect unauthorized access."
                },
                {
                    subtitle: "One Account Per User",
                    text: "Each user may only create one account. Multiple accounts by the same person are not permitted."
                }
            ]
        },
        {
            icon: <FaFileContract className="text-4xl text-cyan-400" />,
            title: "User Content & Conduct",
            content: [
                {
                    subtitle: "Your Reviews & Ratings",
                    text: "You retain ownership of your reviews, ratings, and other content. By posting, you grant GamersIntel a license to display and distribute your content on our platform."
                },
                {
                    subtitle: "Prohibited Content",
                    text: "Do not post content that is illegal, offensive, hateful, threatening, spam, or violates others' rights. We reserve the right to remove any content that violates these terms."
                },
                {
                    subtitle: "Respectful Community",
                    text: "Be respectful to other users. Harassment, abuse, or discriminatory behavior will result in account suspension or termination."
                }
            ]
        },
        {
            icon: <FaExclamationTriangle className="text-4xl text-yellow-400" />,
            title: "Service Rules",
            content: [
                {
                    subtitle: "Prohibited Activities",
                    text: "Do not attempt to hack, scrape, spam, or abuse the service. Do not impersonate others or create fake accounts."
                },
                {
                    subtitle: "API & Data Usage",
                    text: "Automated access to GamersIntel data without permission is prohibited. Contact us if you're interested in API access."
                },
                {
                    subtitle: "Commercial Use",
                    text: "GamersIntel is for personal use only. Commercial use requires explicit written permission from us."
                }
            ]
        },
        {
            icon: <FaShieldAlt className="text-4xl text-pink-400" />,
            title: "Service Availability",
            content: [
                {
                    subtitle: "No Guarantees",
                    text: "GamersIntel is provided 'as is' without warranties. We do not guarantee uninterrupted or error-free service."
                },
                {
                    subtitle: "Service Changes",
                    text: "We reserve the right to modify, suspend, or discontinue any part of the service at any time with or without notice."
                },
                {
                    subtitle: "Data Backup",
                    text: "While we take backups seriously, you are responsible for keeping your own backups of important data."
                }
            ]
        },
        {
            icon: <FaFileContract className="text-4xl text-blue-400" />,
            title: "Limitation of Liability",
            content: [
                {
                    text: "GamersIntel and its team shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use or inability to use the service."
                },
                {
                    text: "In no event shall our total liability exceed the amount you paid us in the past 12 months (which is $0, since GamersIntel is free)."
                }
            ]
        },
        {
            icon: <FaHandshake className="text-4xl text-purple-400" />,
            title: "Termination",
            content: [
                {
                    subtitle: "Your Right to Leave",
                    text: "You may delete your account at any time from your dashboard settings. This action is permanent and irreversible."
                },
                {
                    subtitle: "Our Right to Terminate",
                    text: "We reserve the right to suspend or terminate accounts that violate these terms or engage in harmful behavior."
                },
                {
                    subtitle: "Effect of Termination",
                    text: "Upon termination, your right to use the service immediately ceases. Your data may be deleted according to our privacy policy."
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
                            <span className="text-purple-300 font-semibold text-sm uppercase tracking-wider">Terms of Service</span>
                        </div>
                        
                        <h1 className="poetsen-one-regular text-5xl md:text-7xl text-white mb-6">
                            THE{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                GROUND RULES
                            </span>
                        </h1>
                        
                        <p className="galdeano-regular text-xl text-gray-300 max-w-3xl mx-auto">
                            Simple, transparent rules for using GamersIntel. We keep it fair and straightforward.
                        </p>
                        
                        <div className="mt-8 inline-block bg-blue-500/10 border border-blue-500/30 rounded-lg px-6 py-3">
                            <p className="text-blue-400 font-semibold">Last Updated: January 2026</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TLDR Section */}
            <section className="py-20 bg-black">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/50 rounded-2xl p-8 md:p-12">
                        <h2 className="poetsen-one-regular text-3xl md:text-4xl text-white mb-6 text-center">
                            TL;DR{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                                (The Short Version)
                            </span>
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-3">
                                <FaCheckCircle className="text-green-400 text-xl mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-white font-bold mb-1">Be Respectful</h3>
                                    <p className="text-gray-300">Don't be a jerk. Treat others how you want to be treated.</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                                <FaCheckCircle className="text-green-400 text-xl mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-white font-bold mb-1">Own Your Content</h3>
                                    <p className="text-gray-300">Your reviews are yours, but we can display them.</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                                <FaCheckCircle className="text-green-400 text-xl mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-white font-bold mb-1">No Abuse</h3>
                                    <p className="text-gray-300">Don't hack, spam, or misuse the service.</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                                <FaCheckCircle className="text-green-400 text-xl mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-white font-bold mb-1">Free to Leave</h3>
                                    <p className="text-gray-300">Delete your account anytime, no questions asked.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
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
                                        <div key={idx}>
                                            {item.subtitle && (
                                                <h3 className="text-xl font-bold text-purple-300 mb-2">{item.subtitle}</h3>
                                            )}
                                            <p className="text-gray-400 leading-relaxed border-l-4 border-purple-500/50 pl-6 hover:border-purple-500 transition-colors duration-300">
                                                {item.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
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
                                THE TERMS?
                            </span>
                        </h2>
                        <p className="galdeano-regular text-xl text-gray-300 mb-8">
                            We're happy to clarify anything. Reach out anytime at support@gamersintel.com
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

export default Terms;