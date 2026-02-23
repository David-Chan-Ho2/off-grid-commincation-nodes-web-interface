"use client";

import { IMarker } from '@/types/marker.types'
import { useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { CustomIcon } from './Icon'

export default function Map() {
  const [uncc, setUncc] = useState<[number, number]>([35.3071, -80.7357])
  const [markers, setMarkers] = useState<IMarker[]>([
    {id: 1, label: "Woodward Hall", position: [35.3071, -80.7357]}, 
    {id: 2, label: "Mebane Hall", position: [35.3073, -80.734]}, 
    {id: 3, label: "University Recreation Center", position: [35.3081, -80.7355]}
  ]);

  return (
    <MapContainer center={uncc} zoom={16} style={{ height: "100vh", width: "100%" }}>
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