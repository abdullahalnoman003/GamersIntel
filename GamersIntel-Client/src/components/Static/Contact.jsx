import React, { useState } from 'react';
import { FaEnvelope, FaDiscord, FaTwitter, FaTwitch, FaYoutube, FaPaperPlane, FaGamepad } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';
import { MdLocationOn, MdChat } from 'react-icons/md';
import toast from 'react-hot-toast';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate form submission
        setTimeout(() => {
            toast.success('Message sent! We\'ll get back to you soon!');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setLoading(false);
        }, 1500);
    };

    const contactMethods = [
        {
            icon: <FaEnvelope className="text-4xl text-purple-400" />,
            title: "Email Us",
            value: "support@gamersintel.com",
            description: "Get a response within 24 hours",
            link: "mailto:support@gamersintel.com"
        },
        {
            icon: <FaDiscord className="text-4xl text-cyan-400" />,
            title: "Discord Server",
            value: "Join Our Community",
            description: "Chat with us and other gamers",
            link: "https://discord.gg/gamersintel"
        },
        {
            icon: <MdChat className="text-4xl text-pink-400" />,
            title: "Live Chat",
            value: "Coming Soon",
            description: "Real-time support (in development)",
            link: null
        }
    ];

    const socialLinks = [
        { icon: <FaDiscord size={24} />, url: "https://discord.gg/gamersintel", label: "Discord" },
        { icon: <FaTwitter size={24} />, url: "https://twitter.com/gamersintel", label: "Twitter" },
        { icon: <FaTwitch size={24} />, url: "https://twitch.tv/gamersintel", label: "Twitch" },
        { icon: <FaYoutube size={24} />, url: "https://youtube.com/@gamersintel", label: "YouTube" }
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
                            <span className="text-purple-300 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
                        </div>
                        
                        <h1 className="poetsen-one-regular text-5xl md:text-7xl text-white mb-6">
                            LET'S{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                CONNECT
                            </span>
                        </h1>
                        
                        <p className="galdeano-regular text-xl text-gray-300 max-w-3xl mx-auto">
                            Have questions, feedback, or just want to say hi? We'd love to hear from you!
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="py-20 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {contactMethods.map((method, index) => (
                            <div 
                                key={index}
                                className="bg-gray-900/50 border border-purple-500/30 rounded-xl p-8 hover:border-purple-500/60 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 text-center"
                            >
                                <div className="flex justify-center mb-4">
                                    {method.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{method.title}</h3>
                                {method.link ? (
                                    <a 
                                        href={method.link}
                                        target={method.link.startsWith('http') ? '_blank' : '_self'}
                                        rel="noopener noreferrer"
                                        className="text-purple-400 hover:text-purple-300 font-semibold block mb-2"
                                    >
                                        {method.value}
                                    </a>
                                ) : (
                                    <p className="text-gray-500 font-semibold mb-2">{method.value}</p>
                                )}
                                <p className="text-gray-400 text-sm">{method.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Contact Form and Info Grid */}
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-gradient-to-br from-gray-900/90 to-black/90 border border-purple-500/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
                            <h2 className="poetsen-one-regular text-3xl text-white mb-6 flex items-center gap-3">
                                <FaPaperPlane className="text-purple-400" />
                                Send a Message
                            </h2>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-gray-300 mb-2 font-semibold">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-gray-800/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-gray-300 mb-2 font-semibold">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-gray-800/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-gray-300 mb-2 font-semibold">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-gray-800/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                                        placeholder="What's this about?"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-gray-300 mb-2 font-semibold">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="6"
                                        className="w-full bg-gray-800/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all resize-none"
                                        placeholder="Tell us what's on your mind..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50 text-white font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-8">
                            {/* Quick Info */}
                            <div className="bg-gray-900/50 border border-purple-500/30 rounded-xl p-8 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
                                <h3 className="poetsen-one-regular text-2xl text-white mb-6">Quick Info</h3>
                                
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <FaEnvelope className="text-purple-400 text-2xl mt-1" />
                                        <div>
                                            <h4 className="text-white font-bold mb-1">Email</h4>
                                            <a href="mailto:support@gamersintel.com" className="text-purple-400 hover:text-purple-300">
                                                support@gamersintel.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <MdLocationOn className="text-pink-400 text-2xl mt-1" />
                                        <div>
                                            <h4 className="text-white font-bold mb-1">Location</h4>
                                            <p className="text-gray-400">For Gamers, By Gamers<br />Worldwide 🌍</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <FaGamepad className="text-cyan-400 text-2xl mt-1" />
                                        <div>
                                            <h4 className="text-white font-bold mb-1">Response Time</h4>
                                            <p className="text-gray-400">Usually within 24 hours</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="bg-gray-900/50 border border-purple-500/30 rounded-xl p-8 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
                                <h3 className="poetsen-one-regular text-2xl text-white mb-6">Follow Us</h3>
                                
                                <div className="grid grid-cols-2 gap-4">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 hover:bg-purple-500/20 hover:scale-105 hover:border-purple-500/50 transition-all duration-300 text-purple-300 hover:text-white"
                                        >
                                            {social.icon}
                                            <span className="font-semibold">{social.label}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* FAQ Link */}
                            <div className="bg-gradient-to-br from-cyan-900/40 to-purple-900/40 border border-cyan-500/50 rounded-xl p-8 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300">
                                <h3 className="text-2xl font-bold text-white mb-3">Looking for Quick Answers?</h3>
                                <p className="text-gray-300 mb-4">Check out our FAQ section for instant solutions to common questions.</p>
                                <a 
                                    href="/faq" 
                                    className="inline-block px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg text-white font-bold transition-all duration-300"
                                >
                                    Visit FAQ
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Info */}
            <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-gray-900/90 to-black/90 border border-purple-500/50 rounded-2xl p-12 text-center">
                        <h2 className="poetsen-one-regular text-4xl text-white mb-4">
                            WE'RE{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                HERE TO HELP
                            </span>
                        </h2>
                        <p className="galdeano-regular text-xl text-gray-300 max-w-3xl mx-auto">
                            Whether you have a question, found a bug, want to suggest a feature, or just want to chat about games - 
                            we're all ears! GamersIntel is built for the community, and your feedback matters.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;