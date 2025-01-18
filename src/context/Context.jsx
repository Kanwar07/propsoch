import React, { createContext, useEffect, useState } from "react";
import data from "../data.json";

export const ContextData = createContext();

function Context({ children }) {
  const [propertyDetails, setpropertyDetails] = useState();
  const [wishlistProperties, setwishlistProperties] = useState([]);

  useEffect(() => {
    const fetchdata = () => {
      setpropertyDetails(data);
    };
    fetchdata();
  }, []);

  return (
    <ContextData.Provider
      value={{ propertyDetails, wishlistProperties, setwishlistProperties }}
    >
      {children}
    </ContextData.Provider>
  );
}

export default Context;
