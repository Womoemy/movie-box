import { ReactComponent as Logo } from "./assets/Logo.svg";
import header_backdrop from "./assets/header_backdrop.png";
import { ReactComponent as Menu } from "./assets/Menu.svg";
// import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  // const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/original"
  const IMDB_IMG = "src/assets/imdb.svg";
  const RT_IMG = "src/assets/tomatoes.svg";

  return (
    <div
      className="h-screen text-white px-20"
      style={{
        backgroundImage: `url(${header_backdrop})`,
        backgroundRepeat: "no-repeat",
        height: "600px",
      }}
    >
      <nav className="flex h-20 mb-16 items-center justify-between">
        <Logo />
        <div className="flex gap-7 text-base items-center">
          <p>Sign in</p>
          <Menu />
        </div>
      </nav>
      <div className="w-1/3 flex flex-col gap-y-4">
        <h1 className="font-bold text-5xl leading-[56px]">John Wick 3 : Parabellum</h1>
        <div className="flex w-[184px] h-5 justify-between">
          <span className="flex gap-2.5 items-center">
            <img src={`${IMDB_IMG}`} alt="IMDb" style={{ width: "35px", }} />
            <span className="text-xs">8.6 / 10</span>
          </span>
          <span className="flex gap-2.5 items-center">
            <img src={`${RT_IMG}`} alt="Rotten Tomatoes" />
            <span className="text-xs">97%</span>
          </span>
        </div>
        <p className="w-3/4 text-sm">
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
