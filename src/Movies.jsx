// import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faList, faStar } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as Tickets } from "./assets/tickets.svg";
import upcoming_movies_backdrop from "./assets/upcoming-bg.png"

const Movies = () => {
    console.log("You are on the movies details page");
    
    return (
        <div className="flex w-screen max-w-full">
            <div className="w-1/6"></div>
            <div className="w-5/6 p-9">
                <iframe 
                    className="w-full h-96 rounded-2xl"
                    // width="560" 
                    // height="315" 
                    src="https://www.youtube.com/embed/Ma1-sIoZnMs" 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                >
                </iframe>
                <div className="flex mx-2 my-8 gap-x-5">
                    <div className="flex flex-col gap-y-5 w-2/3">
                        <div className="flex gap-x-4 items-center">
                            {/* movie details container */}
                            <div><span>The GodFather</span> &middot; <span>1972</span> &middot; <span>172m</span></div>
                            {/* movie genres container */}
                            <div className="flex gap-x-3">
                                <span className="border border-solid border-pink-100 rounded-2xl text-red-700 py-1 px-5 h-8">Drama</span>
                                <span className="border border-solid border-pink-100 rounded-2xl text-red-700 py-1 px-5 h-8">Crime</span>
                            </div>
                        </div>
                        <p className="">
                            {/* movie overview */}
                            Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. 
                            When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, 
                            Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.
                        </p>
                        <div className="flex flex-col gap-y-7">
                            {/* movie credits */}
                            <p>
                                {/* director - endpoint: crew.job["Director"][name] */}
                                Director: <span className="text-rose-700">Francis Ford Coppola</span>
                            </p>
                            <p>
                                {/* writers - endpoint: crew.job["Screenplay"]department["Writing"][name]*/}
                                Writer: <span className="text-rose-700">Jim Cash, Jack Epps Jr,  Peter Craig</span>
                            </p>
                            <p>
                                {/* stars */}
                                Stars: <span className="text-rose-700">Tom Cruise, Jennifer Connelly, Miles Teller</span>
                            </p>
                        </div>
                        <div className="flex border border-solid border-gray-400 items-center w-full h-12 rounded-xl">
                            {/* mentions */}
                            <span className="text-white bg-rose-700 px-5 py-3 rounded-xl w-auto h-12 whitespace-nowrap">
                                {/* top rated ranking */}
                                Top rated movie #65
                            </span>
                            <div className="flex justify-between w-full mx-5">
                                <p className="font-medium">
                                    {/* awards mention */}
                                    Awards 9 nominations
                                </p>
                                <span>
                                <FontAwesomeIcon icon={faChevronDown} style={{color: "#6b7280",}} />
                                </span>
                            </div>
                            
                        </div>
                    </div>
                    <div className="w-1/3 flex flex-col gap-y-6">
                        {/* side other details */}
                        <div className="flex justify-end">
                            <div>
                                <span>
                                    <span className="mr-2">
                                        <FontAwesomeIcon icon={faStar} style={{color: "#facc15",}} />
                                    </span>
                                    8.5
                                </span> | <span>350k</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <div className="flex items-center text-white bg-rose-700 px-20 py-3 rounded-xl w-auto h-12 whitespace-nowrap">
                                <span className="flex gap-x-3 items-center">
                                    <Tickets />See Showtimes
                                </span>
                            </div>
                            <div className="flex items-center text-zinc-800 bg-rose-100 border border-solid border-rose-700 px-20 py-3 rounded-xl w-auto h-12 whitespace-nowrap">
                                <span className="flex gap-x-3 items-center">
                                <FontAwesomeIcon icon={faList} style={{color: "#000333",}} />
                                    More watch options
                                </span>
                            </div>
                        </div>
                        <div 
                            className="flex flex-col border border-solid rounded-xl"
                            style={{
                                backgroundImage: `url(${upcoming_movies_backdrop})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                height: "230px",
                                // width: "300px"
                            }}
                        >
                            <div className="flex items-center justify-center mt-auto bg-neutral-900 opacity-75 rounded-xl">
                                <span className="flex gap-x-3 items-center text-sm mt-3 mb-2 text-white">
                                <FontAwesomeIcon icon={faList} style={{color: "#fff",}} />
                                The Best Movies and Shows in September
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Movies;