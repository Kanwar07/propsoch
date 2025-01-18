import React from "react";
import detailstyle from "../../css/detail.module.css";
import { useLocation } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Detail() {
  const location = useLocation();
  const { area, address, city, image, type, price, construction } =
    location.state;

  const imagePath = require(`/src/assets/property/${image}`);

  return (
    <div style={{ marginBottom: "6rem" }}>
      <img alt={type} src={imagePath} className={detailstyle.detailimage} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div
          style={{
            gap: "2px",
            display: "flex",
            flexDirection: "column",
            margin: "1rem",
          }}
        >
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <span
            style={{ fontSize: "14px", fontWeight: "bold", color: "#000000" }}
          >
            {price}
          </span>
          <span
            style={{ fontSize: "12px", fontWeight: "normal", color: "#888888" }}
          >
            EMI Available
          </span>
        </div>
      </div>
      <div className={detailstyle.map_container}>
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
          style={{ width: "100%", height: "200px" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>{address}</Popup>
          </Marker>
        </MapContainer>
      </div>
      <div>
        <span style={{ color: "#234f68", margin: "1rem" }}>
          Property Amenities
        </span>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "8px",
            margin: "1rem",
          }}
        >
          {Array.isArray(construction) && construction.length > 0 ? (
            construction.map((amenity, index) => (
              <div key={index} className={detailstyle.detailammenties}>
                {amenity}
              </div>
            ))
          ) : (
            <div>No amenities available</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Detail;
