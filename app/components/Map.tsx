"use client";

import L from "leaflet"
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png"
import markerIcon from "leaflet/dist/images/marker-icon.png"
import markerShadow from "leaflet/dist/images/marker-shadow.png"
import { useState } from 'react'
import { MapContainer, Marker, Popup, SVGOverlay, TileLayer } from "react-leaflet"

import { IMarker } from '@/types/marker.types'

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x.src ?? (markerIcon2x as unknown as string),
  iconUrl: markerIcon.src ?? (markerIcon as unknown as string),
  shadowUrl: markerShadow.src ?? (markerShadow as unknown as string),
});

export default function Map() {
  const [uncc, setUncc] = useState<[number, number]>([35.3071, -80.7357])

  const [markers, setMarkers] = useState<IMarker[]>([
    {id: 1, label: "A", position: [35.3071, -80.7357], neighbors: []}, 
    {id: 2, label: "B", position: [35.3070, -80.7352], neighbors: [[35.3070, -80.7352]]}, 
    {id: 3, label: "C", position: [35.3074, -80.7358], neighbors: []}, 
]);
const bounds: any = [
  [35.3071, -80.7357],
  [35.3070, -80.7352],
]

  return (
    <MapContainer center={uncc} zoom={16} style={{ height: "100vh", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {markers.map(({label, position}) => (
            <>
            <Marker key={label} position={position}>
                <Popup>{label}</Popup>
            </Marker>
            
              <SVGOverlay attributes={{ stroke: 'black' }} bounds={bounds}>
                <line x1="0" y1="0" x2="100%" y2="100%" strokeWidth={2} />
            </SVGOverlay>
            </>
        ))}
      
    </MapContainer>
  );
}