import React, { useEffect, useState } from "react";
import "./CarStyles.css";
import CarList from "./CarList";
import { getFirestore, onSnapshot } from "firebase/firestore";
import { query, collection } from "firebase/firestore";
import { firebaseApp } from "./../../Firebase";

const Car = ({ selectedCar }) => {
  const firestore = getFirestore(firebaseApp);
  const collectionName = "f1RacingLocation";
  const [cars, setCars] = useState([]);

  const getCars = () => {
    const q = query(collection(firestore, collectionName));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const cars = [];
      querySnapshot.forEach((doc) => {
        const f1CarNo = doc.data().f1CarNo;
        cars.push(f1CarNo);
      });
      setCars(cars);
    });
  };

  useEffect(() => {
    getCars();
  }, []);
  return (
    <div name="car" className="car">
      <div className="container">
        <div className="top">
          <h1>Select Car</h1>
        </div>

        <CarList cars={cars} selectedCar={selectedCar} />
        <div className="bottom">
          
        </div>
      </div>
    </div>
  );
};

export default Car;
