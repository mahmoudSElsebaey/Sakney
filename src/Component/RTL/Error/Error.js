import React from "react";
import Footer from "../Footer/Footer";
import "./Error.css";

const Error = () => {
  return (
    <>
      <div className="error-parent">
        <div className="error-child">
          <p>هذه الصفحة غير متوفرة</p>
          <a href="/ar"> ارجع الي الصفحة الرئيسية</a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Error;
