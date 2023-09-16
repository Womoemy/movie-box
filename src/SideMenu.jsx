import Tv from "./assets/tv.png"
import HomeIcon from "./assets/icons/Home.png"
import MoviesIcon from "./assets/icons/MovieProjector.png"
import SeriesIcon from "./assets/icons/TVShow.png"
import UpcomingIcon from "./assets/icons/Calendar.png"
const SideMenu = () => {
    return (
        <div className="w-1/6 border border-solid border-black/[.30] rounded-r-[48px] flex flex-col py-12 gap-y-16">
            <div className="flex text-zinc-800 text-xl gap-x-6 items-center font-bold px-6">
                <img src={Tv} alt="MovieBox" />
                MovieBox
            </div>
            <div className="flex flex-col w-full gap-y-5 text-xl">
                <div className="w-full flex gap-x-4 h-20 items-center pl-11">
                    <img src={HomeIcon} alt="Home" style={{width: 25, height: 25}}/>
                    <span>Home</span>
                </div>
                <div className="w-full flex gap-x-4 h-20 items-center pl-11 text-rose-700 font-bold border-r-4 border-solid border-rose-700 bg-rose-700/[0.1]">
                    <img src={MoviesIcon} alt="Movies" style={{width: 25, height: 25}}/>
                    <span>Movies</span>
                </div>
                <div className="w-full flex gap-x-4 h-20 items-center pl-11">
                    <img src={SeriesIcon} alt="TV Series" style={{width: 25, height: 25}} />
                    <span>TV Series</span> 
                </div>
                <div className="w-full flex gap-x-4 h-20 items-center pl-11">
                    <img src={UpcomingIcon} alt="Upcoming" style={{width: 25, height: 25}}/>
                    <span>Upcoming</span>
                </div>
            </div>
        </div>
    )
}
export default SideMenu;