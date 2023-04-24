import React, { useEffect, useState } from "react";
import "./LiveRacingStyles.css";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import CarIcon from "./../../assets/racing-car.png";
import { getFirestore, onSnapshot } from "firebase/firestore";
import { query, collection } from "firebase/firestore";
import { firebaseApp } from "./../../Firebase";

const LiveRacing = () => {
  const GMAP_API_KEY = process.env.REACT_APP_GMAP_API_KEY;
  const [markers, setMarkers] = useState([{ lat: 6.906667, lng: 79.870414 }]);
  const [speed, setSpeed] = useState(0);
  const firestore = getFirestore(firebaseApp);
  const collectionName = "f1RacingLocation";

  const getLocation = () => {
    const q = query(collection(firestore, collectionName));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const markers = [];
      querySnapshot.forEach((doc) => {
        const lat = parseFloat(doc.data().latitude);
        const lng = parseFloat(doc.data().longitude);
        const speed = doc.data().speed;
        markers.push({
          lat,
          lng,
        });
        setSpeed(speed);
      });
      setMarkers(markers);

      console.log(markers);
    });
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div name="live" className="live">
      <div className="gmap">
        <LoadScript googleMapsApiKey="AIzaSyCx_X6IRR2N2Dp3OF8VbIOESkhArFZ5Oj4">
          <GoogleMap
            center={markers[0]}
            zoom={15}
            // mapTypeControlOptions={}
            mapContainerStyle={{ width: "100%", height: "100%" }}
            options={{
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: true,
              fullscreenControl: false,
              styles: [],
            }}
            // onLoad={map => setMap(map)},
          >
            {markers.map((marker, index) => (
              <MarkerF position={marker} icon={CarIcon} key={index} />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default LiveRacing;
