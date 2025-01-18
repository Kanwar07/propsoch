import React from "react";
import propsoch from "../assets/navbar/propsoch.png";
import navbarstyle from "../css/navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className={navbarstyle.maindiv}>
      <Link to="/">
        <img src={propsoch} alt="propsoch" className={navbarstyle.mainimage} />
      </Link>
    </div>
  );
}

export default Navbar;
