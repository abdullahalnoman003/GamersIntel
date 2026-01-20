import { Link } from 'react-router-dom';
import { FaGamepad, FaRocket, FaCheckCircle, FaFire, FaSkull } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';
import { GiCrossedSwords, GiTrophy } from 'react-icons/gi';

const CTA = () => {
    const benefits = [
        { text: "UNLIMITED GAMES", icon: "⚔️" },
        { text: "BRUTAL REVIEWS", icon: "💀" },
        { text: "PROGRESS TRACKING", icon: "📊" },
        { text: "COMMAND CENTER", icon: "🎮" },
        { text: "CUSTOM LOADOUTS", icon: "🛡️" },
        { text: "100% FREE", icon: "🔥" }
    ];

    return (
        <section className="py-20 bg-black relative overflow-hidden">
            {/* Intense Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `
                        linear-gradient(rgba(147, 51, 234, 0.3) 2px, transparent 2px),
                        linear-gradient(90deg, rgba(147, 51, 234, 0.3) 2px, transparent 2px)
                    `,
                    backgroundSize: '50px 50px'
                }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
            </div>

            {/* Aggressive Floating Icons */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <FaFire className="absolute top-10 left-10 text-orange-500/20 text-9xl animate-pulse" />
                <GiCrossedSwords className="absolute top-20 right-20 text-purple-500/20 text-9xl animate-pulse" style={{animationDelay: '1s'}} />
                <FaSkull className="absolute bottom-10 left-20 text-red-500/20 text-8xl animate-bounce" />
                <GiTrophy className="absolute bottom-20 right-10 text-yellow-500/20 text-9xl animate-bounce" style={{animationDelay: '1.5s'}} />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Main CTA Box */}
                <div className="relative">
                    {/* Ultra Neon Glow */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 blur-2xl opacity-50 animate-pulse"></div>
                    
                    {/* Main Box */}
                    <div className="relative bg-black border-4 border-purple-500 shadow-[0_0_60px_rgba(147,51,234,0.8)]">
                        {/* Corner Cuts */}
                        <div className="absolute -top-2 -left-2 w-16 h-16 border-t-4 border-l-4 border-cyan-500"></div>
                        <div className="absolute -top-2 -right-2 w-16 h-16 border-t-4 border-r-4 border-pink-500"></div>
                        <div className="absolute -bottom-2 -left-2 w-16 h-16 border-b-4 border-l-4 border-pink-500"></div>
                        <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-4 border-r-4 border-cyan-500"></div>

                        <div className="p-12 md:p-16">
                            {/* Alert Badge */}
                            <div className="flex justify-center mb-8">
                                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-600/50 via-orange-600/50 to-yellow-600/50 border-2 border-orange-500 shadow-[0_0_30px_rgba(249,115,22,0.6)] transform skew-x-[-5deg]">
                                    <HiLightningBolt className="text-yellow-300 text-xl animate-bounce" />
                                    <span className="text-white font-black text-sm uppercase tracking-widest skew-x-[5deg]">⚠ LAST CHANCE TO JOIN ⚠</span>
                                    <FaFire className="text-orange-500 text-xl animate-bounce" />
                                </div>
                            </div>

                        {/* Massive Headline */}
                        <h2 className="text-5xl md:text-8xl font-black text-white text-center mb-6 leading-none">
                            <span className="block text-white drop-shadow-[0_0_30px_rgba(147,51,234,0.8)] animate-pulse">READY TO</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 mt-3">
                                DOMINATE?
                            </span>
                        </h2>
                        
                        <p className="text-2xl text-cyan-300 text-center mb-10 max-w-2xl mx-auto font-black uppercase tracking-wide">
                            <span className="text-pink-500">►</span> Join 5,000+ Elite Gamers Already Crushing It <span className="text-pink-500">◄</span>
                        </p>

                        {/* Benefits Grid - Aggressive */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
                            {benefits.map((benefit, index) => (
                                <div 
                                    key={index}
                                    className="group relative"
                                >
                                    <div className="absolute -inset-0.5 bg-purple-600/50 blur opacity-0 group-hover:opacity-100 transition"></div>
                                    <div className="relative flex items-center justify-center gap-2 bg-black border-2 border-purple-500 p-4 hover:border-cyan-500 transition-all hover:shadow-[0_0_20px_rgba(147,51,234,0.6)] transform hover:scale-105">
                                        <span className="text-2xl">{benefit.icon}</span>
                                        <span className="text-gray-300 font-black uppercase text-xs tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400">
                                            {benefit.text}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Aggressive CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
                            <Link 
                                to="/registration" 
                                className="relative group"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 blur-lg animate-pulse"></div>
                                <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 border-2 border-cyan-400 px-12 py-5 font-black uppercase tracking-widest text-white hover:text-cyan-300 transition-all transform hover:scale-110 flex items-center gap-4 shadow-[0_0_40px_rgba(236,72,153,0.8)]">
                                    <FaRocket className="text-3xl animate-bounce" />
                                    <span className="text-xl">JOIN NOW</span>
                                    <FaFire className="text-3xl text-orange-500 animate-pulse" />
                                </div>
                            </Link>
                            <Link 
                                to="/login" 
                                className="relative group"
                            >
                                <div className="absolute -inset-1 bg-cyan-600/50 blur opacity-0 group-hover:opacity-100 transition"></div>
                                <div className="relative bg-black border-2 border-cyan-500 px-12 py-5 font-black uppercase tracking-widest text-cyan-300 hover:text-white transition-all flex items-center gap-4">
                                    <GiCrossedSwords className="text-2xl" />
                                    <span className="text-xl">SIGN IN</span>
                                </div>
                            </Link>
                        </div>

                        {/* Aggressive Trust Indicators */}
                        <div className="flex flex-wrap items-center justify-center gap-8 text-xs uppercase tracking-widest font-black">
                            <div className="flex items-center gap-2 text-green-400">
                                <div className="w-3 h-3 bg-green-500 transform rotate-45 animate-ping"></div>
                                <span>NO CREDIT CARD</span>
                            </div>
                            <div className="flex items-center gap-2 text-cyan-400">
                                <div className="w-3 h-3 bg-cyan-500 transform rotate-45 animate-ping"></div>
                                <span>INSTANT ACCESS</span>
                            </div>
                            <div className="flex items-center gap-2 text-purple-400">
                                <div className="w-3 h-3 bg-purple-500 transform rotate-45 animate-ping"></div>
                                <span>5K+ WARRIORS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                {/* Aggressive Testimonial */}
                <div className="mt-16 text-center">
                    <div className="relative inline-block">
                        <div className="absolute -inset-1 bg-purple-600/50 blur-xl animate-pulse"></div>
                        <div className="relative bg-black border-2 border-purple-500 p-8 max-w-2xl">
                            <div className="flex items-center justify-center gap-2 text-yellow-400 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <FaCheckCircle key={i} className="text-2xl" />
                                ))}
                            </div>
                            <p className="text-gray-300 italic text-lg mb-3 font-medium">
                                "GamersIntel is INSANE. My backlog is finally under control. This is the real deal!"
                            </p>
                            <p className="text-purple-400 font-black uppercase tracking-wider">- ALEX M. | LEGEND TIER</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;