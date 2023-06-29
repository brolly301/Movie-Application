import React from "react";
import "../../CSS/HomePage/Banner.css";

const Banner = ({ children, ...rest }) => {
  return (
    <div {...rest} className="banner-container">
      <h2>{children}</h2>
    </div>
  );
};

export default Banner;
