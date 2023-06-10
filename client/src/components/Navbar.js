import { Link, Outlet } from "react-router-dom";
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
        <li className="nav-li">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
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
          <li className="nav-li">
            <Link onClick={handleLogout} className="nav-link">
              Logout
            </Link>
          </li>
        )}
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
