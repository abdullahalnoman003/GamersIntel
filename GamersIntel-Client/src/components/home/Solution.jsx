import { FaQuestionCircle, FaCheckCircle, FaBrain, FaCalendarAlt, FaSkull, FaFire } from 'react-icons/fa';
import { MdManageSearch } from 'react-icons/md';
import { GiCrossedSwords, GiShield, GiTrophy } from 'react-icons/gi';

const Solution = () => {
    const problems = [
        {
            icon: <FaSkull className="text-5xl text-red-500" />,
            problem: "MEMORY LOSS",
            description: "Forgot what you played? Lost your gaming history? Your legacy, vanished."
        },
        {
            icon: <FaBrain className="text-5xl text-orange-500" />,
            problem: "BACKLOG HELL",
            description: "500 games in your library. Zero clue what to play. Decision paralysis."
        },
        {
            icon: <MdManageSearch className="text-5xl text-yellow-500" />,
            problem: "NO TRACKING",
            description: "Which games did you finish? Which did you rage quit? No idea."
        },
        {
            icon: <FaCalendarAlt className="text-5xl text-pink-500" />,
            problem: "LOST PROGRESS",
            description: "Years of gaming. Zero proof. No stats. No history. Nothing."
        }
    ];

    const solutions = [
        { text: "⚡ COMPLETE GAME DATABASE", icon: "🗡️" },
        { text: "⚡ BRUTAL HONEST REVIEWS", icon: "⭐" },
        { text: "⚡ REAL-TIME PROGRESS TRACKING", icon: "📊" },
        { text: "⚡ INTELLIGENT BACKLOG SYSTEM", icon: "🎯" },
        { text: "⚡ FULL GAMING HISTORY", icon: "📅" },
        { text: "⚡ ACHIEVEMENT SHOWCASE", icon: "🏆" }
    ];

    return (
        <section className="py-20 bg-black relative overflow-hidden">
            {/* Cyber Grid */}
            <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `
                    linear-gradient(rgba(239, 68, 68, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(239, 68, 68, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
            }}></div>

            {/* Aggressive Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/30 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/30 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Aggressive Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-black border-2 border-red-500 mb-6 shadow-[0_0_30px_rgba(239,68,68,0.5)] transform skew-x-[-5deg]">
                        <GiCrossedSwords className="text-red-500 text-xl animate-pulse" />
                        <span className="text-red-300 font-black text-sm uppercase tracking-widest skew-x-[5deg]">⚠ BATTLE ANALYSIS ⚠</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-none">
                        <span className="text-white drop-shadow-[0_0_20px_rgba(239,68,68,0.8)]">WHY</span>
                        {' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
                            GAMERSINTEL
                        </span>
                        <span className="text-white drop-shadow-[0_0_20px_rgba(239,68,68,0.8)]">?</span>
                    </h2>
                    <p className="text-xl text-cyan-300 max-w-3xl mx-auto font-bold uppercase tracking-wide">
                        <span className="text-red-500">►</span> Every gamer's nightmare. Our solution destroys them all. <span className="text-red-500">◄</span>
                    </p>
                </div>

                {/* Battle Layout */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* ENEMY Side - Problems */}
                    <div>
                        <div className="relative">
                            <div className="absolute -inset-1 bg-red-600/50 blur-xl"></div>
                            <div className="relative bg-black border-2 border-red-500 p-8 shadow-[0_0_40px_rgba(239,68,68,0.4)]">
                                <div className="flex items-center gap-3 mb-8">
                                    <FaSkull className="text-4xl text-red-500 animate-pulse" />
                                    <h3 className="text-3xl font-black text-white uppercase tracking-wider">
                                        <span className="text-red-500">[</span>ENEMIES<span className="text-red-500">]</span>
                                    </h3>
                                </div>
                                
                                <div className="space-y-6">
                                    {problems.map((item, index) => (
                                        <div key={index} className="group relative">
                                            <div className="absolute -inset-1 bg-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                                            <div className="relative flex gap-4 items-start bg-red-900/20 border-l-4 border-red-500 p-4 hover:bg-red-900/30 transition-all">
                                                <div className="flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <h4 className="text-xl font-black text-red-400 mb-2 uppercase tracking-wide">{item.problem}</h4>
                                                    <p className="text-gray-400 text-sm">{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                
                                {/* Danger Warning */}
                                <div className="mt-6 flex items-center justify-center gap-2 text-red-400 font-black uppercase text-xs tracking-widest">
                                    <div className="w-2 h-2 bg-red-500 animate-ping"></div>
                                    THREAT LEVEL: CRITICAL
                                    <div className="w-2 h-2 bg-red-500 animate-ping"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* VICTORY Side - Solutions */}
                    <div>
                        <div className="relative">
                            <div className="absolute -inset-1 bg-purple-600/50 blur-xl"></div>
                            <div className="relative bg-black border-2 border-purple-500 p-8 shadow-[0_0_40px_rgba(147,51,234,0.4)]">
                                <div className="flex items-center gap-3 mb-8">
                                    <GiShield className="text-4xl text-green-500 animate-pulse" />
                                    <h3 className="text-3xl font-black text-white uppercase tracking-wider">
                                        <span className="text-green-500">[</span>ARSENAL<span className="text-green-500">]</span>
                                    </h3>
                                </div>
                                
                                <div className="space-y-3">
                                    {solutions.map((solution, index) => (
                                        <div 
                                            key={index} 
                                            className="group relative"
                                        >
                                            <div className="absolute -inset-1 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                                            <div className="relative flex items-center gap-4 bg-purple-900/20 border border-purple-500/50 p-4 hover:bg-purple-900/40 hover:border-purple-500 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(147,51,234,0.4)]">
                                                <div className="flex-shrink-0">
                                                    <div className="w-3 h-3 bg-green-500 transform rotate-45 animate-pulse"></div>
                                                </div>
                                                <span className="text-gray-300 font-black uppercase text-sm tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400">
                                                    {solution.text}
                                                </span>
                                                <span className="text-2xl ml-auto">{solution.icon}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                
                                {/* Victory Status */}
                                <div className="mt-6 flex items-center justify-center gap-2 text-green-400 font-black uppercase text-xs tracking-widest">
                                    <div className="w-2 h-2 bg-green-500 animate-ping"></div>
                                    VICTORY GUARANTEED
                                    <div className="w-2 h-2 bg-green-500 animate-ping"></div>
                                </div>
                            </div>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-green-600/50 blur opacity-0 group-hover:opacity-100 transition"></div>
                                <div className="relative bg-black border-2 border-green-500 p-6 text-center hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] transition">
                                    <div className="text-4xl font-black text-green-400">FREE</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">FOREVER</div>
                                </div>
                            </div>
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-cyan-600/50 blur opacity-0 group-hover:opacity-100 transition"></div>
                                <div className="relative bg-black border-2 border-cyan-500 p-6 text-center hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition">
                                    <div className="text-4xl font-black text-cyan-400">&lt;2MIN</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">SETUP</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Battle Cry Banner */}
                <div className="mt-20 text-center">
                    <div className="relative inline-block">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 blur-xl opacity-50 animate-pulse"></div>
                        <div className="relative bg-black border-2 border-purple-500 px-12 py-8 transform hover:scale-105 transition-transform">
                            <p className="text-3xl font-black text-white mb-2 uppercase tracking-wide">
                                <span className="text-red-500">[</span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
                                    STOP LOSING. START TRACKING.
                                </span>
                                <span className="text-red-500">]</span>
                            </p>
                            <p className="text-cyan-300 uppercase tracking-widest text-sm font-bold">
                                ⚡ LEVEL UP YOUR GAMING MEMORY ⚡
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solution;