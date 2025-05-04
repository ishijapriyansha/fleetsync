import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; 
import 'leaflet/dist/leaflet.css';

import customIconUrl from './LocationMarker.webp'; 

function LiveTracking() {
  const [position, setPosition] = useState([0, 0]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Success: Set the position with the coordinates
          setPosition([position.coords.latitude, position.coords.longitude]);
          setLoading(false);
        },
        (error) => {
          console.error(error);
          setLoading(false);
        }
      );
    }
  }, []);

  // Map is loading, show a message or spinner
  if (loading) {
    return <div>Loading...</div>;
  }

  // Create the custom marker icon
  const customIcon = new L.Icon({
    iconUrl: customIconUrl, // URL to your custom icon
    iconSize: [40, 40], // Customize the size of the icon
    iconAnchor: [20, 40], // Adjust anchor point for the marker
    popupAnchor: [0, -40], // Adjust popup position
  });

  return (
    <MapContainer
      center={position}
      zoom={18}
      style={{ height: '100vh', width: '100%' }}
      whenCreated={(map) => map.setView(new L.LatLng(position[0], position[1]))} // Dynamically set map center
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          Your current location.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default LiveTracking;