import React, { useContext, useEffect, useState } from "react";
import propertystyle from "../css/propertycard.module.css";
import wishlist from "../assets/property/wishlist.svg";
import wishlisted from "../assets/property/wishlisted.svg";
import { ContextData } from "../context/Context";
import { Link } from "react-router-dom";

function PropertyCard({
  id,
  area,
  address,
  city,
  image,
  type,
  price,
  liked,
  construction,
}) {
  const imagePath = require(`/src/assets/property/${image}`);
  const { propertyDetails, wishlistProperties, setwishlistProperties } =
    useContext(ContextData);

  const [likedproperty, setlikedproperty] = useState(false);

  useEffect(() => {
    const isLiked = wishlistProperties.some((property) => property.id === id);
    setlikedproperty(isLiked);
  }, [wishlistProperties, id]);

  const handleaddwishlist = (id) => {
    const updatedwishlist = propertyDetails.find(
      (property) => property.id === id
    );
    setwishlistProperties([...wishlistProperties, updatedwishlist]);
  };

  const handleremovewishlist = (id) => {
    const updatedwishlist = wishlistProperties.filter(
      (property) => property.id !== id
    );
    setwishlistProperties(updatedwishlist);
  };

  return (
    <div className={propertystyle.propertycardmaindiv}>
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
            liked,
            construction,
          }}
        >
          <img
            alt={type}
            src={imagePath}
            className={propertystyle.propertyimage}
          />
        </Link>
        {likedproperty ? (
          <img
            alt={type}
            src={wishlisted}
            className={propertystyle.propertywishimage}
            onClick={() => handleremovewishlist(id)}
          />
        ) : (
          <img
            alt={type}
            src={wishlist}
            className={propertystyle.propertywishimage}
            onClick={() => handleaddwishlist(id)}
          />
        )}
        <span className={propertystyle.propertylikedtext}>{liked}</span>
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

export default PropertyCard;
