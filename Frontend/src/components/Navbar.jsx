import { NavLink } from 'react-router-dom'
import "../styles/navbar.scss";

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/">
                <div className="logo">
                    <img src="logo.webp" alt="logo" />
                    <span>RecipeHub</span>
                </div>
            </NavLink>
            <div className="links">
                <NavLink className={(e) => e.isActive ? "active" : ""} to="/">Home</NavLink>
                <NavLink className={(e) => e.isActive ? "active" : ""} to="/recipes">Recipes</NavLink>
                <NavLink className={(e) => e.isActive ? "active" : ""} to="/about">About</NavLink>
                <NavLink className={(e) => e.isActive ? "active" : ""} to="/story">Story</NavLink>
                <NavLink className={(e) => e.isActive ? "active" : ""} to="/favourites">Favourites</NavLink>
            </div>
            <div className="createBtn">
                <NavLink to="/create">Create Recipe</NavLink>
            </div>
        </nav>
    )
}

export default Navbar