import { Link, Outlet } from "react-router-dom";
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

  const handleClick = (e) => {
    setActive(!active);
  };

  const handleLogout = async (e) => {
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
        <Link className="nav-link" to="/login">
          Login
        </Link>
      ),
    },
    {
      id: "2",
      name: (
        <Link className="nav-link" to="/register">
          Register
        </Link>
      ),
    },
  ];

  const loggedInOptions = [
    {
      id: "1",
      name: (
        <Link className="nav-link" to="/account">
          Profile
        </Link>
      ),
    },
    {
      id: "2",
      name: (
        <Link onClick={handleLogout} className="nav-link">
          Logout
        </Link>
      ),
    },
  ];

  return (
    <div className="nav-main">
      <Link className="nav-link-title" to="/">
        <h1 className="nav-title">Movie Dome</h1>
      </Link>

      <ul className={active ? "nav-ul-open" : "nav-ul"}>
        <li className="nav-li">
          <Link className="nav-link" to="/showtimes">
            What's On?
          </Link>
        </li>
        <li className="nav-li">
          <Link className="nav-link" to="/comingSoon">
            Coming Soon
          </Link>
        </li>
        <li className="nav-li">
          <Link className="nav-link" to="/prices">
            Prices
          </Link>
        </li>

        <li className="nav-li">
          <Link className="nav-link" to="/specialOffers">
            Special Offers
          </Link>
        </li>
        <li className="nav-li">
          <Link className="nav-link" to="/loyalty">
            Loyalty
          </Link>
        </li>
      </ul>
      <div className="nav-link-container">
        <Link to="/contactUs" className="nav-link-title">
          <h2 className="nav-contact">Contact</h2>
        </Link>
        <AuthDropdown
          options={userData.user ? loggedInOptions : loggedOutOptions}
        />
        <div>
          <GiHamburgerMenu onClick={handleClick} className={"nav-menu-icon"} />
        </div>
      </div>
      <div style={{ display: "none" }}>
        <Outlet />
      </div>
    </div>
  );
}
