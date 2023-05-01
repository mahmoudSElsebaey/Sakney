import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
function Footer() {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <ScrollToTop smooth top="450" />
      <footer className="bg-dark footer-sec">
        <div className="container text-white footer-content ">
          <div className="footer-about col-lg-5 col-md-6 col-sm-12">
            <h3 className="footer-logo">Sakney</h3>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Aliquid cupiditate error blanditiis
              Labore doloremque libero uos debitis in temporibus quos nulla,
              fugiat eveniet quae ab corrupti iusto! Eos.
            </p>
            <h3 className="footer-social-title">Join us on</h3>
            <div className="footer-social-icons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-whatsapp"></i>
              <i className="fab fa-google"></i>
            </div>
          </div>
          <div className="footer-navgation col-lg-2 col-md-6 col-sm-6">
            <h3>Navigation</h3>

            <ul>
              <li>
                <Link to="/Sakney" onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Sakney/apartments" onClick={handleLinkClick}>
                  Apartments
                </Link>
              </li>
              <li>
                <Link to="/Sakney/about" onClick={handleLinkClick}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/Sakney/contact" onClick={handleLinkClick}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/Sakney/search" onClick={handleLinkClick}>
                  Search
                </Link>
              </li>
              <li>
                <Link to="/Sakney/signin" onClick={handleLinkClick}>
                  Login
                </Link>
              </li>
              <li>
                <Link to="/Sakney/signup" onClick={handleLinkClick}>
                  Register
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-contact col-lg-3 col-md-6 col-sm-6">
            <h3 className="footer-contact-title">Contact Us</h3>
            <ul>
              <li>
                <Link to="https://www.google.com/search?client=firefox-b-d&q=%D9%85%D8%B5%D8%B1+%2C+%D8%A7%D9%84%D9%85%D9%86%D9%88%D9%81%D9%8A%D8%A9+%2C%D9%85%D8%B1%D9%83%D8%B2+%D8%B4%D8%A8%D9%8A%D9%86+%D8%A7%D9%84%D9%83%D9%88%D9%85">
                  <i className="fas fa-map-marker-alt"></i> Egypt / Menoufia /
                  Shbin Elkom
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fas fa-phone-volume"></i> 0482977847
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fas fa-mobile-alt"></i> 01158778950
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fas fa-envelope"></i> youremail@domain.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container Author">
          <p>
            Copyright ©2022 All rights reserved | Made by
            <Link to="#"> Graduation Team 2022-2023</Link>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
