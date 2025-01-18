import React from "react";
import explore from "../assets/footer/explore.svg";
import wishlist from "../assets/footer/wishlist.svg";
import map from "../assets/footer/map.svg";
import user from "../assets/footer/user.svg";
import footerstyle from "../css/footer.module.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className={footerstyle.footermaindiv}>
      <NavLink to="/" style={{ textDecoration: "none" }}>
        {({ isActive }) => (
          <div className={footerstyle.footeritemsdiv}>
            <img
              src={explore}
              alt="explore"
              style={{ width: "25px", height: "25px" }}
            />
            <span
              style={{
                color: isActive ? "#FF7F00" : "#757575",
                fontSize: "14px",
              }}
            >
              Explore
            </span>
          </div>
        )}
      </NavLink>

      <NavLink to="/wishlist" style={{ textDecoration: "none" }}>
        {({ isActive }) => (
          <div className={footerstyle.footeritemsdiv}>
            <img
              src={wishlist}
              alt="wishlist"
              style={{ width: "25px", height: "25px", scale: "1.2" }}
            />
            <span
              style={{
                color: isActive ? "#FF7F00" : "#757575",
                fontSize: "14px",
              }}
            >
              Wishlists
            </span>
          </div>
        )}
      </NavLink>

      <NavLink to="/map" style={{ textDecoration: "none" }}>
        {({ isActive }) => (
          <div className={footerstyle.footeritemsdiv}>
            <img
              src={map}
              alt="map"
              style={{ width: "25px", height: "25px", scale: "1.2" }}
            />
            <span
              style={{
                color: isActive ? "#FF7F00" : "#757575",
                fontSize: "14px",
              }}
            >
              Show map
            </span>
          </div>
        )}
      </NavLink>

      <NavLink to="/login" style={{ textDecoration: "none" }}>
        {({ isActive }) => (
          <div className={footerstyle.footeritemsdiv}>
            <img
              src={user}
              alt="user"
              style={{
                width: "25px",
                height: "25px",
                scale: "1.2",
              }}
            />
            <span
              style={{
                color: isActive ? "#FF7F00" : "#757575",
                fontSize: "14px",
              }}
            >
              Log in
            </span>
          </div>
        )}
      </NavLink>
    </div>
  );
}

export default Footer;
