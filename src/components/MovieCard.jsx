import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);

  function handleFavoriteClick(e) {
    e.preventDefault();
    if (favorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://via.placeholder.com/500x750?text=No+Image"
          }
          alt={movie.title}
        />

        <div className="movie-overlay">
          <button
            className={`favorite-button ${favorite ? "active" : ""}`}
            onClick={handleFavoriteClick}
            aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
          >
            ❤︎
          </button>

          <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
