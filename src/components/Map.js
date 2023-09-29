import React from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const customMarkerIcon = L.icon({
  iconUrl: "/locationmarlker.png", 
  iconSize: [32, 32], 
  iconAnchor: [16, 32], 
  popupAnchor: [0, -32], 
});

const Map = ({ profile }) => {
  const { lat, lng } = profile.address;

  return (
    <MapContainer center={[lat, lng]} zoom={13} style={{ height: "400px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy;a> contributors'
      />
      <Marker position={[lat, lng]} icon={customMarkerIcon}>
        <Popup>{profile.name}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
