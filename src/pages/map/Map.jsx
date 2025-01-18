import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import mapstyle from "../../css/map.module.css";

function Map() {
  const customIcon = new Icon({
    iconUrl: require("../../assets/location.png"),
    iconSize: [35, 35],
  });

  return (
    <div className={mapstyle.map_container}>
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
          <Popup>Hello</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
