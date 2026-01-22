import { Link } from "react-router-dom";
import { FaGamepad, FaCheckCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const CTA = () => {
  const { user } = useContext(AuthContext);
  const benefits = [
    "Track unlimited games",
    "Rate & review",
    "Progress tracking",
    "Personal dashboard",
    "Custom collections",
    "100% Free forever",
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA Card */}
        <div className="bg-gradient-to-br from-gray-900/90 to-black/90 border border-purple-500/50 rounded-2xl p-12 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
          {/* Headline */}
          <h2 className="poetsen-one-regular text-4xl md:text-6xl text-white text-center mb-4">
            READY TO{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
              LEVEL UP?
            </span>
          </h2>

          <p className="galdeano-regular text-xl text-gray-300 text-center mb-8 max-w-2xl mx-auto">
            Join thousands of gamers tracking their gaming journey with
            GamersIntel
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-gray-300 bg-purple-500/10 border border-purple-500/20 rounded-lg p-3 hover:bg-purple-500/20 hover:scale-105 hover:border-purple-500/40 transition-all duration-300"
              >
                <FaCheckCircle className="text-green-400 flex-shrink-0" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {user ? (
              <Link
                to="/registration"
                className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50 text-white font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-3"
              >
                <FaGamepad className="text-xl" />
               Go To Your Dashboard
              </Link>
            ) : (
              <>
                <Link
                  to="/registration"
                  className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50 text-white font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-3"
                >
                  <FaGamepad className="text-xl" />
                  Start Free Now
                </Link>
                <Link
                  to="/login"
                  className="px-10 py-4 bg-transparent border-2 border-purple-500 rounded-lg hover:bg-purple-500/20 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 text-purple-300 hover:text-white font-bold uppercase tracking-wider transition-all duration-300"
                >
                  Sign In
                </Link>
              </>
            )}
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              No Credit Card Required
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Setup in Under 2 Minutes
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              5,000+ Happy Gamers
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gray-900/50 border border-purple-500/30 rounded-xl p-6 max-w-2xl hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
            <div className="flex items-center justify-center gap-1 text-yellow-400 mb-3">
              {[...Array(5)].map((_, i) => (
                <FaCheckCircle key={i} className="text-xl" />
              ))}
            </div>
            <p className="text-gray-300 italic mb-2">
              "GamersIntel has completely changed how I manage my gaming
              backlog. I'll never forget a game again!"
            </p>
            <p className="text-purple-400 font-semibold">- Alex M., Gamer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
