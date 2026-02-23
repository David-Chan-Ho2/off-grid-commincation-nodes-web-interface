import L, { Icon } from "leaflet"

export const CustomIcon: Icon = new L.Icon({
  iconUrl: '/icon.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
  className: 'custom-circle-marker'
});