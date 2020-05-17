import React, { useState, useEffect } from 'react';

// exporting in function form
export default function App() {

  const [location, setLocation] = useState({});
// using Geolocation Chrome Tools, like a eventListener
  useEffect(() => {
    navigator.geolocation.watchPosition(handleWatchPosition)
  }, [])

  function handleWatchPosition({coords}) {
    const { latitude, longitude, accuracy } = coords;
    setLocation({latitude,longitude, accuracy})
  }
// basically create a state for him to hear the location

  return ( 
   
    <>
      Latitude: {location.latitude} <br />
      Longitude: {location.longitude} <br />
      Precisão em Metros: {location.accuracy}
    </>


   );
 

}


