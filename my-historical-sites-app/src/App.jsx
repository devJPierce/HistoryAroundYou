// main purpose: uses hooks to manage state and side effects, handles user login, and displays historical sites based on the user's location
import React /* The core library for building user interfaces*/, { useEffect, useState } from 'react'; //React hooks for managing side effects and state
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; //stylesheet
import Login from "./Components/Login/Login" //component for handling user login
import LocationAndNearbySites from "./Components/LocationAndNearbySites/LocationAndNearbySites" //component responsible for fetching and displaying the user's location and historical sites
import Resources from "./Components/Resources/Resources"
import Home from './Components/Home/Home';
import Layout from "./Components/Layout/Layout"
import NearbySites from './Components/Nearby Sites/NearbySites'

const App = () => {
  //const [location, setLocation] = useState(null);
  /*const [sites, setSites] = useState([]); //An array that stores historical sites fetched from an API and a function to update the SITES state*/
  const [isLoggedIn, setIsLoggedIn] = useState(false); //A boolean that tracks whether the user is logged in and a function to update the ISLOGGEDIN state

  /*const fetchHistoricalSites = async (lat, lon) => { //defining a constant function named fetchHistoricalSites that uses ASYNC keyword as an indication that the function will use asynchronous operations and the parameters of LAT and LON
    const apiKey = 'AIzaSyD0M3Vrmw3aAzsvCVrCEMTCvf8tiH-jjlY'; // my Google API key
    const response = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lon}&radius=1500&type=historical&key=${apiKey}`);
    const data = await response.json();
    setSites(data.results);

    // Fetch from your historical database
    const dbResponse = await fetch(`https://www.archives.gov/research/databases/sites?lat=${lat}&lon=${lon}`);
    const dbData = await dbResponse.json();

    // Combine results
    const combinedSites = [...googleData.results, ...dbData.sites];
    setSites(combinedSites);

  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          fetchHistoricalSites(latitude, longitude);
        },
        (error) => {
          console.error("Error getting location", error);
        }
      );
    }
  }, [isLoggedIn])*/

  const handleLogin = (loggedIn) => {
    setIsLoggedIn(loggedIn)
  }; //updates the isLoggedIn state based on the user's login status

  /*const handleSitesFetched = (fetchedSites) => {
    setSites(fetchedSites);
  }; //updates the sites state with the sites fetched from the Location component*/

  return ( //app is using conditional rendering to check if the user is logged in
    <Router>
    <div> 
      {!isLoggedIn ? ( //if not logged in, it renders the Login component and passes the handleLogin function as a prop
      
        <Login onLogin={handleLogin} />
      ) : ( //if logged in, it renders all this loveliness:
        <>
          <br />
          <br />
          <br />
          <br />
          <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/location">Find Some History</Link></li>
                <li><Link to="/resources">More Resources</Link></li>
                

                {/* Add more navigation items as needed */}
              </ul>
            </nav>
          {/*<h1>Around You</h1>
          <h3>Are you ready for history to <span>come alive?</span></h3>*/}
          <br />
          <Routes>
              <Route 
                path="/" 
                element={<Home />}
              />
              <Route 
                path="/location" 
                element={<LocationAndNearbySites />} 
              />
              <Route 
                path="/resources" 
                element={<Resources />} 
              />
              
              
              {/* Add more routes for additional components as needed */}
            </Routes>

            
    
          </>
        )}
      </div>
    </Router>
  );
};



export default App;