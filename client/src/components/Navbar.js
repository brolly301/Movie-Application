import { Link, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import useUserContext from "../hooks/useUserContext";
import "../CSS/Navbar.css";
import { logout } from "../APIs/authentication";

export default function Navbar() {
  const { userData, setUserData } = useUserContext();

  const handleLogout = async (e) => {
    await logout();
    setUserData({
      user: null,
    });
  };

  return (
    <div>
      <ul className="nav-ul">
        <h1>Movie Dome</h1>
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
          <Link className="nav-link" to="/specialOffers">
            Loyalty
          </Link>
        </li>
        <span>Contact</span>
        <FaUser className="nav-user" />

        {/* 
        {!userData.user ? (
          <>
            <li className="nav-li">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-li">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="nav-li">
              <Link className="nav-link" to="/account">
                Profile
              </Link>
            </li>
            <li className="nav-li">
              <Link onClick={handleLogout} className="nav-link">
                Logout
              </Link>
            </li>
          </>
        )} */}
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
