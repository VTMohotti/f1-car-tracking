import React, { useState } from "react";
import classes from "./CarList.module.css";
import carOne from "./../../assets/car1.png";
import carTwo from ".//../../assets/car2.png";
import carThree from ".//../../assets/car3.png";
import carFour from ".//../../assets/car4.png";
import carFive from ".//../../assets/car5.png";
import { Link } from "react-scroll";

const carImages = [carOne, carTwo, carThree, carFour, carFive];
const CarList = (props) => {
  const [nav, setNav] = useState(false);
  const [slide, setSlide] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    setSlide(!slide);
  };

  const handleClose = (carNo) => {
    console.log(carNo);
    props.selectedCar(carNo);
    setNav(!nav);
  };

  return (
    <div className={classes["car-list-container"]}>
      <div className={classes["car-list"]}>
        {props.cars.map((car, index) => (
          <Link
            key={index}
            onClick={() => handleClose(car)}
            activeClass="active"
            to="map"
            spy={true}
            smooth={true}
            duration={500}
          >
            <div className={classes["car"]}>
              <img src={carOne} alt="Car One" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CarList;
