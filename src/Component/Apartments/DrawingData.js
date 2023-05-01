import React, { useState } from "react";
import "./Apartments.css";
import ApartmentInfo from "./ApartmentInfo";

function DrawingData({ item }) {
  const { id, name, price, image, city } = item;

  const [isDisplay, setIsDisplay] = useState(true);
  const handelDispay = () => {
    setIsDisplay(!isDisplay);
  };

  const display = isDisplay ? "none" : "block";

  return (
    <>
      <div className="card-parent" key={id} onClick={handelDispay}>
        <ApartmentInfo
          display={display}
          handelDispay={handelDispay}
          item={item}
        />
        <div className="card-title">
          <h3 style={{ textAlign: "left" }}>{name}</h3>
        </div>
        <div className="card-img">
          <img src={image} alt={name} />

          <button className="card-btn">More Info</button>
        </div>
        <div className="card-info">
          <div className="card-price">
            <p> {price} EGP Per Month</p>
            <p>
              <i className="fas fa-map-marker-alt"></i> Egypt - {city}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default DrawingData;
