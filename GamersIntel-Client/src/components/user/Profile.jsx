import React, { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthContext";
import { FaUser, FaEnvelope, FaEdit, FaSave, FaTimes, FaCamera, FaGamepad, FaTrophy, FaGlobe, FaMobileAlt } from "react-icons/fa";
import { SiPlaystation, SiNintendoswitch } from "react-icons/si";
import { GiPc } from "react-icons/gi";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import useAxios from "../../Hooks/useAxios";

const Profile = () => {
  useDocumentTitle("GamersIntel - Profile");
  const { user } = useContext(AuthContext);
  const axiosInstance = useAxios();
  
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
      const updateData = {
        name: userProfile.displayName,
        photoURL: userProfile.photoURL,
        gamerTag: userProfile.gamerTag,
        bio: userProfile.bio,
        favoriteGenres: userProfile.favoriteGenres,
        platforms: userProfile.platforms,
        country: userProfile.country,
      };
      await axiosInstance.patch(`/users/update?email=${user.email}`, updateData);
      
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
    <div className="min-h-screen bg-base-100 pt-20 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block relative">
            <h1 className="poetsen-one-regular text-4xl md:text-5xl text-base-content mb-3 relative z-10">
              MY PROFILE
            </h1>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-primary via-accent to-secondary rounded-full opacity-70"></div>
          </div>
          <p className="galdeano-regular text-base-content/60 text-lg mt-6">
            Manage your gaming profile and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-linear-to-br from-base-200/80 to-base-200/40 border border-primary/30 rounded-2xl p-6 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 backdrop-blur-sm">
              {/* Profile Header */}
              <div className="text-center mb-6">
                <div className="relative inline-block group">
                  <div className="absolute inset-0 bg-linear-to-r from-primary via-accent to-secondary rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relative w-32 h-32 mx-auto rounded-full bg-primary/20 p-1 ring-2 ring-primary/50">
                    <img
                      src={userProfile.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(userProfile.displayName || 'User')}&background=9333ea&color=fff&size=128`}
                      alt="Profile"
                      className="w-full h-full rounded-full object-cover border-2 border-primary/50"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(userProfile.displayName || 'User')}&background=9333ea&color=fff&size=128`;
                      }}
                    />
                  </div>
                </div>
                <h2 className="poetsen-one-regular text-2xl text-base-content mt-4 hover:text-primary transition-colors duration-300">
                  {userProfile.displayName || "Gamer"}
                </h2>
                {userProfile.gamerTag && (
                  <p className="galdeano-regular text-primary text-sm mt-1 hover:text-accent transition-colors duration-300">
                    @{userProfile.gamerTag}
                  </p>
                )}
                <p className="galdeano-regular text-base-content/60 text-sm mt-2">{userProfile.email}</p>
              </div>

              {/* Profile Completion Progress */}
              <div className="mb-4 p-4 bg-linear-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="galdeano-regular text-xs text-base-content/60">Profile Completion</p>
                  <p className="galdeano-regular font-bold text-base-content text-sm">{getProfileCompletion()}%</p>
                </div>
                <div className="w-full h-2 bg-base-300 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-linear-to-r from-primary via-accent to-secondary rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${getProfileCompletion()}%` }}
                  ></div>
                </div>
              </div>

              {/* Gaming Stats */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-primary/10 border border-primary/20 rounded-lg hover:bg-primary/20 transition-all duration-300 group cursor-pointer">
                  <FaTrophy className="text-warning text-xl " />
                  <div className="flex-1">
                    <p className="galdeano-regular text-xs text-base-content/60">Member Since</p>
                    <p className="galdeano-regular font-semibold text-base-content text-sm">{formatDate(userProfile.joinDate)}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-primary/10 border border-primary/20 rounded-lg hover:bg-primary/20 transition-all duration-300 group cursor-pointer">
                  <FaGamepad className="text-secondary text-xl  " />
                  <div className="flex-1">
                    <p className="galdeano-regular text-xs text-base-content/60">Platforms</p>
                    <p className="galdeano-regular font-semibold text-base-content text-sm">{userProfile.platforms.length || 0} Connected</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-primary/10 border border-primary/20 rounded-lg hover:bg-primary/20 transition-all duration-300 group cursor-pointer">
                  <div className="text-accent text-xl">🎮</div>
                  <div className="flex-1">
                    <p className="galdeano-regular text-xs text-base-content/60">Favorite Genres</p>
                    <p className="galdeano-regular font-semibold text-base-content text-sm">{userProfile.favoriteGenres.length || 0} Selected</p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6">
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="w-full px-6 py-3 bg-linear-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 rounded-lg text-base-content galdeano-regular font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0">
                  
                    <FaEdit className="group-hover:rotate-12 transition-transform" /> Edit Profile
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button
                      onClick={handleSaveProfile}
                      disabled={loading}
                      className="flex-1 px-6 py-3 bg-success hover:bg-success/90 rounded-lg text-black galdeano-regular font-bold transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 shadow-md hover:shadow-lg hover:shadow-success/30 hover:-translate-y-0.5 active:translate-y-0 ">
                      <FaSave className={loading ? "animate-pulse" : ""} /> {loading ? "Saving..." : "Save"}
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="px-6 py-3 bg-base-300 hover:bg-base-200 border border-primary/30 rounded-lg text-base-content galdeano-regular font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:-translate-y-0.5 active:translate-y-0">
                    
                      <FaTimes />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Profile Information */}
          <div className="lg:col-span-2">
            <div className="bg-linear-to-br from-base-200/80 to-base-200/40 border border-primary/30 rounded-2xl p-6 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 backdrop-blur-sm">
              <div className="mb-8">
                <h3 className="poetsen-one-regular text-2xl text-base-content mb-2 flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-linear-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-md">
                    <FaUser className="text-base-content" />
                  </div>
                  <span className="group-hover:text-primary transition-colors duration-300">Gamer Information</span>
                </h3>
                <div className="h-0.5 w-24 bg-linear-to-r from-primary to-transparent rounded-full animate-pulse"></div>
              </div>

              <div className="space-y-7">
                {/* Display Name & Gamer Tag Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Display Name */}
                  <div className="w-full group">
                    <label className="galdeano-regular text-sm font-semibold text-primary mb-2 flex items-center gap-2 group-hover:text-accent transition-colors duration-300">
                      <FaUser className="text-xs group-hover:scale-110 transition-transform duration-300" /> Display Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-base-300 border border-primary/30 rounded-lg text-base-content galdeano-regular focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 hover:border-primary/50"
                        value={userProfile.displayName}
                        onChange={(e) => handleInputChange('displayName', e.target.value)}
                        placeholder="Enter your display name"
                      />
                    ) : (
                      <div className="w-full px-4 py-3 bg-base-300/50 border border-primary/20 rounded-lg text-base-content galdeano-regular transition-all duration-300 hover:bg-base-300/70 hover:border-primary/30">
                        {userProfile.displayName || "Not set"}
                      </div>
                    )}
                  </div>

                  {/* Gamer Tag */}
                  <div className="w-full group">
                    <label className="galdeano-regular text-sm font-semibold text-primary mb-2 flex items-center gap-2 group-hover:text-accent transition-colors duration-300">
                      <FaGamepad className="text-xs " /> Gamer Tag
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-base-300 border border-primary/30 rounded-lg text-base-content galdeano-regular focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 hover:border-primary/50"
                        value={userProfile.gamerTag}
                        onChange={(e) => handleInputChange('gamerTag', e.target.value)}
                        placeholder="@yourgamertag"
                      />
                    ) : (
                      <div className="w-full px-4 py-3 bg-base-300/50 border border-primary/20 rounded-lg text-base-content galdeano-regular transition-all duration-300 hover:bg-base-300/70 hover:border-primary/30">
                        {userProfile.gamerTag || "Not set"}
                      </div>
                    )}
                  </div>
                </div>

                {/* Email (Read-only) */}
                <div className="w-full">
                  <label className="galdeano-regular text-sm font-semibold text-primary mb-2 flex items-center gap-2">
                    <FaEnvelope className="text-xs" /> Email Address
                  </label>
                  <div className="w-full px-4 py-3 bg-base-300/30 border border-base-content/30 rounded-lg text-base-content/60 galdeano-regular cursor-not-allowed">
                    {userProfile.email}
                  </div>
                  <p className="galdeano-regular text-xs text-base-content/50 mt-1">Email cannot be changed</p>
                </div>

                {/* Country */}
                <div className="w-full group">
                  <label className="galdeano-regular text-sm font-semibold text-primary mb-2 flex items-center gap-2 group-hover:text-accent transition-colors duration-300">
                    <FaGlobe className="text-xs group-hover:scale-110 group-hover:rotate-180 transition-all duration-500" /> Country/Region
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-base-300 border border-primary/30 rounded-lg text-base-content galdeano-regular focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 hover:border-primary/50"
                      value={userProfile.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                      placeholder="Enter your country"
                    />
                  ) : (
                    <div className="w-full px-4 py-3 bg-base-300/50 border border-primary/20 rounded-lg text-base-content galdeano-regular transition-all duration-300 hover:bg-base-300/70 hover:border-primary/30">
                      {userProfile.country || "Not set"}
                    </div>
                  )}
                </div>

                {/* Gaming Platforms */}
                <div className="w-full group">
                  <label className="galdeano-regular text-sm font-semibold text-primary mb-3 flex items-center gap-2 group-hover:text-accent transition-colors duration-300">
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
                                ? 'bg-linear-to-br from-primary to-accent border-primary text-base-content shadow-lg shadow-primary/30 animate-in'
                                : 'bg-base-300 border-primary/30 text-base-content/60 hover:border-primary/60 hover:shadow-md'
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
                              className="px-4 py-2 bg-linear-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-lg text-primary galdeano-regular flex items-center gap-2 hover:border-primary/50 transition-all duration-300">
                            
                              <Icon className="text-sm group-hover:scale-110 transition-transform" />
                              <span className="text-sm">{platform}</span>
                            </div>
                          );
                        })
                      ) : (
                        <p className="galdeano-regular text-base-content/50 text-sm">No platforms selected</p>
                      )}
                    </div>
                  )}
                </div>

                {/* Favorite Genres */}
                <div className="w-full group">
                  <label className="galdeano-regular text-sm font-semibold text-primary mb-3 flex items-center gap-2 group-hover:text-accent transition-colors duration-300">
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
                                ? 'bg-linear-to-r from-secondary to-info border-secondary text-base-content shadow-lg shadow-secondary/30 animate-in'
                                : 'bg-base-300 border-primary/30 text-base-content/60 hover:border-primary/60 hover:shadow-md'
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
                            className="px-4 py-2 bg-linear-to-r from-secondary/20 to-info/20 border border-secondary/30 rounded-lg text-secondary galdeano-regular text-sm hover:border-secondary/50 transition-all duration-300">
                          
                            {genre}
                          </div>
                        ))
                      ) : (
                        <p className="galdeano-regular text-base-content/50 text-sm">No genres selected</p>
                      )}
                    </div>
                  )}
                </div>

                {/* Photo URL (only in edit mode) */}
                {isEditing && (
                  <div className="w-full group animate-in">
                    <label className="galdeano-regular text-sm font-semibold text-primary mb-2 flex items-center gap-2 group-hover:text-accent transition-colors duration-300">
                      <FaCamera className="text-xs group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" /> Profile Photo URL
                    </label>
                    <input
                      type="url"
                      className="w-full px-4 py-3 bg-base-300 border border-primary/30 rounded-lg text-base-content galdeano-regular focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 hover:border-primary/50"
                      value={userProfile.photoURL}
                      onChange={(e) => handleInputChange('photoURL', e.target.value)}
                      placeholder="https://example.com/your-photo.jpg"
                    />
                    <p className="galdeano-regular text-xs text-base-content/50 mt-1">📸 Paste a valid image URL to update your avatar</p>
                  </div>
                )}

                {/* Bio */}
                <div className="w-full group">
                  <label className="galdeano-regular text-sm font-semibold text-primary mb-2 flex items-center gap-2 group-hover:text-accent transition-colors duration-300">
                    <FaUser className="text-xs group-hover:scale-110 transition-transform duration-300" /> Bio
                  </label>
                  {isEditing ? (
                    <>
                      <textarea
                        className="w-full px-4 py-3 bg-base-300 border border-primary/30 rounded-lg text-base-content galdeano-regular focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 resize-none h-32 hover:border-primary/50"
                        value={userProfile.bio}
                        onChange={(e) => handleInputChange('bio', e.target.value)}
                        placeholder="Tell us about yourself and your gaming journey..."
                        maxLength={500}
                      />
                      <div className="flex justify-between items-center mt-1">
                        <p className="galdeano-regular text-xs text-base-content/50">
                          ✍️ Share your gaming story
                        </p>
                        <p className={`galdeano-regular text-xs font-semibold ${
                          userProfile.bio?.length > 450 ? 'text-warning' : 'text-base-content/50'
                        }`}>
                          {userProfile.bio?.length || 0}/500
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className="w-full px-4 py-3 bg-base-300/50 border border-primary/20 rounded-lg text-base-content galdeano-regular min-h-[8rem] transition-all duration-300 hover:bg-base-300/70 hover:border-primary/30">
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
