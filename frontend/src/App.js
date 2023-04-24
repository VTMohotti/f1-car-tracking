import React, { useCallback, useState } from "react";
import Navbar from "./components/navar/Navbar";
import Car from "./components/car/Car";
import Map from "./components/map/Map";
import LiveRacing from "./components/live_racing/LiveRacing";

function App() {
  const [carId, setCarID] = useState();

  const selectedCar = useCallback((carIdFromChild) => {
    setCarID(carIdFromChild);
  }, []);
  return (
    <>
      <Navbar />
      <Car selectedCar={selectedCar} />
      <Map carName={carId} state={carId} />
      <LiveRacing />
    </>
  );
}

export default App;
