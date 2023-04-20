import React from "react";
import "./CreateAd.css";
import Footer from "./../Footer/Footer";

import { Link, Outlet } from "react-router-dom";

function CreatAd() {
  return (
    <>
      <div className="sign-bg">
        <div className="search-box">
          <h2 className="form-title">Create Ad</h2>
          <div className="create-box">
            <nav className="createAd-nav">
              <Link to="details">1- Details</Link>
              <Link to="geography">2- Geography</Link>
              <Link to="pricing">3- Pricing</Link>
              <Link to="images">4- Images</Link>
              <Link to="ContactAd">5- Contact</Link>
              <Link to="save">6- Save</Link>
            </nav>
            <div className="create-steps-box">
              <Outlet />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CreatAd;
