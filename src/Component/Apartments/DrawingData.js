import React from "react";
import "./Apartments.css";

function DrawingData({ item }) {
  const { id, name, price, image, city } = item;

  return (
    <div
      className="card-parent"
      key={id}
      onClick={() => {
        console.log("id = "+id);
      }}
    >
      <div className="card-title">
        <h3>{name}</h3>
      </div>
      <div className="card-img">
        <img src={image} alt={name} />
        <button className="card-btn">More Info</button>
      </div>
      <div className="card-info">
        {/* <div className="card-title">
          <h3>{name}</h3>
        </div> */}
        <div className="card-price">
          <p> {price} EGP Per Month</p>
          <p>
            <i className="fas fa-map-marker-alt"></i> Egypt - {city}
          </p>
        </div>
      </div>
    </div>
  );
}
export default DrawingData;
