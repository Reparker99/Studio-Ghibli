import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <img src="https://www.studioghibli.com.au/wp-content/uploads/2017/07/ghibli_logo_gold.png" 
                className="d-inline-block align-top ml-3" height="100" alt="" />
            </a>
            <Link className="nav-item mr-5 active" to="/">Home</Link> 
            <Link className="nav-item mr-5" to="/films">View Films</Link> 
            <Link className="nav-item mr-5" to="/people">View Characters</Link>
            <Link className="nav-item mr-5" to="/locations">View Locations</Link>
        </nav>
    );
};

export default Navbar;