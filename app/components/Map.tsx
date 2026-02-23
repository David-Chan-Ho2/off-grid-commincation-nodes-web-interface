"use client";

import { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import useSWR from "swr";

import { ILocation } from "@/types/marker.types";
import { CustomIcon } from "./Icon";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Map() {
  const { data, error, isLoading } = useSWR<ILocation[]>(
    "/api/locations",
    fetcher,
  );
  const [uncc, setUncc] = useState<[number, number]>([35.3071, -80.7357]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <MapContainer center={uncc} zoom={16} className="map">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {data?.map((location) => (
        <div key={location.label}>
          <Marker position={location.position} icon={CustomIcon}>
            <Popup>{location.label}</Popup>
          </Marker>
        </div>
      ))}
    </MapContainer>
  );
}
