import React, { createContext, useEffect, useState } from "react";
import data from "../data.json";

export const ContextData = createContext();

function Context({ children }) {
  const [propertyDetails, setpropertyDetails] = useState();
  const [wishlistProperties, setwishlistProperties] = useState([]);
  const [Latitude, setLatitude] = useState();
  const [Longitude, setLongitude] = useState();

  useEffect(() => {
    const getLocation = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude.toFixed(14));
        setLongitude(position.coords.longitude.toFixed(14));
      });
    };
    getLocation();
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
        Latitude,
        Longitude,
      }}
    >
      {children}
    </ContextData.Provider>
  );
}

export default Context;
