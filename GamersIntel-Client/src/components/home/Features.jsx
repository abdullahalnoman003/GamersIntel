import { FaGamepad, FaStar, FaChartLine, FaUsers, FaBookmark, FaTrophy, FaFire, FaSkull } from 'react-icons/fa';
import { MdDashboard, MdLibraryBooks } from 'react-icons/md';
import { GiSwordman, GiCrossedSwords, GiTrophy, GiLightningTear } from 'react-icons/gi';

const Features = () => {
    const features = [
        {
            icon: <GiCrossedSwords className="text-6xl text-purple-400" />,
            title: "ARSENAL TRACKER",
            description: "Command your complete gaming arsenal. Track every title in your library - past conquests, current battles, and future targets.",
            color: "from-purple-500/30 to-purple-600/30",
            accent: "border-purple-500"
        },
        {
            icon: <FaStar className="text-6xl text-yellow-400" />,
            title: "RATE & DESTROY",
            description: "Drop your honest scores. Write brutal reviews. Let the gaming world know which titles are legendary and which are trash.",
            color: "from-yellow-500/30 to-yellow-600/30",
            accent: "border-yellow-500"
        },
        {
            icon: <GiLightningTear className="text-6xl text-cyan-400" />,
            title: "PROGRESS DOMINATION",
            description: "Track every hour, every achievement, every percentage. Your gaming journey visualized in raw, powerful stats.",
            color: "from-cyan-500/30 to-cyan-600/30",
            accent: "border-cyan-500"
        },
        {
            icon: <MdDashboard className="text-6xl text-pink-400" />,
            title: "COMMAND CENTER",
            description: "Your personal war room. Real-time analytics, genre breakdowns, kill streaks, and AI-powered game recommendations.",
            color: "from-pink-500/30 to-pink-600/30",
            accent: "border-pink-500"
        },
        {
            icon: <FaFire className="text-6xl text-orange-400" />,
            title: "CUSTOM LOADOUTS",
            description: "Build your collections your way. Sort by genre, vibe, platform, or whatever suits your playstyle.",
            color: "from-orange-500/30 to-orange-600/30",
            accent: "border-orange-500"
        },
        {
            icon: <GiTrophy className="text-6xl text-yellow-500" />,
            title: "LEGEND STATUS",
            description: "Forge your gaming legacy. Unlock badges, flex achievements, and showcase your greatest victories to the world.",
            color: "from-yellow-500/30 to-red-600/30",
            accent: "border-yellow-500"
        }
    ];

    return (
        <section id="features" className="py-20 bg-black relative overflow-hidden">
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `
                    linear-gradient(rgba(147, 51, 234, 0.3) 2px, transparent 2px),
                    linear-gradient(90deg, rgba(147, 51, 234, 0.3) 2px, transparent 2px)
                `,
                backgroundSize: '60px 60px'
            }}></div>

            {/* Aggressive Glows */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/40 rounded-full filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/40 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-600/40 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Aggressive Section Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-black border-2 border-purple-500 mb-6 shadow-[0_0_30px_rgba(147,51,234,0.5)] transform skew-x-[-5deg]">
                        <FaFire className="text-orange-500 text-xl animate-pulse" />
                        <span className="text-cyan-300 font-black text-sm uppercase tracking-widest skew-x-[5deg]">⚡ WEAPON SYSTEMS ⚡</span>
                        <FaSkull className="text-red-500 text-xl animate-pulse" />
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-none">
                        <span className="text-white drop-shadow-[0_0_20px_rgba(147,51,234,0.8)]">GEAR UP</span>
                        <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 drop-shadow-[0_0_30px_rgba(236,72,153,0.8)]">
                            FOR VICTORY
                        </span>
                    </h2>
                    <p className="text-xl text-cyan-300 max-w-2xl mx-auto font-bold uppercase tracking-wide">
                        <span className="text-pink-500">►</span> Professional-grade tools for elite gamers <span className="text-pink-500">◄</span>
                    </p>
                </div>

                {/* Aggressive Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index} 
                            className="group relative"
                        >
                            {/* Neon Glow Effect */}
                            <div className={`absolute -inset-1 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`}></div>
                            
                            {/* Card */}
                            <div className={`relative bg-black border-2 ${feature.accent} p-8 transition-all duration-300 hover:scale-105 transform group-hover:shadow-[0_0_40px_rgba(147,51,234,0.6)]`}>
                                {/* Corner Cuts */}
                                <div className="absolute top-0 right-0 w-6 h-6 bg-black border-t-2 border-r-2 border-inherit transform translate-x-1 -translate-y-1"></div>
                                <div className="absolute bottom-0 left-0 w-6 h-6 bg-black border-b-2 border-l-2 border-inherit transform -translate-x-1 translate-y-1"></div>
                                
                                {/* Scanline */}
                                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                                    backgroundImage: 'linear-gradient(0deg, transparent 50%, rgba(255, 255, 255, 0.05) 50%)',
                                    backgroundSize: '100% 4px'
                                }}></div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all">
                                        {feature.title}
                                    </h3>
                                    <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-transparent mb-4"></div>
                                    <p className="text-gray-400 leading-relaxed text-sm">
                                        {feature.description}
                                    </p>
                                </div>

                                {/* Status Indicator */}
                                <div className="absolute top-4 right-4 flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Stats */}
                <div className="mt-20 text-center">
                    <div className="inline-block bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20 border border-purple-500/30 rounded-2xl p-8">
                        <p className="text-gray-300 text-lg mb-4">
                            Join thousands of gamers already tracking their gaming journey
                        </p>
                        <div className="flex items-center justify-center gap-2 text-purple-400 font-semibold">
                            <FaUsers className="text-2xl" />
                            <span className="text-3xl">5,000+</span>
                            <span className="text-gray-400">Active Users</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;