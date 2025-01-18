import React from "react";
import explore from "../assets/footer/explore.svg";
import wishlist from "../assets/footer/wishlist.svg";
import map from "../assets/footer/map.svg";
import user from "../assets/footer/user.svg";
import footerstyle from "../css/footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={footerstyle.footermaindiv}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className={footerstyle.footeritemsdiv}>
          <img
            src={explore}
            alt="explore"
            style={{ width: "25px", height: "25px" }}
          />
          <span
            style={{
              color: "#757575",
              fontSize: "14px",
            }}
          >
            Explore
          </span>
        </div>
      </Link>
      <Link to="/wishlist" style={{ textDecoration: "none" }}>
        <div className={footerstyle.footeritemsdiv}>
          <img
            src={wishlist}
            alt="wishlist"
            style={{ width: "25px", height: "25px", scale: "1.2" }}
          />
          <span
            style={{
              color: "#757575",
              fontSize: "14px",
              textDecoration: "none",
            }}
          >
            Wishlists
          </span>
        </div>
      </Link>
      <div className={footerstyle.footeritemsdiv}>
        <img
          src={map}
          alt="map"
          style={{ width: "25px", height: "25px", scale: "1.2" }}
        />
        <span style={{ color: "#757575", fontSize: "14px" }}>Show map</span>
      </div>
      <div className={footerstyle.footeritemsdiv}>
        <img
          src={user}
          alt="user"
          style={{
            width: "25px",
            height: "25px",
            scale: "1.2",
          }}
        />{" "}
        <span style={{ color: "#757575", fontSize: "14px" }}>Log in</span>
      </div>
    </div>
  );
}

export default Footer;
