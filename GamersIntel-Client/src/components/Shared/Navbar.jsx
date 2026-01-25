import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import { MdDashboard, MdMessage } from "react-icons/md";
import { HiLightningBolt } from "react-icons/hi";
import { AuthContext } from "../../Context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
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
            <li><NavLink to="/" className="text-gray-300 hover:text-purple-400 font-semibold">Home</NavLink></li>
            <li><NavLink to="/about" className="text-gray-300 hover:text-purple-400 font-semibold">About</NavLink></li>
          </ul>
        </div>
        
        {/* Logo */}
        <NavLink to="/" className="btn bitcount-single text-xl gap-1 border-0 bg-transparent hover:bg-transparent"> 
          <img src="/images/logo.png" alt="GamersIntel Logo" className="w-10 h-10"/>
          <span className="text-primary font-extrabold text-2xl">Gamers</span><span className="text-secondary font-extrabold text-2xl">Intel</span>
                  <HiLightningBolt className="text-cyan-400 text-xl animate-pulse hidden sm:block" />

        </NavLink>
      </div>

      {/* Center Menu - Desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <NavLink 
              to="/" 
              className="font-bold"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className="font-bold" 
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Right Side - Get Started Button or User Profile */}
      <div className="navbar-end pr-5 gap-2">
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ring-2 ring-purple-500 ring-offset-2 ring-offset-black">
              <div className="w-10 rounded-full">
                <img
                  alt={user.displayName || "User"}
                  src={user.photoURL || "https://ui-avatars.com/api/?name=" + (user.displayName || "User") + "&background=9333ea&color=fff&bold=true"}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-2xl bg-black border border-purple-500/50 rounded-lg w-56"
            >
              <li className="menu-title px-4 py-2">
                <span className="text-purple-400 font-bold text-sm">
                  {user.displayName || "Gamer"}
                </span>
                <span className="text-gray-500 text-xs">{user.email}</span>
              </li>
              <div className="divider my-1"></div>
              <li>
                <NavLink to="/dashboard" className="text-gray-300 hover:text-purple-400 hover:bg-purple-500/20 transition-colors">
                  <MdDashboard className="text-lg" />
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/profile" className="text-gray-300 hover:text-purple-400 hover:bg-purple-500/20 transition-colors">
                  <FaUser className="text-lg" />
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/messages" className="text-gray-300 hover:text-purple-400 hover:bg-purple-500/20 transition-colors">
                  <MdMessage className="text-lg" />
                  Messages
                </NavLink>
              </li>
              <div className="divider my-1"></div>
              <li>
                <button
                  onClick={logout}
                  className="text-red-400 hover:text-red-300 hover:bg-red-500/20 transition-colors font-semibold"
                >
                  <FaSignOutAlt className="text-lg" />
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <NavLink  
            to="/login" 
            className="btn bg-purple-600 hover:bg-purple-700 border-0 text-white font-bold uppercase tracking-wider transition-colors"
          >
            <FaUser />
            <span className="hidden sm:inline">Get Started</span>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
