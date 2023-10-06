import Footer from "./Footer";
import Header from "./Header";
import Featured from "./Featured";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const App = () => {
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
    // console.log(movies);
    setTopRated(movies.results.slice(0, 10));
  };


  return toprated.length > 0 ? (
    <>
      <Header key={toprated.id} movies={toprated} />
      <Featured key={toprated.id} movies={toprated} />
      {/* <Header />
      <Featured /> */}
      <Footer />
    </>
  ): <div>
      Loading 
      <FontAwesomeIcon icon={faSpinner} spinPulse size="2xl" />
    </div>;
};
export default App;
