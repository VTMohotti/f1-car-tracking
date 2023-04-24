import React from "react";

function CarButton(props) {
  return (
    <button className="car-button" onClick={props.onClick}>
      <img src={props.carImage} alt="Car" />
      <div className="car-details">
        <h3>{props.racerName}</h3>
        <p>Car #{props.carNumber}</p>
      </div>
    </button>
  );
}

export default CarButton;