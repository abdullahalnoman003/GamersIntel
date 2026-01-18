import { Link } from "react-router-dom";
import { FaTrophy, FaDiscord, FaTwitter, FaTwitch, FaYoutube, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { HiLightningBolt } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black border-t border-purple-500/30 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/logo.png" alt="GamersIntel Logo" className="w-10 h-10"/>
              <span className="text-primary text-2xl font-extrabold">Gamers</span><span className="text-secondary text-2xl font-extrabold">Intel</span>
                      <HiLightningBolt className="text-cyan-400 text-xl animate-pulse hidden sm:block" />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Track, manage, and remember your gaming journey. Intel for games  your personal gaming memory system.
            </p>
            <div className="flex items-center gap-2 text-purple-400">
              <FaTrophy className="text-2xl" />
              <span className="font-bold">Remember Every Game</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-black text-purple-300 uppercase tracking-wider mb-4 flex items-center gap-2">
              <HiLightningBolt className="text-purple-400" /> Explore
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="text-purple-400 group-hover:translate-x-1 transition-transform">▶</span> Home
                </Link>
              </li>
              <li>
                <a href="#features" className="hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="text-purple-400 group-hover:translate-x-1 transition-transform">▶</span> Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="text-purple-400 group-hover:translate-x-1 transition-transform">▶</span> How It Works
                </a>
              </li>
              <li>
                <Link to="/about" className="hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="text-purple-400 group-hover:translate-x-1 transition-transform">▶</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="text-purple-400 group-hover:translate-x-1 transition-transform">▶</span> Get Started
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-black text-purple-300 uppercase tracking-wider mb-4 flex items-center gap-2">
              <HiLightningBolt className="text-purple-400" /> Support
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="text-purple-400 group-hover:translate-x-1 transition-transform">▶</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="text-purple-400 group-hover:translate-x-1 transition-transform">▶</span> FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="text-purple-400 group-hover:translate-x-1 transition-transform">▶</span> Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="text-pink-400 group-hover:translate-x-1 transition-transform">▶</span> Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="text-pink-400 group-hover:translate-x-1 transition-transform">▶</span> Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-black text-purple-300 uppercase tracking-wider mb-4 flex items-center gap-2">
              <HiLightningBolt className="text-purple-400" /> Connect
            </h4>
            <div className="space-y-3 mb-6">
              <p className="flex items-center gap-2 text-gray-400">
                <FaEnvelope className="text-purple-400" />
                <a href="mailto:support@gamersintel.com" className="hover:text-purple-400 transition-colors">
                  support@gamersintel.com
                </a>
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                <FaMapMarkerAlt className="text-purple-400" />
                For Gamers, By Gamers
              </p>
            </div>
            
            <h5 className="text-sm font-bold text-purple-300 uppercase mb-3">Join Our Community</h5>
            <div className="flex gap-3">
              <a href="https://discord.gg/gamersintel" target="_blank" rel="noopener noreferrer" 
                className="btn btn-circle bg-purple-600 hover:bg-purple-500 border-0 text-white transition-all duration-300 hover:scale-110">
                <FaDiscord size={20} />
              </a>
              <a href="https://twitter.com/gamersintel" target="_blank" rel="noopener noreferrer" 
                className="btn btn-circle bg-purple-600 hover:bg-purple-500 border-0 text-white transition-all duration-300 hover:scale-110">
                <FaTwitter size={20} />
              </a>
              <a href="https://twitch.tv/gamersintel" target="_blank" rel="noopener noreferrer" 
                className="btn btn-circle bg-purple-600 hover:bg-purple-500 border-0 text-white transition-all duration-300 hover:scale-110">
                <FaTwitch size={20} />
              </a>
              <a href="https://youtube.com/@gamersintel" target="_blank" rel="noopener noreferrer" 
                className="btn btn-circle bg-purple-600 hover:bg-purple-500 border-0 text-white transition-all duration-300 hover:scale-110">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-purple-500/30 bg-black">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} <span className="text-purple-400 font-bold">GamersIntel</span>. All rights reserved. Your gaming memory system.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Built for gamers who love to</span>
              <span className="text-purple-400 font-semibold">remember</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
