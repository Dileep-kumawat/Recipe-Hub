import { NavLink } from 'react-router-dom'
import "../styles/navbar.scss";

const Navbar = () => {
    return (
        <nav>
            <NavLink className={(e) => e.isActive ? "active" : ""} to="/">Home</NavLink>
            <NavLink className={(e) => e.isActive ? "active" : ""} to="/recipes">Recipes</NavLink>
            <NavLink className={(e) => e.isActive ? "active" : ""} to="/about">About</NavLink>
            <NavLink className={(e) => e.isActive ? "active" : ""} to="/story">Story</NavLink>
            <NavLink className={(e) => e.isActive ? "active" : ""} to="/favourites">Favourites</NavLink>
        </nav>
    )
}

export default Navbar
