import React, { useContext, useEffect } from "react";
import detailstyle from "../../css/detail.module.css";
import { useLocation } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { ContextData } from "../../context/Context";

function Detail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const { id } = location.state;

  const { propertyDetails, propertyDetail, setpropertyDetail } =
    useContext(ContextData);

  useEffect(() => {
    const fetchproperties = () => {
      const savedProperty = JSON.parse(localStorage.getItem("detailproperty"));

      if (savedProperty.id !== id) {
        const requiredProperty = propertyDetails.find(
          (property) => property.id === id
        );
        setpropertyDetail(requiredProperty);
        localStorage.setItem(
          "detailproperty",
          JSON.stringify(requiredProperty)
        );
      }
    };
    fetchproperties();
  }, [id, propertyDetails, setpropertyDetail]);

  const customIcon = new Icon({
    iconUrl: require("../../assets/location.png"),
    iconSize: [35, 35],
  });

  return (
    <>
      {propertyDetail && propertyDetail.length !== 0 ? (
        <div style={{ marginBottom: "6rem" }}>
          <img
            alt={propertyDetail.type}
            src={require(`/src/assets/property/${propertyDetail.image}`)}
            className={detailstyle.detailimage}
          />
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
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#000000",
                }}
              >
                {propertyDetail.area}
              </span>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "normal",
                  color: "#888888",
                }}
              >
                {propertyDetail.address}
              </span>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "normal",
                  color: "#888888",
                }}
              >
                {propertyDetail.city}
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
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#000000",
                }}
              >
                {propertyDetail.price}
              </span>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "normal",
                  color: "#888888",
                }}
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
              <Marker position={[51.505, -0.09]} icon={customIcon}>
                <Popup>{propertyDetail.address}</Popup>
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
              {Array.isArray(propertyDetail.construction) &&
              propertyDetail.construction.length > 0 ? (
                propertyDetail.construction.map((amenity, index) => (
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
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "2rem 0rem 6rem 0rem",
          }}
        >
          No Property found
        </div>
      )}
    </>
  );
}

export default Detail;
