import React from "react";
import Footer from "../Footer/Footer";
import "./Error.css";

const Error = () => {
  return (
    <>
      <div className="error-parent">
        <div className="error-child">
        <p> this Page Not Found</p>
        <a href="/"> Return to home page</a></div>
      </div>
      <Footer />
    </>
  );
};

export default Error;
