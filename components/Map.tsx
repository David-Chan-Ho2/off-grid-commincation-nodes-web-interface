"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import { ILocation } from "@/types/location.types";
import Config from "../config/config";
import { CustomIcon } from "./Icon";

interface IMap {
  locations: ILocation[] | undefined;
}

export default function Map({ locations }: IMap) {
  return (
    <MapContainer center={Config.DEFAULT_CENTER} zoom={16} className="h-3/4">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {locations?.map(({ label, position }) => (
        <Marker key={label} position={position} icon={CustomIcon}>
          <Popup>{label}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
