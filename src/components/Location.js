// Location.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLocation, clearLocation } from '../utils/locationSlice';
import LocationUpdater from '../utils/locationUpdater';
const Location = () => {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.location);
    //console.log("location.js -> "+location)
  useEffect(() => {
    const handleGetLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            dispatch(setLocation({ latitude, longitude }));
          },
          (error) => {
            console.error('Error getting location:', error.message);
          }
        );
      } else {
        console.error('Geolocation is not supported by your browser.');
      }
    };

    // Call the function to get location when the component mounts
    handleGetLocation();
  }, [dispatch]);

//   const handleClearLocation = () => {
//     // Call this function when you want to clear the location
//     dispatch(clearLocation());
//   };

  return (
    <div className='px-4 bg-[#0b1419]' >
      {location ? (
        <div>
          {/* <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p> */}
          <LocationUpdater/>
          {/* <button onClick={handleClearLocation}>Clear Location</button> */}
        </div>
      ) : (
        <p>Loading location...</p>
      )}
    </div>
  );
};

export default Location;
