import React from "react";
import { Link } from "react-router-dom";
import "../../CSS/HomePage/Banner.css";

const Banner = ({ children, label = "View all", link }) => {
  return (
    <header className="banner-container">
      <h2>{children}</h2>
      {link && (
        <Link className="banner-link" to={link}>
          {label}
        </Link>
      )}
    </header>
  );
};

export default Banner;
