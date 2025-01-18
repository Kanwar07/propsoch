import React from "react";
import propsoch from "../assets/navbar/propsoch.png";
import navbarstyle from "../css/navbar.module.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <NavLink to="/" style={{ textDecoration: "none" }}>
      <div className={navbarstyle.navbar_container}>
        <img
          src={propsoch}
          alt="propsoch"
          className={navbarstyle.navbar_image}
        />
      </div>
    </NavLink>
  );
}

export default Navbar;
