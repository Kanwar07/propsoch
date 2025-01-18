import React, { useContext, useEffect } from "react";
import explorestyle from "../../css/explore.module.css";
import { ContextData } from "../../context/Context";
import PropertyCard from "../../components/PropertyCard";

function Explore() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { propertyDetails } = useContext(ContextData);

  return (
    <div>
      {propertyDetails && propertyDetails.length !== 0 ? (
        <div className={explorestyle.propertymaindiv}>
          {propertyDetails.map((property) => {
            const {
              id,
              area,
              address,
              city,
              image,
              type,
              liked,
              price,
              construction,
              allimages,
            } = property;
            return (
              <div key={id}>
                <PropertyCard
                  {...{
                    id,
                    area,
                    address,
                    city,
                    image,
                    type,
                    liked,
                    price,
                    construction,
                    allimages,
                  }}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "2rem 0rem 6rem 0rem",
          }}
        >
          Properties loading...
        </div>
      )}
    </div>
  );
}

export default Explore;
