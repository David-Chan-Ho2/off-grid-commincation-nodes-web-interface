"use client";

import { ILocation } from "@/types/marker.types";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { CustomIcon } from "./Icon";

export default function Map() {
  const [markers, setMarkers] = useState<ILocation[]>([]);
  const [uncc, setUncc] = useState<[number, number]>([35.3071, -80.7357]);

  useEffect(() => {
    const fetchLocations = async () => {
      const res = await fetch("/api/locations");
      const data: ILocation[] = await res.json();
      setMarkers(data);
    };

    fetchLocations();
  }, []);

  return (
    <MapContainer center={uncc} zoom={16} className="map">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {markers.map((marker) => (
        <div key={marker.label}>
          <Marker position={marker.position} icon={CustomIcon}>
            <Popup>{marker.label}</Popup>
          </Marker>
        </div>
      ))}
    </MapContainer>
  );
}
