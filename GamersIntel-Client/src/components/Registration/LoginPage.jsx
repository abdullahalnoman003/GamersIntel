import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash, FaGamepad, FaTrophy } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../../Firebase/firebase.init";
import useAxios from "../../Hooks/useAxios";

const LoginPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const provider = new GoogleAuthProvider();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const axiosInstance = useAxios();

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <span className="loading loading-bars loading-lg text-primary"></span>
          <p className="text-xl font-semibold text-primary mt-4">
            Logging in... Please wait.
          </p>
        </div>
      </div>
    );
  }

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const token = await user.getIdToken();
      localStorage.setItem("access-token", token);

      const userInfo = {
        name: user.displayName,
        email: user.email.toLowerCase(),
        photoURL: user.photoURL || null,
        gamerTag: null,
        bio: null,
        favoriteGenres: null,
        platforms: null,
        country: null,
        joinDate: new Date().toISOString(),
        lastLogin: new Date().toISOString(),
      };
      axiosInstance.post("/users", userInfo);
      setLoading(false);
      toast.success(`Welcome to GamersIntel, ${user.displayName}!`);
    } catch (error) {
      setLoading(false);
      toast.error(error.message || "Google sign-in failed");
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    sessionStorage.setItem("ResetEmail", email);
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);

      toast.success(`Login Successful! Welcome to GamersIntel,!`);
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-linear-to-b from-base-300 via-base-100 to-base-300 flex justify-center items-center py-10 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="grid md:grid-cols-2 shadow-2xl bg-base-100/90 backdrop-blur-xl rounded-3xl border border-primary/30 max-w-4xl w-full overflow-hidden relative z-10">
          <div className="hidden md:flex bg-linear-to-b from-primary to-primary relative overflow-hidden items-center justify-center p-10">
            <div className="absolute inset-0 bg-black/50 z-1 overflow-hidden"></div>
            <img
              src="/images/loginImg.jpg"
              alt="Gaming"
              className="absolute inset-0 w-full h-full object-cover "
            />

            <div className="relative z-10 text-center space-y-6">
              <FaGamepad className="text-8xl text-primary-content/90 mx-auto" />
              <h2 className="text-4xl uppercase font-bold bitcount-single tracking-wider">
                <span className='text-primary'>Gamers</span><span className='text-secondary'>Intel</span>
              </h2>
              <p className="text-base text-accent">Your Gaming Memory System</p>
            </div>

            {/* Decorative Corner Elements */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary-content/20"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary-content/20"></div>
          </div>

          {/* Right Side - Login Form */}
          <div className="p-10 bg-linear-to-b from-base-100 to-base-300">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-extrabold text-base-content mb-2">
                Welcome Back
              </h1>
              <p className="text-sm text-base-content/60">
                Sign in to track your gaming journey
              </p>
              <div className="mt-4 h-0.5 w-20 bg-primary mx-auto"></div>
            </div>

            <form onSubmit={handleEmailLogin} className="space-y-5">
              {/* Email */}
              <div className="form-control">
                <label className="label font-semibold text-base-content text-sm">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="input bg-base-200 border border-primary/30 focus:border-primary focus:outline-none w-full text-base-content placeholder-base-content/60 transition-colors"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password */}
              <div className="form-control">
                <label className="label font-semibold text-base-content text-sm">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="input bg-base-200 border border-primary/30 focus:border-primary focus:outline-none w-full pr-10 text-base-content placeholder-base-content/60 transition-colors"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-3 text-base-content/60 hover:text-base-content transition-colors z-10"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <FaEyeSlash size={18} />
                    ) : (
                      <FaEye size={18} />
                    )}
                  </button>
                </div>
                <div className="text-sm mt-2 text-right">
                  <Link
                    to="/forgot-password"
                    className="text-primary hover:text-accent transition-colors"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="btn w-full bg-primary hover:bg-primary/80 text-base-content font-bold uppercase tracking-wider border-0 transition-colors"
              >
                Login
              </button>

              <div className="divider text-xs text-base-content/60">OR</div>

              {/* Google Button */}
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="btn bg-base-200 border border-base-300 hover:bg-base-300 w-full flex items-center justify-center gap-2 text-base-content transition-colors"
              >
                <FcGoogle size={20} />
                Continue with Google
              </button>

              {/* Redirect */}
              <p className="text-center text-sm text-base-content/60 mt-6">
                New to GamersIntel?
                <Link
                  to="/registration"
                  className="text-primary hover:text-accent ml-2 font-semibold transition-colors"
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
