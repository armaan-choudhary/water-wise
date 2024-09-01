// src/components/TileLayerComponent.js
import React, { useState } from 'react';
import { TileLayer } from 'react-leaflet';
import { MapContainer } from 'react-leaflet';
import TileLayerComponent from './components/TileLayerComponent';

const TileLayerComponent = () => {
  const [selectedTileLayer, setSelectedTileLayer] = useState('osm');

  // OSM Tile Layer
  const osmTileLayer = (
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
  );

  // Mapbox Tile Layer (replace YOUR_MAPBOX_ACCESS_TOKEN with your actual token)
  const mapboxTileLayer = (
    <TileLayer
      url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`}
      attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="https://www.mapbox.com/">Mapbox</a>'
    />
  );

  // Carto Tile Layer
  const cartoTileLayer = (
    <TileLayer
      url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
    />
  );

  // Stadia Tile Layer
  const stadiaTileLayer = (
    <TileLayer
      url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    />
  );

  // Function to handle tile layer change
  const handleTileLayerChange = (event) => {
    setSelectedTileLayer(event.target.value);
  };

  return (
    <div>
      <label htmlFor="tileLayerSelect">Select Tile Layer:</label>
      <select id="tileLayerSelect" value={selectedTileLayer} onChange={handleTileLayerChange}>
        <option value="osm">OpenStreetMap</option>
        <option value="mapbox">Mapbox</option>
        <option value="carto">Carto</option>
        <option value="stadia">Stadia</option>
      </select>

      {selectedTileLayer === 'osm' && osmTileLayer}
      {selectedTileLayer === 'mapbox' && mapboxTileLayer}
      {selectedTileLayer === 'carto' && cartoTileLayer}
      {selectedTileLayer === 'stadia' && stadiaTileLayer}
    </div>
  );
};

export default TileLayerComponent;