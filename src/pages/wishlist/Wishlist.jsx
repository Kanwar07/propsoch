import React, { useContext, useEffect } from "react";
import { ContextData } from "../../context/Context";
import wishiststyle from "../../css/wishlist.module.css";
import WishListCard from "../../components/WishListCard";

function Wishlist() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { wishlistProperties } = useContext(ContextData);

  return (
    <div>
      {wishlistProperties && wishlistProperties.length !== 0 ? (
        <div className={wishiststyle.wishlistmaindiv}>
          {wishlistProperties.map((property) => {
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
                <WishListCard
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
          Save now, Buy later
        </div>
      )}
    </div>
  );
}

export default Wishlist;
