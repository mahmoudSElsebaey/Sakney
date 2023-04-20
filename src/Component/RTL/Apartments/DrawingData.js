import React from "react";
import "./Apartments.css";

function DrawingData({ item }) {
  const { id, name, price, image ,citya} = item;

  return (
    <div className="card-parent" key={id}>
      <div className="card-title">
        <h3>{name}</h3>
      </div>
      <div className="card-img">
        <img src={image} alt={name} />
        <button className="card-btn">مزيد من المعلومات</button>
      </div>
      <div className="card-info" dir="rtl">
        {/* <div className="card-title">
          <h3>{name}</h3>
        </div> */}
        <div className="card-price">
          <p> {price} جنية شهريا</p>
          <p><i className="fas fa-map-marker-alt"></i> مصر - {citya}</p>
        </div>
      </div>
    </div>
  );
}
export default DrawingData;
