// import { ReactComponent as Logo } from "./assets/Logo.svg";
import header_backdrop from "./assets/header_backdrop.png";
// import { ReactComponent as Menu } from "./assets/Menu.svg";
// import Button from "./Button";
import NavBar from "./NavBar";
import Imdb_img from "./assets/imdb.svg";
import Rt_img  from "./assets/tomatoes.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  // const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/original"
  // const IMDB_IMG = "./assets/imdb.svg";
  // const RT_IMG = "./assets/tomatoes.svg";

  return (
    <div
      className="h-screen text-white"
      style={{
        backgroundImage: `url(${header_backdrop})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
        // width: "100vw",
      }}
    >
      <NavBar />
      <div className="flex flex-col gap-y-4 absolute bottom-0 mx-4 my-20 w-3/4 md:static md:w-1/3 ">
        <h1 className="font-bold text-3xl md:text-5xl leading-10 md:leading-[56px]">John Wick 3 : Parabellum</h1>
        <div className="flex w-[184px] h-5 justify-between">
          <span className="flex gap-2.5 items-center">
            <img src={Imdb_img} alt="IMDb" style={{ width: "35px", }} />
            <span className="text-xs">8.6 / 10</span>
          </span>
          <span className="flex gap-2.5 items-center">
            <img src={Rt_img} alt="Rotten Tomatoes" />
            <span className="text-xs">97%</span>
          </span>
        </div>
        <p className="text-sm text-justify md:w-3/4">
        John Wick is on the run after killing a member of the international
        assassins&apos; guild, and with a $14 million price tag on his head,
        he is the target of hit men and women everywhere.
        </p>
        <div>
          {/* <button>
            Watch Trailer
          </button> */}
          <button type="button" className="flex uppercase bg-rose-700 py-1.5 px-4 rounded-md gap-x-2">   
            <span>
              <FontAwesomeIcon icon={faCirclePlay} style={{color: "#ffffff",}} />
            </span>
            Watch Trailer
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Header;
