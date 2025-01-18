import React, { useContext } from "react";
import explorestyle from "../../css/explore.module.css";
import { ContextData } from "../../context/Context";
import PropertyCard from "../../components/PropertyCard";

function Explore() {
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
                  }}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Explore;
