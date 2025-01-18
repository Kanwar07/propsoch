import React, { useContext } from "react";
import { ContextData } from "../context/Context";
import wishlistcardstyle from "../css/wishlistcard.module.css";
import wishlisted from "../assets/property/wishlisted.svg";
import { Link } from "react-router-dom";

function WishListCard({
  id,
  area,
  address,
  city,
  image,
  type,
  liked,
  price,
  construction,
}) {
  const imagePath = require(`/src/assets/property/${image}`);

  const { wishlistProperties, setwishlistProperties } = useContext(ContextData);

  const handleremovewishlist = (id) => {
    const updatedwishlist = wishlistProperties.filter(
      (property) => property.id !== id
    );
    setwishlistProperties(updatedwishlist);
  };

  return (
    <div className={wishlistcardstyle.wishlistcardmaindiv}>
      <div style={{ position: "relative" }}>
        <Link
          to="/detail"
          state={{
            area,
            address,
            city,
            image,
            type,
            price,
            construction,
          }}
        >
          <img
            alt={type}
            src={imagePath}
            className={wishlistcardstyle.wishlistimage}
          />
        </Link>
        <img
          alt={type}
          src={wishlisted}
          className={wishlistcardstyle.wishlistwishimage}
          onClick={() => handleremovewishlist(id)}
        />
        <span className={wishlistcardstyle.wishlistlikedtext}>{liked}</span>
      </div>
      <div style={{ gap: "2px", display: "flex", flexDirection: "column" }}>
        <span
          style={{ fontSize: "14px", fontWeight: "bold", color: "#000000" }}
        >
          {area}
        </span>
        <span
          style={{ fontSize: "12px", fontWeight: "normal", color: "#888888" }}
        >
          {address}
        </span>
        <span
          style={{ fontSize: "12px", fontWeight: "normal", color: "#888888" }}
        >
          {city}
        </span>
      </div>
    </div>
  );
}

export default WishListCard;
