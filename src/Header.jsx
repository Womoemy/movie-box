/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
// import { ReactComponent as Logo } from "./assets/Logo.svg";
// import header_backdrop from "./assets/header_backdrop.png";
// import { ReactComponent as Menu } from "./assets/Menu.svg";
// import Button from "./Button";
import NavBar from "./NavBar";
import Imdb_img from "./assets/imdb.svg";
import Rt_img  from "./assets/tomatoes.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState, useMemo } from "react";

const Header = ({ movies }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";

  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentMovie, setCurrentMovie] = useState(movies[currentIndex])
  
  const backdrop_img = useMemo(() => {
    return `${BASE_URL}${currentMovie.backdrop_path}`
  }, [currentMovie])

  useEffect(() => {
    setCurrentMovie(movies[currentIndex])
  }, [currentIndex])

  useEffect(() => {
    const timer = setTimeout(() => {
      // const nextIndex = (currentIndex + 1) % movies.length
      setCurrentIndex(currentIndex => (currentIndex + 1) % movies.length)
    }, 10000)
  
    return () => clearTimeout(timer);
  }, [currentIndex, movies])
  
  return (
    // <>
    //   {movies.map((movie) => 
          <div 
            // key={movie.id}
            className="h-screen text-white"
            // className={`h-screen text-white ${onToggleBlur ? 'backdrop-blur' : ''}`}
            style={{
              backgroundImage: `url(${backdrop_img})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              // height: "100vh",
              height: "700px",
              // width: "100vw",
            }}
          >
            <NavBar 
              // onToggleBlur={onToggleBlur}
              // openSearchModal={openSearchModal} 
              movies={movies}
            />
            <div className="flex flex-col gap-y-4 bottom-0 mx-4 w-3/4 md:static md:w-1/3 ">
              <h1 className="font-bold text-3xl md:text-5xl leading-10 md:leading-[56px]">
                {currentMovie.title}
              </h1>
              <div className="flex w-[184px] h-5 justify-between">
                <span className="flex gap-2.5 items-center">
                  <img src={Imdb_img} alt="IMDb" style={{ width: "35px", }} />
                  <span className="text-xs">{currentMovie.vote_average} / 10</span>
                </span>
                <span className="flex gap-2.5 items-center">
                  <img src={Rt_img} alt="Rotten Tomatoes" />
                  <span className="text-xs">97%</span>
                </span>
              </div>
              <p className="text-sm text-justify md:w-3/4">
                {currentMovie.overview}
              </p>
              <div>
                <button type="button" className="flex uppercase bg-rose-700 py-1.5 px-4 rounded-md gap-x-2">   
                  <span>
                    <FontAwesomeIcon icon={faCirclePlay} style={{color: "#ffffff",}} />
                  </span>
                  Watch Trailer
                </button>
              </div>
            </div>
          </div>
    //   )}
    // </>
  );
};

export default Header;
