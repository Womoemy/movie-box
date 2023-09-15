import { useEffect, useState } from "react";
import Movie from "./Movie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Featured = () => {
  const [toprated, setTopRated] = useState([]);
  const API_URL = "https://api.themoviedb.org/3/movie/";
  const API_KEY = "2876d0ba5aa4f567d49e15c9d4773346";
  const TOP_RATED_URL = `${API_URL}top_rated?api_key=${API_KEY}&language=en-US&page=1%27`;

  useEffect(() => {
    fetchTopRated();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchTopRated = async () => {
    const data = await fetch(TOP_RATED_URL);
    const movies = await data.json();
    console.log(movies);
    setTopRated(movies.results.slice(0, 10));
  };
  return (
    <div className="px-20 py-16">
      <div className="flex justify-between mb-11">
        <h3 className="text-3xl/normal font-bold ">Featured Movie</h3>
        <p className="self-center text-rose-700">
          <span className="mr-2">See more</span>
          <FontAwesomeIcon icon={faChevronRight} style={{ color: "#be123c" }} />
        </p>
      </div>
      <div className="grid grid-cols-4 gap-20">
        {toprated.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default Featured;
