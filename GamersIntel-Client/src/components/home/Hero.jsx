import { Link } from 'react-router-dom';
import { FaSearch, FaGamepad } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';
import { MdTrendingUp } from 'react-icons/md';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const Hero = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="relative min-h-screen bg-base-100 flex items-center justify-center overflow-hidden pt-20">
            {/* Background Image Overlay - Add your image to /public/images/hero-bg.jpg */}
            <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{
                backgroundImage: `url('/images/logo.png')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}></div>
            
            {/* The dark overlay of a */}
            <div className="absolute inset-0 bg-linear-to-b from-base-100/50 via-base-100/70 to-base-100"></div>

            {/* Gentle Background Glow */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full filter blur-3xl"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-6 py-2 bg-primary/20 border border-primary/40 rounded-full mb-6 hover:bg-primary/30 hover:border-primary/60 transition-all duration-300">
                    <HiLightningBolt className="text-warning" />
                    <span className="text-secondary font-semibold text-sm  creepster-regular tracking-wider">Your Gaming Memory System</span>
                </div>

                {/* Main Headline with Custom Font */}
                <h1 className="poetsen-one-regular text-5xl md:text-7xl text-base-content mb-6 leading-tight">
                    DOMINATE YOUR
                    <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-accent to-secondary">
                        GAMING LEGACY
                    </span>
                </h1>

                {/* Subheadline */}
                <p className="galdeano-regular text-xl md:text-2xl text-base-content/70 mb-8 max-w-3xl mx-auto">
                    Track every game. Rate every experience. Remember every moment.
                </p>

                {/* Clean Stats */}
                <div className="flex flex-wrap justify-center gap-8 mb-10">
                    <div className="text-center bg-primary/10 border border-primary/20 rounded-lg px-8 py-4 hover:bg-primary/20 hover:scale-110 hover:border-primary/40 transition-all duration-300">
                        <div className="text-4xl font-bold text-primary">10K+</div>
                        <div className="text-sm text-base-content/60  tracking-wide">Games</div>
                    </div>
                    <div className="text-center bg-accent/10 border border-accent/20 rounded-lg px-8 py-4 hover:bg-accent/20 hover:scale-110 hover:border-accent/40 transition-all duration-300">
                        <div className="text-4xl font-bold text-accent">5K+</div>
                        <div className="text-sm text-base-content/60  tracking-wide">Gamers</div>
                    </div>
                    <div className="text-center bg-secondary/10 border border-secondary/20 rounded-lg px-8 py-4 hover:bg-secondary/20 hover:scale-110 hover:border-secondary/40 transition-all duration-300">
                        <div className="text-4xl font-bold text-secondary">50K+</div>
                        <div className="text-sm text-base-content/60  tracking-wide">Reviews</div>
                    </div>
                </div>

                {/* Clean Search Bar */}
                <Link to="/games" className='btn w-full mb-5 p-6 poetsen-one-regular  bg-linear-to-tr from-accent via-primary to-secondary   text-2xl  hover:shadow-secondary shadow-md duration-300'>
                Explore Games 
                </Link>

                {/* Clean CTA Buttons */}
                
               
               

                {/* Simple Trust Indicators */}
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-base-content/60">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-success rounded-full"></div>
                        100% Free
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-success rounded-full"></div>
                        No Credit Card
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-success rounded-full"></div>
                        Privacy First
                    </div>
                </div>
            </div>

            {/* Bottom linear */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-base-100 to-transparent"></div>
        </div>
    );
};

export default Hero;
