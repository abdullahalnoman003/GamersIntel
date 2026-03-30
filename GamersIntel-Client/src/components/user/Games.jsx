import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaGamepad,
  FaStar,
  FaCalendar,
  FaPlaystation,
  FaXbox,
  FaWindows,
  FaApple,
  FaPlus,
} from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";
import { HiLightningBolt } from "react-icons/hi";
import useRAWG from "../../Hooks/useRAWG";
import toast from "react-hot-toast";
import { Link, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ImageWithLoader from "../common/ImageWithLoader";

const Games = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || "",
  );
  const [page, setPage] = useState(parseInt(searchParams.get("page")) || 1);
  const axiosRAWG = useRAWG();

  // Scroll to top when component first loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Scroll to top instantly whenever page number changes (more reliable than smooth scroll)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  // Keep URL in sync with search and page state This preserves  search when  navigate away and come back
  useEffect(() => {
    const params = {};
    if (searchQuery) params.search = searchQuery;
    if (page > 1) params.page = page.toString();
    setSearchParams(params, { replace: true });
  }, [searchQuery, page,setSearchParams]);

  // Function to fetch games from RAWG API Takes search query and page number from queryKey
  const fetchGames = async ({ queryKey }) => {
    const [_key, search, page] = queryKey;

    const params = {
      page,
      page_size: 20,
    };
    if (search) params.search = search;

    const res = await axiosRAWG.get("/games", { params });
    return res.data;
  };
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["games", searchQuery, page],
    queryFn: fetchGames,
    keepPreviousData: true,
    staleTime: 1000 * 60 * 10,
  });

  const games = data?.results || [];
  const hasMore = data?.next !== null;

  // Gets the search text and resets to page 1
  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.searchGames.value;
    setSearchQuery(searchValue);
    setPage(1);
  };

  // When user clicks "Load More" button Simply increment the page number to fetch next page
  const loadMore = () => {
    setPage(page + 1);
  };

  // When user clicks "Previous" button Decrease page number to go back
  const goToPreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  // Returns the correct icon component for each gaming platform
  const getPlatformIcon = (platformName) => {
    const name = platformName.toLowerCase();
    if (name.includes("playstation"))
      return <FaPlaystation className="text-info" />;
    if (name.includes("xbox")) return <FaXbox className="text-success" />;
    if (name.includes("nintendo") || name.includes("switch"))
      return <SiNintendoswitch className="text-error" />;
    if (name.includes("pc") || name.includes("windows"))
      return <FaWindows className="text-secondary" />;
    if (name.includes("mac") || name.includes("apple"))
      return <FaApple className="text-base-content/60" />;
    return <FaGamepad className="text-primary" />;
  };

  // Formats rating to 1 decimal place (e.g., 4.5)
  const formatRating = (rating) => {
    return rating ? rating.toFixed(1) : "N/A";
  };

  return (
    <div className="min-h-screen bg-base-100 pt-20 pb-20">
      {/* Header Section */}
      <section className="py-12 bg-linear-to-b from-base-100 via-base-200 to-base-100 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
                        linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
                    `,
            backgroundSize: "60px 60px",
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-primary/20 border border-primary/40 rounded-full mb-4">
              <HiLightningBolt className="text-warning" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Game Database
              </span>
            </div>

            <h1 className="poetsen-one-regular text-4xl md:text-6xl text-base-content mb-4">
              DISCOVER GAMES
            </h1>

            <p className="galdeano-regular text-lg text-base-content/60 max-w-2xl mx-auto mb-8">
              Browse thousands of games. Search, explore, and add to your
              library.
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
              <div className="flex items-center bg-base-200/80 border border-primary/40 rounded-lg p-4 hover:border-primary/60 transition-colors duration-200">
                <FaSearch className="text-primary text-xl mr-3" />
                <input
                  type="text"
                  placeholder="Search for games (e.g., 'The Witcher 3', 'Minecraft'...)"
                  className="flex-1 bg-transparent text-base-content placeholder-base-content/60 outline-none galdeano-regular"
                  defaultValue={searchQuery}
                  name="searchGames"
                  key={searchQuery}
                />
                <button
                  type="submit"
                  className="ml-3 px-6 py-2 bg-primary hover:bg-primary/90 rounded-lg text-base-content galdeano-regular font-bold transition-colors">
                
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-8 bg-base-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Show loading spinner only on first page load */}
          {isLoading && page === 1 ? (
            <div className="flex justify-center items-center py-20">
              <div className="text-center ">
                <img src="/images/logo.png" alt="logo" className="w-40 animate-pulse"  />
                <p className="text-base-content/60">Loading games...</p>
              </div>
            </div>
          ) : !isLoading && games.length === 0 ? (
            /* Show 'no games' only when not loading and truly no results */
            <div className="text-center py-20">
              <FaGamepad className="text-6xl text-base-content/30 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-base-content mb-2">
                No Games Found
              </h3>
              <p className="text-base-content/60">Try a different search term</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {games.map((game) => (
                  <div
                    key={game.id}
                    className="bg-base-200/50 border border-primary/30 rounded-xl overflow-hidden hover:border-primary/60 hover:shadow-secondary/40 flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg  transition-all duration-300 cursor-pointer group "
                  >
                    <div >
                        {/* Game Image */}
                    <div className="relative h-48 overflow-hidden bg-base-200">
                      {game.background_image ? (
                        <ImageWithLoader
                          src={game.background_image}
                          alt={game.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          containerClassName="w-full h-full"
                          loaderClassName="rounded-none"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <FaGamepad className="text-6xl text-base-content/30" />
                        </div>
                      )}

                      {/* Rating Badge */}
                      {game.rating > 0 && (
                        <div className="absolute top-3 right-3 bg-base-100/80 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                          <FaStar className="text-warning text-sm" />
                          <span className="text-base-content font-bold text-sm">
                            {formatRating(game.rating)}
                          </span>
                        </div>
                      )}
                    </div>
                    {/* Game name */}
                    <div className="pl-4 pt-4">
                      <h3 className="text-base-content galdeano-regular font-bold text-lg mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                        {game.name}
                      </h3>
                    </div>
                    </div>
                    {/* Game Info */}
                    <div className="p-4">
                      {/* Release Date */}
                      {game.released && (
                        <div className="flex items-center gap-2 text-base-content/60 text-sm mb-2">
                          <FaCalendar className="text-primary" />
                          <span>{new Date(game.released).getFullYear()}</span>
                        </div>
                      )}

                      {/* Platforms */}
                      <div className="flex items-center gap-2 flex-wrap mb-3">
                        {game.parent_platforms?.slice(0, 4).map((p, idx) => (
                          <div key={idx} className="text-lg">
                            {getPlatformIcon(p.platform.name)}
                          </div>
                        ))}
                      </div>

                      {/* Genres */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {game.genres?.slice(0, 2).map((genre) => (
                          <span
                            key={genre.id}
                            className="px-2 py-1 bg-primary/20 border border-primary/30 rounded text-primary text-xs galdeano-regular">
                          
                            {genre.name}
                          </span>
                        ))}
                      </div>

                      {/* Buttons */}
                      <div className="space-y-2">
                        <Link to={`/games/${game.id}`} className="block">
                          <button className="w-full px-4 py-2 bg-primary hover:bg-primary/90 rounded-lg text-base-content galdeano-regular font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 hover:scale-[1.02]">
                            <FaGamepad />
                            View Details
                          </button>
                        </Link>

                        <button
                          className="w-full px-4 py-2 bg-base-200 hover:bg-base-300 border border-primary/30 hover:border-primary/60 rounded-lg text-base-content galdeano-regular font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 hover:scale-[1.02]"
                          onClick={() =>
                            toast.success(`Added ${game.name} to library!`)
                          }
                        >
                          <FaPlus />
                          Add to Library
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination Buttons */}
              <div className="flex justify-center items-center gap-4 mt-12">
                {/* Previous Button - Only show if not on page 1 */}
                {page > 1 && (
                  <button
                    onClick={goToPreviousPage}
                    disabled={isFetching}
                    className="px-8 py-4 bg-base-200 hover:bg-base-300 border border-primary/30 rounded-lg text-base-content galdeano-regular font-bold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2">
                  
                    ← Previous Page
                  </button>
                )}

                {/* Page Number Display */}
                <div className="px-4 py-4 bg-primary/20 border border-primary/40 rounded-lg">
                  <span className="text-base-content galdeano-regular font-bold">
                    Page {page}
                  </span>
                </div>

                {/* Next/Load More Button - Only show if there are more games */}
                {hasMore && (
                  <button
                    onClick={loadMore}
                    disabled={isFetching}
                    className="px-8 py-4 bg-primary hover:bg-primary/90 rounded-lg text-base-content galdeano-regular font-bold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2">
                  
                    {isFetching ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Loading...
                      </>
                    ) : (
                      <>Next Page →</>
                    )}
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Games;
