import { ReactComponent as Logo } from "./assets/Logo.svg";
import { ReactComponent as Menu } from "./assets/Menu.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const NavBar = () => {
    return (
        <nav className="flex items-center justify-between h-20 px-4 md-px-20">
            <Logo />
            <div className="flex gap-6 text-base items-center">
                {/* <p>Sign in</p> */}
                <FontAwesomeIcon icon={faMagnifyingGlass} size="lg"/>
                <Menu />
            </div>
        </nav>
    )
}
export default NavBar;
