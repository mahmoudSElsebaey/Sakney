import React from "react";
import "./CreateAd.css";
import Footer from "./../Footer/Footer";

import { Link, Outlet } from "react-router-dom";

function CreatAd() {
  return (
    <>
      <div className="sign-bg" dir="rtl">
        <div className="search-box">
          <h2 className="form-title">إضافة إعلان</h2>
          <div className="create-box">
            <nav className=" createAd-nav-ar createAd-nav">
              <Link to="details">1- التفاصيل</Link>
              <Link to="geography">2- الجغرافية</Link>
              <Link to="pricing">3- التسعير</Link>
              <Link to="images">4- الصور</Link>
              <Link to="ContactAd">5- للتواصل</Link>
              <Link to="save">6- حفظ</Link>
            </nav>
            <div className="create-steps-box create-steps-box-ar">
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
