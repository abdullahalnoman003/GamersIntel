import { Link } from 'react-router-dom';
import { FaSearch, FaGamepad, FaTrophy, FaStar, FaSkull, FaFire } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';
import { MdTrendingUp } from 'react-icons/md';
import { GiSwordman, GiTrophy } from 'react-icons/gi';

const Hero = () => {
    return (
        <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden pt-20">
            {/* Aggressive Background Effects */}
            <div className="absolute inset-0">
                {/* Neon Grid */}
                <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `
                        linear-gradient(rgba(147, 51, 234, 0.2) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(147, 51, 234, 0.2) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px'
                }}></div>
                
                {/* Intense Glows */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl animate-pulse opacity-30"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse opacity-30" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-pink-600 rounded-full mix-blend-screen filter blur-3xl animate-pulse opacity-20" style={{animationDelay: '2s'}}></div>
            </div>

            {/* Scanline Effect */}
            <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: 'linear-gradient(0deg, transparent 50%, rgba(147, 51, 234, 0.03) 50%)',
                backgroundSize: '100% 4px'
            }}></div>

            {/* Floating Aggressive Icons */}
            <div className="absolute inset-0 pointer-events-none">
                <FaSkull className="absolute top-20 left-10 text-red-500/30 text-6xl animate-pulse" />
                <FaFire className="absolute top-40 right-20 text-orange-500/30 text-7xl animate-bounce" style={{animationDelay: '0.5s'}} />
                <GiSwordman className="absolute bottom-32 left-32 text-purple-500/30 text-8xl animate-pulse" style={{animationDelay: '1s'}} />
                <FaTrophy className="absolute bottom-40 right-40 text-yellow-500/30 text-6xl animate-bounce" style={{animationDelay: '1.5s'}} />
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Aggressive Badge */}
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-cyan-600/30 border-2 border-purple-500 rounded-none skew-x-[-5deg] mb-8 shadow-[0_0_20px_rgba(147,51,234,0.5)] animate-pulse">
                    <HiLightningBolt className="text-yellow-400 text-xl" />
                    <span className="text-cyan-300 font-black text-sm tracking-widest uppercase skew-x-[5deg]">⚡ DOMINATE YOUR GAMING LIBRARY ⚡</span>
                </div>

                {/* Main Headline - Aggressive */}
                <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-none tracking-tight">
                    <span className="block text-white drop-shadow-[0_0_30px_rgba(147,51,234,0.8)] animate-pulse">DOMINATE</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 drop-shadow-[0_0_30px_rgba(236,72,153,0.8)] mt-2">
                        YOUR GAMING
                    </span>
                    <span className="block text-white drop-shadow-[0_0_30px_rgba(6,182,212,0.8)] mt-2">LEGACY</span>
                </h1>

                {/* Aggressive Subheadline */}
                <p className="text-xl md:text-2xl text-cyan-300 mb-8 max-w-3xl mx-auto font-bold uppercase tracking-wide">
                    <span className="text-pink-500">▸</span> Track Every Kill <span className="text-pink-500">▸</span> Rate Every Boss <span className="text-pink-500">▸</span> Own Your Stats <span className="text-pink-500">▸</span>
                </p>

                {/* Aggressive Stats */}
                <div className="flex flex-wrap justify-center gap-6 mb-12">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-purple-600/50 blur-xl group-hover:blur-2xl transition-all"></div>
                        <div className="relative bg-black border-2 border-purple-500 px-8 py-4 transform skew-x-[-5deg] hover:skew-x-0 transition-transform">
                            <div className="text-4xl font-black text-purple-400 skew-x-[5deg] group-hover:skew-x-0">10K+</div>
                            <div className="text-xs text-gray-400 uppercase tracking-wider skew-x-[5deg] group-hover:skew-x-0">GAMES</div>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-pink-600/50 blur-xl group-hover:blur-2xl transition-all"></div>
                        <div className="relative bg-black border-2 border-pink-500 px-8 py-4 transform skew-x-[-5deg] hover:skew-x-0 transition-transform">
                            <div className="text-4xl font-black text-pink-400 skew-x-[5deg] group-hover:skew-x-0">5K+</div>
                            <div className="text-xs text-gray-400 uppercase tracking-wider skew-x-[5deg] group-hover:skew-x-0">WARRIORS</div>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-cyan-600/50 blur-xl group-hover:blur-2xl transition-all"></div>
                        <div className="relative bg-black border-2 border-cyan-500 px-8 py-4 transform skew-x-[-5deg] hover:skew-x-0 transition-transform">
                            <div className="text-4xl font-black text-cyan-400 skew-x-[5deg] group-hover:skew-x-0">50K+</div>
                            <div className="text-xs text-gray-400 uppercase tracking-wider skew-x-[5deg] group-hover:skew-x-0">REVIEWS</div>
                        </div>
                    </div>
                </div>

                {/* Aggressive Search Bar */}
                <div className="max-w-2xl mx-auto mb-12">
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 blur-lg opacity-50 animate-pulse"></div>
                        <div className="relative flex items-center bg-black border-2 border-purple-500 p-1">
                            <div className="flex-1 flex items-center bg-gray-900 p-3">
                                <FaSearch className="text-cyan-400 text-xl mr-3 animate-pulse" />
                                <input 
                                    type="text" 
                                    placeholder="⚡ SEARCH 10,000+ GAMES... (COMING SOON) ⚡"
                                    className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none font-semibold uppercase text-sm tracking-wide"
                                    disabled
                                />
                                <MdTrendingUp className="text-pink-400 text-2xl ml-3" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Aggressive CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                    <Link 
                        to="/registration" 
                        className="relative group"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur opacity-75 group-hover:opacity-100 transition animate-pulse"></div>
                        <div className="relative bg-black border-2 border-purple-500 px-10 py-4 font-black uppercase tracking-widest text-white hover:text-cyan-400 transition-all transform hover:scale-105 flex items-center gap-3">
                            <FaFire className="text-2xl text-orange-500 animate-pulse" />
                            JOIN THE ELITE
                            <FaFire className="text-2xl text-orange-500 animate-pulse" />
                        </div>
                    </Link>
                    <a 
                        href="#features" 
                        className="relative group"
                    >
                        <div className="absolute -inset-1 bg-cyan-500/50 blur opacity-0 group-hover:opacity-75 transition"></div>
                        <div className="relative bg-black border-2 border-cyan-500 px-10 py-4 font-black uppercase tracking-widest text-cyan-300 hover:text-white transition-all flex items-center gap-3">
                            <GiSwordman className="text-2xl" />
                            LEARN MORE
                        </div>
                    </a>
                </div>

                {/* Aggressive Trust Indicators */}
                <div className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-widest font-bold">
                    <div className="flex items-center gap-2 text-green-400">
                        <div className="w-3 h-3 bg-green-500 animate-ping absolute"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                        100% FREE
                    </div>
                    <div className="flex items-center gap-2 text-cyan-400">
                        <div className="w-3 h-3 bg-cyan-500 animate-ping absolute"></div>
                        <div className="w-3 h-3 bg-cyan-500 rounded-sm"></div>
                        NO BS
                    </div>
                    <div className="flex items-center gap-2 text-purple-400">
                        <div className="w-3 h-3 bg-purple-500 animate-ping absolute"></div>
                        <div className="w-3 h-3 bg-purple-500 rounded-sm"></div>
                        PURE GAMING
                    </div>
                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
        </div>
    );
};

export default Hero;