import { Link } from "react-router-dom";
import Imdb_img from "./assets/imdb.svg";
import Rt_img  from "./assets/tomatoes.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


/* eslint-disable react/prop-types */
const Movie = ({ movie }) => {
  const [isLiked, setisLiked] = useState(false)
  const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w342";
  // const IMDB_IMG = "movie-box/src/assets/imdb.svg";
  // const RT_IMG = "movie-box/src/assets/tomatoes.svg";

  // console.log(movie.poster_path);
  const rt_rating = movie.popularity;
  // const ratingInt = rt_rating.toFixed(1);
  const ratingInt = Math.round(rt_rating);
  // const GENRE_BASE_URL = "https://api.themoviedb.org/3/genre/movie/list"

  // const fetchGenre = async () => {

  // }
  // const background_box_grey = '#F3F4F680';
  const heart_pink = "#BE123C";
  const heart_grey = "#D1D5DB";

  const likeMovie = () => {
    setisLiked(!isLiked)
  }

  
  return (
    
    <div data-testid="movie-card" className="relative flex flex-col gap-y-3 w-[250px] md:w-auto">
      <div className="w-full absolute grid p-2.5">
        <button onClick={likeMovie}  className="flex justify-self-end h-8 w-8 rounded-full bg-gray-100/50 items-center justify-center z-10">
          {isLiked ? (
            <FontAwesomeIcon icon={faHeart} size="lg" style={{ color: `${heart_grey}` }} />
          ) : (
            <FontAwesomeIcon icon={faHeart} size="lg" style={{ color: `${heart_pink}` }} />
          )}
        </button>
      </div>
      <Link to={`movies/${movie.id}`}>
        <img
          data-testid="movie-poster"
          src={`${POSTER_BASE_URL}${movie.poster_path}`}
          alt={movie.path}
          style={{ width: 250, height: 370 }}
          // style={{ height: 370 }}
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
            <span>{ratingInt}%</span>
          </span>
        </div>
        <p className="text-gray-400 test-sm font-bold">
          {/* `${GENRE_BASE_URL}/` */}
          Action, Adventure
        </p>
      </Link>
    </div> 
    
  );
};
export default Movie;
