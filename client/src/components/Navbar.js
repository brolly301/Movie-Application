import { Link} from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import useUserContext from "../hooks/useUserContext";
import "../CSS/Navbar.css";
import { logout } from "../APIs/authentication";
import AuthDropdown from "./Misc/AuthDropdown";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { userData, setUserData } = useUserContext();
  const [active, setActive] = useState(false);

  const redirect = useNavigate();

  const toggleMenu = () => {
  setActive((current) => !current);
};

const closeMenu = () => {
 setActive(false)
}

  const handleLogout = async (e) => {
  closeMenu()
    await logout();
    setUserData({
      user: null,
    });
    redirect("/");
    toast("Goodbye");
  };

  const loggedOutOptions = [
    {
      id: "1",
      name: (
        <Link className="nav-link" to="/login"  onClick={closeMenu}>
          Login
        </Link>
      ),
    },
    {
      id: "2",
      name: (
        <Link className="nav-link" to="/register" onClick={closeMenu}>
          Register
        </Link>
      ),
    },
  ];

  const loggedInOptions = [
    {
      id: "1",
      name: (
        <Link className="nav-link" to="/account" onClick={closeMenu}>
          Profile
        </Link>
      ),
    },
    {
      id: "2",
      name: (
      <button
  type="button"
  onClick={handleLogout}
  className="nav-link auth-action"
>
  Logout
</button>
      ),
    },
  ];

  return (
    <div className="nav-main">
      <Link className="nav-link-title" to="/">
        <h1 className="nav-title">Movie Dome</h1>
      </Link>

      <ul className={active ? "nav-ul-open" : "nav-ul"}  id="primary-navigation">
        <li className="nav-li">
          <Link className="nav-link" to="/showtimes" onClick={closeMenu}>
            What's On?
          </Link>
        </li>
        <li className="nav-li">
          <Link className="nav-link" to="/comingSoon" onClick={closeMenu}>
            Coming Soon
          </Link>
        </li>
        <li className="nav-li">
          <Link className="nav-link" to="/prices" onClick={closeMenu}>
            Prices
          </Link>
        </li>

        <li className="nav-li">
          <Link className="nav-link" to="/specialOffers" onClick={closeMenu}> 
            Special Offers
          </Link>
        </li>
        <li className="nav-li">
          <Link className="nav-link" to="/loyalty" onClick={closeMenu}>
            Loyalty
          </Link>
        </li>
      </ul>
      <div className="nav-link-container">
        <Link to="/contactUs" className="nav-link-title" onClick={closeMenu}>
          <h2 className="nav-contact">Contact</h2>
        </Link>
        <AuthDropdown
          options={userData.user ? loggedInOptions : loggedOutOptions}
        />
        <button
  type="button"
  className="nav-menu-button"
  onClick={toggleMenu}
  aria-label="Toggle navigation menu"
  aria-expanded={active}
  aria-controls="primary-navigation"
>
  <GiHamburgerMenu className="nav-menu-icon" aria-hidden="true" />
</button>
      </div>
   
    </div>
  );
}
