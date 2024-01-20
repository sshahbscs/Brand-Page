import logo from "./assets/logo.png";
import "./CSS/header.css";
const Header = ()=>{
    return(
        <div>
        <nav className="header">
            <div className="logo">
                <img src={logo} alt="logo-image" />
            </div> 
            <ul className="nav-items">
                <li>Menu</li>
                <li>Location</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div >
                <button className="login-btn"><span>Login</span></button>
            </div>
        </nav>
        </div>
    )
}

export default Header;