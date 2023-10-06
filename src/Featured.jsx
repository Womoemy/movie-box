/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
import Movie from "./Movie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Featured = ({ movies }) => {
  // const [toprated, setTopRated] = useState([]);
  // const API_URL = "https://api.themoviedb.org/3/movie/";
  // const API_KEY = "2876d0ba5aa4f567d49e15c9d4773346";
  // const TOP_RATED_URL = `${API_URL}top_rated?api_key=${API_KEY}&language=en-US&page=1%27`;

  // useEffect(() => {
  //   fetchTopRated();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // const fetchTopRated = async () => {
  //   const data = await fetch(TOP_RATED_URL);
  //   const movies = await data.json();
  //   console.log(movies);
  //   setTopRated(movies.results.slice(0, 10));
  // };
  return (
    <div className="px-20 py-16">
      <div className="flex justify-between mb-11">
        <h3 className="text-3xl/normal font-bold ">Featured Movies</h3>
        <p className="self-center text-rose-700">
          <span className="hidden mr-2 md:inline">See more</span>
          <FontAwesomeIcon icon={faChevronRight} size="xl" style={{ color: "#be123c" }} />
        </p>
      </div>
      <div className="flex overflow-x-auto gap-10 no-scrollbar md:grid md:grid-cols-4 md:gap-20">
        {movies.map((movie) => {
          return <Movie key={movie.id} movie={movie} />  
        })}
      </div>
    </div>
  );
};

export default Featured;
