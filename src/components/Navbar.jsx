import React from "react";
import propsoch from "../assets/navbar/propsoch.png";
import navbarstyle from "../css/navbar.module.css";

function Navbar() {
  return (
    <div className={navbarstyle.maindiv}>
      <img src={propsoch} alt="propsoch" className={navbarstyle.mainimage} />
    </div>
  );
}

export default Navbar;
