import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaGamepad, FaTrophy, FaUser } from "react-icons/fa";
import { HiLightningBolt } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="navbar bg-gradient-to-r from-black via-gray-900 to-black shadow-xl border-b border-purple-500/30 backdrop-blur-md fixed top-0 z-50">
      {/* Mobile Dropdown */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-purple-300 hover:text-cyan-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-black border border-purple-500/50 rounded-lg w-52">
            <li><Link to="/" className="text-gray-300 hover:text-purple-400 font-semibold">Home</Link></li>
            <li><a href="#features" className="text-gray-300 hover:text-purple-400 font-semibold">Features</a></li>
            <li><a href="#how-it-works" className="text-gray-300 hover:text-purple-400 font-semibold">How It Works</a></li>
            <li><Link to="/about" className="text-gray-300 hover:text-purple-400 font-semibold">About</Link></li>
          </ul>
        </div>
        
        {/* Logo */}
        <Link to="/" className="btn text-xl gap-1 border-0 bg-transparent hover:bg-transparent"> 
          <img src="/images/logo.png" alt="GamersIntel Logo" className="w-10 h-10"/>
          <span className="text-primary font-extrabold text-2xl">Gamers</span><span className="text-secondary font-extrabold text-2xl">Intel</span>
                  <HiLightningBolt className="text-cyan-400 text-xl animate-pulse hidden sm:block" />

        </Link>
      </div>

      {/* Center Menu - Desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `font-bold uppercase tracking-wide transition-all duration-300 ${
                  isActive 
                    ? 'text-purple-400 bg-purple-500/20 border-b-2 border-purple-400' 
                    : 'text-gray-300 hover:text-purple-400 hover:bg-purple-500/10'
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <a 
              href="#features" 
              className="font-bold uppercase tracking-wide transition-all duration-300 text-gray-300 hover:text-purple-400 hover:bg-purple-500/10"
            >
              Features
            </a>
          </li>
          <li>
            <a 
              href="#how-it-works" 
              className="font-bold uppercase tracking-wide transition-all duration-300 text-gray-300 hover:text-purple-400 hover:bg-purple-500/10"
            >
              How It Works
            </a>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `font-bold uppercase tracking-wide transition-all duration-300 ${
                  isActive 
                    ? 'text-purple-400 bg-purple-500/20 border-b-2 border-purple-400' 
                    : 'text-gray-300 hover:text-purple-400 hover:bg-purple-500/10'
                }`
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Right Side - Get Started Button */}
      <div className="navbar-end gap-2">
        <NavLink  
          to="/login" 
          className="btn bg-purple-600 hover:bg-purple-700 border-0 text-white font-bold uppercase tracking-wider transition-colors"
        >
          <FaUser />
          <span className="hidden sm:inline">Get Started</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
