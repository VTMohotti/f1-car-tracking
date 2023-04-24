import React, { useEffect, useState } from "react";
import "./MapStyles.css";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import CarIcon from "./../../assets/racing-car.png";
import { getFirestore, onSnapshot, where } from "firebase/firestore";
import { query, collection } from "firebase/firestore";
import { firebaseApp } from "./../../Firebase";

const Map = ({ carName = "" }) => {
  const GMAP_API_KEY = process.env.REACT_APP_GMAP_API_KEY;
  const [markers, setMarkers] = useState([{ lat: 6.906667, lng: 79.870414 }]);
  const [speed, setSpeed] = useState(0);
  const firestore = getFirestore(firebaseApp);
  const collectionName = "f1RacingLocation";

  const getLocation = (carName) => {
    const q = query(
      collection(firestore, collectionName),
      where("f1CarNo", "==", carName)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const markers = [];
      querySnapshot.forEach((doc) => {
        console.log(doc);
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
    });
  };

  useEffect(() => {
    getLocation(carName);
    console.log(carName);
  }, [carName]);

  return (
    <div name="map" className="map">
      <div className="car-details">
        <div>
          <p className="title">Speed</p>
          <p className="speed">{speed}</p>
        </div>
      </div>
      <div className="gmap">
        <LoadScript googleMapsApiKey="AIzaSyCx_X6IRR2N2Dp3OF8VbIOESkhArFZ5Oj4">
          <GoogleMap
            center={markers[0]}
            zoom={18}
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

export default Map;
