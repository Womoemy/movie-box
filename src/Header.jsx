import { ReactComponent as Logo } from "./assets/Logo.svg"
const Header = () => {
    return (
        <div className="h-screen border border-solid border-black">
            <nav className="h-20">
                <Logo />
            </nav>
        </div>
    )
}

export default Header;