import { Link } from 'react-router-dom';
import { FaSearch, FaGamepad } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';
import { MdTrendingUp } from 'react-icons/md';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const Hero = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden pt-20">
            {/* Background Image Overlay - Add your image to /public/images/hero-bg.jpg */}
            <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{
                backgroundImage: `url('/images/logo.png')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}></div>
            
            {/* The dark overlay of a */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black"></div>

            {/* Subtle Grid Background */}
            <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `
                    linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
            }}></div>

            {/* Gentle Background Glow */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600 rounded-full filter blur-3xl"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-6 py-2 bg-purple-600/20 border border-purple-500/40 rounded-full mb-6 hover:bg-purple-600/30 hover:border-purple-500/60 transition-all duration-300">
                    <HiLightningBolt className="text-yellow-400" />
                    <span className="text-purple-300 font-semibold text-sm uppercase creepster-regular tracking-wider">Your Gaming Memory System</span>
                </div>

                {/* Main Headline with Custom Font */}
                <h1 className="poetsen-one-regular text-5xl md:text-7xl text-white mb-6 leading-tight">
                    DOMINATE YOUR
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
                        GAMING LEGACY
                    </span>
                </h1>

                {/* Subheadline */}
                <p className="galdeano-regular text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                    Track every game. Rate every experience. Remember every moment.
                </p>

                {/* Clean Stats */}
                <div className="flex flex-wrap justify-center gap-8 mb-10">
                    <div className="text-center bg-purple-500/10 border border-purple-500/20 rounded-lg px-8 py-4 hover:bg-purple-500/20 hover:scale-110 hover:border-purple-500/40 transition-all duration-300">
                        <div className="text-4xl font-bold text-purple-400">10K+</div>
                        <div className="text-sm text-gray-400 uppercase tracking-wide">Games</div>
                    </div>
                    <div className="text-center bg-pink-500/10 border border-pink-500/20 rounded-lg px-8 py-4 hover:bg-pink-500/20 hover:scale-110 hover:border-pink-500/40 transition-all duration-300">
                        <div className="text-4xl font-bold text-pink-400">5K+</div>
                        <div className="text-sm text-gray-400 uppercase tracking-wide">Gamers</div>
                    </div>
                    <div className="text-center bg-cyan-500/10 border border-cyan-500/20 rounded-lg px-8 py-4 hover:bg-cyan-500/20 hover:scale-110 hover:border-cyan-500/40 transition-all duration-300">
                        <div className="text-4xl font-bold text-cyan-400">50K+</div>
                        <div className="text-sm text-gray-400 uppercase tracking-wide">Reviews</div>
                    </div>
                </div>

                {/* Clean Search Bar */}
                <div className="max-w-2xl mx-auto mb-10">
                    <div className="relative">
                        <div className="flex items-center bg-gray-900/80 border border-purple-500/40 rounded-lg p-4 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                            <FaSearch className="text-purple-400 text-xl mr-3" />
                            <input 
                                type="text" 
                                placeholder="Search 10,000+ games... (Coming Soon)"
                                className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none"
                                disabled
                            />
                            <MdTrendingUp className="text-cyan-400 text-2xl ml-3" />
                        </div>
                    </div>
                </div>

                {/* Clean CTA Buttons */}
                
               
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                    
                    {
                        user ? (
                            <Link 
                        to="/dashboard" 
                        className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50 text-white font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-3"
                    >
                        <FaGamepad className="text-xl" />
                        Go to Dashboard
                    </Link>
                        ) : (
                            <Link 
                        to="/registration" 
                        className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50 text-white font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-3"
                    >
                        <FaGamepad className="text-xl" />
                        Start Free
                    </Link>
                        )
                    }
                    <a 
                        href="#features" 
                        className="px-10 py-4 bg-transparent border-2 border-purple-500 rounded-lg hover:bg-purple-500/10 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 text-purple-300 hover:text-white font-bold uppercase tracking-wider transition-all duration-300"
                    >
                        Learn More
                    </a>
                </div>

                {/* Simple Trust Indicators */}
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        100% Free
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        No Credit Card
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        Privacy First
                    </div>
                </div>
            </div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
        </div>
    );
};

export default Hero;
