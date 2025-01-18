import React, { useContext } from "react";
import { ContextData } from "../../context/Context";
import wishiststyle from "../../css/wishlist.module.css";
import WishListCard from "../../components/WishListCard";

function Wishlist() {
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

export default Wishlist;
