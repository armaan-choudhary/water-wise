// src/components/ComplaintMap.js
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../FireBaseConfig'; // Adjust the path as necessary
import L from 'leaflet';

// Set default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Component to handle user location
const LocationMarker = () => {
  const map = useMap();

  useEffect(() => {
    map.locate({ setView: true, maxZoom: 16 });

    map.on('locationfound', (e) => {
      const radius = e.accuracy / 2; // Radius of accuracy
      L.circle(e.latlng, radius).addTo(map);
    });

    map.on('locationerror', (e) => {
      alert(e.message);
    });
  }, [map]);

  return null;
};

const ComplaintMap = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      const querySnapshot = await getDocs(collection(db, 'complaints'));
      const complaintsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setComplaints(complaintsData);
    };

    fetchComplaints();
  }, []);

  return (
    <MapContainer center={[20, 0]} zoom={2} style={{ height: "86vh", width: "100%" }}>
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      />
      <LocationMarker /> {/* Add the LocationMarker component here */}
      {complaints.map((complaint) => (
        <Marker key={complaint.id} position={[complaint.location.latitude, complaint.location.longitude]}>
          <Popup>
            <strong>{complaint.name}</strong><br />
            <em>Tag: {complaint.complaintTag}</em> {/* Display the complaint tag here */}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default ComplaintMap;