import { Link } from "react-router-dom";
import '../css/Navbar.css';

function NavBar() {

    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to = "/"> Movie List Finder</Link>
        <div className = "navbar-links">
            <Link to = "/" className = "nav-link" > Home </Link>
            <Link to = "/favorites" className = "nav-link" > Favorites </Link>

        </div>
        </div>
        </nav>
}
    export default NavBar; 
