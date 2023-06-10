import { Link, Outlet } from "react-router-dom";
import "../CSS/Navbar.css";

export default function Navbar() {
  return (
    <div>
      <ul className="nav-ul">
        <li className="nav-li">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
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
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
