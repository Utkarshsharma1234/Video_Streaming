import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { logout } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const {dispatch} = useContext(AuthContext);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const handleLogout = (e) =>{
    e.preventDefault();
    logout(dispatch);
  }

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <div className="logo">
            ScreenRush
          </div>
          <Link to={"/"} className="link">
            <span>Homepage</span>
          </Link>
          <Link to="/series" className="link">
            <span className="navbarMainLinks">Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span className="navbarMainLinks">Movies</span>
          </Link>
        </div>
        <div className="right">
          <div className="profile">
            <div className="logoutButton">
                <span onClick={handleLogout}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;