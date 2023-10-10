/* eslint-disable react/prop-types */
import { ReactComponent as Logo } from "./assets/Logo.svg";
import { ReactComponent as Menu } from "./assets/Menu.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// import Search from "./Search";
// import { useState } from "react";

const NavBar = ({ onToggleBlur, openSearchModal }) => {
    // const [showSearchBar, setShowSearchBar] = useState(false)
    // const [showNav, setShowNav] = useState(true)
    // const [isSearchOpen, setIsSearchOpen] = useState(false)

    const handleOpenSearchModalClick = () => {
        // setIsSearchOpen(true)
        openSearchModal();
        onToggleBlur();
    }
    // const closeSearch = () => {
    //     setIsSearchOpen(false)
    // }

    // const toggleSearch = () => {
    //     setShowSearchBar(!showSearchBar)
    //     setShowNav(!showNav)
    // }

    return (
        <>
        <nav className="flex items-center h-20 px-4 md-px-20 border-2 border-solid border-red-700">
            {/* {showNav && ( */}
                <div id="nav-wrapper" className="flex justify-between w-full">
                    <Logo />
                    <div className="flex gap-6 text-base items-center">
                        {/* <p>Sign in</p> */}
                        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" onClick={handleOpenSearchModalClick} style={{ cursor: 'pointer' }}/>
                        <Menu style={{ cursor: 'pointer' }} />
                    </div>
                </div>
            {/*// )}*/}
            {/* {showSearchBar && <Search isOpen={isSearchOpen} onClose={closeSearch} />} */}
        </nav> 
        {/* <Search isOpen={isSearchOpen} onClose={closeSearch} /> */}

        </>
         
         
    )
}
export default NavBar;
