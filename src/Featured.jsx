/* eslint-disable react/prop-types */
import Movie from "./Movie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Featured = ({ movies }) => {
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
