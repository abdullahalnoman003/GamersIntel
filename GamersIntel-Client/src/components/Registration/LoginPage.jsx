import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useLocation, useNavigate, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaGamepad, FaTrophy } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { HiLightningBolt } from "react-icons/hi";
import { auth } from "../../Firebase/firebase.init";

const LoginPage = () => {
const provider = new GoogleAuthProvider();
const navigate = useNavigate();
const location = useLocation();
const from = location.state?.from?.pathname || "/";
const [showPassword, setShowPassword] = useState(false);
const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
    .then(() => {
        toast.success("Login Successful! ");
        setTimeout(() => {
            navigate(from, { replace: true });
        }, 1000);
    })
    .catch((error) => {
        toast.error(error.message || "Google sign-in failed", );
    });
};
const handleEmailLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    sessionStorage.setItem("ResetEmail", email);

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Login Successful!");
        setTimeout(() => {
            navigate(from, { replace: true });
        }, 1000);
      })
      .catch((error) => {
        toast.error(error.message);
      });
};

return (
    <>
      <Toaster position="top-center" reverseOrder={true} />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 flex justify-center items-center py-10 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="grid md:grid-cols-2 shadow-2xl bg-black/90 backdrop-blur-xl rounded-3xl border border-purple-500/30 max-w-4xl w-full overflow-hidden relative z-10">
          <div className="hidden md:flex bg-gradient-to-b from-purple-600 to-indigo-700 relative overflow-hidden items-center justify-center p-10">
            <div className="absolute inset-0 bg-black/20"></div>

            <img 
              src="/images/loginImg.jpg" 
              alt="Gaming" 
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            
           
            <div className="relative z-10 text-center space-y-6">
              <FaGamepad className="text-8xl text-white/90 mx-auto" />
              <h2 className="text-4xl font-black text-white uppercase tracking-wider">
                GamersIntel
              </h2>
              <p className="text-base text-purple-100">
                Your Gaming Memory System
              </p>
            </div>
            
            {/* Decorative Corner Elements */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-white/20"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-white/20"></div>
          </div>

          {/* Right Side - Login Form */}
          <div className="p-10 bg-gradient-to-b from-black to-gray-900">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-extrabold text-white mb-2">
                Welcome Back
              </h1>
              <p className="text-sm text-gray-400">
                Sign in to track your gaming journey
              </p>
              <div className="mt-4 h-0.5 w-20 bg-purple-500 mx-auto"></div>
            </div>

            <form onSubmit={handleEmailLogin} className="space-y-5">
              {/* Email */}
              <div className="form-control">
                <label className="label font-semibold text-gray-300 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="input bg-gray-800/80 border border-purple-500/30 focus:border-purple-500 focus:outline-none w-full text-white placeholder-gray-500 transition-colors"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password */}
              <div className="form-control">
                <label className="label font-semibold text-gray-300 text-sm">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="input bg-gray-800/80 border border-purple-500/30 focus:border-purple-500 focus:outline-none w-full pr-10 text-white placeholder-gray-500 transition-colors"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-3 text-gray-400 hover:text-white transition-colors z-10"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                  </button>
                </div>
                <div className="text-sm mt-2 text-right">
                  <Link
                    to="/forgot-password"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="btn w-full bg-purple-600 hover:bg-purple-700 text-white font-bold uppercase tracking-wider border-0 transition-colors"
              >
                Login
              </button>

              <div className="divider text-xs text-gray-600">OR</div>

              {/* Google Button */}
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="btn bg-gray-800 border border-gray-700 hover:bg-gray-700 w-full flex items-center justify-center gap-2 text-white transition-colors"
              >
                <FcGoogle size={20} />
                Continue with Google
              </button>

              {/* Redirect */}
              <p className="text-center text-sm text-gray-400 mt-6">
                New to GamersIntel?
                <Link
                  to="/register"
                  className="text-purple-400 hover:text-purple-300 ml-2 font-semibold transition-colors"
                >
                  Create Account
                </Link>
              </p>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default LoginPage;
