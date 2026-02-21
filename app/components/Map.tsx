"use client";

import L, { Icon } from "leaflet"
import { useState } from 'react'
import { MapContainer, Marker, Popup, SVGOverlay, TileLayer } from "react-leaflet"

import { IMarker } from '@/types/marker.types'

const customIcon: Icon = new L.Icon({
  iconUrl: '/icon.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
  className: 'custom-circle-marker'
});

export default function Map() {
  const [uncc, setUncc] = useState<[number, number]>([35.3071, -80.7357])

  const [markers, setMarkers] = useState<IMarker[]>([
    {id: 1, label: "A", position: [35.3071, -80.7357], neighbors: []}, 
    {id: 2, label: "B", position: [35.3070, -80.7352], neighbors: [
      {id: 1, label: "A", position: [35.3071, -80.7357], neighbors: []},
      {id: 3, label: "C", position: [35.3074, -80.7358], neighbors: []}
    ]}, 
    {id: 3, label: "C", position: [35.3074, -80.7358], neighbors: []}, 
  ]);

  return (
    <MapContainer center={uncc} zoom={16} style={{ height: "100vh", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {markers.map((marker) => (
            <div key={marker.label}>
            <Marker position={marker.position} icon={customIcon}>
                <Popup>{marker.label}</Popup>
            </Marker>
            {marker.neighbors?.map((neighbor, index) => (
              <SVGOverlay key={index} attributes={{ stroke: 'black' }} bounds={[
                marker.position,
                neighbor.position
              ]}>
                <line x1="0" y1="0" x2="100%" y2="100%" strokeWidth={2} />
            </SVGOverlay>
            ))}
            </div>
        ))}
      
    </MapContainer>
  );
}