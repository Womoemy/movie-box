/* eslint-disable react/prop-types */
import { ReactComponent as Logo } from "./assets/Logo.svg";
import { ReactComponent as Menu } from "./assets/Menu.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";
import { useState } from "react";
import SearchModal from "./SearchModal";

const NavBar = ({ movies }) => {
  // const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w92"

  const [showSearchModal, setShowSearchModal] = useState(false);

  // console.log(`This log is for showSearchModal: `, showSearchModal)
  const openSearchModal = () => {
    setShowSearchModal(true);
  };
  const closeSearchModal = (e) => {
    e.preventDefault();
    setShowSearchModal(false);
  };

  return (
    <>
      <nav className="flex items-center h-20 px-4 mb-28">
        <div
          id="nav-wrapper"
          className="flex items-center justify-between w-full"
        >
          <Logo />
          <form className="hidden md:block border-2 border-solid border-gray-300 rounded-md h-8 py-1.5 px-2.5 w-2/5">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-white sr-only"
            >
              Search
            </label>
            <div className="relative flex">
              <input
                onClick={openSearchModal}
                autoComplete="off"
                className="placeholder:text-white bg-transparent block w-full h-[100%] text-sm text-white rounded-lg focus:outline-none"
                type="search"
                name="searchMovies"
                id="searchMovies"
                placeholder="What do you want to watch?"
                required
              />
              <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className={`w-4 h-4 text-white`}
                />
              </div>
            </div>
          </form>
          <div className="flex gap-6 text-base items-center">
            {/* <p>Sign in</p> */}

            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size="lg"
              data-modal-target="defaultModal"
              data-modal-toggle="defaultModal"
              onClick={openSearchModal}
              style={{ cursor: "pointer" }}
              className="block md:hidden"
            />
            <Menu style={{ cursor: "pointer" }} />
          </div>
        </div>
      </nav>

      {/* Search Main modal */}
      {showSearchModal ? (
        <SearchModal movies={movies} closeSearchModal={closeSearchModal} />
      ) : null}
    </>
  );
};
export default NavBar;
