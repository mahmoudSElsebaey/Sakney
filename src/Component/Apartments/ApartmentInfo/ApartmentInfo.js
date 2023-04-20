import React, { useState } from "react";

const ApartmentInfo = ({ item, s }) => {
  const { id, name, price, image, city } = item;

  return (
    <>
      <div className="ApartmentInfo" style={{ display: s }}>
        <p>{id}</p>
        <p>{price}</p>
        <p>{city}</p>

        {/* <p style={{ display: s }}>{id}</p> */}
        {/* <button
          className="btn btn-danger"
          onClick={() => (s === "block" ? setS("none") : setS("block"))}
        >
          X
        </button> */}
      </div>
    </>
  );
};

export default ApartmentInfo;
