import React from "react";

const ApartmentInfo = ({ display, handelDispay, item }) => {
  const { name, price, image, city } = item;

  return (
    <>
      <div className="apartment-info" style={{ display }}>
        <button className="btn btn-danger" onClick={handelDispay}>
          X
        </button>
        <div className="container apartment-info-box">
          <p className="apartment-info-title">{name}</p>
          <div className="apartment-info-img">
            <img src={image} alt="apartmentImage" />
            <p>
              Shared apartments are often preferred by people who are looking
              for more affordable housing options or who want to live with
              others for social reasons. It can also be a good option for people
              who are new to a city and want to meet new people.
            </p>
          </div>
          <div className="apartment-more-info">
            <p>
              We have a few options available that might suit your budget. We
              have shared apartments with private bedrooms that start at around{" "}
              {price} EGP per month. These apartments typically include shared
              spaces like a living room, kitchen, and bathroom, and utilities
              like electricity and water are often split between the roommates.
              Would you like me to show you some options that might work for you
            </p>
            <p>
              We have a number of shared apartment options available in {city}{" "}
              that might fit your budget of {price} EGP per month. These
              apartments generally include private bedrooms and shared living
              spaces, and are located in different areas of the city
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApartmentInfo;
