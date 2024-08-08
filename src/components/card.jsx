import React from "react";
import "./card.css";

function Card() {
  return (
    <div className="card">
      <img
        className="card-image"
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        width={100}
        height={100}
      />
      <h2 className="card-title">Sai bro code</h2>
      <p className="card-text">Get learned</p>
    </div>
  );
}

export default Card;
