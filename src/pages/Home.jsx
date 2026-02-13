import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";
import "../css/index.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // Load popular movies on mount
  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.error("Error fetching popular movies:", err);
        setError("Failed to load popular movies.");
      } finally {
        setLoading(false);
      }
    };

    fetchPopularMovies();
  }, []);

  // Handle search form
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
    setError("");

    try {
      const results = await searchMovies(searchQuery);
      if (results.length === 0) {
        setError(`No movies found for "${searchQuery}".`);
      }
      setMovies(results);
    } catch (err) {
      console.error("Search error:", err);
      setError("Search failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for Movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {loading && <p className="status-message">Loading movies...</p>}
      {error && <p className="status-message error">{error}</p>}

      {!loading && !error && movies.length === 0 && (
        <p className="status-message">No movies to display.</p>
      )}

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
