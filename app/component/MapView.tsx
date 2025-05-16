"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Routing from "./Routing";

// Fix default marker icon issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

interface MapViewProps {
  userLocation: { 
      lat: number | undefined;
      lon: number | undefined;
    },
  destination: {
      lat: number ;
      lon: number ;
    };
}

export default function MapView({ userLocation, destination }: MapViewProps) {
  return (
    <MapContainer
        center={[destination.lat, destination.lon]}
        zoom={13}
        scrollWheelZoom={false}
        //   style={{ height: "400px", width: "60%" }}
        className=" w-full h-[400px] "
    >
        <TileLayer
            attribution='&copy; <a href="https://carto.com/">Carto</a>'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        <Routing userLocation={userLocation} destination={destination} />
        <Marker position={[destination.lat, destination.lon]}>
            <Popup>Your selected location</Popup>
        </Marker>
    </MapContainer>
  );
}
