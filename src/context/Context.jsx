import React, { createContext, useEffect, useState } from "react";
import data from "../data.json";

export const ContextData = createContext();

function Context({ children }) {
  const [propertyDetails, setpropertyDetails] = useState();
  const [wishlistProperties, setwishlistProperties] = useState([]);
  const [propertyDetail, setpropertyDetail] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const wishlistpropertiesdata = localStorage.getItem("wishlist");
      const detailpropertydata = localStorage.getItem("detailproperty");

      if (wishlistpropertiesdata || detailpropertydata) {
        try {
          const parsedwishlistproperties = JSON.parse(wishlistpropertiesdata);
          setwishlistProperties(parsedwishlistproperties);

          const parseddetailproperty = JSON.parse(detailpropertydata);
          setpropertyDetail(parseddetailproperty);
        } catch (error) {
          console.error("Error parsing data from storage:", error);
        }
      } else {
        console.error(
          "No Puja Data or Token found in localStorage or Cookies."
        );
      }
    }
  }, []);

  useEffect(() => {
    const fetchdata = () => {
      setpropertyDetails(data);
    };
    fetchdata();
  }, []);

  return (
    <ContextData.Provider
      value={{
        propertyDetails,
        wishlistProperties,
        setwishlistProperties,
        propertyDetail,
        setpropertyDetail,
      }}
    >
      {children}
    </ContextData.Provider>
  );
}

export default Context;
