import React from "react";
import "../../index.css";
import Footer from "../Footer/Footer";
import Apartment from "./Apartments";

function ApartmentPage() {
  let numOfItems = 3;

  return (
    <>
      <div className="header-pages-bg">
        <p>All Apartments</p>
      </div>
      <Apartment />
      <button
        className="btn btn-primary mx-auto d-block my-3 px-5 py-2 w-100 container"
        id="loadMoreBtn"
        onClick={() => {
          let cards = [...document.querySelectorAll(".card-parent")];
          // console.log(cards.length);
          for (var i = numOfItems; i < numOfItems + 3; i++) {
            cards[i].style.display = "inline-block";
          }
          numOfItems += 3;
          if (numOfItems >= cards.length) {
            this.style.display = "none !important";
            //  this.style.color = "green !important";
          }
        }}
      >
        See More
      </button>
      <Footer />
    </>
  );
}

export default ApartmentPage;
