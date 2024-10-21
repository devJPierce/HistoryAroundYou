import React, { useEffect, useState } from 'react';
import './locationandnearbysites.css'

const LocationAndNearbySites = () => { //using component onSitesFetched 
  const [location, setLocation] = useState(null); //Holds the user's geographical coordinates (latitude and longitude)
  const [error, setError] = useState(null); //Holds any error messages related to fetching the location or data
  const [sites, setSites] = useState([]); //array that stores the historical sites fetched from APIs
  const [radius, setRadius] = useState(5); // Default radius in miles

  const fetchHistoricalSites = async (lat, lon) => { //an asynchronous function that takes latitude and longitude as parameters to fetch historical sites
    const apiKey = 'AIzaSyD0M3Vrmw3aAzsvCVrCEMTCvf8tiH-jjlY'; //the hardcoded Google API key
    const radiusInMeters = radius * 1609.34; // Convert miles to meters
    
    try { //use fetch to get data from the Google Places API and a historical database API
        //results are combined and stored in the sites state
        //Calls onSitesFetched(combinedSites) to inform the parent component of the new sites
      
      const googleResponse = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lon}&radius=1500&type=historical&key=${apiKey}`);
      const googleData = await googleResponse.json();

      // Fetch from your historical database
      /*const dbResponse = await fetch(`https://www.archives.gov/research/databases/sites?lat=${lat}&lon=${lon}`);
      const dbData = await dbResponse.json();*/

      // Combine results
      const combinedSites = googleData.results;
      setSites(combinedSites);
      
    } catch (error) {
      console.error("Error fetching historical sites", error);
    }
  };

  //useEffect hook runs once and checks if geolocation is supported and then gets the user's position
  //IF successful, is sets location and fetches historical sites
  //ELSE it sends an error message
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          fetchHistoricalSites(latitude, longitude);
        },
        (error) => {
          setError("Error getting location: " + error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, [radius]); //radius as a dependency to refetch sites when it changes

  return ( // displays error message if present; shows user's lat and lon if location is set; renders a list of historical sites; if no sites found: default message

    //used a terenary statement so I could have a simplified way of displaying two possible outcomes;
    <div> 
      
      {/*<h1>Around You</h1>
      <h3>Are you ready for history to <span>come alive?</span></h3>*/}
      {error && <p>{error}</p>} 
      {location && <p>Your location: {location.latitude}, {location.longitude}</p>}
      <label htmlFor="radius">Select radius:</label>
      <select id="radius" value={radius} onChange={(e) => setRadius(Number(e.target.value))}>
        <option value={5}>5 miles</option>
        <option value={10}>10 miles</option>
        <option value={15}>15 miles</option>
      </select>
      <h4>Historical Sites Near You:</h4>
      <ul>
        {sites.length > 0 ? (
          sites.map(site => (
            <li key={site.id || site.name}>{site.name}</li>
          ))
        ) : (
          <li className="line">No historical sites found nearby.</li>
        )}
        
      </ul>
      
    </div>
  );
};

export default LocationAndNearbySites;