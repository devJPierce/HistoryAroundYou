import React, { useState } from 'react';
import axios from 'axios';

const historicalSites = [
  { name: 'Site A', lat: 37.7749, lng: -122.4194, description: 'Description of Site A' },
  { name: 'Site B', lat: 37.7849, lng: -122.4094, description: 'Description of Site B' },
  // Add more sites as needed
];

const haversine = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Earth radius in kilometers
  const dlat = (lat2 - lat1) * (Math.PI / 180);
  const dlon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dlat / 2) ** 2 +
    Math.cos(lat1 * (Math.PI / 180)) *
    Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dlon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in kilometers
};

const NearbySites = () => {
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [nearbyPlaces, setNearbyPlaces] = useState([]);
  const [historicalResults, setHistoricalResults] = useState([]);
  const radius = 5; // Radius in kilometers

  const fetchNearbyPlaces = async () => {
    const GOOGLE_MAPS_API_KEY = 'YOUR_API_KEY'; // Replace with your API key
    const placesUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius * 1000}&type=museum&key=${GOOGLE_MAPS_API_KEY}`;

    try {
      const response = await axios.get(placesUrl);
      const places = response.data.results;
      setNearbyPlaces(places);

      // Filter historical sites
      const results = historicalSites.filter((site) => {
        const distance = haversine(lat, lng, site.lat, site.lng);
        return distance <= radius;
      });
      setHistoricalResults(results);
    } catch (error) {
      console.error("Error fetching nearby places:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchNearbyPlaces();
  };

  return (
    <div>
      <h1>Nearby Historical Sites</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Latitude"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Longitude"
          value={lng}
          onChange={(e) => setLng(e.target.value)}
          required
        />
        <button type="submit">Find Nearby Sites</button>
      </form>
      <h2>Nearby Places from Google Maps:</h2>
      <ul>
        {nearbyPlaces.map((place) => (
          <li key={place.id}>{place.name}</li>
        ))}
      </ul>
      <h2>Historical Sites Within {radius} km:</h2>
      <ul>
        {historicalResults.map((site) => (
          <li key={site.name}>
            {site.name}: {site.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NearbySites;