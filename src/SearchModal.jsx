/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const SearchModal = ({ closeSearchModal }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const POSTER_BASE_URL = "https:image.tmdb.org/t/p/w92";
  const SEARCH_URL = "https://api.themoviedb.org/3/search/movie";
  const API_KEY = "2876d0ba5aa4f567d49e15c9d4773346";
  const SEARCH_ENDPOINT = `${SEARCH_URL}?query=${searchQuery}&api_key=${API_KEY}&include_adult=false&language=en-US&page=1`;

  const fetchSearchResults = async () => {
    try {
      const response = await fetch(SEARCH_ENDPOINT);
      const data = await response.json();
      // console.log(data);
      const formattedData = await formatData(data.results);
      // return console.log(formattedData);
      setSearchResults(formattedData);
    } catch (error) {
      console.error("Error fetching search results: ", error);
    }
  };

  const formatData = async (data) => {
    return Promise.all(
      data.map(async (movie) => {
        const details = await fetchDetails(movie.id);
        return {
          ...movie,
          details,
        };
      }),
    );
  };

  const fetchDetails = async (id) => {
    const DETAILS_URL = "https://api.themoviedb.org/3/movie";
    const DETAILS_ENDPOINT = `${DETAILS_URL}/${id}?&append_to_response=credits&api_key=${API_KEY}`;
    try {
      const response = await fetch(DETAILS_ENDPOINT);
      const data = await response.json();
      // console.log(data);
      return data;
    } catch (error) {
      console.error("Error fetching movie details: ", error);
    }
  };

  useEffect(() => {
    if (searchQuery.trim() !== "") {
      fetchSearchResults();
    } else {
      setSearchResults([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);
  // console.log(`the original movie array: `, movies);
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <div
        onClick={closeSearchModal}
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div
          onClick={handleModalClick}
          className="relative w-full my-6 mx-5 md:mx-auto max-w-3xl"
        >
          {/*content*/}
          <div className="rounded-lg border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <form className="border-b border-solid border-blueGray-200">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only"
              >
                Search
              </label>
              <div className="relative flex">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className={`w-4 h-4 text-gray-500`}
                  />
                </div>
                <input
                  onChange={handleSearchInput}
                  autoComplete="off"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 rounded-lg focus:outline-none"
                  type="search"
                  name="searchMovies"
                  id="searchMovies"
                  placeholder="What do you want to watch?"
                  required
                />
                <button
                  onClick={closeSearchModal}
                  className="text-white absolute right-2.5 bottom-3.5 bg-rose-700 hover:bg-rose-800 focus:outline-none focus:ring-2 focus:ring-rose-300 font-medium rounded text-xs px-1 py-1"
                >
                  ESC
                </button>
              </div>
            </form>

            {/*body*/}
            <div className="relative text-slate-900 flex flex-col">
              {/* <div className="MovieSearch-Hit-source border-b border-solid px-3 py-3 font-semibold text-lg">
                Movies
              </div> */}
              {searchQuery.toLowerCase() !== "" && searchResults.length > 0 ? (
                <section className="MovieSearch-Hits overflow-y-auto h-96">
                  {/* <div className="MovieSearch-Hit-source border-b border-solid px-3 py-3 font-semibold text-lg">
                    Movies
                  </div> */}
                  <ul id="moviesearch-list" className="flex flex-col divide-y">
                    {searchResults.map((movie) => (
                      <li key={movie.id} className="MovieSearch-Hit px-3 py-3">
                        <Link to={`movies/${movie.id}`}>
                          <div className="MovieSearch-Hit-Container flex gap-x-3">
                            <div className="MovieSearch-Hit-Poster">
                              <img
                                src={`${POSTER_BASE_URL}${movie.poster_path}`}
                                alt={movie.path}
                                style={{ width: 50, height: 75 }}
                              />
                            </div>
                            <div className="MovieSearch-Hit-content-wrapper flex flex-col">
                              <span className="MovieSearch-Hit-title font-medium">
                                {movie.title}
                              </span>
                              <span className="MovieSearch-Hit-release-year">
                                {movie.release_date.split("-")[0]}
                              </span>
                              {movie.details && (
                                <span className="MovieSearch-Hit-stars">
                                  {movie.details?.credits?.cast
                                    .filter(
                                      (member) =>
                                        member.known_for_department.toLowerCase() ===
                                        "acting",
                                    )
                                    .slice(0, 3)
                                    .map((actor) => actor.name)
                                    .join(", ")}
                                </span>
                              )}
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : (
                <section className="MovieSearch-Hits overflow-y-auto h-96 flex items-center justify-center">
                  <div className="font-medium text-lg text-slate-500">
                    No movie found
                  </div>
                </section>
              )}
              {/* <div className="MovieSearch-Hit-source border-b border-solid px-3 py-3 font-semibold text-lg">
                   Movies
                 </div>
                 <ul id="moviesearch-list" className="flex flex-col divide-y">
                   {movies.map((movie) => {
                     return (
                       <li key={movie.id} className="MovieSearch-Hit px-3 py-3">
                         <Link to={`movies/${movie.id}`}>
                           <div className="MovieSearch-Hit-Container flex gap-x-3">
                             <div className="MovieSearch-Hit-Poster">
                               <img
                                 src={`${POSTER_BASE_URL}${movie.poster_path}`}
                                 alt={movie.path}
                                 style={{ width: 50, height: 75 }}
                               />
                             </div>
                             <div className="MovieSearch-Hit-content-wrapper flex flex-col">
                               <span className="MovieSearch-Hit-title font-medium">
                                 {movie.title}
                               </span>
                               <span className="MovieSearch-Hit-release-year">
                                 {movie.release_date.split("-")[0]}
                               </span>
                               <span className="MovieSearch-Hit-stars">
                                 Al Pacino
                               </span>
                             </div>
                           </div>
                         </Link>
                       </li>
                     );
                   })}
                 </ul> */}
            </div>

            {/* footer */}
            <div className="h-3"></div>
          </div>
        </div>
      </div>
      <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default SearchModal;
