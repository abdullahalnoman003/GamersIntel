import React, { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthContext";
import { FaUser, FaEnvelope, FaEdit, FaSave, FaTimes, FaCamera, FaGamepad, FaTrophy, FaGlobe, FaMobileAlt } from "react-icons/fa";
import { SiPlaystation, SiNintendoswitch } from "react-icons/si";
import { GiPc } from "react-icons/gi";
import useDocumentTitle from "../../Hooks/useDocumentTitle";

const Profile = () => {
  useDocumentTitle("GamersIntel - Profile");
  const { user } = useContext(AuthContext);
  
  // State for user profile data
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userProfile, setUserProfile] = useState({
    displayName: user?.displayName || "",
    photoURL: user?.photoURL || "",
    email: user?.email || "",
    gamerTag: "",
    bio: "",
    favoriteGenres: [],
    platforms: [],
    country: "",
    joinDate: user?.metadata?.creationTime || "",
  });

  const availableGenres = [
    "Action", "Adventure", "RPG", "Strategy", "Sports", 
    "Racing", "Fighting", "Shooter", "Puzzle", "Horror"
  ];

  const availablePlatforms = [
    { name: "PlayStation", icon: SiPlaystation },
    { name: "Xbox", icon: FaGamepad },
    { name: "Nintendo", icon: SiNintendoswitch },
    { name: "PC", icon: GiPc },
    { name: "Mobile", icon: FaMobileAlt },
  ];

  // Update any field in the profile (name, bio, country, etc.)
  const handleInputChange = (field, value) => {
    setUserProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Save profile changes to Firebase
  const handleSaveProfile = async () => {
    setLoading(true);
    try {
      // Update Firebase profile with new name and photo
      await updateProfile(user, {
        displayName: userProfile.displayName,
        photoURL: userProfile.photoURL,
      });

      // TODO: Update backend when API is ready
      // const updateData = {
      //   name: userProfile.displayName,
      //   photoURL: userProfile.photoURL,
      //   gamerTag: userProfile.gamerTag,
      //   bio: userProfile.bio,
      //   favoriteGenres: userProfile.favoriteGenres,
      //   platforms: userProfile.platforms,
      //   country: userProfile.country,
      // };
      // await axiosSecure.patch(`/users/update?email=${user.email}`, updateData);
      
      setIsEditing(false);
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error(error.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  // Add or remove a genre from favorites
  const toggleGenre = (genre) => {
    const alreadySelected = userProfile.favoriteGenres.includes(genre);
    
    if (alreadySelected) {
      // Remove genre from list
      setUserProfile(prev => ({
        ...prev,
        favoriteGenres: prev.favoriteGenres.filter(g => g !== genre)
      }));
    } else {
      // Add genre to list
      setUserProfile(prev => ({
        ...prev,
        favoriteGenres: [...prev.favoriteGenres, genre]
      }));
    }
  };

  // Add or remove a platform from connected platforms
  const togglePlatform = (platform) => {
    const alreadyConnected = userProfile.platforms.includes(platform);
    
    if (alreadyConnected) {
      // Disconnect platform
      setUserProfile(prev => ({
        ...prev,
        platforms: prev.platforms.filter(p => p !== platform)
      }));
    } else {
      // Connect platform
      setUserProfile(prev => ({
        ...prev,
        platforms: [...prev.platforms, platform]
      }));
    }
  };

  // Calculate profile completion percentage
  const getProfileCompletion = () => {
    let completed = 0;
    const total = 7; // Total fields to complete
    
    if (userProfile.displayName) completed++;
    if (userProfile.gamerTag) completed++;
    if (userProfile.photoURL && userProfile.photoURL !== '') completed++;
    if (userProfile.bio) completed++;
    if (userProfile.country) completed++;
    if (userProfile.platforms.length > 0) completed++;
    if (userProfile.favoriteGenres.length > 0) completed++;
    
    return Math.round((completed / total) * 100);
  };

  // Format date to readable string (e.g., "January 30, 2026")
  const formatDate = (dateString) => {
    if (!dateString) return "Not available";
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-black pt-20 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block relative">
            <h1 className="poetsen-one-regular text-4xl md:text-5xl text-white mb-3 relative z-10">
              MY PROFILE
            </h1>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 rounded-full opacity-70"></div>
          </div>
          <p className="galdeano-regular text-gray-400 text-lg mt-6">
            Manage your gaming profile and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-purple-500/30 rounded-2xl p-6 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-500 backdrop-blur-sm">
              {/* Profile Header */}
              <div className="text-center mb-6">
                <div className="relative inline-block group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relative w-32 h-32 mx-auto rounded-full bg-purple-500/20 p-1 ring-2 ring-purple-500/50">
                    <img
                      src={userProfile.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(userProfile.displayName || 'User')}&background=9333ea&color=fff&size=128`}
                      alt="Profile"
                      className="w-full h-full rounded-full object-cover border-2 border-purple-500/50"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(userProfile.displayName || 'User')}&background=9333ea&color=fff&size=128`;
                      }}
                    />
                  </div>
                  {isEditing && (
                    <button 
                      className="absolute bottom-0 right-0 w-10 h-10 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:shadow-purple-500/50 hover:rotate-12"
                      title="Upload profile picture"
                    >
                      <FaCamera className="text-sm" />
                    </button>
                  )}
                </div>
                <h2 className="poetsen-one-regular text-2xl text-white mt-4 hover:text-purple-400 transition-colors duration-300">
                  {userProfile.displayName || "Gamer"}
                </h2>
                {userProfile.gamerTag && (
                  <p className="galdeano-regular text-purple-400 text-sm mt-1 hover:text-pink-400 transition-colors duration-300">
                    @{userProfile.gamerTag}
                  </p>
                )}
                <p className="galdeano-regular text-gray-400 text-sm mt-2">{userProfile.email}</p>
              </div>

              {/* Profile Completion Progress */}
              <div className="mb-4 p-4 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="galdeano-regular text-xs text-gray-400">Profile Completion</p>
                  <p className="galdeano-regular font-bold text-white text-sm">{getProfileCompletion()}%</p>
                </div>
                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${getProfileCompletion()}%` }}
                  ></div>
                </div>
              </div>

              {/* Gaming Stats */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg hover:bg-purple-500/20 transition-all duration-300 group cursor-pointer">
                  <FaTrophy className="text-yellow-400 text-xl " />
                  <div className="flex-1">
                    <p className="galdeano-regular text-xs text-gray-400">Member Since</p>
                    <p className="galdeano-regular font-semibold text-white text-sm">{formatDate(userProfile.joinDate)}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg hover:bg-purple-500/20 transition-all duration-300 group cursor-pointer">
                  <FaGamepad className="text-cyan-400 text-xl  " />
                  <div className="flex-1">
                    <p className="galdeano-regular text-xs text-gray-400">Platforms</p>
                    <p className="galdeano-regular font-semibold text-white text-sm">{userProfile.platforms.length || 0} Connected</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg hover:bg-purple-500/20 transition-all duration-300 group cursor-pointer">
                  <div className="text-pink-400 text-xl">🎮</div>
                  <div className="flex-1">
                    <p className="galdeano-regular text-xs text-gray-400">Favorite Genres</p>
                    <p className="galdeano-regular font-semibold text-white text-sm">{userProfile.favoriteGenres.length || 0} Selected</p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6">
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg text-white galdeano-regular font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <FaEdit className="group-hover:rotate-12 transition-transform" /> Edit Profile
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button
                      onClick={handleSaveProfile}
                      disabled={loading}
                      className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white galdeano-regular font-bold transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 shadow-md hover:shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <FaSave className={loading ? "animate-pulse" : ""} /> {loading ? "Saving..." : "Save"}
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-purple-500/30 rounded-lg text-white galdeano-regular font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <FaTimes />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Profile Information */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-purple-500/30 rounded-2xl p-6 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-500 backdrop-blur-sm">
              <div className="mb-8">
                <h3 className="poetsen-one-regular text-2xl text-white mb-2 flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center shadow-md">
                    <FaUser className="text-white" />
                  </div>
                  <span className="group-hover:text-purple-400 transition-colors duration-300">Gamer Information</span>
                </h3>
                <div className="h-0.5 w-24 bg-gradient-to-r from-purple-600 to-transparent rounded-full animate-pulse"></div>
              </div>

              <div className="space-y-7">
                {/* Display Name & Gamer Tag Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Display Name */}
                  <div className="w-full group">
                    <label className="galdeano-regular text-sm font-semibold text-purple-400 mb-2 flex items-center gap-2 group-hover:text-pink-400 transition-colors duration-300">
                      <FaUser className="text-xs group-hover:scale-110 transition-transform duration-300" /> Display Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-gray-800 border border-purple-500/30 rounded-lg text-white galdeano-regular focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-300 hover:border-purple-500/50"
                        value={userProfile.displayName}
                        onChange={(e) => handleInputChange('displayName', e.target.value)}
                        placeholder="Enter your display name"
                      />
                    ) : (
                      <div className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/20 rounded-lg text-white galdeano-regular transition-all duration-300 hover:bg-gray-800/70 hover:border-purple-500/30">
                        {userProfile.displayName || "Not set"}
                      </div>
                    )}
                  </div>

                  {/* Gamer Tag */}
                  <div className="w-full group">
                    <label className="galdeano-regular text-sm font-semibold text-purple-400 mb-2 flex items-center gap-2 group-hover:text-pink-400 transition-colors duration-300">
                      <FaGamepad className="text-xs " /> Gamer Tag
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-gray-800 border border-purple-500/30 rounded-lg text-white galdeano-regular focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-300 hover:border-purple-500/50"
                        value={userProfile.gamerTag}
                        onChange={(e) => handleInputChange('gamerTag', e.target.value)}
                        placeholder="@yourgamertag"
                      />
                    ) : (
                      <div className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/20 rounded-lg text-white galdeano-regular transition-all duration-300 hover:bg-gray-800/70 hover:border-purple-500/30">
                        {userProfile.gamerTag || "Not set"}
                      </div>
                    )}
                  </div>
                </div>

                {/* Email (Read-only) */}
                <div className="w-full">
                  <label className="galdeano-regular text-sm font-semibold text-purple-400 mb-2 flex items-center gap-2">
                    <FaEnvelope className="text-xs" /> Email Address
                  </label>
                  <div className="w-full px-4 py-3 bg-gray-800/30 border border-gray-700 rounded-lg text-gray-400 galdeano-regular cursor-not-allowed">
                    {userProfile.email}
                  </div>
                  <p className="galdeano-regular text-xs text-gray-500 mt-1">Email cannot be changed</p>
                </div>

                {/* Country */}
                <div className="w-full group">
                  <label className="galdeano-regular text-sm font-semibold text-purple-400 mb-2 flex items-center gap-2 group-hover:text-pink-400 transition-colors duration-300">
                    <FaGlobe className="text-xs group-hover:scale-110 group-hover:rotate-180 transition-all duration-500" /> Country/Region
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800 border border-purple-500/30 rounded-lg text-white galdeano-regular focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-300 hover:border-purple-500/50"
                      value={userProfile.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                      placeholder="Enter your country"
                    />
                  ) : (
                    <div className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/20 rounded-lg text-white galdeano-regular transition-all duration-300 hover:bg-gray-800/70 hover:border-purple-500/30">
                      {userProfile.country || "Not set"}
                    </div>
                  )}
                </div>

                {/* Gaming Platforms */}
                <div className="w-full group">
                  <label className="galdeano-regular text-sm font-semibold text-purple-400 mb-3 flex items-center gap-2 group-hover:text-pink-400 transition-colors duration-300">
                    <FaGamepad className="text-xs " /> Gaming Platforms
                  </label>
                  {isEditing ? (
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                      {availablePlatforms.map((platform) => {
                        const Icon = platform.icon;
                        const isSelected = userProfile.platforms.includes(platform.name);
                        return (
                          <button
                            key={platform.name}
                            type="button"
                            onClick={() => togglePlatform(platform.name)}
                            className={`p-4 rounded-lg border-2 transition-all duration-300 flex flex-col items-center gap-2 hover:scale-105 active:scale-95 ${
                              isSelected
                                ? 'bg-gradient-to-br from-purple-600 to-pink-600 border-purple-500 text-white shadow-lg shadow-purple-500/30 animate-in'
                                : 'bg-gray-800 border-purple-500/30 text-gray-400 hover:border-purple-500/60 hover:shadow-md'
                            }`}
                            title={`Click to ${isSelected ? 'disconnect' : 'connect'} ${platform.name}`}
                          >
                            <Icon className={`text-2xl transition-transform duration-300 ${isSelected ? 'scale-110' : ''}`} />
                            <span className="galdeano-regular text-xs font-semibold">{platform.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {userProfile.platforms.length > 0 ? (
                        userProfile.platforms.map((platform) => {
                          const platformData = availablePlatforms.find(p => p.name === platform);
                          const Icon = platformData?.icon || FaGamepad;
                          return (
                            <div
                              key={platform}
                              className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg text-purple-300 galdeano-regular flex items-center gap-2 hover:border-purple-500/50 transition-all duration-300"
                            >
                              <Icon className="text-sm group-hover:scale-110 transition-transform" />
                              <span className="text-sm">{platform}</span>
                            </div>
                          );
                        })
                      ) : (
                        <p className="galdeano-regular text-gray-500 text-sm">No platforms selected</p>
                      )}
                    </div>
                  )}
                </div>

                {/* Favorite Genres */}
                <div className="w-full group">
                  <label className="galdeano-regular text-sm font-semibold text-purple-400 mb-3 flex items-center gap-2 group-hover:text-pink-400 transition-colors duration-300">
                    <FaTrophy className="text-xs " /> Favorite Genres
                  </label>
                  {isEditing ? (
                    <div className="flex flex-wrap gap-2">
                      {availableGenres.map((genre) => {
                        const isSelected = userProfile.favoriteGenres.includes(genre);
                        return (
                          <button
                            key={genre}
                            type="button"
                            onClick={() => toggleGenre(genre)}
                            className={`px-4 py-2 rounded-lg border transition-all duration-300 galdeano-regular text-sm hover:scale-105 active:scale-95 ${
                              isSelected
                                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 border-cyan-500 text-white shadow-lg shadow-cyan-500/30 animate-in'
                                : 'bg-gray-800 border-purple-500/30 text-gray-400 hover:border-purple-500/60 hover:shadow-md'
                            }`}
                            title={`Click to ${isSelected ? 'remove' : 'add'} ${genre}`}
                          >
                            {genre}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {userProfile.favoriteGenres.length > 0 ? (
                        userProfile.favoriteGenres.map((genre) => (
                          <div
                            key={genre}
                            className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg text-cyan-300 galdeano-regular text-sm hover:border-cyan-500/50 transition-all duration-300"
                          >
                            {genre}
                          </div>
                        ))
                      ) : (
                        <p className="galdeano-regular text-gray-500 text-sm">No genres selected</p>
                      )}
                    </div>
                  )}
                </div>

                {/* Photo URL (only in edit mode) */}
                {isEditing && (
                  <div className="w-full group animate-in">
                    <label className="galdeano-regular text-sm font-semibold text-purple-400 mb-2 flex items-center gap-2 group-hover:text-pink-400 transition-colors duration-300">
                      <FaCamera className="text-xs group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" /> Profile Photo URL
                    </label>
                    <input
                      type="url"
                      className="w-full px-4 py-3 bg-gray-800 border border-purple-500/30 rounded-lg text-white galdeano-regular focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-300 hover:border-purple-500/50"
                      value={userProfile.photoURL}
                      onChange={(e) => handleInputChange('photoURL', e.target.value)}
                      placeholder="https://example.com/your-photo.jpg"
                    />
                    <p className="galdeano-regular text-xs text-gray-500 mt-1">📸 Paste a valid image URL to update your avatar</p>
                  </div>
                )}

                {/* Bio */}
                <div className="w-full group">
                  <label className="galdeano-regular text-sm font-semibold text-purple-400 mb-2 flex items-center gap-2 group-hover:text-pink-400 transition-colors duration-300">
                    <FaUser className="text-xs group-hover:scale-110 transition-transform duration-300" /> Bio
                  </label>
                  {isEditing ? (
                    <>
                      <textarea
                        className="w-full px-4 py-3 bg-gray-800 border border-purple-500/30 rounded-lg text-white galdeano-regular focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-300 resize-none h-32 hover:border-purple-500/50"
                        value={userProfile.bio}
                        onChange={(e) => handleInputChange('bio', e.target.value)}
                        placeholder="Tell us about yourself and your gaming journey..."
                        maxLength={500}
                      />
                      <div className="flex justify-between items-center mt-1">
                        <p className="galdeano-regular text-xs text-gray-500">
                          ✍️ Share your gaming story
                        </p>
                        <p className={`galdeano-regular text-xs font-semibold ${
                          userProfile.bio?.length > 450 ? 'text-yellow-400' : 'text-gray-500'
                        }`}>
                          {userProfile.bio?.length || 0}/500
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/20 rounded-lg text-white galdeano-regular min-h-[8rem] transition-all duration-300 hover:bg-gray-800/70 hover:border-purple-500/30">
                      {userProfile.bio || "No bio available"}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
