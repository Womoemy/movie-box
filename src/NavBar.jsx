/* eslint-disable react/prop-types */
import { ReactComponent as Logo } from "./assets/Logo.svg";
import { ReactComponent as Menu } from "./assets/Menu.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = ({ movies }) => {
    const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w92"

    const [showSearchModal, setShowSearchModal] = useState(false)
    
    const openSearchModal = () => {
        setShowSearchModal(true)
    }
    const closeSearchModal = () => {
        setShowSearchModal(false)
    }

    const handleModalClick = (e) => {
        e.stopPropagation();
    }
    return (
        <>
            <nav className="flex items-center h-20 px-4 mb-28">
                <div id="nav-wrapper" className="flex items-center justify-between w-full">
                    <Logo />
                    <form className="hidden md:block border-2 border-solid border-gray-300 rounded-md h-8 py-1.5 px-2.5 w-2/5">
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-white sr-only">Search</label>
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
                            <FontAwesomeIcon icon={faMagnifyingGlass} className={`w-4 h-4 text-white`} />
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
                            style={{ cursor: 'pointer' }}
                            className="block md:hidden"
                        />
                        <Menu style={{ cursor: 'pointer' }} />
                    </div>
                </div>
            </nav> 

            {/* Search Main modal */}
            {showSearchModal ? (
                <>
                    <div onClick={closeSearchModal} className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div onClick={handleModalClick} className="relative w-full my-6 mx-5 md:mx-auto max-w-3xl">
                              {/*content*/}
                            <div className="rounded-lg border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <form className="border-b border-solid border-blueGray-200">
                                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                                    <div className="relative flex">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <FontAwesomeIcon icon={faMagnifyingGlass} className={`w-4 h-4 text-gray-500`} />
                                        </div>
                                        <input className="block w-full p-4 pl-10 text-sm text-gray-900 rounded-lg focus:outline-none" type="search" name="searchMovies" id="searchMovies" placeholder="What do you want to watch?" required />
                                        <button onClick={closeSearchModal} className="text-white absolute right-2.5 bottom-3.5 bg-rose-700 hover:bg-rose-800 focus:outline-none focus:ring-2 focus:ring-rose-300 font-medium rounded text-xs px-1 py-1">ESC</button>
                                    </div>
                                </form>
                            
                                {/*body*/}
                                <div className="relative text-slate-900 flex flex-col">
                                    {/* <p className="px-3 py-16 self-center">No movie found</p> */}
                                    <section className="MovieSearch-Hits overflow-y-auto h-96">
                                        <div className="MovieSearch-Hit-source border-b border-solid px-3 py-3 font-semibold text-lg">Movies</div>
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
                                                                    <span className="MovieSearch-Hit-title font-medium">{movie.title}</span>
                                                                    <span className="MovieSearch-Hit-release-year">{movie.release_date.split("-")[0]}</span>
                                                                    <span className="MovieSearch-Hit-stars">Al Pacino</span>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </section>
                                </div>

                                {/* footer */}
                                <div className="h-3"></div>
                            </div>
                        </div>                            
                    </div>
                    <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </> 
    )
}
export default NavBar;
