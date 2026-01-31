import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar, FaCalendar, FaGamepad, FaTrophy, FaGlobe, FaPlaystation, FaXbox, FaWindows, FaApple, FaArrowLeft, FaPlus, FaHeart, FaShareAlt } from 'react-icons/fa';
import { SiNintendoswitch, SiSteam, SiGogdotcom } from 'react-icons/si';
import { MdLocalActivity } from 'react-icons/md';
import { HiLightningBolt } from 'react-icons/hi';
import useRAWG from '../../Hooks/useRAWG';
import toast from 'react-hot-toast';

const GamesDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showFullDescription, setShowFullDescription] = useState(false);
    const axiosRAWG = useRAWG();

    // Scroll to top when page loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        fetchGameDetails();
    }, [id]);

    const fetchGameDetails = async () => {
        setLoading(true);
        try {
            const response = await axiosRAWG.get(`/games/${id}`);
            setGame(response.data);
        } catch (error) {
            console.error('Error fetching game details:', error);
            toast.error('Failed to load game details');
        } finally {
            setLoading(false);
        }
    };

    // Get platform icon
    const getPlatformIcon = (platformName) => {
        const name = platformName.toLowerCase();
        if (name.includes('playstation')) return <FaPlaystation className="text-blue-400" />;
        if (name.includes('xbox')) return <FaXbox className="text-green-400" />;
        if (name.includes('nintendo') || name.includes('switch')) return <SiNintendoswitch className="text-red-400" />;
        if (name.includes('pc') || name.includes('windows')) return <FaWindows className="text-cyan-400" />;
        if (name.includes('mac') || name.includes('apple')) return <FaApple className="text-gray-400" />;
        return <FaGamepad className="text-purple-400" />;
    };

    // Get store icon
    const getStoreIcon = (storeName) => {
        const name = storeName.toLowerCase();
        if (name.includes('steam')) return <SiSteam />;
        if (name.includes('gog')) return <SiGogdotcom />;
        if (name.includes('playstation')) return <FaPlaystation />;
        if (name.includes('xbox')) return <FaXbox />;
        if (name.includes('nintendo')) return <SiNintendoswitch />;
        return <MdLocalActivity />;
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center pt-20">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-400 text-lg">Loading game details...</p>
                </div>
            </div>
        );
    }

    if (!game) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center pt-20">
                <div className="text-center">
                    <FaGamepad className="text-6xl text-gray-600 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-white mb-2">Game Not Found</h2>
                    <button 
                        onClick={() => navigate(-1)}
                        className="mt-4 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-bold transition-all"
                    >
                        Back to Games
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black pt-20">
            {/* Hero Section with Background */}
            <div className="relative h-[500px] overflow-hidden">
                {/* Background Image */}
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${game.background_image})` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-8">
                    {/* Back Button */}
                    <button 
                        onClick={() => navigate(-1)}
                        className="absolute top-8 left-8 flex items-center gap-2 px-4 py-2 bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500/60 rounded-lg text-white transition-all duration-300"
                    >
                        <FaArrowLeft /> Back to Games
                    </button>

                    {/* Game Title & Info */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 border border-purple-500/40 rounded-full mb-4">
                            <HiLightningBolt className="text-yellow-400" />
                            <span className="text-purple-300 font-semibold text-sm uppercase tracking-wider">
                                {game.genres?.[0]?.name || 'Game'}
                            </span>
                        </div>
                        
                        <h1 className="poetsen-one-regular text-4xl md:text-6xl text-white mb-4">
                            {game.name}
                        </h1>

                        {/* Quick Info Bar */}
                        <div className="flex flex-wrap items-center gap-6 mb-6">
                            {/* Rating */}
                            {game.rating > 0 && (
                                <div className="flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/30 rounded-lg px-4 py-2">
                                    <FaStar className="text-yellow-400" />
                                    <span className="text-white font-bold">{game.rating.toFixed(1)}</span>
                                    <span className="text-gray-400 text-sm">/ 5</span>
                                </div>
                            )}

                            {/* Metacritic */}
                            {game.metacritic && (
                                <div className={`flex items-center gap-2 border rounded-lg px-4 py-2 ${
                                    game.metacritic >= 75 ? 'bg-green-500/20 border-green-500/30' :
                                    game.metacritic >= 50 ? 'bg-yellow-500/20 border-yellow-500/30' :
                                    'bg-red-500/20 border-red-500/30'
                                }`}>
                                    <FaTrophy className={
                                        game.metacritic >= 75 ? 'text-green-400' :
                                        game.metacritic >= 50 ? 'text-yellow-400' :
                                        'text-red-400'
                                    } />
                                    <span className="text-white font-bold">{game.metacritic}</span>
                                    <span className="text-gray-400 text-sm">Metacritic</span>
                                </div>
                            )}

                            {/* Release Date */}
                            {game.released && (
                                <div className="flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 rounded-lg px-4 py-2">
                                    <FaCalendar className="text-purple-400" />
                                    <span className="text-white">{new Date(game.released).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                </div>
                            )}

                            {/* ESRB Rating */}
                            {game.esrb_rating && (
                                <div className="bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2">
                                    <span className="text-white font-bold">{game.esrb_rating.name}</span>
                                </div>
                            )}
                        </div>

                        {/* Action Button */}
                        <div>
                            <button 
                                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white galdeano-regular font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
                                onClick={() => toast.success(`Added ${game.name} to library!`)}
                            >
                                <FaPlus /> Add to Library
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Image Section */}
            {game.background_image_additional && (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="relative h-[400px] rounded-xl overflow-hidden">
                        <img 
                            src={game.background_image_additional} 
                            alt={`${game.name} screenshot`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column - Main Info */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Description */}
                        <div className="bg-gray-900/50 border border-purple-500/30 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                            <h2 className="poetsen-one-regular text-3xl text-white mb-4">About</h2>
                            <div 
                                className={`text-gray-400 leading-relaxed galdeano-regular ${!showFullDescription && 'line-clamp-6'}`}
                                dangerouslySetInnerHTML={{ __html: game.description }}
                            />
                            {game.description && game.description.length > 500 && (
                                <button 
                                    onClick={() => setShowFullDescription(!showFullDescription)}
                                    className="mt-4 text-purple-400 hover:text-purple-300 galdeano-regular font-semibold"
                                >
                                    {showFullDescription ? 'Show Less' : 'Read More'}
                                </button>
                            )}
                        </div>

                        {/* Platforms */}
                        <div className="bg-gray-900/50 border border-purple-500/30 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                            <h2 className="poetsen-one-regular text-3xl text-white mb-6">Platforms</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {game.platforms?.map((p) => (
                                    <div 
                                        key={p.platform.id}
                                        className="flex items-center gap-3 bg-purple-500/10 border border-purple-500/20 rounded-lg p-4 hover:bg-purple-500/20 hover:scale-[1.02] transition-all duration-200"
                                    >
                                        <div className="text-2xl">
                                            {getPlatformIcon(p.platform.name)}
                                        </div>
                                        <div>
                                            <div className="text-white font-semibold">{p.platform.name}</div>
                                            {p.released_at && (
                                                <div className="text-gray-400 text-sm">{new Date(p.released_at).toLocaleDateString()}</div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* System Requirements (if PC) */}
                        {game.platforms?.find(p => p.platform.slug === 'pc')?.requirements?.minimum && (
                            <div className="bg-gray-900/50 border border-purple-500/30 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                                <h2 className="poetsen-one-regular text-3xl text-white mb-6">PC Requirements</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="text-purple-400 font-bold mb-3">Minimum</h3>
                                        <pre className="text-gray-400 text-sm whitespace-pre-wrap font-sans">
                                            {game.platforms.find(p => p.platform.slug === 'pc').requirements.minimum}
                                        </pre>
                                    </div>
                                    {game.platforms.find(p => p.platform.slug === 'pc').requirements.recommended && (
                                        <div>
                                            <h3 className="text-green-400 font-bold mb-3">Recommended</h3>
                                            <pre className="text-gray-400 text-sm whitespace-pre-wrap font-sans">
                                                {game.platforms.find(p => p.platform.slug === 'pc').requirements.recommended}
                                            </pre>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Tags */}
                        {game.tags && game.tags.length > 0 && (
                            <div className="bg-gray-900/50 border border-purple-500/30 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                                <h2 className="poetsen-one-regular text-3xl text-white mb-6">Tags</h2>
                                <div className="flex flex-wrap gap-2">
                                    {game.tags.slice(0, 15).map((tag) => (
                                        <span 
                                            key={tag.id}
                                            className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-lg text-purple-300 galdeano-regular hover:bg-purple-500/20 hover:scale-105 transition-all duration-200 cursor-pointer"
                                        >
                                            {tag.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="space-y-6">
                        {/* Where to Buy */}
                        {game.stores && game.stores.length > 0 && (
                            <div className="bg-gray-900/50 border border-purple-500/30 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
                                <h3 className="poetsen-one-regular text-xl text-white mb-4 flex items-center gap-2">
                                    <MdLocalActivity className="text-purple-400" />
                                    Where to Buy
                                </h3>
                                <div className="space-y-3">
                                    {game.stores.map((store) => (
                                        <a 
                                            key={store.id}
                                            href={store.url || `https://${store.store.domain}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 bg-purple-500/10 border border-purple-500/20 rounded-lg p-3 hover:bg-purple-500/20 hover:scale-[1.02] transition-all duration-200 text-purple-300 hover:text-white galdeano-regular"
                                        >
                                            <div className="text-xl">{getStoreIcon(store.store.name)}</div>
                                            <span className="font-semibold">{store.store.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Genres */}
                        {game.genres && game.genres.length > 0 && (
                            <div className="bg-gray-900/50 border border-purple-500/30 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
                                <h3 className="poetsen-one-regular text-xl text-white mb-4">Genres</h3>
                                <div className="space-y-2">
                                    {game.genres.map((genre) => (
                                        <div 
                                            key={genre.id}
                                            className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-300 text-center galdeano-regular hover:bg-cyan-500/20 transition-colors duration-200"
                                        >
                                            {genre.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Developers */}
                        {game.developers && game.developers.length > 0 && (
                            <div className="bg-gray-900/50 border border-purple-500/30 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
                                <h3 className="poetsen-one-regular text-xl text-white mb-4">Developers</h3>
                                <div className="space-y-2">
                                    {game.developers.map((dev) => (
                                        <div key={dev.id} className="text-gray-400 galdeano-regular">
                                            {dev.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Publishers */}
                        {game.publishers && game.publishers.length > 0 && (
                            <div className="bg-gray-900/50 border border-purple-500/30 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
                                <h3 className="poetsen-one-regular text-xl text-white mb-4">Publishers</h3>
                                <div className="space-y-2">
                                    {game.publishers.map((pub) => (
                                        <div key={pub.id} className="text-gray-400 galdeano-regular">
                                            {pub.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Website */}
                        {game.website && (
                            <a 
                                href={game.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-purple-600 hover:bg-purple-700 hover:shadow-secondary hover:shadow-md rounded-xl p-6 transition-all duration-200 text-center "
                            >
                                <FaGlobe className="text-3xl text-white mx-auto mb-2" />
                                <div className="text-white galdeano-regular font-bold">Visit Official Website</div>
                            </a>
                        )}

                        {/* Stats */}
                        <div className="bg-gray-900/50 border border-purple-500/30 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
                            <h3 className="poetsen-one-regular text-xl text-white mb-4">Stats</h3>
                            <div className="space-y-3 text-sm galdeano-regular">
                                {game.playtime > 0 && (
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Avg Playtime:</span>
                                        <span className="text-white font-semibold">{game.playtime} hours</span>
                                    </div>
                                )}
                                {game.added && (
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Players:</span>
                                        <span className="text-white font-semibold">{game.added.toLocaleString()}</span>
                                    </div>
                                )}
                                {game.achievements_count > 0 && (
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Achievements:</span>
                                        <span className="text-white font-semibold">{game.achievements_count}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GamesDetails;