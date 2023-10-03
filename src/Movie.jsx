import { Link } from "react-router-dom";
import Imdb_img from "./assets/imdb.svg";
import Rt_img  from "./assets/tomatoes.svg"

/* eslint-disable react/prop-types */
const Movie = ({ movie }) => {
  const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w342";
  // const IMDB_IMG = "movie-box/src/assets/imdb.svg";
  // const RT_IMG = "movie-box/src/assets/tomatoes.svg";

  // console.log(movie.poster_path);
  const rt_rating = movie.popularity;
  const rating1dp = rt_rating.toFixed(1);
  // const GENRE_BASE_URL = "https://api.themoviedb.org/3/genre/movie/list"

  // const fetchGenre = async () => {

  // }

  return (
    <Link to={`movies/${movie.id}`}>
    <div data-testid="movie-card" className="flex flex-col gap-y-3">
      <img
        data-testid="movie-poster"
        src={`${POSTER_BASE_URL}${movie.poster_path}`}
        alt={movie.path}
        style={{ width: 250, height: 370 }}
      />
      <p
        data-testid="movie-release-date"
        className="text-gray-400 text-sm font-bold"
      >
        {movie.release_date}
      </p>
      <h3 data-testid="movie-title" className="text-lg text-gray-900 font-bold">
        {movie.title}
      </h3>
      <div className="flex justify-between">
        <span className="flex gap-2.5">
          {/* <Imdb_img /> */}
          <img src={Imdb_img} alt="IMDB Rating" />
          <span>{movie.vote_average} / 10</span>
        </span>
        <span className="flex gap-2.5">
        <img src={Rt_img} alt="Rotten Tomatoes Rating" />
          <span>{rating1dp}%</span>
        </span>
      </div>
      <p className="text-gray-400 test-sm font-bold">
        {/* `${GENRE_BASE_URL}/` */}
        Action, Adventure
      </p>
    </div> 
    </Link>
  );
};
export default Movie;
